import React from 'react';
export interface PaginationProps {
    /** 현재 페이지 (1부터 시작) */
    currentPage: number;
    /** 전체 페이지 수 */
    totalPages: number;
    /** 페이지 변경 시 호출되는 콜백 함수 */
    onPageChange: (page: number) => void;
    /** 표시할 최대 페이지 버튼 수 (기본값: 5) */
    maxVisiblePages?: number;
    /** 컴포넌트 비활성화 여부 */
    disabled?: boolean;
}
export declare const Pagination: React.FC<PaginationProps>;
