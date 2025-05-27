import React, { ReactNode } from 'react';
import { textStyles, fontWeight as fontWeightTokens } from '../../tokens/typography';
import { colors } from '../../tokens/colors';

// Typography variant types from our design system
export type FontType = keyof typeof textStyles;

// Font weight types from our design system
export type FontWeight = keyof typeof fontWeightTokens;

// Color types - using semantic colors for text
export type FontColor = 
  | 'primary' 
  | 'secondary' 
  | 'tertiary' 
  | 'disabled' 
  | 'inverse'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export interface FontProps {
  /** Typography variant (display1, display2, heading1, etc.) */
  type: FontType;
  /** Font weight override (bold, semibold, medium, regular) */
  fontWeight?: FontWeight;
  /** Text color */
  color?: FontColor;
  /** Hover color */
  hoverColor?: FontColor;
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** White space handling */
  whiteSpace?: 'nowrap' | 'normal' | 'pre-line';
  /** Text overflow with ellipsis */
  noWhiteSpace?: boolean;
  /** Underline decoration */
  underline?: boolean;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Children content */
  children?: ReactNode;
}

const getColorValue = (colorType: FontColor): string => {
  switch (colorType) {
    case 'primary':
      return colors.semantic.text.primary;
    case 'secondary':
      return colors.semantic.text.secondary;
    case 'tertiary':
      return colors.semantic.text.tertiary;
    case 'disabled':
      return colors.semantic.text.disabled;
    case 'inverse':
      return colors.semantic.text.inverse;
    case 'success':
      return colors.semantic.state.success;
    case 'warning':
      return colors.semantic.state.warning;
    case 'error':
      return colors.semantic.state.error;
    case 'info':
      return colors.semantic.state.info;
    default:
      return colors.semantic.text.primary;
  }
};

export const Font: React.FC<FontProps> = ({
  type,
  fontWeight,
  color = 'primary',
  hoverColor,
  align = 'left',
  whiteSpace,
  noWhiteSpace = false,
  underline = false,
  className,
  style,
  children,
}) => {
  const baseStyle = textStyles[type];
  
  const fontStyles: React.CSSProperties = {
    ...baseStyle,
    // Override font weight if provided
    ...(fontWeight && { fontWeight: fontWeightTokens[fontWeight] }),
    color: getColorValue(color),
    textAlign: align,
    whiteSpace: noWhiteSpace ? 'nowrap' : whiteSpace || 'normal',
    textOverflow: noWhiteSpace ? 'ellipsis' : undefined,
    overflow: noWhiteSpace ? 'hidden' : undefined,
    textDecoration: underline ? 'underline' : 'none',
    margin: 0,
    padding: 0,
    transition: 'color 0.2s ease',
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (hoverColor) {
      e.currentTarget.style.color = getColorValue(hoverColor);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (hoverColor) {
      e.currentTarget.style.color = getColorValue(color);
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