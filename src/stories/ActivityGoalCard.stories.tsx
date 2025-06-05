import type { Meta, StoryObj } from '@storybook/react';
import { ActivityGoalCard } from '../components';

const meta: Meta<typeof ActivityGoalCard> = {
  title: 'Components/Exercise/ActivityGoalCard',
  component: ActivityGoalCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'info'],
    },
    currentValue: {
      control: { type: 'number' },
    },
    goalValue: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActivityGoalCard>;

export const DailySteps: Story = {
  args: {
    title: '일일 걸음수',
    description: '건강한 하루를 위한 목표',
    currentValue: 7500,
    goalValue: 10000,
    unit: '보',
    theme: 'primary',
    icon: '👟',
  },
};

export const WeeklyExercise: Story = {
  args: {
    title: '주간 운동시간',
    description: '이번 주 운동 목표',
    currentValue: 180,
    goalValue: 300,
    unit: '분',
    theme: 'success',
    icon: '⏱️',
  },
};

export const CalorieBurn: Story = {
  args: {
    title: '칼로리 소모',
    description: '오늘의 칼로리 소모 목표',
    currentValue: 320,
    goalValue: 400,
    unit: 'kcal',
    theme: 'warning',
    icon: '🔥',
  },
};

export const WaterIntake: Story = {
  args: {
    title: '수분 섭취',
    description: '하루 권장 수분 섭취량',
    currentValue: 1.5,
    goalValue: 2.0,
    unit: 'L',
    theme: 'info',
    icon: '💧',
  },
};

export const CompletedGoal: Story = {
  args: {
    title: '일일 걸음수',
    description: '목표 달성 완료!',
    currentValue: 12000,
    goalValue: 10000,
    unit: '보',
    theme: 'success',
    icon: '👟',
  },
};

export const NearCompletion: Story = {
  args: {
    title: '운동 시간',
    description: '거의 다 왔어요!',
    currentValue: 285,
    goalValue: 300,
    unit: '분',
    theme: 'primary',
    icon: '⏰',
  },
};

export const JustStarted: Story = {
  args: {
    title: '독서 시간',
    description: '꾸준히 읽어보세요',
    currentValue: 15,
    goalValue: 60,
    unit: '분',
    theme: 'info',
    icon: '📚',
  },
};
