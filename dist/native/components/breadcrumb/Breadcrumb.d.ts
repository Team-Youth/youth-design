import React from 'react';
export interface BreadcrumbItem {
    /** 표시할 텍스트 */
    label: string;
    /** 클릭 시 실행될 함수 (현재 페이지인 경우 undefined) */
    onClick?: () => void;
    /** 링크 URL (onClick 대신 사용 가능) */
    href?: string;
}
export interface BreadcrumbProps {
    /** Breadcrumb 항목들 (마지막 항목은 현재 페이지) */
    items: BreadcrumbItem[];
    /** 구분자 (기본값: '/') */
    separator?: string;
    /** 커스텀 클래스명 */
    className?: string;
    /** 커스텀 스타일 */
    style?: React.CSSProperties;
}
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
