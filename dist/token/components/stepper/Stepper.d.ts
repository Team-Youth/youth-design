import React from 'react';
export interface StepperProps {
    /** 초기 값 */
    value?: number;
    /** 최소값 */
    min?: number;
    /** 최대값 */
    max?: number;
    /** 값 변경 시 호출되는 콜백 */
    onChange?: (value: number) => void;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 컴포넌트 너비 */
    width?: 'fill' | (string & {});
    /** 에러 상태 */
    error?: boolean;
    /** 에러 메시지 */
    errorMessage?: string;
    /** 포커스 상태 */
    focused?: boolean;
    /** 키보드로 직접 편집 가능 여부 */
    editable?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React.CSSProperties;
}
export declare const Stepper: React.FC<StepperProps>;
