import React, { ReactNode } from 'react';
import { textStyles, fontWeight as fontWeightTokens } from '../../tokens/typography';
export type FontType = keyof typeof textStyles;
export type FontWeight = keyof typeof fontWeightTokens;
export type ResponsiveScale = 'auto' | 'tablet-optimized' | 'mobile-first' | 'none';
export interface FontProps {
    /** Typography variant (display1, display2, heading1, etc.) */
    type: FontType;
    /** Font weight override (bold, semibold, medium, regular) */
    fontWeight?: FontWeight;
    /** Text color */
    color?: string;
    /** Hover color */
    hoverColor?: string;
    /** Text alignment */
    align?: 'left' | 'center' | 'right' | 'justify';
    /** White space handling */
    whiteSpace?: 'nowrap' | 'normal' | 'pre-line';
    /** Text overflow with ellipsis */
    noWhiteSpace?: boolean;
    /** Underline decoration */
    underline?: boolean;
    /** Responsive behavior for different screen sizes */
    responsive?: ResponsiveScale;
    /** Custom className */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
    /** Children content */
    children?: ReactNode;
}
export declare const Font: React.FC<FontProps>;
export default Font;
