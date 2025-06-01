import React, { useState } from 'react';
import { colors, fontWeight, textStyles } from '../../tokens';
import './Radio.css';

export interface RadioProps {
  /** 라디오 버튼이 선택되었는지 여부 */
  checked?: boolean;
  /** 라디오 버튼이 비활성화되었는지 여부 */
  disabled?: boolean;
  /** 라디오 버튼의 이름 (같은 그룹의 라디오 버튼들은 같은 name을 가져야 함) */
  name?: string;
  /** 라디오 버튼의 값 */
  value?: string;
  /** 라벨 텍스트 */
  label?: string;
  /** 라벨 설명 텍스트 */
  description?: string;
  /** 라벨 위치 */
  labelPosition?: 'right' | 'left';
  /** 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 변경 이벤트 핸들러 */
  onChange?: (checked: boolean, value?: string) => void;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  checked = false,
  disabled = false,
  name,
  value,
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
          ...textStyles.body3,
          fontWeight: fontWeight.medium,
          radioSize: '16px',
          dotSize: '8px',
          gap: '4px',
          descriptionFontSize: { ...textStyles.body3, fontWeight: fontWeight.regular },
        };

      case 'medium':
        return {
          ...textStyles.body2,
          fontWeight: fontWeight.medium,
          radioSize: '18px',
          dotSize: '10px',
          gap: '6px',
          descriptionFontSize: { ...textStyles.body3, fontWeight: fontWeight.regular },
        };
      case 'large':
        return {
          ...textStyles.body1,
          fontWeight: fontWeight.medium,
          radioSize: '22px',
          dotSize: '14px',
          gap: '8px',
          descriptionFontSize: { ...textStyles.body2, fontWeight: fontWeight.regular },
        };
      default: // large
        return {
          ...textStyles.body1,
          fontWeight: fontWeight.medium,
          radioSize: '22px',
          dotSize: '14px',
          gap: '8px',
          descriptionFontSize: { ...textStyles.body2, fontWeight: fontWeight.regular },
        };
    }
  };

  const sizeConfig = getSizeConfig();

  const getRadioStyles = (): React.CSSProperties => {
    if (disabled) {
      return {
        width: sizeConfig.radioSize,
        height: sizeConfig.radioSize,
        borderRadius: '50%',
        border: `2px solid ${colors.semantic.disabled.foreground}`,
        backgroundColor: !checked ? colors.semantic.disabled.background : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'not-allowed',
        transition: 'all 0.2s ease',
        position: 'relative',
      };
    } else if (checked) {
      return {
        width: sizeConfig.radioSize,
        height: sizeConfig.radioSize,
        borderRadius: '50%',
        border: `2px solid ${colors.primary.mainviolet}`,
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        position: 'relative',
      };
    } else if (isHovered) {
      return {
        width: sizeConfig.radioSize,
        height: sizeConfig.radioSize,
        borderRadius: '50%',
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
        width: sizeConfig.radioSize,
        height: sizeConfig.radioSize,
        borderRadius: '50%',
        border: `2px solid ${colors.semantic.border.strong}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        position: 'relative',
      };
    }
  };

  const getDotStyles = (): React.CSSProperties => {
    return {
      width: sizeConfig.dotSize,
      height: sizeConfig.dotSize,
      borderRadius: '50%',
      backgroundColor: checked
        ? disabled
          ? colors.semantic.disabled.foreground
          : colors.primary.mainviolet
        : 'transparent',
      transition: 'all 0.2s ease',
    };
  };

  const getLabelStyles = (): React.CSSProperties => {
    return {
      ...sizeConfig,
      color: disabled ? colors.semantic.text.disabled : colors.semantic.text.primary,
      cursor: disabled ? 'not-allowed' : 'pointer',
    };
  };

  const getDescriptionStyles = (): React.CSSProperties => {
    return {
      ...sizeConfig.descriptionFontSize,
      color: disabled ? colors.semantic.text.disabled : colors.primary.coolGray[300],
      marginTop: '2px',
      cursor: disabled ? 'not-allowed' : 'pointer',
    };
  };

  const handleChange = () => {
    if (!disabled && !checked) {
      onChange?.(true, value);
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
      className={`youth-radio-button ${className}`}
      style={containerStyles}
      onClick={handleChange}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => {}} // onChange는 부모 컴포넌트의 onClick으로 처리
        style={{ display: 'none' }}
      />

      <div style={getRadioStyles()}>
        <div style={getDotStyles()} />
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
