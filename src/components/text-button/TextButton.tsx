import { fontWeight, textStyles } from '../../tokens';
import { colors } from '../../tokens/colors';

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

const ChevronRightIcon = ({ color }: { color?: string }) => (
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.24408 4.4107C8.56951 4.08527 9.09715 4.08527 9.42259 4.4107L8.83333 4.99996L8.24408 5.58922C7.91864 5.26378 7.91864 4.73614 8.24408 4.4107ZM12.6548 9.99996L8.24408 5.58922C8.24405 5.58919 8.24408 5.58922 8.83333 4.99996C9.42259 4.4107 9.42256 4.41068 9.42259 4.4107L14.4226 9.4107C14.748 9.73614 14.748 10.2638 14.4226 10.5892L9.42259 15.5892C9.09715 15.9147 8.56951 15.9147 8.24408 15.5892C7.91864 15.2638 7.91864 14.7361 8.24408 14.4107L12.6548 9.99996Z"
      fill={color || 'currentColor'}
    />
  </svg>
);

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
      gap: '4px',
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
          {chevron && <ChevronRightIcon color={textColor} />}
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
