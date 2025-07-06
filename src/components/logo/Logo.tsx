import React from 'react';
import { colors } from '../../tokens/colors';
import { logoMap, LogoType } from './assets';

export interface LogoProps {
  /** 로고 타입 */
  type: LogoType;
  /** 로고 너비 (픽셀 단위) */
  width?: number;
  /** 로고 높이 (픽셀 단위) */
  height?: number;
  /** 로고 색상 */
  color?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({
  type,
  width,
  height,
  color = colors.primary.mainviolet,
  onClick,
  className = '',
  style = {},
}) => {
  const svgContent = logoMap[type];

  const logoStyle: React.CSSProperties = {
    width: width,
    height: height,
    color: color,
    cursor: 'inherit',
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

  if (!svgContent) {
    console.warn(`Logo type "${type}" not found or empty`);
    return (
      <div
        className={`logo logo--${type} ${className}`}
        style={logoStyle}
        onClick={handleClick}
        role={onClick ? 'button' : 'img'}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={handleKeyDown}
      >
        <svg width={width} height={height} viewBox="0 0 100 40" fill="none">
          <rect x="0" y="0" width="100" height="40" fill={color} opacity="0.1" />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="12"
            fill={color}
          >
            {type}
          </text>
        </svg>
      </div>
    );
  }

  // SVG 내용에서 색상과 크기를 동적으로 변경
  const processedSvg =
    svgContent
      ?.replace(/fill="[^"]*"/g, `fill="${color}"`)
      ?.replace(/stroke="[^"]*"/g, `stroke="${color}"`)
      ?.replace(/width="[^"]*"/g, `width="${width}"`)
      ?.replace(/height="[^"]*"/g, `height="${height}"`) || '';

  return (
    <div
      className={`logo logo--${type} ${className}`}
      style={logoStyle}
      onClick={handleClick}
      role={onClick ? 'button' : 'img'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
      dangerouslySetInnerHTML={{ __html: processedSvg }}
    />
  );
};
