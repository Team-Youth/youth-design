import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import Font from '../../components/font';
import { Table } from '../../components';

// 샘플 데이터 타입들

// 샘플 데이터
const sampleUsers: any[] = [
  {
    id: 1,
    name: '김영희',
    email: 'younghee@example.com',
    role: '관리자',
    status: '등록 완료',
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: '박철수',
    email: 'chulsoo@example.com',
    role: '사용자',
    status: '미등록',
    createdAt: '2024-01-16',
  },
  {
    id: 3,
    name: '이미영',
    email: 'miyoung@example.com',
    role: '에디터',
    status: '대기중',
    createdAt: '2024-01-17',
  },
  {
    id: 4,
    name: '최민수',
    email: 'minsu@example.com',
    role: '사용자',
    status: '등록 완료',
    createdAt: '2024-01-18',
  },
];

const sampleProducts: any[] = [
  { id: 1, name: '노트북', category: '전자제품', price: 1200000, stock: 15, status: 'active' },
  { id: 2, name: '무선마우스', category: '액세서리', price: 45000, stock: 32, status: 'active' },
  { id: 3, name: '키보드', category: '액세서리', price: 89000, stock: 0, status: 'inactive' },
  { id: 4, name: '모니터', category: '전자제품', price: 350000, stock: 8, status: 'active' },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '외부에서 cell을 주입받아 렌더하는 유연한 테이블 컴포넌트입니다. 동적 열 너비 조절, 아코디언 기능, 로딩 상태 등을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: '테이블에 표시할 데이터 배열',
      control: false,
    },
    columns: {
      description: '테이블 열 정의 배열 (header, cell, style)',
      control: false,
    },
    isLoading: {
      description: '로딩 상태',
      control: 'boolean',
    },
    type: {
      description: '테이블 타입 (parent: 헤더 배경 있음, child: 헤더 배경 없음)',
      control: { type: 'select' },
      options: ['parent', 'child'],
    },
    rowAccordion: {
      description: '행 확장 시 보여줄 컴포넌트',
      control: false,
    },
    emptyIcon: {
      description: '데이터가 없을 때 표시할 아이콘 타입',
      control: { type: 'select' },
      options: ['person-filled', 'search', 'info-stroke', 'heart-stroke', 'caution-stroke'],
    },
    emptyIconSize: {
      description: '빈 데이터 아이콘 크기 (픽셀)',
      control: { type: 'number', min: 16, max: 64, step: 4 },
    },
    emptyIconColor: {
      description: '빈 데이터 아이콘 색상',
      control: { type: 'color' },
    },
    emptyText: {
      description: '데이터가 없을 때 표시할 텍스트',
      control: 'text',
    },
    onLoadMore: {
      description: '더 보기 버튼 클릭 시 호출되는 콜백 함수',
      action: 'loadMore',
    },
    onPageJump: {
      description: '페이지 점프 시 호출되는 콜백 함수',
      action: 'pageJumped',
    },
    onRowClick: {
      description: '행 클릭 시 호출되는 콜백 함수',
      action: 'rowClicked',
    },
    tableMinWidth: {
      description: '테이블 최소 너비 (픽셀 또는 문자열)',
      control: { type: 'text' },
    },
    totalPages: {
      description: '전체 페이지 수',
      control: { type: 'number', min: 1 },
    },
    currentPage: {
      description: '현재 페이지 번호',
      control: { type: 'number', min: 1 },
    },
    hasNextPage: {
      description: '다음 페이지 존재 여부',
      control: 'boolean',
    },
    isFetchingNextPage: {
      description: '다음 페이지 로딩 상태',
      control: 'boolean',
    },
    totalCount: {
      description: '전체 데이터 수',
      control: { type: 'number', min: 0 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// 기본 사용자 테이블
export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: [
      {
        header: '선택',
        cell: () => <div style={{ fontSize: '16px', cursor: 'pointer' }}>▼</div>,
      },
      {
        header: 'ID',
        cell: (user: any) => (
          <Font type="body3" color="text/black">
            {user.id}
          </Font>
        ),
      },
      {
        header: '이름',
        cell: (user: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {user.name}
          </Font>
        ),
      },
      {
        header: '이메일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.email}
          </Font>
        ),
      },
      {
        header: '역할',
        cell: (user: any) => (
          <Font type="body3" color="text/black">
            {user.role}
          </Font>
        ),
      },
      {
        header: '상태',
        cell: (user: any) => (
          <div
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              backgroundColor:
                user.status === '등록 완료'
                  ? '#E7F5FF'
                  : user.status === '미등록'
                    ? '#FFE8E8'
                    : '#FFF4E6',
              display: 'inline-block',
            }}
          >
            <Font
              type="caption"
              color={
                user.status === '등록 완료'
                  ? 'blue/500'
                  : user.status === '미등록'
                    ? 'red/500'
                    : 'orange/500'
              }
            >
              {user.status}
            </Font>
          </div>
        ),
      },
      {
        header: '생성일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.createdAt}
          </Font>
        ),
      },
      {
        header: '액션',
        cell: (user: any) => (
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => action('edit-user')(user)}
              style={{
                padding: '4px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                background: 'white',
                cursor: 'pointer',
              }}
            >
              편집
            </button>
            <button
              onClick={() => action('delete-user')(user)}
              style={{
                padding: '4px 12px',
                border: '1px solid #ff4444',
                borderRadius: '4px',
                background: '#ff4444',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              삭제
            </button>
          </div>
        ),
      },
    ],
    isLoading: false,
    type: 'parent',
  },
};

// 로딩 상태
export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

// 자식 테이블 (헤더 배경 없음)
export const ChildTable: Story = {
  args: {
    data: sampleProducts,
    columns: [
      {
        header: '',
        cell: () => <div style={{ fontSize: '14px', cursor: 'pointer' }}>▼</div>,
      },
      {
        header: '상품명',
        cell: (product: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {product.name}
          </Font>
        ),
      },
      {
        header: '카테고리',
        cell: (product: any) => (
          <Font type="body3" color="text/gray">
            {product.category}
          </Font>
        ),
      },
      {
        header: '가격',
        cell: (product: any) => (
          <Font type="body3" color="text/black">
            {product.price.toLocaleString()}원
          </Font>
        ),
      },
      {
        header: '재고',
        cell: (product: any) => (
          <Font
            type="body3"
            color={product.stock > 0 ? 'text/black' : 'red/500'}
            fontWeight={product.stock === 0 ? 'medium' : 'regular'}
          >
            {product.stock}개
          </Font>
        ),
      },
      {
        header: '상태',
        cell: (product: any) => (
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: product.status === 'active' ? '#22C55E' : '#EF4444',
            }}
          />
        ),
      },
    ],
    isLoading: false,
    type: 'child',
  },
};

// 아코디언 기능이 있는 테이블
export const WithAccordion: Story = {
  args: {
    data: sampleUsers,
    columns: [
      {
        header: '확장',
        cell: () => <div style={{ fontSize: '16px', cursor: 'pointer' }}>▼</div>,
      },
      {
        header: '이름',
        cell: (user: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {user.name}
          </Font>
        ),
      },
      {
        header: '이메일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.email}
          </Font>
        ),
      },
      {
        header: '상태',
        cell: (user: any) => (
          <div
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              backgroundColor:
                user.status === '등록 완료'
                  ? '#E7F5FF'
                  : user.status === '미등록'
                    ? '#FFE8E8'
                    : '#FFF4E6',
              display: 'inline-block',
            }}
          >
            <Font
              type="caption"
              color={
                user.status === '등록 완료'
                  ? 'blue/500'
                  : user.status === '미등록'
                    ? 'red/500'
                    : 'orange/500'
              }
            >
              {user.status}
            </Font>
          </div>
        ),
      },
      {
        header: '액션',
        cell: () => (
          <button
            style={{
              padding: '6px 12px',
              border: '1px solid #007bff',
              borderRadius: '4px',
              background: '#007bff',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => action('view-details')()}
          >
            상세보기
          </button>
        ),
      },
    ],
    rowAccordion: (user: any) => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #dee2e6',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Font type="heading5" color="text/black">
            사용자 상세 정보
          </Font>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <Font type="body3" color="text/gray" style={{ marginBottom: '4px' }}>
                사용자 ID
              </Font>
              <Font type="body2" color="text/black">
                {user.id}
              </Font>
            </div>
            <div>
              <Font type="body3" color="text/gray" style={{ marginBottom: '4px' }}>
                역할
              </Font>
              <Font type="body2" color="text/black">
                {user.role}
              </Font>
            </div>
            <div>
              <Font type="body3" color="text/gray" style={{ marginBottom: '4px' }}>
                가입일
              </Font>
              <Font type="body2" color="text/black">
                {user.createdAt}
              </Font>
            </div>
            <div>
              <Font type="body3" color="text/gray" style={{ marginBottom: '4px' }}>
                최근 접속
              </Font>
              <Font type="body2" color="text/black">
                2024-01-20 14:30
              </Font>
            </div>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
            <button
              onClick={() => action('send-message')(user)}
              style={{
                padding: '8px 16px',
                border: '1px solid #007bff',
                borderRadius: '4px',
                background: 'white',
                color: '#007bff',
                cursor: 'pointer',
              }}
            >
              메시지 보내기
            </button>
            <button
              onClick={() => action('view-activity')(user)}
              style={{
                padding: '8px 16px',
                border: '1px solid #28a745',
                borderRadius: '4px',
                background: 'white',
                color: '#28a745',
                cursor: 'pointer',
              }}
            >
              활동 이력 보기
            </button>
          </div>
        </div>
      </div>
    ),
    isLoading: false,
    type: 'parent',
  },
};

// 빈 데이터 테이블 - 기본 empty state
export const EmptyData: Story = {
  args: {
    data: [],
    columns: [
      {
        header: 'ID',
        cell: (item: any) => <Font type="body3">{item.id}</Font>,
      },
      {
        header: '이름',
        cell: (item: any) => <Font type="body2">{item.name}</Font>,
      },
      {
        header: '상태',
        cell: (item: any) => <Font type="body3">{item.status}</Font>,
      },
    ],
    isLoading: false,
    type: 'parent',
    emptyIcon: 'person-filled',
    emptyIconSize: 32,
    emptyIconColor: '#AFB6C0',
    emptyText: '검색된 회원님이 없어요',
  },
};

// 빈 데이터 테이블 - 사용자 데이터
export const EmptyUserData: Story = {
  args: {
    data: [],
    columns: [
      {
        header: '상태',
        cell: () => <div style={{ fontSize: '16px', cursor: 'pointer' }}>▼</div>,
      },
      {
        header: '이름',
        cell: (user: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {user.name}
          </Font>
        ),
      },
      {
        header: '이메일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.email}
          </Font>
        ),
      },
      {
        header: '역할',
        cell: (user: any) => (
          <Font type="body3" color="text/black">
            {user.role}
          </Font>
        ),
      },
    ],
    isLoading: false,
    type: 'parent',
    emptyIcon: 'person-filled',
    emptyIconSize: 32,
    emptyIconColor: '#E8EAED',
    emptyText: '등록된 사용자가 없습니다',
  },
};

// 빈 검색 결과
export const EmptySearchResult: Story = {
  args: {
    data: [],
    columns: [
      {
        header: '',
        cell: () => <div style={{ fontSize: '16px', cursor: 'pointer' }}>▼</div>,
      },
      {
        header: '상품명',
        cell: (product: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {product.name}
          </Font>
        ),
      },
      {
        header: '가격',
        cell: (product: any) => (
          <Font type="body3" color="text/black">
            {product.price.toLocaleString()}원
          </Font>
        ),
      },
    ],
    isLoading: false,
    type: 'parent',
    emptyIcon: 'search',
    emptyIconSize: 32,
    emptyIconColor: '#D6D6D6',
    emptyText: '검색 결과가 없습니다',
  },
};

// 아이콘 없는 빈 데이터
export const EmptyDataWithoutIcon: Story = {
  args: {
    data: [],
    columns: [
      {
        header: '항목',
        cell: (item: any) => <Font type="body2">{item.name}</Font>,
      },
      {
        header: '설명',
        cell: (item: any) => <Font type="body3">{item.description}</Font>,
      },
    ],
    isLoading: false,
    type: 'parent',
    emptyText: '데이터가 없습니다',
  },
};

export const EmptyDataWithHeartIcon: Story = {
  args: {
    data: [],
    columns: [
      {
        header: '이름',
        cell: (item: any) => <Font type="body2">{item.name}</Font>,
      },
      {
        header: '좋아요',
        cell: (item: any) => <Font type="body3">{item.likes}</Font>,
      },
    ],
    isLoading: false,
    type: 'parent',
    emptyIcon: 'heart-stroke',
    emptyIconSize: 32,
    emptyIconColor: '#FFB6C1',
    emptyText: '좋아하는 항목이 없어요',
  },
};

export const EmptyChildTable: Story = {
  args: {
    data: [],
    columns: [
      {
        header: '',
        cell: () => <div style={{ fontSize: '14px', cursor: 'pointer' }}>▼</div>,
      },
      {
        header: '이름',
        cell: (item: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {item.name}
          </Font>
        ),
      },
      {
        header: '상태',
        cell: (item: any) => (
          <Font type="body3" color="text/gray">
            {item.status}
          </Font>
        ),
      },
    ],
    isLoading: false,
    type: 'child',
    emptyIcon: 'caution-stroke',
    emptyIconSize: 32,
    emptyIconColor: '#F59E0B',
    emptyText: '하위 데이터가 없습니다',
  },
};

// 커스텀 스타일이 적용된 테이블
export const CustomStyling: Story = {
  args: {
    data: sampleProducts,
    columns: [
      {
        header: '상품',
        cell: (product: any) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#e9ecef',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              📦
            </div>
            <div>
              <Font type="body2" color="text/black" fontWeight="medium">
                {product.name}
              </Font>
              <Font type="caption" color="text/gray">
                {product.category}
              </Font>
            </div>
          </div>
        ),
        minWidth: '200px',
      },
      {
        header: '가격',
        cell: (product: any) => (
          <div style={{ textAlign: 'right' }}>
            <Font type="body2" color="text/black" fontWeight="medium">
              ₩{product.price.toLocaleString()}
            </Font>
          </div>
        ),
        justifyContent: 'flex-end',
        minWidth: '120px',
      },
      {
        header: '재고',
        cell: (product: any) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '60px',
                height: '6px',
                backgroundColor: '#e9ecef',
                borderRadius: '3px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${Math.min((product.stock / 50) * 100, 100)}%`,
                  height: '100%',
                  backgroundColor:
                    product.stock > 10 ? '#22C55E' : product.stock > 0 ? '#F59E0B' : '#EF4444',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
            <Font type="body3" color="text/black">
              {product.stock}
            </Font>
          </div>
        ),
        minWidth: '120px',
      },
      {
        header: '상태',
        cell: (product: any) => (
          <div
            style={{
              padding: '6px 12px',
              borderRadius: '16px',
              backgroundColor: product.status === 'active' ? '#DCFCE7' : '#FEE2E2',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: product.status === 'active' ? '#22C55E' : '#EF4444',
              }}
            />
            <Font
              type="caption"
              color={product.status === 'active' ? 'green/600' : 'red/600'}
              fontWeight="medium"
            >
              {product.status === 'active' ? '판매중' : '판매중지'}
            </Font>
          </div>
        ),
      },
    ],
    isLoading: false,
    type: 'parent',
  },
};

// 반응형 테이블 예시
export const ResponsiveTable: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    data: sampleUsers.slice(0, 3),
    columns: [
      {
        header: '',
        cell: () => <div style={{ fontSize: '12px', cursor: 'pointer' }}>▼</div>,
      },
      {
        header: '사용자',
        cell: (user: any) => (
          <div>
            <Font type="body2" color="text/black" fontWeight="medium">
              {user.name}
            </Font>
            <Font type="caption" color="text/gray" style={{ display: 'block', marginTop: '2px' }}>
              {user.email}
            </Font>
          </div>
        ),
      },
      {
        header: '상태',
        cell: (user: any) => (
          <div
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              backgroundColor:
                user.status === '등록 완료'
                  ? '#E7F5FF'
                  : user.status === '미등록'
                    ? '#FFE8E8'
                    : '#FFF4E6',
              display: 'inline-block',
            }}
          >
            <Font
              type="caption"
              color={
                user.status === '등록 완료'
                  ? 'blue/500'
                  : user.status === '미등록'
                    ? 'red/500'
                    : 'orange/500'
              }
            >
              {user.status}
            </Font>
          </div>
        ),
      },
    ],
    isLoading: false,
    type: 'parent',
  },
};

// 대량 데이터를 위한 샘플 생성
const generateLargeDataset = (count: number) => {
  const roles = ['관리자', '사용자', '에디터', '뷰어', '매니저'];
  const statuses = ['등록 완료', '미등록', '대기중', '승인 대기', '비활성'];
  const names = [
    '김영희',
    '박철수',
    '이미영',
    '최민수',
    '정수진',
    '한지민',
    '오성훈',
    '윤세라',
    '강태준',
    '임나영',
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: names[i % names.length] + ` ${Math.floor(i / names.length) + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    createdAt: new Date(2024, 0, 1 + (i % 365)).toISOString().split('T')[0],
    lastLogin: new Date(2024, 0, 1 + (i % 30)).toISOString().split('T')[0],
  }));
};

const largeDataset = generateLargeDataset(47);

// 기본 페이지네이션 테이블
export const WithPagination: Story = {
  args: {
    data: largeDataset,
    columns: [
      {
        header: '선택',
        cell: () => <div style={{ fontSize: '16px', cursor: 'pointer' }}>▼</div>,
      },
      {
        header: 'ID',
        cell: (user: any) => (
          <Font type="body3" color="text/black">
            {user.id}
          </Font>
        ),
      },
      {
        header: '이름',
        cell: (user: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {user.name}
          </Font>
        ),
      },
      {
        header: '이메일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.email}
          </Font>
        ),
      },
      {
        header: '역할',
        cell: (user: any) => (
          <Font type="body3" color="text/black">
            {user.role}
          </Font>
        ),
      },
      {
        header: '상태',
        cell: (user: any) => (
          <div
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              backgroundColor:
                user.status === '등록 완료'
                  ? '#E7F5FF'
                  : user.status === '미등록'
                    ? '#FFE8E8'
                    : '#FFF4E6',
              display: 'inline-block',
            }}
          >
            <Font
              type="caption"
              color={
                user.status === '등록 완료'
                  ? 'blue/500'
                  : user.status === '미등록'
                    ? 'red/500'
                    : 'orange/500'
              }
            >
              {user.status}
            </Font>
          </div>
        ),
      },
      {
        header: '가입일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.createdAt}
          </Font>
        ),
      },
    ],
    isLoading: false,
    type: 'parent',
    totalPages: 5,
    currentPage: 1,
    totalCount: 47,
    onPageJump: action('page-jumped'),
  },
};

// 페이지 크기가 작은 페이지네이션
export const SmallPageSize: Story = {
  args: {
    data: largeDataset,
    columns: [
      {
        header: 'ID',
        cell: (user: any) => (
          <Font type="body3" color="text/black">
            {user.id}
          </Font>
        ),
      },
      {
        header: '이름',
        cell: (user: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {user.name}
          </Font>
        ),
      },
      {
        header: '이메일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.email}
          </Font>
        ),
      },
      {
        header: '상태',
        cell: (user: any) => (
          <div
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              backgroundColor:
                user.status === '등록 완료'
                  ? '#E7F5FF'
                  : user.status === '미등록'
                    ? '#FFE8E8'
                    : '#FFF4E6',
              display: 'inline-block',
            }}
          >
            <Font
              type="caption"
              color={
                user.status === '등록 완료'
                  ? 'blue/500'
                  : user.status === '미등록'
                    ? 'red/500'
                    : 'orange/500'
              }
            >
              {user.status}
            </Font>
          </div>
        ),
      },
    ],
    isLoading: false,
    type: 'parent',
    totalPages: 10,
    currentPage: 1,
    totalCount: 47,
    onPageJump: action('page-jumped'),
  },
  parameters: {
    docs: {
      description: {
        story: '페이지당 5개 항목을 표시하는 작은 페이지 크기 예시입니다.',
      },
    },
  },
};

// 큰 페이지 크기 페이지네이션
export const LargePageSize: Story = {
  args: {
    data: generateLargeDataset(100),
    columns: [
      {
        header: 'ID',
        cell: (user: any) => (
          <Font type="body3" color="text/black">
            {user.id}
          </Font>
        ),
      },
      {
        header: '이름',
        cell: (user: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {user.name}
          </Font>
        ),
      },
      {
        header: '이메일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.email}
          </Font>
        ),
      },
      {
        header: '역할',
        cell: (user: any) => (
          <Font type="body3" color="text/black">
            {user.role}
          </Font>
        ),
      },
    ],
    isLoading: false,
    type: 'parent',
    totalPages: 5,
    currentPage: 1,
    totalCount: 100,
    onPageJump: action('page-jumped'),
  },
  parameters: {
    docs: {
      description: {
        story: '페이지당 20개 항목을 표시하고 더 많은 페이지 버튼을 보여주는 예시입니다.',
      },
    },
  },
};

// 비활성화된 페이지네이션
export const DisabledPagination: Story = {
  args: {
    data: largeDataset,
    columns: [
      {
        header: 'ID',
        cell: (user: any) => (
          <Font type="body3" color="text/black">
            {user.id}
          </Font>
        ),
      },
      {
        header: '이름',
        cell: (user: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {user.name}
          </Font>
        ),
      },
      {
        header: '이메일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.email}
          </Font>
        ),
      },
    ],
    isLoading: true,
    type: 'parent',
    totalPages: 5,
    currentPage: 1,
    totalCount: 47,
    onPageJump: action('page-jumped'),
  },
  parameters: {
    docs: {
      description: {
        story: '페이지네이션이 비활성화된 상태의 예시입니다.',
      },
    },
  },
};

// 아코디언과 페이지네이션 함께 사용
export const PaginationWithAccordion: Story = {
  args: {
    data: largeDataset,
    columns: [
      {
        header: '확장',
        cell: () => <div style={{ fontSize: '16px', cursor: 'pointer' }}>▼</div>,
      },
      {
        header: '이름',
        cell: (user: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {user.name}
          </Font>
        ),
      },
      {
        header: '이메일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.email}
          </Font>
        ),
      },
      {
        header: '상태',
        cell: (user: any) => (
          <div
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              backgroundColor:
                user.status === '등록 완료'
                  ? '#E7F5FF'
                  : user.status === '미등록'
                    ? '#FFE8E8'
                    : '#FFF4E6',
              display: 'inline-block',
            }}
          >
            <Font
              type="caption"
              color={
                user.status === '등록 완료'
                  ? 'blue/500'
                  : user.status === '미등록'
                    ? 'red/500'
                    : 'orange/500'
              }
            >
              {user.status}
            </Font>
          </div>
        ),
      },
      {
        header: '액션',
        cell: () => (
          <button
            style={{
              padding: '6px 12px',
              border: '1px solid #007bff',
              borderRadius: '4px',
              background: '#007bff',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => action('view-details')()}
          >
            상세보기
          </button>
        ),
      },
    ],
    rowAccordion: (user: any) => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #dee2e6',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Font type="heading5" color="text/black">
            사용자 상세 정보
          </Font>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <Font type="body3" color="text/gray" style={{ marginBottom: '4px' }}>
                사용자 ID
              </Font>
              <Font type="body2" color="text/black">
                {user.id}
              </Font>
            </div>
            <div>
              <Font type="body3" color="text/gray" style={{ marginBottom: '4px' }}>
                역할
              </Font>
              <Font type="body2" color="text/black">
                {user.role}
              </Font>
            </div>
            <div>
              <Font type="body3" color="text/gray" style={{ marginBottom: '4px' }}>
                가입일
              </Font>
              <Font type="body2" color="text/black">
                {user.createdAt}
              </Font>
            </div>
            <div>
              <Font type="body3" color="text/gray" style={{ marginBottom: '4px' }}>
                최근 접속
              </Font>
              <Font type="body2" color="text/black">
                {user.lastLogin}
              </Font>
            </div>
          </div>
        </div>
      </div>
    ),
    isLoading: false,
    type: 'parent',
    totalPages: 6,
    currentPage: 1,
    totalCount: 47,
    onPageJump: action('page-jumped'),
  },
  parameters: {
    docs: {
      description: {
        story: '아코디언 기능과 페이지네이션을 함께 사용하는 예시입니다.',
      },
    },
  },
};

// 행 클릭 기능이 있는 테이블
export const WithRowClick: Story = {
  args: {
    data: sampleUsers,
    columns: [
      {
        header: 'ID',
        cell: (user: any) => (
          <Font type="body3" color="text/black">
            {user.id}
          </Font>
        ),
      },
      {
        header: '이름',
        cell: (user: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {user.name}
          </Font>
        ),
      },
      {
        header: '이메일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.email}
          </Font>
        ),
      },
      {
        header: '상태',
        cell: (user: any) => (
          <div
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              backgroundColor:
                user.status === '등록 완료'
                  ? '#E7F5FF'
                  : user.status === '미등록'
                    ? '#FFE8E8'
                    : '#FFF4E6',
              display: 'inline-block',
            }}
          >
            <Font
              type="caption"
              color={
                user.status === '등록 완료'
                  ? 'blue/500'
                  : user.status === '미등록'
                    ? 'red/500'
                    : 'orange/500'
              }
            >
              {user.status}
            </Font>
          </div>
        ),
      },
    ],
    isLoading: false,
    type: 'parent',
    onRowClick: action('row-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          '행을 클릭할 수 있는 테이블입니다. 행에 마우스를 올리면 hover 효과를 확인할 수 있습니다.',
      },
    },
  },
};

// 행 클릭과 아코디언이 함께 있는 테이블
export const WithRowClickAndAccordion: Story = {
  args: {
    data: sampleUsers,
    columns: [
      {
        header: '확장',
        cell: () => <div style={{ fontSize: '16px', cursor: 'pointer' }}>▼</div>,
      },
      {
        header: '이름',
        cell: (user: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {user.name}
          </Font>
        ),
      },
      {
        header: '이메일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.email}
          </Font>
        ),
      },
      {
        header: '상태',
        cell: (user: any) => (
          <div
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              backgroundColor:
                user.status === '등록 완료'
                  ? '#E7F5FF'
                  : user.status === '미등록'
                    ? '#FFE8E8'
                    : '#FFF4E6',
              display: 'inline-block',
            }}
          >
            <Font
              type="caption"
              color={
                user.status === '등록 완료'
                  ? 'blue/500'
                  : user.status === '미등록'
                    ? 'red/500'
                    : 'orange/500'
              }
            >
              {user.status}
            </Font>
          </div>
        ),
      },
    ],
    rowAccordion: (user: any) => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #dee2e6',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Font type="heading5" color="text/black">
            사용자 상세 정보
          </Font>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <Font type="body3" color="text/gray" style={{ marginBottom: '4px' }}>
                사용자 ID
              </Font>
              <Font type="body2" color="text/black">
                {user.id}
              </Font>
            </div>
            <div>
              <Font type="body3" color="text/gray" style={{ marginBottom: '4px' }}>
                역할
              </Font>
              <Font type="body2" color="text/black">
                {user.role}
              </Font>
            </div>
          </div>
        </div>
      </div>
    ),
    isLoading: false,
    type: 'parent',
    onRowClick: action('row-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          '행 클릭과 아코디언 기능이 모두 있는 테이블입니다. 행 클릭 시 아코디언 토글과 클릭 이벤트가 동시에 발생합니다.',
      },
    },
  },
};

// Hover 효과를 보여주는 테이블
export const HoverEffects: Story = {
  args: {
    data: sampleProducts,
    columns: [
      {
        header: '상품명',
        cell: (product: any) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#e9ecef',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              📦
            </div>
            <Font type="body2" color="text/black" fontWeight="medium">
              {product.name}
            </Font>
          </div>
        ),
      },
      {
        header: '카테고리',
        cell: (product: any) => (
          <Font type="body3" color="text/gray">
            {product.category}
          </Font>
        ),
      },
      {
        header: '가격',
        cell: (product: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            ₩{product.price.toLocaleString()}
          </Font>
        ),
        justifyContent: 'flex-end',
      },
      {
        header: '액션',
        cell: (product: any) => (
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                action('edit-product')(product);
              }}
              style={{
                padding: '4px 8px',
                border: '1px solid #007bff',
                borderRadius: '4px',
                background: 'white',
                color: '#007bff',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              편집
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                action('delete-product')(product);
              }}
              style={{
                padding: '4px 8px',
                border: '1px solid #dc3545',
                borderRadius: '4px',
                background: '#dc3545',
                color: 'white',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              삭제
            </button>
          </div>
        ),
      },
    ],
    isLoading: false,
    type: 'parent',
    onRowClick: action('product-row-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Hover 효과를 확인할 수 있는 테이블입니다. 마우스를 행 위에 올려보세요. 버튼 클릭 시에는 행 클릭 이벤트가 발생하지 않습니다 (stopPropagation 사용).',
      },
    },
  },
};

// Infinite Scroll 스타일 페이지네이션
export const InfiniteScrollStyle: Story = {
  args: {
    data: largeDataset.slice(0, 10),
    columns: [
      {
        header: 'ID',
        cell: (user: any) => (
          <Font type="body3" color="text/black">
            {user.id}
          </Font>
        ),
      },
      {
        header: '이름',
        cell: (user: any) => (
          <Font type="body2" color="text/black" fontWeight="medium">
            {user.name}
          </Font>
        ),
      },
      {
        header: '이메일',
        cell: (user: any) => (
          <Font type="body3" color="text/gray">
            {user.email}
          </Font>
        ),
      },
    ],
    isLoading: false,
    type: 'parent',
    totalPages: 5,
    currentPage: 1,
    hasNextPage: true,
    isFetchingNextPage: false,
    totalCount: 47,
    onPageJump: action('page-jumped'),
    onLoadMore: action('load-more'),
    onRowClick: action('user-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Infinite Scroll 스타일의 페이지네이션과 행 클릭 기능을 함께 사용하는 예시입니다.',
      },
    },
  },
};

// 빈 데이터 - 기본 empty illust 사용
export const EmptyDataWithDefaultIllust: Story = {
  args: {
    data: [],
    columns: [
      {
        header: '이름',
        cell: (item: any) => <Font type="body2">{item.name}</Font>,
      },
      {
        header: '설명',
        cell: (item: any) => <Font type="body3">{item.description}</Font>,
      },
    ],
    isLoading: false,
    type: 'parent',
    emptyText: '데이터가 없습니다',
    onRowClick: action('empty-row-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'emptyIcon을 지정하지 않으면 기본 empty illust(32px)가 자동으로 표시됩니다.',
      },
    },
  },
};
