import { createStitches } from "@stitches/react";

export const {
  styled,
  getCssText,
  keyframes,
  prefix,
  globalCss,
  config,
  css,
  theme,
} = createStitches({
  prefix: "baseui",
  theme: {
    fonts: {
      system: "system-ui",
    },
    color: {
      primary: "#254edb",
      "primary-1": "#36f",
      "primary-2": "#6690ff",
      "primary-3": "#84a9ff",
      "primary-4": "#adc8ff",
      "primary-5": "#d6e4ff",

      secondary: "#c4144b",
      "secondary-1": "#e51c47",
      "secondary-2": "#ef5164",
      "secondary-3": "#f77577",
      "secondary-4": "#fcaaa3",
      "secondary-5": "#fdd8d1",

      success: "#10ac63",
      "success-1": "#17c964",
      "success-2": "#4ade7b",
      "success-3": "#6fee8d",
      "success-4": "#a1f9ac",
      "success-5": "#cffcd1",

      info: "#2b7cc9",
      "info-1": "#3c9fea",
      "info-2": "#6bbff2",
      "info-3": "#89d5f8",
      "info-4": "#b1e9fc",
      "info-5": "#d8f6fd",

      warning: "#db8637",
      "warning-1": "#ffab4c",
      "warning-2": "#ffc678",
      "warning-3": "#ffd693",
      "warning-4": "#ffe7b7",
      "warning-5": "#fff4db",

      danger: "#db202d",
      "danger-1": "#ff312d",
      "danger-2": "#ff7161",
      "danger-3": "#ff9881",
      "danger-4": "#ffc2ab",
      "danger-5": "#ffe4d5",

      "gray-1": "#11181C",
      "gray-50": "#F1F3F5",
      "gray-2": "#687076",
      "gray-3": "#7E868C",
      "gray-4": "#889096",
      "gray-5": "#C1C8CD",
      "gray-6": "#D7DBDF",
      "gray-7": "#DFE3E6",
      "gray-8": "#E6E8EB",
      "gray-9": "#ECEEF0",

      light: "#CED3D5",
      "light-1": "#E4E9EA",

      dark: "#0C0809",
      "dark-1": "#212529",

      black: "#000000",
      "black-1": "rgba(0, 0, 0, 0.9)",
      "black-2": "rgba(0, 0, 0, 0.8)",
      "black-3": "rgba(0, 0, 0, 0.7)",
      "black-4": "rgba(0, 0, 0, 0.6)",
      "black-5": "rgba(0, 0, 0, 0.5)",
      "black-6": "rgba(0, 0, 0, 0.4)",
      "black-7": "rgba(0, 0, 0, 0.3)",
      "black-8": "rgba(0, 0, 0, 0.2)",
      "black-9": "rgba(0, 0, 0, 0.1)",

      white: "#ffffff",
      "white-1": "rgba(255, 255, 255, 0.9)",
      "white-2": "rgba(255, 255, 255, 0.8)",
      "white-3": "rgba(255, 255, 255, 0.7)",
      "white-4": "rgba(255, 255, 255, 0.6)",
      "white-5": "rgba(255, 255, 255, 0.5)",
      "white-6": "rgba(255, 255, 255, 0.4)",
      "white-7": "rgba(255, 255, 255, 0.3)",
      "white-8": "rgba(255, 255, 255, 0.2)",
      "white-9": "rgba(255, 255, 255, 0.1)",
    },
  },
  media: {
    sm: "screen and (min-width: 576px)",
    md: "screen and (min-width: 768px)",
    lg: "screen and (min-width: 992px)",
    hd: "screen and (min-width: 1028px)",
    xl: "screen and (min-width: 1200px)",
    xxl: "screen and (min-width: 1400px)",
    /* Smartphones and touchscreens */
    noDesktopHovering: "(hover: none) and (pointer: coarse)",
    /* Desktops with mouse */
    desktopHovering: "(hover: hover) and (pointer: fine)",
  },
  utils: {
    $transitionNormal: (value: string) => ({
      transition: `${value} .3s ease`,
    }),
    $transitionFast: (value: string) => ({
      transition: `${value} .1s ease`,
    }),
    $flexCenter: (flex: "flex" | "inline-flex" = "flex") => ({
      display: flex,
      alignItems: "center",
      justifyContent: "center",
    }),
    $fitImage: () => ({
      width: "auto",
      height: "auto",
      margin: 0,
      padding: 0,
    }),
    $elementCenter: () => ({
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
    }),
  },
});
