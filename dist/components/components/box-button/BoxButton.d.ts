import React from 'react';
import './BoxButton.css';
export interface BoxButtonProps {
    type?: 'solid' | 'ghost';
    size?: 'l' | 'm' | 's';
    property?: 'normal' | 'hovered' | 'pressed' | 'disabled';
    icon?: {
        left?: React.ReactNode;
        right?: React.ReactNode;
    };
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    isLoading?: boolean;
}
export declare const BoxButton: React.FC<BoxButtonProps>;
