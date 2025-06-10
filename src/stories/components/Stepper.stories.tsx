import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper } from '../../components/stepper/Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '숫자 값을 증감시킬 수 있는 Stepper 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: '현재 값',
    },
    min: {
      control: 'number',
      description: '최소값',
    },
    max: {
      control: 'number',
      description: '최대값',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    error: {
      control: 'boolean',
      description: '에러 상태',
    },
    errorMessage: {
      control: 'text',
      description: '에러 메시지',
    },
    width: {
      control: 'text',
      description: '컴포넌트 너비 (fill 또는 픽셀값)',
    },
    focused: {
      control: 'boolean',
      description: '포커스 상태',
    },
    editable: {
      control: 'boolean',
      description: '키보드로 직접 편집 가능 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    value: 0,
    min: 0,
    max: 10,
  },
};

// Controlled 상태
const ControlledTemplate = (args: any) => {
  const [value, setValue] = useState(args.value || 0);

  return <Stepper {...args} value={value} onChange={setValue} />;
};

export const Controlled: Story = {
  render: ControlledTemplate,
  args: {
    value: 5,
    min: 0,
    max: 10,
  },
};

// 편집 가능한 상태
export const Editable: Story = {
  render: ControlledTemplate,
  args: {
    value: 5,
    min: 0,
    max: 10,
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '숫자를 클릭하면 키보드로 직접 입력할 수 있습니다. 숫자와 마이너스 기호만 입력 가능하며, Enter로 확정, Escape로 취소할 수 있습니다.',
      },
    },
  },
};

// 편집 가능한 상태 - 음수 범위
export const EditableNegativeRange: Story = {
  render: ControlledTemplate,
  args: {
    value: -5,
    min: -20,
    max: 20,
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: '음수 범위에서도 편집이 가능합니다. 마이너스 기호를 입력할 수 있습니다.',
      },
    },
  },
};

// 편집 가능한 상태 - 큰 범위
export const EditableLargeRange: Story = {
  render: ControlledTemplate,
  args: {
    value: 150,
    min: 0,
    max: 1000,
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: '큰 범위에서 편집 기능을 사용하면 버튼 클릭보다 빠르게 값을 변경할 수 있습니다.',
      },
    },
  },
};

// 편집 불가능한 상태들
export const EditableDisabled: Story = {
  render: ControlledTemplate,
  args: {
    value: 5,
    min: 0,
    max: 10,
    editable: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'disabled 상태에서는 편집이 불가능합니다.',
      },
    },
  },
};

export const EditableError: Story = {
  render: ControlledTemplate,
  args: {
    value: 5,
    min: 0,
    max: 10,
    editable: true,
    error: true,
    errorMessage: '에러 상태에서는 편집할 수 없습니다.',
  },
  parameters: {
    docs: {
      description: {
        story: 'error 상태에서는 편집이 불가능합니다.',
      },
    },
  },
};

// 최소값에 도달한 상태
export const MinReached: Story = {
  render: ControlledTemplate,
  args: {
    value: 0,
    min: 0,
    max: 10,
  },
};

// 최대값에 도달한 상태
export const MaxReached: Story = {
  render: ControlledTemplate,
  args: {
    value: 10,
    min: 0,
    max: 10,
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    value: 5,
    min: 0,
    max: 10,
    disabled: true,
  },
};

// 에러 상태
export const Error: Story = {
  render: ControlledTemplate,
  args: {
    value: 0,
    min: 0,
    max: 10,
    error: true,
    errorMessage: '값이 올바르지 않습니다.',
  },
};

// 포커스 상태
export const Focused: Story = {
  render: ControlledTemplate,
  args: {
    value: 5,
    min: 0,
    max: 10,
    focused: true,
  },
};

// 가득 찬 너비
export const FullWidth: Story = {
  render: ControlledTemplate,
  args: {
    value: 5,
    min: 0,
    max: 10,
    width: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

// 커스텀 너비
export const CustomWidth: Story = {
  render: ControlledTemplate,
  args: {
    value: 5,
    min: 0,
    max: 10,
    width: '400px',
  },
};

// 다양한 범위
export const LargeRange: Story = {
  render: ControlledTemplate,
  args: {
    value: 50,
    min: 0,
    max: 100,
  },
};

// 음수 범위
export const NegativeRange: Story = {
  render: ControlledTemplate,
  args: {
    value: -5,
    min: -10,
    max: 10,
  },
};

// 모든 상태 조합
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <div>
        <h3>기본 상태</h3>
        <Stepper value={5} min={0} max={10} />
      </div>

      <div>
        <h3>편집 가능</h3>
        <Stepper value={5} min={0} max={10} editable />
      </div>

      <div>
        <h3>최소값 도달</h3>
        <Stepper value={0} min={0} max={10} />
      </div>

      <div>
        <h3>최대값 도달</h3>
        <Stepper value={10} min={0} max={10} />
      </div>

      <div>
        <h3>비활성화</h3>
        <Stepper value={5} min={0} max={10} disabled />
      </div>

      <div>
        <h3>에러 상태</h3>
        <Stepper value={0} min={0} max={10} error errorMessage="값이 올바르지 않습니다." />
      </div>

      <div>
        <h3>포커스 상태</h3>
        <Stepper value={5} min={0} max={10} focused />
      </div>

      <div>
        <h3>가득찬 너비</h3>
        <Stepper value={5} min={0} max={10} width="fill" />
      </div>
    </div>
  ),
};

// 편집 기능 비교
export const EditableComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '400px' }}>
      <div>
        <h3>기본 Stepper (편집 불가)</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
          버튼으로만 값을 변경할 수 있습니다.
        </p>
        <ControlledTemplate value={5} min={0} max={100} editable={false} />
      </div>

      <div>
        <h3>편집 가능한 Stepper</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
          숫자를 클릭하면 키보드로 직접 입력할 수 있습니다. 큰 범위에서 유용합니다.
        </p>
        <ControlledTemplate value={5} min={0} max={100} editable={true} />
      </div>

      <div>
        <h3>편집 가능 + 음수 범위</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
          마이너스 기호도 입력할 수 있습니다.
        </p>
        <ControlledTemplate value={-10} min={-50} max={50} editable={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '편집 가능한 기능과 기본 기능을 비교해볼 수 있습니다.',
      },
    },
  },
};
