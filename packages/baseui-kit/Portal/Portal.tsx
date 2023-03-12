import React from "react";
import { createPortal } from "react-dom";

type PortalPropArgs = {
  children: React.ReactNode;
  wrapperClass?: string;
  wrapperId?: string;
  onMounted?: () => void;
  onUnmounted?: () => void;
};

// Render component.
const Portal: React.FC<PortalPropArgs> = ({
  children,
  wrapperClass = "app-modal",
  wrapperId,
  onMounted,
  onUnmounted,
}) => {
  // Manage state of portal-wrapper.
  const [wrapper, setWrapper] = React.useState<Element | null>(null);

  React.useLayoutEffect(() => {
    const id = wrapperId || new Date().getTime().toString();
    // Find the container-element (if exist).
    let element = document.getElementById(id);
    // Bool flag whether container-element has been created.
    let created = false;
    if (!element) {
      created = true;
      const ourWrapper = document.createElement("div");
      ourWrapper.setAttribute("id", id);
      ourWrapper.setAttribute("class", wrapperClass);
      document.body.appendChild(ourWrapper);
      element = ourWrapper;
    }
    // Set wrapper state.
    setWrapper(element);
    onMounted?.();
    // Cleanup effect.
    return () => {
      onUnmounted?.();
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [onMounted, onUnmounted, wrapperClass, wrapperId]);
  // Return null on initial rendering.
  if (wrapper === null) return null;
  // Return portal-wrapper component.
  return createPortal(children, wrapper);
};
Portal.displayName = "Portal";
export default Portal;
