import * as React from "react";
import classNames from "classnames";
import { PortalBasePropArg } from "../types";
import { BaseTagElement } from "../const";

export interface ModalBodyProps extends PortalBasePropArg {}

const Body = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  (props: ModalBodyProps, ref: React.Ref<HTMLDivElement | null>) => {
    const { children, className } = props;
    return React.createElement(
      BaseTagElement,
      {
        className: classNames("modal-body", className),
        ref,
        id: "modal-body",
      },
      children as React.ReactNode
    );
  }
);

Body.displayName = "Modal.Body";
export default Body;
