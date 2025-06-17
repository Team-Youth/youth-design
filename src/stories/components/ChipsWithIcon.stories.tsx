import type { Meta, StoryObj } from '@storybook/react';
import { Chips } from '../../components/chips/Chips';
import React from 'react';

const meta: Meta<typeof Chips> = {
  title: 'Components/Chips/With Icons',
  component: Chips,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '아이콘이 포함된 Chips 컴포넌트의 다양한 사용 예시입니다.',
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

// Leading Icon 예시들
export const LocationChip: Story = {
  args: {
    text: 'Location',
    leadingIcon: 'location-filled',
    type: 'capsule',
    size: 'm',
  },
};

export const CheckChip: Story = {
  args: {
    text: 'Completed',
    leadingIcon: 'check-circle-filled',
    type: 'capsule',
    size: 'm',
    selected: true,
  },
};

export const AddChip: Story = {
  args: {
    text: 'Add New',
    leadingIcon: 'add-circle-filled',
    type: 'square',
    size: 'm',
  },
};

// Trailing Icon 예시들
export const NavigateChip: Story = {
  args: {
    text: 'Navigate',
    trailingIcon: 'chevron-right',
    type: 'capsule',
    size: 'm',
  },
};

export const RemoveChip: Story = {
  args: {
    text: 'Remove',
    trailingIcon: 'close',
    type: 'square',
    size: 'm',
  },
};

// Both Icons 예시들
export const BothIconsExample: Story = {
  args: {
    text: 'Location Guide',
    leadingIcon: 'location-filled',
    trailingIcon: 'chevron-right',
    type: 'capsule',
    size: 'l',
  },
};

// 아이콘 조합 예시
export const IconCombinations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <div>
        <h3>Leading Icons</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chips text="Location" leadingIcon="location-filled" />
          <Chips text="Check" leadingIcon="check-circle-filled" selected={true} />
          <Chips text="Add" leadingIcon="add-circle-filled" />
          <Chips text="Heart" leadingIcon="heart-filled" />
          <Chips text="Search" leadingIcon="search" />
        </div>
      </div>

      <div>
        <h3>Trailing Icons</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chips text="Navigate" trailingIcon="chevron-right" />
          <Chips text="Remove" trailingIcon="close" />
          <Chips text="Arrow" trailingIcon="arrow-right" />
          <Chips text="More" trailingIcon="more" />
        </div>
      </div>

      <div>
        <h3>Both Icons</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chips text="Location Guide" leadingIcon="location-filled" trailingIcon="chevron-right" />
          <Chips text="Add New Item" leadingIcon="add-circle-filled" trailingIcon="arrow-right" />
          <Chips text="Search More" leadingIcon="search" trailingIcon="more" selected={true} />
        </div>
      </div>
    </div>
  ),
};

// 크기별 아이콘 비교
export const IconSizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div>
        <h3 style={{ margin: '0 0 12px 0', textAlign: 'center' }}>l Size with Icons</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Chips size="l" text="Location" leadingIcon="location-filled" />
          <Chips size="l" text="Navigate" trailingIcon="chevron-right" />
          <Chips
            size="l"
            text="Both"
            leadingIcon="check-circle-filled"
            trailingIcon="arrow-right"
            selected={true}
          />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 12px 0', textAlign: 'center' }}>m Size with Icons</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Chips size="m" text="Location" leadingIcon="location-filled" />
          <Chips size="m" text="Navigate" trailingIcon="chevron-right" />
          <Chips
            size="m"
            text="Both"
            leadingIcon="check-circle-filled"
            trailingIcon="arrow-right"
            selected={true}
          />
        </div>
      </div>
    </div>
  ),
};

// 상태별 아이콘 예시
export const IconStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <div>
        <h3>Resting State</h3>
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <Chips text="Location" leadingIcon="location-filled" />
          <Chips text="Navigate" trailingIcon="chevron-right" />
          <Chips text="Both Icons" leadingIcon="add-circle-filled" trailingIcon="arrow-right" />
        </div>
      </div>

      <div>
        <h3>Selected State</h3>
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <Chips text="Location" leadingIcon="location-filled" selected={true} />
          <Chips text="Navigate" trailingIcon="chevron-right" selected={true} />
          <Chips
            text="Both Icons"
            leadingIcon="add-circle-filled"
            trailingIcon="arrow-right"
            selected={true}
          />
        </div>
      </div>

      <div>
        <h3>Disabled State</h3>
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <Chips text="Location" leadingIcon="location-filled" disabled={true} />
          <Chips text="Navigate" trailingIcon="chevron-right" disabled={true} />
          <Chips
            text="Both Icons"
            leadingIcon="add-circle-filled"
            trailingIcon="arrow-right"
            disabled={true}
          />
        </div>
      </div>
    </div>
  ),
};

// 실제 사용 케이스 예시
export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <div>
        <h3>Filter Tags</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chips text="Location" leadingIcon="location-filled" />
          <Chips text="Favorites" leadingIcon="heart-filled" selected={true} />
          <Chips text="Recent" leadingIcon="time-filled" />
          <Chips text="Clear All" trailingIcon="close" type="square" />
        </div>
      </div>

      <div>
        <h3>Navigation Menu</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chips text="Home" leadingIcon="home-filled" trailingIcon="chevron-right" />
          <Chips text="Profile" leadingIcon="person-filled" trailingIcon="chevron-right" />
          <Chips text="Settings" leadingIcon="settings-filled" trailingIcon="chevron-right" />
        </div>
      </div>

      <div>
        <h3>Action Buttons</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chips text="Add Item" leadingIcon="add-circle-filled" size="l" />
          <Chips text="Search" leadingIcon="search" trailingIcon="arrow-right" size="l" />
          <Chips text="Download" leadingIcon="download" type="square" size="l" />
        </div>
      </div>
    </div>
  ),
};
