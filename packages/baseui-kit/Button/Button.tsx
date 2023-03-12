import React from "react";
import classNames from "classnames";
import { CSS } from "@stitches/react";
import { Objectify } from "../core";
import { ElementTypes } from "../types";
import { ButtonStyled } from "./index.styled";
import { ButtonLoading } from "./ButtonLoading";

interface ButtonPropArg extends ElementTypes.StyledProps {
  /**
   * Is this the principal call to action on the page?
   */
  children?: React.ReactNode;
  /**
   * Change button size
   */
  size?: Partial<ElementTypes.Breakpoint>;
  /**
   * Change button color
   */
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "light"
    | "dark"
    | "link"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-info"
    | "outline-warning"
    | "outline-danger"
    | "outline-light"
    | "outline-dark";
  /**
   * Show icon in button
   */
  icon?: React.ReactNode;
  /**
   * Show icon on the left side of the button
   */
  startIcon?: React.ReactNode;
  /**
   * Show icon on the right side of the button
   */
  endIcon?: React.ReactNode;
  /**
   * Defines HTML button type attribute.
   */
  type?: "submit" | "button" | "reset";
  /**
   * Enable loading
   */
  isLoading?: boolean;
  /**
   * Add loading text
   */
  loadingText?: string;
  /**
   * Add loading spinner
   */
  spinnerLoading?: React.ReactNode;
  /**
   * Sets the direction the spinner loading is positioned towards.
   */
  spinnerPlacement?: "center" | "ltr" | "rtl";
  /**
   * Add class for button
   */
  className?: string;
  /**
   * Disable button
   */
  disabled?: boolean;
  /**
   * Auto scale button width
   */
  autoWidth?: boolean;
  /**
   * Set min width
   */
  minWidth?: string;
  /**
   * Set width
   */
  width?: string;
  /**
   * Set height
   */
  height?: string;
  /**
   * Custom element type for this component.
   */
  as?: React.ElementType;
  /**
   * Providing a href will render an <a> element, styled as a button.
   */
  href?: string;
  /**
   * Set the handler to handle click event
   */
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const DEFAULT_TAG = "button" as const;

/**
 * Primary UI component for user interaction
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonPropArg>(
  (props: ButtonPropArg, ref: React.Ref<HTMLButtonElement | null>) => {
    const {
      children,
      color = "primary",
      size = "md",
      autoWidth = false,
      minWidth = "min-content",
      height,
      width,
      icon,
      startIcon,
      endIcon,
      isLoading,
      spinnerLoading,
      loadingText = "",
      spinnerPlacement,
      className,
      disabled,
      overrideStyled,
      as: Tag = DEFAULT_TAG,
      onClick,
    } = props;
    const ourProps = Objectify.omit(props, [
      "size",
      "autoWidth",
      "minWidth",
      "height",
      "width",
      "color",
      "icon",
      "startIcon",
      "endIcon",
      "isLoading",
      "spinnerLoading",
      "loadingText",
      "spinnerPlacement",
      "overrideStyled",
    ]);

    const renderContent = React.useMemo(() => {
      if (!isLoading) {
        return (
          <>
            {icon && (
              <span className="d-flex button-icon button-icon-single">
                {icon}
              </span>
            )}
            {startIcon && (
              <span className="button-icon button-icon--start">
                {startIcon}
              </span>
            )}
            {children && <span className="button-text">{children}</span>}
            {endIcon && (
              <span className="button-icon button-icon--end">{endIcon}</span>
            )}
          </>
        );
      }

      return (
        <ButtonLoading
          className={classNames({
            "button-loading--center": spinnerPlacement === "center",
            "button-loading--start": spinnerPlacement === "ltr",
            "button-loading--end": spinnerPlacement === "rtl",
          })}
          loadingText={loadingText}
          spinnerLoading={spinnerLoading}
        />
      );
    }, [
      children,
      endIcon,
      icon,
      isLoading,
      loadingText,
      spinnerLoading,
      spinnerPlacement,
      startIcon,
    ]);

    let ourCss: CSS = { ...overrideStyled, "--button-min-width": minWidth };

    if (width) {
      ourCss = Objectify.merge(ourCss, { "--button-width": width });
    }
    if (height) {
      ourCss = Objectify.merge(ourCss, { "--button-height": height });
    }

    const isChildLess = React.Children.count(children) === 0;

    return (
      <ButtonStyled
        as={Tag as keyof JSX.IntrinsicElements}
        color={color}
        size={size}
        className={className}
        disabled={disabled}
        autoWidth={autoWidth}
        isChildLess={isChildLess}
        onClick={onClick}
        ref={ref}
        css={ourCss}
        {...ourProps}
      >
        {renderContent}
      </ButtonStyled>
    );
  }
);
Button.displayName = "Button";
export default Button;
