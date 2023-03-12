import React from "react";
import classNames from "classnames";

interface ButtonPropArg {
  isLoading?: boolean;
  loadingText?: string;
  spinnerLoading?: React.ReactNode;
  className?: string;
}

export const ButtonLoading: React.FC<ButtonPropArg> = ({
  className,
  loadingText,
  spinnerLoading,
}) => {
  return (
    <div className={classNames("button-loading", className)}>
      <div className="loading">
        {spinnerLoading && (
          <span className="loading-spinner">
            {spinnerLoading}
          </span>
        )}
        {loadingText && (
          <span className="loading-text">{loadingText}</span>
        )}
      </div>
    </div>
  );
};
