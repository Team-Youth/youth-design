import type { Meta, StoryObj } from '@storybook/react';
import { TextButton } from '../../components/text-button/TextButton';
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

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z" />
  </svg>
);

const meta: Meta<typeof TextButton> = {
  title: 'Components/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'TextButton은 텍스트 기반의 경량 버튼 컴포넌트입니다. 다양한 크기와 언더라인 옵션을 제공하며, 아이콘과 chevron을 함께 사용할 수 있습니다. 동적으로 색상을 변경할 수 있습니다.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['m', 's', 'xs'],
      description: '버튼의 크기',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼 비활성화 여부',
    },
    underline: {
      control: { type: 'boolean' },
      description: '텍스트 언더라인 표시 여부',
    },
    chevron: {
      control: { type: 'boolean' },
      description: '오른쪽 chevron 아이콘 표시 여부',
    },
    color: {
      control: { type: 'color' },
      description: '텍스트 및 아이콘 색상',
    },
    children: {
      control: { type: 'text' },
      description: '버튼 텍스트',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
    width: {
      control: { type: 'text' },
      description: '버튼의 너비',
    },
    height: {
      control: { type: 'text' },
      description: '버튼의 높이',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: '텍스트 버튼',
    size: 'm',
  },
};

// 크기별 스토리
export const Medium: Story = {
  args: {
    children: 'Medium 텍스트 버튼',
    size: 'm',
  },
};

export const Small: Story = {
  args: {
    children: 'Small 텍스트 버튼',
    size: 's',
  },
};

export const ExtraSmall: Story = {
  args: {
    children: 'Extra Small 텍스트 버튼',
    size: 'xs',
  },
};

// 언더라인 스토리
export const WithUnderline: Story = {
  args: {
    children: '언더라인 텍스트 버튼',
    underline: true,
    size: 'm',
  },
};

export const WithoutUnderline: Story = {
  args: {
    children: '언더라인 없는 텍스트 버튼',
    underline: false,
    size: 'm',
  },
};

// Chevron 스토리
export const WithChevron: Story = {
  args: {
    children: '더보기',
    chevron: true,
    size: 'm',
  },
};

export const WithChevronAndUnderline: Story = {
  args: {
    children: '자세히 보기',
    chevron: true,
    underline: true,
    size: 'm',
  },
};

// 상태별 스토리
export const Disabled: Story = {
  args: {
    children: '비활성화된 텍스트 버튼',
    disabled: true,
    size: 'm',
  },
};

export const DisabledWithUnderline: Story = {
  args: {
    children: '비활성화된 언더라인 버튼',
    disabled: true,
    underline: true,
    size: 'm',
  },
};

export const DisabledWithChevron: Story = {
  args: {
    children: '비활성화된 chevron 버튼',
    disabled: true,
    chevron: true,
    size: 'm',
  },
};

// 아이콘이 있는 스토리
export const WithLeftIcon: Story = {
  args: {
    children: '좋아요',
    icon: {
      left: <HeartIcon />,
    },
    size: 'm',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: '더보기',
    icon: {
      right: <ChevronDownIcon />,
    },
    size: 'm',
  },
};

export const WithBothIcons: Story = {
  args: {
    children: '즐겨찾기 추가',
    icon: {
      left: <StarIcon />,
      right: <PlusIcon />,
    },
    size: 'm',
  },
};

export const IconOnly: Story = {
  args: {
    icon: {
      left: <ArrowRightIcon />,
    },
    size: 'm',
  },
};

// Chevron과 아이콘 조합
export const WithLeftIconAndChevron: Story = {
  args: {
    children: '즐겨찾기 더보기',
    icon: {
      left: <StarIcon />,
    },
    chevron: true,
    size: 'm',
  },
};

// 커스텀 크기 스토리
export const CustomSize: Story = {
  args: {
    children: '커스텀 크기 버튼',
    width: '200px',
    height: '50px',
    size: 'm',
  },
};

// 모든 크기 조합
export const AllSizes: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>기본 텍스트 버튼</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton size="m">Medium</TextButton>
          <TextButton size="s">Small</TextButton>
          <TextButton size="xs">Extra Small</TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>언더라인 텍스트 버튼</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton size="m" underline>
            Medium
          </TextButton>
          <TextButton size="s" underline>
            Small
          </TextButton>
          <TextButton size="xs" underline>
            Extra Small
          </TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Chevron 텍스트 버튼</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton size="m" chevron>
            Medium
          </TextButton>
          <TextButton size="s" chevron>
            Small
          </TextButton>
          <TextButton size="xs" chevron>
            Extra Small
          </TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>비활성화 상태</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton size="m" disabled>
            Medium
          </TextButton>
          <TextButton size="s" disabled>
            Small
          </TextButton>
          <TextButton size="xs" disabled>
            Extra Small
          </TextButton>
        </div>
      </div>
    </div>
  ),
};

// 아이콘 조합 예시
export const IconVariations: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>왼쪽 아이콘</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton icon={{ left: <HeartIcon /> }}>좋아요</TextButton>
          <TextButton icon={{ left: <StarIcon /> }}>즐겨찾기</TextButton>
          <TextButton icon={{ left: <PlusIcon /> }}>추가</TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>오른쪽 아이콘</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton icon={{ right: <ArrowRightIcon /> }}>다음</TextButton>
          <TextButton icon={{ right: <ChevronDownIcon /> }}>더보기</TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Chevron 아이콘</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton chevron>더보기</TextButton>
          <TextButton chevron underline>
            자세히 보기
          </TextButton>
          <TextButton chevron disabled>
            비활성화
          </TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>왼쪽 아이콘 + Chevron</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton icon={{ left: <StarIcon /> }} chevron>
            즐겨찾기 더보기
          </TextButton>
          <TextButton icon={{ left: <HeartIcon /> }} chevron>
            좋아요 더보기
          </TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>양쪽 아이콘</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton icon={{ left: <StarIcon />, right: <PlusIcon /> }}>즐겨찾기 추가</TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>아이콘만</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton icon={{ left: <HeartIcon /> }} />
          <TextButton icon={{ left: <StarIcon /> }} />
          <TextButton icon={{ left: <PlusIcon /> }} />
        </div>
      </div>
    </div>
  ),
};

// 색상 스토리
export const CustomColors: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>다양한 색상</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton color="#3B82F6">파란색 버튼</TextButton>
          <TextButton color="#EF4444">빨간색 버튼</TextButton>
          <TextButton color="#10B981">초록색 버튼</TextButton>
          <TextButton color="#F59E0B">주황색 버튼</TextButton>
          <TextButton color="#8B5CF6">보라색 버튼</TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>색상 + 언더라인</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton color="#3B82F6" underline>
            파란색 언더라인
          </TextButton>
          <TextButton color="#EF4444" underline>
            빨간색 언더라인
          </TextButton>
          <TextButton color="#10B981" underline>
            초록색 언더라인
          </TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>색상 + Chevron</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton color="#3B82F6" chevron>
            파란색 더보기
          </TextButton>
          <TextButton color="#EF4444" chevron>
            빨간색 더보기
          </TextButton>
          <TextButton color="#10B981" chevron>
            초록색 더보기
          </TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>색상 + 아이콘</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton color="#3B82F6" icon={{ left: <HeartIcon /> }}>
            파란색 좋아요
          </TextButton>
          <TextButton color="#EF4444" icon={{ left: <StarIcon /> }}>
            빨간색 즐겨찾기
          </TextButton>
          <TextButton color="#10B981" icon={{ left: <PlusIcon /> }}>
            초록색 추가
          </TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>
          비활성화 상태 (색상 무시됨)
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton color="#3B82F6" disabled>
            파란색 비활성화
          </TextButton>
          <TextButton color="#EF4444" disabled chevron>
            빨간색 비활성화
          </TextButton>
          <TextButton color="#10B981" disabled icon={{ left: <StarIcon /> }}>
            초록색 비활성화
          </TextButton>
        </div>
      </div>
    </div>
  ),
};

// 실제 사용 예시
export const RealWorldExamples: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>네비게이션</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <TextButton size="m" underline>
            홈
          </TextButton>
          <TextButton size="m">소개</TextButton>
          <TextButton size="m">서비스</TextButton>
          <TextButton size="m">연락처</TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>액션 버튼</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton size="s" chevron>
            자세히 보기
          </TextButton>
          <TextButton size="s" icon={{ left: <PlusIcon /> }}>
            항목 추가
          </TextButton>
          <TextButton size="s" underline>
            편집
          </TextButton>
          <TextButton size="s" disabled>
            삭제
          </TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>폼 액션</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton size="xs">취소</TextButton>
          <TextButton size="xs" underline>
            초기화
          </TextButton>
          <TextButton size="xs" icon={{ left: <StarIcon /> }}>
            즐겨찾기
          </TextButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>드롭다운 & 확장</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextButton size="s" chevron>
            카테고리 선택
          </TextButton>
          <TextButton size="s" chevron underline>
            필터 옵션
          </TextButton>
          <TextButton size="s" icon={{ left: <StarIcon /> }} chevron>
            즐겨찾기 목록
          </TextButton>
        </div>
      </div>
    </div>
  ),
};
