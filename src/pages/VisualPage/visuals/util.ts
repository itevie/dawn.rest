import { Coordinate } from "./Visualisation";

export function getCanvasCenter(ctx: CanvasRenderingContext2D): Coordinate {
  return {
    x: ctx.canvas.width / 2,
    y: ctx.canvas.height / 2,
  };
}

export function randomCoordinate(ctx: CanvasRenderingContext2D): Coordinate {
  return {
    x: Math.floor(Math.random() * ctx.canvas.width),
    y: Math.floor(Math.random() * ctx.canvas.height),
  };
}

export function randomBoolean(): boolean {
  return Math.random() > 0.5;
}

export function hexToRGB(hex: string, alpha: number) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
}

export function randomRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
