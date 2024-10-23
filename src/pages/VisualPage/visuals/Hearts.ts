import { getCanvasCenter, hexToRGB } from "./util";
import Visual, { Coordinate, VisualOptions } from "./Visualisation";

interface Heart {
  location: Coordinate;
  size: number;
  opacity: number;
  color: string;
}

type HeartOptions = {
  reverse: boolean;
  spawnSpeed: number;
  colors: string[];
  backgroundColor: string;
};

export default class Hearts extends Visual {
  public name = "Hearts";
  public description = "Hearts fading in or out";

  private hearts: (Heart | null)[] = [];
  private spawnHeartInterval: ReturnType<typeof setInterval> | undefined =
    undefined;
  private renderFrameInterval: ReturnType<typeof setInterval> | undefined =
    undefined;
  private currentColorIndex = 0;

  public getOptions(): VisualOptions {
    return {
      reverse: {
        type: "boolean",
        human: "Reverse",
        default: true,
      },
      spawnSpeed: {
        type: "number",
        human: "Rate (ms)",
        rangeMin: 100,
        rangeMax: 2000,
        default: 250,
      },
      backgroundColor: {
        type: "color",
        human: "Backgrond",
        default: "#000000",
      },
      colors: {
        type: "array",
        human: "Colors",
        default: ["#FF0000"],
        inner: {
          type: "color",
          default: "#FF0000",
          human: "Yes",
        },
      },
    };
  }

  public getPresets(): { [key: string]: any; } {
    return {
      rainbow: {
        colors: [
          "#FF0018",
          "#FFA52C",
          "#FFFF41",
          "#008018",
          "#0000F9",
          "#86007D",
        ],
      },
    }
  }

  private addHeart(ctx: CanvasRenderingContext2D, options: HeartOptions): void {
    const { x, y } = getCanvasCenter(ctx);
    if (this.currentColorIndex === options.colors.length) {
      this.currentColorIndex = 0;
    }

    this.hearts.push({
      location: { x, y: options.reverse ? y - 10 * (1 / 0.01) : y },
      size: options.reverse ? 20 * (1 / 0.01) : 50,
      opacity: options.reverse ? 0 : 1,
      color: options.colors[this.currentColorIndex],
    });
    this.currentColorIndex++;
  }

  public draw(ctx: CanvasRenderingContext2D, options: HeartOptions): void {
    ctx.canvas.style.backgroundColor = options.backgroundColor;
    this.addHeart(ctx, options);

    this.spawnHeartInterval = setInterval(() => {
      this.addHeart(ctx, options);
    }, options.spawnSpeed);

    this.renderFrameInterval = setInterval(() => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      for (const heart of this.hearts as Heart[]) {
        const index = this.hearts.indexOf(heart);
        drawHeart(
          ctx,
          heart.location.x,
          heart.location.y,
          heart.size,
          heart.size,
          hexToRGB(heart.color, heart.opacity),
        );

        if (options.reverse) {
          heart.size -= 20;
          heart.location.y += 10;
          heart.opacity += 0.01;
        } else {
          heart.size += 20;
          heart.location.y -= 10;
          heart.opacity -= 0.01;
        }

        if (options.reverse && heart.opacity > 1) {
          this.hearts[index] = null;
        }
        if (!options.reverse && heart.opacity < 0) {
          this.hearts[index] = null;
        }
      }
      this.hearts = this.hearts.filter((x) => x);
    }, 1000 / 60);
  }

  public override stop(): void {
    clearInterval(this.renderFrameInterval);
    clearInterval(this.spawnHeartInterval);
  }
}

/**
 * @copyright https://stackoverflow.com/a/58333880
 */
function drawHeart(
  ctx: CanvasRenderingContext2D,
  fromx: number,
  fromy: number,
  lw: number,
  hlen: number,
  color: string,
) {
  let x = fromx;
  let y = fromy;
  let width = lw;
  let height = hlen;

  ctx.save();
  ctx.beginPath();
  let topCurveHeight = height * 0.3;
  ctx.moveTo(x, y + topCurveHeight);
  // top left curve
  ctx.bezierCurveTo(
    x,
    y,
    x - width / 2,
    y,
    x - width / 2,
    y + topCurveHeight,
  );

  // bottom left curve
  ctx.bezierCurveTo(
    x - width / 2,
    y + (height + topCurveHeight) / 2,
    x,
    y + (height + topCurveHeight) / 2,
    x,
    y + height,
  );

  // bottom right curve
  ctx.bezierCurveTo(
    x,
    y + (height + topCurveHeight) / 2,
    x + width / 2,
    y + (height + topCurveHeight) / 2,
    x + width / 2,
    y + topCurveHeight,
  );

  // top right curve
  ctx.bezierCurveTo(
    x + width / 2,
    y,
    x,
    y,
    x,
    y + topCurveHeight,
  );

  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}
