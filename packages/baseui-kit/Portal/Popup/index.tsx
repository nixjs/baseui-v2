import React from "react";
import classNames from "classnames";
import { BaseModalId } from "../const";
import { usePortal, PortalContext } from "../usePortal";
import Portal from "../Portal";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

// Define the props of Popup.
type PopupPropArgs = {
  children: React.ReactNode;
  title: string;
  level?: "0" | "1" | "2" | "3";
  classModalWrapper?: string;
  onClose: () => void;
  onMounted?: () => void;
  onUnmounted?: () => void;
  open?: boolean;
};
// Popup component.
export const PopupRoot = React.forwardRef<HTMLDivElement, PopupPropArgs>(
  (
    {
      children,
      level = "0",
      classModalWrapper,
      onClose,
      open,
      onMounted,
      onUnmounted,
    },
    ref
  ) => {
    if (!open) return null;
    return (
      <Portal
        wrapperClass={BaseModalId}
        onMounted={onMounted}
        onUnmounted={onUnmounted}
      >
        <PortalContext.Provider
          value={{
            onClose,
          }}
        >
          <div
            className={classNames(
              "portal portal-popup open",
              `popup--level-${level}`,
              classModalWrapper
            )}
          >
            <div className="popup-container" ref={ref}>
              {children}
            </div>
          </div>
        </PortalContext.Provider>
      </Portal>
    );
  }
);

export const Popup = Object.assign(PopupRoot, {
  Header,
  Body,
  Footer,
  usePortal,
});
