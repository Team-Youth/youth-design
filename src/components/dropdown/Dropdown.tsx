import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { colors, spacing, typography } from '../../tokens';
import { IconType, Icon } from '../icon';

// 스피너 애니메이션을 위한 CSS keyframes 추가
const spinKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// 스타일 시트에 keyframes 추가
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = spinKeyframes;
  document.head.appendChild(style);
}

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
  /** Leading 아이콘 타입 (Icon 컴포넌트 사용) */
  leadingIconType?: IconType;
  /** 크기 설정 */
  size?: 'l' | 'm';
  /** 너비 설정 */
  width?: 'fill' | (string & {});
  /** 검색 기능 활성화 여부 */
  enableSearch?: boolean;
  /** 검색 텍스트 변경 콜백 */
  onSearchChange?: (searchValue: string) => void;
  /** 모든 옵션 숨김 여부 (드롭다운 자체를 열지 않음) */
  hideOption?: boolean;
  /** populated disabled 기능 활성화 여부 (기본값: false) */
  populatedDisabled?: boolean;
  /** 커스텀 컨텐츠 (기본 옵션 리스트 대신 렌더링) */
  customContent?: React.ReactNode;
  /** 커스텀 컨텐츠 사용 시 최대 높이 (기본값: 200px) */
  customContentMaxHeight?: number;
  /** 외부에서 드롭다운 열림 상태 제어 (선택사항) */
  isOpen?: boolean;
  /** 드롭다운 열림 상태 변경 콜백 (선택사항) */
  onOpenChange?: (isOpen: boolean) => void;
  /** 무한스크롤: 다음 페이지 로드 콜백 */
  onLoadMore?: () => void;
  /** 무한스크롤: 다음 페이지가 있는지 여부 */
  hasNextPage?: boolean;
  /** 무한스크롤: 로딩 중인지 여부 */
  isLoadingMore?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  placeholder = '',
  value,
  options = [],
  onChange,
  disabled = false,
  error = false,
  errorMessage,
  className = '',
  leadingIconType,
  size = 'l',
  width,
  enableSearch = false,
  onSearchChange,
  hideOption = false,
  populatedDisabled = false,
  customContent,
  customContentMaxHeight = 200,
  isOpen,
  onOpenChange,
  onLoadMore,
  hasNextPage,
  isLoadingMore,
}) => {
  const [isOpenState, setIsOpenState] = useState(isOpen || false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [hoveredOptionIndex, setHoveredOptionIndex] = useState<number | null>(null);
  const [searchText, setSearchText] = useState('');
  const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom');
  const [positionCalculated, setPositionCalculated] = useState(false);
  const [dropdownCoordinates, setDropdownCoordinates] = useState<{
    top?: number;
    bottom?: number;
    left: number;
    width: number;
  } | null>(null);

  // 외부에서 isOpen prop으로 제어하거나 내부 상태 사용
  const actualIsOpen = isOpen !== undefined ? isOpen : isOpenState;

  // 드롭다운 열림/닫힘 상태 변경 함수
  const setActualIsOpen = useCallback(
    (newIsOpen: boolean) => {
      if (isOpen !== undefined) {
        // 외부 제어 모드
        onOpenChange?.(newIsOpen);
      } else {
        // 내부 상태 모드
        setIsOpenState(newIsOpen);
      }
    },
    [isOpen, onOpenChange],
  );

  // 외부 isOpen prop 변경 시 내부 상태 동기화
  useEffect(() => {
    if (isOpen !== undefined) {
      setIsOpenState(isOpen);
    }
  }, [isOpen]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const optionsContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  );
  const hasSelectedOption = !!selectedOption;
  const hasCustomContent = !!customContent;

  // populated disabled 상태 체크: populatedDisabled가 true이고, 검색기능이 없고, 옵션이 하나뿐일 때만
  const isPopulatedDisabled = useMemo(() => {
    // populatedDisabled prop이 false면 populated disabled 기능 비활성화
    if (!populatedDisabled) return false;

    // 검색 기능이 활성화된 경우는 populated disabled 비활성화
    if (enableSearch) return false;

    // 활성화된 옵션이 정확히 1개일 때만 populated disabled 활성화
    const enabledOptions = options.filter((option) => !option.disabled);
    return enabledOptions.length === 1;
  }, [options, populatedDisabled, enableSearch]);

  // populated disabled 상태일 때 값이 없으면 자동으로 선택
  useEffect(() => {
    // 검색 기능이 있으면 자동 선택 비활성화
    if (enableSearch) return;

    // populated disabled 상태이고 현재 값이 없으면 유일한 옵션을 자동 선택
    if (isPopulatedDisabled && !value && onChange) {
      const enabledOptions = options.filter((option) => !option.disabled);
      if (enabledOptions.length === 1) {
        onChange(enabledOptions[0].value);
      }
    }
  }, [isPopulatedDisabled, value, onChange, options, enableSearch]);

  // 실제 disabled 상태 (사용자가 설정한 disabled 또는 populated disabled)
  const actuallyDisabled = disabled || isPopulatedDisabled;

  // 캔버스 인스턴스를 재사용하기 위한 ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 자주 사용되는 색상들 메모이제이션
  const colorPalette = useMemo(
    () => ({
      primary: colors.semantic.background.primary, // #FFFFFF
      disabled: colors.semantic.disabled.background, // #F3F5F6
      disabledText: colors.semantic.disabled.foreground, // #D1D5DB
      primaryText: colors.semantic.text.primary, // #25282D
      selectedBg: colors.primary.tint.violet[50],
      selectedText: colors.primary.mainviolet,
      placeholder: colors.primary.coolGray[300],
      error: colors.semantic.state.error, // #FF2E2E
      border: colors.semantic.border.strong, // #D6D6D6
    }),
    [],
  );

  // 텍스트 스타일 메모이제이션
  const textStyle = useMemo(() => {
    const baseStyle = size === 'l' ? typography.textStyles.body1 : typography.textStyles.body2;
    return {
      ...baseStyle,
      fontWeight: typography.fontWeight.medium,
    };
  }, [size]);

  // 텍스트 측정 함수 (메모이제이션)
  const measureText = useCallback(
    (text: string): number => {
      if (!canvasRef.current) {
        canvasRef.current = document.createElement('canvas');
      }

      const context = canvasRef.current.getContext('2d');
      if (!context) return 0;

      const fontSize = textStyle.fontSize || 16;
      const fontWeight = typography.fontWeight.medium || 500;

      context.font = `${fontWeight} ${fontSize}px system-ui, -apple-system, sans-serif`;
      return context.measureText(text).width;
    },
    [textStyle],
  );

  // 옵션 텍스트들의 최대 너비 계산 (메모이제이션)
  const maxOptionTextWidth = useMemo(() => {
    if (options.length === 0) return 0;
    return Math.max(...options.map((option) => measureText(option.label)));
  }, [options, measureText]);

  // 옵션 리스트의 최적 너비 계산 함수 (개선됨)
  const calculateOptimalWidth = useCallback((): number => {
    // 옵션이 없으면 기본값 반환
    if (options.length === 0) return 335;

    // customContent가 있는 경우 triggerWidth 사용 (마운트 후에만)
    if (hasCustomContent && triggerRef.current) {
      const triggerWidth = triggerRef.current.getBoundingClientRect().width;
      return triggerWidth > 0 ? triggerWidth : 335;
    }

    // 텍스트 기반 너비 계산: 패딩(32px) + 아이콘(20px) + 여유(16px) = 68px
    const textBasedWidth = maxOptionTextWidth + 68;

    // 최소 너비 계산 (triggerRef가 있고 측정 가능할 때만 고려)
    const triggerWidth = triggerRef.current?.getBoundingClientRect().width;
    const hasValidTriggerWidth = triggerWidth && triggerWidth > 0;
    const minWidth = hasValidTriggerWidth ? Math.max(triggerWidth, textBasedWidth) : textBasedWidth;

    // 최대 너비 제한
    const maxWidth = Math.min(window.innerWidth * 0.8, 600);

    // 최종 너비: 최소 120px, 최대 maxWidth, 기본 계산값 사용
    return Math.min(Math.max(minWidth, 120), maxWidth);
  }, [options.length, hasCustomContent, maxOptionTextWidth, triggerRef]);

  // width prop이 있으면 우선 적용, 없으면 최적 너비 계산
  const finalWidth = useMemo(() => {
    if (width) {
      return width;
    }
    // 최적 너비 계산 함수 사용, 계산 안되면 335px 폴백
    try {
      const optimalWidth = calculateOptimalWidth();
      return `${optimalWidth}px`;
    } catch {
      return '335px';
    }
  }, [width, calculateOptimalWidth]);

  // 무한스크롤 스크롤 이벤트 처리
  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      if (!onLoadMore || !hasNextPage || isLoadingMore) return;

      const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
      const scrollThreshold = 10; // 스크롤 임계값 (px)

      if (scrollHeight - scrollTop - clientHeight < scrollThreshold) {
        onLoadMore();
      }
    },
    [onLoadMore, hasNextPage, isLoadingMore],
  );

  // 검색 텍스트에 따른 옵션 필터링
  const filteredOptions = useMemo(() => {
    if (!enableSearch || !searchText.trim()) {
      return options;
    }
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [options, searchText, enableSearch]);

  // 드롭다운 위치 계산 함수
  const calculateDropdownPosition = useCallback(() => {
    if (!triggerRef.current) return 'bottom';

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const dropdownMaxHeight = hasCustomContent ? customContentMaxHeight : 200; // customContent일 때는 customContentMaxHeight 사용
    const margin = 8; // marginTop과 동일

    const spaceBelow = viewportHeight - triggerRect.bottom - margin;
    const spaceAbove = triggerRect.top - margin;

    // 아래쪽 공간이 충분하면 아래로, 아니면 위쪽 공간과 비교해서 더 넓은 쪽으로
    if (spaceBelow >= dropdownMaxHeight) {
      return 'bottom';
    } else if (spaceAbove >= dropdownMaxHeight) {
      return 'top';
    } else {
      return spaceBelow >= spaceAbove ? 'bottom' : 'top';
    }
  }, [hasCustomContent, customContentMaxHeight]);

  // 선택된 옵션의 인덱스를 찾기 위한 함수
  const getSelectedOptionIndex = useCallback(() => {
    if (!hasSelectedOption) return -1;
    return filteredOptions.findIndex((option) => option.value === value);
  }, [filteredOptions, value, hasSelectedOption]);

  // 선택된 옵션으로 스크롤 이동
  const scrollToSelectedOption = useCallback(() => {
    if (!hasSelectedOption) return;

    // 스크롤 실행 함수
    const performScroll = () => {
      if (!optionsContainerRef.current) return false;

      const selectedIndex = getSelectedOptionIndex();
      if (selectedIndex === -1) return false;

      const container = optionsContainerRef.current;
      const optionElements = container.children;
      const selectedElement = optionElements[selectedIndex] as HTMLElement;

      if (selectedElement && container.clientHeight > 0) {
        const containerHeight = container.clientHeight;
        const optionHeight = selectedElement.offsetHeight;
        const optionTop = selectedElement.offsetTop;

        // 선택된 옵션이 중앙에 오도록 스크롤 위치 계산
        const scrollTop = optionTop - containerHeight / 2 + optionHeight / 2;
        container.scrollTop = Math.max(0, scrollTop);
        return true;
      }
      return false;
    };

    // 즉시 실행 시도
    if (performScroll()) return;

    // 재시도 로직 (최대 3번)
    let retryCount = 0;
    const maxRetries = 3;

    const retryScroll = () => {
      if (retryCount >= maxRetries) return;

      if (performScroll()) return;

      retryCount++;
      setTimeout(retryScroll, 10); // 10ms씩 지연하여 재시도
    };

    setTimeout(retryScroll, 0);
  }, [hasSelectedOption, getSelectedOptionIndex]);

  // 드롭다운 위치 재계산 함수
  const recalculatePosition = useCallback(() => {
    if (!triggerRef.current || !actualIsOpen) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const position = calculateDropdownPosition();
    const optimalWidth = calculateOptimalWidth();

    // 좌표 재계산
    const coordinates = {
      left: triggerRect.left,
      width: optimalWidth,
      ...(position === 'bottom'
        ? { top: triggerRect.bottom + 8 }
        : { bottom: window.innerHeight - triggerRect.top + 8 }),
    };

    // 위치 상태 업데이트
    setDropdownPosition(position);
    setDropdownCoordinates(coordinates);
  }, [actualIsOpen, calculateDropdownPosition, calculateOptimalWidth]);

  // 드롭다운 열기/닫기 애니메이션 관리
  useEffect(() => {
    if (actualIsOpen) {
      // 먼저 위치와 좌표를 완전히 계산
      if (!triggerRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const position = calculateDropdownPosition();
      const optimalWidth = calculateOptimalWidth();

      // 좌표 미리 계산
      const coordinates = {
        left: triggerRect.left,
        width: optimalWidth,
        ...(position === 'bottom'
          ? { top: triggerRect.bottom + 8 }
          : { bottom: window.innerHeight - triggerRect.top + 8 }),
      };

      // 위치 상태 설정
      setDropdownPosition(position);
      setDropdownCoordinates(coordinates);

      // 이제 렌더링 시작 (위치가 이미 계산되어 있음)
      setShouldRender(true);
      setPositionCalculated(true); // 위치 계산 완료로 즉시 설정
      // hover 상태 초기화
      setHoveredOptionIndex(null);

      // requestAnimationFrame으로 애니메이션 시작
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // 스크롤 위치를 애니메이션 시작 직전에 설정
          scrollToSelectedOption();
          setIsAnimating(true);
          // 드롭다운이 열리고 검색이 활성화된 경우 input에 포커스
          if (enableSearch && inputRef.current) {
            inputRef.current.focus();
          }
        });
      });
    } else {
      // 닫기: 애니메이션 시작하고 완료 후 DOM에서 제거
      setIsAnimating(false);
      setPositionCalculated(false);
      setDropdownCoordinates(null);
      // hover 상태 초기화
      setHoveredOptionIndex(null);
      // 검색 텍스트 초기화 (검색이 활성화된 경우에만, 하지만 선택된 값이 있으면 유지)
      if (enableSearch) {
        setSearchText('');
      }
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 200); // 애니메이션 duration과 맞춤

      return () => clearTimeout(timer);
    }
  }, [
    actualIsOpen,
    enableSearch,
    scrollToSelectedOption,
    calculateDropdownPosition,
    calculateOptimalWidth,
  ]);

  // 창 크기 변경 시 드롭다운 위치 재계산
  useEffect(() => {
    if (!actualIsOpen) return;

    const handleResize = () => {
      // 디바운스를 위해 requestAnimationFrame 사용
      requestAnimationFrame(() => {
        recalculatePosition();
      });
    };

    window.addEventListener('resize', handleResize);
    // 스크롤 이벤트도 감지 (부모 요소가 스크롤될 때도 위치 재계산)
    window.addEventListener('scroll', handleResize, true);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize, true);
    };
  }, [actualIsOpen, recalculatePosition]);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActualIsOpen(false);
      }
    };

    if (actualIsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [actualIsOpen, setActualIsOpen]);

  // ESC 키로 드롭다운 닫기
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && actualIsOpen) {
        setActualIsOpen(false);
      }
    };

    if (actualIsOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [actualIsOpen, setActualIsOpen]);

  // 컨테이너 스타일
  const getContainerStyles = useCallback((): React.CSSProperties => {
    let borderColor: string = colorPalette.border;
    let backgroundColor: string = colorPalette.primary;

    if (actuallyDisabled) {
      borderColor = colorPalette.border;
      backgroundColor = colorPalette.disabled;
    } else if (error) {
      borderColor = colorPalette.error;
    } else if (actualIsOpen) {
      borderColor = colorPalette.primaryText;
    }

    // size에 따른 패딩 설정
    const padding = size === 'l' ? '12px 16px' : '9px 16px';

    return {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.xs, // 8px
      padding,
      backgroundColor,
      border: `1px solid ${borderColor}`,
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      cursor: actuallyDisabled ? 'not-allowed' : 'pointer',
      width: finalWidth === 'fill' ? '100%' : finalWidth,
      boxSizing: 'border-box',
      userSelect: !enableSearch ? 'none' : 'auto',
      ...(hideOption && { userSelect: 'none' }),
    };
  }, [
    actuallyDisabled,
    error,
    actualIsOpen,
    finalWidth,
    hideOption,
    enableSearch,
    size,
    colorPalette,
  ]);

  const getTextStyles = useCallback((): React.CSSProperties => {
    let textColor: string;

    if (actuallyDisabled) {
      // populated disabled 상태에서는 선택된 값이 있으면 일반 텍스트 색상, 없으면 비활성화 색상
      if (isPopulatedDisabled && hasSelectedOption) {
        textColor = colorPalette.primaryText;
      } else {
        textColor = colorPalette.disabledText;
      }
    } else if (error) {
      textColor = colorPalette.error;
    } else if (hasSelectedOption) {
      textColor = colorPalette.primaryText;
    } else {
      textColor = colorPalette.placeholder;
    }

    return {
      ...textStyle,
      flex: 1,
      color: textColor,
      userSelect: !enableSearch || hideOption ? 'none' : 'auto',
      // 말줄임 처리
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    };
  }, [
    actuallyDisabled,
    isPopulatedDisabled,
    error,
    hasSelectedOption,
    enableSearch,
    hideOption,
    textStyle,
    colorPalette,
  ]);

  const getInputStyles = useCallback((): React.CSSProperties => {
    return {
      ...textStyle,
      flex: 1,
      color: colorPalette.primaryText,
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      width: '100%',
    };
  }, [textStyle, colorPalette]);

  const getIconColor = useCallback(() => {
    if (actuallyDisabled) {
      // populated disabled 상태에서는 chevron 아이콘을 비활성화 색상으로 표시
      return colorPalette.disabledText;
    } else if (error) {
      return colorPalette.error;
    } else {
      return colorPalette.primaryText;
    }
  }, [actuallyDisabled, error, colorPalette]);

  const getChevronIcon = useCallback(
    () => (
      <Icon type={actualIsOpen ? 'chevron-up' : 'chevron-down'} size={20} color="currentColor" />
    ),
    [actualIsOpen],
  );

  const handleClick = useCallback(() => {
    if (!actuallyDisabled && !hideOption) {
      setActualIsOpen(!actualIsOpen);
    }
  }, [actuallyDisabled, hideOption, actualIsOpen, setActualIsOpen]);

  const handleOptionClick = useCallback(
    (optionValue: string) => {
      if (!actuallyDisabled) {
        onChange?.(optionValue);
        setActualIsOpen(false);
      }
    },
    [actuallyDisabled, onChange, setActualIsOpen],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        if (!hideOption) {
          handleClick();
        }
      }
    },
    [handleClick, hideOption],
  );

  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!enableSearch) return;

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
        setActualIsOpen(false);
      }
    },
    [enableSearch, filteredOptions, handleOptionClick],
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!enableSearch) return;
      const newSearchValue = event.target.value;
      setSearchText(newSearchValue);
      setHoveredOptionIndex(null);
      // 외부 검색 핸들러 호출
      onSearchChange?.(newSearchValue);
    },
    [enableSearch, onSearchChange],
  );

  const getOptionStyles = useCallback(
    (option: DropdownOption, index: number, isSelected: boolean) => {
      let backgroundColor: string = colorPalette.primary;
      let textColor: string = colorPalette.primaryText;

      if (option.disabled && isSelected) {
        // disabled이면서 selected인 경우 (완료된 세션 등)
        backgroundColor = colorPalette.disabled;
        textColor = colorPalette.disabledText;
      } else if (option.disabled) {
        backgroundColor = colorPalette.disabled;
        textColor = colorPalette.disabledText;
      } else if (isSelected) {
        backgroundColor = colorPalette.selectedBg;
        textColor = colorPalette.selectedText;
      } else if (hoveredOptionIndex === index) {
        backgroundColor = colorPalette.disabled;
      }

      return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '13px 16px',
        ...textStyle,
        color: textColor,
        backgroundColor,
        cursor: option.disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.2s ease',
      };
    },
    [hoveredOptionIndex, textStyle, colorPalette],
  );

  const dropdownOptionsStyle: React.CSSProperties = useMemo(
    () => ({
      position: 'fixed',
      left: dropdownCoordinates?.left || 0,
      // customContent가 있을 때는 minWidth로 처리하여 컨텐츠가 더 넓어질 수 있도록 함
      ...(hasCustomContent
        ? { minWidth: dropdownCoordinates?.width || 0, width: 'auto' }
        : { width: dropdownCoordinates?.width || 0 }),
      ...(dropdownPosition === 'bottom'
        ? {
            top: dropdownCoordinates?.top || 0,
          }
        : {
            bottom: dropdownCoordinates?.bottom || 0,
          }),
      // customContent가 있을 때는 기본 스타일을 제거
      ...(hasCustomContent
        ? {
            // customContent는 자체 스타일링을 가지므로 기본 배경/보더 제거
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: 0,
            boxShadow: 'none',
          }
        : {
            backgroundColor: colors.semantic.background.primary,
            border: `1px solid ${colors.semantic.border.strong}`,
            borderRadius: '8px',
            boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.06)',
          }),
      // 모달(9999)보다 높은 z-index 사용하여 iPad Chrome에서도 확실히 위에 표시
      zIndex: 10000,
      maxHeight: hasCustomContent ? `${customContentMaxHeight}px` : '200px',
      overflowY: hasCustomContent ? 'visible' : 'auto', // customContent일 때는 overflow 처리를 컨텐츠에 맡김
      // 위치 계산이 완료되기 전에는 보이지 않게 함
      visibility: positionCalculated ? 'visible' : 'hidden',
      // 애니메이션 스타일
      opacity: isAnimating ? 1 : 0,
      transform: isAnimating
        ? 'translateY(0) scaleY(1)'
        : dropdownPosition === 'bottom'
          ? 'translateY(-8px) scaleY(0.95)'
          : 'translateY(8px) scaleY(0.95)',
      transformOrigin: dropdownPosition === 'bottom' ? 'top center' : 'bottom center',
      transition: positionCalculated ? 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
      userSelect: !enableSearch ? 'none' : 'auto',
      boxSizing: 'border-box',
      // iPad Chrome에서 stacking context 문제 해결을 위한 추가 속성
      isolation: 'isolate',
      // 모바일 브라우저에서 하드웨어 가속 활용
      willChange: isAnimating ? 'transform, opacity' : 'auto',
    }),
    [
      isAnimating,
      enableSearch,
      dropdownPosition,
      positionCalculated,
      dropdownCoordinates,
      hasCustomContent,
      customContentMaxHeight,
    ],
  );

  const getCheckIcon = () => <Icon type="check" size={20} color="currentColor" />;
  const getLockIcon = () => <Icon type="lock" size={20} color="currentColor" />;

  // 표시할 텍스트 결정
  const getDisplayText = () => {
    if (actualIsOpen && enableSearch) {
      return searchText;
    }
    return hasSelectedOption ? selectedOption.label : placeholder;
  };

  // 플레이스홀더 텍스트 결정
  const getPlaceholderText = () => {
    if (actualIsOpen && enableSearch) {
      return hasSelectedOption ? selectedOption.label : placeholder;
    }
    return '';
  };

  // Leading 아이콘 렌더링
  const renderLeadingIcon = () => {
    if (!leadingIconType) return null;

    // populated disabled 상태에서는 leading icon 색상을 별도 처리
    const leadingIconColor =
      actuallyDisabled && isPopulatedDisabled && hasSelectedOption
        ? colors.semantic.text.primary // populated disabled에서 선택된 값이 있으면 일반 색상
        : getIconColor();

    return <Icon type={leadingIconType} size={20} color={leadingIconColor} />;
  };

  return (
    <div
      className={`dropdown-wrapper ${className}`}
      ref={dropdownRef}
      style={{
        position: 'relative',
        width: finalWidth === 'fill' ? '100%' : finalWidth,
        // 드롭다운이 열려도 높이에 영향을 주지 않도록 설정, 모달보다 높은 z-index 사용
        zIndex: actualIsOpen ? 10001 : 'auto',
      }}
    >
      <div
        ref={triggerRef}
        style={getContainerStyles()}
        onClick={!actualIsOpen || !enableSearch ? handleClick : undefined}
        onKeyDown={!actualIsOpen || !enableSearch ? handleKeyDown : undefined}
        tabIndex={actuallyDisabled || (actualIsOpen && enableSearch) ? -1 : 0}
        role="combobox"
        aria-expanded={actualIsOpen}
        aria-haspopup="listbox"
        aria-disabled={actuallyDisabled}
      >
        {renderLeadingIcon()}
        {actualIsOpen && enableSearch ? (
          <input
            ref={inputRef}
            type="text"
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder={getPlaceholderText()}
            style={getInputStyles()}
            disabled={actuallyDisabled}
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
            transform: actualIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
          onClick={actualIsOpen && enableSearch ? handleClick : undefined}
        >
          {getChevronIcon()}
        </div>
      </div>

      {shouldRender && !hideOption && dropdownCoordinates && (
        <div
          style={dropdownOptionsStyle}
          role="listbox"
          ref={optionsContainerRef}
          onScroll={handleScroll}
        >
          {hasCustomContent ? (
            customContent
          ) : filteredOptions.length === 0 ? (
            <div
              style={{
                padding: '13px 16px',
                ...textStyle,
                color: colors.semantic.disabled.foreground,
                textAlign: 'center',
                userSelect: !enableSearch ? 'none' : 'auto',
              }}
            >
              {enableSearch && searchText.trim() ? '검색 결과가 없습니다' : '옵션이 없습니다'}
            </div>
          ) : (
            <>
              {filteredOptions.map((option, index) => {
                const isSelected = value === option.value;
                return (
                  <div
                    key={option.value}
                    style={{
                      ...getOptionStyles(option, index, isSelected),
                      userSelect: !enableSearch ? 'none' : 'auto',
                    }}
                    onClick={() => !option.disabled && handleOptionClick(option.value)}
                    onMouseEnter={() => setHoveredOptionIndex(index)}
                    onMouseLeave={() => setHoveredOptionIndex(null)}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={option.disabled}
                  >
                    <span>{option.label}</span>
                    {isSelected ? (
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: option.disabled
                            ? colorPalette.disabledText
                            : colorPalette.selectedText,
                        }}
                      >
                        {getCheckIcon()}
                      </div>
                    ) : option.disabled ? (
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.semantic.disabled.foreground,
                        }}
                      >
                        {getLockIcon()}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              {/* 무한스크롤 로딩 인디케이터 */}
              {isLoadingMore && (
                <div
                  style={{
                    padding: '13px 16px',
                    ...textStyle,
                    color: colors.semantic.disabled.foreground,
                    textAlign: 'center',
                    userSelect: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid #f3f3f3',
                      borderTop: '2px solid #cccccc',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                    }}
                  />
                </div>
              )}
            </>
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
              ...textStyle,
              color: colors.semantic.state.error,
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
