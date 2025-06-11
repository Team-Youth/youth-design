import React, { ReactNode } from 'react';

type ToastStatus = 'success' | 'error' | 'warning' | 'info';
interface ToastProps {
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
    /** 닫기 버튼 클릭 핸들러 */
    onClose?: () => void;
    /** 커스텀 클래스명 */
    className?: string;
}
/**
 * 토스트 오버레이 컴포넌트
 *
 * 사용자가 어떤 작업을 완료했을 때, 시스템이 잘 처리됐다는 걸 알려주는 알림입니다.
 * 현재 하고 있는 일을 방해하지 않고, 잠깐 나타났다 사라지는 방식으로 보여집니다.
 */
declare const Toast: React.FC<ToastProps>;

interface ToastItem extends Omit<ToastProps, 'onClose'> {
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
declare const ToastProvider: React.FC<ToastProviderProps>;
/**
 * useToast 훅
 *
 * react-hot-toast를 래핑하여 기존 API 호환성을 유지하면서 Toast를 사용할 수 있는 훅입니다.
 */
declare const useToast: () => {
    success: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    error: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    warning: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    info: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    custom: (options: Omit<ToastItem, "id">) => string;
    remove: (id: string) => void;
    removeAll: () => void;
};

export { Toast, type ToastItem, type ToastProps, ToastProvider, type ToastStatus, Toast as default, useToast };
