import { memo, useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { colors } from '../../tokens/colors';
import { textStyles } from '../../tokens/typography';
import { Icon } from '../icon';

export type TooltipPosition =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom';

export type TooltipTrigger = 'hover' | 'click';

export interface TooltipProps {
  /** 툴팁 내용 */
  content: string;
  /** 툴팁이 트리거될 자식 요소 */
  children: React.ReactNode;
  /** 툴팁 위치 (기본값: 'top') */
  position?: TooltipPosition;
  /** 툴팁 트리거 방식 (기본값: 'hover') */
  trigger?: TooltipTrigger;
  /** 닫기 버튼 표시 여부 (기본값: false) */
  showCloseButton?: boolean;
  /** 툴팁 표시 여부를 외부에서 제어 (controlled component) */
  visible?: boolean;
  /** 툴팁 표시/숨김 변경 시 호출되는 콜백 */
  onVisibleChange?: (visible: boolean) => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** hover 트리거에서 툴팁이 나타나기까지의 지연 시간 (ms, 기본값: 100) */
  mouseEnterDelay?: number;
  /** hover 트리거에서 툴팁이 사라지기까지의 지연 시간 (ms, 기본값: 100) */
  mouseLeaveDelay?: number;
  /** 툴팁과 기준 요소 사이의 거리 (px, 기본값: 12) */
  offset?: number;
}

const ARROW_SIZE = 8;

export const Tooltip = memo<TooltipProps>(
  ({
    content,
    children,
    position = 'top',
    trigger = 'hover',
    showCloseButton = false,
    visible: controlledVisible,
    onVisibleChange,
    className = '',
    mouseEnterDelay = 100,
    mouseLeaveDelay = 100,
    offset = 12,
  }) => {
    const [internalVisible, setInternalVisible] = useState(false);
    const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
    const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({});

    const targetRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const enterTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const leaveTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const [portalRoot, setPortalRoot] = useState<Element | null>(null);

    // Controlled vs Uncontrolled
    const isControlled = controlledVisible !== undefined;
    const visible = isControlled ? controlledVisible : internalVisible;

    // Portal root 설정
    useEffect(() => {
      let tooltipRoot = document.getElementById('tooltip-root');

      if (!tooltipRoot) {
        tooltipRoot = document.createElement('div');
        tooltipRoot.id = 'tooltip-root';
        tooltipRoot.style.position = 'absolute';
        tooltipRoot.style.top = '0';
        tooltipRoot.style.left = '0';
        tooltipRoot.style.zIndex = '10000';
        tooltipRoot.style.pointerEvents = 'none';
        document.body.appendChild(tooltipRoot);
      }

      setPortalRoot(tooltipRoot);
    }, []);

    const updateVisible = useCallback(
      (newVisible: boolean) => {
        if (!isControlled) {
          setInternalVisible(newVisible);
        }
        onVisibleChange?.(newVisible);
      },
      [isControlled, onVisibleChange],
    );

    const calculatePosition = useCallback(() => {
      if (!targetRef.current || !tooltipRef.current || !visible) return;

      const targetRect = targetRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = 0;
      let left = 0;
      let finalPosition = position;

      // 초기 위치 계산
      const positions: Record<TooltipPosition, { top: number; left: number }> = {
        top: {
          top: targetRect.top - tooltipRect.height - offset,
          left: targetRect.left + targetRect.width / 2 - tooltipRect.width / 2,
        },
        topLeft: {
          top: targetRect.top - tooltipRect.height - offset,
          left: targetRect.left,
        },
        topRight: {
          top: targetRect.top - tooltipRect.height - offset,
          left: targetRect.right - tooltipRect.width,
        },
        bottom: {
          top: targetRect.bottom + offset,
          left: targetRect.left + targetRect.width / 2 - tooltipRect.width / 2,
        },
        bottomLeft: {
          top: targetRect.bottom + offset,
          left: targetRect.left,
        },
        bottomRight: {
          top: targetRect.bottom + offset,
          left: targetRect.right - tooltipRect.width,
        },
        left: {
          top: targetRect.top + targetRect.height / 2 - tooltipRect.height / 2,
          left: targetRect.left - tooltipRect.width - offset,
        },
        leftTop: {
          top: targetRect.top,
          left: targetRect.left - tooltipRect.width - offset,
        },
        leftBottom: {
          top: targetRect.bottom - tooltipRect.height,
          left: targetRect.left - tooltipRect.width - offset,
        },
        right: {
          top: targetRect.top + targetRect.height / 2 - tooltipRect.height / 2,
          left: targetRect.right + offset,
        },
        rightTop: {
          top: targetRect.top,
          left: targetRect.right + offset,
        },
        rightBottom: {
          top: targetRect.bottom - tooltipRect.height,
          left: targetRect.right + offset,
        },
      };

      const pos = positions[position];
      top = pos.top;
      left = pos.left;

      // 화면 밖으로 벗어나는지 확인하고 위치 조정
      const wouldOverflowTop = top < 10;
      const wouldOverflowBottom = top + tooltipRect.height > viewportHeight - 10;
      const wouldOverflowLeft = left < 10;
      const wouldOverflowRight = left + tooltipRect.width > viewportWidth - 10;

      // 위치 자동 조정
      if (position.includes('top') && wouldOverflowTop) {
        // top -> bottom
        if (position === 'top') {
          finalPosition = 'bottom';
        } else if (position === 'topLeft') {
          finalPosition = 'bottomLeft';
        } else if (position === 'topRight') {
          finalPosition = 'bottomRight';
        }
        const newPos = positions[finalPosition];
        top = newPos.top;
        left = newPos.left;
      } else if (position.includes('bottom') && wouldOverflowBottom) {
        // bottom -> top
        if (position === 'bottom') {
          finalPosition = 'top';
        } else if (position === 'bottomLeft') {
          finalPosition = 'topLeft';
        } else if (position === 'bottomRight') {
          finalPosition = 'topRight';
        }
        const newPos = positions[finalPosition];
        top = newPos.top;
        left = newPos.left;
      }

      if (
        (position.includes('left') || position === 'leftTop' || position === 'leftBottom') &&
        wouldOverflowLeft
      ) {
        // left -> right
        if (position === 'left') {
          finalPosition = 'right';
        } else if (position === 'leftTop') {
          finalPosition = 'rightTop';
        } else if (position === 'leftBottom') {
          finalPosition = 'rightBottom';
        }
        const newPos = positions[finalPosition];
        top = newPos.top;
        left = newPos.left;
      } else if (
        (position.includes('right') || position === 'rightTop' || position === 'rightBottom') &&
        wouldOverflowRight
      ) {
        // right -> left
        if (position === 'right') {
          finalPosition = 'left';
        } else if (position === 'rightTop') {
          finalPosition = 'leftTop';
        } else if (position === 'rightBottom') {
          finalPosition = 'leftBottom';
        }
        const newPos = positions[finalPosition];
        top = newPos.top;
        left = newPos.left;
      }

      // 좌우 경계 체크 후 미세 조정
      if (left < 10) {
        left = 10;
      } else if (left + tooltipRect.width > viewportWidth - 10) {
        left = viewportWidth - tooltipRect.width - 10;
      }

      // 상하 경계 체크 후 미세 조정
      if (top < 10) {
        top = 10;
      } else if (top + tooltipRect.height > viewportHeight - 10) {
        top = viewportHeight - tooltipRect.height - 10;
      }

      setTooltipStyle({
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
      });

      // 화살표 위치 계산
      const arrowStyles = getArrowStyle(finalPosition, targetRect, {
        top,
        left,
        tooltipRect,
        offset,
      });
      setArrowStyle(arrowStyles);
    }, [position, visible, offset]);

    const getArrowStyle = (
      pos: TooltipPosition,
      targetRect: DOMRect,
      tooltip: { top: number; left: number; tooltipRect: DOMRect; offset: number },
    ): React.CSSProperties => {
      const baseStyle: React.CSSProperties = {
        position: 'absolute',
        width: 0,
        height: 0,
        border: 'solid transparent',
      };

      // 화살표 위치 계산을 위한 기준점
      const tooltipTop = tooltip.top;
      const tooltipHeight = tooltip.tooltipRect.height;
      const targetTop = targetRect.top;
      const targetBottom = targetRect.bottom;

      // 패딩 값 (툴팁 내부 패딩 12px)
      const PADDING = 12;

      if (pos === 'top') {
        // 상단 중앙: 화살표가 정중앙에 위치
        baseStyle.bottom = `-${ARROW_SIZE}px`;
        baseStyle.left = '50%';
        baseStyle.transform = 'translateX(-50%)';
        baseStyle.borderWidth = `${ARROW_SIZE}px ${ARROW_SIZE}px 0 ${ARROW_SIZE}px`;
        baseStyle.borderTopColor = colors.primary.coolGray[600];
      } else if (pos === 'topLeft') {
        // 상단 좌측: 화살표가 좌측으로 완전히 치우쳐있어야 함 (패딩 위치)
        baseStyle.bottom = `-${ARROW_SIZE}px`;
        baseStyle.left = `${PADDING}px`;
        baseStyle.borderWidth = `${ARROW_SIZE}px ${ARROW_SIZE}px 0 ${ARROW_SIZE}px`;
        baseStyle.borderTopColor = colors.primary.coolGray[600];
      } else if (pos === 'topRight') {
        // 상단 우측: 화살표가 우측으로 완전히 치우쳐있어야 함
        baseStyle.bottom = `-${ARROW_SIZE}px`;
        baseStyle.right = `${PADDING}px`;
        baseStyle.borderWidth = `${ARROW_SIZE}px ${ARROW_SIZE}px 0 ${ARROW_SIZE}px`;
        baseStyle.borderTopColor = colors.primary.coolGray[600];
      } else if (pos === 'bottom') {
        // 하단 중앙: 화살표가 정중앙에 위치
        baseStyle.top = `-${ARROW_SIZE}px`;
        baseStyle.left = '50%';
        baseStyle.transform = 'translateX(-50%)';
        baseStyle.borderWidth = `0 ${ARROW_SIZE}px ${ARROW_SIZE}px ${ARROW_SIZE}px`;
        baseStyle.borderBottomColor = colors.primary.coolGray[600];
      } else if (pos === 'bottomLeft') {
        // 하단 좌측: 화살표가 좌측으로 치우쳐있어야 함
        baseStyle.top = `-${ARROW_SIZE}px`;
        baseStyle.left = `${PADDING}px`;
        baseStyle.borderWidth = `0 ${ARROW_SIZE}px ${ARROW_SIZE}px ${ARROW_SIZE}px`;
        baseStyle.borderBottomColor = colors.primary.coolGray[600];
      } else if (pos === 'bottomRight') {
        // 하단 우측: 화살표가 우측으로 치우쳐있어야 함
        baseStyle.top = `-${ARROW_SIZE}px`;
        baseStyle.right = `${PADDING}px`;
        baseStyle.borderWidth = `0 ${ARROW_SIZE}px ${ARROW_SIZE}px ${ARROW_SIZE}px`;
        baseStyle.borderBottomColor = colors.primary.coolGray[600];
      } else if (pos === 'left') {
        // 좌측: 화살표가 중앙이 아니라 위로 치우쳐있어야 함 (target의 상단과 맞춤)
        const arrowTop = targetTop - tooltipTop + PADDING;
        baseStyle.right = `-${ARROW_SIZE}px`;
        baseStyle.top = `${arrowTop}px`;
        baseStyle.borderWidth = `${ARROW_SIZE}px 0 ${ARROW_SIZE}px ${ARROW_SIZE}px`;
        baseStyle.borderLeftColor = colors.primary.coolGray[600];
      } else if (pos === 'leftTop') {
        // 좌측 상단: 화살표가 툴팁 본문의 상단에 위치 (패딩 위치)
        baseStyle.right = `-${ARROW_SIZE}px`;
        baseStyle.top = `${PADDING}px`;
        baseStyle.borderWidth = `${ARROW_SIZE}px 0 ${ARROW_SIZE}px ${ARROW_SIZE}px`;
        baseStyle.borderLeftColor = colors.primary.coolGray[600];
      } else if (pos === 'leftBottom') {
        // 좌측 하단: 화살표가 툴팁 본문의 하단에 위치 (하단에서 패딩만큼 위)
        baseStyle.right = `-${ARROW_SIZE}px`;
        baseStyle.bottom = `${PADDING}px`;
        baseStyle.borderWidth = `${ARROW_SIZE}px 0 ${ARROW_SIZE}px ${ARROW_SIZE}px`;
        baseStyle.borderLeftColor = colors.primary.coolGray[600];
      } else if (pos === 'right') {
        // 우측: 화살표가 중앙이 아니라 위로 치우쳐있어야 함 (target의 상단과 맞춤)
        const arrowTop = targetTop - tooltipTop + PADDING;
        baseStyle.left = `-${ARROW_SIZE}px`;
        baseStyle.top = `${arrowTop}px`;
        baseStyle.borderWidth = `${ARROW_SIZE}px ${ARROW_SIZE}px ${ARROW_SIZE}px 0`;
        baseStyle.borderRightColor = colors.primary.coolGray[600];
      } else if (pos === 'rightTop') {
        // 우측 상단: 화살표가 툴팁 본문의 상단에 위치 (패딩 위치)
        baseStyle.left = `-${ARROW_SIZE}px`;
        baseStyle.top = `${PADDING}px`;
        baseStyle.borderWidth = `${ARROW_SIZE}px ${ARROW_SIZE}px ${ARROW_SIZE}px 0`;
        baseStyle.borderRightColor = colors.primary.coolGray[600];
      } else if (pos === 'rightBottom') {
        // 우측 하단: 화살표가 툴팁 본문의 하단에 위치 (하단에서 패딩만큼 위)
        baseStyle.left = `-${ARROW_SIZE}px`;
        baseStyle.bottom = `${PADDING}px`;
        baseStyle.borderWidth = `${ARROW_SIZE}px ${ARROW_SIZE}px ${ARROW_SIZE}px 0`;
        baseStyle.borderRightColor = colors.primary.coolGray[600];
      }

      return baseStyle;
    };

    useEffect(() => {
      if (visible) {
        calculatePosition();
        window.addEventListener('scroll', calculatePosition, true);
        window.addEventListener('resize', calculatePosition);
        return () => {
          window.removeEventListener('scroll', calculatePosition, true);
          window.removeEventListener('resize', calculatePosition);
        };
      }
    }, [visible, calculatePosition]);

    useEffect(() => {
      return () => {
        if (enterTimeoutRef.current) {
          clearTimeout(enterTimeoutRef.current);
        }
        if (leaveTimeoutRef.current) {
          clearTimeout(leaveTimeoutRef.current);
        }
      };
    }, []);

    const handleMouseEnter = () => {
      if (trigger !== 'hover') return;

      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }

      enterTimeoutRef.current = setTimeout(() => {
        updateVisible(true);
      }, mouseEnterDelay);
    };

    const handleMouseLeave = () => {
      if (trigger !== 'hover') return;

      if (enterTimeoutRef.current) {
        clearTimeout(enterTimeoutRef.current);
      }

      leaveTimeoutRef.current = setTimeout(() => {
        updateVisible(false);
      }, mouseLeaveDelay);
    };

    const handleClick = () => {
      if (trigger !== 'click') return;
      updateVisible(!visible);
    };

    const handleClose = (e: React.MouseEvent) => {
      e.stopPropagation();
      updateVisible(false);
    };

    // click 트리거일 때 외부 클릭 감지
    useEffect(() => {
      if (trigger !== 'click' || !visible) return;

      const handleClickOutside = (e: MouseEvent) => {
        if (
          targetRef.current &&
          !targetRef.current.contains(e.target as Node) &&
          tooltipRef.current &&
          !tooltipRef.current.contains(e.target as Node)
        ) {
          updateVisible(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [trigger, visible, updateVisible]);

    const tooltipContentStyle: React.CSSProperties = {
      position: 'relative',
      backgroundColor: colors.primary.coolGray[600],
      color: colors.primary.gray.white,
      borderRadius: '8px',
      ...textStyles.body2,
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '1.57',
      maxWidth: '300px',
      wordWrap: 'break-word',
      display: 'flex',
      flexDirection: 'column',
      pointerEvents: 'auto',
      zIndex: 10001,
      overflow: 'visible',
      ...tooltipStyle,
    };

    const tooltipInnerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '4px',
      padding: '9px 12px',
    };

    const tooltipTextStyle: React.CSSProperties = {
      flex: 1,
      paddingTop: showCloseButton ? '0px' : '0px',
    };

    const wrapperStyle: React.CSSProperties = {
      display: 'inline-block',
      cursor: trigger === 'click' ? 'pointer' : 'default',
    };

    const tooltipContent = visible && portalRoot && (
      <div ref={tooltipRef} style={tooltipContentStyle} className={className}>
        <div style={tooltipInnerStyle}>
          <span style={tooltipTextStyle}>{content}</span>
          {showCloseButton && (
            <button
              onClick={handleClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                padding: '2px',
                cursor: 'pointer',
                color: colors.primary.gray.white,
                flexShrink: 0,
                alignSelf: 'flex-start',
                marginTop: '0px',
              }}
              aria-label="Close tooltip"
            >
              <Icon type="close" size={16} color={colors.primary.gray.white} />
            </button>
          )}
        </div>
        <div style={arrowStyle} />
      </div>
    );

    return (
      <>
        <div
          ref={targetRef}
          style={wrapperStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {children}
        </div>
        {portalRoot && createPortal(tooltipContent, portalRoot)}
      </>
    );
  },
);

Tooltip.displayName = 'Tooltip';
