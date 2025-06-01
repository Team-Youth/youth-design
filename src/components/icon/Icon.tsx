import React from 'react';
import { colors } from '../../tokens/colors';

// 아이콘 타입 정의 - 현재 가용한 아이콘들로 제한
export type IconType =
  // 기본 액션 아이콘들
  | 'hamburger'
  | 'search'
  | 'close'
  | 'check'
  | 'add'
  | 'minus'
  | 'truncation'
  | 'more'
  | 'download'
  | 'modify'
  | 'duplicate'
  | 'dialog'

  // 네비게이션 아이콘들 (filled/unfilled)
  | 'home'
  | 'home-filled'
  | 'heart'
  | 'heart-filled'
  | 'my-page'
  | 'my-page-filled'

  // 방향 아이콘들
  | 'arrow-down'
  | 'arrow-up'
  | 'arrow-left'
  | 'arrow-right'

  // 추가될 아이콘들을 위한 확장 가능한 타입들
  | 'profile'
  | 'profile-filled'
  | 'bell'
  | 'bell-filled'
  | 'dashboard'
  | 'dashboard-filled'
  | 'radio'
  | 'radio-filled'
  | 'caution'
  | 'caution-filled'
  | 'question'
  | 'question-filled'
  | 'info'
  | 'info-filled'
  | 'add-circle'
  | 'add-circle-filled'
  | 'minus-circle'
  | 'minus-circle-filled'
  | 'location'
  | 'location-filled'
  | 'bookmark'
  | 'bookmark-filled'
  | 'camera'
  | 'camera-filled'
  | 'card'
  | 'card-filled'
  | 'close-circle'
  | 'close-circle-filled'
  | 'calendar'
  | 'calendar-filled'
  | 'check-circle'
  | 'check-circle-filled'
  | 'time'
  | 'time-filled'
  | 'phone'
  | 'phone-filled'
  | 'history'
  | 'history-filled'
  | 'switch-circle'
  | 'switch-circle-filled'
  | 'id-card'
  | 'id-card-filled'
  | 'delete'
  | 'delete-filled'
  | 'mail'
  | 'mail-filled'
  | 'settings'
  | 'settings-filled'
  | 'checkbox'
  | 'checkbox-selected'
  | 'checkbox-filled'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right'
  | 'social-kakao'
  | 'social-apple'
  | 'social-naver'
  | 'social-google'
  | 'social-company5'
  | 'number-0'
  | 'number-1'
  | 'number-2'
  | 'number-3'
  | 'number-4'
  | 'number-5'
  | 'number-6'
  | 'number-7'
  | 'number-8'
  | 'number-9'
  | 'reset'
  | 'reload'
  | 'share-ios'
  | 'guide'
  | 'parcel'
  | 'receipt'
  | 'image'
  | 'qr'
  | 'fax'
  | 'customer-service'
  | 'lock'
  | 'microphone'
  | 'sound'
  | 'new'
  | 'gym';

export interface IconProps {
  /** 아이콘 타입 */
  type: IconType;
  /** 아이콘 크기 (픽셀 단위) */
  size?: number;
  /** 아이콘 색상 */
  color?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
}

// SVG 컴포넌트들을 반환하는 함수
const getIconSVG = (type: IconType, color: string): React.ReactElement => {
  const iconStyle = { fill: color, color };

  switch (type) {
    case 'hamburger':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="4" width="18" height="2" rx="1" fill="currentColor" />
          <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
          <rect x="3" y="18" width="18" height="2" rx="1" fill="currentColor" />
        </svg>
      );

    case 'search':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'close':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'check':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );

    case 'add':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'minus':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 12h14" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'more':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="5" r="1" fill="currentColor" />
          <circle cx="12" cy="19" r="1" fill="currentColor" />
        </svg>
      );

    case 'truncation':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="19" cy="12" r="1" fill="currentColor" />
        </svg>
      );

    case 'download':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );

    case 'home':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m3 9 9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'home-filled':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="currentColor" />
          <rect x="9" y="12" width="6" height="10" fill="white" />
        </svg>
      );

    case 'heart':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );

    case 'heart-filled':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            fill="currentColor"
          />
        </svg>
      );

    case 'my-page':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'my-page-filled':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="7" r="4" fill="currentColor" />
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" fill="currentColor" />
        </svg>
      );

    case 'arrow-down':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'arrow-up':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m18 15-6-6-6 6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'arrow-left':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'arrow-right':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    // 아직 구현되지 않은 아이콘들은 기본 플레이스홀더 반환
    default:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <text x="12" y="14" textAnchor="middle" fontSize="8" fill="currentColor">
            ?
          </text>
        </svg>
      );
  }
};

export const Icon: React.FC<IconProps> = ({
  type,
  size = 24,
  color = colors.semantic.text.primary,
  onClick,
  className = '',
  style = {},
}) => {
  const iconStyle: React.CSSProperties = {
    width: size,
    height: size,
    color: color,
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    ...style,
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`icon icon--${type} ${className}`}
      style={iconStyle}
      onClick={handleClick}
      role={onClick ? 'button' : 'img'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
      aria-label={`${type} icon`}
    >
      {getIconSVG(type, color)}
    </div>
  );
};

Icon.displayName = 'Icon';
