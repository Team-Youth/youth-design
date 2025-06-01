import { fontWeight, textStyles } from '../../tokens';
import { colors } from '../../tokens/colors';
import { Icon } from '../icon/Icon';

export interface TextButtonProps {
  size?: 'm' | 's' | 'xs';
  disabled?: boolean;
  underline?: boolean;
  icon?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  width?: string | number;
  height?: string | number;
  chevron?: boolean;
  color?: string;
}

export const TextButton: React.FC<TextButtonProps> = ({
  size = 'm',
  disabled = false,
  underline = false,
  icon,
  children,
  onClick,
  className = '',
  width,
  height,
  chevron = false,
  color,
}) => {
  // Size configurations
  const sizeConfig = {
    m: {
      ...textStyles.body1,
      fontWeight: fontWeight.medium,
      padding: '4px 8px',
    },
    s: {
      ...textStyles.body2,
      fontWeight: fontWeight.medium,
      padding: '3px 6px',
    },
    xs: {
      ...textStyles.body3,
      fontWeight: fontWeight.medium,
      padding: '2px 4px',
    },
  };

  const getTextColor = () => {
    if (disabled) {
      return colors.semantic.disabled.foreground;
    }
    return color || colors.primary.coolGray[800];
  };

  const getStyles = (): React.CSSProperties => {
    const config = sizeConfig[size];
    const textColor = getTextColor();

    // 아이콘이 있는지 확인
    const hasIcons = icon?.left || icon?.right;

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: config.padding,
      border: 'none',
      background: 'transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontSize: config.fontSize,
      lineHeight: config.lineHeight,
      fontWeight: config.fontWeight,
      color: textColor,
      textDecoration: underline ? 'underline' : 'none',
      textUnderlineOffset: underline ? '2px' : undefined,
      width: width || 'auto',
      height: height || 'auto',
      minWidth: 'fit-content',
      minHeight: 'fit-content',
      gap: hasIcons ? '4px' : '0px',
      transition: 'all 0.2s ease',
    };
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const renderContent = () => {
    const textColor = getTextColor();

    return (
      <>
        {icon?.left && icon.left}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {children && <span>{children}</span>}
          {chevron && <Icon type="arrow-right" size={20} color={textColor} />}
        </div>
        {icon?.right && !chevron && icon.right}
      </>
    );
  };

  return (
    <button style={getStyles()} onClick={handleClick} disabled={disabled} className={className}>
      {renderContent()}
    </button>
  );
};
