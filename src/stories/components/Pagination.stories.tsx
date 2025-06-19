import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination, PaginationProps } from '../../components/pagination/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Pagination 컴포넌트는 페이지 네비게이션을 위한 UI 요소입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: '현재 페이지 (1부터 시작)',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: '전체 페이지 수',
    },
    maxVisiblePages: {
      control: { type: 'number', min: 3, max: 10 },
      description: '표시할 최대 페이지 버튼 수',
    },
    disabled: {
      control: 'boolean',
      description: '컴포넌트 비활성화 여부',
    },
    onPageChange: {
      action: 'pageChanged',
      description: '페이지 변경 시 호출되는 콜백 함수',
    },
  },
};

export default meta;
type Story = StoryObj<PaginationProps>;

// 기본 스토리
export const Default: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    maxVisiblePages: 5,
    disabled: false,
  },
};

// 인터랙티브 스토리
export const Interactive: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return (
      <div style={{ padding: '20px' }}>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          현재 페이지: {currentPage}
        </p>
        <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
    );
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    maxVisiblePages: 5,
    disabled: false,
  },
};

// 적은 페이지 수
export const FewPages: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    currentPage: 2,
    totalPages: 3,
    maxVisiblePages: 5,
    disabled: false,
  },
};

// 많은 페이지 수
export const ManyPages: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    currentPage: 15,
    totalPages: 100,
    maxVisiblePages: 5,
    disabled: false,
  },
};

// 첫 페이지
export const FirstPage: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    currentPage: 1,
    totalPages: 20,
    maxVisiblePages: 5,
    disabled: false,
  },
};

// 마지막 페이지
export const LastPage: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    currentPage: 20,
    totalPages: 20,
    maxVisiblePages: 5,
    disabled: false,
  },
};

// 비활성화 상태
export const Disabled: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    currentPage: 5,
    totalPages: 10,
    maxVisiblePages: 5,
    disabled: true,
  },
};

// 최대 표시 페이지 수 변경
export const MaxVisiblePages3: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    currentPage: 5,
    totalPages: 20,
    maxVisiblePages: 3,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: '최대 표시 페이지 수를 3으로 설정한 예시입니다.',
      },
    },
  },
};

export const MaxVisiblePages7: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    currentPage: 5,
    totalPages: 20,
    maxVisiblePages: 7,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: '최대 표시 페이지 수를 7로 설정한 예시입니다.',
      },
    },
  },
};

// 실제 사용 예시
export const RealWorldExample: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const totalItems = 247;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <div style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          <p>총 {totalItems}개 항목</p>
          <p>페이지당 {itemsPerPage}개 표시</p>
          <p>
            현재 페이지: {currentPage} / {totalPages}
          </p>
          <p>
            현재 표시 항목: {(currentPage - 1) * itemsPerPage + 1} -{' '}
            {Math.min(currentPage * itemsPerPage, totalItems)}
          </p>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          maxVisiblePages={5}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 데이터와 함께 사용하는 예시입니다.',
      },
    },
  },
};
