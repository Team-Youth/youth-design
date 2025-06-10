import type { Meta, StoryObj } from '@storybook/react';
import { Illust, IllustType } from '../../components';

const meta: Meta<typeof Illust> = {
  title: 'Components/Illust',
  component: Illust,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Illust 컴포넌트는 SVG 일러스트를 표시하는 컴포넌트입니다. 다양한 크기와 클릭 이벤트를 지원합니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'empty',
        'man',
        'woman',
        'money',
        'idCard',
        'thumbup',
        'thumbdown',
        'coupon',
      ] as IllustType[],
      description: '표시할 일러스트 타입',
    },
    size: {
      control: { type: 'number', min: 12, max: 200, step: 4 },
      description: '일러스트 크기 (픽셀 단위)',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    type: 'empty',
    size: 48,
  },
};

// 다양한 타입의 일러스트
export const AllTypes: Story = {
  render: () => {
    const types: IllustType[] = [
      'empty',
      'man',
      'woman',
      'money',
      'idCard',
      'thumbup',
      'thumbdown',
      'coupon',
    ];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          padding: '20px',
        }}
      >
        {types.map((type) => (
          <div
            key={type}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Illust type={type} size={64} />
            <span
              style={{
                fontSize: '12px',
                color: '#666',
                textAlign: 'center',
              }}
            >
              {type}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

// 다양한 크기
export const Sizes: Story = {
  render: () => {
    const sizes = [16, 24, 32, 48, 64, 96];

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          padding: '20px',
        }}
      >
        {sizes.map((size) => (
          <div
            key={size}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Illust type="man" size={size} />
            <span
              style={{
                fontSize: '12px',
                color: '#666',
              }}
            >
              {size}px
            </span>
          </div>
        ))}
      </div>
    );
  },
};

// 클릭 가능한 일러스트
export const Clickable: Story = {
  args: {
    type: 'thumbup',
    size: 64,
    onClick: () => alert('일러스트가 클릭되었습니다!'),
  },
  parameters: {
    docs: {
      description: {
        story: '클릭 이벤트가 있는 일러스트는 버튼 역할을 하며, 키보드 접근성도 지원합니다.',
      },
    },
  },
};

// 커스텀 스타일
export const CustomStyle: Story = {
  args: {
    type: 'money',
    size: 64,
    style: {
      padding: '16px',
      backgroundColor: '#f0f4f8',
      borderRadius: '12px',
      border: '2px solid #e2e8f0',
    },
    className: 'custom-illust',
  },
  parameters: {
    docs: {
      description: {
        story: '커스텀 스타일과 CSS 클래스를 적용한 일러스트입니다.',
      },
    },
  },
};

// 에러 상태 (존재하지 않는 타입)
export const ErrorState: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <p style={{ marginBottom: '16px', color: '#666' }}>
        존재하지 않는 일러스트 타입을 사용할 경우:
      </p>
      {/* @ts-ignore - 의도적으로 잘못된 타입을 사용하여 에러 상태를 보여줌 */}
      <Illust type="nonexistent" size={48} />
      <p style={{ marginTop: '16px', fontSize: '12px', color: '#999' }}>
        콘솔에서 경고 메시지를 확인할 수 있습니다.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '존재하지 않는 일러스트 타입을 사용할 때의 fallback UI입니다.',
      },
    },
  },
};
