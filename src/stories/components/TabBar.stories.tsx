import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { TabBar } from '../../components/tab-bar';

const meta: Meta<typeof TabBar> = {
  title: 'Components/TabBar',
  component: TabBar,
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
    width: {
      control: { type: 'select' },
      options: ['fill', 'fit-content'],
    },
    defaultSelectedIndex: {
      control: { type: 'number', min: 0 },
    },
    selectedIndex: {
      control: { type: 'number', min: 0 },
    },
    onTabChange: { action: 'tab-changed' },
  },
};

export default meta;

type Story = StoryObj<typeof TabBar>;

const basicTabs = [{ label: 'Home' }, { label: 'Profile' }, { label: 'Settings' }];

const tabsWithIcons = [
  { label: 'Home', icon: 'home' as const },
  { label: 'Profile', icon: 'my-page' as const },
  { label: 'Settings', icon: 'settings-stroke' as const },
];

const tabsWithNumbers = [
  { label: 'Messages', number: 5 },
  { label: 'Notifications', number: 12 },
  { label: 'Updates', number: 0 },
];

const tabsWithIconsAndNumbers = [
  { label: 'Favorites', icon: 'bookmark-stroke' as const, number: 8 },
  { label: 'Likes', icon: 'heart' as const, number: 24 },
  { label: 'Search', icon: 'search' as const },
];

const tabsWithDisabled = [
  { label: 'Active', disabled: false },
  { label: 'Disabled', disabled: true },
  { label: 'Another Active', disabled: false },
];

export const Default: Story = {
  args: {
    type: 'underline',
    size: 'm',
    width: 'fit-content',
    defaultSelectedIndex: 0,
    tabs: basicTabs,
    onTabChange: action('tab-changed'),
  },
};

export const Underline: Story = {
  args: {
    type: 'underline',
    size: 'm',
    width: 'fit-content',
    defaultSelectedIndex: 0,
    tabs: basicTabs,
    onTabChange: action('tab-changed'),
  },
};

export const Capsule: Story = {
  args: {
    type: 'capsule',
    size: 'm',
    width: 'fit-content',
    defaultSelectedIndex: 1,
    tabs: basicTabs,
    onTabChange: action('tab-changed'),
  },
};

export const Toggle: Story = {
  args: {
    type: 'toggle',
    size: 'm',
    width: 'fit-content',
    defaultSelectedIndex: 2,
    tabs: basicTabs,
    onTabChange: action('tab-changed'),
  },
};

export const WithIcons: Story = {
  args: {
    type: 'underline',
    size: 'm',
    width: 'fit-content',
    defaultSelectedIndex: 0,
    tabs: tabsWithIcons,
    onTabChange: action('tab-changed'),
  },
};

export const WithNumbers: Story = {
  args: {
    type: 'capsule',
    size: 'm',
    width: 'fit-content',
    defaultSelectedIndex: 0,
    tabs: tabsWithNumbers,
    onTabChange: action('tab-changed'),
  },
};

export const WithIconsAndNumbers: Story = {
  args: {
    type: 'underline',
    size: 'm',
    width: 'fit-content',
    defaultSelectedIndex: 0,
    tabs: tabsWithIconsAndNumbers,
    onTabChange: action('tab-changed'),
  },
};

export const WithDisabled: Story = {
  args: {
    type: 'underline',
    size: 'm',
    width: 'fit-content',
    defaultSelectedIndex: 0,
    tabs: tabsWithDisabled,
    onTabChange: action('tab-changed'),
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Large Size</h3>
        <TabBar
          type="underline"
          size="l"
          tabs={basicTabs}
          defaultSelectedIndex={0}
          onTabChange={action('large-tab-changed')}
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Medium Size</h3>
        <TabBar
          type="underline"
          size="m"
          tabs={basicTabs}
          defaultSelectedIndex={1}
          onTabChange={action('medium-tab-changed')}
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Small Size</h3>
        <TabBar
          type="underline"
          size="s"
          tabs={basicTabs}
          defaultSelectedIndex={2}
          onTabChange={action('small-tab-changed')}
        />
      </div>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Underline Type
        </h3>
        <TabBar
          type="underline"
          size="m"
          tabs={tabsWithIcons}
          defaultSelectedIndex={0}
          onTabChange={action('underline-tab-changed')}
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Capsule Type</h3>
        <TabBar
          type="capsule"
          size="m"
          tabs={tabsWithIcons}
          defaultSelectedIndex={1}
          onTabChange={action('capsule-tab-changed')}
        />
      </div>

      <div
        style={{
          background: '#f3f4f6',
          padding: '16px',
          borderRadius: '8px',
        }}
      >
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Toggle Type</h3>
        <TabBar
          type="toggle"
          size="m"
          tabs={tabsWithIcons}
          defaultSelectedIndex={2}
          onTabChange={action('toggle-tab-changed')}
        />
      </div>
    </div>
  ),
};

export const FillWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '500px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Underline Fill Width
        </h3>
        <TabBar
          type="underline"
          size="m"
          width="fill"
          tabs={basicTabs}
          defaultSelectedIndex={0}
          onTabChange={action('underline-fill-changed')}
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Capsule Fill Width
        </h3>
        <TabBar
          type="capsule"
          size="m"
          width="fill"
          tabs={basicTabs}
          defaultSelectedIndex={1}
          onTabChange={action('capsule-fill-changed')}
        />
      </div>

      <div
        style={{
          background: '#f3f4f6',
          padding: '16px',
          borderRadius: '8px',
        }}
      >
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Toggle Fill Width
        </h3>
        <TabBar
          type="toggle"
          size="m"
          width="fill"
          tabs={basicTabs}
          defaultSelectedIndex={2}
          onTabChange={action('toggle-fill-changed')}
        />
      </div>
    </div>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const navigationTabs = [
      { label: 'Dashboard', icon: 'home' as const },
      { label: 'Messages', icon: 'mail-stroke' as const, number: 3 },
      { label: 'Notifications', icon: 'bell-stroke' as const, number: 12 },
      { label: 'Settings', icon: 'settings-stroke' as const },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>
          Interactive Navigation (Current: {navigationTabs[selectedTab].label})
        </h3>

        <TabBar
          type="underline"
          size="m"
          tabs={navigationTabs}
          selectedIndex={selectedTab}
          onTabChange={(index) => {
            setSelectedTab(index);
            action('navigation-tab-changed')(index);
          }}
        />

        <div
          style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
            {navigationTabs[selectedTab].label} Content
          </h4>
          <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
            This is the content for the {navigationTabs[selectedTab].label.toLowerCase()} tab.
          </p>
        </div>
      </div>
    );
  },
};

export const MultipleTypesComparison: Story = {
  render: () => {
    const [states, setStates] = useState({
      underline: 0,
      capsule: 1,
      toggle: 2,
    });

    const tabs = [
      { label: 'First', icon: 'home' as const, number: 1 },
      { label: 'Second', icon: 'my-page' as const, number: 2 },
      { label: 'Third', icon: 'bookmark-stroke' as const, number: 3 },
      { label: 'Fourth', icon: 'settings-stroke' as const },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '600px' }}>
        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
            Underline TabBar
          </h3>
          <TabBar
            type="underline"
            size="m"
            width="fill"
            tabs={tabs}
            selectedIndex={states.underline}
            onTabChange={(index) => {
              setStates((prev) => ({ ...prev, underline: index }));
              action('underline-comparison-changed')(index);
            }}
          />
        </div>

        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
            Capsule TabBar
          </h3>
          <TabBar
            type="capsule"
            size="m"
            tabs={tabs}
            selectedIndex={states.capsule}
            onTabChange={(index) => {
              setStates((prev) => ({ ...prev, capsule: index }));
              action('capsule-comparison-changed')(index);
            }}
          />
        </div>

        <div
          style={{
            background: '#f3f4f6',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
            Toggle TabBar
          </h3>
          <TabBar
            type="toggle"
            size="m"
            width="fill"
            tabs={tabs}
            selectedIndex={states.toggle}
            onTabChange={(index) => {
              setStates((prev) => ({ ...prev, toggle: index }));
              action('toggle-comparison-changed')(index);
            }}
          />
        </div>
      </div>
    );
  },
};
