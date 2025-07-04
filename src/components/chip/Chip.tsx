import React, { useState } from 'react';
import { colors } from '../../tokens/colors';
import { Font } from '../font/Font';
import { Icon, IconType } from '../icon';
import './Chip.css';

export interface ChipProps {
  /** 칩의 크기 */
  size?: 'l' | 'm';
  /** 칩의 모양 */
  type?: 'square' | 'capsule';
  /** 선택 상태 */
  selected?: boolean;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 앞쪽 아이콘 */
  leadingIcon?: IconType;
  /** 뒤쪽 아이콘 */
  trailingIcon?: IconType;
  /** 텍스트 내용 */
  text?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 뒤쪽 아이콘 클릭 이벤트 핸들러 */
  onClickTrailingIcon?: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  size = 'l',
  type = 'capsule',
  selected = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  text,
  onClick,
  onClickTrailingIcon,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size configurations (Figma 디자인 기준)
  const sizeConfig = {
    l: {
      paddingX: type === 'capsule' ? '20px' : '16px',
      paddingY: '9px',
      paddingWithLeadingIcon: type === 'capsule' ? '16px' : '12px',
      paddingWithTrailingIcon: type === 'capsule' ? '16px' : '12px',
      borderRadius: type === 'capsule' ? '100px' : '8px',
      height: '40px',
      gap: '4px',
      iconSize: 16,
    },
    m: {
      paddingX: type === 'capsule' ? '16px' : '12px',
      paddingY: '7px',
      paddingWithLeadingIcon: type === 'capsule' ? '12px' : '8px',
      paddingWithTrailingIcon: type === 'capsule' ? '12px' : '8px',
      borderRadius: type === 'capsule' ? '100px' : '6px',
      height: '32px',
      gap: '4px',
      iconSize: 16,
    },
  };

  const getStyles = (): React.CSSProperties => {
    const config = sizeConfig[size];
    const hasLeadingIcon = leadingIcon !== undefined;
    const hasTrailingIcon = trailingIcon !== undefined;

    // padding 값을 CSS 값으로 변환하는 헬퍼 함수
    const toCssValue = (value: string | number | undefined, defaultValue: string): string => {
      if (value === undefined) return defaultValue;
      return typeof value === 'number' ? `${value}px` : value;
    };

    let paddingLeft = config.paddingX;
    let paddingRight = config.paddingX;

    if (hasLeadingIcon) {
      paddingLeft = config.paddingWithLeadingIcon;
    }
    if (hasTrailingIcon) {
      paddingRight = config.paddingWithTrailingIcon;
    }

    let styles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${config.paddingY} ${paddingRight} ${config.paddingY} ${paddingLeft}`,
      borderRadius: config.borderRadius,
      height: config.height,
      border: '1px solid transparent',
      cursor: disabled ? 'not-allowed' : onClick ? 'pointer' : 'default',
      transition: 'all 0.2s ease',
      gap: config.gap,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
    };

    // State에 따른 스타일링 (Figma 디자인 기준)
    if (disabled) {
      // Disabled state
      styles = {
        ...styles,
        backgroundColor: colors.primary.coolGray[50], // F3F5F6
        border: `1px solid ${colors.semantic.border.default}`, // D6D6D6
        cursor: 'not-allowed',
      };
    } else if (selected) {
      // Selected state
      if (type === 'square') {
        styles = {
          ...styles,
          backgroundColor: '#F8F4FE', // Figma에서 확인한 selected square 배경색
          border: `1px solid #7248D9`, // Figma에서 확인한 border 색상
        };
      } else {
        // Capsule selected
        styles = {
          ...styles,
          backgroundColor: '#25282D', // Figma에서 확인한 검은색 배경
          border: 'none',
        };
      }
    } else if (isHovered) {
      // Hover state
      styles = {
        ...styles,
        backgroundColor: type === 'capsule' ? '#F9FAFA' : colors.primary.coolGray[50], // F3F5F6
        border: `1px solid ${colors.semantic.border.default}`, // D6D6D6
      };
    } else {
      // Resting state
      if (type === 'square') {
        styles = {
          ...styles,
          backgroundColor: colors.primary.gray.white,
          border: `1px solid ${colors.semantic.border.default}`, // D6D6D6
        };
      } else {
        // Capsule resting
        styles = {
          ...styles,
          backgroundColor: colors.primary.gray.white,
          border: `1px solid ${colors.semantic.border.default}`, // D6D6D6
        };
      }
    }

    return styles;
  };

  const getTextColor = () => {
    if (disabled) {
      return colors.semantic.disabled.foreground; // D1D5DB
    }

    if (selected) {
      if (type === 'square') {
        return '#5B27C4'; // Figma에서 확인한 selected square 텍스트 색상
      } else {
        // Capsule selected
        return '#FFFFFF'; // Figma에서 확인한 selected capsule 텍스트 색상
      }
    }

    // Default text color
    return colors.primary.coolGray[800]; // 25282D
  };

  const getIconColor = () => {
    if (disabled) {
      return colors.semantic.disabled.foreground; // D1D5DB
    }

    if (selected) {
      if (type === 'square') {
        return '#5B27C4'; // Figma에서 확인한 selected square 아이콘 색상
      } else {
        // Capsule selected
        return '#FFFFFF'; // Figma에서 확인한 selected capsule 아이콘 색상
      }
    }

    // Default icon color
    return colors.primary.coolGray[800]; // 25282D
  };

  const getFontWeight = (): 'regular' | 'medium' | 'semibold' | 'bold' => {
    // Figma에서 확인한 fontWeight: 400 (regular)
    return 'regular';
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleTrailingIconClick = (event: React.MouseEvent) => {
    if (!disabled && onClickTrailingIcon) {
      event.stopPropagation(); // 이벤트 전파 방지
      onClickTrailingIcon();
    }
  };

  const handleMouseEnter = () => {
    if (!disabled && !selected) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderContent = () => {
    const textColor = getTextColor();
    const iconColor = getIconColor();
    const fontWeight = getFontWeight();

    return (
      <>
        {leadingIcon && (
          <Icon type={leadingIcon} size={sizeConfig[size].iconSize} color={iconColor} />
        )}
        {text && (
          <Font type="body2" fontWeight={fontWeight} color={textColor}>
            {text}
          </Font>
        )}
        {trailingIcon && (
          <span
            onClick={onClickTrailingIcon ? handleTrailingIconClick : undefined}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: !disabled && onClickTrailingIcon ? 'pointer' : 'inherit',
              borderRadius: '4px',
              padding: '2px',
              margin: '-2px',
            }}
          >
            <Icon type={trailingIcon} size={sizeConfig[size].iconSize} color={iconColor} />
          </span>
        )}
      </>
    );
  };

  return (
    <button
      className={`chips chips--${size} chips--${type} ${selected ? 'chips--selected' : ''} ${disabled ? 'chips--disabled' : ''} ${className}`}
      style={getStyles()}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      type="button"
    >
      {renderContent()}
    </button>
  );
};
