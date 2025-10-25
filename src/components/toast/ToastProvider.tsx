import React, { ReactNode, useCallback } from 'react';
import { Toaster, toast } from 'sonner';
import { colors } from '../../tokens/colors';
import { radius } from '../../tokens/radius';
import { textStyles } from '../../tokens/typography';

export type ToastStatus = 'success' | 'error' | 'warning' | 'info';

// 커스텀 아이콘 컴포넌트들 (Figma 사양: 24x24px)
const CheckCircleIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill={color} />
    <path
      d="M8.5 12L10.5 14L15.5 9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseCircleIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill={color} />
    <path
      d="M8 8L16 16M16 8L8 16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CautionIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill={color} />
    <rect x="11" y="7" width="2" height="6" fill="white" rx="1" />
    <circle cx="12" cy="16" r="1" fill="white" />
  </svg>
);

const InfoIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill={color} />
    <circle cx="12" cy="8" r="1" fill="white" />
    <rect x="11" y="11" width="2" height="6" fill="white" rx="1" />
  </svg>
);

// Toast 아이템 타입 (기존 호환성 유지)
export interface ToastItem {
  id?: string;
  status?: ToastStatus;
  title?: string;
  description?: string;
  duration?: number;
  showLeadingIcon?: boolean;
  showCloseButton?: boolean;
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

// Position 매핑 (sonner 호환)
const positionMapping = {
  'top-right': 'top-right' as const,
  'top-left': 'top-left' as const,
  'bottom-right': 'bottom-right' as const,
  'bottom-left': 'bottom-left' as const,
  'top-center': 'top-center' as const,
  'bottom-center': 'bottom-center' as const,
};

/**
 * Toast Provider 컴포넌트
 *
 * sonner 라이브러리를 래핑하여 기존 API 호환성을 유지하는 Provider입니다.
 */
export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'top-right',
  defaultDuration = 3000,
  limit = 3,
}) => {
  // Figma 디자인 사양에 맞는 스타일 인젝션
  React.useEffect(() => {
    const styleId = 'youth-toast-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .youth-toast-title {
          /* Figma Title/H3 스타일 */
          font-family: ${textStyles.heading3.fontFamily};
          font-size: 18px !important;
          font-weight: ${textStyles.heading3.fontWeight} !important;
          line-height: 1.33 !important;
          color: ${colors.primary.coolGray[800]} !important;
          letter-spacing: 0 !important;
          margin: 0 !important;
          white-space: pre-line !important;
        }
        
        .youth-toast-description {
          /* Figma body/b2_regular 스타일 */
          font-family: ${textStyles.body2.fontFamily};
          font-size: 14px !important;
          font-weight: ${textStyles.body2.fontWeight} !important;
          line-height: 1.57 !important;
          letter-spacing: -0.02em !important;
          color: ${colors.primary.coolGray[500]} !important;
          margin: 0 !important;
          margin-top: 4px !important;
          white-space: pre-line !important;
        }

        /* 텍스트 컨테이너 간격 조정 */
        [data-sonner-toast] [data-content] {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      {children}
      <Toaster
        position={positionMapping[position]}
        duration={defaultDuration}
        visibleToasts={limit}
        richColors={false}
        closeButton={false}
        icons={{
          success: <CheckCircleIcon color={colors.semantic.state.success} />,
          error: <CloseCircleIcon color={colors.semantic.state.error} />,
          warning: <CautionIcon color={colors.semantic.state.warning} />,
          info: <InfoIcon color={colors.semantic.state.info} />,
        }}
        toastOptions={{
          style: {
            // Figma 디자인과 완전 일치
            background: colors.primary.gray.white,
            border: 'none',
            borderRadius: radius.l, // 16px - Figma 사양
            boxShadow: '0px 1px 8px 0px rgba(21, 23, 25, 0.08)', // Figma shadow-s
            width: '360px', // Figma 고정 너비
            maxWidth: '360px',
            padding: '20px', // Figma 패딩
            gap: '16px', // Figma row gap
            display: 'flex',
            alignItems: 'center',
            fontFamily: textStyles.heading3.fontFamily,
          },
          classNames: {
            title: 'youth-toast-title',
            description: 'youth-toast-description',
          },
        }}
      />
    </>
  );
};

/**
 * useToast 훅
 *
 * sonner 라이브러리를 래핑하여 기존 API 호환성을 유지하면서 Toast를 사용할 수 있는 훅입니다.
 */
export const useToast = () => {
  const success = useCallback(
    (title: string, description?: string, options?: Partial<ToastItem>) => {
      const toastOptions = {
        id: options?.id,
        description,
        duration: options?.duration !== undefined ? options.duration : 3000,
      };
      return toast.success(title, toastOptions);
    },
    [],
  );

  const error = useCallback((title: string, description?: string, options?: Partial<ToastItem>) => {
    const toastOptions = {
      id: options?.id,
      description,
      duration: options?.duration !== undefined ? options.duration : 3000,
    };
    return toast.error(title, toastOptions);
  }, []);

  const warning = useCallback(
    (title: string, description?: string, options?: Partial<ToastItem>) => {
      const toastOptions = {
        id: options?.id,
        description,
        duration: options?.duration !== undefined ? options.duration : 3000,
      };
      return toast.warning(title, toastOptions);
    },
    [],
  );

  const info = useCallback((title: string, description?: string, options?: Partial<ToastItem>) => {
    const toastOptions = {
      id: options?.id,
      description,
      duration: options?.duration !== undefined ? options.duration : 3000,
    };
    return toast.info(title, toastOptions);
  }, []);

  const custom = useCallback((options: Omit<ToastItem, 'id'>) => {
    const toastOptions = {
      description: options.description,
      duration: options.duration !== undefined ? options.duration : 3000,
    };

    if (options.status === 'success') {
      return toast.success(options.title || '', toastOptions);
    } else if (options.status === 'error') {
      return toast.error(options.title || '', toastOptions);
    } else if (options.status === 'warning') {
      return toast.warning(options.title || '', toastOptions);
    } else {
      return toast.info(options.title || '', toastOptions);
    }
  }, []);

  const remove = useCallback((id: string) => toast.dismiss(id), []);
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
