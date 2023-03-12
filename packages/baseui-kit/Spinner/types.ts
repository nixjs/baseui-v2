import { Breakpoint, Palette } from "../core";

export namespace SpinnerTypes {
  export type SpinnerContent =
    | "default"
    | "donut"
    | "donut-ex"
    | "ripple"
    | "ripple-ex";

  export type SpinnerSize = Breakpoint;

  export type SpinnerColorCss = {
    liteColor?: string;
    brandColor?: string;
  };

  export type SpinnerBorderCss = {
    liteWidth?: number;
    brandWidth?: number;
  };
  export type SpinnerCss = {
    size: number;
  };
}
