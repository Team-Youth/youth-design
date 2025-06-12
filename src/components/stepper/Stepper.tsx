import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Icon } from '../icon/Icon';
import { Font } from '../font/Font';
import { colors } from '../../tokens/colors';
import { fontWeight, textStyles } from '../../tokens';

export interface StepperProps {
  /** 초기 값 */
  value?: number | string;
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
  /** 단위 (예: "회", "분", "개월") */
  unit?: string;
  /** 증감 폭 (기본값: 1) */
  step?: number;
  /** 시간 관련 값인지 여부 */
  isTime?: boolean;
  /** 시간의 시작 단위 ('sec' | 'min' | 'hour') */
  timeBaseUnit?: 'sec' | 'min' | 'hour';
  /** 입력값을 step 단위로 자동 반올림할지 여부 (기본값: false) */
  autoRound?: boolean;
}

// 시간 변환 유틸리티 함수들
const formatTime = (totalValue: number, baseUnit: 'sec' | 'min' | 'hour'): string => {
  let totalSeconds: number;

  // baseUnit에 따라 초로 변환
  if (baseUnit === 'min') {
    totalSeconds = totalValue * 60;
  } else if (baseUnit === 'hour') {
    totalSeconds = totalValue * 3600;
  } else {
    totalSeconds = totalValue;
  }

  // baseUnit에 따라 최소 표시 단위 결정
  if (baseUnit === 'hour') {
    // 시간 단위: 최소 시간으로 표시
    const hours = totalSeconds / 3600;
    if (hours === Math.floor(hours)) {
      return `${Math.floor(hours)}시간`;
    }

    const wholeHours = Math.floor(hours);
    const remainingMinutes = Math.round((hours - wholeHours) * 60);

    if (wholeHours === 0) {
      return `${remainingMinutes}분`;
    }

    if (remainingMinutes === 0) {
      return `${wholeHours}시간`;
    }

    return `${wholeHours}시간 ${remainingMinutes}분`;
  }

  if (baseUnit === 'min') {
    // 분 단위: 최소 분으로 표시 (초는 표시하지 않음)
    const totalMinutes = Math.round(totalSeconds / 60);

    if (totalMinutes < 60) {
      return `${totalMinutes}분`;
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (minutes === 0) {
      return `${hours}시간`;
    }

    return `${hours}시간 ${minutes}분`;
  }

  // 초 단위: 초, 분, 시간 모두 표시
  if (totalSeconds < 60) {
    return `${totalSeconds}초`;
  }

  if (totalSeconds < 3600) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (seconds === 0) {
      return `${minutes}분`;
    }
    return `${minutes}분 ${seconds}초`;
  }

  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  let result = `${hours}시간`;

  if (minutes > 0) {
    result += ` ${minutes}분`;
  }

  if (seconds > 0) {
    result += ` ${seconds}초`;
  }

  return result;
};

const parseTimeString = (timeStr: string, baseUnit: 'sec' | 'min' | 'hour'): number => {
  // 빈 문자열이면 0 반환
  if (!timeStr.trim()) {
    return 0;
  }

  // "1시간 30분 45초" or "90분 30초" or "45초" 형태의 문자열을 파싱
  const hourMatch = timeStr.match(/(\d+)시간/);
  const minuteMatch = timeStr.match(/(\d+)분/);
  const secondMatch = timeStr.match(/(\d+)초/);

  let totalSeconds = 0;
  let hasValidInput = false;

  if (hourMatch) {
    const hours = parseInt(hourMatch[1]);
    if (!isNaN(hours)) {
      totalSeconds += hours * 3600;
      hasValidInput = true;
    }
  }

  if (minuteMatch) {
    const minutes = parseInt(minuteMatch[1]);
    if (!isNaN(minutes)) {
      totalSeconds += minutes * 60;
      hasValidInput = true;
    }
  }

  if (secondMatch && baseUnit === 'sec') {
    // 초는 baseUnit이 'sec'일 때만 처리
    const seconds = parseInt(secondMatch[1]);
    if (!isNaN(seconds)) {
      totalSeconds += seconds;
      hasValidInput = true;
    }
  }

  // 순수 숫자만 입력된 경우 (단위 없음)
  if (!hasValidInput) {
    const numericValue = parseInt(timeStr.trim());
    if (!isNaN(numericValue)) {
      totalSeconds = numericValue;
      // baseUnit에 따라 초로 변환
      if (baseUnit === 'min') {
        totalSeconds = numericValue * 60;
      } else if (baseUnit === 'hour') {
        totalSeconds = numericValue * 3600;
      }
      hasValidInput = true;
    }
  }

  // 유효한 입력이 없으면 에러 던지기
  if (!hasValidInput) {
    throw new Error('Invalid time format');
  }

  // baseUnit에 따라 원래 단위로 변환
  if (baseUnit === 'min') {
    return totalSeconds / 60;
  } else if (baseUnit === 'hour') {
    return totalSeconds / 3600;
  }

  return totalSeconds;
};

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
  unit = '',
  step = 1,
  isTime = false,
  timeBaseUnit = 'min',
  autoRound = false,
}) => {
  // value가 string인지 체크
  const isStringValue = typeof value === 'string';
  // string이면 자동으로 disabled 처리
  const isDisabled = disabled || isStringValue;

  // 숫자 값만 관리 (string일 때는 0으로 초기화하되 실제로는 사용하지 않음)
  const numericValue = typeof value === 'number' ? value : 0;

  const [internalValue, setInternalValue] = useState(numericValue);
  const [isFocused, setIsFocused] = useState(focused);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(String(numericValue));
  const [stepCount, setStepCount] = useState(() => {
    // 초기 stepCount 계산 - value를 step으로 나눈 값의 반올림
    return step > 0 ? Math.round(numericValue / step) : 0;
  });
  const inputRef = useRef<HTMLInputElement>(null);

  // value prop이 변경될 때 internalValue 동기화 (숫자일 때만)
  useEffect(() => {
    if (typeof value === 'number') {
      setInternalValue(value);
    }
  }, [value]);

  // value prop을 기반으로 currentValue 계산 (외부에서 제어되는 경우와 내부에서 제어되는 경우 구분)
  const currentValue = useMemo(() => {
    return typeof value === 'number' ? internalValue : 0;
  }, [internalValue, value]);

  // stepCount 기반으로 실제 값 계산
  const getActualValue = (count: number): number => {
    const stepValue = count * step;
    return Math.max(min, Math.min(max, stepValue));
  };

  // min/max 도달 상태를 useMemo로 계산
  const { isMinReached, isMaxReached } = useMemo(
    () => ({
      isMinReached: currentValue <= min,
      isMaxReached: currentValue >= max,
    }),
    [currentValue, min, max],
  );

  useEffect(() => {
    if (!isEditing) {
      if (isTime) {
        setEditValue(formatTime(currentValue, timeBaseUnit));
      } else {
        setEditValue(String(currentValue));
      }
    }
  }, [currentValue, isEditing, isTime, timeBaseUnit]);

  // value prop이 변경될 때 stepCount 동기화
  useEffect(() => {
    const newStepCount = step > 0 ? Math.round(currentValue / step) : 0;
    setStepCount(newStepCount);
  }, [currentValue, step]);

  const handleIncrement = () => {
    if (isDisabled || isMaxReached) return;

    let newValue: number;
    const isExactStepValue = currentValue % step === 0;

    if (isExactStepValue) {
      // 정확한 step 배수라면 step만큼 증가
      newValue = currentValue + step;
    } else {
      // step 배수가 아니라면 다음 step 배수로 올림
      newValue = Math.ceil(currentValue / step) * step;
    }

    // min/max 범위 체크
    newValue = Math.max(min, Math.min(max, newValue));

    // stepCount 업데이트
    const newStepCount = step > 0 ? Math.round(newValue / step) : 0;
    setStepCount(newStepCount);

    onChange && onChange(newValue);
    setInternalValue(newValue);
  };

  const handleDecrement = () => {
    if (isDisabled || isMinReached) return;

    let newValue: number;
    const isExactStepValue = currentValue % step === 0;

    if (isExactStepValue) {
      // 정확한 step 배수라면 step만큼 감소
      newValue = currentValue - step;
    } else {
      // step 배수가 아니라면 이전 step 배수로 내림
      newValue = Math.floor(currentValue / step) * step;
    }

    // min/max 범위 체크
    newValue = Math.max(min, Math.min(max, newValue));

    // stepCount 업데이트
    const newStepCount = step > 0 ? Math.round(newValue / step) : 0;
    setStepCount(newStepCount);

    onChange && onChange(newValue);
    setInternalValue(newValue);
  };

  const handleValueClick = () => {
    if (editable && !isDisabled && !error && !isStringValue) {
      setIsEditing(true);
      setIsFocused(true);
      if (isTime) {
        setEditValue(formatTime(currentValue, timeBaseUnit));
      } else {
        setEditValue(String(currentValue));
      }
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (isTime) {
      // 시간 형식 입력 허용 (숫자, 시간, 분, 초, 공백)
      // 순수 숫자만 입력하는 경우도 허용 (나중에 baseUnit에 따라 해석)
      if (inputValue === '' || /^[\d시간분초\s]*$/.test(inputValue)) {
        setEditValue(inputValue);
      }
    } else {
      // 숫자와 마이너스 기호만 허용
      if (inputValue === '' || /^-?\d*$/.test(inputValue)) {
        setEditValue(inputValue);
      }
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    setIsFocused(false);

    let newValue: number;

    if (isTime) {
      // 시간 문자열을 숫자로 변환
      try {
        newValue = parseTimeString(editValue, timeBaseUnit);
      } catch (error) {
        // 파싱 실패시 현재 값 유지
        setEditValue(formatTime(currentValue, timeBaseUnit));
        return;
      }
    } else {
      newValue = parseInt(editValue, 10);

      // 빈 값이거나 유효하지 않은 값인 경우 현재 값 유지
      if (editValue === '' || isNaN(newValue)) {
        setEditValue(String(currentValue));
        return;
      }
    }

    // min, max 범위 체크 먼저
    if (newValue < min) {
      newValue = min;
    } else if (newValue > max) {
      newValue = max;
    }

    // step 단위로 반올림 (isTime이거나 autoRound가 true일 때만)
    if ((isTime || autoRound) && step && step > 0) {
      const roundedStepCount = Math.round(newValue / step);
      newValue = getActualValue(roundedStepCount);
      setStepCount(roundedStepCount);
    } else {
      // autoRound가 false인 경우에도 stepCount 업데이트
      const newStepCount = step > 0 ? Math.round(newValue / step) : 0;
      setStepCount(newStepCount);
    }

    if (isTime) {
      setEditValue(formatTime(newValue, timeBaseUnit));
    } else {
      setEditValue(String(newValue));
    }

    onChange && onChange(newValue);
    setInternalValue(newValue);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setIsFocused(false);
      if (isTime) {
        setEditValue(formatTime(currentValue, timeBaseUnit));
      } else {
        setEditValue(String(currentValue));
      }
    }
  };

  // 표시할 값 계산
  const displayValue = useMemo(() => {
    // string 값이면 그대로 표시
    if (isStringValue) {
      return String(value);
    }

    if (isTime) {
      return formatTime(currentValue, timeBaseUnit);
    } else if (unit) {
      return `${currentValue}${unit}`;
    }
    return String(currentValue);
  }, [currentValue, isTime, timeBaseUnit, unit, isStringValue, value]);

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
    backgroundColor: isDisabled ? colors.primary.coolGray[50] : colors.primary.gray.white,
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
    cursor: editable && !isDisabled && !error && !isStringValue ? 'text' : 'default',
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
            isDisabled || isMinReached ? colors.primary.coolGray[400] : colors.primary.coolGray[800]
          }
          onClick={handleDecrement}
          style={{
            cursor: isDisabled || isMinReached ? 'not-allowed' : 'pointer',
            opacity: isDisabled || isMinReached ? 0.5 : 1,
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
                isDisabled
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
              {displayValue}
            </Font>
          )}
        </div>

        <Icon
          type="add-circle-filled"
          size={24}
          color={
            isDisabled || isMaxReached ? colors.primary.coolGray[400] : colors.primary.coolGray[800]
          }
          onClick={handleIncrement}
          style={{
            cursor: isDisabled || isMaxReached ? 'not-allowed' : 'pointer',
            opacity: isDisabled || isMaxReached ? 0.5 : 1,
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
