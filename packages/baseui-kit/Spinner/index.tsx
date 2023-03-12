import React from "react";
import classNames from "classnames";
import { CSS } from "@stitches/react";
import { Objectify } from "../core";
import { SpinnerTypes } from "./types";
import { ElementTypes } from "../types";
import { SpinnerStyled } from "./index.styled";

interface SpinnerPropArg extends ElementTypes.StyledProps {
  /**
   * Add class
   */
  className?: string;
  /**
   * Change spinner color
   */
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "light"
    | "dark";
  /**
   * Change spinner type
   */
  content?: SpinnerTypes.SpinnerContent;
  /**
   * Change spinner size
   */
  size?: Partial<ElementTypes.Breakpoint>;
}

const Spinner: React.FC<SpinnerPropArg & SpinnerTypes.SpinnerColorCss> = ({
  className,
  content = "default",
  color = "primary",
  size = "md",
  overrideStyled,
}) => {
  let ourCss: CSS = { ...overrideStyled };

  return (
    <SpinnerStyled
      color={color}
      size={size}
      content={content}
      css={ourCss}
      className={classNames(className)}
    >
      {content === "default" ? (
        <>
          <div />
          <div />
          <div />
        </>
      ) : content === "ripple-ex" ? (
        <>
          <div />
          <div />
        </>
      ) : (
        <></>
      )}
    </SpinnerStyled>
  );
};

Spinner.displayName = "Spinner";

export default Spinner;
