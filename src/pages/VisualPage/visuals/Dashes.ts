import { hexToRGB, randomBoolean, randomCoordinate, randomRange } from "./util";
import Visual, { Coordinate, VisualOptions } from "./Visualisation";

interface Dash {
  position: Coordinate;
  direction: Coordinate;
  previousPoints: Coordinate[];
  lifespan: number;
  life: number;
  size: number;
  opacity: number;
  color: string;
}

interface DashOptions {
  spawnSpeed: number;
  maxLifespan: number;
  colors: string[];
  backgroundColor: string;
  size: number;
  diagonals: boolean;
}

export default class Dashes extends Visual {
  public name = "Dashes";
  public description: string = "Dashes dashing with dashing dashes";

  private timer: ReturnType<typeof setInterval> | undefined = undefined;
  private spawnTimer: ReturnType<typeof setInterval> | undefined = undefined;
  private dashes: Dash[] = [];
  private currentColorIndex = 0;

  public override getOptions(): VisualOptions {
    return {
      spawnSpeed: {
        type: "number",
        human: "Spawn Rate (ms)",
        default: 100,
        rangeMin: 10,
        rangeMax: 1000,
      },
      maxLifespan: {
        type: "number",
        human: "Max Length",
        default: 100,
        rangeMin: 20,
        rangeMax: 100,
      },
      size: {
        type: "number",
        human: "Size",
        default: 10,
        rangeMin: 5,
        rangeMax: 100,
      },
      diagonals: {
        type: "boolean",
        human: "Diagonals",
        default: false,
      },
      backgroundColor: {
        type: "color",
        default: "#000000",
        human: "Background",
      },
      colors: {
        type: "array",
        human: "Colors",
        default: ["#FFFFFF"],
        inner: {
          type: "color",
          human: "Yes",
          default: "#FFFFFF",
        },
      },
    };
  }

  public override getPresets(): { [key: string]: any } {
    return {
      matrix: {
        maxLifespan: 10,
        spawnSpeed: 10,
        colors: ["#00FF00"],
      },
    };
  }

  public addDash(context: CanvasRenderingContext2D, options: DashOptions) {
    let directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    if (!options.diagonals) {
      directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];
    }
    const direction = directions[Math.floor(Math.random() * directions.length)];

    if (this.currentColorIndex === options.colors.length) {
      this.currentColorIndex = 0;
    }

    this.dashes.push({
      position: randomCoordinate(context),
      direction: {
        x: direction[0],
        y: direction[1],
      },
      previousPoints: [],
      lifespan: randomRange(20, options.maxLifespan),
      life: 0,
      size: options.size,
      opacity: 1,
      color: options.colors[this.currentColorIndex],
    });

    this.currentColorIndex++;
  }

  public override draw(
    ctx: CanvasRenderingContext2D,
    options: DashOptions,
  ): void {
    ctx.canvas.style.backgroundColor = options.backgroundColor;

    this.addDash(ctx, options);

    this.spawnTimer = setInterval(() => {
      this.addDash(ctx, options);
    }, options.spawnSpeed);

    this.timer = setInterval(() => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      for (const dash of this.dashes) {
        // Draw head
        if (dash.life < dash.lifespan) {
          ctx.fillStyle = hexToRGB(dash.color, dash.opacity);
          ctx.fillRect(dash.position.x, dash.position.y, dash.size, dash.size);
        }

        for (const i in dash.previousPoints) {
          ctx.fillStyle = hexToRGB(dash.color, 0 + (parseInt(i) / 50));
          ctx.fillRect(
            dash.previousPoints[i].x,
            dash.previousPoints[i].y,
            dash.size,
            dash.size,
          );
        }

        // Check if dead
        if (dash.life > dash.lifespan && dash.previousPoints.length === 0) {
          this.dashes[this.dashes.indexOf(dash)] = null as any;
          continue;
        }

        if (dash.life > dash.lifespan) {
          dash.previousPoints.shift();
          for (const p of dash.previousPoints) {
            p.x += dash.direction.x * dash.size;
            p.y += dash.direction.y * dash.size;
          }
          continue;
        }

        // Modify
        dash.previousPoints.push({ ...dash.position });
        dash.position.x += dash.direction.x * dash.size;
        dash.position.y += dash.direction.y * dash.size;
        dash.life++;
      }
      this.dashes = this.dashes.filter((x) => x);
    }, 1000 / 60);
  }

  public override stop() {
    clearInterval(this.timer);
    clearInterval(this.spawnTimer);
  }
}
