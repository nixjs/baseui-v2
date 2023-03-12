import type * as Stitches from "@stitches/react";
import { styled, theme } from "../core/stitches.config";

const ButtonDisabledCss = {
  "--baseui-button-background-color": "var(--baseui-color-gray-50)",
  "--baseui-button-color": "var(--baseui-color-gray-2)",
  "--baseui-button-border-color": "var(--baseui-color-gray-50)",
};

export const ButtonStyled = styled("button", {
  "--baseui-button-border-style": "solid",
  "--baseui-button-border-width": "var(--baseui-border-width)",
  "--baseui-button-font-weight": "400",
  "--baseui-button-transition-duration": "var(--baseui-transition-slow)",
  textAlign: "center",
  transitionDuration: "var(--baseui-button-transition-duration)",
  transitionProperty: "color, background, border-color",
  userSelect: "none",
  position: "relative",
  overflow: "hidden",
  $flexCenter: "inline-flex",
  appearance: "none",
  height: "var(--baseui-button-height)",
  lineHeight: "var(--baseui-button-line-height, 1.5)",
  width: "var(--baseui-button-width)",
  minWidth: "var(--baseui-button-min-width)",
  fontSize: "calc(1rem * var(--baseui-button-size-multiplier))",
  borderRadius: "var(--baseui-button-radius, 0)",
  borderStyle: "var(--baseui-button-border-style)",
  borderColor: "var(--baseui-button-border-color)",
  borderWidth: "var(--baseui-button-border-width)",
  fontWeight: "var(--baseui-button-font-weight)",
  paddingLeft: "var(--baseui-button-padding-left, 1rem)",
  paddingRight: "var(--baseui-button-padding-right, 1rem)",
  backgroundColor: "var(--baseui-button-background-color)",
  color: `var(--baseui-button-color, ${theme.color.white})`,
  cursor: "pointer",
  "&:disabled": {
    cursor: "default",
  },
  ".button": {
    "&-text": {
      $flexCenter: "flex",
      zIndex: "var(--baseui-button-text-z-index, initial)",
    },
    "&-icon": {
      "&--start, &--end": {
        $flexCenter: "flex",
        color: "inherit",
        zIndex: "var(--baseui-button-icon-start-z-index, 100)",
      },
      "&--start": {
        marginRight: "var(--baseui-button-icon-start-left, 0.5rem)",
      },
      "&--end": {
        marginLeft: "var(--baseui-button-icon-start-right, 0.5rem)",
      },
      "&--single": {
        "--baseui-button-padding-left": 0,
        "--baseui-button-padding-right": 0,
      },
    },
    "&-loading": {
      display: "inline-flex",
      "*": {
        verticalAlign: "middle",
      },
      ".loading": {
        display: "inline-flex",
        alignItems: "center",
        "&-spinner, &-text": { display: "inline-flex" },
      },
      "&--start": {
        ".loading": {
          "&-spinner": {
            marginRight: "var(--baseui-button-loading-spacing-right, 0.5rem)",
          },
        },
      },
      "&--end": {
        ".loading": {
          "&-spinner": {
            marginLeft: "var(--baseui-button-loading-spacing-left, 0.5rem)",
            order: 1,
          },
        },
      },
    },
  },
  variants: {
    size: {
      xs: {
        "--baseui-button-height": "1.5rem",
        "--baseui-button-size-multiplier": 0.75,
        "--baseui-button-radius": "0.3rem",
      },
      sm: {
        "--baseui-button-height": "2rem",
        "--baseui-button-size-multiplier": 0.875,
        "--baseui-button-radius": "0.4rem",
      },
      md: {
        "--baseui-button-height": "2.5rem",
        "--baseui-button-size-multiplier": 1,
        "--baseui-button-radius": "0.5rem",
      },
      lg: {
        "--baseui-button-height": "3rem",
        "--baseui-button-size-multiplier": 1.125,
        "--baseui-button-radius": "0.6rem",
      },
      xl: {
        "--baseui-button-height": "4rem",
        "--baseui-button-size-multiplier": 1.25,
        "--baseui-button-radius": "0.8rem",
      },
      xxl: {
        "--baseui-button-height": "6rem",
        "--baseui-button-size-multiplier": 1.5,
        "--baseui-button-radius": "1.2rem",
      },
    },
    color: {
      primary: {
        "--baseui-button-background-color":
          "var(--baseui-button-primary-background,var(--baseui-color-primary))",
        "--baseui-button-color": "var(--baseui-button-primary-color)",
        "--baseui-button-border-color": "var(--baseui-color-primary)",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-primary-background-hover,var(--baseui-color-primary-1))",
            "--baseui-button-color": "var(--baseui-button-primary-color-hover)",
            "--baseui-button-border-color": "var(--baseui-color-primary-hover)",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      secondary: {
        "--baseui-button-background-color":
          "var(--baseui-button-secondary-background, var(--baseui-color-secondary))",
        "--baseui-button-color": "var(--baseui-button-secondary-color)",
        "--baseui-button-border-color": "var(--baseui-color-secondary)",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-secondary-background-hover,var(--baseui-color-secondary-1))",
            "--baseui-button-color":
              "var(--baseui-button-secondary-color-hover)",
            "--baseui-button-border-color":
              "var(--baseui-color-secondary-hover)",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      success: {
        "--baseui-button-background-color":
          "var(--baseui-button-success-background, var(--baseui-color-success))",
        "--baseui-button-color": "var(--baseui-button-success-color)",
        "--baseui-button-border-color": "var(--baseui-color-success)",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-success-background-hover,var(--baseui-color-success-1))",
            "--baseui-button-color": "var(--baseui-button-success-color-hover)",
            "--baseui-button-border-color": "var(--baseui-color-success-hover)",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      info: {
        "--baseui-button-background-color":
          "var(--baseui-button-info-background, var(--baseui-color-info))",
        "--baseui-button-color": "var(--baseui-button-info-color)",
        "--baseui-button-border-color": "var(--baseui-color-info)",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-info-background-hover,var(--baseui-color-info-1))",
            "--baseui-button-color": "var(--baseui-button-info-color-hover)",
            "--baseui-button-border-color": "var(--baseui-color-info-hover)",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      warning: {
        "--baseui-button-background-color":
          "var(--baseui-button-warning-background, var(--baseui-color-warning))",
        "--baseui-button-color": "var(--baseui-button-warning-color)",
        "--baseui-button-border-color": "var(--baseui-color-warning)",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-warning-background-hover,var(--baseui-color-warning-1))",
            "--baseui-button-color": "var(--baseui-button-warning-color-hover)",
            "--baseui-button-border-color": "var(--baseui-color-warning-hover)",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      danger: {
        "--baseui-button-background-color":
          "var(--baseui-button-danger-background, var(--baseui-color-danger))",
        "--baseui-button-color": "var(--baseui-button-danger-color)",
        "--baseui-button-border-color": "var(--baseui-color-danger)",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-danger-background-hover,var(--baseui-color-danger-1))",
            "--baseui-button-color": "var(--baseui-button-danger-color-hover)",
            "--baseui-button-border-color": "var(--baseui-color-danger-hover)",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      light: {
        "--baseui-button-background-color":
          "var(--baseui-button-light-background, var(--baseui-color-light))",
        "--baseui-button-color":
          "var(--baseui-button-light-color,var(--baseui-color-dark))",
        "--baseui-button-border-color":
          "var(--baseui-color-light, var(--baseui-color-light))",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-light-background-hover,var(--baseui-color-light-1))",
            "--baseui-button-color":
              "var(--baseui-button-light-color-hover,var(--baseui-color-dark))",
            "--baseui-button-border-color":
              "var(--baseui-color-light-hover,var(--baseui-color-light-1))",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      dark: {
        "--baseui-button-background-color":
          "var(--baseui-button-dark-background, var(--baseui-color-dark))",
        "--baseui-button-color": "var(--baseui-button-dark-color)",
        "--baseui-button-border-color": "var(--baseui-color-dark)",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-dark-background-hover,var(--baseui-color-dark-1))",
            "--baseui-button-color": "var(--baseui-button-dark-color-hover)",
            "--baseui-button-border-color": "var(--baseui-color-dark-hover)",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      link: {
        "--baseui-button-background-color":
          "var(--baseui-button-link-background, transparent)",
        "--baseui-button-color":
          "var(--baseui-button-link-color, var(--baseui-color-black))",
        "--baseui-button-border-color":
          "var(--baseui-button-link-border-color, transparent)",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-link-background-hover, transparent)",
            "--baseui-button-color":
              "var(--baseui-button-link-color-hover, var(--baseui-color-black))",
            "--baseui-button-border-color":
              "var(--baseui-button-link-border-color-hover, transparent)",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      "outline-primary": {
        "--baseui-button-background-color": "transparent",
        "--baseui-button-color":
          "var(--baseui-button-outline-primary-color, var(--baseui-color-primary))",
        "--baseui-button-border-color":
          "var(--baseui-button-outline-primary-border-color, var(--baseui-color-primary))",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-outline-primary-background-hover, var(--baseui-color-primary-1))",
            "--baseui-button-color":
              "var(--baseui-button-outline-primary-color-hover)",
            "--baseui-button-border-color":
              "var(--baseui-button-outline-primary-border-color-hover)",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      "outline-secondary": {
        "--baseui-button-background-color": "transparent",
        "--baseui-button-color":
          "var(--baseui-button-outline-secondary-color, var(--baseui-color-secondary))",
        "--baseui-button-border-color":
          "var(--baseui-button-outline-secondary-border-color, var(--baseui-color-secondary))",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-outline-secondary-background-hover, var(--baseui-color-secondary-1))",
            "--baseui-button-color":
              "var(--baseui-button-outline-secondary-color-hover, var(--baseui-button-secondary-color-hover))",
            "--baseui-button-border-color":
              "var(--baseui-button-outline-secondary-border-color-hover, var(--baseui-color-secondary-hover))",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      "outline-success": {
        "--baseui-button-background-color": "transparent",
        "--baseui-button-color":
          "var(--baseui-button-outline-success-color, var(--baseui-color-success))",
        "--baseui-button-border-color":
          "var(--baseui-button-outline-success-border-color, var(--baseui-color-success))",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-outline-success-background-hover, var(--baseui-color-success-1))",
            "--baseui-button-color":
              "var(--baseui-button-outline-success-color-hover, var(--baseui-button-success-color-hover))",
            "--baseui-button-border-color":
              "var(--baseui-button-outline-success-border-color-hover, var(--baseui-color-success-hover))",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      "outline-info": {
        "--baseui-button-background-color": "transparent",
        "--baseui-button-color":
          "var(--baseui-button-outline-info-color, var(--baseui-color-info))",
        "--baseui-button-border-color":
          "var(--baseui-button-outline-info-border-color, var(--baseui-color-info))",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-outline-info-background-hover, var(--baseui-color-info-1))",
            "--baseui-button-color":
              "var(--baseui-button-outline-info-color-hover, var(--baseui-button-info-color-hover))",
            "--baseui-button-border-color":
              "var(--baseui-button-outline-info-border-color-hover, var(--baseui-color-info-hover))",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      "outline-warning": {
        "--baseui-button-background-color": "transparent",
        "--baseui-button-color":
          "var(--baseui-button-outline-warning-color, var(--baseui-color-warning))",
        "--baseui-button-border-color":
          "var(--baseui-button-outline-warning-border-color, var(--baseui-color-warning))",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-outline-warning-background-hover, var(--baseui-color-warning-1))",
            "--baseui-button-color":
              "var(--baseui-button-outline-warning-color-hover, var(--baseui-button-warning-color-hover))",
            "--baseui-button-border-color":
              "var(--baseui-button-outline-warning-border-color-hover, var(--baseui-color-warning-hover))",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      "outline-danger": {
        "--baseui-button-background-color": "transparent",
        "--baseui-button-color":
          "var(--baseui-button-outline-danger-color, var(--baseui-color-danger))",
        "--baseui-button-border-color":
          "var(--baseui-button-outline-danger-border-color, var(--baseui-color-danger))",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-outline-danger-background-hover, var(--baseui-color-danger-1))",
            "--baseui-button-color":
              "var(--baseui-button-outline-danger-color-hover, var(--baseui-button-danger-color-hover))",
            "--baseui-button-border-color":
              "var(--baseui-button-outline-danger-border-color-hover, var(--baseui-color-danger-hover))",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      "outline-light": {
        "--baseui-button-background-color": "transparent",
        "--baseui-button-color":
          "var(--baseui-button-outline-light-color, var(--baseui-color-light))",
        "--baseui-button-border-color":
          "var(--baseui-button-outline-light-border-color, var(--baseui-color-light))",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-outline-light-background-hover, var(--baseui-color-light-1))",
            "--baseui-button-color":
              "var(--baseui-button-outline-light-color-hover, var(--baseui-button-light-color-hover))",
            "--baseui-button-border-color":
              "var(--baseui-button-outline-light-border-color-hover, var(--baseui-color-light-hover))",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
      "outline-dark": {
        "--baseui-button-background-color": "transparent",
        "--baseui-button-color":
          "var(--baseui-button-outline-dark-color, var(--baseui-color-dark-1))",
        "--baseui-button-border-color":
          "var(--baseui-button-outline-dark-border-color, var(--baseui-color-dark))",
        "&:hover": {
          "@desktopHovering": {
            "--baseui-button-background-color":
              "var(--baseui-button-outline-dark-background-hover, var(--baseui-color-dark-1))",
            "--baseui-button-color":
              "var(--baseui-button-outline-dark-color-hover, var(--baseui-button-dark-color-hover))",
            "--baseui-button-border-color":
              "var(--baseui-button-outline-dark-border-color-hover, var(--baseui-color-dark-hover))",
          },
        },
        "&:disabled": ButtonDisabledCss,
      },
    },
    autoWidth: {
      true: {
        "--baseui-button-width": "auto",
        "--baseui-button-padding-left": "0",
        "--baseui-button-padding-right": "0",
      },
    },
    isChildLess: {
      true: {
        "--baseui-button-padding-left": "0",
        "--baseui-button-padding-right": "0",
        height: "var(--baseui-button-height, 3rem)",
        width: "var(--baseui-button-height, 3rem)",
      },
    },
  },
});

export type ButtonStyledVariants = Stitches.VariantProps<typeof ButtonStyled>;
