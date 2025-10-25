import React, { ReactNode, useCallback } from 'react';
import { Toaster, toast } from 'sonner';
import { colors } from '../../tokens/colors';
import { radius } from '../../tokens/radius';
import { textStyles } from '../../tokens/typography';

export type ToastStatus = 'success' | 'error' | 'warning' | 'info';

// 커스텀 아이콘 컴포넌트들 (Figma 사양: 24x24px)
const CheckCircleIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="youth-toast-icon"
  >
    <path
      d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM17.1582 7.99707C16.7426 7.63373 16.1106 7.67628 15.7471 8.0918L10.5859 13.9902L8.24609 11.3682C7.87831 10.9562 7.24597 10.9204 6.83398 11.2881C6.422 11.6559 6.38619 12.2882 6.75391 12.7002L9.84766 16.166C10.0385 16.3798 10.312 16.5014 10.5986 16.5C10.8853 16.4986 11.1579 16.3739 11.3467 16.1582L17.2529 9.4082C17.6163 8.99256 17.5737 8.36065 17.1582 7.99707Z"
      fill={color}
    />
  </svg>
);

const CloseCircleIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="youth-toast-icon"
  >
    <path
      d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM16.0664 7.93359C15.6759 7.54317 15.0428 7.54318 14.6523 7.93359L12 10.585L9.34863 7.93359C8.95812 7.54328 8.32504 7.54321 7.93457 7.93359C7.54411 8.32406 7.54423 8.95712 7.93457 9.34766L10.5859 11.999L7.93457 14.6514C7.54425 15.0419 7.54418 15.675 7.93457 16.0654C8.32505 16.4557 8.95815 16.4557 9.34863 16.0654L12 13.4131L14.6523 16.0654C15.0429 16.4557 15.676 16.4559 16.0664 16.0654C16.4568 15.675 16.4567 15.0419 16.0664 14.6514L13.4141 11.999L16.0664 9.34766C16.4568 8.95718 16.4567 8.3241 16.0664 7.93359Z"
      fill={color}
    />
  </svg>
);

const CautionIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="youth-toast-icon"
  >
    <path
      d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 15.25C11.3096 15.25 10.75 15.8096 10.75 16.5C10.75 17.1904 11.3096 17.75 12 17.75C12.6904 17.75 13.25 17.1904 13.25 16.5C13.25 15.8096 12.6904 15.25 12 15.25ZM12 6.25C11.4477 6.25 11 6.69772 11 7.25V13.25C11 13.8023 11.4477 14.25 12 14.25C12.5523 14.25 13 13.8023 13 13.25V7.25C13 6.69772 12.5523 6.25 12 6.25Z"
      fill={color}
    />
  </svg>
);

const InfoIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="youth-toast-icon"
  >
    <path
      d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 9.75C11.4477 9.75 11 10.1977 11 10.75V16.75C11 17.3023 11.4477 17.75 12 17.75C12.5523 17.75 13 17.3023 13 16.75V10.75C13 10.1977 12.5523 9.75 12 9.75ZM12 6.25C11.3096 6.25 10.75 6.80964 10.75 7.5C10.75 8.19036 11.3096 8.75 12 8.75C12.6904 8.75 13.25 8.19035 13.25 7.5C13.25 6.80965 12.6904 6.25 12 6.25Z"
      fill={color}
    />
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

        /* 아이콘 크기 강제 적용 - sonner 기본 스타일 오버라이드 */
        [data-sonner-toast] [data-icon] svg,
        [data-sonner-toast] [data-icon] .youth-toast-icon,
        .youth-toast-icon {
          width: 24px !important;
          height: 24px !important;
          min-width: 24px !important;
          min-height: 24px !important;
          max-width: 24px !important;
          max-height: 24px !important;
          flex-shrink: 0 !important;
        }

        /* sonner 기본 아이콘 컨테이너 스타일 오버라이드 */
        [data-sonner-toast] [data-icon] {
          width: 24px !important;
          height: 24px !important;
          min-width: 24px !important;
          min-height: 24px !important;
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
