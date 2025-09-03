import React, { useState, forwardRef } from 'react';
import { colors, radius, spacing } from '../../tokens';
import { Icon } from '../icon';

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
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
  /** Enter 키 입력 시 호출되는 콜백 (Shift+Enter는 줄바꿈) */
  onEnter?: () => void;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 에러 상태 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 커스텀 클래스명 */
  className?: string;
  /** 문자 수 카운터 표시 여부 */
  showCharacterCounter?: boolean;
  /** 최대 문자 수 */
  maxLength?: number;
  /** 상태 (filled/empty) */
  status?: 'filled' | 'empty';
  /** 너비 설정 (기본값: '320px') */
  width?: 'fill' | (string & {}) | number;
  /** 스타일 숨김 여부 */
  hideStyle?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      placeholder = 'Placeholder',
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      onEnter,
      disabled = false,
      error = false,
      errorMessage,
      className = '',
      showCharacterCounter = false,
      maxLength = 1000,
      status,
      width = '320px',
      rows = 4,
      hideStyle = false,
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
    const characterCount = currentValue.length;

    const getContainerStyles = (): React.CSSProperties => {
      let borderColor: string = colors.semantic.border.strong; // #D6D6D6
      let backgroundColor: string = colors.semantic.background.primary; // #FFFFFF

      if (disabled) {
        borderColor = colors.semantic.border.strong;
        backgroundColor = colors.semantic.disabled.background; // #F3F5F6
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
        flexDirection: 'column',
        width: getWidth(),
        border: hideStyle ? 'none' : `1px solid ${borderColor}`,
        borderRadius: radius.s, // 8px
        backgroundColor,
        transition: 'all 0.2s ease',
        position: 'relative',
      };
    };

    const getTextAreaStyles = (): React.CSSProperties => {
      let textColor: string = colors.semantic.text.tertiary; // #8D97A5 for placeholder

      if (disabled) {
        textColor = colors.semantic.text.tertiary;
      } else if (error) {
        textColor = colors.semantic.state.error; // #FF2E2E
      } else if (actualStatus === 'filled') {
        textColor = colors.primary.coolGray[700]; // #393F46
      }

      return {
        width: '100%',
        minHeight: '120px',
        padding: hideStyle ? '0' : `14px ${spacing.m}`, // 14px 16px
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        color: textColor,
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '-2%',
        fontFamily: 'Pretendard',
        resize: 'none',
        wordWrap: 'break-word',
        whiteSpace: 'pre-line',
        overflowWrap: 'break-word',
        boxSizing: 'border-box',
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

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;

      // 최대 길이 체크
      if (maxLength && newValue.length > maxLength) {
        return;
      }

      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleMouseEnter = () => {
      if (!disabled && !isFocused) {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
        if (e.shiftKey) {
          // Shift+Enter: 줄바꿈 허용 (기본 동작을 통해 handleChange에서 처리됨)
          // 최대 길이 체크만 수행
          const textarea = e.target as HTMLTextAreaElement;
          const cursorPosition = textarea.selectionStart;
          const newValue =
            currentValue.slice(0, cursorPosition) + '\n' + currentValue.slice(cursorPosition);

          if (maxLength && newValue.length > maxLength) {
            e.preventDefault();
            return;
          }

          // 기본 동작 허용 - handleChange에서 자동으로 처리됨
          return;
        } else {
          // Enter만: 기본 동작 방지하고 onEnter 콜백 호출
          e.preventDefault();
          onEnter?.();
        }
      }
    };

    return (
      <div
        className={`text-area-wrapper ${className}`}
        style={{ width: width === 'fill' ? '100%' : width }}
      >
        <div
          style={getContainerStyles()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <textarea
            ref={ref}
            value={currentValue}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            style={getTextAreaStyles()}
            rows={rows}
            maxLength={maxLength}
            {...restProps}
          />
        </div>

        {(showCharacterCounter || error) && (
          <div
            style={{
              display: 'flex',
              justifyContent: error && errorMessage ? 'space-between' : 'flex-end',
              alignItems: 'center',
              marginTop: spacing.xxs, // 4px
              gap: spacing.s, // 12px
            }}
          >
            {error && errorMessage && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: spacing.xxs, // 4px
                }}
              >
                <Icon type="dialog" size={16} color={colors.semantic.state.error} />
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '22px',
                    color: colors.semantic.state.error,
                    fontFamily: 'Pretendard',
                  }}
                >
                  {errorMessage}
                </span>
              </div>
            )}

            {showCharacterCounter && (
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '22px',
                  color: colors.semantic.text.tertiary,
                  fontFamily: 'Pretendard',
                  textAlign: 'right',
                }}
              >
                {characterCount}/{maxLength}
              </span>
            )}
          </div>
        )}

        <style>
          {`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
            
            .text-area-wrapper textarea::placeholder {
              color: ${colors.semantic.text.tertiary};
            }
          `}
        </style>
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
