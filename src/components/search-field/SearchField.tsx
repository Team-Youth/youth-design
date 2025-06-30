import { useState, forwardRef, useCallback } from 'react';
import { memo } from 'react';

import { TextField, TextFieldProps } from '../text-field/TextField';
import { Icon, IconType } from '../icon/Icon';
import { colors, spacing, radius, textStyles, fontWeight } from '../../tokens';

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
}

export const SearchField = memo(
  forwardRef<HTMLInputElement, SearchFieldProps>(
    (
      {
        suggestions = [],
        showSuggestions = false,
        onSuggestionClick,
        noResultsText = '검색 결과가 없습니다',
        ...textFieldProps
      },
      ref,
    ) => {
      const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          <TextField ref={ref} leadingIconType="search" {...textFieldProps} />

          {/* Search Suggestions */}
          {showSuggestions && (
            <div
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
              }}
            >
              {suggestions.length > 0 ? (
                suggestions.map((suggestion, index) => renderSuggestionItem(suggestion, index))
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
          )}
        </div>
      );
    },
  ),
);

SearchField.displayName = 'SearchField';
