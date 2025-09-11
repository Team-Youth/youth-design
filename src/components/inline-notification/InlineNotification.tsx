import React, { useCallback } from 'react';
import { colors } from '../../tokens/colors';
import { fontWeight, textStyles, fontFamily } from '../../tokens/typography';
import { Icon } from '../icon';

// inline notification 타입 정의
export type InlineNotificationType = 'normal' | 'success' | 'warning';

// inline notification 사이즈 타입
export type InlineNotificationSize = 's' | 'm';

// 타입별 설정
const typeConfig = {
  normal: {
    iconType: 'info-filled' as const,
    iconColor: colors.primary.tint.blue[400],
    backgroundColor: colors.primary.coolGray[50],
    textColor: colors.primary.coolGray[800],
  },
  success: {
    iconType: 'check-circle-filled' as const,
    iconColor: colors.primary.gray.white,
    backgroundColor: colors.primary.tint.green[500],
    textColor: colors.primary.gray.white,
  },
  warning: {
    iconType: 'info-filled' as const,
    iconColor: colors.primary.tint.red[400],
    backgroundColor: colors.primary.tint.red[50],
    textColor: colors.primary.tint.red[500],
  },
} as const;

// 사이즈별 설정
const sizeConfig = {
  s: {
    padding: '8px 12px',
    iconSize: 20,
    textStyle: textStyles.body2,
    fontWeight: fontWeight.regular,
    gap: '8px',
  },
  m: {
    padding: '12px 16px',
    iconSize: 24,
    textStyle: textStyles.body2,
    fontWeight: fontWeight.medium,
    gap: '12px',
  },
} as const;

export interface InlineNotificationProps {
  /** 알림 타입 */
  type: InlineNotificationType;
  /** 메시지 내용 */
  message: string;
  /** 컴포넌트 크기 */
  size?: InlineNotificationSize;
  /** 버튼인지 여부 */
  isButton?: boolean;
  /** 버튼 클릭 핸들러 */
  onClick?: () => void;
  /** 테두리 둥글기 적용 여부 */
  borderRadius?: boolean;
  /** 텍스트 스타일 오버라이드 */
  textStyle?: (typeof textStyles)[keyof typeof textStyles];
  /** 폰트 굵기 오버라이드 */
  fontWeight?: (typeof fontWeight)[keyof typeof fontWeight];
  /** 너비 설정 */
  width?: 'fill' | (string & {});
  /** 커스텀 클래스명 */
  className?: string;
}

/**
 * 인라인 알림 컴포넌트
 *
 * 페이지 내에서 사용자에게 중요한 정보나 상태를 알려주는 컴포넌트입니다.
 * 피그마 디자인에 따라 크기(s, m)와 타입(normal, success, warning)을 지원합니다.
 */
export const InlineNotification: React.FC<InlineNotificationProps> = React.memo(
  ({
    type,
    message,
    size = 'm',
    isButton = false,
    onClick,
    borderRadius = false,
    textStyle,
    fontWeight: customFontWeight,
    width = '480px',
    className = '',
  }) => {
    const typeConf = typeConfig[type];
    const sizeConf = sizeConfig[size];

    const handleClick = useCallback(() => {
      if (isButton && onClick) {
        onClick();
      }
    }, [isButton, onClick]);

    const notificationStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: sizeConf.gap,
      padding: sizeConf.padding,
      backgroundColor: typeConf.backgroundColor,
      borderRadius: borderRadius ? '8px' : 0,
      width: width === 'fill' ? '100%' : width,
      flex: width === 'fill' ? 1 : undefined,
      minHeight: 'fit-content',
      cursor: isButton ? 'pointer' : 'default',
      transition: isButton ? 'background-color 0.2s ease' : 'none',
    };

    const contentStyle: React.CSSProperties = {
      ...(textStyle || sizeConf.textStyle),
      fontWeight: customFontWeight || sizeConf.fontWeight,
      fontFamily: fontFamily.primary,
      color: typeConf.textColor,
      margin: 0,
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'pre-wrap',
    };

    return (
      <div
        className={`inline-notification inline-notification--${type} inline-notification--${size} ${className}`}
        style={notificationStyle}
        role={isButton ? 'button' : 'alert'}
        aria-live={isButton ? undefined : 'polite'}
        onClick={isButton ? handleClick : undefined}
      >
        <div
          className="inline-notification__icon"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Icon type={typeConf.iconType} size={sizeConf.iconSize} color={typeConf.iconColor} />
        </div>

        <div className="inline-notification__content" style={contentStyle}>
          {message}
        </div>

        {isButton && (
          <div
            className="inline-notification__arrow"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon type="chevron-right" size={sizeConf.iconSize} color={typeConf.textColor} />
          </div>
        )}
      </div>
    );
  },
);

InlineNotification.displayName = 'InlineNotification';

export default InlineNotification;
