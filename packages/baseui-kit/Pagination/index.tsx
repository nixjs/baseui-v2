import React from "react";
import classNames from "classnames";
import { PaginationItemPropArg, DOTS, usePagination } from "./usePagination";
import { ElementTypes } from "../types";
import { PaginationStyled } from "./styled";

const DEFAULT_PAGINATION_ROOT = "div" as const;

export interface PaginationPropArg {
  /**
   * Page number
   */
  page?: number;
  /**
   * Selected page on initial render
   */
  initialPage: number;
  /**
   * Total amount of pages
   */
  total: number;
  /**
   * Number of pages that are added or subtracted on the '...' button
   */
  dotsJump?: number;
  /**
   * Amount on left/right side of selected page
   */
  siblings?: number;
  /**
   * Amount of elements visible on left/right edges
   */
  boundaries?: number;
  /**
   * Enable/Disable pagination controls
   */
  withControls?: boolean;
  /**
   * Enable/Disable pagination edges
   */
  withEdges?: boolean;
  /**
   * Add previous of the control label
   */
  prevControlLabel?: React.ReactNode;
  /**
   * Add next of the control label
   */
  nextControlLabel?: React.ReactNode;
  /**
   * Add previous of the edge label
   */
  firstEdgeLabel?: React.ReactNode;
  /**
   * Add next of the edge label
   */
  lastEdgeLabel?: React.ReactNode;
  /**
   * Non disable next/previous controls
   */
  loop?: boolean;
  /**
   * Custom element type for this component.
   */
  as?: React.ElementType;
  /**
   * Add class for pagination root
   */
  className?: string;
  /**
   * Add class for pagination item
   */
  classNameItem?: string;
  /**
   * Add class for pagination control
   */
  classNameControl?: string;
  /**
   * Add class for pagination edge
   */
  classNameEdge?: string;
  /**
   * Callback fired after change of each page
   * @param page Active page number
   */
  onChange?: (page: number) => void;
}

const Pagination = React.forwardRef<
  HTMLElement,
  PaginationPropArg & ElementTypes.StyledProps
>(
  (
    props: PaginationPropArg & ElementTypes.StyledProps,
    ref: React.Ref<HTMLElement | null>
  ) => {
    const {
      page,
      initialPage,
      total,
      dotsJump = 5,
      siblings = 1,
      boundaries = 1,
      withControls = true,
      withEdges = true,
      prevControlLabel,
      nextControlLabel,
      firstEdgeLabel,
      lastEdgeLabel,
      loop = false,
      as: Tag = DEFAULT_PAGINATION_ROOT,
      className,
      classNameItem,
      classNameControl,
      classNameEdge,
      onChange,
      overrideStyled,
    } = props;

    const { range, active, setPage, previous, next, first, last } =
      usePagination({
        page,
        initialPage,
        total,
        siblings,
        boundaries,
        onChange,
      });

    const renderItem = React.useCallback(
      (value: PaginationItemPropArg, index: number) => {
        if (value === DOTS) {
          const isBefore = index < range.indexOf(active);
          const _className = `pagination-item-dot--${
            isBefore ? "prev" : "next"
          }`;
          return (
            <button
              type="button"
              tabIndex={0}
              key={`pagination-item-dot-${value}-${index}`}
              className={classNames(
                "pagination-item pagination-item-dot",
                _className,
                classNameItem
              )}
              onClick={() =>
                isBefore
                  ? setPage(active - dotsJump >= 1 ? active - dotsJump : 1)
                  : setPage(
                      active + dotsJump <= total ? active + dotsJump : total
                    )
              }
            >
              <span aria-hidden="true" className="pagination-item-3dot">
                ...
              </span>
            </button>
          );
        }
        return (
          <button
            type="button"
            tabIndex={0}
            key={`pagination-item-number-${value}-${index}`}
            onClick={() => value !== active && setPage(value)}
            className={classNames("pagination-item pagination-item--number", {
              active: value === active,
            })}
          >
            {value}
          </button>
        );
      },
      [total, active]
    );

    const onPrevious = () => {
      if (loop && active === 1) {
        return last();
      }
      return previous();
    };

    const onNext = () => {
      if (loop && active === total) {
        return first();
      }
      return next();
    };

    return (
      <PaginationStyled
        as={Tag}
        ref={ref}
        className={classNames(className)}
        css={overrideStyled}
      >
        <div className="pagination-content">
          {withEdges && (
            <button
              className={classNames(
                "pagination-item pagination-item--first",
                classNameEdge
              )}
              type="button"
              aria-label="First"
              onClick={first}
              disabled={active === 1}
            >
              {firstEdgeLabel || (
                <span aria-hidden="true" className="pagination-item-icon">
                  «
                </span>
              )}
            </button>
          )}
          {withControls && (
            <button
              className={classNames(
                "pagination-item pagination-item--prev",
                classNameControl
              )}
              type="button"
              aria-label="Previous"
              onClick={onPrevious}
              disabled={!loop && active === 1}
            >
              {prevControlLabel || (
                <span className="pagination-item-icon">‹</span>
              )}
            </button>
          )}
          {range.map(renderItem)}
          {withControls && (
            <button
              className={classNames(
                "pagination-item pagination-item--next",
                classNameControl
              )}
              type="button"
              aria-label="Next"
              onClick={onNext}
              disabled={!loop && active === total}
            >
              {nextControlLabel || (
                <span className="pagination-item-icon">›</span>
              )}
            </button>
          )}
          {withEdges && (
            <button
              className={classNames(
                "pagination-item pagination-item--last",
                classNameEdge
              )}
              type="button"
              aria-label="Last"
              onClick={last}
              disabled={active === total}
            >
              {lastEdgeLabel || (
                <span aria-hidden="true" className="pagination-item-icon">
                  »
                </span>
              )}
            </button>
          )}
        </div>
      </PaginationStyled>
    );
  }
);
Pagination.displayName = "Pagination";
export default Pagination;
