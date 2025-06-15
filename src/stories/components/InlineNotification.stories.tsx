import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InlineNotification } from '../../components/inline-notification';
import { textStyles, fontWeight } from '../../tokens/typography';

const meta: Meta<typeof InlineNotification> = {
  title: 'Components/InlineNotification',
  component: InlineNotification,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
페이지 내에서 사용자에게 중요한 정보나 상태를 알려주는 컴포넌트입니다.
피그마 디자인에 따라 크기(s, m)와 타입(normal, success, warning)을 지원합니다.

## 타입
- **normal**: 일반적인 정보 알림 (파란색)
- **success**: 성공 알림 (초록색)
- **warning**: 경고 알림 (빨간색)

## 크기
- **s**: 작은 크기 (20px 아이콘, body2 텍스트, regular 폰트)
- **m**: 중간 크기 (24px 아이콘, body2 텍스트, medium 폰트) - 기본값

## 너비 설정
- 기본값: 480px
- 'fill'로 설정하면 부모 요소의 전체 너비를 사용

## 사용 시나리오
- 폼 제출 결과 안내
- 시스템 상태 알림
- 경고 메시지 표시
- 정보성 안내 메시지
- 클릭 가능한 알림 (isButton=true)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['normal', 'success', 'warning'],
      description: '알림의 타입을 나타냅니다.',
    },
    message: {
      control: { type: 'text' },
      description: '알림의 메시지 내용입니다.',
    },
    size: {
      control: { type: 'radio' },
      options: ['s', 'm'],
      description: '컴포넌트의 크기입니다.',
    },
    isButton: {
      control: { type: 'boolean' },
      description:
        '전체 영역이 버튼으로 동작하는지 여부입니다. true일 때 화살표도 함께 표시됩니다.',
    },
    borderRadius: {
      control: { type: 'boolean' },
      description: '8px의 둥근 모서리를 적용할지 여부입니다.',
    },
    textStyle: {
      control: { type: 'select' },
      options: Object.keys(textStyles),
      description: '텍스트 스타일을 오버라이드합니다.',
    },
    fontWeight: {
      control: { type: 'select' },
      options: Object.keys(fontWeight),
      description: '폰트 굵기를 오버라이드합니다.',
    },
    width: {
      control: { type: 'text' },
      description: '컴포넌트의 너비입니다. "fill"로 설정하면 전체 너비를 사용합니다.',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 호출되는 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    type: 'normal',
    message: '새로운 업데이트가 있습니다.',
    size: 'm',
  },
};

// Normal 타입
export const Normal: Story = {
  args: {
    type: 'normal',
    message: '정보를 확인해주세요.',
    size: 'm',
    isButton: true,
  },
};

// 성공 타입
export const Success: Story = {
  args: {
    type: 'success',
    message: '변경사항이 성공적으로 저장되었습니다.',
    size: 'm',
  },
};

// 경고 타입
export const Warning: Story = {
  args: {
    type: 'warning',
    message: '디스크 공간이 부족합니다. 불필요한 파일을 삭제해주세요.',
    size: 'm',
    isButton: true,
  },
};

// 작은 크기
export const SmallSize: Story = {
  args: {
    type: 'normal',
    message: '작은 크기의 알림입니다.',
    size: 's',
    isButton: true,
  },
};

// 중간 크기
export const MediumSize: Story = {
  args: {
    type: 'success',
    message: '중간 크기의 알림입니다.',
    size: 'm',
    isButton: true,
  },
};

// 둥근 모서리
export const RoundedCorners: Story = {
  args: {
    type: 'normal',
    message: '둥근 모서리가 적용된 알림입니다.',
    size: 'm',
    borderRadius: true,
    isButton: true,
  },
};

// 커스텀 텍스트 스타일
export const CustomTextStyle: Story = {
  args: {
    type: 'success',
    message: '커스텀 텍스트 스타일이 적용된 알림입니다.',
    size: 'm',
    textStyle: textStyles.heading1,
    fontWeight: fontWeight.bold,
  },
};

// 전체 너비 사용
export const FillWidth: Story = {
  args: {
    type: 'success',
    message: '전체 너비를 사용하는 알림입니다.',
    size: 'm',
    isButton: true,
    width: 'fill',
  },
};

// 긴 메시지
export const LongMessage: Story = {
  args: {
    type: 'normal',
    message:
      '이것은 매우 긴 메시지입니다. 개인정보 처리방침과 서비스 이용약관이 변경되었습니다. 변경된 내용은 2024년 1월 1일부터 적용되며, 계속 서비스를 이용하시면 변경된 약관에 동의하는 것으로 간주됩니다.',
    size: 'm',
    isButton: true,
  },
};

// 모든 타입을 보여주는 스토리
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
      <InlineNotification
        type="normal"
        message="일반 정보 알림입니다."
        size="m"
        isButton={true}
        onClick={() => console.log('Normal clicked')}
      />
      <InlineNotification type="success" message="성공적으로 완료되었습니다." size="m" />
      <InlineNotification
        type="warning"
        message="주의가 필요한 상황입니다."
        size="m"
        isButton={true}
        onClick={() => console.log('Warning clicked')}
      />
    </div>
  ),
};

// 크기 비교
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>작은 크기 (s)</h3>
        <InlineNotification
          type="normal"
          message="작은 크기의 알림입니다."
          size="s"
          isButton={true}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>중간 크기 (m)</h3>
        <InlineNotification
          type="normal"
          message="중간 크기의 알림입니다."
          size="m"
          isButton={true}
        />
      </div>
    </div>
  ),
};

// 스타일링 옵션 비교
export const StylingOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>기본 스타일</h3>
        <InlineNotification type="normal" message="기본 스타일의 알림입니다." size="m" />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>둥근 모서리</h3>
        <InlineNotification
          type="success"
          message="둥근 모서리가 적용된 알림입니다."
          size="m"
          borderRadius={true}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>커스텀 폰트</h3>
        <InlineNotification
          type="warning"
          message="굵은 폰트가 적용된 알림입니다."
          size="m"
          fontWeight={fontWeight.bold}
        />
      </div>
    </div>
  ),
};

// 너비 설정 비교
export const WidthComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          기본 너비 (480px)
        </h3>
        <InlineNotification
          type="normal"
          message="기본 너비를 사용합니다."
          size="m"
          isButton={true}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          전체 너비 (fill)
        </h3>
        <InlineNotification
          type="success"
          message="전체 너비를 사용합니다."
          size="m"
          isButton={true}
          width="fill"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          커스텀 너비 (300px)
        </h3>
        <InlineNotification
          type="warning"
          message="커스텀 너비를 사용합니다."
          size="m"
          isButton={true}
          width="300px"
        />
      </div>
    </div>
  ),
};

// 인터랙션 테스트 스토리
export const InteractionTest: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState([
      { id: 1, type: 'normal' as const, message: '첫 번째 알림 - 전체 영역을 클릭해보세요.' },
      { id: 2, type: 'success' as const, message: '두 번째 알림 - 성공 메시지입니다.' },
      { id: 3, type: 'warning' as const, message: '세 번째 알림 - 경고 메시지입니다.' },
    ]);

    const handleClick = (id: number) => {
      console.log(`Notification ${id} clicked`);
      alert(`알림 ${id}번이 클릭되었습니다!`);
    };

    const resetNotifications = () => {
      setNotifications([
        { id: Date.now() + 1, type: 'normal', message: '첫 번째 알림 - 전체 영역을 클릭해보세요.' },
        { id: Date.now() + 2, type: 'success', message: '두 번째 알림 - 성공 메시지입니다.' },
        { id: Date.now() + 3, type: 'warning', message: '세 번째 알림 - 경고 메시지입니다.' },
      ]);
    };

    return (
      <div style={{ width: '500px' }}>
        <button
          onClick={resetNotifications}
          style={{
            marginBottom: '16px',
            padding: '8px 16px',
            backgroundColor: '#7248D9',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          알림 리셋
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notifications.map((notification) => (
            <InlineNotification
              key={notification.id}
              type={notification.type}
              message={notification.message}
              size="m"
              isButton={true}
              onClick={() => handleClick(notification.id)}
              borderRadius={true}
            />
          ))}
        </div>
      </div>
    );
  },
};
