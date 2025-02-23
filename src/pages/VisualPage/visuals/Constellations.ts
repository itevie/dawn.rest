import {
  calculateDistance,
  coordinateMoveBy,
  isOffScreen,
  randomCoordinate,
  randomRange,
} from "./util";
import Visual, { Coordinate, VisualOptions } from "./Visualisation";

interface Dot {
  position: Coordinate;
  angle: number;
}

interface Options {
  amount: number;
  size: number;
  speed: number;
  connectionLength: number;
  connectionWidth: number;
  showDots: boolean;
  dotColor: string;
  backgroundColor: string;
  connectionColor: string;
}

export default class Constellations extends Visual {
  public name: string = "Constellations";
  public description: string = "Dots connecting with eachother.";

  public getOptions(): VisualOptions {
    return {
      amount: {
        type: "number",
        human: "Amount",
        default: 25,
        min: 1,
        max: 100,
      },
      size: {
        type: "number",
        human: "Dot Size",
        default: 10,
        min: 0.1,
        max: 100,
      },
      speed: {
        type: "number",
        human: "Speed",
        default: 0.6,
        min: 0.1,
        max: 5,
      },
      connectionLength: {
        type: "number",
        human: "Connection Length",
        default: 200,
        min: 10,
        max: 1000,
      },
      connectionWidth: {
        type: "number",
        human: "Connection Width",
        default: 3,
        min: 0.1,
        max: 10,
      },
      showDots: {
        type: "boolean",
        human: "Show Dots",
        default: true,
      },
      dotColor: {
        type: "color",
        human: "Dot Color",
        default: "#FFFFFF",
      },
      backgroundColor: {
        type: "color",
        human: "Background Color",
        default: "#000000",
      },
      connectionColor: {
        type: "color",
        human: "Connection Color",
        default: "#222222",
      },
    };
  }

  public getPresets(): { [key: string]: any } {
    return {};
  }

  private dots: Dot[] = [];

  private addDot(ctx: CanvasRenderingContext2D) {
    this.dots.push({
      position: randomCoordinate(ctx),
      angle: randomRange(0, 360),
    });
  }

  public draw(ctx: CanvasRenderingContext2D, options: Options): void {
    ctx.canvas.style.backgroundColor = options.backgroundColor;

    for (let i = 0; i !== options.amount; i++) this.addDot(ctx);

    this.interval = setInterval(() => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      for (let dot of this.dots) {
        for (let dot2 of this.dots) {
          if (dot2 === dot) continue;
          if (
            calculateDistance(dot.position, dot2.position) <
            options.connectionLength
          ) {
            ctx.beginPath();
            ctx.lineWidth = options.connectionWidth;
            ctx.strokeStyle = options.connectionColor;
            ctx.moveTo(dot.position.x, dot.position.y);
            ctx.lineTo(dot2.position.x, dot2.position.y);
            ctx.stroke();
          }
        }

        if (options.showDots) {
          ctx.fillStyle = options.dotColor;
          ctx.fillRect(
            dot.position.x,
            dot.position.y,
            options.size,
            options.size
          );
        }
        coordinateMoveBy(dot.position, dot.angle, options.speed);

        if (isOffScreen(dot.position, ctx)) {
          this.dots[this.dots.indexOf(dot)] = {
            position: randomCoordinate(ctx),
            angle: randomRange(0, 360),
          };
        }
      }
    }, 60 / 1000);
  }
}
