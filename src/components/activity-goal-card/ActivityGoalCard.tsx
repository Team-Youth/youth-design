import React from 'react';
import { colors } from '../../tokens/colors';
import { textStyles } from '../../tokens/typography';
import { spacing } from '../../tokens/spacing';
import { radius } from '../../tokens/radius';
import { shadows } from '../../tokens/shadows';
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

const ActivityGoalCard: React.FC<ActivityGoalCardProps> = ({
  title,
  description,
  currentValue,
  goalValue,
  unit,
  theme = 'primary',
  icon,
  onClick,
  className = '',
}) => {
  // 진행률 계산
  const progressPercentage = Math.min((currentValue / goalValue) * 100, 100);
  const isCompleted = progressPercentage >= 100;

  // 테마별 색상 설정
  const themeConfig = {
    primary: {
      color: colors.primary.mainviolet,
      bgColor: colors.primary.tint.violet[50],
      lightColor: colors.primary.tint.violet[100],
    },
    success: {
      color: colors.semantic.state.success,
      bgColor: colors.primary.tint.green[50],
      lightColor: colors.primary.tint.green[100],
    },
    warning: {
      color: colors.semantic.state.warning,
      bgColor: colors.primary.tint.yellow[50],
      lightColor: colors.primary.tint.yellow[100],
    },
    info: {
      color: colors.semantic.state.info,
      bgColor: colors.primary.tint.blue[50],
      lightColor: colors.primary.tint.blue[100],
    },
  };

  const currentTheme = themeConfig[theme];

  const cardStyles: React.CSSProperties = {
    padding: spacing.l,
    backgroundColor: currentTheme.bgColor,
    border: `1px solid ${currentTheme.lightColor}`,
    borderRadius: radius.l,
    boxShadow: shadows.s,
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const progressBarStyles: React.CSSProperties = {
    width: '100%',
    height: '8px',
    backgroundColor: colors.semantic.background.secondary,
    borderRadius: radius.xs,
    overflow: 'hidden',
    position: 'relative',
  };

  const progressFillStyles: React.CSSProperties = {
    height: '100%',
    backgroundColor: currentTheme.color,
    borderRadius: radius.xs,
    width: `${progressPercentage}%`,
    transition: 'width 0.5s ease',
    position: 'relative',
  };

  return (
    <div
      className={`activity-goal-card ${className} ${isCompleted ? 'completed' : ''}`}
      style={cardStyles}
      onClick={onClick}
    >
      {/* 완료 상태 장식 */}
      {isCompleted && (
        <div
          style={{
            position: 'absolute',
            top: spacing.s,
            right: spacing.s,
            fontSize: '20px',
            animation: 'bounce 0.6s ease-in-out',
          }}
        >
          🎉
        </div>
      )}

      {/* 헤더 영역 */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: spacing.m }}>
        {icon && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              backgroundColor: currentTheme.color,
              color: colors.semantic.background.primary,
              borderRadius: radius.s,
              marginRight: spacing.s,
              fontSize: '18px',
            }}
          >
            {icon}
          </div>
        )}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              ...textStyles.heading3,
              color: colors.semantic.text.primary,
              margin: 0,
              marginBottom: spacing.xxxs,
            }}
          >
            {title}
          </h3>
          {description && (
            <p
              style={{
                ...textStyles.body3,
                color: colors.semantic.text.secondary,
                margin: 0,
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {/* 진행 상황 수치 */}
      <div style={{ marginBottom: spacing.s }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: spacing.xxxs }}>
            <span
              style={{
                ...textStyles.display2,
                color: currentTheme.color,
                fontWeight: 700,
              }}
            >
              {currentValue.toLocaleString()}
            </span>
            <span
              style={{
                ...textStyles.body2,
                color: colors.semantic.text.secondary,
              }}
            >
              {unit}
            </span>
          </div>
          <span
            style={{
              ...textStyles.body3,
              color: colors.semantic.text.tertiary,
            }}
          >
            목표: {goalValue.toLocaleString()}
            {unit}
          </span>
        </div>
      </div>

      {/* 진행 바 */}
      <div style={progressBarStyles}>
        <div style={progressFillStyles}>
          {/* 진행 바 내부 하이라이트 효과 */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '50%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
              borderRadius: `${radius.xs} ${radius.xs} 0 0`,
            }}
          />
        </div>
      </div>

      {/* 진행률 텍스트 */}
      <div style={{ marginTop: spacing.s, textAlign: 'center' }}>
        <span
          style={{
            ...textStyles.caption,
            color: isCompleted ? currentTheme.color : colors.semantic.text.tertiary,
            fontWeight: isCompleted ? 600 : 400,
          }}
        >
          {isCompleted ? '목표 달성! 🎯' : `${progressPercentage.toFixed(1)}% 달성`}
        </span>
      </div>

      {/* 배경 패턴 (선택적) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100px',
          background: `radial-gradient(circle, ${currentTheme.lightColor} 1px, transparent 1px)`,
          backgroundSize: '12px 12px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default ActivityGoalCard;
