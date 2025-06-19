import React, { useMemo } from 'react';
import { colors } from '../../tokens/colors';
import { radius } from '../../tokens/radius';
import { Icon } from '../icon';
import Font from '../font/Font';

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

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
  disabled = false,
}) => {
  // 표시할 페이지 번호들을 계산
  const visiblePages = useMemo(() => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    // 끝에서 시작 위치 조정
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    const pages: (number | 'ellipsis')[] = [];

    // 첫 페이지와 생략 표시
    if (start > 1) {
      pages.push(1);
      if (start > 2) {
        pages.push('ellipsis');
      }
    }

    // 중간 페이지들
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // 마지막 페이지와 생략 표시
    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push('ellipsis');
      }
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);

  const handlePrevious = () => {
    if (!disabled && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!disabled && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (!disabled && page !== currentPage) {
      onPageChange(page);
    }
  };

  const baseButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: radius.s,
    border: 'none',
    background: 'transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
  };

  const pageButtonStyle = (isSelected: boolean, isDisabled: boolean): React.CSSProperties => ({
    ...baseButtonStyle,
    backgroundColor: isSelected ? colors.primary.mainviolet : 'transparent',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.5 : 1,
  });

  const controlButtonStyle = (isDisabled: boolean): React.CSSProperties => ({
    ...baseButtonStyle,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.5 : 1,
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}
    >
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={disabled || currentPage <= 1}
        style={controlButtonStyle(disabled || currentPage <= 1)}
        onMouseEnter={(e) => {
          if (!disabled && currentPage > 1) {
            e.currentTarget.style.backgroundColor = colors.primary.coolGray[50];
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && currentPage > 1) {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        aria-label="이전 페이지"
      >
        <Icon
          type="chevron-left"
          size={24}
          color={
            disabled || currentPage <= 1
              ? colors.primary.coolGray[200]
              : colors.primary.coolGray[300]
          }
        />
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => {
        if (page === 'ellipsis') {
          return (
            <div
              key={`ellipsis-${index}`}
              style={{
                ...baseButtonStyle,
                cursor: 'default',
              }}
            >
              <Font type="body2" fontWeight="medium" color={colors.primary.coolGray[200]}>
                ⋯
              </Font>
            </div>
          );
        }

        const isSelected = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            disabled={disabled}
            style={pageButtonStyle(isSelected, disabled)}
            onMouseEnter={(e) => {
              if (!disabled && !isSelected) {
                e.currentTarget.style.backgroundColor = colors.primary.coolGray[50];
              }
            }}
            onMouseLeave={(e) => {
              if (!disabled && !isSelected) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
            aria-label={`${page}페이지로 이동`}
            aria-current={isSelected ? 'page' : undefined}
          >
            <Font
              type="body2"
              fontWeight="medium"
              color={
                isSelected
                  ? colors.primary.gray.white
                  : disabled
                    ? colors.primary.coolGray[200]
                    : colors.primary.coolGray[300]
              }
            >
              {page}
            </Font>
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={disabled || currentPage >= totalPages}
        style={controlButtonStyle(disabled || currentPage >= totalPages)}
        onMouseEnter={(e) => {
          if (!disabled && currentPage < totalPages) {
            e.currentTarget.style.backgroundColor = colors.primary.coolGray[50];
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && currentPage < totalPages) {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        aria-label="다음 페이지"
      >
        <Icon
          type="chevron-right"
          size={24}
          color={
            disabled || currentPage >= totalPages
              ? colors.primary.coolGray[200]
              : colors.primary.coolGray[300]
          }
        />
      </button>
    </div>
  );
};
