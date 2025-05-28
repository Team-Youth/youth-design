/**
 * Design Tokens Entry Point
 * 모든 디자인 토큰을 중앙에서 관리합니다
 */

// Individual token exports
export { colors, primary, gray, coolGray, tint, semantic, illustration } from './colors';
export {
  typography,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textStyles,
} from './typography';
export { spacing } from './spacing';
export { radius } from './radius';
export { shadows } from './shadows';
export { borders } from './borders';

// Combined tokens export
export const tokens = {
  colors: () => import('./colors'),
  typography: () => import('./typography'),
  spacing: () => import('./spacing'),
  radius: () => import('./radius'),
  shadows: () => import('./shadows'),
  borders: () => import('./borders'),
} as const;

// Re-export everything as default
export default {
  colors: () => import('./colors'),
  typography: () => import('./typography'),
  spacing: () => import('./spacing'),
  radius: () => import('./radius'),
  shadows: () => import('./shadows'),
  borders: () => import('./borders'),
};
