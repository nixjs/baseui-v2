import { styled } from "../../core";
import { PortalStyled } from "../index.styled";

export const ModalStyled = styled(PortalStyled, {
  ".modal": {
    "&-dialog": {
      minHeight: "100vh",
      paddingLeft: "var(--baseui-dialog-padding-left, 1rem)",
      paddingRight: "var(--baseui-modal-dialog-padding-right, 1rem)",
      paddingTop: "var(--baseui-modal-dialog-padding-top, 1rem)",
      paddingBottom: "var(--baseui-modal-dialog-padding-bottom, 1rem)",
      textAlign: "center",
    },
    "&-center": {
      verticalAlign: "middle",
      height: "100vh",
      display: "inline-block",
    },
    "&-content": {
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "0.15s",
      transform: "var(--baseui-modal--transform)",
      margin:
        "var(--baseui-modal-content-margin-top) var(--baseui-modal-content-margin-right) var(--baseui-modal-content-margin-bottom) var(--baseui-modal-content-margin-left)",
      padding:
        "var(--baseui-modal-content-padding-top) var(--baseui-modal-content-padding-right) var(--baseui-modal-content-padding-bottom) var(--baseui-modal-content-padding-left)",
      background: "var(--baseui-modal-background, var(--baseui-color-white))",
      minHeight: "var(--baseui-modal-min-height, auto)",
      maxWidth: "var(--baseui-modal-max-width)",
      minWidth: "var(--baseui-modal-min-width, auto)",
      boxShadow: "var(--baseui-modal-shadow)",
      borderRadius: "var(--baseui-modal-radius, 0.5rem)",
      width: "var(--baseui-modal-width, 100%)",
      verticalAlign: "middle",
      display: "inline-block",
      overflow: "hidden",
      textAlign: "left",
    },
    "&-btn-close": {
      width: "2.5rem",
      height: "2.5rem",
      position: "absolute",
      background: "#0000",
      border: "none",
      top: "var(--baseui-modal-button-close-top, 0)",
      right: "var(--baseui-modal-button-close-right, 0)",
      zIndex: "4",
      margin: 0,
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      boxSizing: "border-box",
      svg: {
        fill: "var(--baseui-modal-button-close-svg)",
        transition: "transform.5s cubic-bezier(.36,.66,.04,1)",
      },
      "&:hover": {
        svg: {
          fill: "var(--baseui-modal-button-close-svg-hover)",
          transform: "rotate(-90deg)",
        },
      },
    },
  },
});
