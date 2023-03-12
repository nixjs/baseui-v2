import * as React from "react";
import classNames from "classnames";
import { PortalBasePropArg } from "../types";
import { BaseTagElement } from "../const";

export interface PopupBodyProps extends PortalBasePropArg {}

const Body = React.forwardRef<HTMLDivElement, PopupBodyProps>(
  (props: PopupBodyProps, ref: React.Ref<HTMLDivElement | null>) => {
    const { children, className } = props;
    return React.createElement(
      BaseTagElement,
      {
        className: classNames("popup-body", className),
        ref,
        id: "popup-body",
      },
      children as React.ReactNode
    );
  }
);

Body.displayName = "Popup.Body";
export default Body;
