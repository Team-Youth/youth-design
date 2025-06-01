import React from 'react';
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
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
    /** 에러 상태 */
    error?: boolean;
    /** 에러 메시지 */
    errorMessage?: string;
    /** 커스텀 클래스명 */
    className?: string;
    /** 문자 수 카운터 표시 여부 */
    showCharacterCounter?: boolean;
    /** 최대 문자 수 */
    maxLength?: number;
    /** 상태 (filled/empty) */
    status?: 'filled' | 'empty';
    /** 너비 설정 (기본값: '100%') */
    width?: string | number;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
