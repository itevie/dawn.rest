import { getCanvasCenter } from "./util";
import Visual, { VisualOptions } from "./Visualisation";

type SpiralOptions = {
  spinSpeed: number;
  reverse: boolean;
  segments: number;
  color: string;
  backgroundColor: string;
};

export default class CircleSpiral extends Visual {
  public name = "Circle Spiral";
  public description = "Simple rotating spiral";

  private angle: number = 0;
  private angleOffset: number = 0;
  private radius: number = 0;

  private angleIncrement: number = 0.01;
  private radiusIncrement: number = 0.1;

  public override getOptions(): VisualOptions {
    return {
      spinSpeed: {
        type: "number",
        human: "Spin Speed",
        min: 0.01,
        max: 0.6,
        default: 0.2,
      },
      reverse: {
        type: "boolean",
        human: "Reverse",
        default: false,
      },
      backgroundColor: {
        type: "color",
        human: "Background",
        default: "#000000",
      },
      color: {
        type: "color",
        default: "#FFFFFF",
        human: "Color",
      },
    };
  }

  public override getPresets(): { [key: string]: { [key: string]: any } } {
    return {};
  }

  public override draw(
    ctx: CanvasRenderingContext2D,
    options: SpiralOptions
  ): void {
    ctx.canvas.style.backgroundColor = options.backgroundColor;

    this.interval = setInterval(() => {
      this.radius = 0;
      this.angleOffset += options.reverse
        ? -options.spinSpeed
        : options.spinSpeed;
      this.angle = this.angleOffset;
      ctx.lineWidth = 1;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.drawFrame(ctx, options);
    }, 1000 / this.fps);
  }

  public drawFrame(
    ctx: CanvasRenderingContext2D,
    options: SpiralOptions
  ): void {
    const { x: centerX, y: centerY } = getCanvasCenter(ctx);
    let [previousX, previousY] = [centerX, centerY];

    for (let i = 0; i < 20000; i++) {
      ctx.beginPath();
      const x = centerX + this.radius * Math.cos(this.angle);
      const y = centerY + this.radius * Math.sin(this.angle);

      //ctx.lineWidth = Math.max(1, this.radius / 15);

      ctx.moveTo(previousX, previousY);
      //ctx.lineTo(x, y);
      previousX = x;
      previousY = y;

      this.angle += this.angleIncrement;
      this.radius += this.radiusIncrement;

      ctx.fillStyle = "white";
      ctx.arc(x, y, 5, 0, 350);

      ctx.strokeStyle = options.color;
      ctx.stroke();
    }
    ctx.fill();
  }
}
