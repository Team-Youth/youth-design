import React, { useState, forwardRef, useCallback } from 'react';

import { Icon, IconType } from '../icon/Icon';
import { colors, spacing, radius, textStyles } from '../../tokens';

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** 입력 필드의 placeholder 텍스트 */
  placeholder?: string;
  /** 입력 값 */
  value?: string;
  /** 기본 값 */
  defaultValue?: string;
  /** 값 변경 시 호출되는 콜백 */
  onChange?: (value: string) => void;
  /** 포커스 시 호출되는 콜백 */
  onFocus?: () => void;
  /** 블러 시 호출되는 콜백 */
  onBlur?: () => void;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 읽기 전용 상태 */
  readOnly?: boolean;
  /** 에러 상태 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 커스텀 클래스명 */
  className?: string;
  /** 입력 타입 */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel';
  /** Leading 아이콘 */
  leadingIcon?: React.ReactNode;
  /** Trailing 아이콘 */
  trailingIcon?: React.ReactNode;
  /** Leading 아이콘 타입 (Icon 컴포넌트 사용) */
  leadingIconType?: IconType;
  /** Trailing 아이콘 타입 (Icon 컴포넌트 사용) */
  trailingIconType?: IconType;
  /** Leading 아이콘 클릭 핸들러 */
  onLeadingIconClick?: () => void;
  /** Trailing 아이콘 클릭 핸들러 */
  onTrailingIconClick?: () => void;
  /** 상태 (filled/empty) */
  status?: 'filled' | 'empty';
  /** 너비 */
  width?: 'fill' | (string & {}) | number;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      placeholder = 'Placeholder',
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      disabled = false,
      readOnly = false,
      error = false,
      errorMessage,
      className = '',
      type = 'text',
      leadingIcon,
      trailingIcon,
      leadingIconType,
      trailingIconType,
      onLeadingIconClick,
      onTrailingIconClick,
      status,
      width = '320px',
      ...restProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || '');

    const currentValue = value !== undefined ? value : internalValue;
    const isEmpty = !currentValue || currentValue.length === 0;
    const actualStatus = status || (isEmpty ? 'empty' : 'filled');

    const getContainerStyles = useCallback((): React.CSSProperties => {
      let borderColor: string = colors.semantic.border.strong; // #D6D6D6
      let backgroundColor: string = colors.semantic.background.primary; // #FFFFFF

      if (disabled) {
        borderColor = colors.semantic.border.strong;
        backgroundColor = colors.semantic.disabled.background; // #F3F5F6
      } else if (readOnly) {
        borderColor = colors.semantic.border.strong;
        backgroundColor = colors.semantic.background.primary;
      } else if (error) {
        borderColor = colors.semantic.state.error; // #FF2E2E
      } else if (isFocused) {
        borderColor = colors.semantic.text.primary; // #25282D
      } else if (isHovered) {
        borderColor = colors.semantic.text.primary; // #25282D
      }

      const getWidth = () => {
        if (width === 'fill') {
          return '100%';
        }
        return typeof width === 'number' ? `${width}px` : width;
      };

      return {
        display: 'flex',
        alignItems: 'center',
        gap: spacing.xs, // 8px
        padding: `13px ${spacing.m}`, // 13px 16px
        backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: radius.s, // 8px
        transition: 'all 0.2s ease',
        width: getWidth(),
      };
    }, [disabled, readOnly, error, isFocused, isHovered, width]);

    const getInputStyles = useCallback((): React.CSSProperties => {
      let textColor: string = colors.semantic.text.tertiary; // #8D97A5 for placeholder

      if (disabled) {
        textColor = colors.semantic.text.tertiary;
      } else if (error) {
        textColor = colors.semantic.state.error; // #FF2E2E
      } else if (actualStatus === 'filled') {
        textColor = colors.semantic.text.primary; // #25282D
      }

      // readOnly일 때 커서 스타일 변경
      const cursorStyle = readOnly ? 'default' : 'text';

      return {
        flex: 1,
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        color: textColor,
        cursor: cursorStyle,
        // body1 regular 스타일 적용
        ...textStyles.body1,
      };
    }, [disabled, error, actualStatus, readOnly]);

    const getIconColor = useCallback(() => {
      if (disabled) {
        return colors.semantic.disabled.foreground; // #D1D5DB
      } else if (error) {
        return colors.semantic.state.error; // #FF2E2E
      } else {
        return colors.semantic.text.primary; // #25282D
      }
    }, [disabled, error]);

    const handleFocus = useCallback(() => {
      if (!disabled && !readOnly) {
        setIsFocused(true);
        onFocus?.();
      }
    }, [disabled, readOnly, onFocus]);

    const handleBlur = useCallback(() => {
      setIsFocused(false);
      onBlur?.();
    }, [onBlur]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (readOnly) return; // readOnly일 때 값 변경 방지

        const newValue = e.target.value;
        if (value === undefined) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
      },
      [value, onChange, readOnly],
    );

    const handleMouseEnter = useCallback(() => {
      if (!disabled && !readOnly && !isFocused) {
        setIsHovered(true);
      }
    }, [disabled, readOnly, isFocused]);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, []);

    const iconColor = getIconColor();

    // Leading 아이콘 렌더링
    const renderLeadingIcon = () => {
      if (leadingIconType) {
        return (
          <Icon type={leadingIconType} size={20} color={iconColor} onClick={onLeadingIconClick} />
        );
      }
      if (leadingIcon) {
        return (
          <div
            style={{
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: iconColor,
            }}
          >
            {leadingIcon}
          </div>
        );
      }
      return null;
    };

    // Trailing 아이콘 렌더링
    const renderTrailingIcon = () => {
      if (trailingIconType) {
        return (
          <Icon type={trailingIconType} size={20} color={iconColor} onClick={onTrailingIconClick} />
        );
      }
      if (trailingIcon) {
        return (
          <div
            style={{
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: iconColor,
            }}
          >
            {trailingIcon}
          </div>
        );
      }
      return null;
    };

    return (
      <div className={`text-field-wrapper ${className}`}>
        <div
          style={getContainerStyles()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {renderLeadingIcon()}

          <input
            ref={ref}
            type={type}
            value={currentValue}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            readOnly={readOnly}
            style={getInputStyles()}
            {...restProps}
          />

          {renderTrailingIcon()}
        </div>

        {error && errorMessage && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing.xxs, // 4px
              marginTop: spacing.xs, // 8px
            }}
          >
            <Icon type="dialog" size={16} color={colors.semantic.state.error} />
            <span
              style={{
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '18px',
                color: colors.semantic.state.error,
                fontFamily: 'Pretendard',
              }}
            >
              {errorMessage}
            </span>
          </div>
        )}

        <style>
          {`
            .text-field-wrapper input::placeholder {
              color: ${colors.semantic.text.tertiary};
            }
          `}
        </style>
      </div>
    );
  },
);

TextField.displayName = 'TextField';
