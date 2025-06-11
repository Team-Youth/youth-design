import React from 'react';

interface ChipsProps {
    /** 칩의 크기 */
    size?: 'large' | 'medium';
    /** 칩의 모양 */
    type?: 'square' | 'capsule';
    /** 칩의 상태 */
    state?: 'hover' | 'selected' | 'disabled' | 'resting';
    /** 아이콘 위치 */
    iconPosition?: 'leading' | 'trailing';
    /** 아이콘 요소 */
    icon?: React.ReactNode;
    /** 아이콘 색상 */
    iconColor?: string;
    /** 텍스트 내용 */
    children?: React.ReactNode;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const Chips: React.FC<ChipsProps>;

export { Chips, type ChipsProps };
