import React, { ReactNode } from 'react';
import { ToastProps } from './Toast';
export interface ToastItem extends Omit<ToastProps, 'onClose'> {
    id?: string;
    duration?: number;
}
interface ToastProviderProps {
    children: ReactNode;
    /** Toast가 표시될 위치 */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    /** 기본 지속 시간 (ms) */
    defaultDuration?: number;
}
/**
 * Toast Provider 컴포넌트
 *
 * react-hot-toast를 래핑하여 기존 Toast 컴포넌트와 함께 사용할 수 있는 Provider입니다.
 */
export declare const ToastProvider: React.FC<ToastProviderProps>;
/**
 * useToast 훅
 *
 * react-hot-toast를 래핑하여 기존 API 호환성을 유지하면서 Toast를 사용할 수 있는 훅입니다.
 */
export declare const useToast: () => {
    success: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    error: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    warning: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    info: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    custom: (options: Omit<ToastItem, "id">) => string;
    remove: (id: string) => void;
    removeAll: () => void;
};
export default ToastProvider;
