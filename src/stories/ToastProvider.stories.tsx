import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToastProvider, useToast } from '../components/toast';
import { TextButton } from '../components/text-button';

// 예제 컴포넌트
const ToastExample: React.FC = () => {
  const toast = useToast();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <h3>Toast 테스트</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <TextButton
          size="m"
          onClick={() => toast.success('성공!', '작업이 성공적으로 완료되었습니다.')}
        >
          Success Toast
        </TextButton>

        <TextButton
          size="m"
          onClick={() => toast.error('오류 발생!', '예상치 못한 오류가 발생했습니다.')}
        >
          Error Toast
        </TextButton>

        <TextButton size="m" onClick={() => toast.warning('주의!', '저장 공간이 부족합니다.')}>
          Warning Toast
        </TextButton>

        <TextButton size="m" onClick={() => toast.info('알림', '새로운 업데이트가 있습니다.')}>
          Info Toast
        </TextButton>
      </div>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <TextButton size="m" onClick={() => toast.success('제목만 있는 토스트')}>
          Title Only
        </TextButton>

        <TextButton
          size="m"
          onClick={() =>
            toast.custom({
              status: 'info',
              title: '사용자 정의 토스트',
              description: '5초 후에 사라집니다.',
              duration: 5000,
              showLeadingIcon: false,
            })
          }
        >
          Custom Toast
        </TextButton>

        <TextButton size="m" onClick={() => toast.removeAll()}>
          모든 Toast 제거
        </TextButton>
      </div>
    </div>
  );
};

const meta = {
  title: 'Components/ToastProvider',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
ToastProvider는 앱 전체에서 Toast 알림을 관리할 수 있는 Context Provider입니다.
useToast 훅과 함께 사용하여 간편하게 Toast를 표시할 수 있습니다.

## 특징
- 전역 Toast 관리
- 자동 제거 (기본 4초)
- 6가지 위치 옵션
- 편리한 메서드 (success, error, warning, info)
- 사용자 정의 옵션 지원

## 사용법
1. 앱 최상위에 ToastProvider 설정
2. 컴포넌트에서 useToast 훅 사용
3. toast.success(), toast.error() 등으로 호출
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToastProvider position="top-right" defaultDuration={4000}>
      <ToastExample />
    </ToastProvider>
  ),
};

export const TopLeft: Story = {
  render: () => (
    <ToastProvider position="top-left" defaultDuration={4000}>
      <ToastExample />
    </ToastProvider>
  ),
};

export const BottomRight: Story = {
  render: () => (
    <ToastProvider position="bottom-right" defaultDuration={4000}>
      <ToastExample />
    </ToastProvider>
  ),
};

export const TopCenter: Story = {
  render: () => (
    <ToastProvider position="top-center" defaultDuration={4000}>
      <ToastExample />
    </ToastProvider>
  ),
};

export const LongDuration: Story = {
  render: () => (
    <ToastProvider position="top-right" defaultDuration={8000}>
      <ToastExample />
    </ToastProvider>
  ),
};
