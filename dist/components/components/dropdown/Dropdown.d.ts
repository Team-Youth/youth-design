import React from 'react';
import { IconType } from '../icon';
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
    /** Leading 아이콘 타입 (Icon 컴포넌트 사용) */
    leadingIconType?: IconType;
    /** 크기 설정 */
    size?: 'l' | 'm';
    /** 너비 설정 */
    width?: 'fill' | (string & {});
    /** 검색 기능 활성화 여부 */
    enableSearch?: boolean;
    /** 모든 옵션 숨김 여부 (드롭다운 자체를 열지 않음) */
    hideOption?: boolean;
    /** populated disabled 기능 비활성화 여부 (기본값: false) */
    disablePopulatedDisabled?: boolean;
    /** 커스텀 컨텐츠 (기본 옵션 리스트 대신 렌더링) */
    customContent?: React.ReactNode;
    /** 커스텀 컨텐츠 사용 시 최대 높이 (기본값: 200px) */
    customContentMaxHeight?: number;
    /** 외부에서 드롭다운 열림 상태 제어 (선택사항) */
    isOpen?: boolean;
    /** 드롭다운 열림 상태 변경 콜백 (선택사항) */
    onOpenChange?: (isOpen: boolean) => void;
}
export declare const Dropdown: React.FC<DropdownProps>;
