import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { colors, spacing } from '../../tokens';
import { Icon, IconType } from '../icon/Icon';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /** 드롭다운 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 선택된 값 */
  value?: string;
  /** 옵션 리스트 */
  options?: DropdownOption[];
  /** 값 변경 시 호출되는 콜백 */
  onChange?: (value: string) => void;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 에러 상태 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 커스텀 클래스명 */
  className?: string;
  /** Leading 아이콘 */
  leadingIcon?: React.ReactNode;
  /** Leading 아이콘 타입 (Icon 컴포넌트 사용) */
  leadingIconType?: IconType;
}

export const Dropdown: React.FC<DropdownProps> = ({
  placeholder = 'Placeholder',
  value,
  options = [],
  onChange,
  disabled = false,
  error = false,
  errorMessage,
  className = '',
  leadingIcon,
  leadingIconType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [hoveredOptionIndex, setHoveredOptionIndex] = useState<number | null>(null);
  const [searchText, setSearchText] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  );
  const hasSelectedOption = !!selectedOption;

  // 검색 텍스트에 따른 옵션 필터링
  const filteredOptions = useMemo(() => {
    if (!searchText.trim()) {
      return options;
    }
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [options, searchText]);

  // 드롭다운 열기/닫기 애니메이션 관리
  useEffect(() => {
    if (isOpen) {
      // 열기: 먼저 DOM에 마운트하고 애니메이션 시작
      setShouldRender(true);
      // 두 번의 requestAnimationFrame으로 확실히 DOM 렌더링 후 애니메이션 시작
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
          // 드롭다운이 열리면 input에 포커스
          if (inputRef.current) {
            inputRef.current.focus();
          }
        });
      });
    } else {
      // 닫기: 애니메이션 시작하고 완료 후 DOM에서 제거
      setIsAnimating(false);
      // 검색 텍스트 초기화
      setSearchText('');
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 200); // 애니메이션 duration과 맞춤

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // ESC 키로 드롭다운 닫기
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const getContainerStyles = useCallback((): React.CSSProperties => {
    let borderColor: string = colors.semantic.border.strong; // #D6D6D6
    let backgroundColor: string = colors.semantic.background.primary; // #FFFFFF

    if (disabled) {
      borderColor = colors.semantic.border.strong;
      backgroundColor = colors.semantic.disabled.background; // #F3F5F6
    } else if (error) {
      borderColor = colors.semantic.state.error; // #FF2E2E
    } else if (isOpen) {
      borderColor = colors.semantic.text.primary; // #25282D
    }

    return {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.xs, // 8px
      padding: '13px 16px', // Figma 스펙에 맞춤
      backgroundColor,
      border: `1px solid ${borderColor}`,
      borderRadius: '8px', // Figma 스펙에 맞춤
      transition: 'all 0.2s ease',
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: '100%',
      boxSizing: 'border-box',
    };
  }, [disabled, error, isOpen]);

  const getTextStyles = useCallback((): React.CSSProperties => {
    let textColor: string;

    if (disabled) {
      textColor = colors.semantic.disabled.foreground; // #D1D5DB
    } else if (error) {
      textColor = colors.semantic.state.error; // #FF2E2E
    } else if (hasSelectedOption) {
      textColor = colors.semantic.text.primary; // #25282D
    } else {
      textColor = '#AFB6C0'; // Figma 스펙의 placeholder 색상
    }

    return {
      flex: 1,
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '22px', // 1.5714285714285714em = 22px
      letterSpacing: '-0.28px', // -2%
      fontFamily: 'Pretendard',
      color: textColor,
    };
  }, [disabled, error, hasSelectedOption]);

  const getInputStyles = useCallback((): React.CSSProperties => {
    return {
      flex: 1,
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '22px',
      letterSpacing: '-0.28px',
      fontFamily: 'Pretendard',
      color: colors.semantic.text.primary,
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      width: '100%',
    };
  }, []);

  const getIconColor = useCallback(() => {
    if (disabled) {
      return colors.semantic.disabled.foreground; // #D1D5DB
    } else if (error) {
      return colors.semantic.state.error; // #FF2E2E
    } else {
      return colors.semantic.text.primary; // #25282D
    }
  }, [disabled, error]);

  const getChevronIcon = useCallback(
    () => <Icon type={isOpen ? 'arrow-up' : 'arrow-down'} size={20} color="currentColor" />,
    [isOpen],
  );

  const handleClick = useCallback(() => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  }, [disabled, isOpen]);

  const handleOptionClick = useCallback(
    (optionValue: string) => {
      if (!disabled) {
        onChange?.(optionValue);
        setIsOpen(false);
      }
    },
    [disabled, onChange],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleClick();
      }
    },
    [handleClick],
  );

  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        // 첫 번째 필터링된 옵션 선택
        if (filteredOptions.length > 0 && !filteredOptions[0].disabled) {
          handleOptionClick(filteredOptions[0].value);
        }
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        // 첫 번째 옵션에 호버 효과
        if (filteredOptions.length > 0) {
          setHoveredOptionIndex(0);
        }
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
      }
    },
    [filteredOptions, handleOptionClick],
  );

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setHoveredOptionIndex(null);
  }, []);

  const getOptionStyles = useCallback(
    (option: DropdownOption, index: number, isSelected: boolean) => {
      let backgroundColor: string = colors.semantic.background.primary; // #FFFFFF
      let textColor: string = colors.semantic.text.primary; // #25282D

      if (option.disabled) {
        textColor = colors.semantic.disabled.foreground; // #D1D5DB
      } else if (isSelected) {
        backgroundColor = '#F8F4FE'; // Figma 스펙의 선택된 옵션 배경색
        textColor = '#7248D9'; // Figma 스펙의 선택된 옵션 텍스트 색상
      } else if (hoveredOptionIndex === index) {
        backgroundColor = colors.semantic.disabled.background; // #F3F5F6
      }

      return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '13px 16px', // Figma 스펙에 맞춘 패딩
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '22px',
        letterSpacing: '-0.28px', // -2%
        fontFamily: 'Pretendard',
        color: textColor,
        backgroundColor,
        cursor: option.disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.2s ease',
      };
    },
    [hoveredOptionIndex],
  );

  const dropdownOptionsStyle: React.CSSProperties = useMemo(
    () => ({
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: colors.semantic.background.primary,
      border: `1px solid ${colors.semantic.border.strong}`,
      borderRadius: '8px', // Figma 스펙에 맞춤
      boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.06)', // Figma 스펙의 그림자
      zIndex: 1000,
      marginTop: '8px', // Figma 스펙에 맞춘 간격
      maxHeight: '200px',
      overflowY: 'auto',
      // 애니메이션 스타일
      opacity: isAnimating ? 1 : 0,
      transform: isAnimating ? 'translateY(0) scaleY(1)' : 'translateY(-8px) scaleY(0.95)',
      transformOrigin: 'top center',
      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)', // 자연스러운 easing
    }),
    [isAnimating],
  );

  const getCheckIcon = () => <Icon type="check" size={20} color="currentColor" />;

  // 표시할 텍스트 결정
  const getDisplayText = () => {
    if (isOpen) {
      return searchText;
    }
    return hasSelectedOption ? selectedOption.label : placeholder;
  };

  // 플레이스홀더 텍스트 결정
  const getPlaceholderText = () => {
    if (isOpen) {
      return hasSelectedOption ? selectedOption.label : placeholder;
    }
    return '';
  };

  // Leading 아이콘 렌더링
  const renderLeadingIcon = () => {
    if (leadingIconType) {
      return <Icon type={leadingIconType} size={20} color={getIconColor()} />;
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
            color: getIconColor(),
          }}
        >
          {leadingIcon}
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={`dropdown-wrapper ${className}`}
      ref={dropdownRef}
      style={{ position: 'relative', width: '335px' }} // Figma 스펙의 고정 너비
    >
      <div
        style={getContainerStyles()}
        onClick={!isOpen ? handleClick : undefined}
        onKeyDown={!isOpen ? handleKeyDown : undefined}
        tabIndex={disabled || isOpen ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-disabled={disabled}
      >
        {renderLeadingIcon()}

        {isOpen ? (
          <input
            ref={inputRef}
            type="text"
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder={getPlaceholderText()}
            style={getInputStyles()}
            disabled={disabled}
          />
        ) : (
          <div style={getTextStyles()}>{getDisplayText()}</div>
        )}

        <div
          style={{
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: getIconColor(),
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
          onClick={isOpen ? handleClick : undefined}
        >
          {getChevronIcon()}
        </div>
      </div>

      {shouldRender && (
        <div style={dropdownOptionsStyle} role="listbox">
          {filteredOptions.length === 0 ? (
            <div
              style={{
                padding: '13px 16px',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '22px',
                color: colors.semantic.disabled.foreground,
                fontFamily: 'Pretendard',
                textAlign: 'center',
              }}
            >
              검색 결과가 없습니다
            </div>
          ) : (
            filteredOptions.map((option, index) => {
              const isSelected = value === option.value;
              return (
                <div
                  key={option.value}
                  style={getOptionStyles(option, index, isSelected)}
                  onClick={() => !option.disabled && handleOptionClick(option.value)}
                  onMouseEnter={() => setHoveredOptionIndex(index)}
                  onMouseLeave={() => setHoveredOptionIndex(null)}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#7248D9', // Figma 스펙의 체크 아이콘 색상
                      }}
                    >
                      {getCheckIcon()}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {error && errorMessage && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing.xxs, // 4px
            marginTop: spacing.xxs, // 4px
          }}
        >
          <span
            style={{
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '22px',
              color: colors.semantic.state.error,
              fontFamily: 'Pretendard',
            }}
          >
            {errorMessage}
          </span>
        </div>
      )}
    </div>
  );
};

Dropdown.displayName = 'Dropdown';
