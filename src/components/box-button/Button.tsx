import React, { useState } from 'react';
import { colors } from '../../tokens/colors';
import './Button.css';

export interface ButtonProps {
  type?: 'solid' | 'outlined' | 'text';
  level?: 'CTA' | 'secondary' | 'tertiary';
  size?: 'l' | 'm' | 's';
  width?: 'fill' | (string & {});
  disabled?: boolean;
  icon?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  underline?: boolean; // text 타입에서 사용
}

const LoadingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 50 50" className="loading-icon">
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const Button: React.FC<ButtonProps> = ({
  type = 'solid',
  level = 'CTA',
  size = 'l',
  width = '320px',
  disabled = false,
  icon,
  children,
  onClick,
  className = '',
  isLoading = false,
  underline = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Size configurations
  const sizeConfig = {
    l: {
      paddingX: type === 'text' ? '12px' : '16px',
      paddingY: type === 'text' ? '0px' : '12px',
      borderRadius: type === 'text' ? '12px' : '12px',
      width: '320px',
      height: type === 'text' ? '32px' : '48px',
      fontSize: '16px',
      fontWeight: '500',
      iconSize: '20px',
    },
    m: {
      paddingX: type === 'text' ? '8px' : '12px',
      paddingY: type === 'text' ? '0px' : '8px',
      borderRadius: type === 'text' ? '12px' : '8px',
      width: '320px',
      height: type === 'text' ? '24px' : '40px',
      fontSize: '14px',
      fontWeight: '500',
      iconSize: '16px',
    },
    s: {
      paddingX: type === 'text' ? '8px' : '8px',
      paddingY: type === 'text' ? '0px' : '6px',
      borderRadius: type === 'text' ? '12px' : '4px',
      width: '320px',
      height: type === 'text' ? '20px' : '32px',
      fontSize: '12px',
      fontWeight: '500',
      iconSize: type === 'text' ? '14px' : '16px',
    },
  };

  const getStyles = (): React.CSSProperties => {
    const config = sizeConfig[size];

    // width 동적 설정
    const getWidth = () => {
      if (width === 'fill') {
        return '100%';
      }
      return width;
    };

    let styles: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${config.paddingY} ${config.paddingX}`,
      borderRadius: config.borderRadius,
      width: getWidth(),
      height: config.height,
      border: type === 'text' ? 'none' : '1px solid transparent',
      cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      fontSize: config.fontSize,
      fontWeight: config.fontWeight,
      textDecoration: type === 'text' && underline ? 'underline' : 'none',
      background: 'none',
    };

    // Type별 스타일 적용
    if (type === 'solid') {
      styles = { ...styles, ...getSolidStyles(level, disabled, isLoading, isPressed, isHovered) };
    } else if (type === 'outlined') {
      styles = { ...styles, ...getOutlinedStyles(disabled, isLoading, isPressed, isHovered) };
    } else if (type === 'text') {
      styles = { ...styles, ...getTextStyles(disabled, isPressed, isHovered) };
    }

    return styles;
  };

  const getSolidStyles = (
    level: string,
    disabled: boolean,
    isLoading: boolean,
    isPressed: boolean,
    isHovered: boolean,
  ) => {
    if (disabled) {
      return {
        backgroundColor: colors.semantic.disabled.background,
        color: colors.semantic.disabled.foreground,
        border: `1px solid ${colors.semantic.disabled.background}`,
      };
    }

    if (isLoading) {
      if (level === 'CTA') {
        return {
          backgroundColor: colors.primary.mainviolet,
          color: colors.semantic.background.primary,
          border: `1px solid ${colors.primary.mainviolet}`,
        };
      } else if (level === 'secondary') {
        return {
          backgroundColor: colors.primary.tint.violet[200],
          color: colors.primary.mainviolet,
          border: `1px solid ${colors.primary.tint.violet[200]}`,
        };
      } else if (level === 'tertiary') {
        return {
          backgroundColor: colors.semantic.disabled.background,
          color: colors.semantic.text.primary,
          border: `1px solid ${colors.semantic.disabled.background}`,
        };
      }
    }

    // Level별 색상 정의
    const levelColors = {
      CTA: {
        normal: { bg: colors.primary.mainviolet, text: colors.semantic.background.primary },
        hovered: { bg: colors.primary.tint.violet[600], text: colors.semantic.background.primary },
        pressed: { bg: colors.primary.tint.violet[700], text: colors.semantic.background.primary },
      },
      secondary: {
        normal: { bg: colors.primary.tint.violet[100], text: colors.primary.mainviolet },
        hovered: { bg: colors.primary.tint.violet[200], text: colors.primary.mainviolet },
        pressed: { bg: colors.primary.tint.violet[300], text: colors.primary.tint.violet[600] },
      },
      tertiary: {
        normal: { bg: colors.semantic.disabled.background, text: colors.semantic.text.primary },
        hovered: { bg: colors.primary.coolGray[100], text: colors.semantic.text.primary },
        pressed: { bg: colors.semantic.disabled.foreground, text: colors.semantic.text.primary },
      },
    };

    const currentLevel = levelColors[level as keyof typeof levelColors];
    let currentState: {
      bg: string;
      text: string;
    } = currentLevel.normal;

    if (isPressed) {
      currentState = currentLevel.pressed;
    } else if (isHovered) {
      currentState = currentLevel.hovered;
    }

    return {
      backgroundColor: currentState.bg,
      color: currentState.text,
      border: `1px solid ${currentState.bg}`,
    };
  };

  const getOutlinedStyles = (
    disabled: boolean,
    isLoading: boolean,
    isPressed: boolean,
    isHovered: boolean,
  ) => {
    if (disabled) {
      return {
        backgroundColor: colors.semantic.background.primary,
        color: colors.semantic.disabled.foreground,
        border: `1px solid ${colors.semantic.disabled.foreground}`,
      };
    }

    if (isLoading) {
      return {
        backgroundColor: colors.semantic.background.primary,
        color: colors.semantic.text.primary,
        border: `1px solid ${colors.semantic.border.strong}`,
      };
    }

    if (isPressed) {
      return {
        backgroundColor: colors.primary.coolGray[100],
        color: colors.semantic.text.primary,
        border: `1px solid ${colors.semantic.border.strong}`,
      };
    } else if (isHovered) {
      return {
        backgroundColor: colors.semantic.disabled.background,
        color: colors.semantic.text.primary,
        border: `1px solid ${colors.semantic.border.strong}`,
      };
    } else {
      return {
        backgroundColor: colors.semantic.background.primary,
        color: colors.semantic.text.primary,
        border: `1px solid ${colors.semantic.border.strong}`,
      };
    }
  };

  const getTextStyles = (disabled: boolean, isPressed: boolean, isHovered: boolean) => {
    if (disabled) {
      return {
        color: colors.semantic.disabled.foreground,
        backgroundColor: 'transparent',
      };
    }

    // text 버튼은 배경색 변화 없이 텍스트 색상만 변경
    return {
      color: colors.semantic.text.primary,
      backgroundColor: 'transparent',
    };
  };

  const handleClick = () => {
    if (!disabled && !isLoading && onClick) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (!disabled && !isLoading) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    if (!disabled && !isLoading) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingIcon />;
    }

    const config = sizeConfig[size];
    const iconStyle = {
      width: config.iconSize,
      height: config.iconSize,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {icon?.left && <div style={iconStyle}>{icon.left}</div>}
        {children && <span>{children}</span>}
        {icon?.right && <div style={iconStyle}>{icon.right}</div>}
      </div>
    );
  };

  return (
    <button
      style={getStyles()}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={disabled || isLoading}
      className={className}
    >
      {renderContent()}
    </button>
  );
};
