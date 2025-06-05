import type { Meta, StoryObj } from '@storybook/react';
import { ExerciseList, Exercise } from '../components';

const meta: Meta<typeof ExerciseList> = {
  title: 'Components/Exercise/ExerciseList',
  component: ExerciseList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    showFilters: {
      control: { type: 'boolean' },
    },
    showSearch: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExerciseList>;

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
  {
    id: '7',
    title: '푸시업',
    description: '상체 근력을 기르는 기본 운동',
    type: 'strength',
    duration: 8,
    calories: 40,
    isCompleted: true,
    isFavorite: false,
  },
  {
    id: '8',
    title: '스트레칭',
    description: '운동 후 마무리 스트레칭',
    type: 'stretching',
    duration: 10,
    calories: 20,
    isCompleted: false,
    isFavorite: false,
  },
];

export const FullList: Story = {
  args: {
    exercises: sampleExercises,
    showFilters: true,
    showSearch: true,
  },
};

export const WithoutFilters: Story = {
  args: {
    exercises: sampleExercises,
    showFilters: false,
    showSearch: true,
  },
};

export const WithoutSearch: Story = {
  args: {
    exercises: sampleExercises,
    showFilters: true,
    showSearch: false,
  },
};

export const MinimalList: Story = {
  args: {
    exercises: sampleExercises,
    showFilters: false,
    showSearch: false,
  },
};

export const ShortList: Story = {
  args: {
    exercises: sampleExercises.slice(0, 3),
    showFilters: true,
    showSearch: true,
  },
};

export const EmptyList: Story = {
  args: {
    exercises: [],
    showFilters: true,
    showSearch: true,
    emptyMessage: '아직 등록된 운동이 없어요!',
    emptyIcon: '💪',
  },
};

export const CustomEmptyState: Story = {
  args: {
    exercises: [],
    showFilters: false,
    showSearch: false,
    emptyMessage: '새로운 운동을 시작해보세요!',
    emptyIcon: '🏃‍♂️',
  },
};
