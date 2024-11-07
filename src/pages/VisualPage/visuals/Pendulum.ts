import { getCanvasCenter } from "./util";
import Visual, { Coordinate, VisualOptions } from "./Visualisation";

interface PendulumOptions {
  multiplier: number;
  rodLength: number;
  ballSize: number;
  y: number;
  rodColor: string;
  ballColor: string;
  backgroundColor: string;
}

export default class Pendulum extends Visual {
  public name: string = "Pendulum";
  public description: string = "Swinging back and fourth";

  public getPresets(): { [key: string]: any } {
    return {};
  }

  public getOptions(): VisualOptions {
    return {
      multiplier: {
        type: "number",
        human: "Acceleration",
        default: 2,
        min: 0.1,
        max: 10,
      },
      rodLength: {
        type: "number",
        human: "Length",
        default: 400,
        min: 50,
        max: 600,
      },
      ballSize: {
        type: "number",
        human: "Ball Size",
        default: 50,
        min: 1,
        max: 300,
      },
      y: {
        type: "number",
        human: "Y",
        default: 150,
        min: 0,
        max: 300,
      },
      rodColor: {
        type: "color",
        human: "Rod Color",
        default: "#FFFFFF",
      },
      ballColor: {
        type: "color",
        human: "Ball Color",
        default: "#FFFFFF",
      },
      backgroundColor: {
        type: "color",
        human: "Background Color",
        default: "#000000",
      },
    };
  }

  public draw(ctx: CanvasRenderingContext2D, options: PendulumOptions): void {
    let currentAngle = 0;
    let acceleration = 0;
    let direction: "left" | "right" = "left";
    let multiplier = options.multiplier / 10;

    this.interval = setInterval(() => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      let center = getCanvasCenter(ctx);

      let thing = (Math.PI * currentAngle) / 180;
      let position: Coordinate = {
        x: center.x + options.rodLength * Math.cos(thing),
        y: 200 + options.rodLength * Math.sin(thing),
      };

      // Line
      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.strokeStyle = options.rodColor;
      ctx.moveTo(center.x, options.y);
      ctx.lineTo(position.x, position.y);
      ctx.stroke();

      // Ball
      ctx.beginPath();
      ctx.strokeStyle = options.ballColor;
      ctx.arc(position.x, position.y, options.ballSize, 0, 360);
      ctx.fillStyle = options.ballColor;
      ctx.fill();
      ctx.stroke();

      if (currentAngle >= 180) {
        direction = "right";
        //acceleration = 0;
      } else if (currentAngle <= 0) {
        direction = "left";
        //acceleration = 0;
      }

      if (direction === "left") {
        acceleration += currentAngle < 90 ? multiplier : -multiplier;
      } else {
        acceleration += currentAngle >= 90 ? -multiplier : multiplier;
      }

      currentAngle += acceleration;
    }, 1000 / 60);
  }

  public stop(): void {
    clearInterval(this.interval);
  }
}
