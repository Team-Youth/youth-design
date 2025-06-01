import React, { ReactNode } from 'react';
import { ToastProps } from './Toast';
export interface ToastItem extends Omit<ToastProps, 'onClose'> {
    id: string;
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
 * 앱 전체에서 Toast를 관리할 수 있는 Context를 제공합니다.
 */
export declare const ToastProvider: React.FC<ToastProviderProps>;
/**
 * useToast 훅
 *
 * Toast를 간편하게 사용할 수 있는 훅입니다.
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
