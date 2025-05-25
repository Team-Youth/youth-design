/**
 * Design Tokens Index
 * 모든 디자인 토큰을 중앙에서 관리하고 export
 */
export { default as colors, primary, gray, coolGray, tint, semantic, illustration } from './colors';
export { default as typography, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textStyles } from './typography';
export { default as spacing, type SpacingTokens } from './spacing';
export { default as radius, type RadiusTokens } from './radius';
export { default as shadows, type ShadowTokens } from './shadows';
export { default as borders, borderWidth, borderStyle, border } from './borders';
export declare const tokens: {
    readonly colors: () => Promise<typeof import("./colors")>;
    readonly typography: () => Promise<typeof import("./typography")>;
    readonly spacing: () => Promise<typeof import("./spacing")>;
    readonly radius: () => Promise<typeof import("./radius")>;
    readonly shadows: () => Promise<typeof import("./shadows")>;
    readonly borders: () => Promise<typeof import("./borders")>;
};
declare const _default: {
    colors: () => Promise<typeof import("./colors")>;
    typography: () => Promise<typeof import("./typography")>;
    spacing: () => Promise<typeof import("./spacing")>;
    radius: () => Promise<typeof import("./radius")>;
    shadows: () => Promise<typeof import("./shadows")>;
    borders: () => Promise<typeof import("./borders")>;
};
export default _default;
