import { getCanvasCenter } from "./util";
import Visual, { VisualOptions } from "./Visualisation";

type SpiralOptions = { spinSpeed: number, reverse: boolean, segments: number, colors: string[], backgroundColor: string };

export default class Spiral extends Visual {
    public name = "Spiral";
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
                rangeMin: 0.01,
                rangeMax: 0.6,
                default: 0.2,
            },
            segments: {
                type: "number",
                human: "Segments",
                default: 0,
                rangeMin: -32,
                rangeMax: 32,
            },
            reverse: {
                type: "boolean",
                human: "Reverse",
                default: false,
            },
            backgroundColor: {
                type: "color",
                human: "Background",
                default: "#000000"
            },
            colors: {
                type: "array",
                human: "Colors",
                default: ["#FFFFFF"],
                inner: {
                    type: "color",
                    default: "#FFFFFF",
                    human: "Yes"
                }
            }
        };
    }

    public override getPresets(): { [key: string]: { [key: string]: any } } {
        return {
            sinkhole: {
                spinSpeed: 0.2,
                segments: 20,
            },
            staircase: {
                colors: ["#FFFFFF", "#cccccc", "#b3b3b3", "#8a8a8a", "#5c5c5c", "#404040", "#2b2b2b", "#141414"],
                spinSpeed: 0.01,
                reverse: true,
            }
        }
    }

    public override draw(ctx: CanvasRenderingContext2D, options: SpiralOptions): void {
        ctx.canvas.style.backgroundColor = options.backgroundColor;

        this.interval = setInterval(() => {
            this.radius = 0;
            this.angleOffset += options.reverse ? -options.spinSpeed : options.spinSpeed;
            this.angle = this.angleOffset;
            ctx.lineWidth = 1;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            this.drawFrame(ctx, options);
        }, 1000 / this.fps);
    }

    public drawFrame(ctx: CanvasRenderingContext2D, options: SpiralOptions): void {
        const { x: centerX, y: centerY } = getCanvasCenter(ctx);
        let [previousX, previousY] = [centerX, centerY];

        for (let i = 0; i < 20000; i++) {
            ctx.beginPath();
            const x = centerX + this.radius * Math.cos(this.angle);
            const y = centerY + this.radius * Math.sin(this.angle);

            ctx.lineWidth = Math.max(1, this.radius / 15);

            ctx.moveTo(previousX, previousY);
            ctx.lineTo(x, y);
            previousX = x; previousY = y;

            this.angle += this.angleIncrement;
            this.radius += this.radiusIncrement;

            const color = options.colors[i % options.colors.length];

            if (options.segments < 0) {
                ctx.strokeStyle = "transparent";
                if (i % options.segments) ctx.strokeStyle = color;
            } else {
                ctx.strokeStyle = color;;
                if (i % options.segments) ctx.strokeStyle = "transparent";
            }
            ctx.stroke();
        }
    }
}