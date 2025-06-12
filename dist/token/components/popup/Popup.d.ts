import React from 'react';
import { ButtonProps } from '../box-button';
export interface PopupProps {
    /** 팝업 제목 */
    title: string;
    /** 팝업 설명 (선택사항) */
    description?: string;
    /** 메인 버튼 props */
    primaryButton: {
        text: string;
        onClick: () => void;
    } & Partial<Omit<ButtonProps, 'onClick'>>;
    /** 보조 버튼 props (선택사항) */
    secondaryButton?: {
        text: string;
        onClick: () => void;
    } & Partial<Omit<ButtonProps, 'onClick'>>;
    /** 팝업이 표시되는지 여부 */
    isOpen: boolean;
    /** 팝업 닫기 핸들러 */
    onClose: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React.CSSProperties;
    /** 팝업 너비 */
    width?: string | number;
}
export declare const Popup: React.FC<PopupProps>;
