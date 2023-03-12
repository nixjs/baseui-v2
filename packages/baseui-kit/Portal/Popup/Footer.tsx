import * as React from "react";
import classNames from "classnames";
import { PortalBasePropArg } from "../types";
import { BaseTagElement } from "../const";

export interface ModalFooterProps extends PortalBasePropArg {}

const Footer = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  (props: ModalFooterProps, ref: React.Ref<HTMLDivElement | null>) => {
    const { children, className } = props;
    return React.createElement(
      BaseTagElement,
      {
        className: classNames("popup-footer", className),
        ref,
        id: "popup-footer",
      },
      children as React.ReactNode
    );
  }
);

Footer.displayName = "Popup.Footer";
export default Footer;
