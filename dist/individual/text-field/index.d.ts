import React from 'react';
import { IconType } from '../icon/index.js';

interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    /** 입력 필드의 placeholder 텍스트 */
    placeholder?: string;
    /** 입력 값 */
    value?: string;
    /** 기본 값 */
    defaultValue?: string;
    /** 값 변경 시 호출되는 콜백 */
    onChange?: (value: string) => void;
    /** 포커스 시 호출되는 콜백 */
    onFocus?: () => void;
    /** 블러 시 호출되는 콜백 */
    onBlur?: () => void;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 읽기 전용 상태 */
    readOnly?: boolean;
    /** 에러 상태 */
    error?: boolean;
    /** 에러 메시지 */
    errorMessage?: string;
    /** 커스텀 클래스명 */
    className?: string;
    /** 입력 타입 */
    type?: 'text' | 'password' | 'email' | 'number' | 'tel';
    /** Leading 아이콘 */
    leadingIcon?: React.ReactNode;
    /** Trailing 아이콘 */
    trailingIcon?: React.ReactNode;
    /** Leading 아이콘 타입 (Icon 컴포넌트 사용) */
    leadingIconType?: IconType;
    /** Trailing 아이콘 타입 (Icon 컴포넌트 사용) */
    trailingIconType?: IconType;
    /** Leading 아이콘 클릭 핸들러 */
    onLeadingIconClick?: () => void;
    /** Trailing 아이콘 클릭 핸들러 */
    onTrailingIconClick?: () => void;
    /** 상태 (filled/empty) */
    status?: 'filled' | 'empty';
    /** 너비 */
    width?: 'fill' | (string & {}) | number;
}
declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;

export { TextField, type TextFieldProps };
