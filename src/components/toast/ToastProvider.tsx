import React, { ReactNode, useCallback, createContext, useContext } from 'react';
import { Toast as BaseToast } from '@base-ui-components/react/toast';
import { Toast, ToastProps } from './Toast';

// Toast 아이템 타입 (기존 호환성 유지)
export interface ToastItem extends Omit<ToastProps, 'onClose' | 'toast'> {
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
  /** 최대 토스트 개수 */
  limit?: number;
}

// Position Context for sharing position info
const ToastPositionContext = createContext<string>('top-right');

// Position 스타일 맵핑
const positionStyles = {
  'top-right': {
    top: '16px',
    right: '16px',
  },
  'top-left': {
    top: '16px',
    left: '16px',
  },
  'bottom-right': {
    bottom: '16px',
    right: '16px',
  },
  'bottom-left': {
    bottom: '16px',
    left: '16px',
  },
  'top-center': {
    top: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  'bottom-center': {
    bottom: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
} as const;

/**
 * 토스트 렌더러 컴포넌트
 *
 * base-ui의 toast manager에서 관리되는 토스트들을 실제 UI로 렌더링합니다.
 */
const ToastRenderer: React.FC = () => {
  const { toasts } = BaseToast.useToastManager();
  const position = useContext(ToastPositionContext);

  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          status={(toast.type as ToastProps['status']) || 'info'}
          title={toast.title || ''}
          description={toast.description}
          showLeadingIcon={true}
          showCloseButton={true}
          position={position}
        />
      ))}
    </>
  );
};

/**
 * Toast Provider 컴포넌트
 *
 * base-ui의 toast 시스템을 래핑하여 기존 Toast 컴포넌트와 함께 사용할 수 있는 Provider입니다.
 */
export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'top-right',
  defaultDuration = 3000,
  limit = 3,
}) => {
  return (
    <BaseToast.Provider timeout={defaultDuration} limit={limit}>
      <ToastPositionContext.Provider value={position}>
        {children}
        <BaseToast.Viewport
          style={{
            position: 'fixed',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            maxWidth: '380px',
            outline: 'none',
            pointerEvents: 'none',
            ...positionStyles[position],
          }}
        >
          <ToastRenderer />
        </BaseToast.Viewport>
      </ToastPositionContext.Provider>
    </BaseToast.Provider>
  );
};

/**
 * useToast 훅
 *
 * base-ui의 toast 시스템을 래핑하여 기존 API 호환성을 유지하면서 Toast를 사용할 수 있는 훅입니다.
 */
export const useToast = () => {
  const toastManager = BaseToast.useToastManager();

  const success = useCallback(
    (title: string, description?: string, options?: Partial<ToastItem>) => {
      const payload: any = {
        id: options?.id,
        type: 'success',
        title,
        description,
        // duration이 명시적으로 null이 아닌 이상 timeout을 설정 (0도 유효한 값)
        timeout: options?.duration !== undefined ? options.duration : undefined,
      };
      return toastManager.add(payload);
    },
    [toastManager],
  );

  const error = useCallback(
    (title: string, description?: string, options?: Partial<ToastItem>) => {
      const payload: any = {
        id: options?.id,
        type: 'error',
        title,
        description,
        timeout: options?.duration !== undefined ? options.duration : undefined,
      };
      return toastManager.add(payload);
    },
    [toastManager],
  );

  const warning = useCallback(
    (title: string, description?: string, options?: Partial<ToastItem>) => {
      const payload: any = {
        id: options?.id,
        type: 'warning',
        title,
        description,
        timeout: options?.duration !== undefined ? options.duration : undefined,
      };
      return toastManager.add(payload);
    },
    [toastManager],
  );

  const info = useCallback(
    (title: string, description?: string, options?: Partial<ToastItem>) => {
      const payload: any = {
        id: options?.id,
        type: 'info',
        title,
        description,
        timeout: options?.duration !== undefined ? options.duration : undefined,
      };
      return toastManager.add(payload);
    },
    [toastManager],
  );

  const custom = useCallback(
    (options: Omit<ToastItem, 'id'>) => {
      const payload: any = {
        type: options.status,
        title: options.title,
        description: options.description,
        timeout: options.duration !== undefined ? options.duration : undefined,
      };
      return toastManager.add(payload);
    },
    [toastManager],
  );

  const remove = useCallback((id: string) => toastManager.close(id), [toastManager]);
  const removeAll = useCallback(() => {
    // toasts 배열을 복사하여 동시성 문제 방지
    const toastsToRemove = [...toastManager.toasts];
    toastsToRemove.forEach((toast) => toastManager.close(toast.id));
  }, [toastManager]);

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
