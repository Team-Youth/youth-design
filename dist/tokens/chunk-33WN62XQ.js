// src/tokens/borders.ts
var borderWidth = {
  /** UI 요소의 기본적인 구분감을 제공할 때 사용 */
  s: "1px",
  /** 1px보다 더 명확한 구분이 필요할 때 사용 */
  m: "1.5px",
  /** 중요한 요소를 강조하거나, 요소 간 강한 대비가 필요할 때 사용 */
  l: "2px"
};
var borderStyle = {
  solid: "solid",
  dashed: "dashed",
  dotted: "dotted",
  none: "none"
};
var border = {
  /** 기본 보더 - UI 요소의 기본적인 구분감 제공 */
  s: `${borderWidth.s} ${borderStyle.solid}`,
  /** 중간 보더 - 더 명확한 구분이 필요할 때 */
  m: `${borderWidth.m} ${borderStyle.solid}`,
  /** 큰 보더 - 중요한 요소 강조나 강한 대비가 필요할 때 */
  l: `${borderWidth.l} ${borderStyle.solid}`,
  /** 보더 없음 */
  none: borderStyle.none
};
var borders = {
  borderWidth,
  borderStyle,
  border
};
var borders_default = borders;

export { border, borderStyle, borderWidth, borders, borders_default };
//# sourceMappingURL=chunk-33WN62XQ.js.map
//# sourceMappingURL=chunk-33WN62XQ.js.map