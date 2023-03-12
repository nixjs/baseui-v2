import { styled } from "../core/stitches.config";

export const PaginationStyled = styled("div", {
  "--baseui-pagination-item-margin": "0.125rem",
  "--baseui-pagination-item-size": "2.25rem",
  "--baseui-pagination-item-radius": "24%",
  "--baseui-pagination-transition": "400ms",
  ".pagination-item": {
    border: "none",
    position: "relative",
    margin: "0 var(--baseui-pagination-item-margin)",
    $flexCenter: "inline-flex",
    padding: "0px",
    boxSizing: "border-box",
    textTransform: "capitalize",
    userSelect: "none",
    whiteSpace: "nowrap",
    textAlign: "center",
    verticalAlign: "middle",
    boxShadow: "none",
    outline: "none",
    cursor: "pointer",
    height: "var(--baseui-pagination-item-size)",
    minWidth: "var(--baseui-pagination-item-size)",
    borderRadius: "var(--baseui-pagination-item-radius)",
    color: "var(--baseui-pagination-item-color, var(--baseui-color-gray-1))",
    background:
      "var(--baseui-pagination-item-background, var(--baseui-color-gray-50))",
    transition:
      "background var(--baseui-pagination-transition) ease, color var(--baseui-pagination-transition) ease",
    "&:hover": {
      "--baseui-pagination-item-background":
        "var(--baseui-pagination-item-hover-color, var(--baseui-color-gray-9))",
    },
    "&:disabled": {
      "--baseui-pagination-item-color":
        "var(--baseui-pagination-item-disabled-color, var(--baseui-color-gray-5))",
      cursor: "not-allowed",
      opacity: "var(--baseui-pagination-item-disabled-opacity, 0.75)",
    },
    "&-icon": {
      fontSize: "1.2rem",
      display: "inline-flex",
      textAlign: "center",
    },
    "&-dot": {
      position: "relative",
      "&:before": {
        content: "",
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        opacity: 0,
        visibility: "hidden",
        transition:
          "visibility var(--baseui-pagination-transition) ease, opacity var(--baseui-pagination-transition) ease",
      },
      "&:hover": {
        ".pagination-item-3dot": {
          opacity: 0,
          visibility: "hidden",
        },
        "&:before": {
          opacity: 1,
          visibility: "visible",
        },
      },
      "&--prev": {
        "&:hover": {
          "&:before": {
            content: "«",
          },
        },
      },
      "&--next": {
        "&:hover": {
          "&:before": {
            content: "»",
          },
        },
      },
    },
    "&--number": {
      "&.active": {
        fontWeight: "var(--pagination-item-active-font-weight, 700)",
        color:
          "var(--baseui-pagination-item-active-color, var(--baseui-color-white))",
        background:
          "var(--pagination-item-active-background, var(--baseui-color-primary))",
      },
    },
  },
});
