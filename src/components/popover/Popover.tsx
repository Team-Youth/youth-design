import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../icon';
import { colors, textStyles, fontWeight } from '../../tokens';
import './Popover.css';

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

  const popoverStyle: React.CSSProperties = {
    ...popoverPosition,
    maxHeight,
    ...style,
  };

  const popoverClassName = [
    'popover',
    `popover--position-${position}`,
    `popover--${animationState}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const popoverContent = (
    <div
      ref={popoverRef}
      className={popoverClassName}
      style={popoverStyle}
      role="menu"
      aria-orientation="vertical"
    >
      <div className="popover__content" style={{ maxHeight }}>
        {items.map((item) => (
          <button
            key={item.id}
            className="popover__item"
            onClick={() => handleItemClick(item)}
            onKeyDown={(e) => handleItemKeyDown(e, item)}
            disabled={item.disabled}
            role="menuitem"
            tabIndex={item.disabled ? -1 : 0}
            style={{
              ...textStyles.body1,
              fontWeight: fontWeight.medium,
              color: item.disabled
                ? colors.semantic.disabled.foreground
                : colors.primary.coolGray[800],
            }}
          >
            <div className="popover__item-content">
              <span className="popover__item-label">{item.label}</span>
              {item.disabled && (
                <Icon type="lock" size={20} color={colors.semantic.text.disabled} />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  // Portal로 body에 렌더링
  return createPortal(popoverContent, document.body);
};
