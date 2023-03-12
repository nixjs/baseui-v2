import type * as Stitches from "@stitches/react";
import { styled } from "../core";

export const PortalStyled = styled("div", {
  ".portal": {
    "&-container": {
      position: "fixed",
      inset: 0,
      zIndex: 1055,
      width: "100%",
      height: "100%",
      overflow: "hidden auto",
      outline: 0,
    },
    "&-overlay": {
      zIndex: 1054,
      position: "fixed",
      inset: 0,
      background:
        "var(--baseui-portal-overlay-background-color,var(--baseui-color-black))",
      opacity: "var(--baseui-portal-overlay-opacity, 0.3)",
    },
  },
});

export type PortalStyledVariants = Stitches.VariantProps<typeof PortalStyled>;
