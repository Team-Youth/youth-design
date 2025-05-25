/**
 * Design Tokens Index
 * 모든 디자인 토큰을 중앙에서 관리하고 export
 */

// Individual token exports
export { default as colors, primary, gray, coolGray, tint, semantic, illustration } from './colors';
export { default as typography, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textStyles } from './typography';
export { default as spacing, type SpacingTokens } from './spacing';
export { default as radius, type RadiusTokens } from './radius';
export { default as shadows, type ShadowTokens } from './shadows';
export { default as borders, borderWidth, borderStyle, border } from './borders';

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