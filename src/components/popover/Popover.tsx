import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Icon, IconType } from '../icon';
import { colors, textStyles, fontWeight } from '../../tokens';

export interface PopoverItem {
  /** 아이템 식별자 */
  id: string;
  /** 아이템 라벨 텍스트 */
  label: string;
  /** 아이템 아이콘 */
  icon?: IconType;
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
  /** 최소 너비 (anchorRef의 너비보다 작을 때 사용) */
  minWidth?: number | string;
  /** Popover 위치 (기본값: 'bottom') */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Popover 정렬 (기본값: 'center') */
  align?: 'start' | 'center' | 'end';
  /** 추가 스타일 */
  style?: React.CSSProperties;
  /** Popover 컨테이너의 최대 높이 */
  maxHeight?: number;
  // anchor와 popover 사이 간격
  gapBetweenAnchorAndPopover?: number;
}

export const Popover: React.FC<PopoverProps> = ({
  items,
  isOpen,
  onOpenChange,
  anchorRef,
  width,
  minWidth,
  position = 'bottom',
  align = 'center',
  style = {},
  maxHeight,
  gapBetweenAnchorAndPopover = 8,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [popoverPosition, setPopoverPosition] = useState<{
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    width?: number;
    height?: number;
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
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const gap = gapBetweenAnchorAndPopover; // anchor와 popover 사이 간격

    // 기본 크기 계산
    let popoverWidth = width || anchorRect.width;
    const popoverHeight = maxHeight || 200; // 기본 높이

    if (typeof popoverWidth === 'string') {
      popoverWidth = parseFloat(popoverWidth) || anchorRect.width;
    }

    // minWidth 적용
    if (minWidth) {
      const minWidthValue =
        typeof minWidth === 'number' ? minWidth : parseFloat(minWidth as string) || 0;
      popoverWidth = Math.max(popoverWidth as number, minWidthValue);
    }

    const coords: any = {};

    // position에 따른 기본 위치 계산
    switch (position) {
      case 'top':
        coords.bottom = viewportHeight - anchorRect.top + gap;
        coords.width = popoverWidth;

        // align에 따른 수평 위치
        switch (align) {
          case 'start':
            coords.left = anchorRect.left;
            break;
          case 'end':
            // 우측 정렬: Popover의 우측이 anchor의 우측과 일치
            coords.right = viewportWidth - anchorRect.right;
            break;
          case 'center':
          default:
            coords.left = anchorRect.left + (anchorRect.width - (popoverWidth as number)) / 2;
            break;
        }
        break;

      case 'bottom':
        coords.top = anchorRect.bottom + gap;
        coords.width = popoverWidth;

        // align에 따른 수평 위치
        switch (align) {
          case 'start':
            coords.left = anchorRect.left;
            break;
          case 'end':
            // 우측 정렬: Popover의 우측이 anchor의 우측과 일치
            coords.right = viewportWidth - anchorRect.right;
            break;
          case 'center':
          default:
            coords.left = anchorRect.left + (anchorRect.width - (popoverWidth as number)) / 2;
            break;
        }
        break;

      case 'left':
        coords.right = viewportWidth - anchorRect.left + gap;
        coords.width = popoverWidth;

        // align에 따른 수직 위치
        switch (align) {
          case 'start':
            coords.top = anchorRect.top;
            break;
          case 'end':
            // 하단 정렬: Popover의 하단이 anchor의 하단과 일치
            coords.bottom = viewportHeight - anchorRect.bottom;
            break;
          case 'center':
          default:
            coords.top = anchorRect.top + (anchorRect.height - popoverHeight) / 2;
            break;
        }
        break;

      case 'right':
        coords.left = anchorRect.right + gap;
        coords.width = popoverWidth;

        // align에 따른 수직 위치
        switch (align) {
          case 'start':
            coords.top = anchorRect.top;
            break;
          case 'end':
            // 하단 정렬: Popover의 하단이 anchor의 하단과 일치
            coords.bottom = viewportHeight - anchorRect.bottom;
            break;
          case 'center':
          default:
            coords.top = anchorRect.top + (anchorRect.height - popoverHeight) / 2;
            break;
        }
        break;
    }

    // 뷰포트 경계 조정
    if (coords.left !== undefined) {
      const rightEdge = coords.left + (coords.width || 0);
      if (rightEdge > viewportWidth) {
        coords.left = Math.max(gap, viewportWidth - (coords.width || 0) - gap);
      }
      if (coords.left < gap) {
        coords.left = gap;
        if (coords.width && coords.width > viewportWidth - 2 * gap) {
          coords.width = viewportWidth - 2 * gap;
        }
      }
    }

    if (coords.right !== undefined) {
      const leftEdge = viewportWidth - coords.right - (coords.width || 0);
      if (leftEdge < gap) {
        coords.right = Math.max(gap, viewportWidth - (coords.width || 0) - gap);
      }
      if (coords.right < gap) {
        coords.right = gap;
        if (coords.width && coords.width > viewportWidth - 2 * gap) {
          coords.width = viewportWidth - 2 * gap;
        }
      }
    }

    if (coords.top !== undefined) {
      const bottomEdge = coords.top + popoverHeight;
      if (bottomEdge > viewportHeight) {
        coords.top = Math.max(gap, viewportHeight - popoverHeight - gap);
      }
      if (coords.top < gap) {
        coords.top = gap;
      }
    }

    if (coords.bottom !== undefined) {
      const topEdge = viewportHeight - coords.bottom - popoverHeight;
      if (topEdge < gap) {
        coords.bottom = Math.max(gap, viewportHeight - popoverHeight - gap);
      }
      if (coords.bottom < gap) {
        coords.bottom = gap;
      }
    }

    return coords;
  }, [anchorRef, width, minWidth, position, align, maxHeight]);

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

  // 애니메이션 스타일 헬퍼 함수들
  const getEnteringStyle = (pos: string): React.CSSProperties => {
    switch (pos) {
      case 'top':
        return { opacity: 0, transform: 'scale(0.95) translateY(4px)' };
      case 'bottom':
        return { opacity: 0, transform: 'scale(0.95) translateY(-4px)' };
      case 'left':
        return { opacity: 0, transform: 'scale(0.95) translateX(4px)' };
      case 'right':
        return { opacity: 0, transform: 'scale(0.95) translateX(-4px)' };
      default:
        return { opacity: 0, transform: 'scale(0.95) translateY(-4px)' };
    }
  };

  const getExitingStyle = (pos: string): React.CSSProperties => {
    switch (pos) {
      case 'top':
        return { opacity: 0, transform: 'scale(0.95) translateY(4px)' };
      case 'bottom':
        return { opacity: 0, transform: 'scale(0.95) translateY(-4px)' };
      case 'left':
        return { opacity: 0, transform: 'scale(0.95) translateX(4px)' };
      case 'right':
        return { opacity: 0, transform: 'scale(0.95) translateX(-4px)' };
      default:
        return { opacity: 0, transform: 'scale(0.95) translateY(-4px)' };
    }
  };

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

    // transform-origin 계산
    let transformOrigin = 'center center';

    switch (position) {
      case 'top':
        transformOrigin =
          align === 'start' ? 'left bottom' : align === 'end' ? 'right bottom' : 'center bottom';
        break;
      case 'bottom':
        transformOrigin =
          align === 'start' ? 'left top' : align === 'end' ? 'right top' : 'center top';
        break;
      case 'left':
        transformOrigin =
          align === 'start' ? 'right top' : align === 'end' ? 'right bottom' : 'right center';
        break;
      case 'right':
        transformOrigin =
          align === 'start' ? 'left top' : align === 'end' ? 'left bottom' : 'left center';
        break;
    }

    (dynamicStyle as any).transformOrigin = transformOrigin;

    // 애니메이션 상태별 스타일 적용
    if (animationState === 'entering') {
      dynamicStyle = { ...dynamicStyle, ...getEnteringStyle(position) } as any;
    } else if (animationState === 'entered') {
      dynamicStyle = { ...dynamicStyle, ...styles.popoverEntered } as any;
    } else if (animationState === 'exiting') {
      dynamicStyle = { ...dynamicStyle, ...getExitingStyle(position) } as any;
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
                {item.icon && (
                  <div style={styles.popoverItemLeadingIcon}>
                    <Icon
                      type={item.icon}
                      size={20}
                      color={
                        item.disabled ? colors.semantic.text.disabled : colors.primary.coolGray[800]
                      }
                    />
                  </div>
                )}
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

// 인라인 스타일 정의
const styles = {
  popover: {
    position: 'fixed' as const,
    zIndex: 1500,
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 1px 8px 0px rgba(21, 23, 25, 0.08)',
    overflow: 'hidden' as const,
    transition: 'all 0.2s ease',
  },
  popoverEntered: {
    opacity: 1,
    transform: 'scale(1) translate(0, 0)',
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
    backgroundColor: 'transparent',
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
  popoverItemLeadingIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '8px',
    flexShrink: 0,
  },
  popoverItemIcon: {
    marginLeft: '8px',
    flexShrink: 0,
  },
};
