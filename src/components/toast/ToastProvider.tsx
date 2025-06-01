import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Toast, ToastProps } from './Toast';
import { spacing } from '../../tokens/spacing';

// Toast 아이템 타입
export interface ToastItem extends Omit<ToastProps, 'onClose'> {
  id: string;
  duration?: number;
}

// Toast Context 타입
interface ToastContextType {
  addToast: (toast: Omit<ToastItem, 'id'>) => string;
  removeToast: (id: string) => void;
  removeAllToasts: () => void;
}

// Context 생성
const ToastContext = createContext<ToastContextType | undefined>(undefined);

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
 * 앱 전체에서 Toast를 관리할 수 있는 Context를 제공합니다.
 */
export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'top-right',
  defaultDuration = 4000,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  // Toast 추가
  const addToast = useCallback(
    (toast: Omit<ToastItem, 'id'>): string => {
      const id = `toast-${Date.now()}-${Math.random()}`;
      const duration = toast.duration ?? defaultDuration;
      const newToast: ToastItem = {
        ...toast,
        id,
        duration,
      };

      setToasts((prev) => [...prev, newToast]);

      // 자동 제거
      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }

      return id;
    },
    [defaultDuration],
  );

  // Toast 제거
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // 모든 Toast 제거
  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  // 위치별 스타일
  const getContainerStyle = (position: string): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'fixed',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.s,
      pointerEvents: 'none',
    };

    switch (position) {
      case 'top-right':
        return { ...baseStyle, top: spacing.xl, right: spacing.xl };
      case 'top-left':
        return { ...baseStyle, top: spacing.xl, left: spacing.xl };
      case 'bottom-right':
        return {
          ...baseStyle,
          bottom: spacing.xl,
          right: spacing.xl,
          flexDirection: 'column-reverse',
        };
      case 'bottom-left':
        return {
          ...baseStyle,
          bottom: spacing.xl,
          left: spacing.xl,
          flexDirection: 'column-reverse',
        };
      case 'top-center':
        return { ...baseStyle, top: spacing.xl, left: '50%', transform: 'translateX(-50%)' };
      case 'bottom-center':
        return {
          ...baseStyle,
          bottom: spacing.xl,
          left: '50%',
          transform: 'translateX(-50%)',
          flexDirection: 'column-reverse',
        };
      default:
        return { ...baseStyle, top: spacing.xl, right: spacing.xl };
    }
  };

  const contextValue: ToastContextType = {
    addToast,
    removeToast,
    removeAllToasts,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      {/* Toast Container */}
      {toasts.length > 0 && (
        <div style={getContainerStyle(position)}>
          {toasts.map((toast) => (
            <div key={toast.id} style={{ pointerEvents: 'auto' }}>
              <Toast {...toast} onClose={() => removeToast(toast.id)} showCloseButton={true} />
            </div>
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
};

/**
 * useToast 훅
 *
 * Toast를 간편하게 사용할 수 있는 훅입니다.
 */
export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  // 편의 메서드들
  const toast = {
    success: (title: string, description?: string, options?: Partial<ToastItem>) =>
      context.addToast({ status: 'success', title, description, ...options }),

    error: (title: string, description?: string, options?: Partial<ToastItem>) =>
      context.addToast({ status: 'error', title, description, ...options }),

    warning: (title: string, description?: string, options?: Partial<ToastItem>) =>
      context.addToast({ status: 'warning', title, description, ...options }),

    info: (title: string, description?: string, options?: Partial<ToastItem>) =>
      context.addToast({ status: 'info', title, description, ...options }),

    custom: (options: Omit<ToastItem, 'id'>) => context.addToast(options),

    remove: context.removeToast,
    removeAll: context.removeAllToasts,
  };

  return toast;
};

export default ToastProvider;
