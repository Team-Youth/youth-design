import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/box-button/Button';
import React from 'react';

// 아이콘 예시들
const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 14.25l-.345-.666C4.8 10.36 2 8.334 2 5.92 2 4.274 3.357 3 5.5 3c1.019 0 1.95.596 2.5 1.5C8.55 3.596 9.481 3 10.5 3 12.643 3 14 4.274 14 5.92c0 2.414-2.8 4.44-5.655 7.664L8 14.25z" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Button은 다양한 크기, 스타일, 레벨을 지원하는 버튼 컴포넌트입니다. solid, outlined, text 타입과 CTA, secondary, tertiary 레벨을 제공하며, 아이콘과 로딩 상태를 지원합니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['solid', 'outlined', 'text'],
      description: '버튼의 스타일 타입',
    },
    level: {
      control: { type: 'select' },
      options: ['CTA', 'secondary', 'tertiary'],
      description: '버튼의 중요도 레벨',
    },
    size: {
      control: { type: 'select' },
      options: ['l', 'm', 's'],
      description: '버튼의 크기',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼 비활성화 여부',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: '로딩 상태 여부',
    },
    underline: {
      control: { type: 'boolean' },
      description: 'text 타입 버튼의 언더라인 표시 여부',
    },
    children: {
      control: { type: 'text' },
      description: '버튼 텍스트',
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
    children: '버튼',
    type: 'solid',
    level: 'CTA',
    size: 'l',
  },
};

// 타입별 스토리
export const Solid: Story = {
  args: {
    children: 'Solid 버튼',
    type: 'solid',
    level: 'CTA',
    size: 'l',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined 버튼',
    type: 'outlined',
    level: 'CTA',
    size: 'l',
  },
};

export const Text: Story = {
  args: {
    children: 'Text 버튼',
    type: 'text',
    level: 'CTA',
    size: 'l',
  },
};

export const TextWithUnderline: Story = {
  args: {
    children: 'Underlined Text 버튼',
    type: 'text',
    level: 'CTA',
    size: 'l',
    underline: true,
  },
};

// 레벨별 스토리
export const CTA: Story = {
  args: {
    children: 'CTA 버튼',
    type: 'solid',
    level: 'CTA',
    size: 'l',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary 버튼',
    type: 'solid',
    level: 'secondary',
    size: 'l',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary 버튼',
    type: 'solid',
    level: 'tertiary',
    size: 'l',
  },
};

// 크기별 스토리
export const Large: Story = {
  args: {
    children: 'Large 버튼',
    size: 'l',
    type: 'solid',
    level: 'CTA',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium 버튼',
    size: 'm',
    type: 'solid',
    level: 'CTA',
  },
};

export const Small: Story = {
  args: {
    children: 'Small 버튼',
    size: 's',
    type: 'solid',
    level: 'CTA',
  },
};

// 상태별 스토리
export const Disabled: Story = {
  args: {
    children: '비활성화된 버튼',
    disabled: true,
    type: 'solid',
    level: 'CTA',
  },
};

export const Loading: Story = {
  args: {
    children: '로딩 중...',
    isLoading: true,
    type: 'solid',
    level: 'CTA',
  },
};

// 아이콘이 있는 스토리
export const WithLeftIcon: Story = {
  args: {
    children: '좋아요',
    icon: {
      left: <HeartIcon />,
    },
    type: 'solid',
    level: 'CTA',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: '다음',
    icon: {
      right: <ArrowRightIcon />,
    },
    type: 'solid',
    level: 'CTA',
  },
};

export const WithBothIcons: Story = {
  args: {
    children: '즐겨찾기',
    icon: {
      left: <StarIcon />,
      right: <PlusIcon />,
    },
    type: 'solid',
    level: 'CTA',
  },
};

export const IconOnly: Story = {
  args: {
    icon: {
      left: <PlusIcon />,
    },
    type: 'solid',
    level: 'CTA',
  },
};

// 모든 타입과 레벨 조합
export const AllTypesAndLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      {/* Solid 타입 */}
      <div>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>Solid Type</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="l" type="solid" level="CTA">
            CTA
          </Button>
          <Button size="l" type="solid" level="secondary">
            Secondary
          </Button>
          <Button size="l" type="solid" level="tertiary">
            Tertiary
          </Button>
        </div>
      </div>

      {/* Outlined 타입 */}
      <div>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>Outlined Type</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="l" type="outlined" level="CTA">
            CTA
          </Button>
          <Button size="l" type="outlined" level="secondary">
            Secondary
          </Button>
          <Button size="l" type="outlined" level="tertiary">
            Tertiary
          </Button>
        </div>
      </div>

      {/* Text 타입 */}
      <div>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>Text Type</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="l" type="text" level="CTA">
            CTA
          </Button>
          <Button size="l" type="text" level="secondary">
            Secondary
          </Button>
          <Button size="l" type="text" level="tertiary">
            Tertiary
          </Button>
        </div>
      </div>

      {/* Text with Underline */}
      <div>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>Text Type with Underline</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="l" type="text" level="CTA" underline>
            CTA
          </Button>
          <Button size="l" type="text" level="secondary" underline>
            Secondary
          </Button>
          <Button size="l" type="text" level="tertiary" underline>
            Tertiary
          </Button>
        </div>
      </div>
    </div>
  ),
};

// 모든 크기 조합
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button size="l" type="solid" level="CTA">
          Large
        </Button>
        <Button size="l" type="outlined" level="CTA">
          Large
        </Button>
        <Button size="l" type="text" level="CTA">
          Large
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button size="m" type="solid" level="CTA">
          Medium
        </Button>
        <Button size="m" type="outlined" level="CTA">
          Medium
        </Button>
        <Button size="m" type="text" level="CTA">
          Medium
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button size="s" type="solid" level="CTA">
          Small
        </Button>
        <Button size="s" type="outlined" level="CTA">
          Small
        </Button>
        <Button size="s" type="text" level="CTA">
          Small
        </Button>
      </div>
    </div>
  ),
};

// 상태 조합 스토리
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>Normal State</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button type="solid" level="CTA">
            Normal
          </Button>
          <Button type="outlined" level="CTA">
            Normal
          </Button>
          <Button type="text" level="CTA">
            Normal
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>Disabled State</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button type="solid" level="CTA" disabled>
            Disabled
          </Button>
          <Button type="outlined" level="CTA" disabled>
            Disabled
          </Button>
          <Button type="text" level="CTA" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>Loading State</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button type="solid" level="CTA" isLoading>
            Loading
          </Button>
          <Button type="outlined" level="CTA" isLoading>
            Loading
          </Button>
          <Button type="text" level="CTA" isLoading>
            Loading
          </Button>
        </div>
      </div>
    </div>
  ),
};

// 아이콘 조합 스토리
export const AllIconCombinations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>Left Icon</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button type="solid" level="CTA" icon={{ left: <HeartIcon /> }}>
            Like
          </Button>
          <Button type="outlined" level="CTA" icon={{ left: <HeartIcon /> }}>
            Like
          </Button>
          <Button type="text" level="CTA" icon={{ left: <HeartIcon /> }}>
            Like
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>Right Icon</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button type="solid" level="CTA" icon={{ right: <ArrowRightIcon /> }}>
            Next
          </Button>
          <Button type="outlined" level="CTA" icon={{ right: <ArrowRightIcon /> }}>
            Next
          </Button>
          <Button type="text" level="CTA" icon={{ right: <ArrowRightIcon /> }}>
            Next
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>Icon Only</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button type="solid" level="CTA" icon={{ left: <PlusIcon /> }} />
          <Button type="outlined" level="CTA" icon={{ left: <PlusIcon /> }} />
          <Button type="text" level="CTA" icon={{ left: <PlusIcon /> }} />
        </div>
      </div>
    </div>
  ),
};
