import React, { JSX, memo, useState, useRef, useEffect } from 'react';
import { useEffectOnceWhen } from 'rooks';
import { YouthLottie } from '../lottie/Lottie';
import Font from '../font/Font';
import { colors } from '../../tokens/colors';
import { Icon, IconType } from '../icon';
import { Illust } from '../illust';
import { Pagination } from '../pagination';
import loadingSpinnerData from './loadingSpinner.json';

interface Column<T> {
  header: string;
  cell: (row: T) => React.ReactNode;
  width?: string | number; // 컬럼 너비 (px, %, auto 등)
  minWidth?: string | number; // 최소 너비
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | string; // 컬럼 정렬
  alignItems?: 'flex-start' | 'center' | 'flex-end' | string; // 컬럼 정렬
  headerJustifyContent?: 'flex-start' | 'center' | 'flex-end' | string; // 헤더 정렬
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
  tableMinWidth?: string | number; // 테이블 최소 너비
  // Infinite Query 페이지네이션 관련 props
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  onLoadMore?: () => void;
  totalPages?: number;
  currentPage?: number;
  onPageJump?: (page: number) => void;
  totalCount?: number;
}

export const Table = <T,>({
  data,
  columns,
  rowAccordion,
  type = 'parent',
  isLoading,
  emptyIcon,
  emptyIconSize = 32,
  emptyIconColor = colors.primary.coolGray[300],
  emptyText,
  tableMinWidth = 600, // 기본 최소 너비
  // Infinite Query 페이지네이션 관련 props
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
  totalPages = 1,
  currentPage = 1,
  onPageJump,
  totalCount,
}: TableProps<T>) => {
  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 100,
        }}
      >
        <YouthLottie
          animationData={loadingSpinnerData}
          style={{ width: 48, aspectRatio: 1 }}
          loop
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      {/* 스크롤 가능한 테이블 컨테이너 */}
      <div
        style={{
          overflowX: 'auto',
          borderBottom: `1px solid ${colors.semantic.border.default}`,
        }}
      >
        <div
          style={{
            minWidth: tableMinWidth,
          }}
        >
          {/* 헤더 */}
          <div style={{ display: 'flex' }}>
            {columns.map((column, index) => (
              <div
                key={`header-${index}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: type === 'parent' ? colors.primary.coolGray[50] : 'transparent',
                  padding: '8px 12px',
                  height: 48,
                  boxSizing: 'border-box',
                  // 컬럼 너비 설정
                  width: column.width || 'auto',
                  minWidth: column.minWidth || 'auto',
                  flex: column.width ? '0 0 auto' : '1 1 auto',
                  justifyContent: column.headerJustifyContent || 'flex-start',
                }}
              >
                <Font
                  {...(type === 'parent' && {
                    hide: index === 0 || column.header === 'empty',
                  })}
                  type="body2"
                  fontWeight="medium"
                  color={
                    type === 'parent' ? colors.primary.coolGray[800] : colors.primary.coolGray[500]
                  }
                  noWhiteSpace
                >
                  {column.header}
                </Font>
              </div>
            ))}
          </div>

          {/* 본문 */}
          <div>
            {data.length === 0 ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: 200,
                  gap: 10,
                }}
              >
                {emptyIcon ? (
                  <Icon type={emptyIcon} size={emptyIconSize} color={emptyIconColor} />
                ) : (
                  <Illust type="empty" size={32} />
                )}
                {emptyText && (
                  <Font type="body2" fontWeight="medium" color={colors.primary.coolGray[300]}>
                    {emptyText}
                  </Font>
                )}
              </div>
            ) : (
              data.map((rowData, rowIndex) => (
                <Row
                  key={`row-${rowIndex}`}
                  data={rowData}
                  columns={columns}
                  rowAccordion={rowAccordion}
                  tableType={type}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Infinite Query 페이지네이션 */}
      {totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 0',
            marginTop: '8px',
          }}
        >
          {/* 페이지 점프 */}
          {onPageJump && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Font type="caption" color={colors.primary.coolGray[600]}>
                페이지:
              </Font>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageJump}
                maxVisiblePages={5}
                disabled={isLoading}
              />
            </div>
          )}

          {/* 더 보기 버튼 */}
          {hasNextPage && onLoadMore && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button
                onClick={onLoadMore}
                disabled={isFetchingNextPage || isLoading}
                style={{
                  padding: '8px 16px',
                  border: `1px solid ${colors.primary.coolGray[300]}`,
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  color: colors.primary.coolGray[700],
                  cursor: isFetchingNextPage || isLoading ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease',
                }}
              >
                {isFetchingNextPage ? '로딩 중...' : '더 보기'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* 페이지네이션 정보 */}
      {data.length > 0 && totalCount && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px 0',
          }}
        >
          <Font type="caption" fontWeight="medium" color={colors.primary.coolGray[400]}>
            총 {totalCount}개 항목 중 {currentPage}페이지 표시
          </Font>
        </div>
      )}
    </div>
  );
};

interface RowProps<T> {
  data: T;
  columns: Column<T>[];
  rowAccordion?: (rowData: T) => JSX.Element;
  tableType?: 'parent' | 'child';
}

const Row = <T,>({ data, columns, rowAccordion, tableType }: RowProps<T>) => {
  const [isRowAccordionOpen, setIsRowAccordionOpen] = useState(false);
  const rowDetailRef = useRef<HTMLDivElement>(null);
  const [rowDetailHeight, setRowDetailHeight] = useState<string | number>('auto');

  const onPressRow = () => {
    // @ts-ignore
    if (data.status === '미등록') return;
    setIsRowAccordionOpen((prev) => !prev);
  };

  useEffectOnceWhen(() => {
    setIsRowAccordionOpen(true);
    // @ts-ignore
  }, data.status === '등록 완료');

  useEffect(() => {
    if (rowAccordion && data && rowDetailRef.current) {
      const calculatedHeight = rowDetailRef.current.scrollHeight;
      setRowDetailHeight(calculatedHeight);
    }
  }, [rowAccordion, data]);

  return (
    <div>
      <div
        onClick={onPressRow}
        style={{ display: 'flex', cursor: rowAccordion ? 'pointer' : 'default' }}
      >
        {columns.map((column, index) => (
          <Cell
            key={`cell-${index}`}
            cell={column.cell(data)}
            columnIndex={index}
            column={column}
            isRowAccordionOpen={isRowAccordionOpen}
            tableType={tableType}
            hasRowAccordion={!!rowAccordion}
            isLastColumn={index === columns.length - 1}
          />
        ))}
      </div>
      {rowAccordion && (
        <div
          ref={rowDetailRef}
          style={{
            height: isRowAccordionOpen ? rowDetailHeight : 0,
            transition: 'height 330ms ease-in-out',
            overflow: 'hidden',
          }}
        >
          {rowAccordion(data)}
        </div>
      )}
    </div>
  );
};

interface CellProps {
  cell: React.ReactNode;
  columnIndex: number;
  column: {
    width?: string | number;
    minWidth?: string | number;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | string;
    headerJustifyContent?: 'flex-start' | 'center' | 'flex-end' | string;
    alignItems?: 'flex-start' | 'center' | 'flex-end' | string;
  };
  isRowAccordionOpen?: boolean;
  tableType?: 'parent' | 'child';
  hasRowAccordion?: boolean;
  isLastColumn?: boolean;
}

const Cell = memo(
  ({
    cell,
    columnIndex,
    column,
    isRowAccordionOpen,
    tableType,
    hasRowAccordion,
    isLastColumn,
  }: CellProps) => {
    return (
      <div
        style={{
          display: 'flex',
          borderBottom: tableType === 'parent' ? '1px solid #eee' : 'none',
          padding: '8px 12px',
          boxSizing: 'border-box',
          // 컬럼 너비 설정
          width: column.width || 'auto',
          minWidth: column.minWidth || 'auto',
          flex: column.width ? '0 0 auto' : '1 1 auto',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          justifyContent: column.justifyContent || 'flex-start',
          alignItems: column.alignItems || 'flex-start',
        }}
      >
        {columnIndex === 0 && hasRowAccordion ? (
          <div
            style={{
              display: 'flex',
              transition: 'transform 0.3s ease',
              transform:
                isRowAccordionOpen && tableType === 'parent' ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            {cell}
          </div>
        ) : (
          <>{cell}</>
        )}
      </div>
    );
  },
);
