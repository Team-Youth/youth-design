import React, { JSX, memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useEffectOnceWhen } from 'rooks';
import { YouthLottie } from '../lottie';
import Font from '../font';
import { colors } from '../../tokens';

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

export const Table = <T,>({
  data,
  columns,
  rowAccordion,
  type = 'parent',
  isLoading,
}: TableProps<T>) => {
  // 각 열의 최대 너비를 저장하는 상태
  const [columnLayouts, setColumnLayouts] = useState<{ [key: number]: number }>({});

  console.log(99999, columnLayouts);

  // 너비 계산이 완료되었는지 추적하는 상태
  const [isWidthCalculationComplete, setIsWidthCalculationComplete] = useState(false);

  // 헤더 셀의 참조를 저장할 배열
  const headerRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const formattedColumns = useMemo(() => {
    if (type === 'child') return columns;
    return [...columns];
  }, [columns]);

  // 컴포넌트 마운트 시 헤더 셀의 너비를 측정하여 초기화
  useLayoutEffect(() => {
    formattedColumns.forEach((column, index) => {
      const headerEl = headerRefs.current[index];
      if (headerEl) {
        const width = Math.ceil(headerEl.getBoundingClientRect().width);
        updateColumnWidth(index, width);
      }
    });
  }, [formattedColumns, data]);

  // 모든 컬럼의 너비 계산이 완료되었는지 확인
  useEffect(() => {
    if (data.length > 0 && formattedColumns.length > 0) {
      // 모든 컬럼에 너비가 설정되었는지 확인
      const allColumnsHaveWidth = formattedColumns.every((_, index) => columnLayouts[index] > 0);
      if (allColumnsHaveWidth && !isWidthCalculationComplete) {
        // 약간의 지연을 주어 모든 셀의 너비 계산이 완료되도록 함
        setTimeout(() => {
          setIsWidthCalculationComplete(true);
        }, 100);
      }
    }
  }, [columnLayouts, data.length, formattedColumns.length, isWidthCalculationComplete]);

  // 데이터나 컬럼이 변경되면 계산 완료 상태 리셋
  useEffect(() => {
    setIsWidthCalculationComplete(false);
  }, [data, columns]);

  // 창 크기 변경 시 열 너비를 재측정하도록 초기화
  useEffect(() => {
    const handleResize = () => {
      setIsWidthCalculationComplete(false);
      formattedColumns.forEach((column, index) => {
        const headerEl = headerRefs.current[index];
        if (headerEl) {
          const width = Math.ceil(headerEl.getBoundingClientRect().width);
          updateColumnWidth(index, width);
        }
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          animationData={require('./loadingSpinner.json')}
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
      {/* 헤더 */}
      <div style={{ display: 'flex' }}>
        {formattedColumns.map((column, index) => {
          console.log(999999, columnLayouts[index]);
          return (
            <div
              key={`header-${index}`}
              ref={(el) => {
                headerRefs.current[index] = el;
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #eee',
                backgroundColor: type === 'parent' ? colors.primary.coolGray[50] : 'transparent',
                whiteSpace: 'nowrap',
                padding: '8px 12px',
                width: columnLayouts[index] ? `${columnLayouts[index]}px` : 'auto',
                boxSizing: 'border-box',
                overflow: 'visible',
                height: 48,
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
        }}
      >
        {data.map((rowData, rowIndex) => (
          <Row
            key={`row-${rowIndex}`}
            data={rowData}
            columns={formattedColumns}
            updateColumnWidth={updateColumnWidth}
            columnLayouts={columnLayouts}
            isWidthCalculationComplete={isWidthCalculationComplete}
            rowAccordion={rowAccordion}
            tableType={type}
          />
        ))}
      </div>
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
          ...(isWidthCalculationComplete && {
            ...(tableType === 'parent'
              ? columnIndex === columnLength - 2 && { flex: 1, minWidth: 0 }
              : columnIndex === columnLength - 1 && { flex: 2, minWidth: 0 }),
            ...(tableType === 'child' && columnIndex !== columnLength - 1 && { flex: 1 }),
          }),
          ...style,
        }}
      >
        {columnIndex === 0 ? (
          <div
            style={{
              display: 'flex',
              ...(columnIndex === 0 && {
                transition: 'transform 0.3s ease',
                transform:
                  isRowAccordionOpen && tableType === 'parent' ? 'rotate(180deg)' : 'rotate(0deg)',
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
