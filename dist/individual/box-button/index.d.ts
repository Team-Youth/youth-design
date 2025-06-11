import React from 'react';

interface ButtonProps {
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
declare const Button: React.FC<ButtonProps>;

export { Button, type ButtonProps };
