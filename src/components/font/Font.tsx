import React, { ReactNode } from 'react';
import { textStyles, fontWeight as fontWeightTokens } from '../../tokens/typography';
import { colors } from '../../tokens/colors';

// Typography variant types from our design system
export type FontType = keyof typeof textStyles;

// Font weight types from our design system
export type FontWeight = keyof typeof fontWeightTokens;

// Responsive scale options
export type ResponsiveScale = 'auto' | 'tablet-optimized' | 'mobile-first' | 'none';

export interface FontProps {
  /** Typography variant (display1, display2, heading1, etc.) */
  type: FontType;
  /** Font weight override (bold, semibold, medium, regular) */
  fontWeight?: FontWeight;
  /** Text color */
  color?: string;
  /** Hover color */
  hoverColor?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** White space handling */
  whiteSpace?: 'nowrap' | 'normal' | 'pre-line';
  /** Text overflow with ellipsis */
  noWhiteSpace?: boolean;
  /** Underline decoration */
  underline?: boolean;
  /** Responsive behavior for different screen sizes */
  responsive?: ResponsiveScale;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Children content */
  children?: ReactNode;
}

// Helper function to get responsive font scaling
const getResponsiveStyles = (
  responsive: ResponsiveScale,
  baseStyle: React.CSSProperties,
): React.CSSProperties => {
  const responsiveStyles: React.CSSProperties = {};

  switch (responsive) {
    case 'tablet-optimized':
      // 태블릿에서 폰트를 약간 크게
      responsiveStyles.fontSize = `clamp(${baseStyle.fontSize}, calc(${baseStyle.fontSize} * 1.1), calc(${baseStyle.fontSize} * 1.2))`;
      break;
    case 'mobile-first':
      // 모바일 우선으로 더 작게 시작
      responsiveStyles.fontSize = `clamp(calc(${baseStyle.fontSize} * 0.9), ${baseStyle.fontSize}, calc(${baseStyle.fontSize} * 1.1))`;
      break;
    case 'none': {
      // 반응형 비활성화 (원래 rem 값 사용)
      const sizeMap: Record<string, string> = {
        'clamp(1.75rem, 4vw, 2rem)': '2rem',
        'clamp(1.5rem, 3.5vw, 1.75rem)': '1.75rem',
        'clamp(1.25rem, 3vw, 1.5rem)': '1.5rem',
        'clamp(1.125rem, 2.5vw, 1.25rem)': '1.25rem',
        'clamp(1rem, 2vw, 1.125rem)': '1.125rem',
        'clamp(0.875rem, 1.5vw, 1rem)': '1rem',
        'clamp(0.75rem, 1.25vw, 0.875rem)': '0.875rem',
        'clamp(0.625rem, 1vw, 0.75rem)': '0.75rem',
        'clamp(0.5625rem, 0.875vw, 0.625rem)': '0.625rem',
        'clamp(0.625rem, 1vw, 0.688rem)': '0.688rem',
      };
      responsiveStyles.fontSize = sizeMap[baseStyle.fontSize as string] || baseStyle.fontSize;
      break;
    }
    case 'auto':
    default:
      // 기본 clamp 사용 (이미 반응형)
      break;
  }

  return responsiveStyles;
};

export const Font: React.FC<FontProps> = ({
  type,
  fontWeight,
  color = colors.semantic.text.primary,
  hoverColor,
  align = 'left',
  whiteSpace,
  noWhiteSpace = false,
  underline = false,
  responsive = 'auto',
  className,
  style,
  children,
}) => {
  const baseStyle = textStyles[type];
  const responsiveStyles = getResponsiveStyles(responsive, baseStyle);

  const fontStyles: React.CSSProperties = {
    ...baseStyle,
    ...responsiveStyles,
    // Override font weight if provided
    ...(fontWeight && { fontWeight: fontWeightTokens[fontWeight] }),
    color: color,
    textAlign: align,
    whiteSpace: noWhiteSpace ? 'nowrap' : whiteSpace || 'normal',
    wordBreak: 'keep-all',
    textOverflow: noWhiteSpace ? 'ellipsis' : undefined,
    overflow: noWhiteSpace ? 'hidden' : undefined,
    textDecoration: underline ? 'underline' : 'none',
    textUnderlineOffset: underline ? '2px' : '0px',
    margin: 0,
    padding: 0,
    transition: 'color 0.2s ease',
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (hoverColor) {
      e.currentTarget.style.color = hoverColor;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (hoverColor) {
      e.currentTarget.style.color = color;
    }
  };

  return (
    <span
      style={fontStyles}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
};

export default Font;
