import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Popup } from '../../components';

const meta = {
  title: 'Components/Popup',
  component: Popup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Figma 디자인을 기반으로 구현된 팝업 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '팝업 표시 여부',
    },
    title: {
      control: 'text',
      description: '팝업 제목',
    },
    description: {
      control: 'text',
      description: '팝업 설명 (선택사항)',
    },
    primaryButton: {
      description: '메인 버튼 설정',
    },
    secondaryButton: {
      description: '보조 버튼 설정 (선택사항)',
    },
  },
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

// 스토리에서 사용할 기본 래퍼 컴포넌트
const PopupWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

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
        팝업 열기
      </button>
      <Popup
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        primaryButton={{
          ...args.primaryButton,
          onClick: () => {
            console.log('Primary button clicked');
            setIsOpen(false);
          },
        }}
        secondaryButton={
          args.secondaryButton
            ? {
                ...args.secondaryButton,
                onClick: () => {
                  console.log('Secondary button clicked');
                  setIsOpen(false);
                },
              }
            : undefined
        }
      />
    </div>
  );
};

// Button=1, Description=True (버튼 1개, 설명 있음)
export const SingleButtonWithDescription = {
  render: (args: any) => <PopupWrapper {...args} />,
  args: {
    title: 'Popup Title h1',
    description: 'Popup Contents Text body1',
    primaryButton: {
      text: 'Button',
      onClick: () => {},
    },
  },
} as any;

// Button=1, Description=False (버튼 1개, 설명 없음)
export const SingleButtonWithoutDescription = {
  render: (args: any) => <PopupWrapper {...args} />,
  args: {
    title: 'Popup Title h1',
    primaryButton: {
      text: 'Button',
      onClick: () => {},
    },
  },
} as any;

// Button=2, Description=True (버튼 2개, 설명 있음)
export const TwoButtonsWithDescription = {
  render: (args: any) => <PopupWrapper {...args} />,
  args: {
    title: 'Popup Title h1',
    description: 'Popup Contents Text body1',
    primaryButton: {
      text: 'Button',
      onClick: () => {},
    },
    secondaryButton: {
      text: 'Button',
      onClick: () => {},
    },
  },
} as any;

// Button=2, Description=False (버튼 2개, 설명 없음)
export const TwoButtonsWithoutDescription = {
  render: (args: any) => <PopupWrapper {...args} />,
  args: {
    title: 'Popup Title h1',
    primaryButton: {
      text: 'Button',
      onClick: () => {},
    },
    secondaryButton: {
      text: 'Button',
      onClick: () => {},
    },
  },
} as any;

// 커스텀 버튼 props 예시
export const CustomButtonProps = {
  render: (args: any) => <PopupWrapper {...args} />,
  args: {
    title: '사용자 정의 팝업',
    description: '이 팝업은 커스텀 버튼 설정을 사용합니다.',
    primaryButton: {
      text: '확인',
      onClick: () => {},
      disabled: false,
    },
    secondaryButton: {
      text: '취소',
      onClick: () => {},
      type: 'ghost',
    },
  },
} as any;
