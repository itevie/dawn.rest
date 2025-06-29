import { maxHeaderSize } from "http";
import {
  hexToRGB,
  randomRange,
  randomRangeDecimal,
} from "../../../dawn-ui/util";
import LogorithmicSpiral from "./LogorithmicSpiral";
import { randomCoordinate } from "./util";
import Visual, {
  Coordinate,
  VisualOption,
  VisualOptions,
} from "./Visualisation";

interface Star {
  position: Coordinate;
  age: number;
  maxAge: number;
  size: number;
  death: number;
}

interface Options {
  spiral: boolean;
  spiralSpeed: number;
}

export default class Twilight extends Visual {
  public name = "Trancy Twilight";
  public description = "A Twilight night sky";

  public getOptions(): VisualOptions {
    return {
      spiral: {
        type: "boolean",
        default: true,
        human: "Show Spiral",
      },
      spiralSpeed: {
        type: "number",
        default: 1,
        human: "Spiral Speed",
        min: 1,
        max: 100,
      },
    };
  }

  public draw(ctx: CanvasRenderingContext2D, options: Options): void {
    let time = 0;
    let stars: Star[] = [];
    let angle = 0;

    this.interval = setInterval(() => {
      // Background Gradient
      const { width, height } = ctx.canvas;
      const gradient = ctx.createLinearGradient(0, 0, 0, height);

      const colors = [
        [0, "#2A1933"],
        [0.1, "#3E2845"],
        [0.3, "#6B4C6C"],
        [0.5, "#AB759C"],
        [0.6, "#C893B3"],
        [0.8, "#F58C68"],
        [1, "#E24641"],
      ] as const;
      for (const i of colors) {
        gradient.addColorStop(i[0], i[1]);
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Stars
      let amount = randomRange(1, 5);
      for (let i = 0; i != amount; i++)
        stars.push({
          position: {
            x: randomCoordinate(ctx).x,
            y:
              Math.random() > 0.9
                ? randomRange(0, ctx.canvas.height)
                : randomRange(0, ctx.canvas.height / 1.5),
          },
          age: 0,
          maxAge: randomRange(100, 700),
          size: randomRangeDecimal(0.1, 3),
          death: randomRange(50, 150),
        });

      for (const star of stars) {
        let opacity =
          star.age > star.maxAge - star.death
            ? (star.maxAge - star.age) / 100
            : 1;
        ctx.fillStyle = hexToRGB("#FFFFFF", opacity);
        ctx.fillRect(star.position.x, star.position.y, star.size, star.size);
        star.age++;
      }

      stars = stars.filter((x) => x.age < x.maxAge);

      if (options.spiral) {
        LogorithmicSpiral.drawSpiral(ctx, {
          scale: 8,
          lineWidth: 80,
          tightness: 0.15,
          position: {
            x: ctx.canvas.width / 2,
            y: ctx.canvas.height / 2,
          },
          maxTheta: 80,
          color: "#FFFFFF55",
          angleOffset: angle,
        });
        angle += options.spiralSpeed / 100;
      }

      // "mountains"
      const waveHeight = 100;
      const waveAmplitude = 20;
      const waveFrequency = 0.02;
      const offsetY = height - waveHeight;

      ctx.beginPath();
      ctx.moveTo(0, offsetY);

      for (let x = 0; x <= width; x++) {
        const y =
          offsetY +
          Math.sin(x * waveFrequency + time) * waveAmplitude * 0.5 +
          Math.sin(x * waveFrequency * 2 + time * 1.5) * waveAmplitude * 0.3 +
          Math.sin(x * waveFrequency * 0.5 + time * 0.8) * waveAmplitude * 0.2;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      ctx.fillStyle = "#000";
      ctx.fill();

      // Update the time for animation
      time += 0.005;
    }, this.fps / 100);
  }
}
