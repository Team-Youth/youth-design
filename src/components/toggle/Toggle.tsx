import React, { useState } from 'react';
import { colors, fontWeight, textStyles } from '../../tokens';
import './Toggle.css';

export interface ToggleProps {
  /** 토글이 켜져있는지 여부 */
  checked?: boolean;
  /** 토글이 비활성화되었는지 여부 */
  disabled?: boolean;
  /** 라벨 텍스트 */
  label?: string;
  /** 라벨 설명 텍스트 */
  description?: string;
  /** 라벨 위치 */
  labelPosition?: 'right' | 'left';
  /** 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 변경 이벤트 핸들러 */
  onChange?: (checked: boolean) => void;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked = false,
  disabled = false,
  label,
  description,
  labelPosition = 'right',
  size = 'medium',
  onChange,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getSizeConfig = () => {
    switch (size) {
      case 'small':
        return {
          ...textStyles.body2,
          fontWeight: fontWeight.medium,
          toggleWidth: '32px',
          toggleHeight: '18px',
          thumbSize: '14px',
          thumbOffset: '2px',
          gap: '6px',
          descriptionFontStyle: { ...textStyles.body3, fontWeight: fontWeight.regular },
        };
      case 'large':
        return {
          ...textStyles.heading3,
          fontWeight: fontWeight.medium,
          toggleWidth: '52px',
          toggleHeight: '28px',
          thumbSize: '24px',
          thumbOffset: '2px',
          gap: '10px',
          descriptionFontStyle: { ...textStyles.body2, fontWeight: fontWeight.regular },
        };
      default: // medium
        return {
          ...textStyles.body1,
          fontWeight: fontWeight.medium,
          toggleWidth: '48px',
          toggleHeight: '24px',
          thumbSize: '20px',
          thumbOffset: '2px',
          gap: '8px',
          descriptionFontStyle: { ...textStyles.body2, fontWeight: fontWeight.regular },
        };
    }
  };

  const sizeConfig = getSizeConfig();

  const getToggleStyles = (): React.CSSProperties => {
    if (disabled) {
      return {
        width: sizeConfig.toggleWidth,
        height: sizeConfig.toggleHeight,
        borderRadius: sizeConfig.toggleHeight,
        backgroundColor: colors.primary.coolGray[50],
        cursor: 'not-allowed',
        transition: 'all 0.3s ease',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: sizeConfig.thumbOffset,
      };
    } else if (isHovered) {
      return {
        width: sizeConfig.toggleWidth,
        height: sizeConfig.toggleHeight,
        borderRadius: sizeConfig.toggleHeight,
        backgroundColor: !checked ? colors.primary.coolGray[200] : colors.primary.tint.green[600],
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: sizeConfig.thumbOffset,
      };
    } else if (checked) {
      return {
        width: sizeConfig.toggleWidth,
        height: sizeConfig.toggleHeight,
        borderRadius: sizeConfig.toggleHeight,
        backgroundColor: colors.primary.tint.green[500],
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: sizeConfig.thumbOffset,
      };
    } else {
      return {
        width: sizeConfig.toggleWidth,
        height: sizeConfig.toggleHeight,
        borderRadius: sizeConfig.toggleHeight,
        backgroundColor: colors.primary.coolGray[100],
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: sizeConfig.thumbOffset,
      };
    }
  };

  const getThumbStyles = (): React.CSSProperties => {
    const thumbPosition = checked
      ? `calc(${sizeConfig.toggleWidth} - ${sizeConfig.thumbSize} - ${parseInt(sizeConfig.thumbOffset) * 2}px)`
      : '0px';

    return {
      width: sizeConfig.thumbSize,
      height: sizeConfig.thumbSize,
      borderRadius: '50%',
      backgroundColor: 'white',
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      transform: `translateX(${thumbPosition})`,
      position: 'absolute',
    };
  };

  const getLabelStyles = (): React.CSSProperties => {
    return {
      ...sizeConfig,
      color: disabled ? colors.semantic.text.disabled : colors.primary.coolGray[800],
      cursor: disabled ? 'not-allowed' : 'pointer',
    };
  };

  const getDescriptionStyles = (): React.CSSProperties => {
    return {
      ...sizeConfig.descriptionFontStyle,
      color: disabled ? colors.semantic.text.disabled : colors.primary.coolGray[300],
      lineHeight: '1.3',
      marginTop: '2px',
      cursor: disabled ? 'not-allowed' : 'pointer',
    };
  };

  const handleChange = () => {
    if (!disabled) {
      onChange?.(!checked);
      onClick?.();
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setIsHovered(false);
    }
  };

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: !description ? 'center' : 'flex-start',
    gap: sizeConfig.gap,
    flexDirection: labelPosition === 'left' ? 'row-reverse' : 'row',
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  const labelContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  };

  return (
    <div
      className={`youth-toggle ${className}`}
      style={containerStyles}
      onClick={handleChange}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => {}} // onChange는 부모 컴포넌트의 onClick으로 처리
        style={{ display: 'none' }}
      />

      <div style={getToggleStyles()}>
        <div style={getThumbStyles()} />
      </div>

      {(label || description) && (
        <div style={labelContainerStyles}>
          {label && <span style={getLabelStyles()}>{label}</span>}
          {description && <span style={getDescriptionStyles()}>{description}</span>}
        </div>
      )}
    </div>
  );
};
