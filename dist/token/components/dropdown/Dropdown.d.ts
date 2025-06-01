import React from 'react';
import { IconType } from '../icon/Icon';
export interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface DropdownProps {
    /** 드롭다운 플레이스홀더 텍스트 */
    placeholder?: string;
    /** 선택된 값 */
    value?: string;
    /** 옵션 리스트 */
    options?: DropdownOption[];
    /** 값 변경 시 호출되는 콜백 */
    onChange?: (value: string) => void;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 에러 상태 */
    error?: boolean;
    /** 에러 메시지 */
    errorMessage?: string;
    /** 커스텀 클래스명 */
    className?: string;
    /** Leading 아이콘 */
    leadingIcon?: React.ReactNode;
    /** Leading 아이콘 타입 (Icon 컴포넌트 사용) */
    leadingIconType?: IconType;
    /** 너비 설정 */
    width?: 'fill' | (string & {});
    /** 검색 기능 활성화 여부 */
    enableSearch?: boolean;
}
export declare const Dropdown: React.FC<DropdownProps>;
