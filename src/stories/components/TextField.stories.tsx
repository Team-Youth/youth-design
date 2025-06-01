import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { TextField } from '../../components';

// Icon components for demonstration
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle
      cx="9.16667"
      cy="9.16667"
      r="5.83333"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="15.5 15.5L12.875 12.875"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M1.66699 10S4.16699 4.16667 10.0003 4.16667s8.33331 5.83333 8.33331 5.83333-2.5 5.8333-8.33331 5.8333S1.66699 10 1.66699 10Z"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="10"
      cy="10"
      r="2.5"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M16.6667 17.5v-1.6667a3.3333 3.3333 0 0 0-3.3334-3.3333H6.66667a3.3333 3.3333 0 0 0-3.3333 3.3333V17.5"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="10"
      cy="6.66667"
      r="3.33333"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Controlled TextField component for interactive stories
const ControlledTextField = (props: any) => {
  const [value, setValue] = useState(props.value || '');
  return <TextField {...props} value={value} onChange={setValue} />;
};

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
텍스트 필드(TextField)는 사용자가 텍스트를 입력할 수 있는 기본적인 입력 컴포넌트입니다.

## 특징
- **상태**: rest, hover, selected, error, disabled 상태 지원
- **아이콘**: Leading Icon, Trailing Icon 지원
- **에러 처리**: 에러 상태 및 에러 메시지 표시
- **커서 애니메이션**: 포커스 시 깜빡이는 커서 효과
- **타입 지원**: text, password, email, number 타입 지원
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
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel'],
      description: '입력 타입을 설정합니다.',
      defaultValue: 'text',
    },
    leadingIcon: {
      control: { type: 'boolean' },
      description: '앞쪽에 표시되는 아이콘입니다.',
      mapping: {
        true: <SearchIcon />,
        false: undefined,
      },
    },
    trailingIcon: {
      control: { type: 'boolean' },
      description: '뒤쪽에 표시되는 아이콘입니다.',
      mapping: {
        true: <EyeIcon />,
        false: undefined,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Enter text...',
    value: 'Sample text',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    placeholder: 'Search...',
    leadingIcon: <SearchIcon />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    placeholder: 'Password',
    type: 'password',
    trailingIcon: <EyeIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: 'Username',
    leadingIcon: <UserIcon />,
    trailingIcon: <EyeIcon />,
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Enter email...',
    value: 'invalid-email',
    error: true,
    errorMessage: '유효한 이메일 주소를 입력해주세요.',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled field',
    value: 'Cannot edit this',
    disabled: true,
  },
};

// Interactive controlled examples
export const Interactive: Story = {
  render: () => <ControlledTextField placeholder="Type something..." />,
};

export const InteractiveWithIcon: Story = {
  render: () => <ControlledTextField placeholder="Search..." leadingIcon={<SearchIcon />} />,
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Rest</h3>
        <TextField placeholder="Enter text..." />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Filled</h3>
        <TextField placeholder="Enter text..." value="Sample text" />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          With Leading Icon
        </h3>
        <TextField placeholder="Search..." leadingIcon={<SearchIcon />} />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          With Trailing Icon
        </h3>
        <TextField placeholder="Password" type="password" trailingIcon={<EyeIcon />} />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Error State</h3>
        <TextField
          placeholder="Enter email..."
          value="invalid-email"
          error={true}
          errorMessage="유효한 이메일 주소를 입력해주세요."
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Disabled</h3>
        <TextField placeholder="Disabled field" value="Cannot edit this" disabled={true} />
      </div>
    </div>
  ),
};

// Types showcase
export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextField type="text" placeholder="Text input" />
      <TextField type="password" placeholder="Password input" trailingIcon={<EyeIcon />} />
      <TextField type="email" placeholder="Email input" />
      <TextField type="number" placeholder="Number input" />
      <TextField type="tel" placeholder="Phone input" />
    </div>
  ),
};
