import React from 'react';
import { IconType } from '../icon';
import './Chips.css';
export interface ChipsProps {
    /** 칩의 크기 */
    size?: 'l' | 'm';
    /** 칩의 모양 */
    type?: 'square' | 'capsule';
    /** 선택 상태 */
    selected?: boolean;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 앞쪽 아이콘 */
    leadingIcon?: IconType;
    /** 뒤쪽 아이콘 */
    trailingIcon?: IconType;
    /** 텍스트 내용 */
    text?: string;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
export declare const Chips: React.FC<ChipsProps>;
