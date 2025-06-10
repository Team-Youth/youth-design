import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tab } from '../../components/tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['underline', 'capsule', 'toggle'],
    },
    size: {
      control: { type: 'select' },
      options: ['l', 'm', 's'],
    },
    selected: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: { type: 'select' },
      options: ['none', 'home', 'user', 'star', 'heart', 'settings', 'search'],
      mapping: {
        none: undefined,
        home: 'home',
        user: 'user',
        star: 'star',
        heart: 'heart',
        settings: 'settings',
        search: 'search',
      },
    },
    number: {
      control: 'text',
    },
    width: {
      control: { type: 'select' },
      options: ['fill', 'fit-content'],
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'tab-clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    type: 'underline',
    size: 'm',
    selected: false,
    disabled: false,
    children: 'Tab',
    onClick: action('tab-clicked'),
  },
};

export const Underline: Story = {
  args: {
    type: 'underline',
    size: 'm',
    selected: false,
    disabled: false,
    children: 'Underline Tab',
    onClick: action('tab-clicked'),
  },
};

export const UnderlineSelected: Story = {
  args: {
    type: 'underline',
    size: 'm',
    selected: true,
    disabled: false,
    children: 'Selected',
    onClick: action('tab-clicked'),
  },
};

export const Capsule: Story = {
  args: {
    type: 'capsule',
    size: 'm',
    selected: false,
    disabled: false,
    children: 'Capsule Tab',
    onClick: action('tab-clicked'),
  },
};

export const CapsuleSelected: Story = {
  args: {
    type: 'capsule',
    size: 'm',
    selected: true,
    disabled: false,
    children: 'Selected',
    onClick: action('tab-clicked'),
  },
};

export const Toggle: Story = {
  args: {
    type: 'toggle',
    size: 'm',
    selected: false,
    disabled: false,
    children: 'Toggle Tab',
    onClick: action('tab-clicked'),
  },
};

export const ToggleSelected: Story = {
  args: {
    type: 'toggle',
    size: 'm',
    selected: true,
    disabled: false,
    children: 'Selected',
    onClick: action('tab-clicked'),
  },
};

export const WithIcon: Story = {
  args: {
    type: 'underline',
    size: 'm',
    selected: false,
    disabled: false,
    icon: 'home',
    children: 'Home',
    onClick: action('tab-clicked'),
  },
};

export const WithNumber: Story = {
  args: {
    type: 'underline',
    size: 'm',
    selected: false,
    disabled: false,
    number: 5,
    children: 'Messages',
    onClick: action('tab-clicked'),
  },
};

export const WithIconAndNumber: Story = {
  args: {
    type: 'capsule',
    size: 'm',
    selected: true,
    disabled: false,
    icon: 'bookmark-stroke',
    number: 12,
    children: 'Favorites',
    onClick: action('tab-clicked'),
  },
};

export const Disabled: Story = {
  args: {
    type: 'underline',
    size: 'm',
    selected: false,
    disabled: true,
    children: 'Disabled',
    onClick: action('tab-clicked'),
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Underline Tabs</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Tab type="underline" size="s" onClick={action('small-clicked')}>
          Small
        </Tab>
        <Tab type="underline" size="m" onClick={action('medium-clicked')}>
          Medium
        </Tab>
        <Tab type="underline" size="l" onClick={action('large-clicked')}>
          Large
        </Tab>
      </div>

      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Capsule Tabs</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Tab type="capsule" size="s" onClick={action('small-clicked')}>
          Small
        </Tab>
        <Tab type="capsule" size="m" onClick={action('medium-clicked')}>
          Medium
        </Tab>
        <Tab type="capsule" size="l" onClick={action('large-clicked')}>
          Large
        </Tab>
      </div>

      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Toggle Tabs</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Tab type="toggle" size="s" onClick={action('small-clicked')}>
          Small
        </Tab>
        <Tab type="toggle" size="m" onClick={action('medium-clicked')}>
          Medium
        </Tab>
        <Tab type="toggle" size="l" onClick={action('large-clicked')}>
          Large
        </Tab>
      </div>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>모든 타입 비교</h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Tab type="underline" size="m" onClick={action('underline-clicked')}>
          Underline
        </Tab>
        <Tab type="underline" size="m" selected onClick={action('underline-selected-clicked')}>
          Selected
        </Tab>
        <Tab type="underline" size="m" disabled onClick={action('underline-disabled-clicked')}>
          Disabled
        </Tab>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Tab type="capsule" size="m" onClick={action('capsule-clicked')}>
          Capsule
        </Tab>
        <Tab type="capsule" size="m" selected onClick={action('capsule-selected-clicked')}>
          Selected
        </Tab>
        <Tab type="capsule" size="m" disabled onClick={action('capsule-disabled-clicked')}>
          Disabled
        </Tab>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          background: '#f3f4f6',
          padding: '12px',
          borderRadius: '8px',
        }}
      >
        <Tab type="toggle" size="m" onClick={action('toggle-clicked')}>
          Toggle
        </Tab>
        <Tab type="toggle" size="m" selected onClick={action('toggle-selected-clicked')}>
          Selected
        </Tab>
        <Tab type="toggle" size="m" disabled onClick={action('toggle-disabled-clicked')}>
          Disabled
        </Tab>
      </div>
    </div>
  ),
};

export const WithVariousContent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>다양한 콘텐츠</h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Tab type="underline" size="m" icon="home" onClick={action('home-clicked')}>
          Home
        </Tab>
        <Tab
          type="underline"
          size="m"
          icon="my-page"
          number={3}
          onClick={action('profile-clicked')}
        >
          Profile
        </Tab>
        <Tab type="underline" size="m" number={99} onClick={action('notifications-clicked')}>
          Notifications
        </Tab>
        <Tab type="underline" size="m" icon="settings-stroke" onClick={action('settings-clicked')}>
          Settings
        </Tab>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Tab
          type="capsule"
          size="m"
          icon="bookmark-stroke"
          selected
          onClick={action('favorites-clicked')}
        >
          Favorites
        </Tab>
        <Tab type="capsule" size="m" icon="heart" number={7} onClick={action('likes-clicked')}>
          Likes
        </Tab>
        <Tab type="capsule" size="m" icon="search" onClick={action('search-clicked')}>
          Search
        </Tab>
      </div>
    </div>
  ),
};

export const FillWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Fill Width</h3>

      <Tab type="underline" size="m" width="fill" onClick={action('fill-clicked')}>
        Full Width Tab
      </Tab>

      <Tab type="capsule" size="m" width="fill" selected onClick={action('fill-selected-clicked')}>
        Full Width Selected
      </Tab>

      <div style={{ background: '#f3f4f6', padding: '12px', borderRadius: '8px' }}>
        <Tab type="toggle" size="m" width="fill" onClick={action('toggle-fill-clicked')}>
          Full Width Toggle
        </Tab>
      </div>
    </div>
  ),
};
