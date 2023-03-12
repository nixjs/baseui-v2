import React from "react";
import BigNumber from "bignumber.js";
import classNames from "classnames";
import { Objectify, Refs } from "../core";
import { ElementTypes } from "../types";
import { useUpdateEffect } from "./useUpdateEffect";
import {
  getRangeValue,
  isNumeric,
  controlDecimalPlaces,
  fixControlledValue,
  countDecimals,
} from "./utils";
import { InputStyled } from "./index.styled";

export const RegexOnlyNumber = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/;
export const KeyAccept = [
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Period",
  "Backspace",
  "ArrowLeft",
  "ArrowRight",
  "ArrowDown",
  "ArrowUp",
  "ShiftRight",
  "ShiftLeft",
  "CapsLock",
  "Enter",
  "Numpad0",
  "Numpad1",
  "Numpad2",
  "Numpad3",
  "Numpad4",
  "Numpad5",
  "Numpad6",
  "Numpad7",
  "Numpad8",
  "Numpad9",
  "NumpadDecimal",
  "NumpadSubtract",
];

export interface InputNumberValue {
  value: BigNumber;
  formatted: string;
  target: {
    id?: string;
    name?: string;
  };
}

interface InputPropArg
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "type" | "onChange" | "value"
  > {
  /**
   * Change input size.
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
   * Only except number.
   */
  onlyNumber?: boolean;
  /**
   * Allow negative number
   */
  allowNegative?: boolean;
  /**
   * Limit the decimals. Default NOT limit.
   */
  decimals?: number;
  /**
   * Rounding mode number.
   */
  roundingMode?: BigNumber.RoundingMode;
  /**
   * The current value of the control.
   */
  value?: string | number;
  /**
   * The initial value of the control.
   */
  defaultValue?: string | number;
  /**
   * Add a helper text to Input.
   */
  helperText?: string | React.ReactNode;
  /**
   * The type of input, see: https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types.
   */
  type?: "hidden" | "search" | "tel" | "text" | "url" | "email";
  /**
   * The prefix HTML for the input.
   */
  prefixHTML?: React.ReactNode;
  /**
   * The suffix HTML for the input.
   */
  suffixHTML?: React.ReactNode;
  /**
   * The class for the prefix input.
   */
  prefixClassName?: string;
  /**
   * The class for the suffix input.
   */
  suffixClassName?: string;
  /**
   * The class for label input.
   */
  classNameLabel?: string;
  /**
   * The class for helper text input.
   */
  classNameHelperText?: string;
  /**
   * The class for content input.
   */
  classNameContent?: string;
  /**
   * The class for wrap input.
   */
  classNameWrapper?: string;
  /**
   * Display error class.
   */
  error?: boolean;
  /**
   * Callback fired when the value is changed.
   * @param e InputNumberValue
   */
  onChange?: (value: InputNumberValue) => void;
  /**
   * Callback fired when the value is key downed.
   * @param e React.KeyboardEvent<HTMLInputElement>
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * Callback fired when typing.
   * @param text string
   */
  onInputValue?: (text: string) => void;
}

const getDecimalsValue = (value: string | number | undefined) => {
  return new BigNumber(value || 0);
};

/**
 * When a numeric value needs to be provided.
 */
const InputNumber = React.forwardRef<
  HTMLInputElement,
  InputPropArg & ElementTypes.StyledProps
>(
  (
    props: InputPropArg & ElementTypes.StyledProps,
    ref: React.Ref<HTMLInputElement | null>
  ) => {
    const ourProps = Objectify.omit(props, [
      "error",
      "helperText",
      "onlyNumber",
      "prefixContainerClass",
      "inputClass",
      "inputContentClass",
      "prefixHTML",
      "suffixHTML",
      "prefixClassName",
      "suffixClassName",
      "classNameLabel",
      "className",
      "classNameWrapper",
      "size",
      "onChangeValue",
      "onInputValue",
      "decimals",
      "roundingMode",
      "allowNegative",
      "overrideStyled",
    ]);

    const {
      onlyNumber = false,
      onInputValue,
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
      min,
      max,
      defaultValue,
      value,
      prefixHTML,
      suffixHTML,
      decimals,
      roundingMode,
      readOnly = false,
      allowNegative = false,
      overrideStyled,
    } = props;

    const [focus, setFocus] = React.useState<boolean>(false);
    const userTypingRef = React.useRef<boolean>(false);
    const compositionRef = React.useRef<boolean>(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    // ============================ Value =============================

    const [inputValue, setInternalInputValue] = React.useState<string | number>(
      () => {
        const initValue = defaultValue ?? value;
        return fixControlledValue(initValue);
      }
    );

    // ============================ Value =============================
    // Real value control
    const [decimalValue, setDecimalValue] = React.useState<BigNumber>(() =>
      getDecimalsValue(value ?? defaultValue)
    );

    function setUncontrolledDecimalValue(newDecimal: BigNumber) {
      if (value === undefined) {
        setDecimalValue(newDecimal);
      }
    }

    // Input by value
    useUpdateEffect(() => {
      if (value) {
        const fixedValue = controlDecimalPlaces(value, decimals, roundingMode);
        const newValue = BigNumber(fixedValue);
        setDecimalValue(newValue);

        if (!newValue.eq(new BigNumber(inputValue))) {
          setInternalInputValue(value);
        }
      }
    }, [value, decimals, roundingMode]);

    const isInRange = (target: BigNumber) => !getRangeValue(target, min, max);

    // >>> Collect input value
    const collectInputValue = (_value: string) => {
      // Update inputValue incase input can not parse as number
      setInternalInputValue(_value);
      // Parse number
      if (!compositionRef.current) {
        const d = new BigNumber(_value);
        if (!d.isNaN()) {
          onTriggerValue(d, true);
        }
      }
      onInputValue?.(_value);
    };

    const onTriggerValue = (newValue: BigNumber, userTyping: boolean) => {
      let updateValue = newValue;
      let isRangeValidate = isInRange(updateValue) || updateValue.isNaN();
      // Skip align value when trigger value is empty.
      // We just trigger onChange(null)
      // This should not block user typing
      if (!updateValue.isNaN() && !userTyping) {
        // Revert value in range if needed
        updateValue = getRangeValue(updateValue, min, max) || updateValue;
        isRangeValidate = true;
      }

      if (
        !readOnly &&
        !disabled &&
        !updateValue.eq(decimalValue) &&
        isRangeValidate
      ) {
        setUncontrolledDecimalValue(updateValue);
        const fixedValue = controlDecimalPlaces(
          updateValue,
          decimals,
          roundingMode
        );
        onChange?.({
          value: updateValue,
          formatted: fixedValue,
          target: { id, name: props.name },
        });
        // Reformat input if value is not controlled
        if (value === undefined) {
          setInternalInputValue(fixedValue);
        }
        return updateValue;
      }
      return decimalValue;
    };

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
      e
    ) => {
      const {
        target: { value: _value },
      } = e;
      if (
        (onlyNumber && !RegexOnlyNumber.test(_value)) ||
        _value.split(".").length - 1 > 1 ||
        (_value.charAt(0) === "-" && _value.split("-").length - 1 > 1) ||
        (_value.charAt(0) !== "-" && _value.split("-").length - 1 >= 1) ||
        (decimals && countDecimals(_value) > decimals)
      )
        return e.preventDefault();
      collectInputValue(e.target.value);
    };

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
      React.useCallback(
        (e) => {
          if (
            ((e.altKey || e.metaKey || e.ctrlKey) && e.code.length > 0) ||
            (allowNegative && e.code === "Minus")
          ) {
            return true;
          } else if (!KeyAccept.includes(e.code)) return e.preventDefault();
          onKeyDown?.(e);
        },
        [allowNegative, onKeyDown]
      );

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
          // update value
          const parsedValue = new BigNumber(
            typeof inputValue === "string" &&
            (inputValue.length === 0 || !isNumeric(inputValue))
              ? "0"
              : inputValue
          );
          let formatValue: BigNumber = parsedValue;

          if (!parsedValue.isNaN()) {
            // Only validate value or empty value can be re-fill to inputValue
            // Reassign the formatValue within ranged of trigger control
            formatValue = onTriggerValue(parsedValue, false);
          } else {
            formatValue = decimalValue;
          }

          if (value !== undefined) {
            // Reset back with controlled value first
            setInternalInputValue(
              controlDecimalPlaces(decimalValue, decimals, roundingMode)
            );
          } else if (!formatValue.isNaN()) {
            // Reset input back since no validate value
            setInternalInputValue(
              controlDecimalPlaces(formatValue, decimals, roundingMode)
            );
          }
          setFocus(false);
          userTypingRef.current = false;
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          readOnly,
          disabled,
          inputValue,
          value,
          decimalValue,
          decimals,
          roundingMode,
        ]
      );

    const handleKeyDown = () => {
      userTypingRef.current = true;
    };

    const handleKeyUp = () => {
      userTypingRef.current = false;
    };

    const handleClipboard = (e: React.ClipboardEvent<HTMLDivElement>) => {
      if (onlyNumber) {
        const clipboardData = e.clipboardData || (window as any).clipboardData;
        if (
          clipboardData &&
          !RegexOnlyNumber.test(clipboardData.getData("text"))
        ) {
          e.preventDefault();
        }
      }
    };

    // >>> Composition
    const handleCompositionStart = () => {
      compositionRef.current = true;
    };

    const handleCompositionEnd = () => {
      compositionRef.current = false;
      inputRef.current && collectInputValue(inputRef.current.value);
    };

    let ourCss = { ...overrideStyled };

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
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onPaste={handleClipboard}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          role="button"
          tabIndex={-1}
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
            autoComplete="off"
            id={id}
            type={type}
            ref={
              Refs.composeRef(
                inputRef,
                ref
              ) as React.RefObject<HTMLInputElement>
            }
            {...ourProps}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            onKeyUp={onKeyUp}
            value={inputValue}
            size={-1}
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

InputNumber.displayName = "InputNumber";
export default InputNumber;
