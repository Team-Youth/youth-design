import React from 'react';
import { fontWeight, textStyles } from '../../tokens';
import './Checkbox.css';
export interface CheckboxProps {
    /** 체크박스가 선택되었는지 여부 */
    checked?: boolean;
    /** 체크박스가 비활성화되었는지 여부 */
    disabled?: boolean;
    /** 라벨 텍스트 */
    label?: string;
    /** 라벨 설명 텍스트 */
    description?: string;
    /** 라벨 위치 */
    labelPosition?: 'right' | 'left';
    /** 변경 이벤트 핸들러 */
    onChange?: (checked: boolean) => void;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 체크박스 너비 */
    checkboxWidth?: string | number;
    /** 타이틀(라벨) 텍스트 스타일 */
    titleTextStyle?: keyof typeof textStyles;
    /** 설명 텍스트 스타일 */
    descriptionTextStyle?: keyof typeof textStyles;
    /** 타이틀(라벨) 폰트 웨이트 */
    titleFontWeight?: keyof typeof fontWeight;
    /** 설명 폰트 웨이트 */
    descriptionFontWeight?: keyof typeof fontWeight;
    /** 타이틀(라벨) 색상 */
    titleColor?: string;
    /** 설명 색상 */
    descriptionColor?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;
