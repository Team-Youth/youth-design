# Table 컴포넌트 사용 가이드

## 개요
Table 컴포넌트는 동적 컬럼 너비 계산, 행 아코디언 기능, 로딩 상태 처리를 지원하는 유연한 테이블 컴포넌트입니다.

## 기본 사용법

### 1. 기본 테이블 구성

```tsx
import { Table } from '@/components/table/Table';

// 데이터 타입 정의
interface UserData {
  id: number;
  name: string;
  email: string;
  status: string;
}

// 테이블 데이터 준비
const userData: UserData[] = [
  { id: 1, name: '김철수', email: 'kim@example.com', status: '활성' },
  { id: 2, name: '이영희', email: 'lee@example.com', status: '비활성' },
];

// 컬럼 정의
const columns = [
  {
    header: 'ID',
    cell: (row: UserData) => <span>{row.id}</span>,
  },
  {
    header: '이름',
    cell: (row: UserData) => <span>{row.name}</span>,
  },
  {
    header: '이메일',
    cell: (row: UserData) => <span>{row.email}</span>,
  },
  {
    header: '상태',
    cell: (row: UserData) => (
      <span style={{ color: row.status === '활성' ? 'green' : 'red' }}>
        {row.status}
      </span>
    ),
  },
];

// 컴포넌트 사용
function MyTableComponent() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Table
      data={userData}
      columns={columns}
      isLoading={isLoading}
    />
  );
}
```

### 2. 행 아코디언 기능 추가

```tsx
// 아코디언 내용 컴포넌트
const UserDetailAccordion = (rowData: UserData) => (
  <div style={{ padding: '16px', backgroundColor: '#f9f9f9' }}>
    <h4>사용자 상세 정보</h4>
    <p>ID: {rowData.id}</p>
    <p>이름: {rowData.name}</p>
    <p>이메일: {rowData.email}</p>
    <p>상태: {rowData.status}</p>
  </div>
);

// 아코디언이 포함된 테이블
<Table
  data={userData}
  columns={columns}
  isLoading={isLoading}
  rowAccordion={UserDetailAccordion}
/>
```

### 3. 컬럼 스타일 커스터마이징

```tsx
const styledColumns = [
  {
    header: 'ID',
    cell: (row: UserData) => <span>{row.id}</span>,
    style: { width: '80px', textAlign: 'center' as const },
  },
  {
    header: '이름',
    cell: (row: UserData) => <span>{row.name}</span>,
    style: { minWidth: '120px' },
  },
  {
    header: '상태',
    cell: (row: UserData) => (
      <div style={{ 
        padding: '4px 8px', 
        borderRadius: '4px',
        backgroundColor: row.status === '활성' ? '#e8f5e8' : '#ffeaea',
        color: row.status === '활성' ? '#2d7d2d' : '#d32f2f'
      }}>
        {row.status}
      </div>
    ),
    style: { textAlign: 'center' as const },
  },
];
```

### 4. 중첩 테이블 (Parent-Child 구조)

```tsx
// 부모 테이블 (type="parent")
<Table
  data={parentData}
  columns={parentColumns}
  isLoading={isLoading}
  type="parent"
  rowAccordion={(rowData) => (
    // 자식 테이블을 아코디언으로 표시
    <Table
      data={rowData.children}
      columns={childColumns}
      isLoading={false}
      type="child"
    />
  )}
/>
```

## Props 상세 설명

### 필수 Props

| Prop | 타입 | 설명 |
|------|------|------|
| `data` | `T[]` | 테이블에 표시할 데이터 배열 |
| `columns` | `Column<T>[]` | 컬럼 정의 배열 |
| `isLoading` | `boolean` | 로딩 상태 표시 여부 |

### 선택사항 Props

| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `rowAccordion` | `(rowData: T) => JSX.Element` | - | 행 클릭 시 펼쳐질 아코디언 컨텐츠 |
| `type` | `'parent' \| 'child'` | `'parent'` | 테이블 유형 (스타일링에 영향) |

### Column 인터페이스

```tsx
interface Column<T> {
  header: string;                           // 헤더 텍스트
  cell: (row: T) => React.ReactNode;       // 셀 렌더링 함수
  style?: React.CSSProperties;             // 컬럼 스타일 (선택사항)
}
```

## 주요 특징

### 1. 자동 컬럼 너비 계산
- 컨텐츠에 따라 자동으로 최적의 컬럼 너비를 계산
- 브라우저 창 크기 변경 시 자동으로 재계산

### 2. 행 아코디언
- 행 클릭 시 상세 정보를 아코디언으로 표시
- `status`가 '미등록'인 경우 클릭 비활성화
- `status`가 '등록 완료'인 경우 자동으로 아코디언 열림

### 3. 로딩 상태
- `isLoading={true}` 시 로딩 스피너 표시
- 로딩 중에는 테이블 대신 중앙 정렬된 로딩 애니메이션 표시

### 4. 테이블 타입
- **Parent 타입**: 헤더 배경색 적용, 첫 번째 컬럼 숨김 가능
- **Child 타입**: 심플한 스타일, 중첩 테이블에 적합

## 실제 예제

```tsx
import React, { useState, useEffect } from 'react';
import { Table } from '@/components/table/Table';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  status: '등록 완료' | '미등록' | '검토중';
}

function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 데이터 로딩
  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  const columns = [
    {
      header: '',
      cell: (row: Product) => (
        <div>📦</div> // 아이콘
      ),
    },
    {
      header: '상품명',
      cell: (row: Product) => (
        <span style={{ fontWeight: 'bold' }}>{row.name}</span>
      ),
    },
    {
      header: '가격',
      cell: (row: Product) => (
        <span>{row.price.toLocaleString()}원</span>
      ),
      style: { textAlign: 'right' },
    },
    {
      header: '카테고리',
      cell: (row: Product) => <span>{row.category}</span>,
    },
    {
      header: '상태',
      cell: (row: Product) => (
        <span style={{
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          backgroundColor: 
            row.status === '등록 완료' ? '#e8f5e8' : 
            row.status === '미등록' ? '#ffeaea' : '#fff3cd'
        }}>
          {row.status}
        </span>
      ),
    },
  ];

  const ProductDetailAccordion = (product: Product) => (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h4>상품 상세 정보</h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <strong>상품 ID:</strong> {product.id}
        </div>
        <div>
          <strong>카테고리:</strong> {product.category}
        </div>
        <div>
          <strong>가격:</strong> {product.price.toLocaleString()}원
        </div>
        <div>
          <strong>상태:</strong> {product.status}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h2>상품 관리</h2>
      <Table
        data={products}
        columns={columns}
        isLoading={isLoading}
        rowAccordion={ProductDetailAccordion}
      />
    </div>
  );
}

export default ProductTable;
```

## 주의사항

1. **타입 안정성**: 제네릭 타입 `<T>`를 올바르게 설정하여 타입 안정성을 확보하세요.
2. **메모리 최적화**: 큰 데이터셋의 경우 가상화나 페이지네이션을 고려하세요.
3. **접근성**: 키보드 네비게이션과 스크린 리더 지원을 위해 적절한 ARIA 속성을 추가하세요.
4. **성능**: `cell` 함수 내에서 무거운 연산은 피하고, 필요시 `useMemo`를 사용하세요.

## 문제 해결

### Q: 컬럼 너비가 예상과 다르게 설정됩니다.
A: 컴포넌트는 자동으로 컨텐츠에 맞춰 너비를 계산합니다. 고정 너비가 필요한 경우 `column.style`에 `width` 또는 `minWidth`를 설정하세요.

### Q: 아코디언이 작동하지 않습니다.
A: 데이터의 `status` 속성이 '미등록'인 경우 클릭이 비활성화됩니다. 다른 조건으로 변경하려면 `Row` 컴포넌트의 `onPressRow` 함수를 수정하세요.

### Q: 로딩 스피너가 표시되지 않습니다.
A: `loadingSpinner.json` 파일이 올바른 경로에 있는지 확인하고, Lottie 애니메이션 파일이 유효한지 확인하세요. 