import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../../components/chip/Chip';
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

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Chip는 선택 가능한 컴팩트한 요소로, 사용자가 정보를 입력하거나 선택, 필터링, 그리고 특정 액션을 유도할 때 사용됩니다. 칩은 상품 리스트를 필터링하는 기능으로 활용됩니다.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['l', 'm'],
      description: '칩의 크기',
    },
    type: {
      control: { type: 'select' },
      options: ['square', 'capsule'],
      description: '칩의 모양',
    },
    selected: {
      control: { type: 'boolean' },
      description: '선택 상태',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태',
    },
    leadingIcon: {
      control: { type: 'select' },
      options: [
        undefined,
        'location-filled',
        'check-circle-filled',
        'add-circle-filled',
        'heart-filled',
        'star',
        'search',
        'close',
      ],
      description: '앞쪽 아이콘',
    },
    trailingIcon: {
      control: { type: 'select' },
      options: [undefined, 'chevron-right', 'close', 'arrow-right', 'more'],
      description: '뒤쪽 아이콘',
    },
    text: {
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
    text: 'Chip',
    size: 'm',
    type: 'capsule',
    selected: false,
    disabled: false,
  },
};

// 크기별 스토리
export const Large: Story = {
  args: {
    text: 'Large Chip',
    size: 'l',
    type: 'capsule',
    selected: false,
    disabled: false,
  },
};

export const Medium: Story = {
  args: {
    text: 'Medium Chip',
    size: 'm',
    type: 'capsule',
    selected: false,
    disabled: false,
  },
};

// 타입별 스토리
export const Capsule: Story = {
  args: {
    text: 'Capsule Chip',
    type: 'capsule',
    selected: false,
    disabled: false,
  },
};

export const Square: Story = {
  args: {
    text: 'Square Chip',
    type: 'square',
    selected: false,
    disabled: false,
  },
};

// 상태별 스토리
export const Resting: Story = {
  args: {
    text: 'Resting',
    selected: false,
    disabled: false,
  },
};

export const Selected: Story = {
  args: {
    text: 'Selected',
    selected: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    selected: false,
    disabled: true,
  },
};

// 아이콘이 있는 스토리
export const WithLeadingIcon: Story = {
  args: {
    text: 'Location',
    leadingIcon: 'location-filled',
    selected: false,
    disabled: false,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    text: 'More',
    trailingIcon: 'chevron-right',
    selected: false,
    disabled: false,
  },
};

export const SelectedWithIcon: Story = {
  args: {
    text: 'Selected',
    leadingIcon: 'check-circle-filled',
    selected: true,
    disabled: false,
  },
};

export const WithBothIcons: Story = {
  args: {
    text: 'Both Icons',
    leadingIcon: 'location-filled',
    trailingIcon: 'chevron-right',
    selected: false,
    disabled: false,
  },
};

// 모든 상태 조합
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Chip text="Resting" selected={false} disabled={false} />
        <Chip text="Selected" selected={true} disabled={false} />
        <Chip text="Disabled" selected={false} disabled={true} />
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Chip text="With Icon" leadingIcon="location-filled" selected={false} disabled={false} />
        <Chip
          text="Selected + Icon"
          leadingIcon="check-circle-filled"
          selected={true}
          disabled={false}
        />
        <Chip text="Trailing Icon" trailingIcon="chevron-right" selected={false} disabled={false} />
      </div>
    </div>
  ),
};

// 크기와 타입 조합
export const SizeAndTypeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <div>
        <h3 style={{ margin: '0 0 12px 0', textAlign: 'center' }}>Large Size</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Chip text="Capsule" size="l" type="capsule" />
          <Chip text="Square" size="l" type="square" />
          <Chip text="With Icon" size="l" type="capsule" leadingIcon="location-filled" />
          <Chip text="Selected" size="l" type="capsule" selected={true} />
        </div>
      </div>
      <div>
        <h3 style={{ margin: '0 0 12px 0', textAlign: 'center' }}>Medium Size</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Chip text="Capsule" size="m" type="capsule" />
          <Chip text="Square" size="m" type="square" />
          <Chip text="With Icon" size="m" type="capsule" leadingIcon="location-filled" />
          <Chip text="Selected" size="m" type="capsule" selected={true} />
        </div>
      </div>
    </div>
  ),
};

// 완전한 예시 (Figma 디자인 기준)
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div>
        <h3>Large Capsule</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chip size="l" type="capsule" text="Resting" />
          <Chip size="l" type="capsule" text="Selected" selected={true} />
          <Chip size="l" type="capsule" text="Disabled" disabled={true} />
          <Chip size="l" type="capsule" text="With Icon" leadingIcon="add-circle-filled" />
          <Chip
            size="l"
            type="capsule"
            text="Both Icons"
            leadingIcon="add-circle-filled"
            trailingIcon="chevron-right"
          />
        </div>
      </div>

      <div>
        <h3>Large Square</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chip size="l" type="square" text="Resting" />
          <Chip size="l" type="square" text="Selected" selected={true} />
          <Chip size="l" type="square" text="Disabled" disabled={true} />
          <Chip size="l" type="square" text="With Icon" leadingIcon="location-filled" />
          <Chip
            size="l"
            type="square"
            text="Both Icons"
            leadingIcon="location-filled"
            trailingIcon="chevron-right"
          />
        </div>
      </div>

      <div>
        <h3>Medium Capsule</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chip size="m" type="capsule" text="Resting" />
          <Chip size="m" type="capsule" text="Selected" selected={true} />
          <Chip size="m" type="capsule" text="Disabled" disabled={true} />
          <Chip size="m" type="capsule" text="With Icon" leadingIcon="check-circle-filled" />
          <Chip
            size="m"
            type="capsule"
            text="Both Icons"
            leadingIcon="check-circle-filled"
            trailingIcon="chevron-right"
          />
        </div>
      </div>

      <div>
        <h3>Medium Square</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chip size="m" type="square" text="Resting" />
          <Chip size="m" type="square" text="Selected" selected={true} />
          <Chip size="m" type="square" text="Disabled" disabled={true} />
          <Chip size="m" type="square" text="With Icon" leadingIcon="location-filled" />
          <Chip
            size="m"
            type="square"
            text="Both Icons"
            leadingIcon="location-filled"
            trailingIcon="chevron-right"
          />
        </div>
      </div>
    </div>
  ),
};
