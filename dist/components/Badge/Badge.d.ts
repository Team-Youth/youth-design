import React from 'react';
export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'small' | 'medium' | 'large';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    size?: BadgeSize;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
