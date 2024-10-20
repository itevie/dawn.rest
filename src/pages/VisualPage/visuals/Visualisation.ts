interface BaseVisualOption {
  type: "number" | "boolean" | "array" | "color" | "string";
  human: string;
}

export interface NumberVisualOption extends BaseVisualOption {
  type: "number";
  rangeMin: number;
  rangeMax: number;
  default: number;
}

export interface BooleanVisualOption extends BaseVisualOption {
  type: "boolean";
  default: boolean;
}

export interface ColorVisualOption extends BaseVisualOption {
  type: "color";
  default: string;
}

export interface StringVisualOption extends BaseVisualOption {
  type: "string";
  default: string;
}

export interface ArrayVisualOption extends BaseVisualOption {
  type: "array";
  inner: VisualOption;
  default: any[];
}

export type VisualOption =
  | NumberVisualOption
  | BooleanVisualOption
  | ArrayVisualOption
  | ColorVisualOption
  | StringVisualOption;

export type VisualOptions = { [key: string]: VisualOption };
export type Coordinate = { x: number; y: number };

export default class Visual {
  public name: string = "name";
  public description: string = "description";

  public fps: number = 60;

  protected interval: ReturnType<typeof setInterval> | undefined = undefined;

  public getOptions(): VisualOptions {
    throw new Error(`This visualiser does not implement getOptions`);
  }

  public getPresets(): { [key: string]: any } {
    return {};
  }

  public draw(ctx: CanvasRenderingContext2D, options: any): void {
    throw new Error("This visualiser does not implement draw");
  }

  public stop(): void {
    clearInterval(this.interval);
  }
}
