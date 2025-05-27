import React, { useState } from 'react';
import { border } from '../../tokens/borders';
import { colors } from '../../tokens/colors';
import './BoxButton.css';

export interface BoxButtonProps {
  type?: 'solid' | 'ghost';
  size?: 'l' | 'm' | 's';
  disabled?: boolean;
  icon?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
}

const LoadingIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="loading-icon"
  >
    <circle
      cx="8"
      cy="8"
      r="6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="37.7"
      strokeDashoffset="37.7"
    />
  </svg>
);

export const BoxButton: React.FC<BoxButtonProps> = ({
  type = 'solid',
  size = 'l',
  disabled = false,
  icon,
  children,
  onClick,
  className = '',
  isLoading = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Size configurations
  const sizeConfig = {
    l: {
      paddingX: '16px',
      paddingY: '12px',
      gap: '4px',
      borderRadius: '12px',
      width: '320px',
      height: '48px',
    },
    m: {
      paddingX: '12px',
      paddingY: '8px',
      gap: '4px',
      borderRadius: '8px',
      width: '320px',
      height: '40px',
    },
    s: {
      paddingX: '8px',
      paddingY: '6px',
      gap: '4px',
      borderRadius: '4px',
      width: '320px',
      height: '32px',
    },
  };

  const getStyles = (): React.CSSProperties => {
    const config = sizeConfig[size];
    let styles: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: config.gap,
      padding: `${config.paddingY} ${config.paddingX}`,
      borderRadius: config.borderRadius,
      width: config.width,
      height: config.height,
      border: '1px solid transparent',
      cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      fontSize: '14px',
      fontWeight: '500',
    };

    if (type === 'solid') {
      if (disabled) {
        styles = {
          ...styles,
          backgroundColor: colors.semantic.disabled.background,
          color: colors.semantic.disabled.foreground,
          border: `1px solid ${colors.semantic.disabled.background}`,
          cursor: 'not-allowed',
        };
      } else if (isPressed) {
        styles = {
          ...styles,
          backgroundColor: colors.primary.tint.violet[700],
          color: colors.semantic.background.primary,
          border: `1px solid ${colors.primary.tint.violet[700]}`,
        };
      } else if (isHovered) {
        styles = {
          ...styles,
          backgroundColor: colors.primary.tint.violet[600],
          color: colors.semantic.background.primary,
          border: `1px solid ${colors.primary.tint.violet[600]}`,
        };
      } else {
        styles = {
          ...styles,
          backgroundColor: colors.primary.mainviolet,
          color: colors.semantic.background.primary,
          border: `1px solid ${colors.primary.mainviolet}`,
        };
      }
    } else if (type === 'ghost') {
      if (disabled) {
        styles = {
          ...styles,
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.disabled.foreground,
          border: `${border.s} ${colors.semantic.disabled.foreground}`,
          cursor: 'not-allowed',
        };
      } else if (isPressed || isHovered) {
        styles = {
          ...styles,
          backgroundColor: colors.primary.coolGray[100],
          color: colors.semantic.text.primary,
          border: `${border.s} ${colors.semantic.border.strong}`,
        };
      } else {
        styles = {
          ...styles,
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.text.primary,
          border: `${border.s} ${colors.semantic.border.strong}`,
        };
      }
    }

    // Loading state overrides
    if (isLoading) {
      if (type === 'solid') {
        styles = {
          ...styles,
          backgroundColor: colors.primary.mainviolet,
          color: colors.semantic.background.primary,
          border: `${border.s} ${colors.primary.mainviolet}`,
          cursor: 'not-allowed',
        };
      } else {
        styles = {
          ...styles,
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.text.primary,
          border: `${border.s} ${colors.semantic.border.strong}`,
          cursor: 'not-allowed',
        };
      }
    }

    return styles;
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

    return (
      <>
        {icon?.left && <span>{icon.left}</span>}
        {children && <span>{children}</span>}
        {icon?.right && <span>{icon.right}</span>}
      </>
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