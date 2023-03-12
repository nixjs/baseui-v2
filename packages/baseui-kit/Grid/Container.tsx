import React from "react";
import classNames from "classnames";
import { GridTypes } from "./types";

const Container = React.forwardRef<HTMLDivElement, GridTypes.ContainerProps>(
  ({ fluid, fixed, className, ...props }, ref) => {
    const prefix = "container";
    const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
    return (
      <div
        className={classNames(
          fluid ? `${prefix}${suffix}` : prefix,
          {
            "container-fixed": fixed,
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.defaultProps = {
  fluid: false,
};

Container.displayName = "Container";
export default Container;
