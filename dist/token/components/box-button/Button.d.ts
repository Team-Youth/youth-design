import React from 'react';
import './Button.css';
export interface ButtonProps {
    type?: 'solid' | 'outlined' | 'text';
    level?: 'CTA' | 'secondary' | 'tertiary';
    size?: 'l' | 'm' | 's';
    width?: 'fill' | (string & {});
    disabled?: boolean;
    icon?: {
        left?: React.ReactNode;
        right?: React.ReactNode;
    };
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    isLoading?: boolean;
    underline?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
