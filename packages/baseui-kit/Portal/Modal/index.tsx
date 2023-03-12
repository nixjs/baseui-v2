import React from "react";
import classNames from "classnames";
import { ElementTypes } from "../../types";
import { BaseModalId } from "../const";
import { usePortal, PortalContext } from "../usePortal";
import Portal from "../Portal";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { ModalStyled } from "./index.styled";

// Define the props of Modal.
type ModalPropArgs = {
  children: React.ReactNode;
  level?: "0" | "1" | "2" | "3";
  classModalWrapper?: string;
  onClose?: () => void;
  onMounted?: () => void;
  onUnmounted?: () => void;
  open?: boolean;
  showClose?: boolean;
} & ElementTypes.StyledProps;
// Modal component.
export const ModalRoot = React.forwardRef<HTMLDivElement, ModalPropArgs>(
  (
    {
      children,
      level = "0",
      classModalWrapper,
      onClose,
      open,
      onMounted,
      onUnmounted,
      overrideStyled,
      showClose = false,
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
          <ModalStyled css={overrideStyled}>
            <div className="portal-overlay" />
            <div
              className={classNames(
                "portal portal-container open",
                `modal--level-${level}`,
                classModalWrapper
              )}
            >
              <div className="modal-dialog" ref={ref}>
                <span className="modal-center" aria-hidden="true" />
                <div className="modal-content">
                  {showClose && (
                    <button
                      type="button"
                      className="modal-btn-close"
                      aria-label="Close"
                      onClick={onClose}
                    >
                      <svg viewBox="0 0 32 32" width="18" height="18">
                        <path d="M4.965 5.036c0.865-0.905 2.3-0.937 3.205-0.072v0l7.832 7.831 7.718-7.725c0.858-0.911 2.293-0.954 3.205-0.096 0.864 0.813 0.947 2.144 0.224 3.057l-0.128 0.148-7.813 7.821 7.891 7.895c0.77 0.874 0.756 2.207-0.064 3.064-0.865 0.905-2.3 0.937-3.205 0.072v0l-7.826-7.825-7.737 7.745c-0.858 0.911-2.293 0.954-3.205 0.096-0.864-0.813-0.947-2.144-0.224-3.057l0.128-0.148 7.831-7.841-7.896-7.901c-0.77-0.874-0.756-2.207 0.064-3.064z"></path>
                      </svg>
                    </button>
                  )}
                  {children}
                </div>
              </div>
            </div>
          </ModalStyled>
        </PortalContext.Provider>
      </Portal>
    );
  }
);

export const Modal = Object.assign(ModalRoot, {
  Header,
  Body,
  Footer,
  usePortal,
});
