import { getCanvasCenter, hexToRGB } from "./util";
import Visual, { Coordinate, VisualOptions } from "./Visualisation";

interface Shape {
  location: Coordinate;
  size: number;
  opacity: number;
  color: string;
}

interface ShapeOptions {
  reverse: boolean;
  spawnSpeed: number;
  colors: string[];
  backgroundColor: string;
}

export default class Shapes extends Visual {
  public name: string = "Shapes";
  public description: string = "Moving shapes";

  private shapes: (Shape | null)[] = [];

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
        min: 100,
        max: 2000,
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

  private addShape(ctx: CanvasRenderingContext2D, options: ShapeOptions): void {
    const center = getCanvasCenter(ctx);
    this.shapes.push({
      location: { x: center.x, y: center.y },
      size: options.reverse ? 1000 : 10,
      opacity: options.reverse ? 0 : 1,
      color: "#FF0000",
    });
  }

  public draw(ctx: CanvasRenderingContext2D, options: ShapeOptions): void {
    this.addShape(ctx, options);

    setInterval(() => {
      this.addShape(ctx, options);
    }, 200);

    setInterval(() => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      for (const shape of this.shapes as Shape[]) {
        const index = this.shapes.indexOf(shape);
        /*drawHeart(
          ctx,
          heart.location.x,
          heart.location.y,
          heart.size,
          heart.size,
          hexToRGB(heart.color, heart.opacity),
        );*/
        ctx.beginPath();
        ctx.strokeStyle = hexToRGB(shape.color, shape.opacity);
        ctx.fillStyle = hexToRGB(shape.color, shape.opacity);
        ctx.lineWidth = 5;
        ctx.arc(shape.location.x, shape.location.y, shape.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        if (options.reverse) {
          shape.size -= 20;
          shape.opacity += 0.01;
        } else {
          shape.size += 20;
          shape.opacity -= 0.01;
        }

        if (options.reverse && shape.opacity > 1) {
          this.shapes[index] = null;
        }
        if (!options.reverse && shape.opacity < 0) {
          this.shapes[index] = null;
        }
        if (shape.size < 0) {
          this.shapes[index] = null;
        }
      }

      this.shapes = this.shapes.filter((x) => x);
    }, 1000 / 60);
  }
}
