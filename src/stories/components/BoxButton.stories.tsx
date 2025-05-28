import type { Meta, StoryObj } from '@storybook/react';
import { BoxButton } from '../../components/box-button/BoxButton';

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

const meta: Meta<typeof BoxButton> = {
  title: 'Components/BoxButton',
  component: BoxButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'BoxButton은 다양한 크기와 스타일을 지원하는 버튼 컴포넌트입니다. solid와 ghost 타입을 제공하며, 아이콘과 로딩 상태를 지원합니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['solid', 'ghost'],
      description: '버튼의 스타일 타입',
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
    size: 'l',
  },
};

// 타입별 스토리
export const Solid: Story = {
  args: {
    children: 'Solid 버튼',
    type: 'solid',
    size: 'l',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost 버튼',
    type: 'ghost',
    size: 'l',
  },
};

// 크기별 스토리
export const Large: Story = {
  args: {
    children: 'Large 버튼',
    size: 'l',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium 버튼',
    size: 'm',
  },
};

export const Small: Story = {
  args: {
    children: 'Small 버튼',
    size: 's',
  },
};

// 상태별 스토리
export const Disabled: Story = {
  args: {
    children: '비활성화된 버튼',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: '로딩 중...',
    isLoading: true,
  },
};

// 아이콘이 있는 스토리
export const WithLeftIcon: Story = {
  args: {
    children: '좋아요',
    icon: {
      left: <HeartIcon />,
    },
  },
};

export const WithRightIcon: Story = {
  args: {
    children: '다음',
    icon: {
      right: <ArrowRightIcon />,
    },
  },
};

export const WithBothIcons: Story = {
  args: {
    children: '즐겨찾기',
    icon: {
      left: <StarIcon />,
      right: <PlusIcon />,
    },
  },
};

export const IconOnly: Story = {
  args: {
    icon: {
      left: <PlusIcon />,
    },
  },
};

// 모든 크기와 타입 조합
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <BoxButton size="l" type="solid">
          Large Solid
        </BoxButton>
        <BoxButton size="l" type="ghost">
          Large Ghost
        </BoxButton>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <BoxButton size="m" type="solid">
          Medium Solid
        </BoxButton>
        <BoxButton size="m" type="ghost">
          Medium Ghost
        </BoxButton>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <BoxButton size="s" type="solid">
          Small Solid
        </BoxButton>
        <BoxButton size="s" type="ghost">
          Small Ghost
        </BoxButton>
      </div>
    </div>
  ),
};

// 아이콘 정렬 테스트
export const IconAlignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <BoxButton size="l" icon={{ left: <HeartIcon /> }}>
        왼쪽 아이콘
      </BoxButton>
      <BoxButton size="l" icon={{ right: <ArrowRightIcon /> }}>
        오른쪽 아이콘
      </BoxButton>
      <BoxButton size="l" icon={{ left: <StarIcon />, right: <PlusIcon /> }}>
        양쪽 아이콘
      </BoxButton>
    </div>
  ),
};

// 로딩 상태 테스트
export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <BoxButton size="l" isLoading>
        로딩 중...
      </BoxButton>
      <BoxButton size="m" isLoading>
        로딩 중...
      </BoxButton>
      <BoxButton size="s" isLoading>
        로딩 중...
      </BoxButton>
    </div>
  ),
};

// 비활성화 상태 테스트
export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <BoxButton size="l" type="solid" disabled>
          Disabled Solid
        </BoxButton>
        <BoxButton size="l" type="ghost" disabled>
          Disabled Ghost
        </BoxButton>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <BoxButton size="l" type="solid" disabled icon={{ left: <HeartIcon /> }}>
          Disabled with Icon
        </BoxButton>
        <BoxButton size="l" type="ghost" disabled icon={{ right: <ArrowRightIcon /> }}>
          Disabled with Icon
        </BoxButton>
      </div>
    </div>
  ),
};
