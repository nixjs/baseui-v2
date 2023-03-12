import { ElementTypes } from "../types";

export namespace ButtonTypes {
  export type ButtonColor = ElementTypes.Palette;

  export type ButtonSize = ElementTypes.Breakpoint;

  export type ButtonCss = {
    paddingLeft: string;
    paddingRight: string;
    fontSizeMultiplier: number;
    height: string;
    minWidth: string;
    width: string;
    radius: string;
  };

  export type ButtonSizeProps = Record<ElementTypes.Breakpoint, ButtonCss>;
}
