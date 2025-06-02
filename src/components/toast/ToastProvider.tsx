import React, { ReactNode } from 'react';
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
  // react-hot-toast position 매핑
  const getToasterPosition = (pos: string) => {
    switch (pos) {
      case 'top-right':
        return 'top-right';
      case 'top-left':
        return 'top-left';
      case 'bottom-right':
        return 'bottom-right';
      case 'bottom-left':
        return 'bottom-left';
      case 'top-center':
        return 'top-center';
      case 'bottom-center':
        return 'bottom-center';
      default:
        return 'top-right';
    }
  };

  return (
    <>
      {children}
      <Toaster
        position={getToasterPosition(position)}
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
  // 편의 메서드들
  const toastMethods = {
    success: (title: string, description?: string, options?: Partial<ToastItem>) => {
      const toastData: ToastItem = {
        status: 'success',
        title,
        description,
        ...options,
      };

      return toast.custom(
        (t) => <Toast {...toastData} onClose={() => toast.dismiss(t.id)} showCloseButton={true} />,
        {
          duration: options?.duration || 4000,
          id: options?.id,
        },
      );
    },

    error: (title: string, description?: string, options?: Partial<ToastItem>) => {
      const toastData: ToastItem = {
        status: 'error',
        title,
        description,
        ...options,
      };

      return toast.custom(
        (t) => <Toast {...toastData} onClose={() => toast.dismiss(t.id)} showCloseButton={true} />,
        {
          duration: options?.duration || 4000,
          id: options?.id,
        },
      );
    },

    warning: (title: string, description?: string, options?: Partial<ToastItem>) => {
      const toastData: ToastItem = {
        status: 'warning',
        title,
        description,
        ...options,
      };

      return toast.custom(
        (t) => <Toast {...toastData} onClose={() => toast.dismiss(t.id)} showCloseButton={true} />,
        {
          duration: options?.duration || 4000,
          id: options?.id,
        },
      );
    },

    info: (title: string, description?: string, options?: Partial<ToastItem>) => {
      const toastData: ToastItem = {
        status: 'info',
        title,
        description,
        ...options,
      };

      return toast.custom(
        (t) => <Toast {...toastData} onClose={() => toast.dismiss(t.id)} showCloseButton={true} />,
        {
          duration: options?.duration || 4000,
          id: options?.id,
        },
      );
    },

    custom: (options: Omit<ToastItem, 'id'>) => {
      return toast.custom(
        (t) => <Toast {...options} onClose={() => toast.dismiss(t.id)} showCloseButton={true} />,
        {
          duration: options.duration || 4000,
        },
      );
    },

    remove: (id: string) => toast.dismiss(id),
    removeAll: () => toast.dismiss(),
  };

  return toastMethods;
};

export default ToastProvider;
