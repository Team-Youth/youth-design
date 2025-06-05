import React, { useState, useMemo } from 'react';
import { colors } from '../../tokens/colors';
import { textStyles } from '../../tokens/typography';
import { spacing } from '../../tokens/spacing';
import { radius } from '../../tokens/radius';
import ExerciseCard, { ExerciseCardProps } from '../exercise-card/ExerciseCard';
import './ExerciseList.css';

export interface Exercise
  extends Omit<ExerciseCardProps, 'onClick' | 'onFavoriteToggle' | 'onCompleteToggle'> {
  id: string;
}

export interface ExerciseListProps {
  /** 운동 목록 */
  exercises: Exercise[];
  /** 빈 상태 메시지 */
  emptyMessage?: string;
  /** 빈 상태 아이콘 */
  emptyIcon?: React.ReactNode;
  /** 필터 옵션 표시 여부 */
  showFilters?: boolean;
  /** 검색 기능 표시 여부 */
  showSearch?: boolean;
  /** 운동 클릭 핸들러 */
  onExerciseClick?: (exercise: Exercise) => void;
  /** 즐겨찾기 토글 핸들러 */
  onFavoriteToggle?: (exerciseId: string) => void;
  /** 완료 토글 핸들러 */
  onCompleteToggle?: (exerciseId: string) => void;
  /** 추가 CSS 클래스 */
  className?: string;
}

type FilterType = 'all' | 'cardio' | 'strength' | 'stretching' | 'balance';
type SortType = 'name' | 'duration' | 'calories' | 'type';

const ExerciseList: React.FC<ExerciseListProps> = ({
  exercises,
  emptyMessage = '등록된 운동이 없습니다.',
  emptyIcon = '🏃‍♂️',
  showFilters = true,
  showSearch = true,
  onExerciseClick,
  onFavoriteToggle,
  onCompleteToggle,
  className = '',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<SortType>('name');
  const [showCompleted, setShowCompleted] = useState(true);

  // 필터링 및 정렬된 운동 목록
  const filteredAndSortedExercises = useMemo(() => {
    let filtered = exercises;

    // 검색 필터
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (exercise) =>
          exercise.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (exercise.description &&
            exercise.description.toLowerCase().includes(searchQuery.toLowerCase())),
      );
    }

    // 타입 필터
    if (filterType !== 'all') {
      filtered = filtered.filter((exercise) => exercise.type === filterType);
    }

    // 완료 상태 필터
    if (!showCompleted) {
      filtered = filtered.filter((exercise) => !exercise.isCompleted);
    }

    // 정렬
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'duration':
          return (b.duration || 0) - (a.duration || 0);
        case 'calories':
          return (b.calories || 0) - (a.calories || 0);
        case 'type':
          return (a.type || '').localeCompare(b.type || '');
        default:
          return 0;
      }
    });

    return filtered;
  }, [exercises, searchQuery, filterType, sortBy, showCompleted]);

  // 통계 정보
  const stats = useMemo(() => {
    const completed = exercises.filter((ex) => ex.isCompleted).length;
    const total = exercises.length;
    const totalDuration = exercises.reduce((sum, ex) => sum + (ex.duration || 0), 0);
    const totalCalories = exercises.reduce((sum, ex) => sum + (ex.calories || 0), 0);

    return {
      completed,
      total,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
      totalDuration,
      totalCalories,
    };
  }, [exercises]);

  const filterOptions = [
    { value: 'all' as FilterType, label: '전체', icon: '🏃‍♂️' },
    { value: 'cardio' as FilterType, label: '유산소', icon: '🏃‍♂️' },
    { value: 'strength' as FilterType, label: '근력', icon: '💪' },
    { value: 'stretching' as FilterType, label: '스트레칭', icon: '🧘‍♀️' },
    { value: 'balance' as FilterType, label: '밸런스', icon: '⚖️' },
  ];

  const sortOptions = [
    { value: 'name' as SortType, label: '이름순' },
    { value: 'duration' as SortType, label: '시간순' },
    { value: 'calories' as SortType, label: '칼로리순' },
    { value: 'type' as SortType, label: '타입순' },
  ];

  return (
    <div className={`exercise-list ${className}`}>
      {/* 헤더 영역 */}
      <div style={{ marginBottom: spacing.l }}>
        {/* 통계 정보 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: spacing.m,
            padding: spacing.m,
            backgroundColor: colors.primary.coolGray[50],
            borderRadius: radius.s,
            border: `1px solid ${colors.semantic.border.default}`,
          }}
        >
          <div>
            <h2
              style={{
                ...textStyles.heading2,
                color: colors.semantic.text.primary,
                margin: 0,
                marginBottom: spacing.xxxs,
              }}
            >
              등록된 운동 목록
            </h2>
            <p
              style={{
                ...textStyles.body3,
                color: colors.semantic.text.secondary,
                margin: 0,
              }}
            >
              총 {stats.total}개 • 완료율 {stats.completionRate}%
            </p>
          </div>
          <div style={{ display: 'flex', gap: spacing.s, alignItems: 'center', fontSize: '12px' }}>
            {stats.totalDuration > 0 && (
              <div style={{ textAlign: 'center', color: colors.semantic.text.tertiary }}>
                <div>⏱️ {stats.totalDuration}분</div>
              </div>
            )}
            {stats.totalCalories > 0 && (
              <div style={{ textAlign: 'center', color: colors.semantic.text.tertiary }}>
                <div>🔥 {stats.totalCalories}kcal</div>
              </div>
            )}
          </div>
        </div>

        {/* 검색 및 필터 */}
        {(showSearch || showFilters) && (
          <div style={{ marginBottom: spacing.m }}>
            {/* 검색 바 */}
            {showSearch && (
              <div style={{ marginBottom: spacing.s }}>
                <input
                  type="text"
                  placeholder="운동 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: `${spacing.s} ${spacing.m}`,
                    border: `1px solid ${colors.semantic.border.default}`,
                    borderRadius: radius.s,
                    fontSize: '14px',
                    backgroundColor: colors.semantic.background.primary,
                    color: colors.semantic.text.primary,
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.primary.mainviolet;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = colors.semantic.border.default;
                  }}
                />
              </div>
            )}

            {/* 필터 및 정렬 */}
            {showFilters && (
              <div
                style={{ display: 'flex', gap: spacing.s, flexWrap: 'wrap', alignItems: 'center' }}
              >
                {/* 타입 필터 */}
                <div style={{ display: 'flex', gap: spacing.xxs }}>
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFilterType(option.value)}
                      style={{
                        padding: `${spacing.xs} ${spacing.s}`,
                        border: `1px solid ${
                          filterType === option.value
                            ? colors.primary.mainviolet
                            : colors.semantic.border.default
                        }`,
                        borderRadius: radius.xs,
                        backgroundColor:
                          filterType === option.value
                            ? colors.primary.mainviolet
                            : colors.semantic.background.primary,
                        color:
                          filterType === option.value
                            ? colors.semantic.background.primary
                            : colors.semantic.text.primary,
                        cursor: 'pointer',
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: spacing.xxxs,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>{option.icon}</span>
                      {option.label}
                    </button>
                  ))}
                </div>

                {/* 정렬 */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortType)}
                  style={{
                    padding: `${spacing.xs} ${spacing.s}`,
                    border: `1px solid ${colors.semantic.border.default}`,
                    borderRadius: radius.xs,
                    backgroundColor: colors.semantic.background.primary,
                    color: colors.semantic.text.primary,
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* 완료된 항목 표시 토글 */}
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: spacing.xs,
                    cursor: 'pointer',
                    fontSize: '12px',
                    color: colors.semantic.text.secondary,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={showCompleted}
                    onChange={(e) => setShowCompleted(e.target.checked)}
                    style={{ cursor: 'pointer' }}
                  />
                  완료된 운동 표시
                </label>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 운동 목록 */}
      {filteredAndSortedExercises.length > 0 ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.s,
          }}
        >
          {filteredAndSortedExercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              {...exercise}
              width="fill"
              onClick={() => onExerciseClick?.(exercise)}
              onFavoriteToggle={() => onFavoriteToggle?.(exercise.id)}
              onCompleteToggle={() => onCompleteToggle?.(exercise.id)}
            />
          ))}
        </div>
      ) : (
        /* 빈 상태 */
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${spacing.xxxl} ${spacing.l}`,
            textAlign: 'center',
            color: colors.semantic.text.tertiary,
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: spacing.m }}>{emptyIcon}</div>
          <h3
            style={{
              ...textStyles.heading3,
              color: colors.semantic.text.secondary,
              margin: 0,
              marginBottom: spacing.xs,
            }}
          >
            {emptyMessage}
          </h3>
          <p
            style={{
              ...textStyles.body3,
              color: colors.semantic.text.tertiary,
              margin: 0,
              maxWidth: '300px',
            }}
          >
            {searchQuery || filterType !== 'all'
              ? '검색 조건을 변경해보세요.'
              : '새로운 운동을 추가해보세요!'}
          </p>
        </div>
      )}
    </div>
  );
};

export default ExerciseList;
