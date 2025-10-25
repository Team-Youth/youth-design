import React, { ReactNode } from 'react';
export type ToastStatus = 'success' | 'error' | 'warning' | 'info';
export interface ToastItem {
    id?: string;
    status?: ToastStatus;
    title?: string;
    description?: string;
    duration?: number;
    showLeadingIcon?: boolean;
    showCloseButton?: boolean;
}
interface ToastProviderProps {
    children: ReactNode;
    /** Toast가 표시될 위치 */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    /** 기본 지속 시간 (ms) */
    defaultDuration?: number;
    /** 최대 토스트 개수 */
    limit?: number;
}
/**
 * Toast Provider 컴포넌트
 *
 * sonner 라이브러리를 래핑하여 기존 API 호환성을 유지하는 Provider입니다.
 */
export declare const ToastProvider: React.FC<ToastProviderProps>;
/**
 * useToast 훅
 *
 * sonner 라이브러리를 래핑하여 기존 API 호환성을 유지하면서 Toast를 사용할 수 있는 훅입니다.
 */
export declare const useToast: () => {
    success: (title: string, description?: string, options?: Partial<ToastItem>) => string | number;
    error: (title: string, description?: string, options?: Partial<ToastItem>) => string | number;
    warning: (title: string, description?: string, options?: Partial<ToastItem>) => string | number;
    info: (title: string, description?: string, options?: Partial<ToastItem>) => string | number;
    custom: (options: Omit<ToastItem, "id">) => string | number;
    remove: (id: string) => string | number;
    removeAll: () => string | number;
};
export default ToastProvider;
