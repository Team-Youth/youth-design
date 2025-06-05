import React from 'react';
import './GreetingHeader.css';
export interface GreetingHeaderProps {
    /** 사용자 이름 */
    userName?: string;
    /** 커스텀 인사말 (제공되면 기본 인사말 대신 사용) */
    customGreeting?: string;
    /** 날짜 표시 여부 */
    showDate?: boolean;
    /** 날씨 정보 */
    weather?: {
        temperature?: number;
        condition?: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
    };
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const GreetingHeader: React.FC<GreetingHeaderProps>;
export default GreetingHeader;
