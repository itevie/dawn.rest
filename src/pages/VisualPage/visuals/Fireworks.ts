import Visual, { Coordinate, VisualOptions } from "./Visualisation";

interface Firework {
  position: Coordinate;
  direction: number;
}

export default class Fireworks extends Visual {
  public name = "Fireworks";
  public description: string = "";

  private fireworks: Firework[] = [];

  public getOptions(): VisualOptions {
    return {};
  }

  private addFirework(ctx: CanvasRenderingContext2D) {
    this.fireworks.push({
      position: { x: ctx.canvas.width / 2, y: ctx.canvas.height },
      direction: 0.2,
    });
  }

  public draw(context: CanvasRenderingContext2D, options: any): void {
    let [x, y] = [context.canvas.width / 2, context.canvas.height];

    context.fillStyle = "#FFFFFF";
    let i = 0;
    setInterval(() => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.fillRect(x, y - 50, 10, 10);
      y -= 10;
      x += i;
      i += 0.2;
    }, 1000 / 50);
  }
}
