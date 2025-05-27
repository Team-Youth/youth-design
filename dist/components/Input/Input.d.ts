import React from 'react';
export type InputSize = 'small' | 'medium' | 'large';
export type InputState = 'default' | 'error' | 'success';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: InputSize;
    state?: InputState;
    label?: string;
    helperText?: string;
    fullWidth?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
