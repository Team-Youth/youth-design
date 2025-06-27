import React, { useState } from 'react';
import {
  View,
  TextInput as RNTextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import { colors } from '../../tokens/colors';
import { Icon, IconType } from './Icon';

export interface TextInputProps {
  /** 입력 필드의 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 입력값 */
  value?: string;
  /** 입력값 변경 핸들러 */
  onChangeText?: (text: string) => void;
  /** 포커스 이벤트 핸들러 */
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  /** 블러 이벤트 핸들러 */
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 에러 상태 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 레이블 텍스트 */
  label?: string;
  /** 필수 필드 여부 */
  required?: boolean;
  /** 좌측 아이콘 */
  leftIcon?: IconType;
  /** 우측 아이콘 */
  rightIcon?: IconType;
  /** 입력 타입 */
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  /** 보안 텍스트 (비밀번호) */
  secureTextEntry?: boolean;
  /** 최대 길이 */
  maxLength?: number;
  /** 멀티라인 여부 */
  multiline?: boolean;
  /** 텍스트 영역 높이 (multiline일 때) */
  numberOfLines?: number;
  /** 추가 스타일 */
  style?: ViewStyle;
  /** 입력 필드 스타일 */
  inputStyle?: TextStyle;
}

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  onFocus,
  onBlur,
  disabled = false,
  error = false,
  errorMessage,
  label,
  required = false,
  leftIcon,
  rightIcon,
  keyboardType = 'default',
  secureTextEntry = false,
  maxLength,
  multiline = false,
  numberOfLines = 1,
  style,
  inputStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const getContainerStyle = (): ViewStyle => {
    let borderColor: string = colors.semantic.border.default;

    if (error) {
      borderColor = colors.semantic.state.error;
    } else if (isFocused) {
      borderColor = colors.primary.mainviolet;
    } else if (disabled) {
      borderColor = colors.semantic.disabled.foreground;
    }

    return {
      borderWidth: 1,
      borderColor,
      borderRadius: 8,
      backgroundColor: disabled
        ? colors.semantic.disabled.background
        : colors.semantic.background.primary,
      paddingHorizontal: 12,
      paddingVertical: multiline ? 12 : 14,
      minHeight: multiline ? numberOfLines * 20 + 24 : 48,
    };
  };

  const getInputStyle = (): TextStyle => {
    return {
      flex: 1,
      fontSize: 14,
      color: disabled ? colors.semantic.disabled.foreground : colors.semantic.text.primary,
      textAlignVertical: multiline ? 'top' : 'center',
      includeFontPadding: false,
    };
  };

  const getLabelStyle = (): TextStyle => {
    return {
      fontSize: 14,
      fontWeight: '500',
      color: colors.semantic.text.primary,
      marginBottom: 8,
    };
  };

  const getErrorStyle = (): TextStyle => {
    return {
      fontSize: 12,
      color: colors.semantic.state.error,
      marginTop: 4,
    };
  };

  const iconColor = disabled
    ? colors.semantic.disabled.foreground
    : error
      ? colors.semantic.state.error
      : colors.semantic.text.tertiary;

  return (
    <View style={style}>
      {label && (
        <Text style={getLabelStyle()}>
          {label}
          {required && <Text style={{ color: colors.semantic.state.error }}> *</Text>}
        </Text>
      )}

      <View style={[styles.inputContainer, getContainerStyle()]}>
        {leftIcon && (
          <View style={styles.iconContainer}>
            <Icon type={leftIcon} size={20} color={iconColor} />
          </View>
        )}

        <RNTextInput
          style={[getInputStyle(), inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={colors.semantic.text.tertiary}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          textAlignVertical={multiline ? 'top' : 'center'}
        />

        {rightIcon && (
          <View style={styles.iconContainer}>
            <Icon type={rightIcon} size={20} color={iconColor} />
          </View>
        )}
      </View>

      {error && errorMessage && <Text style={getErrorStyle()}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: 4,
  },
});
