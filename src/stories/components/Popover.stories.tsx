import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../../components/popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '기준 요소의 너비에 맞춰 표시되는 팝오버 컴포넌트입니다. 메뉴 아이템들을 리스트 형태로 제공하며, disabled 상태일 때 lock 아이콘을 표시합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: '팝오버에 표시될 아이템 목록',
      control: { type: 'object' },
    },
    isOpen: {
      description: '팝오버가 열려있는지 여부',
      control: { type: 'boolean' },
    },
    position: {
      description: '팝오버 표시 위치',
      control: { type: 'select' },
      options: ['top', 'bottom'],
    },
    width: {
      description: '팝오버 너비 (기본값은 anchorRef 요소의 너비)',
      control: { type: 'text' },
    },
    maxHeight: {
      description: '팝오버 최대 높이',
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 예시
const BasicExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const items = [
    {
      id: 'profile',
      label: '내 프로필 수정',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
      icon: 'sorting-arrow-heads'
    },
    {
      id: 'settings',
      label: '설정',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
    },
    {
      id: 'help',
      label: '도움말',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
      icon: 'reset'
    },
    {
      id: 'logout',
      label: '로그아웃',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
    },
  ];

  return (
    <div style={{ padding: '100px' }}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '12px 24px',
          backgroundColor: '#7248D9',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
        }}
      >
        메뉴 열기
      </button>

      <Popover items={items} isOpen={isOpen} onOpenChange={setIsOpen} anchorRef={buttonRef} />
    </div>
  );
};

// Disabled 아이템 포함 예시
const DisabledItemsExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const items = [
    {
      id: 'available1',
      label: '사용 가능한 옵션 1',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
    },
    {
      id: 'available2',
      label: '사용 가능한 옵션 2',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
    },
    {
      id: 'disabled1',
      label: '비활성화된 옵션 1',
      disabled: true,
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
    },
    {
      id: 'disabled2',
      label: '비활성화된 옵션 2',
      disabled: true,
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
    },
  ];

  return (
    <div style={{ padding: '100px' }}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '12px 24px',
          backgroundColor: '#8B6EE4',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
        }}
      >
        Disabled 아이템 포함 메뉴
      </button>

      <Popover items={items} isOpen={isOpen} onOpenChange={setIsOpen} anchorRef={buttonRef} />
    </div>
  );
};

// 커스텀 너비 예시
const CustomWidthExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const items = [
    {
      id: 'short',
      label: '짧은 옵션',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
    },
    {
      id: 'long',
      label: '이것은 매우 긴 옵션 텍스트입니다',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
    },
  ];

  return (
    <div style={{ padding: '100px' }}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#F3F5F6',
          color: '#25282D',
          border: '1px solid #D6D6D6',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
        }}
      >
        작은 버튼
      </button>

      <Popover
        items={items}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        anchorRef={buttonRef}
        width={300}
      />
    </div>
  );
};

// Top 위치 예시
const TopPositionExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const items = [
    {
      id: 'option1',
      label: '위쪽으로 열리는 옵션 1',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
    },
    {
      id: 'option2',
      label: '위쪽으로 열리는 옵션 2',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
    },
    {
      id: 'option3',
      label: '위쪽으로 열리는 옵션 3',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
    },
  ];

  return (
    <div style={{ padding: '100px', marginTop: '300px' }}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '12px 24px',
          backgroundColor: '#7248D9',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
        }}
      >
        위쪽으로 열기
      </button>

      <Popover
        items={items}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        anchorRef={buttonRef}
        position="top"
      />
    </div>
  );
};

export const Basic: Story = {
  render: () => <BasicExample />,
};

export const WithDisabledItems: Story = {
  render: () => <DisabledItemsExample />,
};

export const CustomWidth: Story = {
  render: () => <CustomWidthExample />,
};

export const TopPosition: Story = {
  render: () => <TopPositionExample />,
};
