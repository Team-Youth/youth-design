import React from 'react';
import { colors } from '../../tokens/colors';
import { Font } from '../font/Font';
import { Icon, IconType } from '../icon/Icon';

// 라벨 색상 타입 정의
export type LabelColor =
  | 'lightGray'
  | 'darkGray'
  | 'lightViolet'
  | 'violet'
  | 'lightRed'
  | 'red'
  | 'lightGreen'
  | 'green'
  | 'lightYellow'
  | 'yellow'
  | 'grey';

export interface LabelProps {
  /** 라벨의 크기 */
  size?: 'l' | 'm' | 's';
  /** 라벨의 모양 */
  type?: 'square' | 'capsule';
  /** 라벨의 색상 */
  color?: LabelColor;
  /** 선행 아이콘 */
  leadingIcon?: IconType;
  /** 후행 아이콘 */
  trailingIcon?: IconType;
  /** 텍스트 내용 */
  children?: React.ReactNode;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  size = 'm',
  type = 'square',
  color = 'darkGray',
  leadingIcon,
  trailingIcon,
  children,
  className = '',
}) => {
  // Size configurations
  const sizeConfig = {
    l: {
      padding: type === 'square' ? '3px 8px' : '3px 10px',
      paddingWithLeadingIcon: type === 'square' ? '3px 8px 3px 6px' : '3px 10px 3px 8px',
      paddingWithTrailingIcon: type === 'square' ? '3px 6px 3px 8px' : '3px 8px 3px 10px',
      borderRadius: type === 'square' ? '4px' : '16px',
      height: '28px',
      iconSize: '14px',
      gap: '2px',
      fontSize: 'body2' as const,
    },
    m: {
      padding: type === 'square' ? '3px 6px' : '3px 8px',
      paddingWithLeadingIcon: type === 'square' ? '3px 6px 3px 4px' : '3px 8px 3px 6px',
      paddingWithTrailingIcon: type === 'square' ? '3px 4px 3px 6px' : '3px 6px 3px 8px',
      borderRadius: type === 'square' ? '4px' : '12px',
      height: '24px',
      iconSize: '12px',
      gap: '2px',
      fontSize: 'body3' as const,
    },
    s: {
      padding: type === 'square' ? '2px 5px' : '2px 7px',
      paddingWithLeadingIcon: type === 'square' ? '2px 5px 2px 3px' : '2px 7px 2px 5px',
      paddingWithTrailingIcon: type === 'square' ? '2px 3px 2px 5px' : '2px 5px 2px 7px',
      borderRadius: type === 'square' ? '4px' : '12px',
      height: '20px',
      iconSize: '12px',
      gap: '2px',
      fontSize: 'caption' as const,
    },
  };

  // Color configurations
  const colorConfig = {
    lightGray: {
      backgroundColor: colors.primary.coolGray[50],
      textColor: colors.primary.coolGray[600],
      iconColor: colors.primary.coolGray[600],
    },
    darkGray: {
      backgroundColor: colors.primary.coolGray[600],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white,
    },
    lightViolet: {
      backgroundColor: colors.primary.tint.violet[50],
      textColor: colors.primary.mainviolet,
      iconColor: colors.primary.mainviolet,
    },
    violet: {
      backgroundColor: colors.primary.mainviolet,
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white,
    },
    lightRed: {
      backgroundColor: colors.primary.tint.red[50],
      textColor: colors.primary.tint.red[400],
      iconColor: colors.primary.tint.red[400],
    },
    red: {
      backgroundColor: colors.primary.tint.red[400],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white,
    },
    lightGreen: {
      backgroundColor: colors.primary.tint.green[100],
      textColor: colors.primary.tint.green[500],
      iconColor: colors.primary.tint.green[500],
    },
    green: {
      backgroundColor: colors.primary.tint.green[500],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white,
    },
    lightYellow: {
      backgroundColor: colors.primary.tint.yellow[100],
      textColor: colors.primary.tint.yellow[600],
      iconColor: colors.primary.tint.yellow[600],
    },
    yellow: {
      backgroundColor: colors.primary.tint.yellow[600],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white,
    },
    // grey > deprecated, darkGray 사용 요망
    grey: {
      backgroundColor: colors.primary.coolGray[100],
      textColor: colors.primary.coolGray[600],
      iconColor: colors.primary.coolGray[700],
    },
    // dark 대신 darkGray 사용
    // dark: {
    //   backgroundColor: colors.primary.coolGray[600],
    //   textColor: colors.primary.gray.white,
    //   iconColor: colors.primary.gray.white,
    // },
    // violet으로 대체
    // accent: {
    //   backgroundColor: colors.primary.tint.violet[500],
    //   textColor: colors.primary.gray.white,
    //   iconColor: colors.primary.gray.white,
    // },
  };

  const config = sizeConfig[size];
  const colorStyle = colorConfig[color];

  const getPadding = () => {
    if (leadingIcon && trailingIcon) {
      return config.paddingWithLeadingIcon;
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
    userSelect: 'none',
  });

  return (
    <div
      className={`label label--${size} label--${type} label--${color} ${className}`}
      style={getStyles()}
    >
      {leadingIcon && (
        <span className="label__leading-icon" style={{ lineHeight: 0 }}>
          <Icon type={leadingIcon} size={parseInt(config.iconSize)} color={colorStyle.iconColor} />
        </span>
      )}

      {children && (
        <Font type={config.fontSize} fontWeight="medium" color={colorStyle.textColor}>
          {children}
        </Font>
      )}

      {trailingIcon && (
        <span className="label__trailing-icon" style={{ lineHeight: 0 }}>
          <Icon type={trailingIcon} size={parseInt(config.iconSize)} color={colorStyle.iconColor} />
        </span>
      )}
    </div>
  );
};

export default Label;
