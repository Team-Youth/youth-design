import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import {
  GreetingHeader,
  ActivityGoalCard,
  ExerciseList,
  ExerciseCard,
  Exercise,
} from '../components';

// 데모 컴포넌트를 위한 메타 정의
const meta: Meta = {
  title: 'Demo/Exercise App Demo',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '운동 앱의 모든 컴포넌트들을 함께 사용하는 완전한 데모입니다. "바이바이요!!!" 인사말과 함께 실제 앱처럼 동작합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const sampleExercises: Exercise[] = [
  {
    id: '1',
    title: '플랭크',
    description: '코어 근육 강화를 위한 정적 운동',
    type: 'strength',
    duration: 5,
    calories: 30,
    isCompleted: true,
    isFavorite: false,
  },
  {
    id: '2',
    title: '러닝',
    description: '심폐지구력 향상을 위한 유산소 운동',
    type: 'cardio',
    duration: 30,
    calories: 300,
    isCompleted: false,
    isFavorite: true,
  },
  {
    id: '3',
    title: '스쿼트',
    description: '하체 근육을 강화하는 복합 운동',
    type: 'strength',
    duration: 10,
    calories: 80,
    isCompleted: false,
    isFavorite: false,
  },
  {
    id: '4',
    title: '요가',
    description: '유연성과 균형감각을 기르는 운동',
    type: 'stretching',
    duration: 20,
    calories: 60,
    isCompleted: true,
    isFavorite: true,
  },
  {
    id: '5',
    title: '밸런스 볼',
    description: '균형감각과 코어를 단련하는 운동',
    type: 'balance',
    duration: 15,
    calories: 50,
    isCompleted: false,
    isFavorite: false,
  },
  {
    id: '6',
    title: '자전거 타기',
    description: '야외에서 즐기는 유산소 운동',
    type: 'cardio',
    duration: 45,
    calories: 400,
    isCompleted: false,
    isFavorite: true,
  },
];

// 실제 상호작용이 가능한 데모 컴포넌트
export const InteractiveExerciseDemo = () => {
  const [exercises, setExercises] = useState<Exercise[]>(sampleExercises);

  const handleFavoriteToggle = (exerciseId: string) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === exerciseId ? { ...ex, isFavorite: !ex.isFavorite } : ex)),
    );
  };

  const handleCompleteToggle = (exerciseId: string) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === exerciseId ? { ...ex, isCompleted: !ex.isCompleted } : ex)),
    );
  };

  const handleExerciseClick = (exercise: Exercise) => {
    console.log('운동 클릭:', exercise.title);
    alert(`${exercise.title} 운동을 선택했습니다!`);
  };

  // 통계 계산
  const completedExercises = exercises.filter((ex) => ex.isCompleted).length;
  const totalDuration = exercises
    .filter((ex) => ex.isCompleted)
    .reduce((sum, ex) => sum + (ex.duration || 0), 0);
  const totalCalories = exercises
    .filter((ex) => ex.isCompleted)
    .reduce((sum, ex) => sum + (ex.calories || 0), 0);

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
      }}
    >
      {/* 인사말 헤더 */}
      <div style={{ marginBottom: '24px' }}>
        <GreetingHeader
          userName="김운동"
          customGreeting="바이바이요!!!"
          showDate={true}
          weather={{
            temperature: 22,
            condition: 'sunny',
          }}
          onClick={() => alert('헤더 클릭!')}
        />
      </div>

      {/* 활동 목표 카드들 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        <ActivityGoalCard
          title="일일 걸음수"
          description="오늘의 걸음수 목표"
          currentValue={7500}
          goalValue={10000}
          unit="보"
          theme="primary"
          icon="👟"
          onClick={() => alert('걸음수 목표 카드 클릭!')}
        />
        <ActivityGoalCard
          title="완료한 운동"
          description="오늘 완료한 운동 수"
          currentValue={completedExercises}
          goalValue={exercises.length}
          unit="개"
          theme="success"
          icon="✅"
        />
        <ActivityGoalCard
          title="운동 시간"
          description="오늘 운동한 총 시간"
          currentValue={totalDuration}
          goalValue={60}
          unit="분"
          theme="info"
          icon="⏱️"
        />
        <ActivityGoalCard
          title="칼로리 소모"
          description="오늘 소모한 칼로리"
          currentValue={totalCalories}
          goalValue={500}
          unit="kcal"
          theme="warning"
          icon="🔥"
        />
      </div>

      {/* 운동 목록 */}
      <ExerciseList
        exercises={exercises}
        onExerciseClick={handleExerciseClick}
        onFavoriteToggle={handleFavoriteToggle}
        onCompleteToggle={handleCompleteToggle}
        showFilters={true}
        showSearch={true}
      />

      {/* 하단 설명 */}
      <div
        style={{
          marginTop: '40px',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e0e0e0',
        }}
      >
        <h3 style={{ marginTop: 0, color: '#333' }}>💡 데모 사용법</h3>
        <ul style={{ color: '#666', lineHeight: '1.6' }}>
          <li>⭐ 즐겨찾기 버튼을 클릭해보세요</li>
          <li>✅ 완료 체크 버튼으로 운동을 완료 표시해보세요</li>
          <li>🔍 검색창에서 운동을 검색해보세요</li>
          <li>🏷️ 필터 버튼으로 운동 타입별로 필터링해보세요</li>
          <li>📊 운동 완료시 상단 목표 카드가 업데이트됩니다</li>
          <li>🎯 각 카드를 클릭하면 알림이 나타납니다</li>
        </ul>
      </div>
    </div>
  );
};

// Storybook에서 올바르게 인식되도록 storyName 설정
InteractiveExerciseDemo.storyName = '🏃‍♂️ 상호작용 데모';

// 추가 스토리들
export const SimpleDemo = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <GreetingHeader userName="박건강" customGreeting="안녕하세요!" showDate={true} />

      <div style={{ marginTop: '20px' }}>
        <ActivityGoalCard
          title="오늘의 목표"
          description="꾸준한 운동으로 건강을 지켜요"
          currentValue={3}
          goalValue={5}
          unit="회"
          theme="primary"
          icon="🎯"
        />
      </div>
    </div>
  );
};

SimpleDemo.storyName = '🎯 간단한 데모';

export const EmptyStateDemo = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <GreetingHeader
        userName="새로운 사용자"
        customGreeting="운동을 시작해보세요!"
        showDate={true}
      />

      <div style={{ marginTop: '20px' }}>
        <ExerciseList exercises={[]} emptyMessage="첫 운동을 등록해보세요!" emptyIcon="🌟" />
      </div>
    </div>
  );
};

EmptyStateDemo.storyName = '🌟 빈 상태 데모';

// Width 활용 레이아웃 데모
export const LayoutDemo = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h2>다양한 레이아웃 예시</h2>

      {/* 그리드 레이아웃 */}
      <div style={{ marginBottom: '40px' }}>
        <h3>2열 그리드 레이아웃</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          <ExerciseCard
            title="플랭크"
            description="코어 근육 강화"
            type="strength"
            duration={5}
            calories={30}
            width="fill"
          />
          <ExerciseCard
            title="러닝"
            description="유산소 운동"
            type="cardio"
            duration={30}
            calories={300}
            width="fill"
          />
        </div>
      </div>

      {/* 3열 그리드 레이아웃 */}
      <div style={{ marginBottom: '40px' }}>
        <h3>3열 그리드 레이아웃</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          <ExerciseCard
            title="스쿼트"
            description="하체 근력"
            type="strength"
            duration={10}
            calories={80}
            width="fill"
          />
          <ExerciseCard
            title="요가"
            description="유연성 향상"
            type="stretching"
            duration={20}
            calories={60}
            width="fill"
          />
          <ExerciseCard
            title="밸런스"
            description="균형감각"
            type="balance"
            duration={15}
            calories={50}
            width="fill"
          />
        </div>
      </div>

      {/* 중앙 정렬 고정 너비 */}
      <div style={{ marginBottom: '40px' }}>
        <h3>중앙 정렬 고정 너비</h3>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <ExerciseCard
            title="집중 운동"
            description="특별한 운동 프로그램"
            type="cardio"
            duration={45}
            calories={400}
            width="500px"
            isFavorite={true}
          />
        </div>
      </div>

      {/* 플렉스 레이아웃 */}
      <div style={{ marginBottom: '40px' }}>
        <h3>플렉스 레이아웃 (다양한 비율)</h3>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
          <div style={{ flex: '2' }}>
            <ExerciseCard
              title="메인 운동"
              description="주요 운동 프로그램 (넓음)"
              type="strength"
              duration={25}
              calories={200}
              width="fill"
            />
          </div>
          <div style={{ flex: '1' }}>
            <ExerciseCard
              title="보조 운동"
              description="보조 운동 (좁음)"
              type="stretching"
              duration={10}
              calories={40}
              width="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

LayoutDemo.storyName = '📐 레이아웃 데모';
