export function bodyScroll(isBlock) {
  document.body.style.overflow = isBlock ? "auto" : "hidden";
}

function curry(func) {
  return (min, max, v) =>
    v !== undefined ? func(min, max, v) : cv => func(min, max, cv);
}

function wrapFn(min, max, v) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export const wrap = curry(wrapFn);

export function swipePower(offset, absDistance) {
  return (offset / absDistance) * 100;
}
