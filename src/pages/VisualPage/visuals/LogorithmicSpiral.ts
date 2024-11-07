import { getCanvasCenter } from "./util";
import Visual, { Coordinate, VisualOptions } from "./Visualisation";

interface SpiralOptions {
  scale: number;
  tightness: number;
  position: Coordinate;
  maxTheta: number;
  color: string;
  lineWidth: number;
  angleOffset: number;
}

interface SpiralVisualOptions {
  scale: number;
  tightness: number;
  colors: string[];
  backgroundColor: string;
  lineWidth: number;
  clearOnFrame: boolean;
  rotationSpeed: number;
}

export default class LogorithmicSpiral extends Visual {
  public name: string = "Logorithmic Spiral";
  public description: string = "Smooth logorithmic spiral";

  public getOptions(): VisualOptions {
    return {
      scale: {
        type: "number",
        human: "Scale",
        default: 4,
        min: 0.1,
        max: 100,
      },
      tightness: {
        type: "number",
        human: "Tightness",
        default: 0.1,
        min: 0.01,
        max: 2,
      },
      lineWidth: {
        type: "number",
        human: "Line Width",
        default: 2,
        min: 0.1,
        max: 10,
      },
      rotationSpeed: {
        type: "number",
        human: "Speed",
        default: 1,
        min: -10,
        max: 10,
      },
      colors: {
        type: "array",
        human: "Colors",
        default: ["#FFFFFF"],
        inner: {
          type: "color",
          human: "yes",
          default: "#FFFFFF",
        },
      },
      backgroundColor: {
        type: "color",
        human: "Background Color",
        default: "#000000",
      },
      clearOnFrame: {
        type: "boolean",
        default: true,
        human: "Clear On Frame",
      },
    };
  }

  public getPresets(): { [key: string]: any } {
    return {
      "Tunnel Vision": {
        scale: 4,
        tightness: 0.01,
        colors: ["#FFFFFF", "#000000"],
        backgroundColor: "#000000",
        clearOnFrame: false,
      },
      Alternating: {
        colors: ["#FFFFFF", "#000000"],
        clearOnFrame: false,
      },
    };
  }

  drawSpiral(ctx: CanvasRenderingContext2D, options: SpiralOptions): void {
    ctx.save();
    ctx.beginPath();

    for (let theta = 0; theta < options.maxTheta; theta += 0.01) {
      const r = options.scale * Math.exp(options.tightness * theta);
      const x = options.position.x + r * Math.cos(theta + options.angleOffset);
      const y = options.position.y + r * Math.sin(theta + options.angleOffset);

      if (theta === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.strokeStyle = options.color;
    ctx.lineWidth = options.lineWidth;
    ctx.stroke();
    ctx.restore();
  }

  public draw(
    ctx: CanvasRenderingContext2D,
    options: SpiralVisualOptions
  ): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    let rotation = 0;
    let colorIndex = 0;

    this.interval = setInterval(() => {
      if (options.clearOnFrame)
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.drawSpiral(ctx, {
        scale: options.scale,
        tightness: options.tightness,
        position: getCanvasCenter(ctx),
        maxTheta: 200 * Math.PI,
        color: options.colors[colorIndex],
        lineWidth: options.lineWidth,
        angleOffset: rotation,
      });
      rotation += options.rotationSpeed / 10;

      if (
        options.rotationSpeed > 0
          ? rotation >= Math.PI * 2
          : rotation <= -(Math.PI * 2)
      ) {
        rotation = 0;
        colorIndex =
          colorIndex >= options.colors.length - 1 ? 0 : colorIndex + 1;
      }
    }, 1000 / 60);
  }
}
