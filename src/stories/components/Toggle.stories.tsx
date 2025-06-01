import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Toggle } from '../../components';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
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

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    onChange: action('toggle-changed'),
  },
};

export const WithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    label: 'Text Label',
    description: 'Description',
    onChange: action('toggle-changed'),
  },
};

export const On: Story = {
  args: {
    checked: true,
    disabled: false,
    size: 'medium',
    label: 'Toggle On',
    onChange: action('toggle-changed'),
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    size: 'medium',
    label: 'Disabled Toggle',
    onChange: action('toggle-changed'),
  },
};

export const DisabledOn: Story = {
  args: {
    checked: true,
    disabled: true,
    size: 'medium',
    label: 'Disabled Toggle On',
    onChange: action('toggle-changed'),
  },
};

export const Sizes: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    label: 'Toggle Size Demo',
    description: 'Size can be controlled from Controls panel',
    onChange: action('toggle-changed'),
  },
};

export const AllSizes: Story = {
  render: () => {
    const [sizeStates, setSizeStates] = useState({
      small: false,
      medium: false,
      large: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>모든 크기</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Toggle
            size="small"
            label="Small"
            checked={sizeStates.small}
            onChange={(checked) => setSizeStates((prev) => ({ ...prev, small: checked }))}
          />
          <Toggle
            size="medium"
            label="Medium"
            checked={sizeStates.medium}
            onChange={(checked) => setSizeStates((prev) => ({ ...prev, medium: checked }))}
          />
          <Toggle
            size="large"
            label="Large"
            checked={sizeStates.large}
            onChange={(checked) => setSizeStates((prev) => ({ ...prev, large: checked }))}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Toggle size="small" label="Small Disabled" disabled />
          <Toggle size="medium" label="Medium Disabled" disabled />
          <Toggle size="large" label="Large Disabled" disabled />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Toggle size="small" label="Small Disabled On" disabled checked />
          <Toggle size="medium" label="Medium Disabled On" disabled checked />
          <Toggle size="large" label="Large Disabled On" disabled checked />
        </div>
      </div>
    );
  },
};

export const LabelPositions: Story = {
  render: () => {
    const [toggleStates, setToggleStates] = useState({
      right: false,
      left: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Toggle
          labelPosition="right"
          label="Label on Right"
          description="Description text"
          checked={toggleStates.right}
          onChange={(checked) => setToggleStates((prev) => ({ ...prev, right: checked }))}
        />
        <Toggle
          labelPosition="left"
          label="Label on Left"
          description="Description text"
          checked={toggleStates.left}
          onChange={(checked) => setToggleStates((prev) => ({ ...prev, left: checked }))}
        />
      </div>
    );
  },
};

export const InteractiveGroup: Story = {
  render: () => {
    const [toggleStates, setToggleStates] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      location: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>설정 옵션</h3>
        <Toggle
          checked={toggleStates.notifications}
          onChange={(checked) => setToggleStates((prev) => ({ ...prev, notifications: checked }))}
          label="알림 받기"
          description="새로운 소식과 업데이트를 받습니다."
        />
        <Toggle
          checked={toggleStates.darkMode}
          onChange={(checked) => setToggleStates((prev) => ({ ...prev, darkMode: checked }))}
          label="다크 모드"
          description="어두운 테마를 사용합니다."
        />
        <Toggle
          checked={toggleStates.autoSave}
          onChange={(checked) => setToggleStates((prev) => ({ ...prev, autoSave: checked }))}
          label="자동 저장"
          description="변경사항을 자동으로 저장합니다."
        />
        <Toggle
          checked={toggleStates.location}
          onChange={(checked) => setToggleStates((prev) => ({ ...prev, location: checked }))}
          label="위치 서비스"
          description="위치 기반 서비스를 사용합니다."
        />
        <Toggle
          checked={false}
          label="비활성화된 옵션"
          description="이 옵션은 현재 사용할 수 없습니다."
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
        <Toggle checked={false} label="꺼짐" />
        <Toggle checked={true} label="켜짐" />
        <Toggle checked={false} disabled label="비활성화 꺼짐" />
        <Toggle checked={true} disabled label="비활성화 켜짐" />
      </div>
    </div>
  ),
};
