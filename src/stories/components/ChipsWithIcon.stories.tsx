import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../../components/chip/Chip';
import React from 'react';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip/With Icons',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '아이콘이 포함된 Chip 컴포넌트의 다양한 사용 예시입니다.',
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
          <Chip text="Location" leadingIcon="location-filled" />
          <Chip text="Check" leadingIcon="check-circle-filled" selected={true} />
          <Chip text="Add" leadingIcon="add-circle-filled" />
          <Chip text="Heart" leadingIcon="heart-filled" />
          <Chip text="Search" leadingIcon="search" />
        </div>
      </div>

      <div>
        <h3>Trailing Icons</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chip text="Navigate" trailingIcon="chevron-right" />
          <Chip text="Remove" trailingIcon="close" />
          <Chip text="Arrow" trailingIcon="arrow-right" />
          <Chip text="More" trailingIcon="more" />
        </div>
      </div>

      <div>
        <h3>Both Icons</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chip text="Location Guide" leadingIcon="location-filled" trailingIcon="chevron-right" />
          <Chip text="Add New Item" leadingIcon="add-circle-filled" trailingIcon="arrow-right" />
          <Chip text="Search More" leadingIcon="search" trailingIcon="more" selected={true} />
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
          <Chip size="l" text="Location" leadingIcon="location-filled" />
          <Chip size="l" text="Navigate" trailingIcon="chevron-right" />
          <Chip
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
          <Chip size="m" text="Location" leadingIcon="location-filled" />
          <Chip size="m" text="Navigate" trailingIcon="chevron-right" />
          <Chip
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
          <Chip text="Location" leadingIcon="location-filled" />
          <Chip text="Navigate" trailingIcon="chevron-right" />
          <Chip text="Both Icons" leadingIcon="add-circle-filled" trailingIcon="arrow-right" />
        </div>
      </div>

      <div>
        <h3>Selected State</h3>
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <Chip text="Location" leadingIcon="location-filled" selected={true} />
          <Chip text="Navigate" trailingIcon="chevron-right" selected={true} />
          <Chip
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
          <Chip text="Location" leadingIcon="location-filled" disabled={true} />
          <Chip text="Navigate" trailingIcon="chevron-right" disabled={true} />
          <Chip
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
          <Chip text="Location" leadingIcon="location-filled" />
          <Chip text="Favorites" leadingIcon="heart-filled" selected={true} />
          <Chip text="Recent" leadingIcon="time-filled" />
          <Chip text="Clear All" trailingIcon="close" type="square" />
        </div>
      </div>

      <div>
        <h3>Navigation Menu</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chip text="Home" leadingIcon="home-filled" trailingIcon="chevron-right" />
          <Chip text="Profile" leadingIcon="person-filled" trailingIcon="chevron-right" />
          <Chip text="Settings" leadingIcon="settings-filled" trailingIcon="chevron-right" />
        </div>
      </div>

      <div>
        <h3>Action Buttons</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Chip text="Add Item" leadingIcon="add-circle-filled" size="l" />
          <Chip text="Search" leadingIcon="search" trailingIcon="arrow-right" size="l" />
          <Chip text="Download" leadingIcon="download" type="square" size="l" />
        </div>
      </div>
    </div>
  ),
};
