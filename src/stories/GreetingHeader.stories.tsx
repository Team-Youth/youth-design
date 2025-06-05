import type { Meta, StoryObj } from '@storybook/react';
import { GreetingHeader } from '../components';

const meta: Meta<typeof GreetingHeader> = {
  title: 'Components/Exercise/GreetingHeader',
  component: GreetingHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    userName: {
      control: { type: 'text' },
    },
    customGreeting: {
      control: { type: 'text' },
    },
    showDate: {
      control: { type: 'boolean' },
    },
    weather: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GreetingHeader>;

export const Default: Story = {
  args: {
    userName: '김운동',
    showDate: true,
  },
};

export const WithWeather: Story = {
  args: {
    userName: '박건강',
    showDate: true,
    weather: {
      temperature: 22,
      condition: 'sunny',
    },
  },
};

export const CustomGreeting: Story = {
  args: {
    userName: '최피트니스',
    customGreeting: '바이바이요!!!',
    showDate: true,
    weather: {
      temperature: 18,
      condition: 'cloudy',
    },
  },
};

export const RainyDay: Story = {
  args: {
    userName: '이운동',
    showDate: true,
    weather: {
      temperature: 15,
      condition: 'rainy',
    },
  },
};

export const SnowyDay: Story = {
  args: {
    userName: '정헬스',
    showDate: true,
    weather: {
      temperature: -2,
      condition: 'snowy',
    },
  },
};

export const MinimalVersion: Story = {
  args: {
    userName: '익명',
    showDate: false,
  },
};

export const MotivationalMessage: Story = {
  args: {
    userName: '홍길동',
    customGreeting: '오늘도 화이팅! 💪',
    showDate: true,
    weather: {
      temperature: 25,
      condition: 'sunny',
    },
  },
};
