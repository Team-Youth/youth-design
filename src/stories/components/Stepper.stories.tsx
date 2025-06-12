import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper } from '../../components/stepper/Stepper';
import React from 'react';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '숫자 값을 증감시킬 수 있는 Stepper 컴포넌트입니다. 단위 표시와 시간 형식을 지원하며, 문자열 값을 전달하면 표시 전용으로 사용할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: '현재 값 (숫자 또는 문자열)',
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
    unit: {
      control: 'text',
      description: '단위 (예: "회", "분", "개월")',
    },
    step: {
      control: 'number',
      description: '증감 폭 (기본값: 1)',
    },
    isTime: {
      control: 'boolean',
      description: '시간 관련 값인지 여부',
    },
    timeBaseUnit: {
      control: { type: 'select' },
      options: ['sec', 'min', 'hour'],
      description: '시간의 시작 단위',
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

// 단위 표시 - 횟수
export const WithUnitCount: Story = {
  render: ControlledTemplate,
  args: {
    value: 10,
    min: 0,
    max: 100,
    unit: '회',
    step: 10,
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: '횟수를 표시하는 Stepper입니다. 10회 단위로 증감됩니다.',
      },
    },
  },
};

// 단위 표시 - 개월
export const WithUnitMonth: Story = {
  render: ControlledTemplate,
  args: {
    value: 1,
    min: 1,
    max: 12,
    unit: '개월',
    step: 1,
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: '유효기간을 개월로 표시하는 Stepper입니다.',
      },
    },
  },
};

// 시간 형식 - 분 단위
export const Timemins: Story = {
  render: ControlledTemplate,
  args: {
    value: 30,
    min: 0,
    max: 240,
    step: 30,
    isTime: true,
    timeBaseUnit: 'min',
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '수업 시간을 표시하는 Stepper입니다. 30분 단위로 증감되며, 분 단위로 표시됩니다. (0분, 30분, 60분 → 1시간)',
      },
    },
  },
};

// 시간 형식 - 시간 단위
export const TimeHours: Story = {
  render: ControlledTemplate,
  args: {
    value: 2,
    min: 0.5,
    max: 8,
    step: 0.5,
    isTime: true,
    timeBaseUnit: 'hour',
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: '시간 단위로 입력받는 Stepper입니다. 0.5시간(30분) 단위로 증감됩니다.',
      },
    },
  },
};

// 시간 형식 - 초 단위
export const Timesecs: Story = {
  render: ControlledTemplate,
  args: {
    value: 45,
    min: 0,
    max: 3600,
    step: 15,
    isTime: true,
    timeBaseUnit: 'sec',
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '초 단위로 입력받는 Stepper입니다. 60초 미만은 초로, 그 이상은 분과 초로 표시됩니다. 15초 단위로 증감되며, 편집 시 가장 가까운 15초 배수로 자동 조정됩니다.',
      },
    },
  },
};

// Step 반올림 테스트 - 20초 단위
export const StepRounding20Sec: Story = {
  render: ControlledTemplate,
  args: {
    value: 20,
    min: 0,
    max: 300,
    step: 20,
    isTime: true,
    timeBaseUnit: 'sec',
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '20초 단위로 증감되는 Stepper입니다. 편집 시 임의의 값을 입력해도 가장 가까운 20초 배수로 자동 조정됩니다. (예: 37초 입력 → 40초로 조정)',
      },
    },
  },
};

// Step 반올림 테스트 - 30분 단위
export const StepRounding30Min: Story = {
  render: ControlledTemplate,
  args: {
    value: 60,
    min: 0,
    max: 480,
    step: 30,
    isTime: true,
    timeBaseUnit: 'min',
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '30분 단위로 증감되는 Stepper입니다. 분 단위로 표시되며, 편집 시 임의의 값을 입력해도 가장 가까운 30분 배수로 자동 조정됩니다. (예: 50분 입력 → 1시간으로 조정)',
      },
    },
  },
};

// 범위 제한 테스트 - 큰 step
export const LargeStepBoundary: Story = {
  render: ControlledTemplate,
  args: {
    value: 450,
    min: 0,
    max: 7000,
    step: 1500,
    isTime: true,
    timeBaseUnit: 'sec',
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '큰 step(25분=1500초) 단위 테스트입니다. 현재 값이 450초(7분 30초)일 때 마이너스 버튼을 눌러도 음수가 되지 않고 0초로 제한됩니다.',
      },
    },
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

// String value (표시 전용)
export const StringValue: Story = {
  args: {
    value: '무제한',
  },
  parameters: {
    docs: {
      description: {
        story:
          'value로 string을 전달하면 자동으로 disabled 처리되어 표시 전용으로 사용할 수 있습니다. 증감 버튼은 비활성화됩니다.',
      },
    },
  },
};

// String value 다양한 예시
export const StringValueVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <div>
        <h3>무제한 표시</h3>
        <Stepper value="무제한" />
      </div>

      <div>
        <h3>운영 미정</h3>
        <Stepper value="운영 미정" />
      </div>

      <div>
        <h3>N/A</h3>
        <Stepper value="N/A" />
      </div>

      <div>
        <h3>별도 문의</h3>
        <Stepper value="별도 문의" />
      </div>

      <div>
        <h3>매월 갱신</h3>
        <Stepper value="매월 갱신" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '다양한 문자열 값들을 표시하는 예시입니다. 모두 자동으로 disabled 처리되어 표시 전용으로 사용됩니다.',
      },
    },
  },
};

// 동적 전환 (string ↔ number)
const DynamicValueTemplate = () => {
  const [isStringMode, setIsStringMode] = useState(false);
  const [numValue, setNumValue] = useState(10);

  const currentValue = isStringMode ? '무제한' : numValue;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <div>
        <button
          onClick={() => setIsStringMode(!isStringMode)}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            background: '#fff',
            cursor: 'pointer',
          }}
        >
          {isStringMode ? 'Number로 전환' : 'String으로 전환'}
        </button>
      </div>

      <div>
        <h3>현재 상태: {isStringMode ? 'String Mode' : 'Number Mode'}</h3>
        <Stepper value={currentValue} min={0} max={100} onChange={setNumValue} unit="회" />
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          {isStringMode
            ? 'String 값이 전달되어 자동으로 disabled 처리됩니다.'
            : 'Number 값이 전달되어 정상적으로 stepper 기능이 동작합니다.'}
        </p>
      </div>
    </div>
  );
};

export const DynamicValue: Story = {
  render: DynamicValueTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'value가 string에서 number로, 또는 number에서 string으로 동적으로 변경될 때의 동작을 확인할 수 있습니다. String일 때는 자동으로 disabled되고, number로 바뀌면 다시 조절 가능해집니다.',
      },
    },
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

// Figma 디자인 예시 - 수강권 추가 모달
export const FigmaExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '400px' }}>
      <div>
        <h3>횟수 (10회 단위)</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
          ⓘ 10회 단위로 조정하거나 직접 입력 가능해요 (입력값은 가장 가까운 10회 배수로 자동
          조정됩니다)
        </p>
        <ControlledTemplate value={10} min={0} max={200} unit="회" step={10} editable={true} />
      </div>

      <div>
        <h3>수업 시간 (30분 단위)</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
          자동으로 시간 형식으로 표시됩니다 (예: 60분 → 1시간). 입력값은 30분 배수로 자동
          조정됩니다.
        </p>
        <ControlledTemplate
          value={60}
          min={30}
          max={240}
          step={30}
          isTime={true}
          timeBaseUnit="min"
          editable={true}
        />
      </div>

      <div>
        <h3>유효기간 (1개월 단위)</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
          별도 기간 없이 소진 시 옵션도 제공할 수 있습니다
        </p>
        <ControlledTemplate value={1} min={1} max={24} unit="개월" step={1} editable={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Figma 디자인의 수강권 추가 모달에서 사용되는 Stepper들을 재현한 예시입니다.',
      },
    },
  },
};

// 시간 형식 비교
export const TimeFormatComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '400px' }}>
      <div>
        <h3>분 단위 입력 (30분 → 1시간)</h3>
        <ControlledTemplate
          value={30}
          min={0}
          max={180}
          step={30}
          isTime={true}
          timeBaseUnit="min"
          editable={true}
        />
      </div>

      <div>
        <h3>시간 단위 입력 (1.5시간 → 1시간 30분)</h3>
        <ControlledTemplate
          value={1.5}
          min={0.5}
          max={4}
          step={0.5}
          isTime={true}
          timeBaseUnit="hour"
          editable={true}
        />
      </div>

      <div>
        <h3>초 단위 입력 (45초 → 45초, 90초 → 1분 30초)</h3>
        <ControlledTemplate
          value={45}
          min={0}
          max={3600}
          step={15}
          isTime={true}
          timeBaseUnit="sec"
          editable={true}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '서로 다른 시간 단위로 입력받지만 모두 동일한 시간 형식으로 표시되는 예시입니다.',
      },
    },
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
        <h3>단위 포함</h3>
        <Stepper value={10} min={0} max={100} unit="회" />
      </div>

      <div>
        <h3>시간 형식</h3>
        <Stepper value={90} min={0} max={240} isTime timeBaseUnit="min" />
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

      <div>
        <h3>문자열 값 (표시 전용)</h3>
        <Stepper value="무제한" />
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
        <h3>시간 형식 편집</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
          시간 형식으로 직접 입력할 수 있습니다. (예: "1시간 30분", "90분")
        </p>
        <ControlledTemplate
          value={90}
          min={0}
          max={240}
          isTime={true}
          timeBaseUnit="min"
          editable={true}
        />
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
