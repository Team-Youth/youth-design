import React, { useState } from 'react';
import { colors } from '../../tokens/colors';
import { Font } from '../font/Font';
import './Chips.css';

export interface ChipsProps {
  /** 칩의 크기 */
  size?: 'large' | 'medium';
  /** 칩의 모양 */
  type?: 'square' | 'capsule';
  /** 칩의 상태 */
  state?: 'hover' | 'selected' | 'disabled' | 'resting';
  /** 아이콘 위치 */
  iconPosition?: 'leading' | 'trailing';
  /** 아이콘 요소 */
  icon?: React.ReactNode;
  /** 텍스트 내용 */
  children?: React.ReactNode;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const Chips: React.FC<ChipsProps> = ({
  size = 'medium',
  type = 'capsule',
  state = 'resting',
  iconPosition = 'leading',
  icon,
  children,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size configurations
  const sizeConfig = {
    large: {
      paddingX: '16px',
      paddingY: '9px',
      borderRadius: type === 'capsule' ? '100px' : '8px',
      height: '40px',
      gap: '4px',
    },
    medium: {
      paddingX: '12px',
      paddingY: '6px',
      borderRadius: type === 'capsule' ? '100px' : '6px',
      height: '32px',
      gap: '4px',
    },
  };

  const getStyles = (): React.CSSProperties => {
    const config = sizeConfig[size];

    let styles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${config.paddingY} ${config.paddingX}`,
      borderRadius: config.borderRadius,
      height: config.height,
      border: '1px solid transparent',
      cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      gap: config.gap,
      whiteSpace: 'nowrap',
    };

    // State에 따른 스타일링
    switch (state) {
      case 'selected':
        styles = {
          ...styles,
          backgroundColor: colors.primary.mainviolet,
          border: `1px solid ${colors.primary.mainviolet}`,
        };
        break;

      case 'hover':
        styles = {
          ...styles,
          backgroundColor: colors.primary.coolGray[50],
          border: `1px solid ${colors.primary.coolGray[200]}`,
        };
        break;

      case 'disabled':
        styles = {
          ...styles,
          backgroundColor: colors.semantic.disabled.background,
          border: `1px solid ${colors.semantic.disabled.background}`,
          cursor: 'not-allowed',
        };
        break;

      case 'resting':
      default:
        if (isHovered) {
          styles = {
            ...styles,
            backgroundColor: colors.primary.coolGray[50],
            border: `1px solid ${colors.primary.coolGray[200]}`,
          };
        } else {
          styles = {
            ...styles,
            backgroundColor: colors.primary.gray.white,
            border: `1px solid ${colors.semantic.border.default}`,
          };
        }
        break;
    }

    return styles;
  };

  const getTextColor = () => {
    switch (state) {
      case 'selected':
        return colors.primary.gray.white;
      case 'disabled':
        return colors.semantic.disabled.foreground;
      default:
        return colors.primary.coolGray[800];
    }
  };

  const handleClick = () => {
    if (state !== 'disabled' && onClick) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (state === 'resting') {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderContent = () => {
    if (!icon) {
      return (
        <Font type="body2" fontWeight="medium" color={getTextColor()}>
          {children}
        </Font>
      );
    }

    if (iconPosition === 'leading') {
      return (
        <>
          <span className="chips-icon">{icon}</span>
          {children && (
            <Font type="body2" fontWeight="medium" color={getTextColor()}>
              {children}
            </Font>
          )}
        </>
      );
    } else {
      return (
        <>
          {children && (
            <Font type="body2" fontWeight="medium" color={getTextColor()}>
              {children}
            </Font>
          )}
          <span className="chips-icon">{icon}</span>
        </>
      );
    }
  };

  return (
    <button
      className={`chips chips--${size} chips--${type} chips--${state} ${className}`}
      style={getStyles()}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={state === 'disabled'}
      type="button"
    >
      {renderContent()}
    </button>
  );
};
