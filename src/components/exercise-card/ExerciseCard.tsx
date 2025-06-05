import React, { useState } from 'react';
import { colors } from '../../tokens/colors';
import { textStyles } from '../../tokens/typography';
import { spacing } from '../../tokens/spacing';
import { radius } from '../../tokens/radius';
import { shadows } from '../../tokens/shadows';
import './ExerciseCard.css';

export interface ExerciseCardProps {
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

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  description,
  type = 'cardio',
  duration,
  calories,
  icon,
  isCompleted = false,
  isFavorite = false,
  width = '300px',
  onClick,
  onFavoriteToggle,
  onCompleteToggle,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // 운동 타입별 색상 및 아이콘
  const typeConfig = {
    cardio: {
      color: colors.primary.tint.blue[500],
      bgColor: colors.primary.tint.blue[50],
      icon: '🏃‍♂️',
      label: '유산소',
    },
    strength: {
      color: colors.primary.tint.red[500],
      bgColor: colors.primary.tint.red[50],
      icon: '💪',
      label: '근력',
    },
    stretching: {
      color: colors.primary.tint.green[500],
      bgColor: colors.primary.tint.green[50],
      icon: '🧘‍♀️',
      label: '스트레칭',
    },
    balance: {
      color: colors.primary.tint.violet[500],
      bgColor: colors.primary.tint.violet[50],
      icon: '⚖️',
      label: '밸런스',
    },
  };

  const currentTypeConfig = typeConfig[type];

  // width 동적 설정
  const getWidth = () => {
    if (width === 'fill') {
      return '100%';
    }
    return width;
  };

  const cardStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: spacing.m,
    backgroundColor: isCompleted ? colors.primary.coolGray[50] : colors.semantic.background.primary,
    border: `1px solid ${isHovered ? currentTypeConfig.color : colors.semantic.border.default}`,
    borderRadius: radius.m,
    boxShadow: isHovered ? shadows.m : shadows.s,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    opacity: isCompleted ? 0.7 : 1,
    position: 'relative',
    overflow: 'hidden',
    width: getWidth(),
    minWidth: '300px', // 최소 너비 설정
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) onClick();
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onFavoriteToggle) onFavoriteToggle();
  };

  const handleCompleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onCompleteToggle) onCompleteToggle();
  };

  return (
    <div
      className={`exercise-card ${className}`}
      style={{ ...cardStyles }}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 완료 상태 표시 스트라이프 */}
      {isCompleted && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            backgroundColor: colors.semantic.state.success,
          }}
        />
      )}

      {/* 운동 타입 아이콘 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          backgroundColor: currentTypeConfig.bgColor,
          borderRadius: radius.s,
          marginRight: spacing.m,
          fontSize: '20px',
        }}
      >
        {icon || currentTypeConfig.icon}
      </div>

      {/* 메인 콘텐츠 */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: spacing.xxs }}>
          <h3
            style={{
              ...textStyles.heading4,
              color: isCompleted ? colors.semantic.text.tertiary : colors.semantic.text.primary,
              margin: 0,
              textDecoration: isCompleted ? 'line-through' : 'none',
            }}
          >
            {title}
          </h3>
          <span
            style={{
              ...textStyles.caption,
              color: currentTypeConfig.color,
              backgroundColor: currentTypeConfig.bgColor,
              padding: `${spacing.xxxs} ${spacing.xs}`,
              borderRadius: radius.xs,
              marginLeft: spacing.xs,
              fontSize: '10px',
              fontWeight: 500,
            }}
          >
            {currentTypeConfig.label}
          </span>
        </div>

        {description && (
          <p
            style={{
              ...textStyles.body3,
              color: colors.semantic.text.secondary,
              margin: 0,
              marginBottom: spacing.xs,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {description}
          </p>
        )}

        {/* 운동 정보 */}
        <div style={{ display: 'flex', gap: spacing.m, alignItems: 'center' }}>
          {duration && (
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xxs }}>
              <span style={{ fontSize: '12px' }}>⏱️</span>
              <span
                style={{
                  ...textStyles.caption,
                  color: colors.semantic.text.tertiary,
                }}
              >
                {duration}분
              </span>
            </div>
          )}
          {calories && (
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xxs }}>
              <span style={{ fontSize: '12px' }}>🔥</span>
              <span
                style={{
                  ...textStyles.caption,
                  color: colors.semantic.text.tertiary,
                }}
              >
                {calories}kcal
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 액션 버튼들 */}
      <div style={{ display: 'flex', gap: spacing.xs, alignItems: 'center' }}>
        {/* 즐겨찾기 버튼 */}
        <button
          onClick={handleFavoriteClick}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            padding: spacing.xxs,
            borderRadius: radius.xs,
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          title={isFavorite ? '즐겨찾기 해제' : '즐겨찾기 추가'}
        >
          {isFavorite ? '⭐' : '☆'}
        </button>

        {/* 완료 버튼 */}
        <button
          onClick={handleCompleteClick}
          style={{
            background: 'none',
            border: `1px solid ${isCompleted ? colors.semantic.state.success : colors.semantic.border.default}`,
            cursor: 'pointer',
            padding: spacing.xs,
            borderRadius: radius.xs,
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isCompleted ? colors.semantic.state.success : 'transparent',
          }}
          title={isCompleted ? '완료 취소' : '완료 표시'}
        >
          <span
            style={{
              fontSize: '12px',
              color: isCompleted
                ? colors.semantic.background.primary
                : colors.semantic.text.tertiary,
            }}
          >
            {isCompleted ? '✓' : '○'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
