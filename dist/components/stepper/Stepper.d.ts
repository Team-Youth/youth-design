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
    /** 단위 (예: "회", "분", "개월") */
    unit?: string;
    /** 증감 폭 (기본값: 1) */
    step?: number;
    /** 시간 관련 값인지 여부 */
    isTime?: boolean;
    /** 시간의 시작 단위 ('sec' | 'min' | 'hour') */
    timeBaseUnit?: 'sec' | 'min' | 'hour';
    /** 입력값을 step 단위로 자동 반올림할지 여부 (기본값: false) */
    autoRound?: boolean;
}
export declare const Stepper: React.FC<StepperProps>;
