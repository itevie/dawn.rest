import { getCanvasCenter, hexToRGB } from "./util";
import Visual, { Coordinate, VisualOptions } from "./Visualisation";

interface Shape {
  location: Coordinate;
  size: number;
  shape: string;
  opacity: number;
  color: string;
  rotation: number;
}

interface ShapeOptions {
  reverse: boolean;
  spawnSpeed: number;
  colors: string[];
  backgroundColor: string;
  rotationSpeed: number;
  startingRotationSpeed: number;
  shrinkSpeed: number;
  circles: boolean;
  squares: boolean;
}

export default class Shapes extends Visual {
  public name: string = "Shapes";
  public description: string = "Moving shapes";

  private shapes: (Shape | null)[] = [];
  private baseRotation = 0;
  private currentColorIndex = 0;
  private currentShapeIndex = 0;
  private allowedShapes: string[] = [];

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
        min: 20,
        max: 2000,
        default: 250,
      },
      shrinkSpeed: {
        type: "number",
        human: "Shrink Speed",
        min: 0.1,
        max: 50,
        default: 5,
      },
      rotationSpeed: {
        type: "number",
        human: "Rotation Speed",
        min: 0.1,
        max: 20,
        default: 0.5,
      },
      startingRotationSpeed: {
        type: "number",
        human: "Start Rotation Speed",
        min: 0.1,
        max: 360,
        default: 10,
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
      circles: {
        type: "boolean",
        human: "Circles?",
        default: false,
      },
      squares: {
        type: "boolean",
        human: "Squares?",
        default: true,
      },
    };
  }

  private addShape(ctx: CanvasRenderingContext2D, options: ShapeOptions): void {
    const center = getCanvasCenter(ctx);

    if (this.currentColorIndex === options.colors.length) {
      this.currentColorIndex = 0;
    }

    if (this.currentShapeIndex === this.allowedShapes.length) {
      this.currentShapeIndex = 0;
    }

    this.shapes.push({
      location: { x: center.x, y: center.y },
      size: options.reverse ? 500 : 10,
      opacity: options.reverse ? 0 : 1,
      color: options.colors[this.currentColorIndex++],
      shape: this.allowedShapes[this.currentShapeIndex++],
      rotation: this.baseRotation,
    });
  }

  public draw(ctx: CanvasRenderingContext2D, options: ShapeOptions): void {
    this.addShape(ctx, options);

    if (options.squares) this.allowedShapes.push("square");
    if (options.circles) this.allowedShapes.push("circle");
    if (this.allowedShapes.length === 0) this.allowedShapes.push("square");

    setInterval(() => {
      this.addShape(ctx, options);
      this.baseRotation += options.startingRotationSpeed;
    }, options.spawnSpeed);

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

        ctx.save();
        if (shape.shape === "square") {
          const cos = Math.cos((shape.rotation * Math.PI) / 180);
          const sin = Math.sin((shape.rotation * Math.PI) / 180);

          const x1 = shape.location.x - shape.size;
          const y1 = shape.location.y - shape.size;
          const x2 = shape.location.x + shape.size;
          const y2 = shape.location.y - shape.size;
          const x3 = shape.location.x + shape.size;
          const y3 = shape.location.y + shape.size;
          const x4 = shape.location.x - shape.size;
          const y4 = shape.location.y + shape.size;

          const nx1 =
            shape.location.x +
            (x1 - shape.location.x) * cos -
            (y1 - shape.location.y) * sin;
          const ny1 =
            shape.location.y +
            (x1 - shape.location.x) * sin +
            (y1 - shape.location.y) * cos;
          const nx2 =
            shape.location.x +
            (x2 - shape.location.x) * cos -
            (y2 - shape.location.y) * sin;
          const ny2 =
            shape.location.y +
            (x2 - shape.location.x) * sin +
            (y2 - shape.location.y) * cos;
          const nx3 =
            shape.location.x +
            (x3 - shape.location.x) * cos -
            (y3 - shape.location.y) * sin;
          const ny3 =
            shape.location.y +
            (x3 - shape.location.x) * sin +
            (y3 - shape.location.y) * cos;
          const nx4 =
            shape.location.x +
            (x4 - shape.location.x) * cos -
            (y4 - shape.location.y) * sin;
          const ny4 =
            shape.location.y +
            (x4 - shape.location.x) * sin +
            (y4 - shape.location.y) * cos;

          ctx.moveTo(nx1, ny1);
          ctx.lineTo(nx2, ny2);
          ctx.lineTo(nx3, ny3);
          ctx.lineTo(nx4, ny4);
          ctx.lineTo(nx1, ny1);
        } else if (shape.shape === "circle") {
          ctx.arc(shape.location.x, shape.location.y, shape.size, 0, 360);
        }
        ctx.fill();
        ctx.stroke();

        if (options.reverse) {
          shape.size -= options.shrinkSpeed;
          shape.opacity += 0.01;
        } else {
          shape.size += options.shrinkSpeed;
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

        shape.rotation += options.rotationSpeed;
      }

      this.shapes = this.shapes.filter((x) => x);
    }, 1000 / 60);
  }
}
