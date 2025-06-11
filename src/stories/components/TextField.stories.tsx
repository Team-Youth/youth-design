import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import React from 'react';
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
- **상태**: rest, hover, selected, error, disabled, readOnly 상태 지원
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
    readOnly: {
      control: { type: 'boolean' },
      description: '읽기 전용 상태를 설정합니다.',
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
    width: {
      control: { type: 'select' },
      options: ['320px', 'fill', '400px', '50%'],
      description: '텍스트 필드의 너비를 설정합니다. "fill"을 사용하면 부모 요소의 100%가 됩니다.',
      defaultValue: '320px',
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

export const ReadOnly: Story = {
  args: {
    placeholder: 'Read only field',
    value: 'This is read only text',
    readOnly: true,
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

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Read Only</h3>
        <TextField placeholder="Read only field" value="This is read only text" readOnly={true} />
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

// Width examples
export const WidthDefault: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>
        기본 너비 (320px)
      </h3>
      <ControlledTextField placeholder="기본 너비 텍스트 필드" />
    </div>
  ),
};

export const WidthFill: Story = {
  render: () => (
    <div style={{ padding: '20px', width: '500px', border: '1px dashed #ccc' }}>
      <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>
        부모 컨테이너 100% (width="fill")
      </h3>
      <ControlledTextField width="fill" placeholder="부모의 100% 너비" />
    </div>
  ),
};

export const WidthCustom: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>
        커스텀 너비 (400px)
      </h3>
      <ControlledTextField width="400px" placeholder="커스텀 너비 텍스트 필드" />
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
          <ControlledTextField placeholder="기본 너비" />
        </div>

        <div style={{ width: '600px', border: '1px dashed #ddd', padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            부모 컨테이너 100% (width="fill")
          </h3>
          <ControlledTextField width="fill" placeholder="부모의 100% 너비" />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            커스텀 너비 (500px)
          </h3>
          <ControlledTextField width="500px" placeholder="커스텀 너비" />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            상대적 너비 (50%)
          </h3>
          <ControlledTextField width="50%" placeholder="상대적 너비" />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            숫자로 설정 (400)
          </h3>
          <ControlledTextField width={400} placeholder="숫자 값 너비" />
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            아이콘과 함께 (fill)
          </h3>
          <div style={{ width: '500px', border: '1px dashed #ddd', padding: '16px' }}>
            <ControlledTextField
              width="fill"
              placeholder="아이콘이 있는 필드"
              leadingIcon={<SearchIcon />}
              trailingIcon={<EyeIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
