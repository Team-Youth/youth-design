import React from 'react';
import { ButtonProps } from '../box-button';
import './Modal.css';
export interface ModalProps {
    /** 모달 제목 */
    title: string;
    /** 모달 설명 (선택사항) */
    description?: string;
    /** 모달 내부 컨텐츠 */
    children?: React.ReactNode;
    /** 컨텐츠 최대 높이 (기본값: 500px) */
    contentMaxHeight?: number;
    /** 스크롤바 표시 여부 (기본값: false) */
    showScrollbar?: boolean;
    /** 닫기 버튼 표시 여부 */
    showCloseButton?: boolean;
    /** 모달 너비 (기본값: 480px) */
    width?: string | number;
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
    /** 모달이 표시되는지 여부 */
    isOpen: boolean;
    /** 모달 닫기 핸들러 */
    onClose: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 모달 컨테이너 추가 스타일 */
    style?: React.CSSProperties;
    /** 오버레이 추가 스타일 */
    overlayStyle?: React.CSSProperties;
}
export declare const Modal: React.FC<ModalProps>;
