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

    const getTextStyle = () => {
      if (type === 'toggle') {
        if (size === 'l') {
          return {
            ...textStyles.body1,
            fontWeight: getFontWeight(),
          };
        } else if (size === 's') {
          return {
            ...textStyles.body2,
            fontWeight: getFontWeight(),
          };
        } else {
          // size === 'm'
          return {
            ...textStyles.body3,
            fontWeight: getFontWeight(),
          };
        }
      }

      // 기존 로직 유지
      if (type === 'underline') {
        return {
          ...textStyles.heading4,
          fontWeight: getFontWeight(),
        };
      } else if (type === 'capsule') {
        return {
          ...textStyles.heading4,
          fontWeight: getFontWeight(),
        };
      } else {
        return {
          ...textStyles.body3,
          fontWeight: getFontWeight(),
        };
      }
    };

    const configs = {
      l: {
        ...getTextStyle(),
        height: type === 'underline' ? 64 : type === 'capsule' ? 42 : 40,
        padding: type === 'underline' ? '0 8px' : type === 'capsule' ? '10px 16px' : '0 8px',
        iconSize: 20,
        borderRadius: type === 'capsule' ? 100 : type === 'toggle' ? 8 : 0,
      },
      m: {
        ...getTextStyle(),
        height: type === 'underline' ? 48 : type === 'capsule' ? 36 : 32,
        padding: type === 'underline' ? '0 8px' : type === 'capsule' ? '6px 12px' : '0 8px',
        iconSize: 16,
        borderRadius: type === 'capsule' ? 100 : type === 'toggle' ? 6 : 0,
      },
      s: {
        ...getTextStyle(),
        height: type === 'underline' ? 40 : type === 'capsule' ? 30 : 'auto',
        padding: type === 'underline' ? '0 8px' : type === 'capsule' ? '5px 12px' : '4px 8px',
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
          text: colors.primary.coolGray[400], // Figma에서 확인한 #AFB6C0
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

  const getJustifyContent = () => {
    if (type === 'toggle') {
      return selected ? 'center' : 'stretch';
    }
    return 'center';
  };

  const getAlignItems = () => {
    if (type === 'toggle') {
      return selected ? 'center' : 'stretch';
    }
    return 'center';
  };

  const getBaseStyles = (): React.CSSProperties => ({
    display: width === 'fill' ? 'flex' : 'inline-flex',
    alignItems: getAlignItems(),
    justifyContent: getJustifyContent(),
    gap: '4px',
    height: type === 'toggle' && size === 's' ? 'auto' : config.height,
    minHeight: type === 'toggle' && size === 's' ? '30px' : undefined,
    padding: config.padding,
    fontSize: config.fontSize,
    fontWeight: config.fontWeight,
    borderRadius: config.borderRadius,
    border: type === 'capsule' ? `1px solid ${colorScheme.border}` : 'none',
    background: colorScheme.background,
    color: colorScheme.text,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition:
      type === 'toggle'
        ? 'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease'
        : 'all 0.2s ease',
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
          backgroundColor: 'rgba(175, 182, 192, 0.1)', // coolGray[400]의 10% 투명도
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

  const renderContent = () => {
    if (type === 'toggle' && !selected) {
      // toggle 타입이고 선택되지 않은 경우, 스트레치 레이아웃
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            gap: '4px',
          }}
        >
          {renderIcon()}
          <span>{children}</span>
          {renderNumber()}
        </div>
      );
    }

    // 기본 레이아웃
    return (
      <>
        {renderIcon()}
        <span>{children}</span>
        {renderNumber()}
      </>
    );
  };

  // underline용 ::after 스타일을 위한 unique id 생성
  const uniqueId = React.useId();
  const buttonId = `tab-${uniqueId}`;

  // toggle 타입의 CSS 클래스 생성
  const getToggleClasses = () => {
    if (type !== 'toggle') return '';

    const sizeClass =
      size === 'l' ? 'toggle-large' : size === 's' ? 'toggle-small' : 'toggle-medium';
    const stateClass = selected ? 'toggle-selected' : 'toggle-unselected';

    return `${sizeClass} ${stateClass}`;
  };

  const getToggleBaseStyles = (): React.CSSProperties => ({
    display: width === 'fill' ? 'flex' : 'inline-flex',
    alignItems: getAlignItems(),
    justifyContent: getJustifyContent(),
    gap: '4px',
    height: type === 'toggle' && size === 's' ? 'auto' : config.height,
    minHeight: type === 'toggle' && size === 's' ? '30px' : undefined,
    padding: config.padding,
    borderRadius: config.borderRadius,
    border: type === 'capsule' ? `1px solid ${colorScheme.border}` : 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: 'relative',
    minWidth: width === 'fill' ? '0' : 'fit-content',
    width: getTabWidth(),
    ...style,
  });

  return (
    <>
      {/* CSS 스타일 정의 */}
      <style>
        {`
          /* Toggle 타입 스타일 */
          .toggle-large.toggle-selected {
            font-size: ${textStyles.body1.fontSize};
            font-weight: ${fontWeight.semibold};
            color: ${colors.primary.coolGray[800]};
            background: ${colors.primary.gray.white};
            box-shadow: 0px 1px 8px 0px rgba(21, 23, 25, 0.08);
            transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          }
          
          .toggle-large.toggle-unselected {
            font-size: ${textStyles.body1.fontSize};
            font-weight: ${fontWeight.medium};
            color: ${colors.primary.coolGray[400]};
            background: transparent;
            box-shadow: none;
            transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          }
          
          .toggle-small.toggle-selected {
            font-size: ${textStyles.body2.fontSize};
            font-weight: ${fontWeight.semibold};
            color: ${colors.primary.coolGray[800]};
            background: ${colors.primary.gray.white};
            box-shadow: 0px 1px 8px 0px rgba(21, 23, 25, 0.08);
            transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          }
          
          .toggle-small.toggle-unselected {
            font-size: ${textStyles.body2.fontSize};
            font-weight: ${fontWeight.medium};
            color: ${colors.primary.coolGray[400]};
            background: transparent;
            box-shadow: none;
            transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          }
          
          .toggle-medium.toggle-selected {
            font-size: ${textStyles.body3.fontSize};
            font-weight: ${fontWeight.semibold};
            color: ${colors.primary.coolGray[800]};
            background: ${colors.primary.gray.white};
            box-shadow: 0px 1px 8px 0px rgba(21, 23, 25, 0.08);
            transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          }
          
          .toggle-medium.toggle-unselected {
            font-size: ${textStyles.body3.fontSize};
            font-weight: ${fontWeight.medium};
            color: ${colors.primary.coolGray[400]};
            background: transparent;
            box-shadow: none;
            transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          }
          
          /* 호버 효과 */
          .toggle-unselected:hover:not(:disabled) {
            background-color: rgba(175, 182, 192, 0.1) !important;
          }
        `}
        {/* underline 타입일 때만 CSS 스타일 추가 */}
        {type === 'underline' &&
          `
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
      <button
        id={buttonId}
        style={type === 'toggle' ? getToggleBaseStyles() : getBaseStyles()}
        onClick={handleClick}
        disabled={disabled}
        className={`${className} ${type === 'toggle' ? getToggleClasses() : ''}`}
        onMouseEnter={type === 'toggle' ? undefined : handleMouseEnter}
        onMouseLeave={type === 'toggle' ? undefined : handleMouseLeave}
      >
        {renderContent()}
      </button>
    </>
  );
};
