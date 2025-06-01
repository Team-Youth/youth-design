import React, { useState, useEffect } from 'react';
import { colors } from '../../tokens/colors';

// 아이콘 타입 정의
export type IconType =
  | 'hamburger'
  | 'search'
  | 'close'
  | 'check'
  | 'add'
  | 'minus'
  | 'truncation'
  | 'more'
  | 'home'
  | 'home-filled'
  | 'heart'
  | 'heart-filled'
  | 'my-page'
  | 'my-page-filled'
  | 'download'
  | 'modify'
  | 'duplicate'
  | 'dialog'
  | 'arrow-down'
  | 'arrow-up'
  | 'arrow-right'
  | 'arrow-left'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'calendar'
  | 'calendar-filled';

export interface IconProps {
  /** 아이콘 타입 */
  type: IconType;
  /** 아이콘 크기 (픽셀 단위) */
  size?: number;
  /** 아이콘 색상 */
  color?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
}

// 아이콘 SVG 임포트 (동적으로 로드하기 위한 매핑)
const iconMap: Record<IconType, string> = {
  hamburger: '/src/components/icon/assets/hamburger.svg',
  search: '/src/components/icon/assets/search.svg',
  close: '/src/components/icon/assets/close.svg',
  check: '/src/components/icon/assets/check.svg',
  add: '/src/components/icon/assets/add.svg',
  minus: '/src/components/icon/assets/minus.svg',
  truncation: '/src/components/icon/assets/truncation.svg',
  more: '/src/components/icon/assets/more.svg',
  home: '/src/components/icon/assets/home.svg',
  'home-filled': '/src/components/icon/assets/home-filled.svg',
  heart: '/src/components/icon/assets/heart.svg',
  'heart-filled': '/src/components/icon/assets/heart-filled.svg',
  'my-page': '/src/components/icon/assets/my-page.svg',
  'my-page-filled': '/src/components/icon/assets/my-page-filled.svg',
  download: '/src/components/icon/assets/download.svg',
  modify: '/src/components/icon/assets/modify.svg',
  duplicate: '/src/components/icon/assets/duplicate.svg',
  dialog: '/src/components/icon/assets/dialog.svg',
  'arrow-down': '/src/components/icon/assets/arrow-down.svg',
  'arrow-up': '/src/components/icon/assets/arrow-up.svg',
  'arrow-right': '/src/components/icon/assets/arrow-right.svg',
  'arrow-left': '/src/components/icon/assets/arrow-left.svg',
  'chevron-left': '/src/components/icon/assets/chevron-left.svg',
  'chevron-right': '/src/components/icon/assets/chevron-right.svg',
  'chevron-up': '/src/components/icon/assets/chevron-up.svg',
  'chevron-down': '/src/components/icon/assets/chevron-down.svg',
  calendar: '/src/components/icon/assets/calendar.svg',
  'calendar-filled': '/src/components/icon/assets/calendar-filled.svg',
};

export const Icon: React.FC<IconProps> = ({
  type,
  size = 24,
  color = colors.primary.coolGray[800],
  onClick,
  className = '',
  style = {},
}) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(iconMap[type]);
        let svgText = await response.text();

        // SVG 내용에서 fill 색상을 동적으로 변경
        svgText = svgText.replace(/fill="[^"]*"/g, `fill="${color}"`);

        setSvgContent(svgText);
      } catch (error) {
        console.error(`Failed to load icon: ${type}`, error);
      }
    };

    loadSvg();
  }, [type, color]);

  const iconStyle: React.CSSProperties = {
    width: size,
    height: size,
    color: color,
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style,
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`icon icon--${type} ${className}`}
      style={iconStyle}
      onClick={handleClick}
      role={onClick ? 'button' : 'img'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
