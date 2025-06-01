import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
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
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    onChange: action('radio-changed'),
  },
};

export const WithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    label: 'Text Label',
    description: 'Description',
    onChange: action('radio-changed'),
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    size: 'medium',
    label: 'Checked Radio',
    onChange: action('radio-changed'),
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    size: 'medium',
    label: 'Disabled Radio',
    onChange: action('radio-changed'),
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    size: 'medium',
    label: 'Disabled Checked Radio',
    onChange: action('radio-changed'),
  },
};

export const Sizes: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    label: 'Radio Size Demo',
    description: 'Size can be controlled from Controls panel',
    onChange: action('radio-changed'),
  },
};

export const AllSizes: Story = {
  render: () => {
    const [sizeStates, setSizeStates] = useState({
      small1: false,
      medium1: false,
      large1: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>모든 크기</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Radio
            size="small"
            label="Small"
            name="size-group-1"
            value="small"
            checked={sizeStates.small1}
            onChange={(checked) => {
              if (checked) {
                setSizeStates((prev) => ({ ...prev, small1: true, medium1: false, large1: false }));
              }
            }}
          />
          <Radio
            size="medium"
            label="Medium"
            name="size-group-1"
            value="medium"
            checked={sizeStates.medium1}
            onChange={(checked) => {
              if (checked) {
                setSizeStates((prev) => ({ ...prev, small1: false, medium1: true, large1: false }));
              }
            }}
          />
          <Radio
            size="large"
            label="Large"
            name="size-group-1"
            value="large"
            checked={sizeStates.large1}
            onChange={(checked) => {
              if (checked) {
                setSizeStates((prev) => ({ ...prev, small1: false, medium1: false, large1: true }));
              }
            }}
          />
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
    );
  },
};

export const LabelPositions: Story = {
  render: () => {
    const [labelStates, setLabelStates] = useState({
      right: false,
      left: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Radio
          labelPosition="right"
          label="Label on Right"
          description="Description text"
          name="label-group"
          value="right"
          checked={labelStates.right}
          onChange={(checked) => {
            if (checked) {
              setLabelStates({ right: true, left: false });
            }
          }}
        />
        <Radio
          labelPosition="left"
          label="Label on Left"
          description="Description text"
          name="label-group"
          value="left"
          checked={labelStates.left}
          onChange={(checked) => {
            if (checked) {
              setLabelStates({ right: false, left: true });
            }
          }}
        />
      </div>
    );
  },
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
