import React, { ReactNode, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Toast, ToastProps } from './Toast';

// Toast 아이템 타입 (기존 호환성 유지)
export interface ToastItem extends Omit<ToastProps, 'onClose'> {
  id?: string;
  duration?: number;
}

// Provider Props
interface ToastProviderProps {
  children: ReactNode;
  /** Toast가 표시될 위치 */
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
  /** 기본 지속 시간 (ms) */
  defaultDuration?: number;
}

/**
 * Toast Provider 컴포넌트
 *
 * react-hot-toast를 래핑하여 기존 Toast 컴포넌트와 함께 사용할 수 있는 Provider입니다.
 */
export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'top-right',
  defaultDuration = 4000,
}) => {
  return (
    <>
      {children}
      <Toaster
        position={position}
        toastOptions={{
          duration: defaultDuration,
          style: {
            background: 'transparent',
            boxShadow: 'none',
            padding: 0,
            margin: 0,
          },
        }}
      />
    </>
  );
};

/**
 * useToast 훅
 *
 * react-hot-toast를 래핑하여 기존 API 호환성을 유지하면서 Toast를 사용할 수 있는 훅입니다.
 */
export const useToast = () => {
  // dismiss 함수를 미리 참조로 저장하여 재생성 방지
  const dismissToast = useCallback((id: string) => toast.dismiss(id), []);

  const success = useCallback(
    (title: string, description?: string, options?: Partial<ToastItem>) => {
      return toast.custom(
        (t) => (
          <Toast
            key={t.id}
            status="success"
            title={title}
            description={description}
            showLeadingIcon={options?.showLeadingIcon ?? true}
            showCloseButton={true}
            onClose={() => dismissToast(t.id)}
            {...options}
          />
        ),
        {
          duration: options?.duration || 4000,
          id: options?.id,
        },
      );
    },
    [dismissToast],
  );

  const error = useCallback(
    (title: string, description?: string, options?: Partial<ToastItem>) => {
      return toast.custom(
        (t) => (
          <Toast
            key={t.id}
            status="error"
            title={title}
            description={description}
            showLeadingIcon={options?.showLeadingIcon ?? true}
            showCloseButton={true}
            onClose={() => dismissToast(t.id)}
            {...options}
          />
        ),
        {
          duration: options?.duration || 4000,
          id: options?.id,
        },
      );
    },
    [dismissToast],
  );

  const warning = useCallback(
    (title: string, description?: string, options?: Partial<ToastItem>) => {
      return toast.custom(
        (t) => (
          <Toast
            key={t.id}
            status="warning"
            title={title}
            description={description}
            showLeadingIcon={options?.showLeadingIcon ?? true}
            showCloseButton={true}
            onClose={() => dismissToast(t.id)}
            {...options}
          />
        ),
        {
          duration: options?.duration || 4000,
          id: options?.id,
        },
      );
    },
    [dismissToast],
  );

  const info = useCallback(
    (title: string, description?: string, options?: Partial<ToastItem>) => {
      return toast.custom(
        (t) => (
          <Toast
            key={t.id}
            status="info"
            title={title}
            description={description}
            showLeadingIcon={options?.showLeadingIcon ?? true}
            showCloseButton={true}
            onClose={() => dismissToast(t.id)}
            {...options}
          />
        ),
        {
          duration: options?.duration || 4000,
          id: options?.id,
        },
      );
    },
    [dismissToast],
  );

  const custom = useCallback(
    (options: Omit<ToastItem, 'id'>) => {
      return toast.custom(
        (t) => (
          <Toast
            key={t.id}
            showLeadingIcon={true}
            showCloseButton={true}
            onClose={() => dismissToast(t.id)}
            {...options}
          />
        ),
        {
          duration: options.duration || 4000,
        },
      );
    },
    [dismissToast],
  );

  const remove = useCallback((id: string) => dismissToast(id), [dismissToast]);
  const removeAll = useCallback(() => toast.dismiss(), []);

  return {
    success,
    error,
    warning,
    info,
    custom,
    remove,
    removeAll,
  };
};

export default ToastProvider;
