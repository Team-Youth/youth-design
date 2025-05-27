import React from 'react';
export type CardVariant = 'default' | 'elevated' | 'outlined';
export type CardPadding = 'none' | 'small' | 'medium' | 'large';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    padding?: CardPadding;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare const Card: React.FC<CardProps>;
export default Card;
