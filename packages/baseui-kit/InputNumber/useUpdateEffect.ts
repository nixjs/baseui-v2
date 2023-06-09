import React from "react";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

/**
 * Work as `componentDidUpdate`
 */
export function useUpdateEffect(
  callback: () => void | (() => void),
  condition: any[]
) {
  const initRef = React.useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (!initRef.current) {
      initRef.current = true;
      return undefined;
    }

    return callback();
  }, condition);
}
