import React from 'react';

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    className?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    size?: 'l' | 'm' | 's';
}
declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;

export { TextInput, type TextInputProps };
