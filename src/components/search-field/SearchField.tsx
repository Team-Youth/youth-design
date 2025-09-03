import { useState, forwardRef, useCallback, useRef } from 'react';
import { memo } from 'react';

import { TextField, TextFieldProps } from '../text-field/TextField';
import { Icon, IconType } from '../icon/Icon';
import { colors, spacing, radius, textStyles, fontWeight } from '../../tokens';

// 스피너 애니메이션을 위한 CSS keyframes 추가
const spinKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// 스타일 시트에 keyframes 추가
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = spinKeyframes;
  document.head.appendChild(style);
}

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

export interface SearchFieldProps
  extends Omit<TextFieldProps, 'leadingIconType' | 'trailingIconType'> {
  /** 검색 제안 목록 */
  suggestions?: SearchSuggestionItem[];
  /** 제안 목록 표시 여부 */
  showSuggestions?: boolean;
  /** 제안 항목 클릭 시 호출되는 콜백 */
  onSuggestionClick?: (suggestion: SearchSuggestionItem, index: number) => void;
  /** 제안 목록이 비어있을 때 표시할 메시지 */
  noResultsText?: string;
  /** 무한스크롤: 다음 페이지 로드 콜백 */
  onLoadMore?: () => void;
  /** 무한스크롤: 다음 페이지가 있는지 여부 */
  hasNextPage?: boolean;
  /** 무한스크롤: 로딩 중인지 여부 */
  isLoadingMore?: boolean;
  /** 모바일/태블릿 키보드 타입 (검색에 최적화된 기본값 'search') */
  inputMode?: 'search' | 'text' | 'email' | 'tel' | 'url' | 'numeric' | 'decimal' | 'none';
}

export const SearchField = memo(
  forwardRef<HTMLInputElement, SearchFieldProps>(
    (
      {
        suggestions = [],
        showSuggestions = false,
        onSuggestionClick,
        noResultsText = '검색 결과가 없습니다',
        onLoadMore,
        hasNextPage,
        isLoadingMore,
        inputMode = 'search',
        ...textFieldProps
      },
      ref,
    ) => {
      const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
      const suggestionsContainerRef = useRef<HTMLDivElement>(null);

      // 무한스크롤 스크롤 이벤트 처리
      const handleScroll = useCallback(
        (event: React.UIEvent<HTMLDivElement>) => {
          if (!onLoadMore || !hasNextPage || isLoadingMore) return;

          const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
          const scrollThreshold = 10; // 스크롤 임계값 (px)

          if (scrollHeight - scrollTop - clientHeight < scrollThreshold) {
            onLoadMore();
          }
        },
        [onLoadMore, hasNextPage, isLoadingMore],
      );

      const handleSuggestionClick = useCallback(
        (suggestion: SearchSuggestionItem, index: number) => {
          if (suggestion.disabled) return;
          suggestion.onClick?.();
          onSuggestionClick?.(suggestion, index);
        },
        [onSuggestionClick],
      );

      const getSuggestionStyles = useCallback(
        (suggestion: SearchSuggestionItem, index: number): React.CSSProperties => {
          let backgroundColor: string = colors.semantic.background.primary; // #FFFFFF

          if (suggestion.disabled) {
            backgroundColor = colors.semantic.background.primary;
          } else if (hoveredIndex === index) {
            backgroundColor = colors.semantic.disabled.background; // #F3F5F6
          }

          return {
            display: 'flex',
            gap: spacing.xs, // 8px
            padding: `12px ${spacing.m}`, // 12px 16px
            backgroundColor,
            cursor: suggestion.disabled ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s ease',
          };
        },
        [hoveredIndex],
      );

      const getTextColor = useCallback((suggestion: SearchSuggestionItem) => {
        return suggestion.disabled
          ? colors.semantic.disabled.foreground // #D1D5DB
          : colors.semantic.text.primary; // #25282D
      }, []);

      const getDescriptionColor = useCallback((suggestion: SearchSuggestionItem) => {
        return suggestion.disabled
          ? colors.semantic.disabled.foreground // #D1D5DB
          : colors.semantic.text.tertiary; // #AFB6C0
      }, []);

      const getIconColor = useCallback((suggestion: SearchSuggestionItem) => {
        return suggestion.disabled
          ? colors.semantic.disabled.foreground // #D1D5DB
          : colors.semantic.text.tertiary; // #AFB6C0
      }, []);

      const renderSuggestionItem = useCallback(
        (suggestion: SearchSuggestionItem, index: number) => {
          const textColor = getTextColor(suggestion);
          const descriptionColor = getDescriptionColor(suggestion);
          const iconColor = getIconColor(suggestion);

          return (
            <div
              key={index}
              style={getSuggestionStyles(suggestion, index)}
              onMouseEnter={() => !suggestion.disabled && setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleSuggestionClick(suggestion, index)}
            >
              {/* Leading Icon */}
              {suggestion.leadingIconType && (
                <Icon type={suggestion.leadingIconType} size={20} color={iconColor} />
              )}

              {/* Text Content */}
              <div style={{ flex: 1, display: 'flex', gap: '8px', alignSelf: 'center' }}>
                <span
                  style={{
                    ...textStyles.body1,
                    fontWeight: fontWeight.medium,
                    color: textColor,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {suggestion.text}
                </span>
                {suggestion.description && (
                  <span
                    style={{
                      ...textStyles.body1,
                      fontWeight: fontWeight.regular,
                      color: descriptionColor,
                    }}
                  >
                    {suggestion.description}
                  </span>
                )}
              </div>

              {/* Trailing Icon */}
              {suggestion.disabled ? (
                <Icon type="lock" size={20} color={iconColor} />
              ) : (
                suggestion.trailingIconType && (
                  <Icon type={suggestion.trailingIconType} size={20} color={iconColor} />
                )
              )}
            </div>
          );
        },
        [
          getSuggestionStyles,
          getTextColor,
          getDescriptionColor,
          getIconColor,
          handleSuggestionClick,
        ],
      );

      return (
        <div style={{ position: 'relative', width: textFieldProps.width || '320px' }}>
          {/* TextField */}
          <TextField
            ref={ref}
            leadingIconType="search"
            inputMode={inputMode}
            type="text"
            {...textFieldProps}
          />

          {/* Search Suggestions */}
          {showSuggestions && (
            <div
              ref={suggestionsContainerRef}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                marginTop: spacing.xs, // 8px
                backgroundColor: colors.semantic.background.primary, // #FFFFFF
                border: `1px solid ${colors.semantic.border.strong}`, // #D6D6D6
                borderRadius: radius.s, // 8px
                boxShadow: '0px 1px 8px 0px rgba(21, 23, 25, 0.08)',
                zIndex: 1000,
                overflow: 'hidden',
                maxHeight: '200px', // 최대 높이 설정
              }}
            >
              <div
                style={{
                  maxHeight: '200px',
                  overflowY: 'auto',
                }}
                onScroll={handleScroll}
              >
                {suggestions.length > 0 ? (
                  <>
                    {suggestions.map((suggestion, index) =>
                      renderSuggestionItem(suggestion, index),
                    )}
                    {/* 무한스크롤 로딩 인디케이터 */}
                    {isLoadingMore && (
                      <div
                        style={{
                          padding: `12px ${spacing.m}`,
                          ...textStyles.body1,
                          color: colors.semantic.disabled.foreground,
                          textAlign: 'center',
                          userSelect: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <div
                          style={{
                            width: '16px',
                            height: '16px',
                            border: '2px solid #f3f3f3',
                            borderTop: '2px solid #cccccc',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                          }}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div
                    style={{
                      padding: `12px ${spacing.m}`,
                      color: colors.semantic.text.tertiary,
                      ...textStyles.body1,
                      textAlign: 'center',
                    }}
                  >
                    {noResultsText}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      );
    },
  ),
);

SearchField.displayName = 'SearchField';
