import type { Meta, StoryObj } from '@storybook/react';
import { Chips } from '../../components/chips/Chips';
import React from 'react';

// 아이콘 예시들
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
  </svg>
);

const TagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2zm1.5 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z" />
  </svg>
);

const meta: Meta<typeof Chips> = {
  title: 'Components/Chips',
  component: Chips,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Chips는 선택 가능한 컴팩트한 요소로, 사용자가 정보를 입력하거나 선택, 필터링, 그리고 특정 액션을 유도할 때 사용됩니다. 칩은 상품 리스트를 필터링하는 기능으로 활용됩니다.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'medium'],
      description: '칩의 크기',
    },
    type: {
      control: { type: 'select' },
      options: ['square', 'capsule'],
      description: '칩의 모양',
    },
    state: {
      control: { type: 'select' },
      options: ['hover', 'selected', 'disabled', 'resting'],
      description: '칩의 상태',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['leading', 'trailing'],
      description: '아이콘의 위치',
    },
    children: {
      control: { type: 'text' },
      description: '칩 텍스트',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: 'Chip',
    size: 'medium',
    type: 'capsule',
    state: 'resting',
  },
};

// 크기별 스토리
export const Large: Story = {
  args: {
    children: 'Large Chip',
    size: 'large',
    type: 'capsule',
    state: 'resting',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Chip',
    size: 'medium',
    type: 'capsule',
    state: 'resting',
  },
};

// 타입별 스토리
export const Capsule: Story = {
  args: {
    children: 'Capsule Chip',
    type: 'capsule',
    state: 'resting',
  },
};

export const Square: Story = {
  args: {
    children: 'Square Chip',
    type: 'square',
    state: 'resting',
  },
};

// 상태별 스토리
export const Resting: Story = {
  args: {
    children: 'Resting',
    state: 'resting',
  },
};

export const Hover: Story = {
  args: {
    children: 'Hover',
    state: 'hover',
  },
};

export const Selected: Story = {
  args: {
    children: 'Selected',
    state: 'selected',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    state: 'disabled',
  },
};

// 아이콘이 있는 스토리
export const WithLeadingIcon: Story = {
  args: {
    children: 'Tag',
    icon: <TagIcon />,
    iconPosition: 'leading',
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: 'Remove',
    icon: <CloseIcon />,
    iconPosition: 'trailing',
  },
};

export const SelectedWithIcon: Story = {
  args: {
    children: 'Selected',
    icon: <CheckIcon />,
    iconPosition: 'leading',
    state: 'selected',
  },
};

export const IconOnly: Story = {
  args: {
    icon: <StarIcon />,
  },
};

// 모든 상태 조합
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Chips state="resting">Resting</Chips>
        <Chips state="hover">Hover</Chips>
        <Chips state="selected">Selected</Chips>
        <Chips state="disabled">Disabled</Chips>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Chips state="resting" icon={<TagIcon />} iconPosition="leading">
          With Icon
        </Chips>
        <Chips state="selected" icon={<CheckIcon />} iconPosition="leading">
          Selected + Icon
        </Chips>
        <Chips state="disabled" icon={<CloseIcon />} iconPosition="trailing">
          Disabled + Icon
        </Chips>
      </div>
    </div>
  ),
};

// 크기와 타입 조합
export const AllSizesAndTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Chips size="large" type="capsule">
          Large Capsule
        </Chips>
        <Chips size="large" type="square">
          Large Square
        </Chips>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Chips size="medium" type="capsule">
          Medium Capsule
        </Chips>
        <Chips size="medium" type="square">
          Medium Square
        </Chips>
      </div>
    </div>
  ),
};

// 필터링 예시
export const FilterExample: Story = {
  render: () => {
    const categories = ['전체', '의료진', '환자', '관리자', '시스템'];
    const selectedCategory = '의료진';

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {categories.map((category) => (
          <Chips
            key={category}
            state={category === selectedCategory ? 'selected' : 'resting'}
            onClick={() => console.log(`${category} 선택됨`)}
          >
            {category}
          </Chips>
        ))}
      </div>
    );
  },
};

// 태그 예시
export const TagExample: Story = {
  render: () => {
    const tags = [
      { label: '긴급', removable: true },
      { label: '중요', removable: true },
      { label: '일반', removable: false },
      { label: '완료', removable: true },
    ];

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Chips
            key={tag.label}
            icon={tag.removable ? <CloseIcon /> : undefined}
            iconPosition="trailing"
            onClick={() => console.log(`${tag.label} ${tag.removable ? '삭제' : '클릭'}됨`)}
          >
            {tag.label}
          </Chips>
        ))}
      </div>
    );
  },
};
