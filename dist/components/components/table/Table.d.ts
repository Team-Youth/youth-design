import React, { JSX } from 'react';
import { IconType } from '../icon';
interface Column<T> {
    header: string;
    cell: (row: T) => React.ReactNode;
    width?: string | number;
    minWidth?: string | number;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | string;
    alignItems?: 'flex-start' | 'center' | 'flex-end' | string;
    headerJustifyContent?: 'flex-start' | 'center' | 'flex-end' | string;
}
export interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    isLoading: boolean;
    rowAccordion?: (rowData: T) => JSX.Element;
    type?: 'parent' | 'child';
    emptyIcon?: IconType;
    emptyIconSize?: number;
    emptyIconColor?: string;
    emptyText?: string;
    tableMinWidth?: string | number;
    hasNextPage?: boolean;
    isFetchingNextPage?: boolean;
    onLoadMore?: () => void;
    totalPages?: number;
    currentPage?: number;
    onPageJump?: (page: number) => void;
    totalCount?: number;
}
export declare const Table: <T>({ data, columns, rowAccordion, type, isLoading, emptyIcon, emptyIconSize, emptyIconColor, emptyText, tableMinWidth, hasNextPage, isFetchingNextPage, onLoadMore, totalPages, currentPage, onPageJump, totalCount, }: TableProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
