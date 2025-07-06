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
  type = 'symbol',
  width,
  height,
  color = colors.primary.mainviolet,
  onClick,
  className = '',
  style = {},
}) => {
  const svgContent = logoMap[type];

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
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 40"
        fill="none"
        className={`logo logo--${type} ${className}`}
        style={{
          cursor: onClick ? 'pointer' : 'inherit',
          ...style,
        }}
        onClick={handleClick}
        role={onClick ? 'button' : 'img'}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={handleKeyDown}
      >
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
    );
  }

  // SVG 내용에서 viewBox 추출
  const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';

  // SVG 내용에서 path 요소들 추출
  const pathMatches = svgContent.match(/<path[^>]*>/g) || [];
  const paths = pathMatches
    .map((pathStr) => {
      const dMatch = pathStr.match(/d="([^"]*)"/);
      return dMatch ? dMatch[1] : '';
    })
    .filter(Boolean);

  return (
    <div
      className={`logo logo--${type} ${className}`}
      style={{
        width,
        height,
        display: 'inline-block',
        lineHeight: 0,
        padding: 0,
        margin: 0,
        cursor: onClick ? 'pointer' : 'inherit',
        ...style,
      }}
      onClick={handleClick}
      role={onClick ? 'button' : 'img'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        {paths.map((d, i) => (
          <path key={i} d={d} fill={color} />
        ))}
      </svg>
    </div>
  );
};
