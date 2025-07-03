import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../icon';
import { colors, textStyles, fontWeight } from '../../tokens';

// 인라인 스타일 정의
const styles = {
  popover: {
    position: 'fixed' as const,
    zIndex: 1000,
    background: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 1px 8px 0px rgba(21, 23, 25, 0.08)',
    overflow: 'hidden' as const,
    transformOrigin: 'top center',
    transition: 'all 0.2s ease',
  },
  popoverPositionTop: {
    transformOrigin: 'bottom center',
  },
  popoverPositionBottom: {
    transformOrigin: 'top center',
  },
  popoverEntering: {
    opacity: 0,
    transform: 'scale(0.95) translateY(-4px)',
  },
  popoverPositionTopEntering: {
    opacity: 0,
    transform: 'scale(0.95) translateY(4px)',
  },
  popoverEntered: {
    opacity: 1,
    transform: 'scale(1) translateY(0)',
  },
  popoverExiting: {
    opacity: 0,
    transform: 'scale(0.95) translateY(-4px)',
  },
  popoverPositionTopExiting: {
    opacity: 0,
    transform: 'scale(0.95) translateY(4px)',
  },
  popoverContent: {
    maxHeight: '200px',
    overflowY: 'auto' as const,
    // 웹킷 스크롤바 스타일은 CSS-in-JS로 직접 적용할 수 없으므로 별도 처리 필요
  },
  popoverItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    minHeight: '48px',
    background: 'transparent',
    border: 'none',
    width: '100%',
    textAlign: 'left' as const,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    outline: 'none',
    position: 'relative' as const,
  },
  popoverItemHover: {
    backgroundColor: '#f3f5f6',
  },
  popoverItemActive: {
    backgroundColor: '#e8eaed',
  },
  popoverItemDisabled: {
    cursor: 'not-allowed',
  },
  popoverItemContent: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  popoverItemLabel: {
    flex: 1,
  },
  popoverItemIcon: {
    marginLeft: '8px',
    flexShrink: 0,
  },
};

export interface PopoverItem {
  /** 아이템 식별자 */
  id: string;
  /** 아이템 라벨 텍스트 */
  label: string;
  /** 아이템 비활성화 여부 */
  disabled?: boolean;
  /** 클릭 시 호출되는 콜백 */
  onClick?: (id: string) => void;
}

export interface PopoverProps {
  /** Popover 아이템 목록 */
  items: PopoverItem[];
  /** Popover가 열려있는지 여부 */
  isOpen: boolean;
  /** Popover 열림/닫힘 상태 변경 콜백 */
  onOpenChange: (isOpen: boolean) => void;
  /** 기준이 되는 요소 (width 참조용) */
  anchorRef?: React.RefObject<HTMLElement | null>;
  /** 직접 지정할 너비 (anchorRef가 없을 때 사용) */
  width?: number | string;
  /** Popover 위치 (기본값: 'bottom') */
  position?: 'top' | 'bottom';
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
  /** Popover 컨테이너의 최대 높이 */
  maxHeight?: number;
}

export const Popover: React.FC<PopoverProps> = ({
  items,
  isOpen,
  onOpenChange,
  anchorRef,
  width,
  position = 'bottom',
  className = '',
  style = {},
  maxHeight,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [popoverPosition, setPopoverPosition] = useState<{
    top?: number;
    bottom?: number;
    left: number;
    width: number;
  } | null>(null);
  const [animationState, setAnimationState] = useState<
    'entering' | 'entered' | 'exiting' | 'exited'
  >('exited');
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  // Popover 위치 계산
  const calculatePosition = useCallback(() => {
    if (!anchorRef?.current) return null;

    const anchorRect = anchorRef.current.getBoundingClientRect();
    const popoverWidth = width || anchorRect.width;

    const coords = {
      left: anchorRect.left,
      width:
        typeof popoverWidth === 'number'
          ? popoverWidth
          : parseFloat(popoverWidth as string) || anchorRect.width,
    };

    if (position === 'bottom') {
      return {
        ...coords,
        top: anchorRect.bottom + 8,
      };
    } else {
      return {
        ...coords,
        bottom: window.innerHeight - anchorRect.top + 8,
      };
    }
  }, [anchorRef, width, position]);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        anchorRef?.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onOpenChange(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onOpenChange, anchorRef]);

  // ESC 키 감지
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onOpenChange(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onOpenChange]);

  // 창 크기 변경 시 위치 재계산
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      const newPosition = calculatePosition();
      setPopoverPosition(newPosition);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize, true);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize, true);
    };
  }, [isOpen, calculatePosition]);

  // 열림/닫힘 애니메이션 관리
  useEffect(() => {
    if (isOpen) {
      const newPosition = calculatePosition();
      setPopoverPosition(newPosition);
      setAnimationState('entering');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimationState('entered');
        });
      });
    } else {
      setAnimationState('exiting');
      const timer = setTimeout(() => {
        setAnimationState('exited');
        setPopoverPosition(null);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isOpen, calculatePosition]);

  // 아이템 클릭 핸들러
  const handleItemClick = (item: PopoverItem) => {
    if (item.disabled) return;

    item.onClick?.(item.id);
    onOpenChange(false);
  };

  // 아이템 키보드 이벤트 핸들러
  const handleItemKeyDown = (event: React.KeyboardEvent, item: PopoverItem) => {
    if (item.disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleItemClick(item);
    }
  };

  // 렌더링하지 않을 조건
  if (animationState === 'exited' || !popoverPosition) {
    return null;
  }

  // 동적 스타일 생성
  const getPopoverStyle = (): React.CSSProperties => {
    let dynamicStyle = { ...styles.popover };

    // 위치별 transform-origin 적용
    if (position === 'top') {
      dynamicStyle = { ...dynamicStyle, ...styles.popoverPositionTop };
    } else {
      dynamicStyle = { ...dynamicStyle, ...styles.popoverPositionBottom };
    }

    // 애니메이션 상태별 스타일 적용
    if (animationState === 'entering') {
      if (position === 'top') {
        dynamicStyle = { ...dynamicStyle, ...styles.popoverPositionTopEntering };
      } else {
        dynamicStyle = { ...dynamicStyle, ...styles.popoverEntering };
      }
    } else if (animationState === 'entered') {
      dynamicStyle = { ...dynamicStyle, ...styles.popoverEntered };
    } else if (animationState === 'exiting') {
      if (position === 'top') {
        dynamicStyle = { ...dynamicStyle, ...styles.popoverPositionTopExiting };
      } else {
        dynamicStyle = { ...dynamicStyle, ...styles.popoverExiting };
      }
    }

    return {
      ...dynamicStyle,
      ...popoverPosition,
      maxHeight,
      ...style,
    };
  };

  const getItemStyle = (item: PopoverItem): React.CSSProperties => {
    let itemStyle = { ...styles.popoverItem };

    if (item.disabled) {
      itemStyle = { ...itemStyle, ...styles.popoverItemDisabled };
    } else if (activeItemId === item.id) {
      itemStyle = { ...itemStyle, ...styles.popoverItemActive };
    } else if (hoveredItemId === item.id) {
      itemStyle = { ...itemStyle, ...styles.popoverItemHover };
    }

    return {
      ...itemStyle,
      ...textStyles.body1,
      fontWeight: fontWeight.medium,
      color: item.disabled ? colors.semantic.disabled.foreground : colors.primary.coolGray[800],
    };
  };

  const popoverContent = (
    <>
      {/* 스크롤바 스타일을 위한 CSS */}
      <style>
        {`
          .popover-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .popover-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .popover-scrollbar::-webkit-scrollbar-thumb {
            background: #d1d5db;
            border-radius: 2px;
          }
          .popover-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #8d97a5;
          }
        `}
      </style>
      <div ref={popoverRef} style={getPopoverStyle()} role="menu" aria-orientation="vertical">
        <div
          className="popover-scrollbar"
          style={{
            ...styles.popoverContent,
            maxHeight: maxHeight || 200,
          }}
        >
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              onKeyDown={(e) => handleItemKeyDown(e, item)}
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
              onMouseDown={() => setActiveItemId(item.id)}
              onMouseUp={() => setActiveItemId(null)}
              disabled={item.disabled}
              role="menuitem"
              tabIndex={item.disabled ? -1 : 0}
              style={getItemStyle(item)}
            >
              <div style={styles.popoverItemContent}>
                <span style={styles.popoverItemLabel}>{item.label}</span>
                {item.disabled && (
                  <div style={styles.popoverItemIcon}>
                    <Icon type="lock" size={20} color={colors.semantic.text.disabled} />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );

  // Portal로 body에 렌더링
  return createPortal(popoverContent, document.body);
};
