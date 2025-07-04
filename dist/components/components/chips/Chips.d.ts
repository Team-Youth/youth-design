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
    /** 뒤쪽 아이콘 클릭 이벤트 핸들러 */
    onClickTrailingIcon?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 수평 패딩 (기본값을 덮어쓸 때 사용) */
    paddingX?: string | number;
    /** 수직 패딩 (기본값을 덮어쓸 때 사용) */
    paddingY?: string | number;
}
export declare const Chips: React.FC<ChipsProps>;
