import React from "react";
import classNames from "classnames";
import { CSS } from "@stitches/react";
import { Objectify, Refs } from "../core";
import { ElementTypes } from "../types";
import { InputStyled } from "./index.styled";

interface InputPropArg
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /**
   * Change input size
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  /**
   * The ID for input.
   */
  id?: string;
  /**
   * 	Name of the form control. Submitted with the form as part of a name/value pair.
   */
  name?: string;
  /**
   * Text label for input.
   */
  label?: string;
  /**
   * Add a helper text to Input
   */
  helperText?: string | React.ReactNode;
  /**
   * The type of input, see: https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types.
   */
  type?: "hidden" | "password" | "search" | "tel" | "text" | "url" | "email";
  /**
   * The prefix HTML for the input
   */
  prefixHTML?: React.ReactNode;
  /**
   * The suffix HTML for the input
   */
  suffixHTML?: React.ReactNode;
  /**
   * The class for the prefix input
   */
  prefixClassName?: string;
  /**
   * The class for the suffix input
   */
  suffixClassName?: string;
  /**
   * The class for label input
   */
  classNameLabel?: string;
  /**
   * The class for helper text input
   */
  classNameHelperText?: string;
  /**
   * The class for content input
   */
  classNameContent?: string;
  /**
   * The class for wrap input
   */
  classNameWrapper?: string;
  /**
   * Display error class
   */
  error?: boolean;
  /**
   * Callback fired when the value is changed
   * @param e React.ChangeEvent<HTMLInputElement>
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Callback fired when the value is key downed
   * @param e React.KeyboardEvent<HTMLInputElement>
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * A basic widget for getting the user input is a text field.
 */
const Input = React.forwardRef<
  HTMLInputElement,
  InputPropArg & ElementTypes.StyledProps
>(
  (
    props: InputPropArg & ElementTypes.StyledProps,
    ref: React.Ref<HTMLInputElement | null>
  ) => {
    const {
      name,
      label,
      helperText,
      id,
      type = "text",
      size = "md",
      onChange,
      onKeyDown,
      onKeyUp,
      disabled,
      classNameWrapper,
      classNameLabel,
      classNameHelperText,
      classNameContent,
      error,
      width,
      height,
      prefixHTML,
      suffixHTML,
      readOnly = false,
      overrideStyled,
    } = props;
    const ourProps = Objectify.omit(props, [
      "error",
      "helperText",
      "prefixContainerClass",
      "prefixHTML",
      "suffixHTML",
      "prefixClassName",
      "suffixClassName",
      "className",
      "size",
      "classNameWrapper",
      "classNameLabel",
      "classNameHelperText",
      "classNameContent",
      "overrideStyled",
    ]);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const [focus, setFocus] = React.useState<boolean>(false);

    const handleFocus: React.FocusEventHandler<HTMLDivElement> =
      React.useCallback(
        (e) => {
          if (readOnly || disabled) {
            e.stopPropagation();
            return false;
          }
          inputRef.current?.focus();
          setFocus(true);
        },
        [readOnly, disabled]
      );

    const handleBlur: React.FocusEventHandler<HTMLDivElement> =
      React.useCallback(
        (e) => {
          if (readOnly || disabled) {
            e.stopPropagation();
            return false;
          }
          setFocus(false);
        },
        [readOnly, disabled]
      );

    let ourCss: CSS = { ...overrideStyled };

    if (width) {
      ourCss = Objectify.merge(ourCss, { "--input-width": width });
    }
    if (height) {
      ourCss = Objectify.merge(ourCss, {
        "--input-content-input-height": height,
      });
    }

    const renderHelperText = React.useMemo(() => {
      if (
        !helperText ||
        (!React.isValidElement(helperText) && helperText === "")
      )
        return <></>;
      return (
        <div
          className={classNames(
            "form-helper-text",
            {
              "form-helper-text--error": error,
            },
            classNameHelperText
          )}
        >
          {helperText}
        </div>
      );
    }, [helperText, classNameHelperText, error]);

    return (
      <InputStyled
        size={size}
        css={ourCss}
        className={classNames("form-inner", classNameWrapper)}
      >
        {label && label.length > 0 && (
          <label
            htmlFor={name}
            className={classNames(
              "form-label",
              {
                "form-label--error": error,
              },
              classNameLabel
            )}
          >
            {label}
          </label>
        )}
        <div
          className={classNames("form-content", classNameContent, {
            "form-content--readonly": readOnly,
            "form-content--disabled": disabled,
            "form-content--focused": focus,
            "form-content--error": error,
          })}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {prefixHTML && (
            <div
              className={classNames(
                "form-content-addon form-content-addon--prefix",
                props.prefixClassName
              )}
            >
              {prefixHTML}
            </div>
          )}
          <input
            id={id}
            type={type}
            ref={
              Refs.composeRef(
                inputRef,
                ref
              ) as React.RefObject<HTMLInputElement>
            }
            {...ourProps}
            size={-1}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            className={classNames("form-input", props.className)}
          />
          {suffixHTML && (
            <div
              className={classNames(
                "form-content-addon form-content-addon--suffix",
                props.suffixClassName
              )}
            >
              {suffixHTML}
            </div>
          )}
        </div>
        {renderHelperText}
      </InputStyled>
    );
  }
);
Input.displayName = "Input";
export default Input;
