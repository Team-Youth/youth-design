import type { Meta, StoryObj } from '@storybook/react';
import { Chips } from '../../components/chips/Chips';
import { Icon, IconType } from '../../components/icon/Icon';
import { colors } from '../../tokens/colors';
import React from 'react';

const meta: Meta<typeof Chips> = {
  title: 'Components/Chips/With Icon',
  component: Chips,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Icon 컴포넌트와 Chips 컴포넌트의 연동 예제입니다. Figma에서 가져온 시스템 아이콘을 활용하여 다양한 칩을 만들 수 있습니다.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'medium'],
      description: '칩의 크기',
    },
    type: {
      control: { type: 'select' },
      options: ['square', 'capsule'],
      description: '칩의 모양',
    },
    state: {
      control: { type: 'select' },
      options: ['hover', 'selected', 'disabled', 'resting'],
      description: '칩의 상태',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['leading', 'trailing'],
      description: '아이콘의 위치',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 아이콘 칩
export const SearchChip: Story = {
  args: {
    children: '검색',
    icon: <Icon type="search" size={16} />,
    iconPosition: 'leading',
    state: 'resting',
  },
};

export const HeartChip: Story = {
  args: {
    children: '좋아요',
    icon: <Icon type="heart" size={16} />,
    iconPosition: 'leading',
    state: 'resting',
  },
};

export const SelectedHeartChip: Story = {
  args: {
    children: '좋아요',
    icon: <Icon type="heart-filled" size={16} />,
    iconPosition: 'leading',
    state: 'selected',
  },
};

// 다양한 카테고리 칩들
export const CategoryChips: Story = {
  render: () => {
    const categories = [
      { label: '홈', icon: 'home' as IconType, selected: true },
      { label: '검색', icon: 'search' as IconType, selected: false },
      { label: '다운로드', icon: 'download' as IconType, selected: false },
      { label: '설정', icon: 'more' as IconType, selected: false },
    ];

    return (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        {categories.map((category) => (
          <Chips
            key={category.label}
            state={category.selected ? 'selected' : 'resting'}
            icon={
              <Icon
                type={category.selected && category.icon === 'home' ? 'home-filled' : category.icon}
                size={16}
              />
            }
            iconPosition="leading"
          >
            {category.label}
          </Chips>
        ))}
      </div>
    );
  },
};

// 액션 칩들
export const ActionChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Chips
        icon={<Icon type="add" size={16} />}
        iconPosition="leading"
        onClick={() => alert('추가되었습니다!')}
      >
        추가
      </Chips>
      <Chips
        icon={<Icon type="modify" size={16} />}
        iconPosition="leading"
        onClick={() => alert('수정 모드입니다!')}
      >
        수정
      </Chips>
      <Chips
        icon={<Icon type="duplicate" size={16} />}
        iconPosition="leading"
        onClick={() => alert('복사되었습니다!')}
      >
        복사
      </Chips>
      <Chips
        icon={<Icon type="close" size={16} />}
        iconPosition="trailing"
        onClick={() => alert('삭제되었습니다!')}
        state="resting"
      >
        삭제
      </Chips>
    </div>
  ),
};

// 아이콘만 있는 칩들
export const IconOnlyChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Chips icon={<Icon type="hamburger" size={16} />} />
      <Chips icon={<Icon type="search" size={16} />} />
      <Chips icon={<Icon type="heart" size={16} />} />
      <Chips icon={<Icon type="more" size={16} />} />
      <Chips icon={<Icon type="add" size={16} />} state="selected" />
    </div>
  ),
};

// 네비게이션 칩들
export const NavigationChips: Story = {
  render: () => {
    const navItems = [
      { label: '이전', icon: 'arrow-left' as IconType },
      { label: '다음', icon: 'arrow-right' as IconType },
      { label: '위로', icon: 'arrow-up' as IconType },
      { label: '아래로', icon: 'arrow-down' as IconType },
    ];

    return (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        {navItems.map((item) => (
          <Chips
            key={item.label}
            icon={<Icon type={item.icon} size={16} />}
            iconPosition="leading"
            onClick={() => alert(`${item.label} 버튼이 클릭되었습니다!`)}
          >
            {item.label}
          </Chips>
        ))}
      </div>
    );
  },
};

// 사이즈 비교
export const SizeComparison: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: colors.primary.coolGray[600] }}>Large:</span>
        <Chips size="large" icon={<Icon type="heart" size={20} />} iconPosition="leading">
          큰 칩
        </Chips>
        <Chips
          size="large"
          icon={<Icon type="close" size={20} />}
          iconPosition="trailing"
          state="selected"
        >
          선택된 큰 칩
        </Chips>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: colors.primary.coolGray[600] }}>Medium:</span>
        <Chips size="medium" icon={<Icon type="heart" size={16} />} iconPosition="leading">
          중간 칩
        </Chips>
        <Chips
          size="medium"
          icon={<Icon type="close" size={16} />}
          iconPosition="trailing"
          state="selected"
        >
          선택된 중간 칩
        </Chips>
      </div>
    </div>
  ),
};

// 태그 스타일 칩들
export const TagStyleChips: Story = {
  render: () => {
    const tags = [
      { label: '인기', icon: 'heart-filled' as IconType, color: colors.semantic.state.error },
      { label: '신규', icon: 'add' as IconType, color: colors.semantic.state.success },
      { label: '할인', icon: 'check' as IconType, color: colors.semantic.state.warning },
      { label: '추천', icon: 'heart' as IconType, color: colors.primary.mainviolet },
    ];

    return (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Chips
            key={tag.label}
            icon={<Icon type={tag.icon} size={16} color={tag.color} />}
            iconPosition="leading"
            type="capsule"
            size="medium"
          >
            {tag.label}
          </Chips>
        ))}
      </div>
    );
  },
};
