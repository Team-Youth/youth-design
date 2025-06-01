import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../components';

// Icon component for demonstration (using a simple SVG)
const AddIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 1.75V12.25M1.75 7H12.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
라벨(Labels)은 메타데이터 또는 넛징 데이터를 활용하여 사용자의 선택을 도와주는 요소입니다.

## 특징
- **크기**: Medium(m), Small(s) 두 가지 크기 지원
- **모양**: Square, Capsule 두 가지 형태 지원  
- **색상**: 7가지 색상 변형 (grey, dark, violet, accent, red, green, yellow)
- **아이콘**: Leading Icon, Trailing Icon 지원
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['m', 's'],
      description: '라벨의 크기를 설정합니다.',
      table: {
        type: { summary: "'m' | 's'" },
        defaultValue: { summary: "'m'" },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['square', 'capsule'],
      description: '라벨의 모양을 설정합니다.',
      table: {
        type: { summary: "'square' | 'capsule'" },
        defaultValue: { summary: "'square'" },
      },
    },
    color: {
      control: { type: 'select' },
      options: ['grey', 'dark', 'violet', 'accent', 'red', 'green', 'yellow'],
      description: '라벨의 색상을 설정합니다.',
      table: {
        type: { summary: "'grey' | 'dark' | 'violet' | 'accent' | 'red' | 'green' | 'yellow'" },
        defaultValue: { summary: "'grey'" },
      },
    },
    children: {
      control: { type: 'text' },
      description: '라벨에 표시될 텍스트 내용입니다.',
    },
    leadingIcon: {
      control: { type: 'boolean' },
      description: '라벨 텍스트 앞에 표시되는 아이콘입니다.',
      mapping: {
        true: <AddIcon />,
        false: undefined,
      },
    },
    trailingIcon: {
      control: { type: 'boolean' },
      description: '라벨 텍스트 뒤에 표시되는 아이콘입니다.',
      mapping: {
        true: <AddIcon />,
        false: undefined,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: 'Label',
    leadingIcon: <AddIcon />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: 'Label',
    trailingIcon: <AddIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Label',
    leadingIcon: <AddIcon />,
    trailingIcon: <AddIcon />,
  },
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Label size="m">Medium</Label>
      <Label size="s">Small</Label>
    </div>
  ),
};

// Type variants
export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Label type="square">Square</Label>
      <Label type="capsule">Capsule</Label>
    </div>
  ),
};

// Color variants
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Label color="grey">Grey</Label>
      <Label color="dark">Dark</Label>
      <Label color="violet">Violet</Label>
      <Label color="accent">Accent</Label>
      <Label color="red">Red</Label>
      <Label color="green">Green</Label>
      <Label color="yellow">Yellow</Label>
    </div>
  ),
};

// Square variants with all colors (Medium size)
export const SquareMedium: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Label size="m" type="square" color="grey">
        Label
      </Label>
      <Label size="m" type="square" color="grey" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="square" color="grey" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="square" color="dark">
        Label
      </Label>
      <Label size="m" type="square" color="dark" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="square" color="dark" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="square" color="violet">
        Label
      </Label>
      <Label size="m" type="square" color="violet" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="square" color="violet" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="square" color="accent">
        Label
      </Label>
      <Label size="m" type="square" color="accent" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="square" color="accent" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="square" color="red">
        Label
      </Label>
      <Label size="m" type="square" color="red" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="square" color="red" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="square" color="green">
        Label
      </Label>
      <Label size="m" type="square" color="green" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="square" color="green" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="square" color="yellow">
        Label
      </Label>
      <Label size="m" type="square" color="yellow" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="square" color="yellow" trailingIcon={<AddIcon />}>
        Label
      </Label>
    </div>
  ),
};

// Capsule variants with all colors (Medium size)
export const CapsuleMedium: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Label size="m" type="capsule" color="grey">
        Label
      </Label>
      <Label size="m" type="capsule" color="grey" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="capsule" color="grey" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="capsule" color="dark">
        Label
      </Label>
      <Label size="m" type="capsule" color="dark" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="capsule" color="dark" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="capsule" color="violet">
        Label
      </Label>
      <Label size="m" type="capsule" color="violet" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="capsule" color="violet" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="capsule" color="accent">
        Label
      </Label>
      <Label size="m" type="capsule" color="accent" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="capsule" color="accent" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="capsule" color="red">
        Label
      </Label>
      <Label size="m" type="capsule" color="red" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="capsule" color="red" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="capsule" color="green">
        Label
      </Label>
      <Label size="m" type="capsule" color="green" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="capsule" color="green" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="m" type="capsule" color="yellow">
        Label
      </Label>
      <Label size="m" type="capsule" color="yellow" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="m" type="capsule" color="yellow" trailingIcon={<AddIcon />}>
        Label
      </Label>
    </div>
  ),
};

// Square variants with all colors (Small size)
export const SquareSmall: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Label size="s" type="square" color="grey">
        Label
      </Label>
      <Label size="s" type="square" color="grey" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="square" color="grey" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="square" color="dark">
        Label
      </Label>
      <Label size="s" type="square" color="dark" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="square" color="dark" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="square" color="violet">
        Label
      </Label>
      <Label size="s" type="square" color="violet" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="square" color="violet" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="square" color="accent">
        Label
      </Label>
      <Label size="s" type="square" color="accent" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="square" color="accent" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="square" color="red">
        Label
      </Label>
      <Label size="s" type="square" color="red" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="square" color="red" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="square" color="green">
        Label
      </Label>
      <Label size="s" type="square" color="green" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="square" color="green" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="square" color="yellow">
        Label
      </Label>
      <Label size="s" type="square" color="yellow" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="square" color="yellow" trailingIcon={<AddIcon />}>
        Label
      </Label>
    </div>
  ),
};

// Capsule variants with all colors (Small size)
export const CapsuleSmall: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Label size="s" type="capsule" color="grey">
        Label
      </Label>
      <Label size="s" type="capsule" color="grey" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="capsule" color="grey" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="capsule" color="dark">
        Label
      </Label>
      <Label size="s" type="capsule" color="dark" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="capsule" color="dark" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="capsule" color="violet">
        Label
      </Label>
      <Label size="s" type="capsule" color="violet" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="capsule" color="violet" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="capsule" color="accent">
        Label
      </Label>
      <Label size="s" type="capsule" color="accent" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="capsule" color="accent" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="capsule" color="red">
        Label
      </Label>
      <Label size="s" type="capsule" color="red" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="capsule" color="red" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="capsule" color="green">
        Label
      </Label>
      <Label size="s" type="capsule" color="green" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="capsule" color="green" trailingIcon={<AddIcon />}>
        Label
      </Label>

      <Label size="s" type="capsule" color="yellow">
        Label
      </Label>
      <Label size="s" type="capsule" color="yellow" leadingIcon={<AddIcon />}>
        Label
      </Label>
      <Label size="s" type="capsule" color="yellow" trailingIcon={<AddIcon />}>
        Label
      </Label>
    </div>
  ),
};
