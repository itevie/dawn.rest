import { getCanvasCenter, randomRange } from "./util";
import Visual, { Coordinate, VisualOptions } from "./Visualisation";

interface EyeOptions {
  eyeWidth: number;
  eyeHeight: number;
  xParallax: number;
  yParallax: number;
  irisSize: number;
  pupilSize: number;
  blink: boolean;
  blinkEvery: number;
  blinkChance: number;
  backgroundColor: string;
  eyeOutlineColor: string;
  eyeIrisColor: string;
  eyePupilColor: string;
  fillPupil: boolean;
  fillIris: boolean;
}

export default class Eye extends Visual {
  public name: string = "Eye"
  public description: string = "It's just an eye, it's not very hypnotic, or is it? It watches you though.";

  private drawInterval: ReturnType<typeof setInterval> | undefined = undefined;
  private blinkInterval: ReturnType<typeof setInterval> | undefined = undefined;

  public getOptions(): VisualOptions {
    return {
      eyeWidth: {
        type: "number",
        rangeMin: 100,
        rangeMax: 1000,
        default: 500,
        human: "Eye Width"
      },
      eyeHeight: {
        type: "number",
        rangeMin: 25,
        rangeMax: 1000,
        default: 150,
        human: "Eye Height"
      },
      xParallax: {
        type: "number",
        rangeMin: 10,
        rangeMax: 200,
        default: 30,
        human: "X Parallax Dampen"
      },
      yParallax: {
        type: "number",
        rangeMin: 10,
        rangeMax: 200,
        default: 100,
        human: "Y Parallax Dampen"
      },
      irisSize: {
        type: "number",
        rangeMin: 30,
        rangeMax: 200,
        default: 70,
        human: "Iris Size",
      },
      pupilSize: {
        type: "number",
        rangeMin: 10,
        rangeMax: 100,
        default: 30,
        human: "Pupil Size",
      },
      blink: {
        type: "boolean",
        default: true,
        human: "Blink"
      },
      blinkEvery: {
        type: "number",
        rangeMin: 100,
        rangeMax: 5000,
        default: 1000,
        human: "Blink Speed (ms)"
      },
      blinkChance: {
        type: "number",
        rangeMin: 1,
        rangeMax: 100,
        default: 60,
        human: "Blink Chance (%)"
      },
      fillIris: {
        type: "boolean",
        default: false,
        human: "Fill Iris"
      },
      fillPupil: {
        type: "boolean",
        default: true,
        human: "Fill Pupil"
      },
      backgroundColor: {
        type: "color",
        default: "#000000",
        human: "Background Color"
      },
      eyeOutlineColor: {
        type: "color",
        default: "#FFFFFF",
        human: "Outline Color"
      },
      eyeIrisColor: {
        type: "color",
        default: "#FFFFFF",
        human: "Iris Color"
      },
      eyePupilColor: {
        type: "color",
        default: "#FF0000",
        human: "Pupil Color"
      }
    };
  }

  public draw(ctx: CanvasRenderingContext2D, options: EyeOptions): void {
    ctx.canvas.style.backgroundColor = options.backgroundColor;

    let offset: Coordinate = { x: 0, y: 0 };

    window.addEventListener("mousemove", e => {
      const center = getCanvasCenter(ctx);
      offset = {
        x: -(center.x - e.pageX),
        y: -(center.y - e.pageY),
      };
    });

    let isBlinking = false;
    let blinkTimer = 0;
    let blinkLength = 30;

    /*let pupilOffsetState: "normal" | "offsetting" | "reverting" = "normal";
    let pupilOffset = 0;
    let pupilOffsetGoal = 0;
    let pupilOffsetSpeed = 0.2;

    this.pupilOffsetInterval = setInterval(() => {
      if (pupilOffsetState !== "normal") return;
      //if (Math.random() > 0.2) return;

      pupilOffsetState = "offsetting";
      pupilOffsetGoal = randomRange(-10, 10);
      pupilOffsetSpeed = randomRange(0.1, 0.3);
    }, 1000);*/

    if (options.blink)
      this.blinkInterval = setInterval(() => {
        if (isBlinking) return;
        if (Math.random() > options.blinkChance / 100) return;

        isBlinking = true;
        blinkLength = randomRange(10, 40);
        blinkTimer = 0;
      }, options.blinkEvery);

    this.drawInterval = setInterval(() => {

      if (isBlinking)
        blinkTimer++;

      if (isBlinking && blinkTimer > blinkLength) {
        isBlinking = false;
      }

      /*if (pupilOffsetState !== "normal") {
        if (pupilOffsetState === "offsetting") {
          pupilOffset += pupilOffsetGoal < 0 ? -pupilOffsetSpeed : pupilOffsetSpeed;
          if (pupilOffset > pupilOffsetGoal) {
            pupilOffsetState = "reverting";
          }
        } else if (pupilOffsetState === "reverting") {
          pupilOffset += pupilOffset < 0 ? pupilOffsetSpeed : -pupilOffsetSpeed;
          if (parseInt(pupilOffset.toString()) === 0) {
            pupilOffsetState = "normal";
          }
        }
      }*/

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      const center = getCanvasCenter(ctx);
      center.x += offset.x / (options.xParallax * 2.5);
      center.y += offset.y / (options.yParallax * 2.5);

      const yOffset = -4;

      ctx.lineWidth = 10;

      ctx.strokeStyle = options.eyeOutlineColor;

      if (isBlinking) {
        ctx.beginPath();
        ctx.moveTo(center.x - options.eyeWidth / 2, center.y);
        ctx.lineTo(center.x + options.eyeWidth / 2, center.y);
        ctx.stroke();
        return;
      }

      // Eye outline
      ctx.beginPath();
      ctx.moveTo(center.x - options.eyeWidth / 2, center.y);
      ctx.quadraticCurveTo(center.x, center.y + options.eyeHeight, center.x + options.eyeWidth / 2, center.y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(center.x - options.eyeWidth / 2, center.y - yOffset);
      ctx.quadraticCurveTo(center.x, center.y - options.eyeHeight, center.x + options.eyeWidth / 2, center.y - yOffset);
      ctx.stroke();

      // Iris
      ctx.strokeStyle = options.eyeIrisColor;
      ctx.fillStyle = options.eyeIrisColor;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.arc(center.x + offset.x / options.xParallax, center.y + offset.y / options.yParallax, options.irisSize, 0, Math.PI * 2);
      if (options.fillIris) ctx.fill();
      ctx.stroke();

      // Pupil
      ctx.fillStyle = options.eyePupilColor;
      ctx.strokeStyle = options.eyePupilColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(center.x + offset.x / (options.xParallax * 0.5), center.y + offset.y / (options.yParallax * 0.5), options.pupilSize, 0, Math.PI * 2);
      if (options.fillPupil) ctx.fill();
      ctx.stroke();
    }, 1000 / 60);
  }

  public stop(): void {
    clearInterval(this.drawInterval);
    clearInterval(this.blinkInterval);
  }
}