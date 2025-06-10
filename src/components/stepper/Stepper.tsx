import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../icon/Icon';
import { Font } from '../font/Font';
import { colors } from '../../tokens/colors';
import { fontWeight, textStyles } from '../../tokens';

export interface StepperProps {
  /** 초기 값 */
  value?: number;
  /** 최소값 */
  min?: number;
  /** 최대값 */
  max?: number;
  /** 값 변경 시 호출되는 콜백 */
  onChange?: (value: number) => void;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 컴포넌트 너비 */
  width?: 'fill' | (string & {});
  /** 에러 상태 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 포커스 상태 */
  focused?: boolean;
  /** 키보드로 직접 편집 가능 여부 */
  editable?: boolean;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
}

export const Stepper: React.FC<StepperProps> = ({
  value = 0,
  min = 0,
  max = 100,
  onChange,
  disabled = false,
  width = '335px',
  error = false,
  errorMessage,
  focused = false,
  editable = false,
  className = '',
  style = {},
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isFocused, setIsFocused] = useState(focused);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(String(value));
  const inputRef = useRef<HTMLInputElement>(null);

  const currentValue = onChange ? value : internalValue;
  const isMinReached = currentValue <= min;
  const isMaxReached = currentValue >= max;

  useEffect(() => {
    if (!isEditing) {
      setEditValue(String(currentValue));
    }
  }, [currentValue, isEditing]);

  const handleIncrement = () => {
    if (disabled || isMaxReached) return;
    const newValue = currentValue + 1;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleDecrement = () => {
    if (disabled || isMinReached) return;
    const newValue = currentValue - 1;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleValueClick = () => {
    if (editable && !disabled && !error) {
      setIsEditing(true);
      setIsFocused(true);
      setEditValue(String(currentValue));
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // 숫자와 마이너스 기호만 허용
    if (inputValue === '' || /^-?\d*$/.test(inputValue)) {
      setEditValue(inputValue);
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    setIsFocused(false);

    let newValue = parseInt(editValue, 10);

    // 빈 값이거나 유효하지 않은 값인 경우 현재 값 유지
    if (editValue === '' || isNaN(newValue)) {
      setEditValue(String(currentValue));
      return;
    }

    // min, max 범위 체크
    if (newValue < min) {
      newValue = min;
    } else if (newValue > max) {
      newValue = max;
    }

    setEditValue(String(newValue));

    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setIsFocused(false);
      setEditValue(String(currentValue));
    }
  };

  // 스타일 계산
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: error && errorMessage ? '6px' : '16px',
    width: width === 'fill' ? '100%' : width,
    userSelect: 'none',
    ...style,
  };

  const stepperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '12px 16px',
    borderRadius: '8px',
    border: `1px solid ${
      error
        ? colors.semantic.state.error
        : isFocused
          ? colors.primary.coolGray[800]
          : colors.primary.coolGray[300]
    }`,
    backgroundColor: disabled ? colors.primary.coolGray[50] : colors.primary.gray.white,
    width: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease',
    position: 'relative',
    userSelect: 'none',
  };

  const valueContainerStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    cursor: editable && !disabled && !error ? 'text' : 'default',
    userSelect: 'none',
  };

  const inputStyle: React.CSSProperties = {
    ...textStyles.heading3,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontWeight: fontWeight.semibold,
    textAlign: 'center',
    color: colors.primary.coolGray[800],
    width: '100%',
    padding: 0,
    margin: 0,
    userSelect: 'none',
  };

  return (
    <div className={`stepper ${className}`} style={containerStyle}>
      <div style={stepperStyle}>
        <Icon
          type="minus-circle-filled"
          size={24}
          color={
            disabled || isMinReached ? colors.primary.coolGray[400] : colors.primary.coolGray[800]
          }
          onClick={handleDecrement}
          style={{
            cursor: disabled || isMinReached ? 'not-allowed' : 'pointer',
            opacity: disabled || isMinReached ? 0.5 : 1,
            userSelect: 'none',
          }}
        />

        <div style={valueContainerStyle} onClick={handleValueClick}>
          {isEditing ? (
            <input
              ref={inputRef}
              type="text"
              value={editValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              style={inputStyle}
            />
          ) : (
            <Font
              type="heading3"
              fontWeight="semibold"
              color={
                disabled
                  ? colors.primary.coolGray[400]
                  : error
                    ? colors.semantic.state.error
                    : colors.primary.coolGray[800]
              }
              align="center"
              style={{
                userSelect: 'none',
              }}
            >
              {currentValue}
            </Font>
          )}
        </div>

        <Icon
          type="add-circle-filled"
          size={24}
          color={
            disabled || isMaxReached ? colors.primary.coolGray[400] : colors.primary.coolGray[800]
          }
          onClick={handleIncrement}
          style={{
            cursor: disabled || isMaxReached ? 'not-allowed' : 'pointer',
            opacity: disabled || isMaxReached ? 0.5 : 1,
            userSelect: 'none',
          }}
        />
      </div>

      {error && errorMessage && (
        <div
          style={{
            paddingLeft: '16px',
            width: '100%',
            boxSizing: 'border-box',
            userSelect: 'none',
          }}
        >
          <Font
            type="body2"
            fontWeight="medium"
            color={colors.semantic.state.error}
            align="left"
            style={{
              userSelect: 'none',
            }}
          >
            {errorMessage}
          </Font>
        </div>
      )}
    </div>
  );
};
