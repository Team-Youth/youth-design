import React from 'react';
import './ActivityGoalCard.css';
export interface ActivityGoalCardProps {
    /** 목표 제목 */
    title: string;
    /** 목표 설명 */
    description?: string;
    /** 현재 진행 값 */
    currentValue: number;
    /** 목표 값 */
    goalValue: number;
    /** 단위 (예: 분, 회, kcal) */
    unit: string;
    /** 목표 타입에 따른 색상 테마 */
    theme?: 'primary' | 'success' | 'warning' | 'info';
    /** 아이콘 */
    icon?: React.ReactNode;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const ActivityGoalCard: React.FC<ActivityGoalCardProps>;
export default ActivityGoalCard;
