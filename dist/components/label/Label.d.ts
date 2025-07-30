import React from 'react';
import { IconType } from '../icon/Icon';
export type LabelColor = 'lightGray' | 'darkGray' | 'lightViolet' | 'violet' | 'lightRed' | 'red' | 'lightGreen' | 'green' | 'lightYellow' | 'yellow' | 'grey';
export interface LabelProps {
    /** 라벨의 크기 */
    size?: 'l' | 'm' | 's';
    /** 라벨의 모양 */
    type?: 'square' | 'capsule';
    /** 라벨의 색상 */
    color?: LabelColor;
    /** 선행 아이콘 */
    leadingIcon?: IconType;
    /** 후행 아이콘 */
    trailingIcon?: IconType;
    /** 텍스트 내용 */
    children?: React.ReactNode;
    /** 추가 CSS 클래스 */
    className?: string;
}
export declare const Label: React.FC<LabelProps>;
export default Label;
