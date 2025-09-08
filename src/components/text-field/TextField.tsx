import React, { useState, forwardRef, useCallback } from 'react';
import { Icon, IconType } from '../icon/Icon';
import { colors, spacing, radius, textStyles, fontWeight } from '../../tokens';

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
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'resident';
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
  /** 크기 */
  size?: 'm' | 'l';
  /** 너비 */
  width?: 'fill' | (string & {}) | number;
}

// 전화번호 포맷팅 함수
const formatPhoneNumber = (value: string): string => {
  // 숫자만 추출
  const numbers = value.replace(/\D/g, '');

  // 길이에 따라 포맷팅
  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  }
};

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
      size = 'l',
      width = '320px',
      ...restProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const [showPassword, setShowPassword] = useState(false);

    const currentValue = value !== undefined ? value : internalValue;
    const isEmpty = !currentValue || currentValue.length === 0;
    const actualStatus = status || (isEmpty ? 'empty' : 'filled');

    // password 타입일 때 실제 input type 결정
    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

    // password 토글 핸들러
    const handlePasswordToggle = useCallback(() => {
      setShowPassword(!showPassword);
    }, [showPassword]);

    const getContainerStyles = useCallback((): React.CSSProperties => {
      let borderColor: string = colors.semantic.border.strong; // #D6D6D6
      let backgroundColor: string = colors.semantic.background.primary; // #FFFFFF

      if (disabled) {
        borderColor = colors.semantic.border.strong;
        backgroundColor = colors.semantic.disabled.background; // #F3F5F6
      } else if (error) {
        // 에러 상태가 readOnly보다 우선 적용되도록 순서 조정
        borderColor = colors.semantic.state.error; // #FF2E2E
      } else if (readOnly) {
        borderColor = colors.semantic.border.strong;
        backgroundColor = colors.semantic.background.primary;
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

      // size에 따른 패딩 설정
      const padding = size === 'm' ? `9px ${spacing.m}` : `13px ${spacing.m}`; // m: 9px 16px, l: 13px 16px

      return {
        display: 'flex',
        alignItems: 'center',
        gap: spacing.xs, // 8px
        padding,
        backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: radius.s, // 8px
        transition: 'all 0.2s ease',
        width: getWidth(),
        position: 'relative', // resident 타입을 위한 상대 위치
      };
    }, [disabled, readOnly, error, isFocused, isHovered, width, size]);

    const getInputStyles = useCallback((): React.CSSProperties => {
      let textColor: string = colors.semantic.text.tertiary; // #8D97A5 for placeholder

      if (disabled) {
        textColor = colors.semantic.disabled.foreground;
      } else if (error) {
        textColor = colors.semantic.state.error; // #FF2E2E
      } else if (actualStatus === 'filled') {
        textColor = colors.semantic.text.primary; // #25282D
      }

      // readOnly일 때 커서 스타일 변경
      const cursorStyle = readOnly ? 'default' : 'text';

      // size에 따른 폰트 스타일 설정
      const textStyle = size === 'm' ? textStyles.body2 : textStyles.body1;

      return {
        width: '100%',
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        color: textColor,
        cursor: cursorStyle,
        // size에 따른 텍스트 스타일 적용
        ...textStyle,
      };
    }, [disabled, error, actualStatus, readOnly, size]);

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

        let newValue = e.target.value;

        // tel 타입일 때 전화번호 포맷팅 적용
        if (type === 'tel') {
          newValue = formatPhoneNumber(newValue);
        }

        // resident 타입일 때 1,2,3,4만 허용
        if (type === 'resident') {
          // 1, 2, 3, 4만 허용
          const allowedNumbers = ['1', '2', '3', '4'];
          if (newValue && !allowedNumbers.includes(newValue)) {
            return; // 허용되지 않는 값이면 변경하지 않음
          }
        }

        onChange?.(newValue);

        if (value === undefined) {
          setInternalValue(newValue);
        }
      },
      [value, onChange, readOnly, type],
    );

    const handleMouseEnter = useCallback(() => {
      if (!disabled && !readOnly && !isFocused) {
        setIsHovered(true);
      }
    }, [disabled, readOnly, isFocused]);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, []);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (type === 'resident') {
          // 허용된 숫자키 (1,2,3,4)와 제어키만 허용
          const allowedKeys = [
            '1',
            '2',
            '3',
            '4',
            'Backspace',
            'Delete',
            'Tab',
            'Shift',
            'Control',
            'Alt',
            'ArrowLeft',
            'ArrowRight',
          ];
          if (!allowedKeys.includes(e.key)) {
            e.preventDefault();
          }
        }
      },
      [type],
    );

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
      // password 타입일 때 자동으로 show/hide 아이콘 추가
      if (type === 'password' && !trailingIcon && !trailingIconType) {
        return (
          <div
            style={{
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: iconColor,
              cursor: 'pointer',
            }}
            onClick={handlePasswordToggle}
          >
            {showPassword ? (
              // 숨기기 아이콘 (eye-slash)
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M1.66699 10S4.16699 4.16667 10.0003 4.16667s8.33331 5.83333 8.33331 5.83333-2.5 5.8333-8.33331 5.8333S1.66699 10 1.66699 10Z"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="2"
                  y1="2"
                  x2="18"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              // 보기 아이콘 (eye)
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M1.66699 10S4.16699 4.16667 10.0003 4.16667s8.33331 5.83333 8.33331 5.83333-2.5 5.8333-8.33331 5.8333S1.66699 10 1.66699 10Z"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        );
      }

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

    // resident 타입일 때 별표 마스킹 렌더링
    const renderResidentMask = () => {
      if (type !== 'resident') return null;

      const textStyle = size === 'm' ? textStyles.body2 : textStyles.body1;

      // error state일 때 에러 색상, 아닐 때 primary 색상
      const maskColor = error ? colors.semantic.state.error : colors.semantic.text.primary;

      return (
        <div
          style={{
            position: 'absolute',
            left: `calc(${spacing.xs} + 1ch)`, // 패딩 + 한 글자 너비만큼 오른쪽으로
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: maskColor, // error state에 따라 색상 변경
            ...textStyle,
            zIndex: 1,
          }}
        >
          ******
        </div>
      );
    };

    return (
      <div
        className={`text-field-wrapper ${className}`}
        style={{ width: width === 'fill' ? '100%' : width }}
      >
        <div
          style={getContainerStyles()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {renderLeadingIcon()}

          <div style={{ position: 'relative', width: '100%' }}>
            <input
              ref={ref}
              type={inputType}
              value={currentValue}
              placeholder={placeholder}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              readOnly={readOnly}
              style={{
                ...getInputStyles(),
                zIndex: 2,
                position: 'relative',
                backgroundColor: 'transparent',
              }}
              maxLength={type === 'resident' ? 1 : undefined}
              {...restProps}
            />
            {renderResidentMask()}
          </div>

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
            <Icon type="caution-stroke" size={14} color={colors.semantic.state.error} />
            <span
              style={{
                color: colors.semantic.state.error,
                // size에 따른 텍스트 스타일 적용
                ...(size === 'm' ? textStyles.body3 : textStyles.body2),
                fontWeight: fontWeight.regular,
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
