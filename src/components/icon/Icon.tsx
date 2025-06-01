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
  | 'arrow-left';

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
  hamburger: '/icons/hamburger.svg',
  search: '/icons/search.svg',
  close: '/icons/close.svg',
  check: '/icons/check.svg',
  add: '/icons/add.svg',
  minus: '/icons/minus.svg',
  truncation: '/icons/truncation.svg',
  more: '/icons/more.svg',
  home: '/icons/home.svg',
  'home-filled': '/icons/home-filled.svg',
  heart: '/icons/heart.svg',
  'heart-filled': '/icons/heart-filled.svg',
  'my-page': '/icons/my-page.svg',
  'my-page-filled': '/icons/my-page-filled.svg',
  download: '/icons/download.svg',
  modify: '/icons/modify.svg',
  duplicate: '/icons/duplicate.svg',
  dialog: '/icons/dialog.svg',
  'arrow-down': '/icons/arrow-down.svg',
  'arrow-up': '/icons/arrow-up.svg',
  'arrow-right': '/icons/arrow-right.svg',
  'arrow-left': '/icons/arrow-left.svg',
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
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error(`Failed to load icon: ${type}`, error);
      }
    };

    loadSvg();
  }, [type]);

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
