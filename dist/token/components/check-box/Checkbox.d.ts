import React from 'react';
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
}
export declare const Checkbox: React.FC<CheckboxProps>;
