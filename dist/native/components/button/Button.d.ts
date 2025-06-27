import React from 'react';
import { IconType } from '../icon/Icon';
import './Button.css';
export interface ButtonProps {
    type?: 'solid' | 'outlined' | 'text';
    level?: 'CTA' | 'secondary' | 'tertiary';
    size?: 'l' | 'm' | 's' | 'xs';
    width?: 'fill' | (string & {});
    disabled?: boolean;
    leftIcon?: IconType;
    rightIcon?: IconType;
    iconOnly?: IconType;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    isLoading?: boolean;
    underline?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
