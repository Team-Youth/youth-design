import React from 'react';
import { LogoType } from './assets';
export interface LogoProps {
    /** 로고 타입 */
    type: LogoType;
    /** 로고 너비 (픽셀 단위) */
    width?: number;
    /** 로고 높이 (픽셀 단위) */
    height?: number;
    /** 로고 색상 */
    color?: string;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React.CSSProperties;
}
export declare const Logo: React.FC<LogoProps>;
