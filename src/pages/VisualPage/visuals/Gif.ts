import Visual, { VisualOptions } from "./Visualisation";

interface GifOptions {
  url: string,
}

export default class Gif extends Visual {
  public name: string = "Gif"
  public description: string = "Play a gif";

  private gifElement: Element | null = null;

  public override getOptions(): VisualOptions {
    return {
      url: {
        type: "string",
        default: "",
        human: "URL"
      }
    }
  }

  public override draw(ctx: CanvasRenderingContext2D, options: GifOptions): void {
    const element = document.createElement("img");
    element.src = options.url;
    element.style.position = "absolute";
    element.style.top = "0";
    element.style.left = "0";
    element.style.width = "100vw";
    element.style.height = "100vh";
    element.style.pointerEvents = "none";
    element.style.backgroundSize = ""
    this.gifElement = element;

    ctx.canvas.parentElement?.appendChild(element);
  }

  public override stop(): void {
    if (this.gifElement)
      this.gifElement.parentElement?.removeChild(this.gifElement);
  }
}