import React from 'react';
import { Toast as BaseToast } from '@base-ui-components/react/toast';
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
  /** base-ui toast 객체 */
  toast: any;
  /** 토스트 위치 (애니메이션을 위해) */
  position?: string;
}

// 위치별 진입/퇴장 변환 계산
const getEnterTransform = (position?: string) => {
  if (!position) return 'translateX(100%) scale(0.95)';
  if (position.includes('left')) return 'translateX(-100%) scale(0.95)';
  if (position.includes('right')) return 'translateX(100%) scale(0.95)';
  if (position.includes('top')) return 'translateY(-100%) scale(0.95)';
  if (position.includes('bottom')) return 'translateY(100%) scale(0.95)';
  return 'translateX(100%) scale(0.95)';
};

const getExitTransform = (position?: string) => {
  // 퇴장 방향은 진입과 동일한 반대방향으로 살짝 축소
  return getEnterTransform(position);
};

/**
 * Base UI Toast를 youth-design 스타일로 래핑한 컴포넌트
 */
export const Toast: React.FC<ToastProps> = React.memo(
  ({
    status,
    title,
    description,
    showLeadingIcon = true,
    showCloseButton = false,
    toast,
    position,
  }) => {
    const config = statusConfig[status];
    const IconComponent = config.icon;

    const isStarting = toast?.transitionStatus === 'starting';
    const isEnding = toast?.transitionStatus === 'ending';

    const baseTransition = 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease';

    const rootStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.m,
      padding: spacing.l,
      backgroundColor: colors.semantic.background.primary,
      borderRadius: radius.l,
      boxShadow: shadows.s,
      width: '360px',
      minHeight: 'fit-content',
      position: 'relative',
      pointerEvents: 'auto',
      transition: baseTransition,
      opacity: isStarting || isEnding ? 0 : 1,
      transform: isStarting
        ? getEnterTransform(position)
        : isEnding
          ? getExitTransform(position)
          : 'translateX(0) translateY(0) scale(1)',
    };

    const contentStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.xxs,
      flex: 1,
      transition: 'opacity 250ms ease, transform 250ms ease',
      opacity: isStarting ? 0 : 1,
      transform: isStarting ? 'translateY(8px)' : 'none',
    };

    const titleStyle: React.CSSProperties = {
      ...textStyles.heading3,
      color: colors.semantic.text.primary,
      margin: 0,
      whiteSpace: 'pre-line',
    };

    const descriptionStyle: React.CSSProperties = {
      ...textStyles.body2,
      color: colors.semantic.text.secondary,
      margin: 0,
      whiteSpace: 'pre-line',
    };

    const iconWrapperStyle: React.CSSProperties = {
      opacity: isStarting ? 0 : 1,
      transform: isStarting ? 'scale(0.8)' : 'scale(1)',
      transition: 'opacity 250ms ease 100ms, transform 250ms ease 100ms',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
      transition: 'background-color 0.2s ease, transform 0.15s ease',
      position: 'absolute',
      top: spacing.m,
      right: spacing.m,
    };

    return (
      <BaseToast.Root
        toast={toast}
        style={rootStyle}
        className={`toast-root toast toast--${status}`}
        data-transition-status={toast?.transitionStatus}
        data-position={position}
        data-swiping={toast?.swiping ? 'true' : 'false'}
      >
        {showLeadingIcon && (
          <div className="toast__icon" style={iconWrapperStyle}>
            <IconComponent color={config.color} />
          </div>
        )}

        <div className="toast__content" style={contentStyle}>
          <BaseToast.Title style={titleStyle} className="toast__title">
            {title}
          </BaseToast.Title>
          {description && (
            <BaseToast.Description style={descriptionStyle} className="toast__description">
              {description}
            </BaseToast.Description>
          )}
        </div>

        {showCloseButton && (
          <BaseToast.Close
            style={closeButtonStyle}
            className="toast__close"
            aria-label="알림 닫기"
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              (e.target as HTMLElement).style.backgroundColor = colors.primary.coolGray[100];
              (e.target as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              (e.target as HTMLElement).style.backgroundColor = 'transparent';
              (e.target as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            <Icon type="close" size={16} color={colors.semantic.text.tertiary} />
          </BaseToast.Close>
        )}
      </BaseToast.Root>
    );
  },
);

// displayName 추가 (React Dev Tools에서 식별하기 쉽게)
Toast.displayName = 'Toast';

export default Toast;
