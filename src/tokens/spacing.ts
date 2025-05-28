/**
 * Spacing Design Tokens
 * 균일한 요소와 간격을 사용하여 UI의 체계적인 배열을 도와줌
 * 4와 8의 배수에 기반한 스페이싱 시스템
 */

export const spacing = {
  /** 2px - 최소 간격 */
  xxxs: '2px',
  /** 4px - 매우 작은 간격 */
  xxs: '4px',
  /** 8px - 작은 간격 */
  xs: '8px',
  /** 12px - 작은-중간 간격 */
  s: '12px',
  /** 16px - 기본 간격 */
  m: '16px',
  /** 20px - 중간-큰 간격 */
  l: '20px',
  /** 24px - 큰 간격 */
  xl: '24px',
  /** 32px - 매우 큰 간격 */
  xxl: '32px',
  /** 40px - 최대 간격 */
  xxxl: '40px',
} as const;

export type SpacingTokens = typeof spacing;

export default spacing;
