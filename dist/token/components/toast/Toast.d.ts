import React from 'react';
/**
 * @deprecated Toast 컴포넌트는 더 이상 필요하지 않습니다.
 * sonner 라이브러리로 마이그레이션되었으며, ToastProvider와 useToast 훅을 사용하세요.
 */
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
    /** deprecated - sonner에서는 필요하지 않음 */
    toast?: any;
    /** deprecated - sonner에서는 필요하지 않음 */
    position?: string;
}
/**
 * @deprecated 이 컴포넌트는 더 이상 사용되지 않습니다.
 * 대신 useToast 훅을 사용하여 toast를 표시하세요.
 *
 * 마이그레이션 예시:
 * ```tsx
 * // 이전
 * <Toast status="success" title="성공!" description="작업이 완료되었습니다." />
 *
 * // 이후
 * const { success } = useToast();
 * success('성공!', '작업이 완료되었습니다.');
 * ```
 */
export declare const Toast: React.FC<ToastProps>;
export default Toast;
