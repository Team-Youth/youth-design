import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../../components/text-input';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '이미지에서 참고한 다양한 상태를 지원하는 텍스트 입력 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['l', 'm', 's'],
      description: '입력 필드의 크기',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
      description: '입력 필드의 타입',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태',
    },
    error: {
      control: { type: 'boolean' },
      description: '에러 상태',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트',
    },
    errorMessage: {
      control: { type: 'text' },
      description: '에러 메시지',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    size: 'l',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Placeholder',
    defaultValue: 'Sample text',
    size: 'l',
  },
};

export const Focused: Story = {
  args: {
    placeholder: 'Placeholder',
    size: 'l',
  },
  parameters: {
    docs: {
      description: {
        story: '포커스 상태입니다. 실제로는 클릭하면 포커스됩니다.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    error: true,
    errorMessage: 'ErrorText',
    size: 'l',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
    size: 'l',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Large (48px)</h3>
        <TextInput placeholder="Placeholder" size="l" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Medium (40px)</h3>
        <TextInput placeholder="Placeholder" size="m" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Small (32px)</h3>
        <TextInput placeholder="Placeholder" size="s" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 입력 필드입니다.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Default</h3>
        <TextInput placeholder="Placeholder" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>With Value</h3>
        <TextInput placeholder="Placeholder" defaultValue="Sample text" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Error</h3>
        <TextInput placeholder="Placeholder" error errorMessage="ErrorText" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Disabled</h3>
        <TextInput placeholder="Placeholder" disabled />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '이미지에서 보여준 모든 상태의 입력 필드입니다.',
      },
    },
  },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Text</h3>
        <TextInput placeholder="Enter text" type="text" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Password</h3>
        <TextInput placeholder="Enter password" type="password" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Email</h3>
        <TextInput placeholder="Enter email" type="email" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Number</h3>
        <TextInput placeholder="Enter number" type="number" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 입력 타입을 지원합니다.',
      },
    },
  },
}; 