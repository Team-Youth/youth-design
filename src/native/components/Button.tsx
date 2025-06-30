import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../../tokens/colors';
import { Icon, IconType } from './Icon';

export interface ButtonProps {
  type?: 'solid' | 'outlined' | 'text';
  level?: 'CTA' | 'secondary' | 'tertiary';
  size?: 'l' | 'm' | 's' | 'xs';
  width?: 'fill' | number;
  disabled?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
  iconOnly?: IconType;
  children?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  isLoading?: boolean;
  underline?: boolean;
}

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
  onPress,
  style,
  isLoading = false,
  underline = false,
}) => {
  const isIconOnlyButton = Boolean(iconOnly && !children);

  // Size configurations
  const sizeConfig = {
    l: {
      paddingHorizontal: isIconOnlyButton ? 16 : 16,
      paddingVertical: isIconOnlyButton ? 12 : 12,
      borderRadius: 12,
      height: 48,
      fontSize: 16,
      fontWeight: '500' as const,
      iconSize: isIconOnlyButton ? 24 : 20,
      gap: 4,
    },
    m: {
      paddingHorizontal: isIconOnlyButton ? 16 : type === 'text' ? 12 : 12,
      paddingVertical: isIconOnlyButton ? 12 : type === 'text' ? 0 : 8,
      borderRadius: isIconOnlyButton ? 12 : type === 'text' ? 12 : 8,
      height: isIconOnlyButton ? 40 : type === 'text' ? 24 : 40,
      fontSize: 14,
      fontWeight: '500' as const,
      iconSize: 16,
      gap: 4,
    },
    s: {
      paddingHorizontal: isIconOnlyButton ? 16 : type === 'text' ? 8 : 8,
      paddingVertical: isIconOnlyButton ? 12 : type === 'text' ? 0 : 6,
      borderRadius: isIconOnlyButton ? 12 : type === 'text' ? 12 : 4,
      height: isIconOnlyButton ? 40 : type === 'text' ? 20 : 32,
      fontSize: 12,
      fontWeight: '500' as const,
      iconSize: type === 'text' ? 14 : 16,
      gap: 4,
    },
    xs: {
      paddingHorizontal: 4,
      paddingVertical: 0,
      borderRadius: 12,
      height: 20,
      fontSize: 12,
      fontWeight: leftIcon || rightIcon ? ('500' as const) : ('400' as const),
      iconSize: 14,
      gap: 4,
    },
  };

  const getButtonStyle = (): ViewStyle => {
    if (size === 'xs' && type !== 'text') {
      throw new Error('xs size is only available for text type buttons');
    }

    if (type === 'text' && size === 'l') {
      throw new Error('large size is not available for text type buttons');
    }

    const config = sizeConfig[size];

    const getWidth = () => {
      if (width === 'fill') {
        return '100%';
      }
      if (typeof width === 'number') {
        return width;
      }
      return undefined;
    };

    let buttonStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: config.paddingHorizontal,
      paddingVertical: config.paddingVertical,
      borderRadius: config.borderRadius,
      width: getWidth(),
      height: config.height,
      borderWidth: type === 'text' ? 0 : 1,
      borderColor: 'transparent',
    };

    if (type === 'solid') {
      buttonStyle = { ...buttonStyle, ...getSolidStyle(level, disabled, isLoading) };
    } else if (type === 'outlined') {
      buttonStyle = { ...buttonStyle, ...getOutlinedStyle(disabled, isLoading) };
    } else if (type === 'text') {
      buttonStyle = { ...buttonStyle, ...getTextStyle(disabled) };
    }

    return buttonStyle;
  };

  const getTextStyleConfig = (): TextStyle => {
    const config = sizeConfig[size];
    let textColor: string = colors.semantic.text.primary;

    if (disabled) {
      textColor = colors.semantic.disabled.foreground;
    } else if (type === 'solid') {
      if (level === 'CTA') {
        textColor = colors.semantic.background.primary;
      } else if (level === 'secondary') {
        textColor = colors.primary.mainviolet;
      } else if (level === 'tertiary') {
        textColor = colors.semantic.text.primary;
      }
    }

    return {
      fontSize: config.fontSize,
      fontWeight: config.fontWeight,
      color: textColor as string,
      textDecorationLine: type === 'text' && underline ? 'underline' : 'none',
    };
  };

  const getSolidStyle = (level: string, disabled: boolean, isLoading: boolean): ViewStyle => {
    if (disabled) {
      return {
        backgroundColor: colors.semantic.disabled.background,
        borderColor: colors.semantic.disabled.background,
      };
    }

    if (isLoading) {
      if (level === 'CTA') {
        return {
          backgroundColor: colors.primary.mainviolet,
          borderColor: colors.primary.mainviolet,
        };
      } else if (level === 'secondary') {
        return {
          backgroundColor: colors.primary.tint.violet[200],
          borderColor: colors.primary.tint.violet[200],
        };
      } else if (level === 'tertiary') {
        return {
          backgroundColor: colors.semantic.disabled.background,
          borderColor: colors.semantic.disabled.background,
        };
      }
    }

    const levelColors = {
      CTA: {
        backgroundColor: colors.primary.mainviolet,
        borderColor: colors.primary.mainviolet,
      },
      secondary: {
        backgroundColor: colors.primary.tint.violet[100],
        borderColor: colors.primary.tint.violet[100],
      },
      tertiary: {
        backgroundColor: colors.semantic.disabled.background,
        borderColor: colors.semantic.disabled.background,
      },
    };

    return levelColors[level as keyof typeof levelColors];
  };

  const getOutlinedStyle = (disabled: boolean, isLoading: boolean): ViewStyle => {
    if (disabled) {
      return {
        backgroundColor: colors.semantic.background.primary,
        borderColor: colors.semantic.disabled.foreground,
      };
    }

    return {
      backgroundColor: colors.semantic.background.primary,
      borderColor: colors.semantic.border.strong,
    };
  };

  const getTextStyle = (disabled: boolean): ViewStyle => {
    return {
      backgroundColor: 'transparent',
      borderWidth: 0,
    };
  };

  const getIconColor = (): string => {
    if (disabled) {
      return colors.semantic.disabled.foreground;
    }

    if (type === 'solid') {
      if (level === 'CTA') {
        return colors.semantic.background.primary;
      } else if (level === 'secondary') {
        return colors.primary.mainviolet;
      } else if (level === 'tertiary') {
        return colors.semantic.text.primary;
      }
    }

    return colors.semantic.text.primary;
  };

  const handlePress = () => {
    if (!disabled && !isLoading && onPress) {
      onPress();
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="small" color={getIconColor()} />;
    }

    const config = sizeConfig[size];
    const iconColor = getIconColor();

    if (isIconOnlyButton && iconOnly) {
      return <Icon type={iconOnly} size={config.iconSize} color={iconColor} />;
    }

    return (
      <View style={[styles.contentContainer, { gap: leftIcon || rightIcon ? config.gap : 0 }]}>
        {leftIcon && <Icon type={leftIcon} size={config.iconSize} color={iconColor} />}
        {children && <Text style={getTextStyleConfig()}>{children}</Text>}
        {rightIcon && <Icon type={rightIcon} size={config.iconSize} color={iconColor} />}
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={handlePress}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
