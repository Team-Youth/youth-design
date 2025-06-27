import React from 'react';
import './Label.css';
export interface LabelProps {
    /** 라벨의 크기 */
    size?: 'm' | 's';
    /** 라벨의 모양 */
    type?: 'square' | 'capsule';
    /** 라벨의 색상 */
    color?: 'grey' | 'dark' | 'violet' | 'accent' | 'red' | 'green' | 'yellow';
    /** 선행 아이콘 */
    leadingIcon?: React.ReactNode;
    /** 후행 아이콘 */
    trailingIcon?: React.ReactNode;
    /** 텍스트 내용 */
    children?: React.ReactNode;
    /** 추가 CSS 클래스 */
    className?: string;
}
export declare const Label: React.FC<LabelProps>;
export default Label;
