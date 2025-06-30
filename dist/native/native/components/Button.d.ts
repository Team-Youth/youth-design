import React from 'react';
import { ViewStyle } from 'react-native';
import { IconType } from './Icon';
export interface ButtonProps {
    type?: 'solid' | 'outlined' | 'text';
    level?: 'CTA' | 'secondary' | 'tertiary';
    size?: 'l' | 'm' | 's' | 'xs';
    width?: 'fill' | number;
    disabled?: boolean;
    leftIcon?: IconType;
    rightIcon?: IconType;
    iconOnly?: IconType;
    children?: React.ReactNode;
    onPress?: () => void;
    style?: ViewStyle;
    isLoading?: boolean;
    underline?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
