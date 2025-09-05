import React, { useState } from 'react';
import { colors } from '../../tokens/colors';
import { Icon, IconType } from '../icon/Icon';

export interface ButtonProps {
  type?: 'solid' | 'outlined' | 'text';
  level?: 'CTA' | 'secondary' | 'tertiary';
  size?: 'l' | 'm' | 's' | 'xs';
  width?: 'fill' | (string & {});
  disabled?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
  iconOnly?: IconType; // 아이콘만 있는 버튼
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  underline?: boolean; // text 타입에서 사용
}

const LoadingIcon = () => {
  const loadingKeyframes = `
    @keyframes loading-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes loading-dash {
      0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
      }
      100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
      }
    }
  `;

  return (
    <>
      <style>{loadingKeyframes}</style>
      <svg
        width="16"
        height="16"
        viewBox="0 0 50 50"
        style={{
          animation: 'loading-spin 2s linear infinite',
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1, 150"
          strokeDashoffset="0"
          style={{
            animation: 'loading-dash 1.5s ease-in-out infinite',
          }}
        />
      </svg>
    </>
  );
};

export const Button: React.FC<ButtonProps> = ({
  type = 'solid',
  level = 'CTA',
  size = 'l',
  width,
  disabled = false,
  leftIcon,
  rightIcon,
  iconOnly,
  children,
  onClick,
  className = '',
  isLoading = false,
  underline = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // 아이콘만 있는 버튼인지 확인
  const isIconOnlyButton = Boolean(iconOnly && !children);

  // Size configurations
  const sizeConfig = {
    l: {
      paddingX: isIconOnlyButton ? '16px' : '16px',
      paddingY: isIconOnlyButton ? '12px' : '12px',
      borderRadius: '12px',
      width: 'auto',
      height: '48px',
      fontSize: '16px',
      fontWeight: '500',
      iconSize: isIconOnlyButton ? 24 : 20,
      gap: '4px',
    },
    m: {
      paddingX: isIconOnlyButton ? '16px' : type === 'text' ? '12px' : '12px',
      paddingY: isIconOnlyButton ? '12px' : type === 'text' ? '0px' : '8px',
      borderRadius: type === 'text' ? '12px' : '8px',
      width: 'auto',
      height: isIconOnlyButton ? '40px' : type === 'text' ? '24px' : '40px',
      fontSize: '14px',
      fontWeight: '500',
      iconSize: 16,
      gap: '4px',
    },
    s: {
      paddingX: isIconOnlyButton ? '0px' : type === 'text' ? '8px' : '8px',
      paddingY: isIconOnlyButton ? '0px' : type === 'text' ? '0px' : '6px',
      borderRadius: type === 'text' ? '12px' : '4px',
      width: 'auto',
      height: isIconOnlyButton ? '32px' : type === 'text' ? '20px' : '32px',
      fontSize: '12px',
      fontWeight: '500',
      iconSize: type === 'text' ? 14 : 16,
      gap: '4px',
    },
    // textButton 전용 사이즈
    xs: {
      paddingX: '4px',
      paddingY: '0px',
      borderRadius: '12px',
      width: 'auto',
      height: '20px',
      fontSize: '12px',
      fontWeight: leftIcon || rightIcon ? '500' : '400',
      iconSize: 14,
      gap: '4px',
    },
  };

  const getStyles = (): React.CSSProperties => {
    // xs 사이즈는 text 타입에서만 사용 가능
    if (size === 'xs' && type !== 'text') {
      throw new Error('xs size is only available for text type buttons');
    }

    // text 타입에서는 large 사이즈 사용 불가
    if (type === 'text' && size === 'l') {
      throw new Error('large size is not available for text type buttons');
    }

    const config = sizeConfig[size];

    // width 동적 설정
    const getWidth = () => {
      if (width === 'fill') {
        return '100%';
      }
      if (isIconOnlyButton) {
        return config.height; // iconOnly 버튼은 정사각형으로 만들기 위해 height와 동일하게 설정
      }
      if (width) {
        return width;
      }
      return 'fit-content';
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
    const iconColor = getIconColor();

    // iconOnly 버튼인 경우
    if (isIconOnlyButton && iconOnly) {
      return (
        <Icon
          type={iconOnly}
          size={config.iconSize}
          color={iconColor}
          style={{ pointerEvents: 'none' }}
        />
      );
    }

    // 일반 버튼인 경우
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: leftIcon || rightIcon ? config.gap : '0',
        }}
      >
        {leftIcon && (
          <Icon
            type={leftIcon}
            size={config.iconSize}
            color={iconColor}
            style={{ pointerEvents: 'none' }}
          />
        )}
        {children && <span>{children}</span>}
        {rightIcon && (
          <Icon
            type={rightIcon}
            size={config.iconSize}
            color={iconColor}
            style={{ pointerEvents: 'none' }}
          />
        )}
      </div>
    );
  };

  const getIconColor = (): string => {
    const styles = getStyles();
    return (styles.color as string) || colors.semantic.text.primary;
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
