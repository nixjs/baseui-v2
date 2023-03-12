import React from "react";
import { ElementTypes } from "../types";

export namespace InputTypes {
  export type FocusEvent = (
    inputRef: React.RefObject<HTMLInputElement>,
    event: React.FocusEvent<HTMLDivElement>
  ) => void;
  export interface InputValue {
    value: string;
    target: {
      id?: string;
      name?: string;
    };
  }
  export type InputSize = ElementTypes.Breakpoint;
  export type InputCss = {
    fontSizeMultiplier: number;
    height: string;
  };
  export type InputSizeProps = Record<ElementTypes.Breakpoint, InputCss>;
}
