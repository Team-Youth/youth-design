import React from 'react';
export type ToastStatus = 'success' | 'error' | 'warning' | 'info';
export interface ToastProps {
    /** 토스트 상태 */
    status: ToastStatus;
    /** 제목 */
    title: string;
    /** 설명 텍스트 (선택사항) */
    description?: string;
    /** 앞쪽 아이콘 표시 여부 */
    showLeadingIcon?: boolean;
    /** 닫기 버튼 표시 여부 */
    showCloseButton?: boolean;
    /** base-ui toast 객체 */
    toast: any;
    /** 토스트 위치 (애니메이션을 위해) */
    position?: string;
}
/**
 * Base UI Toast를 youth-design 스타일로 래핑한 컴포넌트
 */
export declare const Toast: React.FC<ToastProps>;
export default Toast;
