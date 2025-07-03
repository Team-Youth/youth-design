import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../../components';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Breadcrumb은 사용자의 현재 위치를 나타내고 상위 경로로의 탐색을 지원하는 내비게이션 컴포넌트입니다.
계층 구조와 이동 흐름을 명확히 전달하여 사용자 경험을 향상합니다.
현재 위치는 기능적으로 disabled 상태로 제공됩니다.
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: 'Breadcrumb 항목들 (마지막 항목은 현재 페이지)',
      control: 'object',
    },
    separator: {
      description: '구분자 (기본값: /)',
      control: 'text',
    },
    className: {
      description: '커스텀 클래스명',
      control: 'text',
    },
    style: {
      description: '커스텀 스타일',
      control: 'object',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리 (Depth 1)
export const Depth1: Story = {
  args: {
    items: [{ label: 'Current' }],
  },
};

// Depth 2 스토리
export const Depth2: Story = {
  args: {
    items: [{ label: 'Home', onClick: () => console.log('Home 클릭') }, { label: 'Current' }],
  },
};

// Depth 3 스토리
export const Depth3: Story = {
  args: {
    items: [
      { label: 'Home', onClick: () => console.log('Home 클릭') },
      { label: 'Category', onClick: () => console.log('Category 클릭') },
      { label: 'Current' },
    ],
  },
};

// Depth 4 스토리
export const Depth4: Story = {
  args: {
    items: [
      { label: 'Home', onClick: () => console.log('Home 클릭') },
      { label: 'Category', onClick: () => console.log('Category 클릭') },
      { label: 'Subcategory', onClick: () => console.log('Subcategory 클릭') },
      { label: 'Current' },
    ],
  },
};

// URL 링크 사용 예제
export const WithHref: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Smartphone' },
    ],
  },
};

// 긴 텍스트 예제
export const LongText: Story = {
  args: {
    items: [
      { label: 'Home', onClick: () => console.log('Home 클릭') },
      {
        label: 'Very Long Category Name That Could Wrap',
        onClick: () => console.log('Long category 클릭'),
      },
      {
        label: 'Another Long Subcategory Name',
        onClick: () => console.log('Long subcategory 클릭'),
      },
      { label: 'Very Long Current Page Name' },
    ],
  },
};

// 상호작용 테스트
export const Interactive: Story = {
  args: {
    items: [
      {
        label: 'Home',
        onClick: () => {
          alert('Home 페이지로 이동합니다!');
        },
      },
      {
        label: 'Products',
        onClick: () => {
          alert('Products 페이지로 이동합니다!');
        },
      },
      {
        label: 'Electronics',
        onClick: () => {
          alert('Electronics 페이지로 이동합니다!');
        },
      },
      { label: 'Current Product' },
    ],
  },
};

// 커스텀 스타일 예제
export const CustomStyle: Story = {
  args: {
    items: [
      { label: 'Home', onClick: () => console.log('Home 클릭') },
      { label: 'Category', onClick: () => console.log('Category 클릭') },
      { label: 'Current' },
    ],
    style: {
      backgroundColor: '#f8f9fa',
      padding: '16px',
      borderRadius: '12px',
      border: '1px solid #e9ecef',
    },
  },
};
