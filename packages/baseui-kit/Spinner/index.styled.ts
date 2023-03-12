import type * as Stitches from "@stitches/react";
import { styled, keyframes } from "../core";

const bounce = (value: string = "-1rem") =>
  keyframes({
    to: {
      opacity: 0.3,
      transform: `translate3d(0, ${value}, 0)`,
    },
  });
const spin = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});
const ripple = keyframes({
  from: {
    transform: "scale(0)",
    opacity: 1,
  },

  to: {
    transform: "scale(1)",
    opacity: 0,
  },
});
export const SpinnerStyled = styled("div", {
  variants: {
    size: {
      xs: {
        "--base-ui-spinner-default-size": "0.25rem",
        "--baseui-spinner-default-animation": bounce("-0.425rem"),
        "--base-ui-spinner-donut-size": "1rem",
        "--baseui-spinner-donut-border-width": "0.125rem",
        "--base-ui-spinner-ripple-size": "1rem",
        "--baseui-spinner-ripple-border-width": "0.125rem",
        "--base-ui-spinner-ripple-ex-size": "1.75rem",
        "--base-ui-spinner-ripple-ex-inner-size": "1.25rem",
      },
      sm: {
        "--base-ui-spinner-default-size": "0.425rem",
        "--baseui-spinner-default-animation": bounce("-0.5rem"),
        "--base-ui-spinner-donut-size": "1.5rem",
        "--baseui-spinner-donut-border-width": "0.2rem",
        "--base-ui-spinner-ripple-size": "1.5rem",
        "--baseui-spinner-ripple-border-width": "0.2rem",
        "--base-ui-spinner-ripple-ex-size": "2rem",
        "--base-ui-spinner-ripple-ex-inner-size": "1.75rem",
      },
      md: {
        "--base-ui-spinner-default-size": "0.5rem",
        "--baseui-spinner-default-animation": bounce("-0.625rem"),
        "--base-ui-spinner-donut-size": "2rem",
        "--baseui-spinner-donut-border-width": "0.25rem",
        "--base-ui-spinner-ripple-size": "2rem",
        "--baseui-spinner-ripple-border-width": "0.25rem",
        "--base-ui-spinner-ripple-ex-size": "2.6rem",
        "--base-ui-spinner-ripple-ex-inner-size": "2rem",
      },
      lg: {
        "--base-ui-spinner-default-size": "0.75rem",
        "--baseui-spinner-default-animation": bounce("-0.75rem"),
        "--base-ui-spinner-donut-size": "2.5rem",
        "--baseui-spinner-donut-border-width": "0.3rem",
        "--base-ui-spinner-ripple-size": "2.5rem",
        "--baseui-spinner-ripple-border-width": "0.3rem",
        "--base-ui-spinner-ripple-ex-size": "2.75rem",
        "--base-ui-spinner-ripple-ex-inner-size": "2.25rem",
      },
      xl: {
        "--base-ui-spinner-default-size": "1rem",
        "--baseui-spinner-default-animation": bounce("-1rem"),
        "--base-ui-spinner-donut-size": "3rem",
        "--baseui-spinner-donut-border-width": "0.325rem",
        "--base-ui-spinner-ripple-size": "3rem",
        "--baseui-spinner-ripple-border-width": "0.325rem",
        "--base-ui-spinner-ripple-ex-size": "3rem",
        "--base-ui-spinner-ripple-ex-inner-size": "2.5rem",
      },
      xxl: {
        "--base-ui-spinner-default-size": "1.25rem",
        "--baseui-spinner-default-animation": bounce("-1.25rem"),
        "--base-ui-spinner-donut-size": "3.5rem",
        "--baseui-spinner-donut-border-width": "0.4rem",
        "--base-ui-spinner-ripple-size": "3.5rem",
        "--baseui-spinner-ripple-border-width": "0.4rem",
        "--base-ui-spinner-ripple-ex-size": "3.25rem",
        "--base-ui-spinner-ripple-ex-inner-size": "2.75rem",
      },
    },
    content: {
      default: {
        display: "inline-flex",
        div: {
          width: "var(--base-ui-spinner-default-size)",
          height: "var(--base-ui-spinner-default-size)",
          background: "var(--baseui-spinner-default-color)",
          borderRadius: "50%",
          animation: "0.9s infinite alternate",
          animationName: "var(--baseui-spinner-default-animation)",
          "&:nth-child(2)": {
            animationDelay: "0.3s",
          },
          "&:nth-child(3)": {
            animationDelay: "0.6s",
          },
        },
      },
      donut: {
        width: "var(--base-ui-spinner-donut-size)",
        height: "var(--base-ui-spinner-donut-size)",
        borderRadius: "50%",
        borderStyle: "solid",
        borderColor: "var(--baseui-spinner-donut-color-lite)",
        borderWidth: "var(--baseui-spinner-donut-border-width)",
        borderTopColor: "var(--baseui-spinner-donut-color)",
        animation: `1.5s ${spin} infinite linear`,
      },
      "donut-ex": {
        width: "var(--base-ui-spinner-donut-size)",
        height: "var(--base-ui-spinner-donut-size)",
        borderRadius: "50%",
        borderStyle: "solid",
        borderColor: "var(--baseui-spinner-donut-color-lite)",
        borderWidth: "var(--baseui-spinner-donut-border-width)",
        borderTopColor: "var(--baseui-spinner-donut-color)",
        borderBottomColor: "var(--baseui-spinner-donut-color)",
        animation: `1.5s ${spin} infinite linear`,
      },
      ripple: {
        width: "var(--base-ui-spinner-ripple-size)",
        height: "var(--base-ui-spinner-ripple-size)",
        borderRadius: "50%",
        borderStyle: "solid",
        borderColor: "var(--baseui-spinner-ripple-color-lite)",
        borderWidth: "var(--baseui-spinner-ripple-border-width)",
        transform: "translate(50%)",
        animation: `1s ${ripple} ease-out infinite`,
      },
      "ripple-ex": {
        width: "var(--base-ui-spinner-ripple-ex-size)",
        height: "var(--base-ui-spinner-ripple-ex-size)",
        div: {
          position: "absolute",
          width: "var(--base-ui-spinner-ripple-ex-inner-size)",
          height: "var(--base-ui-spinner-ripple-ex-inner-size)",
          borderRadius: "50%",
          borderStyle: "solid",
          borderColor: "var(--baseui-spinner-ripple-color-lite)",
          borderWidth: "var(--baseui-spinner-ripple-border-width)",
          animation: `1.5s ${ripple} infinite`,
          "&:nth-child(2)": {
            animationDelay: "0.5s",
          },
        },
      },
    },
    color: {
      primary: {
        "--baseui-spinner-default-color": "var(--baseui-color-primary)",
        "--baseui-spinner-donut-color": "var(--baseui-color-primary)",
        "--baseui-spinner-donut-color-lite": "var(--baseui-color-gray-5)",
        "--baseui-spinner-ripple-color-lite": "var(--baseui-color-primary)",
      },
      secondary: {
        "--baseui-spinner-default-color": "var(--baseui-color-secondary)",
        "--baseui-spinner-donut-color": "var(--baseui-color-secondary)",
        "--baseui-spinner-donut-color-lite": "var(--baseui-color-gray-5)",
        "--baseui-spinner-ripple-color-lite": "var(--baseui-color-secondary)",
      },
      success: {
        "--baseui-spinner-default-color": "var(--baseui-color-success)",
        "--baseui-spinner-donut-color": "var(--baseui-color-success)",
        "--baseui-spinner-donut-color-lite": "var(--baseui-color-gray-5)",
        "--baseui-spinner-ripple-color-lite": "var(--baseui-color-success)",
      },
      info: {
        "--baseui-spinner-default-color": "var(--baseui-color-info)",
        "--baseui-spinner-donut-color": "var(--baseui-color-info)",
        "--baseui-spinner-donut-color-lite": "var(--baseui-color-gray-5)",
        "--baseui-spinner-ripple-color-lite": "var(--baseui-color-info)",
      },
      warning: {
        "--baseui-spinner-default-color": "var(--baseui-color-warning)",
        "--baseui-spinner-donut-color": "var(--baseui-color-warning)",
        "--baseui-spinner-donut-color-lite": "var(--baseui-color-gray-5)",
        "--baseui-spinner-ripple-color-lite": "var(--baseui-color-warning)",
      },
      danger: {
        "--baseui-spinner-default-color": "var(--baseui-color-danger)",
        "--baseui-spinner-donut-color": "var(--baseui-color-danger)",
        "--baseui-spinner-donut-color-lite": "var(--baseui-color-gray-5)",
        "--baseui-spinner-ripple-color-lite": "var(--baseui-color-danger)",
      },
      light: {
        "--baseui-spinner-default-color": "var(--baseui-color-light)",
        "--baseui-spinner-donut-color": "var(--baseui-color-light)",
        "--baseui-spinner-donut-color-lite": "var(--baseui-color-gray-5)",
        "--baseui-spinner-ripple-color-lite": "var(--baseui-color-light)",
      },
      dark: {
        "--baseui-spinner-default-color": "var(--baseui-color-dark)",
        "--baseui-spinner-donut-color": "var(--baseui-color-dark)",
        "--baseui-spinner-donut-color-lite": "var(--baseui-color-gray-5)",
        "--baseui-spinner-ripple-color-lite": "var(--baseui-color-dark)",
      },
    },
  },
});

export type SpinnerStyledVariants = Stitches.VariantProps<typeof SpinnerStyled>;
