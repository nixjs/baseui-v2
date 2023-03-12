import BigNumber from "bignumber.js";

export const getRangeValue = (
  target: BigNumber,
  min?: number | string,
  max?: number | string
) => {
  // target > max
  if (typeof max !== "undefined") {
    const dMax = new BigNumber(max);
    if (!dMax?.isNaN() && !target.isLessThan(dMax)) {
      return dMax;
    }
  }

  // target < min
  if (typeof min !== "undefined") {
    const dMin = new BigNumber(min);
    if (!dMin.isNaN() && !dMin.isLessThan(target)) {
      return dMin;
    }
  }

  return null;
};

export const isNumeric = (num: any) =>
  (typeof num === "number" || (typeof num === "string" && num.trim() !== "")) &&
  !isNaN(num as number);

export const fixControlledValue = (value?: string | number | null): string => {
  if (!isNumeric(value)) {
    return "";
  }
  return String(value);
};

export const controlDecimalPlaces = (
  value: string | number | BigNumber,
  decimals?: number,
  rounded?: BigNumber.RoundingMode
) => {
  if (!decimals) return new BigNumber(value).toFixed();
  return new BigNumber(value).toFixed(decimals, rounded);
};

export const isInputNumberWithDecimals = (
  e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  if (
    [
      "ArrowRight",
      "ArrowLeft",
      "Backspace",
      "Delete",
      "Clear",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
    ].includes(e.key) ||
    (e.metaKey && ["a", "c", "v", "x"].includes(e.key))
  ) {
    return true;
  }
  return false;
};

export const countDecimals = (value: number | string) => {
  if (Number(value) % 1 !== 0) return value.toString().split(".")[1].length;
  return 0;
};
