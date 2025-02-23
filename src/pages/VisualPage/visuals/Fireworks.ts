import { hexToRGB, randomRange } from "./util";
import Visual, { Coordinate, VisualOptions } from "./Visualisation";
import tinycolor from "tinycolor2";

interface FireworkFragment {
  position: Coordinate;
  angle: number;
  life: number;
  maxLife: number;
  speed: number;
  color: string;
}

interface Firework {
  position: Coordinate;
  direction: number;
  exponent: number;
  fragments: (FireworkFragment | null)[];
  yDeath: number;
  color: string;
}

interface Options {
  colors: string[];
  spawnSpeed: number;
  maxBurst: number;
  spawnChance: number;
  maxFragments: number;
  backgroundColor: string;
  maxFragmentLife: number;
  maxFragmentSpeed: number;
  useTrailColor: boolean;
  trailColor: string;
  spread: number;
  xDeviation: number;
}

export default class Fireworks extends Visual {
  public name = "Fireworks";
  public description: string = "Fireworks go boom";

  private fireworks: (Firework | null)[] = [];

  private spawnTimer: ReturnType<typeof setInterval> | undefined = undefined;
  private drawTimer: ReturnType<typeof setInterval> | undefined = undefined;

  private opacityChange = 0.2;

  public getOptions(): VisualOptions {
    return {
      spawnSpeed: {
        type: "number",
        human: "Spawn Speed (ms)",
        min: 50,
        max: 1000,
        default: 200,
      },
      spawnChance: {
        type: "number",
        human: "Spawn Chance",
        min: 10,
        max: 100,
        default: 80,
      },
      xDeviation: {
        type: "number",
        human: "Spawn Deviation",
        min: 0,
        max: 500,
        default: 100,
      },
      spread: {
        type: "number",
        human: "Spread",
        min: 5,
        default: 30,
        max: 100,
      },
      maxBurst: {
        type: "number",
        human: "Max Burst",
        min: 1,
        max: 10,
        default: 5,
      },
      maxFragments: {
        type: "number",
        human: "Max Fragments",
        default: 15,
        min: 5,
        max: 200,
      },
      maxFragmentLife: {
        type: "number",
        human: "Fragment Life",
        default: 70,
        min: 10,
        max: 200,
      },
      maxFragmentSpeed: {
        type: "number",
        human: "Fragment Speed",
        default: 5,
        min: 1,
        max: 15,
      },
      backgroundColor: {
        type: "color",
        default: "#000000",
        human: "Background Color",
      },
      colors: {
        type: "array",
        human: "Colors",
        default: ["#FF0000"],
        inner: {
          type: "color",
          human: "Yes",
          default: "#FF0000",
        },
      },
      useTrailColor: {
        type: "boolean",
        human: "Use Trail Color",
        default: true,
      },
      trailColor: {
        type: "color",
        default: "#FFFFFF",
        human: "Trail Color",
      },
    };
  }

  public override getPresets(): { [key: string]: any } {
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
      circles: {
        maxFragmentSpeed: 1,
        maxFragmentLife: 200,
        maxFragments: 50,
      },
    };
  }

  private addFirework(ctx: CanvasRenderingContext2D, options: Options) {
    this.fireworks.push({
      position: {
        x:
          ctx.canvas.width / 2 +
          randomRange(-options.xDeviation, options.xDeviation),
        y: ctx.canvas.height + 50,
      },
      direction: randomRange(-options.spread, options.spread) / 100,
      exponent: 0,
      fragments: [],
      yDeath: randomRange(100, 400),
      color: options.colors[Math.floor(Math.random() * options.colors.length)],
    });
  }

  public draw(context: CanvasRenderingContext2D, options: Options): void {
    context.canvas.style.backgroundColor = options.backgroundColor;
    this.addFirework(context, options);

    this.spawnTimer = setInterval(() => {
      if (Math.random() < options.spawnChance / 100) {
        const amount = randomRange(1, options.maxBurst);
        for (let i = 0; i !== amount; i++) {
          this.addFirework(context, options);
        }
      }
    }, options.spawnSpeed);

    this.drawTimer = setInterval(() => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      for (const firework of this.fireworks as Firework[]) {
        // Check if the firework is dead
        if (firework.position.y < firework.yDeath) {
          // Check if it is newly dead
          if (firework.fragments.length === 0) {
            // Add many fragments
            const fragmentAmount = randomRange(5, options.maxFragments);
            for (let i = 0; i !== fragmentAmount; i++) {
              firework.fragments.push({
                position: { ...firework.position },
                angle: randomRange(0, 360),
                life: 0,
                maxLife: randomRange(10, options.maxFragmentLife),
                speed: randomRange(1, options.maxFragmentSpeed),
                color: (Math.random() > 0.5
                  ? tinycolor(firework.color).lighten(randomRange(10, 50))
                  : tinycolor(firework.color).darken(randomRange(10, 50))
                ).toHexString(),
              });
            }
          }

          // Render fragments
          for (const fragment of firework.fragments as FireworkFragment[]) {
            context.fillStyle = fragment.color;

            // Check if the fradgment is almost dying (fade it out)
            if (fragment.life > fragment.maxLife) {
              const opacity =
                (fragment.life - fragment.maxLife) / (this.opacityChange * 100);
              context.fillStyle = hexToRGB(fragment.color, 1 - opacity);
            }

            context.fillRect(fragment.position.x, fragment.position.y, 5, 5);

            const rad = (fragment.angle * Math.PI) / 180;
            fragment.position.x += Math.cos(rad) * fragment.speed;
            fragment.position.y += Math.sin(rad) * fragment.speed;
            fragment.life++;

            // Check if to kill it
            if (fragment.life > fragment.maxLife + this.opacityChange * 100) {
              firework.fragments[firework.fragments.indexOf(fragment)] = null;
            }
          }

          firework.fragments = firework.fragments.filter((x) => x);

          // Check if the firework is actually dead
          if (firework.fragments.length === 0) {
            this.fireworks[this.fireworks.indexOf(firework)] = null;
          }

          continue;
        }

        context.fillStyle = options.useTrailColor
          ? options.trailColor
          : firework.color;
        context.fillRect(firework.position.x, firework.position.y, 10, 10);

        firework.position.y -= 10;
        firework.position.x += firework.exponent;
        firework.exponent += firework.direction;
      }

      this.fireworks = this.fireworks.filter((x) => x);
    }, 1000 / 60);
  }

  public override stop(): void {
    clearInterval(this.drawTimer);
    clearInterval(this.spawnTimer);
  }
}
