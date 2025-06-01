import React, { useState } from 'react';
import { colors } from '../../tokens';
import './Checkbox.css';

export interface CheckboxProps {
  /** 체크박스가 선택되었는지 여부 */
  checked?: boolean;
  /** 체크박스가 비활성화되었는지 여부 */
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

export const Checkbox: React.FC<CheckboxProps> = ({
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
          checkboxSize: '16px',
          iconSize: '10px',
          gap: '8px',
          fontSize: '12px',
          descriptionFontSize: '11px',
        };
      case 'large':
        return {
          checkboxSize: '24px',
          iconSize: '16px',
          gap: '12px',
          fontSize: '16px',
          descriptionFontSize: '14px',
        };
      default: // medium
        return {
          checkboxSize: '20px',
          iconSize: '14px',
          gap: '10px',
          fontSize: '14px',
          descriptionFontSize: '12px',
        };
    }
  };

  const sizeConfig = getSizeConfig();

  const getCheckboxStyles = (): React.CSSProperties => {
    if (disabled) {
      return {
        width: sizeConfig.checkboxSize,
        height: sizeConfig.checkboxSize,
        borderRadius: '4px',
        border: `2px solid ${colors.semantic.disabled.foreground}`,
        backgroundColor: checked
          ? colors.semantic.disabled.background
          : colors.semantic.disabled.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'not-allowed',
        transition: 'all 0.2s ease',
        position: 'relative',
      };
    } else if (checked) {
      return {
        width: sizeConfig.checkboxSize,
        height: sizeConfig.checkboxSize,
        borderRadius: '4px',
        border: `2px solid ${colors.primary.mainviolet}`,
        backgroundColor: colors.primary.mainviolet,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        position: 'relative',
      };
    } else if (isHovered) {
      return {
        width: sizeConfig.checkboxSize,
        height: sizeConfig.checkboxSize,
        borderRadius: '4px',
        border: `2px solid ${colors.primary.mainviolet}`,
        backgroundColor: colors.semantic.background.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        position: 'relative',
      };
    } else {
      return {
        width: sizeConfig.checkboxSize,
        height: sizeConfig.checkboxSize,
        borderRadius: '4px',
        border: `2px solid ${colors.semantic.border.strong}`,
        backgroundColor: colors.semantic.background.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        position: 'relative',
      };
    }
  };

  const getLabelStyles = (): React.CSSProperties => {
    return {
      fontSize: sizeConfig.fontSize,
      color: disabled ? colors.semantic.text.disabled : colors.semantic.text.primary,
      fontWeight: '500',
      lineHeight: '1.4',
      cursor: disabled ? 'not-allowed' : 'pointer',
    };
  };

  const getDescriptionStyles = (): React.CSSProperties => {
    return {
      fontSize: sizeConfig.descriptionFontSize,
      color: disabled ? colors.semantic.text.disabled : colors.semantic.text.tertiary,
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
    alignItems: labelPosition === 'right' ? 'flex-start' : 'flex-start',
    gap: sizeConfig.gap,
    flexDirection: labelPosition === 'left' ? 'row-reverse' : 'row',
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  const labelContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  };

  // Check icon SVG
  const CheckIcon = () => (
    <svg
      width={sizeConfig.iconSize}
      height={sizeConfig.iconSize}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
        stroke={disabled ? colors.semantic.disabled.foreground : colors.semantic.background.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div
      className={`youth-checkbox ${className}`}
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

      <div style={getCheckboxStyles()}>{checked && <CheckIcon />}</div>

      {(label || description) && (
        <div style={labelContainerStyles}>
          {label && <span style={getLabelStyles()}>{label}</span>}
          {description && <span style={getDescriptionStyles()}>{description}</span>}
        </div>
      )}
    </div>
  );
};
