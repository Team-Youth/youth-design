import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../../components';
import React from 'react';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
토스트 오버레이는 사용자가 어떤 작업을 완료했을 때, 시스템이 잘 처리됐다는 걸 알려주는 알림입니다.
현재 하고 있는 일을 방해하지 않고, 잠깐 나타났다 사라지는 방식으로 보여집니다.

## 특징
- 4가지 상태: Success, Error, Warning, Info
- 선택적 리딩 아이콘
- 선택적 설명 텍스트
- 선택적 닫기 버튼
- 360px 고정 너비
- 접근성 지원 (ARIA)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: '토스트의 상태를 결정합니다.',
    },
    title: {
      control: 'text',
      description: '토스트의 제목입니다.',
    },
    description: {
      control: 'text',
      description: '토스트의 부가 설명입니다. (선택사항)',
    },
    showLeadingIcon: {
      control: 'boolean',
      description: '앞쪽 아이콘을 표시할지 결정합니다.',
    },
    showCloseButton: {
      control: 'boolean',
      description: '닫기 버튼을 표시할지 결정합니다.',
    },
  },
  args: {
    title: 'Notification Title H3',
    showLeadingIcon: true,
    showCloseButton: false,
    onClose: () => console.log('Toast closed'),
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리들
export const Success: Story = {
  args: {
    status: 'success',
    title: '성공적으로 저장되었습니다',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    title: '오류가 발생했습니다',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    title: '주의가 필요합니다',
  },
};

export const Info: Story = {
  args: {
    status: 'info',
    title: '안내 메시지입니다',
  },
};

// 설명이 있는 버전들
export const SuccessWithDescription: Story = {
  args: {
    status: 'success',
    title: '파일이 성공적으로 업로드되었습니다',
    description: '업로드된 파일은 24시간 후 자동으로 처리됩니다.',
  },
};

export const ErrorWithDescription: Story = {
  args: {
    status: 'error',
    title: '파일 업로드에 실패했습니다',
    description: '파일 크기가 너무 크거나 지원하지 않는 형식입니다.',
  },
};

export const WarningWithDescription: Story = {
  args: {
    status: 'warning',
    title: '저장 공간이 부족합니다',
    description: '현재 저장 공간 사용량이 90%를 초과했습니다.',
  },
};

export const InfoWithDescription: Story = {
  args: {
    status: 'info',
    title: '새로운 기능이 추가되었습니다',
    description: '설정 메뉴에서 새로운 기능을 확인해보세요.',
  },
};

// 닫기 버튼이 있는 버전들
export const WithCloseButton: Story = {
  args: {
    status: 'success',
    title: '알림 메시지',
    description: '이 알림은 닫기 버튼으로 닫을 수 있습니다.',
    showCloseButton: true,
  },
};

// 아이콘 없는 버전
export const WithoutIcon: Story = {
  args: {
    status: 'info',
    title: '아이콘 없는 토스트',
    description: '상황에 따라 아이콘을 숨길 수 있습니다.',
    showLeadingIcon: false,
  },
};

// 모든 옵션이 활성화된 버전
export const FullFeatured: Story = {
  args: {
    status: 'warning',
    title: '모든 기능이 포함된 토스트',
    description: '아이콘, 설명 텍스트, 닫기 버튼이 모두 포함되어 있습니다.',
    showLeadingIcon: true,
    showCloseButton: true,
  },
};

// 여러 토스트를 보여주는 스토리
export const MultipleToasts: Story = {
  args: {
    status: 'success',
    title: 'Multiple Toasts Example',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Toast
        status="success"
        title="성공 메시지"
        description="작업이 성공적으로 완료되었습니다."
        showLeadingIcon={true}
      />
      <Toast
        status="error"
        title="오류 메시지"
        description="예상치 못한 오류가 발생했습니다."
        showLeadingIcon={true}
        showCloseButton={true}
      />
      <Toast status="warning" title="경고 메시지" showLeadingIcon={true} />
      <Toast
        status="info"
        title="정보 메시지"
        description="새로운 업데이트가 있습니다."
        showLeadingIcon={true}
        showCloseButton={true}
      />
    </div>
  ),
};
