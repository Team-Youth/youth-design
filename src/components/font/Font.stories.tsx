import type { Meta, StoryObj } from '@storybook/react';
import { Font } from './Font';
import { textStyles, fontWeight } from '../../tokens/typography';

const meta: Meta<typeof Font> = {
  title: 'Components/Font',
  component: Font,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '디자인 시스템의 Typography 토큰을 기반으로 한 Font 컴포넌트입니다. 다양한 텍스트 스타일과 색상을 지원합니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.keys(textStyles),
      description: 'Typography variant',
    },
    fontWeight: {
      control: 'select',
      options: Object.keys(fontWeight),
      description: 'Font weight override',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'disabled', 'inverse', 'success', 'warning', 'error', 'info'],
      description: 'Text color',
    },
    hoverColor: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'disabled', 'inverse', 'success', 'warning', 'error', 'info'],
      description: 'Hover color',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    whiteSpace: {
      control: 'select',
      options: ['nowrap', 'normal', 'pre-line'],
      description: 'White space handling',
    },
    noWhiteSpace: {
      control: 'boolean',
      description: 'Text overflow with ellipsis',
    },
    underline: {
      control: 'boolean',
      description: 'Underline decoration',
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Font>;

export const Default: Story = {
  args: {
    type: 'body1',
    children: '기본 텍스트입니다.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <Font type="display1">Display 1 - 주목도를 높이고 큰 타이틀 영역 강조에 사용</Font>
      <Font type="display2">Display 2 - 중간 크기 타이틀에 사용</Font>
      <Font type="heading1">Heading 1 - 정보성 카드 타이틀에 주로 사용</Font>
      <Font type="heading2">Heading 2 - 섹션 구분 타이틀 등에 사용</Font>
      <Font type="heading3">Heading 3 - 소제목 등에 사용</Font>
      <Font type="heading4">Heading 4 - 리스트 아이템, 버튼 텍스트 등에 사용</Font>
      <Font type="heading5">Heading 5 - 부가 정보, 캡션 등에 사용</Font>
      <Font type="body1">Body 1 - 주요 본문 텍스트에 사용</Font>
      <Font type="body2">Body 2 - 보조 본문 텍스트에 사용</Font>
      <Font type="body3">Body 3 - 본문 보조, 하위 위계 텍스트 쓰임새로 사용 권장</Font>
      <Font type="caption">Caption - 보조 정보나 컴포넌트 레벨에서 사용</Font>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Font type="heading2" fontWeight="bold">Bold (700) - 강조가 필요한 텍스트</Font>
      <Font type="heading2" fontWeight="semibold">Semibold (600) - 중간 강조 텍스트</Font>
      <Font type="heading2" fontWeight="medium">Medium (500) - 약간의 강조</Font>
      <Font type="heading2" fontWeight="regular">Regular (400) - 일반 텍스트</Font>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: '#f5f5f5', padding: '20px' }}>
      <Font type="body1" color="primary">Primary - 가장 중요한 정보</Font>
      <Font type="body1" color="secondary">Secondary - 부가적인 내용</Font>
      <Font type="body1" color="tertiary">Tertiary - 시각적 우선순위가 낮은 텍스트</Font>
      <Font type="body1" color="disabled">Disabled - 비활성화된 상태</Font>
      <div style={{ backgroundColor: '#333', padding: '12px', borderRadius: '4px' }}>
        <Font type="body1" color="inverse">Inverse - 어두운 배경 위의 밝은 텍스트</Font>
      </div>
      <Font type="body1" color="success">Success - 작업 완료, 저장 성공</Font>
      <Font type="body1" color="warning">Warning - 주의가 필요한 상황</Font>
      <Font type="body1" color="error">Error - 오류 상태나 실패 메시지</Font>
      <Font type="body1" color="info">Info - 보조적인 정보나 안내 메시지</Font>
    </div>
  ),
};

export const WithHover: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Font type="body1" color="primary" hoverColor="info">
        마우스를 올려보세요 (Primary → Info)
      </Font>
      <Font type="body1" color="secondary" hoverColor="success">
        호버 효과가 있는 텍스트 (Secondary → Success)
      </Font>
      <Font type="heading3" color="tertiary" hoverColor="error" underline>
        밑줄과 호버 효과 (Tertiary → Error)
      </Font>
    </div>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <Font type="body1" align="left">왼쪽 정렬 텍스트</Font>
      <Font type="body1" align="center">가운데 정렬 텍스트</Font>
      <Font type="body1" align="right">오른쪽 정렬 텍스트</Font>
      <Font type="body1" align="justify">
        양쪽 정렬 텍스트입니다. 이 텍스트는 양쪽 끝에 맞춰서 정렬됩니다. 긴 텍스트에서 효과를 확인할 수 있습니다.
      </Font>
    </div>
  ),
};

export const TextOverflow: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '200px' }}>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>일반 텍스트 (줄바꿈)</p>
        <Font type="body1">
          이것은 매우 긴 텍스트입니다. 컨테이너 너비를 초과하면 자동으로 줄바꿈됩니다.
        </Font>
      </div>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>noWhiteSpace (말줄임)</p>
        <Font type="body1" noWhiteSpace>
          이것은 매우 긴 텍스트입니다. 컨테이너 너비를 초과하면 말줄임표로 표시됩니다.
        </Font>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    type: 'heading2',
    fontWeight: 'semibold',
    color: 'primary',
    children: '플레이그라운드에서 다양한 옵션을 테스트해보세요!',
  },
}; 