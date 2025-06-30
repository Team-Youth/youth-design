import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToastProvider, useToast, ToastStatus } from '../../components';

// Toast 테스터 컴포넌트
interface ToastTesterProps {
  status: ToastStatus;
  title: string;
  description?: string;
  duration?: number;
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
  limit?: number;
  autoTrigger?: boolean;
  showMultiple?: boolean;
}

const ToastTester: React.FC<ToastTesterProps> = ({
  status,
  title,
  description,
  duration,
  position = 'top-right',
  limit = 3,
  autoTrigger = false,
  showMultiple = false,
}) => {
  const toast = useToast();
  const hasTriggeredRef = React.useRef(false);

  React.useEffect(() => {
    // autoTrigger가 true이고 아직 트리거되지 않았을 때만 실행
    if (autoTrigger && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true;

      if (showMultiple) {
        // 여러 토스트 표시
        toast[status](title, description, { duration });
        setTimeout(() => toast.warning('두 번째', '스택 테스트'), 300);
        setTimeout(() => toast.info('세 번째', '리미트 테스트'), 600);
        setTimeout(() => toast.error('네 번째', '초과 테스트'), 900);
      } else {
        toast[status](title, description, { duration });
      }
    }

    // autoTrigger가 false로 변경되면 다시 트리거 가능하도록 리셋
    if (!autoTrigger) {
      hasTriggeredRef.current = false;
    }
  }, [status, title, description, duration, autoTrigger, showMultiple]); // toast 제거

  const handleShowToast = () => {
    if (showMultiple) {
      toast[status](title, description, { duration });
      setTimeout(() => toast.warning('두 번째', '스택 테스트'), 300);
      setTimeout(() => toast.info('세 번째', '리미트 테스트'), 600);
      setTimeout(() => toast.error('네 번째', '초과 테스트'), 900);
    } else {
      toast[status](title, description, { duration });
    }
  };

  const handleLongText = () => {
    toast.info(
      '긴 텍스트 테스트',
      '이것은 긴 텍스트를 테스트하기 위한 토스트입니다. Base UI의 애니메이션과 접근성 기능들이 잘 작동하는지 확인해보세요. F6 키를 눌러 토스트에 포커스하거나, 스와이프해서 닫을 수 있습니다.',
      { duration: 8000 },
    );
  };

  const handleRemoveAll = () => {
    toast.removeAll();
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    margin: '8px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    color: 'white',
  };

  const getStatusColor = (status: ToastStatus) => {
    switch (status) {
      case 'success':
        return '#10b981';
      case 'error':
        return '#ef4444';
      case 'warning':
        return '#f59e0b';
      case 'info':
        return '#3b82f6';
      default:
        return '#6b7280';
    }
  };

  return (
    <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#1f2937', marginBottom: '8px' }}>🍞 Toast 테스트 (Base UI 기반)</h2>
        <p style={{ color: '#6b7280', marginBottom: '16px', lineHeight: '1.5' }}>
          <strong>Position:</strong> {position} | <strong>Limit:</strong> {limit} |{' '}
          <strong>Duration:</strong> {duration}ms
          <br />
          <strong>접근성 테스트:</strong> <kbd>F6</kbd> 토스트 포커스, <kbd>Escape</kbd> 닫기,{' '}
          <strong>스와이프</strong> 제스처 지원
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
        <button
          onClick={handleShowToast}
          style={{
            ...buttonStyle,
            backgroundColor: getStatusColor(status),
          }}
        >
          {showMultiple
            ? '🔢 Multiple Toasts'
            : `${status === 'success' ? '✅' : status === 'error' ? '❌' : status === 'warning' ? '⚠️' : 'ℹ️'} Show ${status} Toast`}
        </button>

        <button
          onClick={handleLongText}
          style={{
            ...buttonStyle,
            backgroundColor: '#8b5cf6',
          }}
        >
          📝 Long Text Toast
        </button>

        <button
          onClick={handleRemoveAll}
          style={{
            ...buttonStyle,
            backgroundColor: '#6b7280',
          }}
        >
          🗑️ Remove All
        </button>
      </div>

      <div
        style={{
          padding: '16px',
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#374151',
        }}
      >
        <h4 style={{ margin: '0 0 8px 0', color: '#1f2937' }}>🎯 Base UI 기능:</h4>
        <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.6' }}>
          <li>
            <strong>접근성:</strong> 스크린 리더 자동 읽기, ARIA 속성
          </li>
          <li>
            <strong>키보드:</strong> F6(포커스), Escape(닫기), Tab(이동)
          </li>
          <li>
            <strong>제스처:</strong> 터치 디바이스에서 스와이프로 닫기
          </li>
          <li>
            <strong>포커스:</strong> 토스트 닫힘 후 이전 위치 복귀
          </li>
          <li>
            <strong>애니메이션:</strong> 부드러운 입장/퇴장 효과
          </li>
          <li>
            <strong>스택:</strong> 최대 {limit}개, 초과 시 오래된 것 제거
          </li>
        </ul>
      </div>
    </div>
  );
};

// Story wrapper with ToastProvider
const ToastStoryWrapper: React.FC<ToastTesterProps> = (props) => {
  return (
    <ToastProvider position={props.position} defaultDuration={props.duration} limit={props.limit}>
      <ToastTester {...props} />
    </ToastProvider>
  );
};

const meta: Meta<typeof ToastStoryWrapper> = {
  title: 'Components/Feedback/Toast',
  component: ToastStoryWrapper,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Base UI 기반의 Toast 시스템입니다. 접근성, 키보드 네비게이션, 터치 제스처를 지원하며 youth-design 스타일이 적용되었습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
      description: '토스트 상태 타입',
    },
    title: {
      control: { type: 'text' },
      description: '토스트 제목',
    },
    description: {
      control: { type: 'text' },
      description: '토스트 설명 (선택사항)',
    },
    duration: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: '지속 시간 (밀리초)',
    },
    position: {
      control: { type: 'select' },
      options: [
        'top-right',
        'top-left',
        'bottom-right',
        'bottom-left',
        'top-center',
        'bottom-center',
      ],
      description: '토스트 표시 위치',
    },
    limit: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: '최대 토스트 개수',
    },
    autoTrigger: {
      control: { type: 'boolean' },
      description: '자동으로 토스트 표시',
    },
    showMultiple: {
      control: { type: 'boolean' },
      description: '여러 토스트 동시 표시',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToastStoryWrapper>;

export const Default: Story = {
  args: {
    status: 'info',
    title: '알림',
    description: '기본 토스트 메시지입니다.',
    duration: 4000,
    position: 'top-right',
    limit: 3,
    autoTrigger: false,
    showMultiple: false,
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    title: '성공!',
    description: '작업이 성공적으로 완료되었습니다.',
    duration: 4000,
    position: 'top-right',
    limit: 3,
    autoTrigger: true,
    showMultiple: false,
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    title: '오류 발생',
    description: '작업 중 문제가 발생했습니다. 다시 시도해주세요.',
    duration: 6000,
    position: 'top-right',
    limit: 3,
    autoTrigger: true,
    showMultiple: false,
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    title: '주의 필요',
    description: '이 작업을 계속하시겠습니까?',
    duration: 5000,
    position: 'top-right',
    limit: 3,
    autoTrigger: true,
    showMultiple: false,
  },
};

export const LongMessage: Story = {
  args: {
    status: 'info',
    title: '긴 메시지 테스트',
    description:
      '이것은 아주 긴 메시지를 테스트하기 위한 토스트입니다. Base UI의 다양한 기능들이 긴 텍스트와 함께 어떻게 작동하는지 확인할 수 있습니다. 접근성 기능, 키보드 네비게이션, 터치 제스처 등이 모두 정상적으로 작동해야 합니다.',
    duration: 8000,
    position: 'top-right',
    limit: 3,
    autoTrigger: true,
    showMultiple: false,
  },
};

export const MultipleToasts: Story = {
  args: {
    status: 'success',
    title: '첫 번째 토스트',
    description: '여러 토스트가 순차적으로 나타납니다.',
    duration: 4000,
    position: 'top-right',
    limit: 3,
    autoTrigger: true,
    showMultiple: true,
  },
};

export const PositionTopLeft: Story = {
  args: {
    status: 'info',
    title: '위치 테스트',
    description: '왼쪽 상단에서 표시됩니다.',
    duration: 4000,
    position: 'top-left',
    limit: 3,
    autoTrigger: true,
    showMultiple: false,
  },
};

export const PositionBottomCenter: Story = {
  args: {
    status: 'warning',
    title: '중앙 하단',
    description: '화면 중앙 하단에 표시됩니다.',
    duration: 4000,
    position: 'bottom-center',
    limit: 3,
    autoTrigger: true,
    showMultiple: false,
  },
};

export const HighLimit: Story = {
  args: {
    status: 'info',
    title: '높은 제한',
    description: '최대 5개까지 표시 가능합니다.',
    duration: 4000,
    position: 'top-right',
    limit: 5,
    autoTrigger: false,
    showMultiple: true,
  },
};

export const ShortDuration: Story = {
  args: {
    status: 'success',
    title: '빠른 알림',
    description: '2초 후 자동으로 사라집니다.',
    duration: 2000,
    position: 'top-right',
    limit: 3,
    autoTrigger: true,
    showMultiple: false,
  },
};

export const Interactive: Story = {
  args: {
    status: 'info',
    title: '인터랙티브 테스트',
    description: 'Controls 패널에서 값을 변경해보세요!',
    duration: 4000,
    position: 'top-right',
    limit: 3,
    autoTrigger: false,
    showMultiple: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controls 패널에서 다양한 옵션을 조정하여 토스트의 동작을 테스트할 수 있습니다. F6, Escape 키와 스와이프 제스처도 테스트해보세요.',
      },
    },
  },
};
