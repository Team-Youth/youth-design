import React from 'react';
export type IconType = 'hamburger' | 'search' | 'close' | 'close-circle-filled' | 'close-circle-stroke' | 'check' | 'add' | 'minus' | 'truncation' | 'more' | 'home' | 'home-filled' | 'heart' | 'heart-filled' | 'my-page' | 'my-page-filled' | 'download' | 'modify' | 'duplicate' | 'dialog' | 'arrow-down' | 'arrow-up' | 'arrow-right' | 'arrow-left' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevron-down' | 'calendar' | 'calendar-filled' | 'time-stroke' | 'time-filled' | 'switch-circle-stroke' | 'switch-circle-filled' | 'sound' | 'share-ios' | 'settings-stroke' | 'settings-filled' | 'reset' | 'reload' | 'receipt' | 'radio-selected' | 'radio-resting' | 'question-stroke' | 'question-filled' | 'qr' | 'profile-stroke' | 'profile-filled' | 'print' | 'person-stroke' | 'person-filled' | 'payment-stroke' | 'payment-filled' | 'parcel' | 'number-0' | 'number-1' | 'number-2' | 'number-3' | 'number-4' | 'number-5' | 'number-6' | 'number-7' | 'number-8' | 'number-9' | 'new' | 'minus-circle-stroke' | 'minus-circle-filled' | 'add-circle-stroke' | 'add-circle-filled' | 'microphone' | 'mail-stroke' | 'mail-filled' | 'logo-naver' | 'logo-kakao' | 'logo-google' | 'logo-apple' | 'lock' | 'location-stroke' | 'location-filled' | 'info-stroke' | 'info-filled' | 'image' | 'id-card-stroke' | 'id-card-filled' | 'home-stroke' | 'history-stroke' | 'history-filled' | 'heart-stroke' | 'gym' | 'guide' | 'delete-stroke' | 'delete-filled' | 'dashboard-stroke' | 'dashboard-filled' | 'customer-service' | 'check-circle-stroke' | 'check-circle-filled' | 'checkbox-selected-stroke' | 'checkbox-selected-filled' | 'checkbox-resting' | 'caution-stroke' | 'caution-filled' | 'cancel-stroke' | 'cancel-filled' | 'camera-stroke' | 'camera-filled' | 'call-stroke' | 'call-filled' | 'calendar-stroke' | 'bookmark-stroke' | 'bookmark-filled' | 'bell-stroke' | 'bell-filled' | 'sorting-arrow-heads' | 'send';
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
export declare const Icon: React.FC<IconProps>;
