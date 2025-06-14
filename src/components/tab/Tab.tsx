import React from 'react';
import { fontWeight, textStyles } from '../../tokens';
import { colors } from '../../tokens/colors';
import { IconType, Icon } from '../icon';

export interface TabProps {
  type?: 'underline' | 'capsule' | 'toggle';
  size?: 'l' | 'm' | 's';
  selected?: boolean;
  disabled?: boolean;
  /** 아이콘 타입 (Icon 컴포넌트 사용) */
  icon?: IconType;
  number?: string | number;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  /** 너비 설정 */
  width?: 'fill' | (string & {});
}

export const Tab: React.FC<TabProps> = ({
  type = 'underline',
  size = 'm',
  selected = false,
  disabled = false,
  icon,
  number,
  children,
  onClick,
  className = '',
  style,
  width,
}) => {
  const getSizeConfig = () => {
    const getFontWeight = () => {
      if (type === 'toggle') {
        return selected ? fontWeight.semibold : fontWeight.medium;
      }

      return fontWeight.semibold;
    };

    const configs = {
      l: {
        ...(type === 'underline'
          ? textStyles.heading4
          : type === 'capsule'
            ? textStyles.heading4
            : textStyles.body1),
        height: type === 'underline' ? 64 : type === 'capsule' ? 42 : 40,
        padding: type === 'underline' ? '0 8px' : type === 'capsule' ? '10px 16px' : '0 8px',
        fontWeight: getFontWeight(),
        iconSize: 20,
        borderRadius: type === 'capsule' ? 100 : type === 'toggle' ? 8 : 0,
      },
      m: {
        ...(type === 'underline'
          ? textStyles.heading4
          : type === 'capsule'
            ? textStyles.heading4
            : textStyles.body3),
        height: type === 'underline' ? 48 : type === 'capsule' ? 36 : 32,
        padding: type === 'underline' ? '0 8px' : type === 'capsule' ? '6px 12px' : '0 8px',
        fontWeight: getFontWeight(),
        iconSize: 16,
        borderRadius: type === 'capsule' ? 100 : type === 'toggle' ? 6 : 0,
      },
      s: {
        ...(type === 'underline'
          ? textStyles.heading5
          : type === 'capsule'
            ? textStyles.body3
            : textStyles.body2),
        height: type === 'underline' ? 40 : type === 'capsule' ? 30 : 28,
        padding: type === 'underline' ? '0 8px' : type === 'capsule' ? '5px 12px' : '4px 8px',
        fontWeight: getFontWeight(),
        iconSize: 16,
        borderRadius: type === 'capsule' ? 100 : type === 'toggle' ? 4 : 0,
      },
    };
    return configs[size];
  };

  const getTabWidth = () => {
    if (width === 'fill') {
      return '100%';
    }
    if (width) {
      return width;
    }
    return 'fit-content';
  };

  const getColors = () => {
    if (disabled) {
      return {
        text: colors.semantic.disabled.foreground,
        background: 'transparent',
        border: 'transparent',
        number: colors.semantic.disabled.foreground,
      };
    }

    switch (type) {
      case 'underline':
        if (selected) {
          return {
            text: colors.primary.coolGray[800],
            background: 'transparent',
            border: colors.primary.coolGray[800],
            number: colors.primary.tint.violet[500],
          };
        }
        return {
          text: colors.primary.coolGray[400],
          background: 'transparent',
          border: 'transparent',
          number: colors.primary.coolGray[200],
        };

      case 'capsule':
        if (selected) {
          return {
            text: colors.primary.gray.white,
            background: colors.primary.coolGray[800],
            border: 'transparent',
            number: colors.primary.tint.violet[500],
          };
        }
        return {
          text: colors.primary.coolGray[800],
          background: 'transparent',
          border: colors.primary.coolGray[300],
          number: colors.primary.coolGray[400],
        };

      case 'toggle':
        if (selected) {
          return {
            text: colors.primary.coolGray[800],
            background: colors.primary.gray.white,
            border: 'transparent',
            number: colors.primary.tint.violet[500],
          };
        }
        return {
          text: colors.primary.coolGray[400],
          background: 'transparent',
          border: 'transparent',
          number: colors.primary.coolGray[200],
        };

      default:
        return {
          text: colors.primary.coolGray[400],
          background: 'transparent',
          border: 'transparent',
          number: colors.primary.coolGray[200],
        };
    }
  };

  const config = getSizeConfig();
  const colorScheme = getColors();

  const getBaseStyles = (): React.CSSProperties => ({
    display: width === 'fill' ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    height: config.height,
    padding: config.padding,
    fontSize: config.fontSize,
    fontWeight: config.fontWeight,
    borderRadius: config.borderRadius,
    border: type === 'capsule' ? `1px solid ${colorScheme.border}` : 'none',
    background: colorScheme.background,
    color: colorScheme.text,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: type === 'toggle' && selected ? '0px 1px 8px 0px rgba(21, 23, 25, 0.08)' : 'none',
    position: 'relative',
    minWidth: width === 'fill' ? '0' : 'fit-content',
    width: getTabWidth(),
    ...style,
  });

  const getHoverStyles = (): React.CSSProperties => {
    if (disabled || selected) return {};

    switch (type) {
      case 'underline':
        return {
          color: colors.primary.coolGray[600],
        };
      case 'capsule':
        return {
          backgroundColor: colors.primary.coolGray[50],
          borderColor: colors.primary.coolGray[400],
        };
      case 'toggle':
        return {
          backgroundColor: colors.primary.coolGray[100],
        };
      default:
        return {};
    }
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || selected) return;
    const hoverStyles = getHoverStyles();
    Object.assign(e.currentTarget.style, hoverStyles);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || selected) return;
    // 기본 스타일로 복원
    const baseStyles = getBaseStyles();
    Object.assign(e.currentTarget.style, baseStyles);
  };

  const renderIcon = () => {
    if (!icon) return null;
    return <Icon type={icon} size={config.iconSize} color="currentColor" />;
  };

  const renderNumber = () => {
    if (number === undefined || number === null || number === '') return null;
    return (
      <span
        style={{
          color: colorScheme.number,
          fontSize: config.fontSize,
          fontWeight: config.fontWeight,
        }}
      >
        {number}
      </span>
    );
  };

  // underline용 ::after 스타일을 위한 unique id 생성
  const uniqueId = React.useId();
  const buttonId = `tab-${uniqueId}`;

  return (
    <>
      {/* underline 타입일 때만 CSS 스타일 추가 */}
      {type === 'underline' && (
        <style>
          {`
            #${buttonId}::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 2px;
              background-color: ${selected ? colorScheme.border : 'transparent'};
              transition: background-color 0.2s ease;
            }
            #${buttonId}:hover:not(:disabled)::after {
              background-color: ${!selected && !disabled ? colors.primary.coolGray[300] : selected ? colorScheme.border : 'transparent'};
            }
          `}
        </style>
      )}
      <button
        id={buttonId}
        style={getBaseStyles()}
        onClick={handleClick}
        disabled={disabled}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {renderIcon()}
        <span>{children}</span>
        {renderNumber()}
      </button>
    </>
  );
};
