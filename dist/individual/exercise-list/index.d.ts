import React from 'react';
import { ExerciseCardProps } from '../exercise-card/index.js';

interface Exercise extends Omit<ExerciseCardProps, 'onClick' | 'onFavoriteToggle' | 'onCompleteToggle'> {
    id: string;
}
interface ExerciseListProps {
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
declare const ExerciseList: React.FC<ExerciseListProps>;

export { type Exercise, ExerciseList, type ExerciseListProps };
