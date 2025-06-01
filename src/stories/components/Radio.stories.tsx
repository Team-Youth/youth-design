import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from '../../components';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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

type Story = StoryObj<typeof Radio>;

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
    label: 'Checked Radio',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    size: 'medium',
    label: 'Disabled Radio',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    size: 'medium',
    label: 'Disabled Checked Radio',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Radio size="small" label="Small" />
        <Radio size="medium" label="Medium" />
        <Radio size="large" label="Large" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Radio size="small" label="Small Checked" checked />
        <Radio size="medium" label="Medium Checked" checked />
        <Radio size="large" label="Large Checked" checked />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Radio size="small" label="Small Disabled" disabled />
        <Radio size="medium" label="Medium Disabled" disabled />
        <Radio size="large" label="Large Disabled" disabled />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Radio size="small" label="Small Disabled Checked" disabled checked />
        <Radio size="medium" label="Medium Disabled Checked" disabled checked />
        <Radio size="large" label="Large Disabled Checked" disabled checked />
      </div>
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio labelPosition="right" label="Label on Right" description="Description text" />
      <Radio labelPosition="left" label="Label on Left" description="Description text" />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>라디오 버튼 그룹</h3>
        <Radio
          name="demo-group"
          value="option1"
          checked={selectedValue === 'option1'}
          onChange={(checked, value) => {
            if (checked && value) {
              setSelectedValue(value);
            }
          }}
          label="첫 번째 옵션"
          description="첫 번째 옵션에 대한 설명입니다."
        />
        <Radio
          name="demo-group"
          value="option2"
          checked={selectedValue === 'option2'}
          onChange={(checked, value) => {
            if (checked && value) {
              setSelectedValue(value);
            }
          }}
          label="두 번째 옵션"
          description="두 번째 옵션에 대한 설명입니다."
        />
        <Radio
          name="demo-group"
          value="option3"
          checked={selectedValue === 'option3'}
          onChange={(checked, value) => {
            if (checked && value) {
              setSelectedValue(value);
            }
          }}
          label="세 번째 옵션"
          description="세 번째 옵션에 대한 설명입니다."
        />
        <Radio
          name="demo-group"
          value="option4"
          checked={selectedValue === 'option4'}
          onChange={(checked, value) => {
            if (checked && value) {
              setSelectedValue(value);
            }
          }}
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
        <Radio checked={false} label="기본" />
        <Radio checked={true} label="선택됨" />
        <Radio checked={false} disabled label="비활성화" />
        <Radio checked={true} disabled label="비활성화 + 선택됨" />
      </div>
    </div>
  ),
};
