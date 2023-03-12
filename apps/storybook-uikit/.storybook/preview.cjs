import "@nixjs23n6/baseui-css/lib/css/index.min.css";
import "./style/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    // Override the default dark theme
    dark: { appBg: "#1b2649" },
    // Override the default light theme
    light: { appBg: "white" },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
