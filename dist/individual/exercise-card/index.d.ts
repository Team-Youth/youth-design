import React from 'react';

interface ExerciseCardProps {
    /** 운동 이름 */
    title: string;
    /** 운동 설명 또는 부가 정보 */
    description?: string;
    /** 운동 타입 (예: 유산소, 근력, 스트레칭) */
    type?: 'cardio' | 'strength' | 'stretching' | 'balance';
    /** 예상 소요시간 (분) */
    duration?: number;
    /** 칼로리 소모량 */
    calories?: number;
    /** 운동 아이콘 또는 이모지 */
    icon?: React.ReactNode;
    /** 완료 상태 */
    isCompleted?: boolean;
    /** 즐겨찾기 상태 */
    isFavorite?: boolean;
    /** 너비 설정 ('fill'이면 부모 컨테이너 100%, 아니면 지정된 값) */
    width?: 'fill' | (string & {});
    /** 카드 클릭 핸들러 */
    onClick?: () => void;
    /** 즐겨찾기 토글 핸들러 */
    onFavoriteToggle?: () => void;
    /** 완료 토글 핸들러 */
    onCompleteToggle?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const ExerciseCard: React.FC<ExerciseCardProps>;

export { ExerciseCard, type ExerciseCardProps };
