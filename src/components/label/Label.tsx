import React from 'react';
import { colors } from '../../tokens/colors';
import { Font } from '../font/Font';
import './Label.css';

export interface LabelProps {
  /** 라벨의 크기 */
  size?: 'm' | 's';
  /** 라벨의 모양 */
  type?: 'square' | 'capsule';
  /** 라벨의 색상 */
  color?: 'grey' | 'dark' | 'violet' | 'accent' | 'red' | 'green' | 'yellow';
  /** 선행 아이콘 */
  leadingIcon?: React.ReactNode;
  /** 후행 아이콘 */
  trailingIcon?: React.ReactNode;
  /** 텍스트 내용 */
  children?: React.ReactNode;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  size = 'm',
  type = 'square',
  color = 'grey',
  leadingIcon,
  trailingIcon,
  children,
  className = '',
}) => {
  // Size configurations
  const sizeConfig = {
    m: {
      padding: type === 'square' ? '3px 8px' : '3px 10px',
      paddingWithLeadingIcon: type === 'square' ? '3px 8px 3px 6px' : '3px 10px 3px 8px',
      paddingWithTrailingIcon: type === 'square' ? '3px 6px 3px 8px' : '3px 8px 3px 10px',
      borderRadius: type === 'square' ? '4px' : '16px',
      height: '24px',
      iconSize: '14px',
      gap: '2px',
      fontSize: 'body2' as const,
    },
    s: {
      padding: type === 'square' ? '2px 6px' : '2px 8px',
      paddingWithLeadingIcon: type === 'square' ? '2px 6px 2px 4px' : '2px 8px 2px 6px',
      paddingWithTrailingIcon: type === 'square' ? '2px 4px 2px 6px' : '2px 6px 2px 8px',
      borderRadius: type === 'square' ? '4px' : '12px',
      height: '22px',
      iconSize: '12px',
      gap: '2px',
      fontSize: 'caption' as const,
    },
  };

  // Color configurations
  const colorConfig = {
    grey: {
      backgroundColor: colors.primary.coolGray[100],
      textColor: colors.primary.coolGray[600],
      iconColor: colors.primary.coolGray[700],
    },
    dark: {
      backgroundColor: colors.primary.coolGray[600],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white,
    },
    violet: {
      backgroundColor: colors.primary.tint.violet[50],
      textColor: colors.primary.tint.violet[500],
      iconColor: colors.primary.tint.violet[500],
    },
    accent: {
      backgroundColor: colors.primary.tint.violet[500],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white,
    },
    red: {
      backgroundColor: colors.primary.tint.red[500],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white,
    },
    green: {
      backgroundColor: colors.primary.tint.green[500],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white,
    },
    yellow: {
      backgroundColor: colors.primary.tint.yellow[500],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white,
    },
  };

  const config = sizeConfig[size];
  const colorStyle = colorConfig[color];

  // Determine padding based on icon presence
  const getPadding = () => {
    if (leadingIcon && trailingIcon) {
      return config.paddingWithLeadingIcon; // Use leading icon padding style
    } else if (leadingIcon) {
      return config.paddingWithLeadingIcon;
    } else if (trailingIcon) {
      return config.paddingWithTrailingIcon;
    }
    return config.padding;
  };

  const getStyles = (): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: getPadding(),
    borderRadius: config.borderRadius,
    backgroundColor: colorStyle.backgroundColor,
    height: config.height,
    gap: config.gap,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
  });

  const getIconStyles = (): React.CSSProperties => ({
    width: config.iconSize,
    height: config.iconSize,
    color: colorStyle.iconColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  });

  return (
    <div
      className={`label label--${size} label--${type} label--${color} ${className}`}
      style={getStyles()}
    >
      {leadingIcon && (
        <span className="label__leading-icon" style={getIconStyles()}>
          {leadingIcon}
        </span>
      )}

      {children && (
        <Font type={config.fontSize} fontWeight="medium" color={colorStyle.textColor}>
          {children}
        </Font>
      )}

      {trailingIcon && (
        <span className="label__trailing-icon" style={getIconStyles()}>
          {trailingIcon}
        </span>
      )}
    </div>
  );
};

export default Label;
