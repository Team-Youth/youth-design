/**
 * Design Tokens Entry Point
 * 모든 디자인 토큰을 중앙에서 관리합니다
 */
export { colors, primary, gray, coolGray, tint, semantic, illustration } from './colors';
export { typography, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textStyles } from './typography';
export { spacing } from './spacing';
export { radius } from './radius';
export { shadows } from './shadows';
export { borders } from './borders';
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
