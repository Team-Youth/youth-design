import React, { JSX } from 'react';
import { IconType } from '../icon';
interface Column<T> {
    header: string;
    cell: (row: T) => React.ReactNode;
    style?: React.CSSProperties;
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
}
export declare const Table: <T>({ data, columns, rowAccordion, type, isLoading, emptyIcon, emptyIconSize, emptyIconColor, emptyText, }: TableProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
