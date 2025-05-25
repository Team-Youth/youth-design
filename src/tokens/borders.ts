/**
 * Border Design Tokens
 * 컴포넌트에 테두리를 추가하여 구분감을 제공하는 속성
 */

// Border Widths
export const borderWidth = {
  /** UI 요소의 기본적인 구분감을 제공할 때 사용 */
  s: '1px',
  /** 1px보다 더 명확한 구분이 필요할 때 사용 */
  m: '1.5px',
  /** 중요한 요소를 강조하거나, 요소 간 강한 대비가 필요할 때 사용 */
  l: '2px',
} as const;

// Border Styles
export const borderStyle = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  none: 'none',
} as const;

// Combined Border Tokens
export const border = {
  /** 기본 보더 - UI 요소의 기본적인 구분감 제공 */
  s: `${borderWidth.s} ${borderStyle.solid}`,
  /** 중간 보더 - 더 명확한 구분이 필요할 때 */
  m: `${borderWidth.m} ${borderStyle.solid}`,
  /** 큰 보더 - 중요한 요소 강조나 강한 대비가 필요할 때 */
  l: `${borderWidth.l} ${borderStyle.solid}`,
  /** 보더 없음 */
  none: borderStyle.none,
} as const;

// All borders export
export const borders = {
  borderWidth,
  borderStyle,
  border,
} as const;

export default borders; 