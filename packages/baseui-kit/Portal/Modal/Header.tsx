import * as React from "react";
import classNames from "classnames";
import { PortalBasePropArg } from "../types";
import { BaseTagElement } from "../const";

export interface ModalHeaderProps extends PortalBasePropArg {}

const Header = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  (props: ModalHeaderProps, ref: React.Ref<HTMLDivElement | null>) => {
    const { children, className } = props;
    return React.createElement(
      BaseTagElement,
      {
        className: classNames("modal-header", className),
        ref,
        id: "modal-header",
      },
      children as React.ReactNode
    );
  }
);

Header.displayName = "Modal.Header";
export default Header;
