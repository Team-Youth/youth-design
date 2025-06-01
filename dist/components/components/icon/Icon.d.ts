import React from 'react';
export type IconType = 'hamburger' | 'search' | 'close' | 'check' | 'add' | 'minus' | 'truncation' | 'more' | 'home' | 'home-filled' | 'heart' | 'heart-filled' | 'my-page' | 'my-page-filled' | 'download' | 'modify' | 'duplicate' | 'dialog' | 'arrow-down' | 'arrow-up' | 'arrow-right' | 'arrow-left' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevron-down' | 'calendar' | 'calendar-filled';
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
