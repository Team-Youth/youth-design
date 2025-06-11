import React, { JSX } from 'react';
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
}
export declare const Table: <T>({ data, columns, rowAccordion, type, isLoading, }: TableProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
