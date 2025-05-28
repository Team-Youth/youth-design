import React, { useState, forwardRef } from 'react';
import { textStyles, fontWeight } from '../../tokens';
import { colors } from '../../tokens/colors';
import { border } from '../../tokens/borders';
import './TextInput.css';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
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

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      placeholder = 'Placeholder',
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      disabled = false,
      error = false,
      errorMessage,
      className = '',
      type = 'text',
      size = 'l',
      ...restProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || '');

    // Size configurations
    const sizeConfig = {
      l: {
        paddingX: '16px',
        paddingY: '12px',
        borderRadius: '12px',
        height: '48px',
        ...textStyles.body1,
        fontWeight: fontWeight.regular,
      },
      m: {
        paddingX: '12px',
        paddingY: '8px',
        borderRadius: '8px',
        height: '40px',
        ...textStyles.body2,
        fontWeight: fontWeight.regular,
      },
      s: {
        paddingX: '8px',
        paddingY: '6px',
        borderRadius: '4px',
        height: '32px',
        ...textStyles.body3,
        fontWeight: fontWeight.regular,
      },
    };

    const getStyles = (): React.CSSProperties => {
      const config = sizeConfig[size];
      let styles: React.CSSProperties = {
        width: '100%',
        height: config.height,
        padding: `${config.paddingY} ${config.paddingX}`,
        borderRadius: config.borderRadius,
        fontSize: config.fontSize,
        fontWeight: config.fontWeight,
        lineHeight: config.lineHeight,
        border: `${border.s} transparent`,
        outline: 'none',
        transition: 'all 0.2s ease',
        fontFamily: 'inherit',
      };

      if (disabled) {
        styles = {
          ...styles,
          backgroundColor: colors.semantic.disabled.background,
          color: colors.semantic.disabled.foreground,
          border: `${border.s} ${colors.semantic.disabled.background}`,
          cursor: 'not-allowed',
        };
      } else if (error) {
        styles = {
          ...styles,
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.text.primary,
          border: `${border.s} ${colors.semantic.state.error}`,
        };
      } else if (isFocused) {
        styles = {
          ...styles,
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.text.primary,
          border: `${border.s} ${colors.primary.mainviolet}`,
          boxShadow: `0 0 0 3px ${colors.primary.tint.violet[100]}`,
        };
      } else {
        styles = {
          ...styles,
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.text.primary,
          border: `${border.s} ${colors.semantic.border.default}`,
        };
      }

      return styles;
    };

    const getPlaceholderStyles = (): React.CSSProperties => {
      return {
        color: colors.semantic.text.tertiary,
      };
    };

    const handleFocus = () => {
      if (!disabled) {
        setIsFocused(true);
        onFocus?.();
      }
    };

    const handleBlur = () => {
      setIsFocused(false);
      onBlur?.();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const inputValue = value !== undefined ? value : internalValue;

    return (
      <div className={`text-input-container ${className}`}>
        <input
          ref={ref}
          type={type}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          style={getStyles()}
          className="text-input"
          {...restProps}
        />
        {error && errorMessage && (
          <div
            style={{
              marginTop: '4px',
              fontSize: '12px',
              color: colors.semantic.state.error,
              fontWeight: fontWeight.regular,
            }}
            className="error-message"
          >
            {errorMessage}
          </div>
        )}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
