import React from 'react';
import { ViewStyle, TextStyle, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { IconType } from './Icon';
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
export declare const TextInput: React.FC<TextInputProps>;
