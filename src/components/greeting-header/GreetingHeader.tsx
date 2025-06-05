import React, { useState, useEffect } from 'react';
import { colors } from '../../tokens/colors';
import { textStyles } from '../../tokens/typography';
import { spacing } from '../../tokens/spacing';
import { radius } from '../../tokens/radius';
import './GreetingHeader.css';

export interface GreetingHeaderProps {
  /** 사용자 이름 */
  userName?: string;
  /** 커스텀 인사말 (제공되면 기본 인사말 대신 사용) */
  customGreeting?: string;
  /** 날짜 표시 여부 */
  showDate?: boolean;
  /** 날씨 정보 */
  weather?: {
    temperature?: number;
    condition?: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
  };
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
}

const GreetingHeader: React.FC<GreetingHeaderProps> = ({
  userName = '익명',
  customGreeting,
  showDate = true,
  weather,
  onClick,
  className = '',
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 1분마다 업데이트

    return () => clearInterval(timer);
  }, []);

  // 시간대별 인사말 생성
  const getTimeBasedGreeting = () => {
    const hour = currentTime.getHours();

    if (hour >= 5 && hour < 12) {
      return {
        greeting: '좋은 아침이에요!',
        emoji: '🌅',
        bgGradient: 'linear-gradient(135deg, #FFE5B4 0%, #FFD700 100%)',
        textColor: colors.primary.gray[800],
      };
    } else if (hour >= 12 && hour < 18) {
      return {
        greeting: '활기찬 오후네요!',
        emoji: '☀️',
        bgGradient: 'linear-gradient(135deg, #87CEEB 0%, #4FC3F7 100%)',
        textColor: colors.semantic.background.primary,
      };
    } else if (hour >= 18 && hour < 22) {
      return {
        greeting: '좋은 저녁이에요!',
        emoji: '🌇',
        bgGradient: 'linear-gradient(135deg, #FF9A56 0%, #FF6B35 100%)',
        textColor: colors.semantic.background.primary,
      };
    } else {
      return {
        greeting: '늦은 시간이네요!',
        emoji: '🌙',
        bgGradient: 'linear-gradient(135deg, #2C3E50 0%, #4A6741 100%)',
        textColor: colors.semantic.background.primary,
      };
    }
  };

  // 날씨 아이콘 및 정보
  const getWeatherInfo = () => {
    if (!weather || !weather.condition) return null;

    const weatherIcons = {
      sunny: '☀️',
      cloudy: '☁️',
      rainy: '🌧️',
      snowy: '❄️',
    };

    return {
      icon: weatherIcons[weather.condition] || '🌤️',
      temp: weather.temperature,
    };
  };

  const timeGreeting = getTimeBasedGreeting();
  const weatherInfo = getWeatherInfo();
  const displayGreeting = customGreeting || timeGreeting.greeting;

  // 요일 및 날짜 포맷팅
  const formatDate = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const month = currentTime.getMonth() + 1;
    const date = currentTime.getDate();
    const day = days[currentTime.getDay()];

    return `${month}월 ${date}일 (${day})`;
  };

  const headerStyles: React.CSSProperties = {
    background: timeGreeting.bgGradient,
    padding: spacing.l,
    borderRadius: radius.l,
    position: 'relative',
    overflow: 'hidden',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.3s ease',
    minHeight: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <div className={`greeting-header ${className}`} style={headerStyles} onClick={onClick}>
      {/* 배경 장식 패턴 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '150px',
          height: '150px',
          background: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '15px 15px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      {/* 메인 인사말 영역 */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: spacing.s }}>
          <span style={{ fontSize: '32px', marginRight: spacing.s }}>{timeGreeting.emoji}</span>
          <div>
            <h1
              style={{
                ...textStyles.display1,
                color: timeGreeting.textColor,
                margin: 0,
                marginBottom: spacing.xxxs,
                textShadow: '0px 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              {displayGreeting}
            </h1>
            <p
              style={{
                ...textStyles.heading3,
                color: timeGreeting.textColor,
                margin: 0,
                opacity: 0.9,
              }}
            >
              {userName}님 💪
            </p>
          </div>
        </div>

        {/* 하단 정보 영역 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: spacing.m,
          }}
        >
          {/* 날짜 정보 */}
          {showDate && (
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
              <span style={{ fontSize: '16px' }}>📅</span>
              <span
                style={{
                  ...textStyles.body2,
                  color: timeGreeting.textColor,
                  opacity: 0.8,
                }}
              >
                {formatDate()}
              </span>
            </div>
          )}

          {/* 날씨 정보 */}
          {weatherInfo && (
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
              <span style={{ fontSize: '16px' }}>{weatherInfo.icon}</span>
              {weatherInfo.temp && (
                <span
                  style={{
                    ...textStyles.body2,
                    color: timeGreeting.textColor,
                    opacity: 0.8,
                  }}
                >
                  {weatherInfo.temp}°C
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 동기부여 메시지 (랜덤) */}
      <div
        style={{
          position: 'absolute',
          bottom: spacing.s,
          right: spacing.m,
          opacity: 0.7,
        }}
      >
        <span
          style={{
            ...textStyles.caption,
            color: timeGreeting.textColor,
            fontStyle: 'italic',
          }}
        >
          {getMotivationalMessage()}
        </span>
      </div>
    </div>
  );
};

// 동기부여 메시지 생성 함수
const getMotivationalMessage = (): string => {
  const messages = [
    '오늘도 화이팅! 💪',
    '한 걸음씩 나아가요 🚶‍♂️',
    '건강한 하루 되세요! 🌟',
    '당신은 할 수 있어요! ✨',
    '작은 변화, 큰 성장 🌱',
    '꾸준함이 답입니다 ⭐',
    '건강이 최고의 투자예요 💎',
  ];

  return messages[Math.floor(Math.random() * messages.length)];
};

export default GreetingHeader;
