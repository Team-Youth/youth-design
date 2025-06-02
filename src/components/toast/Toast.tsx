import React from 'react';
import { colors } from '../../tokens/colors';
import { radius } from '../../tokens/radius';
import { shadows } from '../../tokens/shadows';
import { spacing } from '../../tokens/spacing';
import { textStyles } from '../../tokens/typography';
import { Icon } from '../icon';

// 토스트 상태 타입 정의
export type ToastStatus = 'success' | 'error' | 'warning' | 'info';

// 아이콘 컴포넌트들
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

// 상태별 설정
const statusConfig = {
  success: {
    icon: CheckCircleIcon,
    color: colors.semantic.state.success,
  },
  error: {
    icon: CloseCircleIcon,
    color: colors.semantic.state.error,
  },
  warning: {
    icon: CautionIcon,
    color: colors.semantic.state.warning,
  },
  info: {
    icon: InfoIcon,
    color: colors.semantic.state.info,
  },
} as const;

export interface ToastProps {
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
export const Toast: React.FC<ToastProps> = ({
  status,
  title,
  description,
  showLeadingIcon = true,
  showCloseButton = false,
  onClose,
  className = '',
}) => {
  const config = statusConfig[status];
  const IconComponent = config.icon;

  const handleCloseClick = () => {
    onClose?.();
  };

  const toastStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.m,
    padding: spacing.l,
    backgroundColor: colors.semantic.background.primary,
    borderRadius: radius.l,
    boxShadow: shadows.s,
    width: '360px',
    minHeight: 'fit-content',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xxs,
    flex: 1,
  };

  const titleStyle: React.CSSProperties = {
    ...textStyles.heading3,
    color: colors.semantic.text.primary,
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    ...textStyles.body2,
    color: colors.semantic.text.secondary,
    margin: 0,
  };

  const closeButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: spacing.xxs,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.xs,
    transition: 'background-color 0.2s ease',
  };

  return (
    <div
      className={`toast toast--${status} ${className}`}
      style={toastStyle}
      role="alert"
      aria-live="polite"
    >
      {showLeadingIcon && (
        <div className="toast__icon">
          <IconComponent color={config.color} />
        </div>
      )}

      <div className="toast__content" style={contentStyle}>
        <h3 className="toast__title" style={titleStyle}>
          {title}
        </h3>
        {description && (
          <p className="toast__description" style={descriptionStyle}>
            {description}
          </p>
        )}
      </div>

      {showCloseButton && onClose && (
        <button
          className="toast__close"
          style={closeButtonStyle}
          onClick={handleCloseClick}
          aria-label="알림 닫기"
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = colors.primary.coolGray[100];
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'transparent';
          }}
        >
          <Icon type="close" size={16} color={colors.semantic.text.tertiary} />
        </button>
      )}
    </div>
  );
};

export default Toast;
