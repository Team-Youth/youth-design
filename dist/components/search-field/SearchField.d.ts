import { TextFieldProps } from '../text-field/TextField';
import { IconType } from '../icon/Icon';
export interface SearchSuggestionItem {
    /** 제안 텍스트 */
    text: string;
    /** 설명 텍스트 (선택사항) */
    description?: string;
    /** Leading 아이콘 타입 */
    leadingIconType?: IconType;
    /** Trailing 아이콘 타입 */
    trailingIconType?: IconType;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 클릭 핸들러 */
    onClick?: () => void;
}
export interface SearchFieldProps extends Omit<TextFieldProps, 'leadingIconType' | 'trailingIconType'> {
    /** 검색 제안 목록 */
    suggestions?: SearchSuggestionItem[];
    /** 제안 목록 표시 여부 */
    showSuggestions?: boolean;
    /** 제안 항목 클릭 시 호출되는 콜백 */
    onSuggestionClick?: (suggestion: SearchSuggestionItem, index: number) => void;
    /** 제안 목록이 비어있을 때 표시할 메시지 */
    noResultsText?: string;
}
export declare const SearchField: import("react").NamedExoticComponent<SearchFieldProps & import("react").RefAttributes<HTMLInputElement>>;
