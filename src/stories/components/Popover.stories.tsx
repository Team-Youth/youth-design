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
          '기준 요소의 위치를 기반으로 표시되는 팝오버 컴포넌트입니다. 메뉴 아이템들을 리스트 형태로 제공하며, disabled 상태일 때 lock 아이콘을 표시합니다.',
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
    onOpenChange: {
      description: '팝오버 열림/닫힘 상태 변경 콜백',
      action: 'onOpenChange',
    },
    anchorRef: {
      description: '기준이 되는 요소의 ref',
      control: false,
    },
    width: {
      description: '직접 지정할 너비',
      control: { type: 'number' },
    },
    minWidth: {
      description: '최소 너비',
      control: { type: 'number' },
    },
    position: {
      description: '팝오버 위치',
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    align: {
      description: '팝오버 정렬',
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
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
      icon: 'profile-stroke' as const,
    },
    {
      id: 'settings',
      label: '설정',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
      icon: 'settings-stroke' as const,
    },
    {
      id: 'help',
      label: '도움말',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
      icon: 'question-stroke' as const,
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
      icon: 'check' as const,
    },
    {
      id: 'available2',
      label: '사용 가능한 옵션 2',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
      icon: 'heart-stroke' as const,
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
      icon: 'minus' as const,
    },
    {
      id: 'long',
      label: '이것은 매우 긴 옵션 텍스트입니다',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
      icon: 'add' as const,
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
      icon: 'arrow-up' as const,
    },
    {
      id: 'option2',
      label: '위쪽으로 열리는 옵션 2',
      onClick: (id: string) => {
        console.log('클릭된 아이템:', id);
      },
      icon: 'chevron-up' as const,
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

// 좌우 위치 예시
const LeftRightPositionExample = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const leftRef = useRef<HTMLButtonElement>(null);
  const rightRef = useRef<HTMLButtonElement>(null);

  const items = [
    {
      id: 'option1',
      label: '사이드 메뉴 옵션 1',
      onClick: (id: string) => console.log('클릭된 아이템:', id),
      icon: 'arrow-left' as const,
    },
    {
      id: 'option2',
      label: '사이드 메뉴 옵션 2',
      onClick: (id: string) => console.log('클릭된 아이템:', id),
      icon: 'arrow-right' as const,
    },
    {
      id: 'option3',
      label: '사이드 메뉴 옵션 3',
      onClick: (id: string) => console.log('클릭된 아이템:', id),
    },
  ];

  return (
    <div style={{ padding: '100px', display: 'flex', gap: '300px', justifyContent: 'center' }}>
      <button
        ref={leftRef}
        onClick={() => setLeftOpen(!leftOpen)}
        style={{
          padding: '12px 24px',
          backgroundColor: '#EF4444',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
        }}
      >
        왼쪽으로 열기
      </button>

      <button
        ref={rightRef}
        onClick={() => setRightOpen(!rightOpen)}
        style={{
          padding: '12px 24px',
          backgroundColor: '#06B6D4',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
        }}
      >
        오른쪽으로 열기
      </button>

      <Popover
        items={items}
        isOpen={leftOpen}
        onOpenChange={setLeftOpen}
        anchorRef={leftRef}
        position="left"
        width={200}
      />

      <Popover
        items={items}
        isOpen={rightOpen}
        onOpenChange={setRightOpen}
        anchorRef={rightRef}
        position="right"
        align="end"
        width={200}
      />
    </div>
  );
};

// 정렬 옵션 예시
const AlignmentExample = () => {
  const [startOpen, setStartOpen] = useState(false);
  const [centerOpen, setCenterOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);

  const startRef = useRef<HTMLButtonElement>(null);
  const centerRef = useRef<HTMLButtonElement>(null);
  const endRef = useRef<HTMLButtonElement>(null);

  const items = [
    {
      id: 'option1',
      label: '정렬 옵션 1',
      onClick: (id: string) => console.log('클릭된 아이템:', id),
    },
    {
      id: 'option2',
      label: '정렬 옵션 2',
      onClick: (id: string) => console.log('클릭된 아이템:', id),
    },
  ];

  return (
    <div style={{ padding: '100px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <button
        ref={startRef}
        onClick={() => setStartOpen(!startOpen)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#3B82F6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Start Align
      </button>

      <button
        ref={centerRef}
        onClick={() => setCenterOpen(!centerOpen)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#10B981',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Center Align
      </button>

      <button
        ref={endRef}
        onClick={() => setEndOpen(!endOpen)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#F59E0B',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        End Align
      </button>

      <Popover
        items={items}
        isOpen={startOpen}
        onOpenChange={setStartOpen}
        anchorRef={startRef}
        align="start"
        width={200}
      />

      <Popover
        items={items}
        isOpen={centerOpen}
        onOpenChange={setCenterOpen}
        anchorRef={centerRef}
        align="center"
        width={200}
      />

      <Popover
        items={items}
        isOpen={endOpen}
        onOpenChange={setEndOpen}
        anchorRef={endRef}
        align="end"
        width={200}
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

export const LeftRightPosition: Story = {
  render: () => <LeftRightPositionExample />,
};

export const Alignment: Story = {
  render: () => <AlignmentExample />,
};
