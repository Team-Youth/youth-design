import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/button/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['solid', 'outlined', 'text'],
    },
    level: {
      control: { type: 'select' },
      options: ['CTA', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'select' },
      options: ['l', 'm', 's', 'xs'],
      description: 'xs size is only available for text type buttons',
    },
    width: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    underline: {
      control: { type: 'boolean' },
    },
    leftIcon: {
      control: { type: 'select' },
      options: [undefined, 'add', 'arrow-left', 'check', 'close'],
    },
    rightIcon: {
      control: { type: 'select' },
      options: [undefined, 'add', 'arrow-right', 'check', 'close'],
    },
    iconOnly: {
      control: { type: 'select' },
      options: [undefined, 'add', 'arrow-left', 'arrow-right', 'check', 'close'],
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: 'Button',
    type: 'solid',
    level: 'CTA',
    size: 'l',
  },
};

// 모든 타입
export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button type="solid" level="CTA">
        Solid Button
      </Button>
      <Button type="outlined">Outlined Button</Button>
      <Button type="text">Text Button</Button>
    </div>
  ),
};

// 모든 레벨 (Solid 타입)
export const Levels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button type="solid" level="CTA">
        CTA Level
      </Button>
      <Button type="solid" level="secondary">
        Secondary Level
      </Button>
      <Button type="solid" level="tertiary">
        Tertiary Level
      </Button>
    </div>
  ),
};

// 모든 사이즈
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="l">Large Button</Button>
      <Button size="m">Medium Button</Button>
      <Button size="s">Small Button</Button>
      <Button type="text" size="xs">
        XS Text Button
      </Button>
    </div>
  ),
};

// 아이콘이 포함된 버튼
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button leftIcon="add">Left Icon</Button>
      <Button rightIcon="arrow-right">Right Icon</Button>
      <Button leftIcon="check" rightIcon="arrow-right">
        Both Icons
      </Button>
    </div>
  ),
};

// 아이콘 온리 버튼
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', fontWeight: '500' }}>Solid L</span>
        <Button type="solid" level="CTA" size="l" iconOnly="add" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', fontWeight: '500' }}>Outlined L</span>
        <Button type="outlined" size="l" iconOnly="add" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', fontWeight: '500' }}>Solid M</span>
        <Button type="solid" level="CTA" size="m" iconOnly="check" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', fontWeight: '500' }}>Solid S</span>
        <Button type="solid" level="CTA" size="s" iconOnly="close" />
      </div>
    </div>
  ),
};

// 상태별 버튼
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button isLoading>Loading</Button>
    </div>
  ),
};

// Text 버튼 Underline
export const TextButtonUnderline: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button type="text" size="xs">
        Normal Text
      </Button>
      <Button type="text" size="xs" underline>
        Underlined Text
      </Button>
      <Button type="text" size="xs" rightIcon="arrow-right">
        With Icon
      </Button>
      <Button type="text" size="xs" rightIcon="arrow-right" underline>
        With Icon & Underline
      </Button>
    </div>
  ),
};

// Width 옵션
export const WidthOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <Button width="fill">Fill Width Button</Button>
      <Button width="200px">200px Width Button</Button>
      <Button>Default Width (320px)</Button>
    </div>
  ),
};

// 모든 조합 (Solid CTA L)
export const AllCombinations: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Solid CTA</h4>
        <Button type="solid" level="CTA" size="l">
          Large
        </Button>
        <Button type="solid" level="CTA" size="m">
          Medium
        </Button>
        <Button type="solid" level="CTA" size="s">
          Small
        </Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Solid Secondary</h4>
        <Button type="solid" level="secondary" size="l">
          Large
        </Button>
        <Button type="solid" level="secondary" size="m">
          Medium
        </Button>
        <Button type="solid" level="secondary" size="s">
          Small
        </Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Outlined</h4>
        <Button type="outlined" size="l">
          Large
        </Button>
        <Button type="outlined" size="m">
          Medium
        </Button>
        <Button type="outlined" size="s">
          Small
        </Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Text</h4>
        <Button type="text" size="l">
          Large
        </Button>
        <Button type="text" size="m">
          Medium
        </Button>
        <Button type="text" size="s">
          Small
        </Button>
        <Button type="text" size="xs">
          X-Small
        </Button>
      </div>
    </div>
  ),
};

// 상호작용 테스트
export const InteractiveTest: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
};

// 비활성화된 상태의 모든 타입
export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button type="solid" level="CTA" disabled>
        Solid Disabled
      </Button>
      <Button type="outlined" disabled>
        Outlined Disabled
      </Button>
      <Button type="text" disabled>
        Text Disabled
      </Button>
      <Button type="solid" level="CTA" iconOnly="add" disabled />
    </div>
  ),
};

// 로딩 상태의 모든 타입
export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button type="solid" level="CTA" isLoading>
        Solid Loading
      </Button>
      <Button type="solid" level="secondary" isLoading>
        Secondary Loading
      </Button>
      <Button type="outlined" isLoading>
        Outlined Loading
      </Button>
    </div>
  ),
};
