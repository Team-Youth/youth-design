import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { SearchField, SearchSuggestionItem } from '../../components/search-field/SearchField';

const meta = {
  title: 'Components/SearchField',
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['m', 'l'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showSuggestions: {
      control: { type: 'boolean' },
    },
    width: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 검색 제안 데이터
const sampleSuggestions: SearchSuggestionItem[] = [
  {
    text: '운동 계획',
    description: '개인 맞춤 운동 계획을 세워보세요',
    leadingIconType: 'calendar',
    trailingIconType: 'arrow-right',
  },
  {
    text: '영양 관리',
    description: '건강한 식단 관리법',
    leadingIconType: 'heart',
  },
  {
    text: '홈트레이닝',
    description: '집에서 할 수 있는 운동',
    leadingIconType: 'home',
    trailingIconType: 'check',
  },
  {
    text: '프리미엄 코치',
    description: '전문 코치와 함께하는 운동',
    leadingIconType: 'person-filled',
    disabled: true,
  },
];

export const Default: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    size: 'l',
    width: '320px',
    suggestions: sampleSuggestions,
    showSuggestions: false,
  },
};

export const WithSuggestions: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    size: 'l',
    width: '320px',
    suggestions: sampleSuggestions,
    showSuggestions: true,
  },
};

export const EmptySuggestions: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    size: 'l',
    width: '320px',
    suggestions: [],
    showSuggestions: true,
    noResultsText: '검색 결과가 없습니다',
  },
};

export const SizeM: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    size: 'm',
    width: '320px',
    suggestions: sampleSuggestions,
    showSuggestions: true,
  },
};

export const FillWidth: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    size: 'l',
    width: 'fill',
    suggestions: sampleSuggestions,
    showSuggestions: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    size: 'l',
    width: '320px',
    disabled: true,
    suggestions: sampleSuggestions,
    showSuggestions: false,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleChange = (newValue: string) => {
      setValue(newValue);
      setShowSuggestions(newValue.length > 0);
    };

    const handleSuggestionClick = (suggestion: SearchSuggestionItem) => {
      setValue(suggestion.text);
      setShowSuggestions(false);
    };

    return (
      <SearchField
        {...args}
        value={value}
        onChange={handleChange}
        suggestions={sampleSuggestions}
        showSuggestions={showSuggestions}
        onSuggestionClick={handleSuggestionClick}
        placeholder="검색어를 입력하세요"
        size="l"
        width="320px"
      />
    );
  },
};

export const OnlyIcons: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    size: 'l',
    width: '320px',
    suggestions: [
      {
        text: '홈',
        leadingIconType: 'home',
      },
      {
        text: '하트',
        leadingIconType: 'heart',
        trailingIconType: 'check',
      },
      {
        text: '캘린더',
        leadingIconType: 'calendar',
      },
      {
        text: '잠금됨',
        leadingIconType: 'settings-stroke',
        disabled: true,
      },
    ],
    showSuggestions: true,
  },
};

export const WithDescriptions: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    size: 'l',
    width: '400px',
    suggestions: [
      {
        text: '운동 계획 세우기',
        description:
          '개인 맞춤형 운동 계획을 세워보세요. 목표에 맞는 운동 프로그램을 추천해드립니다.',
        leadingIconType: 'calendar',
      },
      {
        text: '영양 관리',
        description: '건강한 식단 관리와 영양 상담을 받아보세요.',
        leadingIconType: 'heart',
        trailingIconType: 'arrow-right',
      },
      {
        text: '프리미엄 서비스',
        description: '전문 트레이너와 1:1 코칭 서비스입니다.',
        leadingIconType: 'person-filled',
        disabled: true,
      },
    ],
    showSuggestions: true,
  },
};
