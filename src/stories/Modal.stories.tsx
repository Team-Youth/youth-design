import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../components/modal';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Figma 디자인을 기반으로 구현된 모달 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// CloseButton=True, Button=1, Description=True, Image=False
export const SingleButtonWithDescription = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          모달 열기
        </button>
        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
        />
      </div>
    );
  },
  args: {},
} as any;

// CloseButton=True, Button=2, Description=True, Image=False
export const TwoButtonsWithDescription = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          모달 열기 (2개 버튼)
        </button>
        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
          secondaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
        />
      </div>
    );
  },
  args: {},
} as any;

// CloseButton=True, Button=1, Description=False, Image=True
export const SingleButtonWithImage = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          이미지 모달 열기
        </button>
        <Modal
          title="Modal Title h1"
          image="https://via.placeholder.com/400x240"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
        />
      </div>
    );
  },
  args: {},
} as any;

// CloseButton=True, Button=1, Description=True, Image=True
export const SingleButtonWithDescriptionAndImage = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          전체 기능 모달 열기
        </button>
        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          image="https://via.placeholder.com/400x240"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
        />
      </div>
    );
  },
  args: {},
} as any;

// CloseButton=True, Button=2, Description=True, Image=True
export const TwoButtonsWithDescriptionAndImage = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          완전한 모달 열기
        </button>
        <Modal
          title="Modal Title h1"
          description="Popup Contents Text body1 Area"
          image="https://via.placeholder.com/400x240"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
          secondaryButton={{
            text: 'Button',
            onClick: () => setIsOpen(false),
          }}
        />
      </div>
    );
  },
  args: {},
} as any;

// 닫기 버튼 없는 모달
export const WithoutCloseButton = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          닫기 버튼 없는 모달
        </button>
        <Modal
          title="Modal Title h1"
          description="이 모달은 닫기 버튼이 없습니다. 버튼으로만 닫을 수 있습니다."
          showCloseButton={false}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={{
            text: '확인',
            onClick: () => setIsOpen(false),
          }}
          secondaryButton={{
            text: '취소',
            onClick: () => setIsOpen(false),
          }}
        />
      </div>
    );
  },
  args: {},
} as any;
