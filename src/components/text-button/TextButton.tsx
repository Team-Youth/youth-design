import { fontWeight, textStyles } from '../../tokens';
import { colors } from '../../tokens/colors';
import { Icon, IconType } from '../icon/Icon';

export interface TextButtonProps {
  size?: 'm' | 's' | 'xs';
  disabled?: boolean;
  underline?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
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
  leftIcon,
  rightIcon,
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
      iconSize: 16,
    },
    s: {
      ...textStyles.body2,
      fontWeight: fontWeight.medium,
      padding: '3px 6px',
      iconSize: 14,
    },
    xs: {
      ...textStyles.body3,
      fontWeight: fontWeight.regular, // xs 크기에서는 regular weight 사용
      padding: '2px 4px',
      iconSize: 12,
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
    const hasIcons = leftIcon || rightIcon || chevron;

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
      gap: hasIcons ? (leftIcon && rightIcon ? '4px' : '6px') : '0px',
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
    const config = sizeConfig[size];

    return (
      <>
        {leftIcon && <Icon type={leftIcon} size={config.iconSize} color={textColor} />}
        <div style={{ display: 'flex', alignItems: 'center', gap: chevron ? '4px' : '0' }}>
          {children && <span>{children}</span>}
          {chevron && <Icon type="chevron-right" size={config.iconSize} color={textColor} />}
        </div>
        {rightIcon && !chevron && (
          <Icon type={rightIcon} size={config.iconSize} color={textColor} />
        )}
      </>
    );
  };

  return (
    <button style={getStyles()} onClick={handleClick} disabled={disabled} className={className}>
      {renderContent()}
    </button>
  );
};
