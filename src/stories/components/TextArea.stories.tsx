import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../../components/text-area/TextArea';
import { useState } from 'react';

// Controlled TextArea component for interactive stories
const ControlledTextArea = (props: any) => {
  const [value, setValue] = useState(props.value || '');
  return <TextArea {...props} value={value} onChange={setValue} />;
};

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
텍스트 에어리어(TextArea)는 사용자가 여러 줄의 텍스트를 입력할 수 있는 확장된 입력 컴포넌트입니다.

## 특징
- **상태**: rest, hover, selected, error, disabled 상태 지원
- **문자 수 카운터**: 입력된 문자 수와 최대 문자 수 표시
- **에러 처리**: 에러 상태 및 에러 메시지 표시
- **커서 애니메이션**: 포커스 시 깜빡이는 커서 효과
- **크기 조절**: 최소 높이 160px 설정
- **문자 수 제한**: maxLength 속성으로 입력 제한
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: '입력 필드의 placeholder 텍스트입니다.',
      defaultValue: 'Placeholder',
    },
    value: {
      control: { type: 'text' },
      description: '입력 값입니다.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태를 설정합니다.',
      defaultValue: false,
    },
    error: {
      control: { type: 'boolean' },
      description: '에러 상태를 설정합니다.',
      defaultValue: false,
    },
    errorMessage: {
      control: { type: 'text' },
      description: '에러 메시지를 설정합니다.',
    },
    showCharacterCounter: {
      control: { type: 'boolean' },
      description: '문자 수 카운터 표시 여부를 설정합니다.',
      defaultValue: false,
    },
    maxLength: {
      control: { type: 'number' },
      description: '최대 입력 가능한 문자 수를 설정합니다.',
      defaultValue: 1000,
    },
    width: {
      control: { type: 'select' },
      options: ['320px', 'fill', '400px', '50%'],
      description:
        '텍스트 에어리어의 너비를 설정합니다. "fill"을 사용하면 부모 요소의 100%가 됩니다.',
      defaultValue: '320px',
    },
    rows: {
      control: { type: 'number' },
      description: '텍스트 에어리어의 기본 행 수를 설정합니다.',
      defaultValue: 4,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '내용을 입력해주세요...',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: '내용을 입력해주세요...',
    value:
      '안녕하세요! 이것은 텍스트 에어리어에 입력된 샘플 텍스트입니다.\n\n여러 줄에 걸쳐 긴 텍스트를 입력할 수 있습니다.',
  },
};

export const WithCharacterCounter: Story = {
  args: {
    placeholder: '후기를 작성해주세요...',
    showCharacterCounter: true,
    maxLength: 500,
  },
};

export const WithCharacterCounterAndValue: Story = {
  args: {
    placeholder: '후기를 작성해주세요...',
    value: '이 제품은 정말 만족스럽습니다. 품질도 좋고 가격도 합리적이네요!',
    showCharacterCounter: true,
    maxLength: 500,
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: '메시지를 입력해주세요...',
    value: '너무 짧은 메시지',
    error: true,
    errorMessage: '최소 20자 이상 입력해주세요.',
    showCharacterCounter: true,
    maxLength: 1000,
  },
};

export const ErrorStateWithoutCounter: Story = {
  args: {
    placeholder: '내용을 입력해주세요...',
    value: '잘못된 형식의 내용',
    error: true,
    errorMessage: '올바른 형식으로 입력해주세요.',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '수정할 수 없는 내용',
    value: '이 텍스트는 수정할 수 없습니다.\n\n관리자만 수정 가능한 내용입니다.',
    disabled: true,
    showCharacterCounter: true,
    maxLength: 500,
  },
};

export const LongContent: Story = {
  args: {
    placeholder: '장문의 글을 작성해주세요...',
    value: `이것은 매우 긴 텍스트의 예시입니다. 

텍스트 에어리어는 여러 줄에 걸쳐 긴 내용을 입력할 수 있도록 설계되었습니다. 

사용자는 자유롭게 줄바꿈을 하면서 원하는 만큼 긴 텍스트를 작성할 수 있습니다.

이는 블로그 포스트, 리뷰, 코멘트, 피드백 등 다양한 용도로 활용될 수 있습니다.`,
    showCharacterCounter: true,
    maxLength: 2000,
  },
};

// Interactive controlled examples
export const Interactive: Story = {
  render: () => (
    <ControlledTextArea
      placeholder="자유롭게 내용을 작성해보세요..."
      showCharacterCounter={true}
      maxLength={300}
    />
  ),
};

export const InteractiveWithLongLimit: Story = {
  render: () => (
    <ControlledTextArea
      placeholder="긴 글을 작성해보세요..."
      showCharacterCounter={true}
      maxLength={1000}
      rows={6}
    />
  ),
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Empty (Rest)</h3>
        <TextArea placeholder="내용을 입력해주세요..." />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Filled</h3>
        <TextArea placeholder="내용을 입력해주세요..." value="입력된 텍스트 내용입니다." />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          With Character Counter
        </h3>
        <TextArea
          placeholder="후기를 작성해주세요..."
          value="좋은 제품이에요!"
          showCharacterCounter={true}
          maxLength={200}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Error State</h3>
        <TextArea
          placeholder="메시지를 입력해주세요..."
          value="짧은 글"
          error={true}
          errorMessage="최소 20자 이상 입력해주세요."
          showCharacterCounter={true}
          maxLength={500}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Disabled</h3>
        <TextArea
          placeholder="수정할 수 없는 내용"
          value="이 내용은 수정할 수 없습니다."
          disabled={true}
          showCharacterCounter={true}
          maxLength={300}
        />
      </div>
    </div>
  ),
};

// Different sizes
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '12px', fontWeight: '500', color: '#666' }}>
          Small (3 rows)
        </h4>
        <TextArea placeholder="짧은 메모..." rows={3} showCharacterCounter={true} maxLength={150} />
      </div>

      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '12px', fontWeight: '500', color: '#666' }}>
          Medium (4 rows - default)
        </h4>
        <TextArea
          placeholder="일반적인 내용..."
          rows={4}
          showCharacterCounter={true}
          maxLength={300}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '12px', fontWeight: '500', color: '#666' }}>
          Large (6 rows)
        </h4>
        <TextArea
          placeholder="긴 내용을 작성해주세요..."
          rows={6}
          showCharacterCounter={true}
          maxLength={1000}
        />
      </div>
    </div>
  ),
};

// Usage examples
export const UsageExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '12px', fontWeight: '500', color: '#666' }}>
          Product Review
        </h4>
        <ControlledTextArea
          placeholder="제품 후기를 작성해주세요..."
          showCharacterCounter={true}
          maxLength={500}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '12px', fontWeight: '500', color: '#666' }}>
          Feedback
        </h4>
        <ControlledTextArea
          placeholder="피드백을 남겨주세요..."
          showCharacterCounter={true}
          maxLength={1000}
          rows={5}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '12px', fontWeight: '500', color: '#666' }}>
          Quick Note
        </h4>
        <ControlledTextArea placeholder="간단한 메모..." maxLength={200} rows={3} />
      </div>
    </div>
  ),
};

// Width examples
export const WidthDefault: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>
        기본 너비 (320px)
      </h3>
      <ControlledTextArea
        placeholder="기본 너비로 설정된 텍스트 에어리어입니다..."
        showCharacterCounter={true}
        maxLength={200}
      />
    </div>
  ),
};

export const WidthFill: Story = {
  render: () => (
    <div style={{ padding: '20px', width: '600px', border: '1px dashed #ccc' }}>
      <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>
        부모 컨테이너 100% (width="fill")
      </h3>
      <ControlledTextArea
        width="fill"
        placeholder="부모 컨테이너의 전체 너비를 사용하는 텍스트 에어리어입니다..."
        showCharacterCounter={true}
        maxLength={300}
      />
    </div>
  ),
};

export const WidthCustom: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>
        커스텀 너비 (500px)
      </h3>
      <ControlledTextArea
        width="500px"
        placeholder="커스텀 너비로 설정된 텍스트 에어리어입니다..."
        showCharacterCounter={true}
        maxLength={400}
      />
    </div>
  ),
};

export const WidthShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#25282D' }}>
          💎 Width 옵션 비교
        </h2>
        <p style={{ marginBottom: '24px', color: '#8D97A5', fontSize: '14px' }}>
          다양한 너비 설정으로 레이아웃에 맞게 조정할 수 있습니다.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            기본값 (320px)
          </h3>
          <ControlledTextArea
            placeholder="기본 너비 텍스트 에어리어..."
            showCharacterCounter={true}
            maxLength={150}
          />
        </div>

        <div style={{ width: '700px', border: '1px dashed #ddd', padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            부모 컨테이너 100% (width="fill")
          </h3>
          <ControlledTextArea
            width="fill"
            placeholder="부모의 100% 너비를 사용하는 텍스트 에어리어..."
            showCharacterCounter={true}
            maxLength={200}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            커스텀 너비 (500px)
          </h3>
          <ControlledTextArea
            width="500px"
            placeholder="커스텀 너비로 설정된 텍스트 에어리어..."
            showCharacterCounter={true}
            maxLength={250}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            상대적 너비 (60%)
          </h3>
          <ControlledTextArea
            width="60%"
            placeholder="상대적 너비로 설정된 텍스트 에어리어..."
            showCharacterCounter={true}
            maxLength={180}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            숫자로 설정 (400)
          </h3>
          <ControlledTextArea
            width={400}
            placeholder="숫자 값으로 설정된 텍스트 에어리어..."
            showCharacterCounter={true}
            maxLength={220}
          />
        </div>
      </div>
    </div>
  ),
};
