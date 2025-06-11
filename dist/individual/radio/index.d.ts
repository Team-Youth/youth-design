import React from 'react';

interface RadioProps {
    /** 라디오 버튼이 선택되었는지 여부 */
    checked?: boolean;
    /** 라디오 버튼이 비활성화되었는지 여부 */
    disabled?: boolean;
    /** 라디오 버튼의 이름 (같은 그룹의 라디오 버튼들은 같은 name을 가져야 함) */
    name?: string;
    /** 라디오 버튼의 값 */
    value?: string;
    /** 라벨 텍스트 */
    label?: string;
    /** 라벨 설명 텍스트 */
    description?: string;
    /** 라벨 위치 */
    labelPosition?: 'right' | 'left';
    /** 크기 */
    size?: 'small' | 'medium' | 'large';
    /** 변경 이벤트 핸들러 */
    onChange?: (checked: boolean, value?: string) => void;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const Radio: React.FC<RadioProps>;

export { Radio, type RadioProps };
