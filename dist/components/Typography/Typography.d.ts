import React from 'react';
export type TypographyVariant = 'display1' | 'display2' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'body1' | 'body2' | 'caption';
export type TypographyColor = 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'inverse' | 'success' | 'warning' | 'error' | 'info';
export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
export interface TypographyProps {
    variant?: TypographyVariant;
    color?: TypographyColor;
    as?: TypographyElement;
    align?: 'left' | 'center' | 'right' | 'justify';
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare const Typography: React.FC<TypographyProps>;
export default Typography;
