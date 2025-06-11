import React, { useCallback, useState } from 'react';
import { colors, fontWeight, textStyles } from '../../tokens';
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
  onChange,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const checkboxSize = '24px';
  const gap = '8px';

  const getCheckboxStyles = (): React.CSSProperties => {
    const baseStyles = {
      width: checkboxSize,
      height: checkboxSize,
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease',
      position: 'relative' as const,
    };

    if (disabled && checked) {
      // checked + disabled 상태: 내부 배경은 disabled.foreground, 아이콘은 white
      return {
        ...baseStyles,
        border: `2px solid ${colors.semantic.disabled.foreground}`,
        backgroundColor: colors.semantic.disabled.foreground,
        cursor: 'not-allowed',
      };
    } else if (disabled) {
      // disabled이지만 checked가 아닌 상태
      return {
        ...baseStyles,
        border: `2px solid ${colors.semantic.disabled.foreground}`,
        backgroundColor: colors.semantic.disabled.background,
        cursor: 'not-allowed',
      };
    } else if (checked && isHovered) {
      // checked + hover 상태: violet600
      return {
        ...baseStyles,
        border: `2px solid ${colors.primary.tint.violet[600]}`,
        backgroundColor: colors.primary.tint.violet[600],
        cursor: 'pointer',
      };
    } else if (checked) {
      // checked 상태: mainviolet
      return {
        ...baseStyles,
        border: `2px solid ${colors.primary.mainviolet}`,
        backgroundColor: colors.primary.mainviolet,
        cursor: 'pointer',
      };
    } else if (isHovered) {
      // hover 상태: coolgray 200
      return {
        ...baseStyles,
        border: `2px solid ${colors.primary.coolGray[200]}`,
        backgroundColor: colors.semantic.background.primary,
        cursor: 'pointer',
      };
    } else {
      // 기본 상태: coolgray 100
      return {
        ...baseStyles,
        border: `2px solid ${colors.primary.coolGray[100]}`,
        backgroundColor: colors.semantic.background.primary,
        cursor: 'pointer',
      };
    }
  };

  const getIconColor = useCallback((): string => {
    if (disabled && checked) {
      // checked + disabled: white
      return 'white';
    } else if (disabled) {
      // disabled이지만 checked가 아닌 상태 (아이콘이 보이지 않음)
      return colors.semantic.disabled.foreground;
    } else if (checked) {
      // checked 상태: white
      return 'white';
    } else if (isHovered) {
      // hover 상태: coolgray 200
      return colors.primary.coolGray[200];
    } else {
      // 기본 상태: coolgray 100
      return colors.primary.coolGray[100];
    }
  }, [checked, disabled, isHovered]);

  const getLabelStyles = (): React.CSSProperties => {
    return {
      ...textStyles.body1,
      fontWeight: fontWeight.medium,
      color: disabled ? colors.semantic.disabled.foreground : colors.primary.coolGray[800],
      cursor: disabled ? 'not-allowed' : 'pointer',
    };
  };

  const getDescriptionStyles = (): React.CSSProperties => {
    return {
      ...textStyles.body2,
      fontWeight: fontWeight.regular,
      color: disabled ? colors.semantic.disabled.foreground : colors.primary.coolGray[300],
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
    alignItems: description ? 'flex-start' : 'center',
    gap: gap,
    flexDirection: labelPosition === 'left' ? 'row-reverse' : 'row',
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  const labelContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  };

  // 현재 상태에 따른 아이콘 색상을 미리 계산
  const iconColor = getIconColor();

  // Check icon SVG
  const CheckIcon = () => (
    <svg width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={iconColor}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3821 0.997823C13.7285 1.30089 13.7636 1.82736 13.4605 2.17372L5.80428 10.9237C5.64699 11.1035 5.42012 11.2071 5.18127 11.2083C4.94241 11.2095 4.71453 11.1081 4.55546 10.9299L0.545044 6.43733C0.238554 6.09399 0.268427 5.56719 0.611766 5.2607C0.955106 4.95421 1.4819 4.98409 1.78839 5.32743L5.17089 9.11661L12.2062 1.07622C12.5093 0.729853 13.0358 0.694755 13.3821 0.997823Z"
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

      <div style={getCheckboxStyles()}>
        <CheckIcon />
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
