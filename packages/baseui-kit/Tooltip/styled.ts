import { styled } from "../core";

const tooltipTop = {
  ".tooltip-arrow": {
    bottom: "var(--baseui-tooltip-arrow-top-bottom, -6px)",
    "&::before": {
      top: "-1px",
      borderWidth:
        "var(--baseui-tooltip-arrow-height) calc(var(--baseui-tooltip-arrow-width) * 0.5) 0",
      borderTopColor: "var(--baseui-tooltip-background)",
    },
  },
};

const tooltipEnd = {
  ".tooltip-arrow": {
    left: "var(--baseui-tooltip-arrow-end-left, -6px)",
    width: "var(--baseui-tooltip-arrow-height)",
    height: "var(--baseui-tooltip-arrow-width)",
    "&::before": {
      right: "-1px",
      borderWidth:
        "calc(var(--baseui-tooltip-arrow-width) * 0.5) var(--baseui-tooltip-arrow-height) calc(var(--baseui-tooltip-arrow-width) * 0.5) 0",
      borderRightColor: "var(--baseui-tooltip-background)",
    },
  },
};

const tooltipBottom = {
  ".tooltip-arrow": {
    top: "var(--baseui-tooltip-arrow-bottom-top, -6px)",
    "&::before": {
      bottom: "-1px",
      borderWidth:
        "0 calc(var(--baseui-tooltip-arrow-width) * 0.5) var(--baseui-tooltip-arrow-height)",
      borderBottomColor: "var(--baseui-tooltip-background)",
    },
  },
};
const tooltipStart = {
  ".tooltip-arrow": {
    right: "var(--baseui-tooltip-arrow-start-right, -6px)",
    width: "var(--baseui-tooltip-arrow-height)",
    height: "var(--baseui-tooltip-arrow-width)",
    "&::before": {
      left: "-1px",
      borderWidth:
        "calc(var(--baseui-tooltip-arrow-width) * 0.5) 0 calc(var(--baseui-tooltip-arrow-width) * 0.5) var(--baseui-tooltip-arrow-height)",
      borderLeftColor: "var(--baseui-tooltip-background)",
    },
  },
};

export const TooltipStyled = styled("div", {
  ".tooltip": {
    "--baseui-tooltip-zindex": "1070",
    "--baseui-tooltip-max-width": "12.5rem",
    "--baseui-tooltip-padding-x": "0.5rem",
    "--baseui-tooltip-padding-y": "0.5rem",
    "--baseui-tooltip-margin": "0",
    "--baseui-tooltip-color": "var(--baseui-white)",
    "--baseui-tooltip-radius": "0.25rem",
    "--baseui-tooltip-opacity": "0.9",
    "--baseui-tooltip-arrow-width": "0.8rem",
    "--baseui-tooltip-arrow-height": "0.4rem",

    zIndex: "var(--baseui-tooltip-zindex)",
    display: "block",
    wordWrap: "break,word",
    opacity: 0,

    "&.show": {
      opacity: "var(--baseui-tooltip-opacity)",
    },

    "&-arrow": {
      display: "block",
      width: "var(--baseui-tooltip-arrow-width)",
      height: "var(--baseui-tooltip-arrow-height)",
      "&::before": {
        position: "absolute",
        content: "",
        borderColor: "transparent",
        borderStyle: "solid",
      },
    },
  },

  ".tooltip-top": { ...tooltipTop },

  ".tooltip-end": { ...tooltipEnd },

  ".tooltip-bottom": { ...tooltipBottom },

  ".tooltip-start": { ...tooltipStart },

  ".tooltip-auto": {
    "&[data-popper-placement^='top']": {
      ...tooltipTop,
    },
    "&[data-popper-placement^='right']": {
      ...tooltipEnd,
    },
    "&[data-popper-placement^='bottom']": {
      ...tooltipBottom,
    },
    "&[data-popper-placement^='left']": {
      ...tooltipStart,
    },
  },

  ".tooltip-inner": {
    maxWidth: "var(--baseui-tooltip-max-width)",
    padding: "var(--baseui-tooltip-padding-y) var(--baseui-tooltip-padding-x)",
    color: "var(--baseui-tooltip-color)",
    textAlign: "center",
    backgroundColor: "var(--baseui-tooltip-background)",
    borderRadius: "var(--baseui-tooltip-radius, 0)",
  },
  variants: {
    color: {
      primary: {
        "--baseui-tooltip-background": "var(--baseui-color-primary)",
      },
      secondary: {
        "--baseui-tooltip-background": "var(--baseui-color-secondary)",
      },
      success: { "--baseui-tooltip-background": "var(--baseui-color-success)" },
      info: { "--baseui-tooltip-background": "var(--baseui-color-info)" },
      warning: { "--baseui-tooltip-background": "var(--baseui-color-warning)" },
      danger: { "--baseui-tooltip-background": "var(--baseui-color-danger)" },
      light: {
        "--baseui-tooltip-background": "var(--baseui-color-light)",
        ".tooltip-inner": {
          "--baseui-tooltip-color": "var(--baseui-color-gray-1)",
        },
      },
      dark: { "--baseui-tooltip-background": "var(--baseui-color-dark)" },
    },
  },
});
