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

export function coordinateMoveBy(
  coordinate: Coordinate,
  angle: number,
  speed: number
) {
  const rad = (angle * Math.PI) / 180;
  coordinate.x += Math.cos(rad) * speed;
  coordinate.y += Math.sin(rad) * speed;
}

export function calculateDistance(c1: Coordinate, c2: Coordinate): number {
  let a = c1.x - c2.x;
  let b = c1.y - c2.y;

  return Math.sqrt(a * a + b * b);
}

export function isOffScreen(
  c: Coordinate,
  ctx: CanvasRenderingContext2D
): boolean {
  return (
    c.x < 0 || c.y < 0 || c.y > ctx.canvas.height || c.x > ctx.canvas.width
  );
}
