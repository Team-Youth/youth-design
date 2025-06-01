import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from '../../components';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
  },
};

export const WithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    label: 'Text Label',
    description: 'Description',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    size: 'medium',
    label: 'Checked Checkbox',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    size: 'medium',
    label: 'Disabled Checkbox',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    size: 'medium',
    label: 'Disabled Checked Checkbox',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Checkbox size="small" label="Small" />
        <Checkbox size="medium" label="Medium" />
        <Checkbox size="large" label="Large" />
      </div>
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox labelPosition="right" label="Label on Right" description="Description text" />
      <Checkbox labelPosition="left" label="Label on Left" description="Description text" />
    </div>
  ),
};

export const InteractiveGroup: Story = {
  render: () => {
    const [checkboxStates, setCheckboxStates] = useState({
      option1: false,
      option2: true,
      option3: false,
      option4: true,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>체크박스 그룹</h3>
        <Checkbox
          checked={checkboxStates.option1}
          onChange={(checked) => setCheckboxStates((prev) => ({ ...prev, option1: checked }))}
          label="첫 번째 옵션"
          description="첫 번째 옵션에 대한 설명입니다."
        />
        <Checkbox
          checked={checkboxStates.option2}
          onChange={(checked) => setCheckboxStates((prev) => ({ ...prev, option2: checked }))}
          label="두 번째 옵션"
          description="두 번째 옵션에 대한 설명입니다."
        />
        <Checkbox
          checked={checkboxStates.option3}
          onChange={(checked) => setCheckboxStates((prev) => ({ ...prev, option3: checked }))}
          label="세 번째 옵션"
          description="세 번째 옵션에 대한 설명입니다."
        />
        <Checkbox
          checked={checkboxStates.option4}
          onChange={(checked) => setCheckboxStates((prev) => ({ ...prev, option4: checked }))}
          label="네 번째 옵션"
          description="네 번째 옵션에 대한 설명입니다."
        />
        <Checkbox
          checked={false}
          label="비활성화된 옵션"
          description="이 옵션은 선택할 수 없습니다."
          disabled
        />
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>모든 상태</h3>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Checkbox checked={false} label="기본" />
        <Checkbox checked={true} label="선택됨" />
        <Checkbox checked={false} disabled label="비활성화" />
        <Checkbox checked={true} disabled label="비활성화 + 선택됨" />
      </div>
    </div>
  ),
};
