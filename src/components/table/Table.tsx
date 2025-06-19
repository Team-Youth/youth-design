import React, {
  JSX,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useEffectOnceWhen } from 'rooks';
import { YouthLottie } from '../lottie/Lottie';
import Font from '../font/Font';
import { colors } from '../../tokens/colors';
import { Icon, IconType } from '../icon';
import { Pagination } from '../pagination';
import loadingSpinnerData from './loadingSpinner.json';

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
  // 페이지네이션 관련 props
  pagination?: boolean;
  pageSize?: number;
  initialPage?: number;
  maxVisiblePages?: number;
  paginationDisabled?: boolean;
  onPageChange?: (page: number, pageData: T[], totalPages: number) => void;
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
  // 페이지네이션 관련 props
  pagination = false,
  pageSize = 10,
  initialPage = 1,
  maxVisiblePages = 5,
  paginationDisabled = false,
  onPageChange,
}: TableProps<T>) => {
  // 각 열의 최대 너비를 저장하는 상태
  const [columnLayouts, setColumnLayouts] = useState<{ [key: number]: number }>({});

  // 너비 계산이 완료되었는지 추적하는 상태
  const [isWidthCalculationComplete, setIsWidthCalculationComplete] = useState(false);

  // 헤더 셀의 참조를 저장할 배열
  const headerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(initialPage);

  // 페이지네이션이 활성화된 경우 총 페이지 수 계산
  const totalPages = useMemo(() => {
    if (!pagination) return 1;
    return Math.ceil(data.length / pageSize);
  }, [pagination, data.length, pageSize]);

  // 현재 페이지에 표시할 데이터 계산
  const currentPageData = useMemo(() => {
    if (!pagination) return data;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [data, pagination, currentPage, pageSize]);

  // 페이지 변경 핸들러
  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);

      if (onPageChange) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const pageData = data.slice(startIndex, endIndex);
        onPageChange(page, pageData, totalPages);
      }
    },
    [data, pageSize, totalPages, onPageChange],
  );

  // 데이터가 변경되면 첫 페이지로 리셋
  useEffect(() => {
    if (pagination) {
      setCurrentPage(1);
    }
  }, [data, pagination]);

  // 열 너비를 업데이트하는 함수
  const updateColumnWidth = (index: number, width: number) => {
    setColumnLayouts((prevLayouts) => {
      const currentWidth = prevLayouts[index] || 0;
      if (width > currentWidth) {
        return { ...prevLayouts, [index]: width };
      }
      return prevLayouts;
    });
  };

  // 컬럼 레이아웃을 완전히 리셋하는 함수
  const resetColumnLayouts = () => {
    setColumnLayouts({});
    setIsWidthCalculationComplete(false);
  };

  const formattedColumns = useMemo(() => {
    if (type === 'child') return columns;
    return [...columns];
  }, [columns]);

  // 헤더 너비를 정확하게 측정하는 함수
  const measureHeaderWidths = useCallback(() => {
    formattedColumns.forEach((column, index) => {
      const headerEl = headerRefs.current[index];
      if (headerEl) {
        // 실제 텍스트 컨텐츠의 너비를 측정하기 위해 임시 요소 생성
        const tempEl = document.createElement('div');
        tempEl.style.position = 'absolute';
        tempEl.style.visibility = 'hidden';
        tempEl.style.whiteSpace = 'nowrap';
        tempEl.style.fontSize = window.getComputedStyle(headerEl).fontSize;
        tempEl.style.fontWeight = window.getComputedStyle(headerEl).fontWeight;
        tempEl.style.fontFamily = window.getComputedStyle(headerEl).fontFamily;
        tempEl.textContent = column.header;
        document.body.appendChild(tempEl);

        const textWidth = tempEl.getBoundingClientRect().width;
        document.body.removeChild(tempEl);

        // 패딩을 포함한 실제 필요한 너비 계산 (padding: 8px 12px = 24px)
        const totalWidth = Math.ceil(textWidth + 24);
        const currentWidth = Math.ceil(headerEl.getBoundingClientRect().width);

        updateColumnWidth(index, Math.max(totalWidth, currentWidth));
      }
    });
  }, [formattedColumns, updateColumnWidth]);

  // 컴포넌트 마운트 시 헤더 셀의 너비를 측정하여 초기화
  useLayoutEffect(() => {
    // 즉시 실행
    measureHeaderWidths();

    // 약간의 지연 후 재측정 (레이아웃이 완전히 안정화된 후)
    setTimeout(measureHeaderWidths, 30);
  }, [formattedColumns, currentPageData]);

  // 모든 컬럼의 너비 계산이 완료되었는지 확인
  useEffect(() => {
    if (currentPageData.length > 0 && formattedColumns.length > 0) {
      // 모든 컬럼에 너비가 설정되었는지 확인
      const allColumnsHaveWidth = formattedColumns.every((_, index) => columnLayouts[index] > 0);
      if (allColumnsHaveWidth && !isWidthCalculationComplete) {
        // 약간의 지연을 주어 모든 셀의 너비 계산이 완료되도록 함
        setTimeout(() => {
          setIsWidthCalculationComplete(true);
        }, 50);
      }
    }
  }, [columnLayouts, currentPageData.length, formattedColumns.length, isWidthCalculationComplete]);

  // 데이터나 컬럼이 변경되면 계산 완료 상태와 컬럼 레이아웃 리셋
  useEffect(() => {
    resetColumnLayouts();
  }, [data, columns]);

  // 창 크기 변경 시 열 너비를 재측정하도록 초기화
  useEffect(() => {
    const handleResize = () => {
      resetColumnLayouts();
      // 약간의 지연 후 헤더 너비 재측정
      setTimeout(measureHeaderWidths, 30);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [measureHeaderWidths]);

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
      {/* 테이블 컨테이너 */}
      <div
        style={{
          opacity: isWidthCalculationComplete || currentPageData.length === 0 ? 1 : 0.7,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        {/* 헤더 */}
        <div style={{ display: 'flex' }}>
          {formattedColumns.map((column, index) => {
            return (
              <div
                key={`header-${index}`}
                ref={(el) => {
                  headerRefs.current[index] = el;
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: type === 'parent' ? colors.primary.coolGray[50] : 'transparent',
                  whiteSpace: 'nowrap',
                  padding: '8px 12px',
                  width: columnLayouts[index] ? `${columnLayouts[index]}px` : 'auto',
                  boxSizing: 'border-box',
                  overflow: 'visible',
                  height: 48,
                  transition: 'width 0.2s ease-out, flex 0.2s ease-out',
                  // 데이터가 없을 때 컬럼에 적절한 최소 너비 설정
                  ...(currentPageData.length === 0 && {
                    flex: 1,
                    minWidth: index === 0 ? 40 : index === formattedColumns.length - 1 ? 100 : 120,
                    width: 'auto',
                  }),
                  ...(currentPageData.length > 0 && {
                    ...(type === 'parent'
                      ? index === formattedColumns.length - 2 && {
                          flex: 1,
                          minWidth: 0,
                          width: 'auto',
                        }
                      : index === formattedColumns.length - 1 && {
                          flex: 2,
                          minWidth: 0,
                          width: 'auto',
                        }),
                    ...(type === 'child' &&
                      index !== formattedColumns.length - 1 && { flex: 1, width: 'auto' }),
                  }),
                  ...column.style,
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
            );
          })}
        </div>
        {/* 본문 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            borderBottom: `1px solid ${colors.semantic.border.default}`,
          }}
        >
          {currentPageData.length === 0 ? (
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
              {emptyIcon && <Icon type={emptyIcon} size={emptyIconSize} color={emptyIconColor} />}
              {emptyText && (
                <Font type="body2" fontWeight="medium" color={colors.primary.coolGray[300]}>
                  {emptyText}
                </Font>
              )}
            </div>
          ) : (
            currentPageData.map((rowData, rowIndex) => (
              <Row
                key={`row-${(currentPage - 1) * pageSize + rowIndex}`}
                data={rowData}
                columns={formattedColumns}
                updateColumnWidth={updateColumnWidth}
                columnLayouts={columnLayouts}
                isWidthCalculationComplete={isWidthCalculationComplete}
                rowAccordion={rowAccordion}
                tableType={type}
              />
            ))
          )}
        </div>
      </div>

      {/* 페이지네이션 */}
      {pagination && data.length > 0 && totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px 0',
            marginTop: '8px',
          }}
        >
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            maxVisiblePages={maxVisiblePages}
            disabled={paginationDisabled || isLoading}
          />
        </div>
      )}

      {/* 페이지네이션 정보 (선택사항) */}
      {pagination && data.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px 0',
          }}
        >
          <Font type="caption" fontWeight="medium" color={colors.primary.coolGray[400]}>
            총 {data.length}개 항목 중 {(currentPage - 1) * pageSize + 1}-
            {Math.min(currentPage * pageSize, data.length)}번째 표시
          </Font>
        </div>
      )}
    </div>
  );
};

interface RowProps<T> {
  data: T;
  columns: Column<T>[];
  updateColumnWidth: (index: number, width: number) => void;
  columnLayouts: { [key: number]: number };
  isWidthCalculationComplete: boolean;
  rowAccordion?: (rowData: T) => JSX.Element;
  tableType?: 'parent' | 'child';
}

const Row = <T,>({
  data,
  columns,
  updateColumnWidth,
  columnLayouts,
  isWidthCalculationComplete,
  rowAccordion,
  tableType,
}: RowProps<T>) => {
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
      const calculatedHeight = rowDetailRef.current.scrollHeight; // 자식 요소의 실제 높이 계산
      setRowDetailHeight(calculatedHeight);
    }
  }, [rowAccordion, data]); // 자식 요소가 변경될 때마다 높이 계산
  return (
    <div>
      <div onClick={onPressRow} style={{ display: 'flex' }}>
        {columns.map((column, index) => (
          <Cell
            key={`cell-${index}`}
            cell={column.cell(data)}
            updateColumnWidth={updateColumnWidth}
            columnIndex={index}
            columnWidth={columnLayouts[index]}
            columnLength={columns.length}
            isRowAccordionOpen={isRowAccordionOpen}
            tableType={tableType}
            style={column.style}
            isWidthCalculationComplete={isWidthCalculationComplete}
            hasRowAccordion={!!rowAccordion}
          />
        ))}
      </div>
      <div
        ref={rowDetailRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          height: isRowAccordionOpen ? rowDetailHeight : 0,
          transition: 'height 330ms ease-in-out',
          overflow: 'hidden',
        }}
      >
        {rowAccordion && rowAccordion(data)}
      </div>
    </div>
  );
};

interface CellProps {
  cell: React.ReactNode;
  updateColumnWidth: (index: number, width: number) => void;
  columnIndex: number;
  columnWidth?: number;
  columnLength: number;
  isRowAccordionOpen?: boolean;
  tableType?: 'parent' | 'child';
  style?: React.CSSProperties;
  isWidthCalculationComplete: boolean;
  hasRowAccordion?: boolean;
}

const Cell = memo(
  ({
    cell,
    updateColumnWidth,
    columnIndex,
    columnWidth,
    columnLength,
    isRowAccordionOpen,
    tableType,
    style,
    isWidthCalculationComplete,
    hasRowAccordion,
  }: CellProps) => {
    const cellRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if (cellRef.current) {
        const { width } = cellRef.current.getBoundingClientRect();
        const ceilWidth = Math.ceil(width);
        if (ceilWidth > (columnWidth || 0)) {
          updateColumnWidth(columnIndex, ceilWidth);
        }
      }
    }, [cell, updateColumnWidth, columnIndex, columnWidth]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (columnIndex === columnLength - 1) {
        e.stopPropagation();
      }
    };

    return (
      <div
        ref={cellRef}
        onClick={handleClick}
        style={{
          display: 'flex',
          borderBottom: tableType === 'parent' ? '1px solid #eee' : 'none',
          padding:
            tableType === 'parent' && columnIndex === columnLength - 1 ? '16px 12px' : '8px 12px',
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          minWidth: columnIndex === 1 ? 84 : columnWidth ? `${columnWidth}px` : '0',
          width: columnWidth ? `${columnWidth}px` : 'auto',
          overflow: 'visible',
          transition: 'width 0.2s ease-out, flex 0.2s ease-out',

          ...(tableType === 'parent'
            ? columnIndex === columnLength - 2 && { flex: 1, minWidth: 0 }
            : columnIndex === columnLength - 1 && { flex: 2, minWidth: 0 }),
          ...(tableType === 'child' && columnIndex !== columnLength - 1 && { flex: 1 }),

          ...style,
        }}
      >
        {columnIndex === 0 ? (
          <div
            style={{
              display: 'flex',
              ...(columnIndex === 0 &&
                hasRowAccordion && {
                  transition: 'transform 0.3s ease',
                  transform:
                    isRowAccordionOpen && tableType === 'parent'
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                }),
            }}
          >
            {cell}
          </div>
        ) : (
          <div style={{ display: 'flex' }}>{cell}</div>
        )}
      </div>
    );
  },
);
