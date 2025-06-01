import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconType } from '../../components/icon/Icon';
import { colors } from '../../tokens/colors';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Figma에서 가져온 시스템 아이콘 컴포넌트입니다. 다양한 크기와 색상을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'hamburger',
        'search',
        'close',
        'check',
        'add',
        'minus',
        'truncation',
        'more',
        'home',
        'home-filled',
        'heart',
        'heart-filled',
        'my-page',
        'my-page-filled',
        'download',
        'modify',
        'duplicate',
        'dialog',
        'arrow-down',
        'arrow-up',
        'arrow-right',
        'arrow-left',
        'chevron-left',
        'chevron-right',
        'chevron-up',
        'chevron-down',
        'calendar',
        'calendar-filled',
      ] as IconType[],
      description: '표시할 아이콘의 타입',
    },
    size: {
      control: { type: 'range', min: 12, max: 48, step: 2 },
      description: '아이콘의 크기 (픽셀)',
    },
    color: {
      control: { type: 'color' },
      description: '아이콘의 색상',
    },
    onClick: {
      action: 'clicked',
      description: '아이콘 클릭 시 호출되는 함수',
    },
  },
  args: {
    size: 24,
    color: colors.primary.coolGray[800],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'search',
  },
};

export const AllIcons: Story = {
  render: () => {
    const iconTypes: IconType[] = [
      'hamburger',
      'search',
      'close',
      'check',
      'add',
      'minus',
      'truncation',
      'more',
      'home',
      'home-filled',
      'heart',
      'heart-filled',
      'my-page',
      'my-page-filled',
      'download',
      'modify',
      'duplicate',
      'dialog',
      'arrow-down',
      'arrow-up',
      'arrow-right',
      'arrow-left',
      'chevron-left',
      'chevron-right',
      'chevron-up',
      'chevron-down',
      'calendar',
      'calendar-filled',
    ];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '20px',
          padding: '20px',
          maxWidth: '600px',
        }}
      >
        {iconTypes.map((type) => (
          <div
            key={type}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Icon type={type} size={24} />
            <span
              style={{
                fontSize: '12px',
                color: colors.primary.coolGray[600],
                textAlign: 'center',
              }}
            >
              {type}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon type="search" size={16} />
        <span style={{ fontSize: '12px', color: colors.primary.coolGray[600] }}>16px</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon type="search" size={20} />
        <span style={{ fontSize: '12px', color: colors.primary.coolGray[600] }}>20px</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon type="search" size={24} />
        <span style={{ fontSize: '12px', color: colors.primary.coolGray[600] }}>24px</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon type="search" size={32} />
        <span style={{ fontSize: '12px', color: colors.primary.coolGray[600] }}>32px</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon type="search" size={40} />
        <span style={{ fontSize: '12px', color: colors.primary.coolGray[600] }}>40px</span>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon type="heart" size={24} color={colors.primary.coolGray[800]} />
        <span style={{ fontSize: '12px', color: colors.primary.coolGray[600] }}>Default</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon type="heart" size={24} color={colors.primary.mainviolet} />
        <span style={{ fontSize: '12px', color: colors.primary.coolGray[600] }}>Main Violet</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon type="heart" size={24} color={colors.semantic.state.error} />
        <span style={{ fontSize: '12px', color: colors.primary.coolGray[600] }}>Error</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon type="heart" size={24} color={colors.semantic.state.success} />
        <span style={{ fontSize: '12px', color: colors.primary.coolGray[600] }}>Success</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon type="heart" size={24} color={colors.semantic.state.warning} />
        <span style={{ fontSize: '12px', color: colors.primary.coolGray[600] }}>Warning</span>
      </div>
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    type: 'add',
    onClick: () => alert('아이콘이 클릭되었습니다!'),
  },
  parameters: {
    docs: {
      description: {
        story: '클릭 가능한 아이콘입니다. onClick prop을 전달하면 자동으로 버튼 역할을 합니다.',
      },
    },
  },
};
