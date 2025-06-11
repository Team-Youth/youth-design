import type { Meta, StoryObj } from '@storybook/react';
import { ExerciseCard } from '../components';
import React from 'react';

const meta: Meta<typeof ExerciseCard> = {
  title: 'Components/Exercise/ExerciseCard',
  component: ExerciseCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['cardio', 'strength', 'stretching', 'balance'],
    },
    isCompleted: {
      control: { type: 'boolean' },
    },
    isFavorite: {
      control: { type: 'boolean' },
    },
    width: {
      control: { type: 'text' },
      description: "'fill'이면 부모 컨테이너 100%, 아니면 지정된 값 (예: '400px', '50%')",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExerciseCard>;

export const Default: Story = {
  args: {
    title: '플랭크',
    description: '코어 근육을 강화하는 운동',
    type: 'strength',
    duration: 5,
    calories: 30,
    isCompleted: false,
    isFavorite: false,
  },
};

export const Cardio: Story = {
  args: {
    title: '러닝',
    description: '심폐지구력 향상을 위한 유산소 운동',
    type: 'cardio',
    duration: 30,
    calories: 300,
    isCompleted: false,
    isFavorite: false,
  },
};

export const Strength: Story = {
  args: {
    title: '스쿼트',
    description: '하체 근육을 강화하는 복합 운동',
    type: 'strength',
    duration: 10,
    calories: 80,
    isCompleted: false,
    isFavorite: false,
  },
};

export const Stretching: Story = {
  args: {
    title: '요가',
    description: '유연성과 균형감각을 기르는 운동',
    type: 'stretching',
    duration: 20,
    calories: 60,
    isCompleted: false,
    isFavorite: false,
  },
};

export const Balance: Story = {
  args: {
    title: '밸런스 볼',
    description: '균형감각과 코어를 단련하는 운동',
    type: 'balance',
    duration: 15,
    calories: 50,
    isCompleted: false,
    isFavorite: false,
  },
};

export const Completed: Story = {
  args: {
    title: '플랭크',
    description: '코어 근육을 강화하는 운동',
    type: 'strength',
    duration: 5,
    calories: 30,
    isCompleted: true,
    isFavorite: false,
  },
};

export const Favorite: Story = {
  args: {
    title: '요가',
    description: '유연성과 균형감각을 기르는 운동',
    type: 'stretching',
    duration: 20,
    calories: 80,
    isCompleted: false,
    isFavorite: true,
  },
};

export const CompletedAndFavorite: Story = {
  args: {
    title: '러닝',
    description: '심폐지구력 향상을 위한 유산소 운동',
    type: 'cardio',
    duration: 30,
    calories: 300,
    isCompleted: true,
    isFavorite: true,
  },
};

// Width 관련 스토리들
export const FullWidth: Story = {
  args: {
    title: '스쿼트',
    description: '하체 근육을 강화하는 복합 운동',
    type: 'strength',
    duration: 10,
    calories: 80,
    width: 'fill',
  },
};

export const FixedWidth400: Story = {
  args: {
    title: '요가',
    description: '유연성과 균형감각을 기르는 운동',
    type: 'stretching',
    duration: 20,
    calories: 60,
    width: '400px',
  },
};

export const FixedWidth600: Story = {
  args: {
    title: '자전거 타기',
    description: '야외에서 즐기는 유산소 운동',
    type: 'cardio',
    duration: 45,
    calories: 400,
    width: '600px',
  },
};

export const PercentageWidth: Story = {
  args: {
    title: '밸런스 볼',
    description: '균형감각과 코어를 단련하는 운동',
    type: 'balance',
    duration: 15,
    calories: 50,
    width: '80%',
  },
};

// 여러 카드를 나열한 데모
export const MultipleCardsDemo = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h3>다양한 너비 설정 예시</h3>

      <div style={{ marginBottom: '20px' }}>
        <h4>전체 너비 (fill)</h4>
        <ExerciseCard
          title="전체 너비 카드"
          description="부모 컨테이너의 100% 너비"
          type="cardio"
          duration={30}
          calories={300}
          width="fill"
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>고정 너비들</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ExerciseCard
            title="400px 카드"
            description="고정 너비 400px"
            type="strength"
            duration={10}
            calories={80}
            width="400px"
          />
          <ExerciseCard
            title="500px 카드"
            description="고정 너비 500px"
            type="stretching"
            duration={20}
            calories={60}
            width="500px"
          />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>퍼센트 너비</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ExerciseCard
            title="70% 카드"
            description="부모의 70% 너비"
            type="balance"
            duration={15}
            calories={50}
            width="70%"
          />
          <ExerciseCard
            title="50% 카드"
            description="부모의 50% 너비"
            type="cardio"
            duration={25}
            calories={200}
            width="50%"
          />
        </div>
      </div>
    </div>
  );
};

MultipleCardsDemo.storyName = '다양한 너비 설정 데모';
