import React from 'react';
import './Popover.css';
export interface PopoverItem {
    /** 아이템 식별자 */
    id: string;
    /** 아이템 라벨 텍스트 */
    label: string;
    /** 아이템 비활성화 여부 */
    disabled?: boolean;
    /** 클릭 시 호출되는 콜백 */
    onClick?: (id: string) => void;
}
export interface PopoverProps {
    /** Popover 아이템 목록 */
    items: PopoverItem[];
    /** Popover가 열려있는지 여부 */
    isOpen: boolean;
    /** Popover 열림/닫힘 상태 변경 콜백 */
    onOpenChange: (isOpen: boolean) => void;
    /** 기준이 되는 요소 (width 참조용) */
    anchorRef?: React.RefObject<HTMLElement | null>;
    /** 직접 지정할 너비 (anchorRef가 없을 때 사용) */
    width?: number | string;
    /** Popover 위치 (기본값: 'bottom') */
    position?: 'top' | 'bottom';
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React.CSSProperties;
    /** Popover 컨테이너의 최대 높이 */
    maxHeight?: number;
}
export declare const Popover: React.FC<PopoverProps>;
