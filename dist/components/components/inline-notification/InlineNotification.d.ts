import React from 'react';
import { fontWeight, textStyles } from '../../tokens/typography';
export type InlineNotificationType = 'normal' | 'success' | 'warning';
export type InlineNotificationSize = 's' | 'm';
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
export declare const InlineNotification: React.FC<InlineNotificationProps>;
export default InlineNotification;
