import type * as Stitches from "@stitches/react";
import { styled } from "../core/stitches.config";

export const InputStyled = styled("div", {
  ".form": {
    "&-label": {
      fontWeight: "var(--baseui-input-label-font-weight, 500)",
      fontSize: "var(--baseui-input-label-font-size, 1rem)",
      lineHeight: "var(--baseui-input-label-line-height, 1rem)",
      marginBottom: "var(--baseui-input-label-spacing, 0.5rem)",
      color: "var(--baseui-input-label-color, var(--baseui-color-gray-3))",
    },
    "&-helper-text": {
      fontWeight: "var(--baseui-input-helper-text-font-weight, 400)",
      fontSize: "var(--baseui-input-helper-text-font-size, 1rem)",
      lineHeight: "var(--baseui-input-helper-text-line-height, 1.5rem)",
      marginTop: "var(--baseui-input-helper-text-spacing, 0.5rem)",
      color:
        "var(--baseui-input-helper-text-color, var(--baseui-color-gray-3))",
      "&--error": {
        color:
          "var(--baseui-input-helper-text-font-weight, var(--baseui-color-danger))",
      },
    },
    "&-content": {
      width: "var(--baseui-input-width, 100%)",
      height: "var(--baseui-input-height)",
      background:
        "var(--baseui-input-background-color, var(--baseui-color-gray-50))",
      borderWidth: "var(--baseui-input-border-width, 1px)",
      borderColor:
        "var(--baseui-input-border-color, var(--baseui-color-gray-50))",
      borderStyle: "var(--baseui-input-border-style, solid)",
      borderRadius: "var(--baseui-input-radius, 0.5rem)",
      paddingTop: "var(--baseui-input-padding-y, 0)",
      paddingRight: "var(--baseui-input-padding-x, 0.5rem)",
      paddingBottom: "var(--baseui-input-padding-y, 0)",
      paddingLeft: "var(--baseui-input-padding-x, 0.5rem)",
      transition: "all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1)",
      userSelect: "none",
      display: "flex",
      flex: "1",
      "&-addon": {
        display: "flex",
        alignItems: "center",
        "&--prefix": {
          marginRight: "var(--baseui-input-margin-right, 0.25rem)",
          color:
            "var(--baseui-input-addon-prefix-color,  var(--baseui-color-gray-3))",
        },
        "&--suffix": {
          marginLeft: "var(--baseui-input-margin-left, 0.25rem)",
          color:
            "var(--baseui-input-addon-suffix-color,  var(--baseui-color-gray-3))",
        },
      },
      "&--readonly, &--disabled": {
        cursor: "not-allowed",
        opacity: "var(--baseui-input-disabled-opacity, 0.5)",
        input: {
          cursor: "not-allowed",
        },
      },
      "&:not(.form-content--readonly,.form-content--disabled)": {
        "&:hover": {
          backgroundColor: "var(--baseui-color-gray-9)",
          color: "var(--baseui-color-gray-3)",
        },
      },
      "&--focused": {
        boxShadow: "inset 0 0 0 1px var(--baseui-color-primary)",
        backgroundColor: "var(--baseui-color-gray-50)",
        borderColor: "var(--baseui-color-primary)",
      },
      "&--error": {
        "--baseui-input-background-color": "rgba(255, 49, 49, 0.2)",
        borderColor: "var(--baseui-color-danger)",
        boxShadow: "0px 0px 0px 1px var(--baseui-color-danger)",
      },
    },
    "&-input": {
      padding: "0",
      color:
        "var(--baseui-input-content-input-color, var(--baseui-color-gray-1))",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      width: "100%",
      height: "var(--baseui-input-content-input-height, 100%)",
      fontWeight: "var(--baseui-input-content-input-weight)",
      fontSize:
        "calc(1rem * var(--baseui-input-content-input-size-multiplier))",
      "&:-moz-placeholder": {
        color: "var(--baseui-color-gray-3)",
        opacity: 1,
      },
      "&::-moz-placeholder": {
        color: "var(--baseui-color-gray-3)",
        opacity: 1,
      },
      "&::placeholder": {
        color: "var(--baseui-color-gray-3)",
      },
    },
  },
  variants: {
    size: {
      xs: {
        "--baseui-input-height": "1.5rem",
        "--baseui-input-content-input-size-multiplier": 0.75,
        "--baseui-input-radius": "0.3rem",
      },
      sm: {
        "--baseui-input-height": "2rem",
        "--baseui-input-content-input-size-multiplier": 0.875,
        "--baseui-input-radius": "0.4rem",
      },
      md: {
        "--baseui-input-height": "2.5rem",
        "--baseui-input-content-input-size-multiplier": 1,
        "--baseui-input-radius": "0.5rem",
      },
      lg: {
        "--baseui-input-height": "3rem",
        "--baseui-input-content-input-size-multiplier": 1,
        "--baseui-input-radius": "0.6rem",
      },
      xl: {
        "--baseui-input-height": "4rem",
        "--baseui-input-content-input-size-multiplier": 1.25,
        "--baseui-input-radius": "0.8rem",
      },
      xxl: {
        "--baseui-input-height": "6rem",
        "--baseui-input-content-input-size-multiplier": 1.5,
        "--baseui-input-radius": "1.2rem",
      },
    },
  },
});

export type InputStyledVariants = Stitches.VariantProps<typeof InputStyled>;
