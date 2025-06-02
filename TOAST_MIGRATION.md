# Toast 시스템 개선 - react-hot-toast 적용

기존의 자체 구현된 Toast 시스템을 `react-hot-toast` 라이브러리를 래핑하는 방식으로 개선했습니다.

## 🔄 변경 사항

### 이전 (자체 구현)
- Context API와 useState를 사용한 자체 구현
- 수동으로 Toast 컨테이너와 스타일링 관리
- 제한적인 애니메이션과 성능

### 현재 (react-hot-toast 래핑)
- 검증된 `react-hot-toast` 라이브러리 활용
- 향상된 애니메이션과 성능
- 더 나은 접근성 지원
- 기존 API 완전 호환 유지

## 📦 설치

```bash
npm install react-hot-toast
```

## 🚀 사용법

### 1. Provider 설정

```tsx
import { ToastProvider } from '@team-youth/youth-design';

function App() {
  return (
    <ToastProvider 
      position="top-right" 
      defaultDuration={4000}
    >
      <YourApp />
    </ToastProvider>
  );
}
```

### 2. useToast 훅 사용

```tsx
import { useToast } from '@team-youth/youth-design';

function MyComponent() {
  const toast = useToast();

  const handleSuccess = () => {
    toast.success('성공!', '작업이 완료되었습니다.');
  };

  const handleError = () => {
    toast.error('오류 발생!', '다시 시도해주세요.');
  };

  const handleWarning = () => {
    toast.warning('주의!', '저장 공간이 부족합니다.');
  };

  const handleInfo = () => {
    toast.info('알림', '새로운 업데이트가 있습니다.');
  };

  const handleCustom = () => {
    toast.custom({
      status: 'info',
      title: '사용자 정의 토스트',
      description: '특별한 설정으로 표시됩니다.',
      duration: 6000,
      showLeadingIcon: false,
    });
  };

  return (
    <div>
      <button onClick={handleSuccess}>Success Toast</button>
      <button onClick={handleError}>Error Toast</button>
      <button onClick={handleWarning}>Warning Toast</button>
      <button onClick={handleInfo}>Info Toast</button>
      <button onClick={handleCustom}>Custom Toast</button>
      <button onClick={() => toast.removeAll()}>모든 Toast 제거</button>
    </div>
  );
}
```

## 🎨 API 레퍼런스

### ToastProvider Props

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `position` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| 'top-center' \| 'bottom-center'` | `'top-right'` | Toast가 표시될 위치 |
| `defaultDuration` | `number` | `4000` | 기본 지속 시간 (ms) |

### useToast 메서드

| 메서드 | 설명 | 반환값 |
|--------|------|--------|
| `success(title, description?, options?)` | 성공 Toast 표시 | Toast ID |
| `error(title, description?, options?)` | 오류 Toast 표시 | Toast ID |
| `warning(title, description?, options?)` | 경고 Toast 표시 | Toast ID |
| `info(title, description?, options?)` | 정보 Toast 표시 | Toast ID |
| `custom(options)` | 사용자 정의 Toast 표시 | Toast ID |
| `remove(id)` | 특정 Toast 제거 | `void` |
| `removeAll()` | 모든 Toast 제거 | `void` |

### ToastItem 옵션

```tsx
interface ToastItem {
  status: 'success' | 'error' | 'warning' | 'info';
  title: string;
  description?: string;
  duration?: number; // 지속 시간 (ms), 0이면 수동 닫기만 가능
  showLeadingIcon?: boolean; // 앞쪽 아이콘 표시 여부
  id?: string; // 고유 ID (자동 생성됨)
}
```

## ✨ 개선된 기능

1. **향상된 애니메이션**: react-hot-toast의 부드러운 슬라이드 애니메이션
2. **더 나은 성능**: 가상화된 렌더링으로 많은 Toast 처리 시 성능 향상
3. **접근성 개선**: 스크린 리더 지원 향상
4. **자동 스택 관리**: Toast가 쌓일 때 자동으로 스타일 조정
5. **완전한 API 호환성**: 기존 코드 수정 없이 동일하게 사용 가능

## 🔧 마이그레이션 가이드

기존 코드를 수정할 필요가 없습니다! API가 완전히 호환됩니다.

```tsx
// 이전과 동일하게 사용 가능
const toast = useToast();
toast.success('제목', '설명');
toast.error('오류', '오류 설명');
// ... 모든 기존 API 동일하게 작동
```

## 🎯 주요 이점

- ✅ **Zero Breaking Changes**: 기존 코드 수정 불필요
- ✅ **Better Performance**: react-hot-toast의 최적화된 성능
- ✅ **Enhanced UX**: 더 부드러운 애니메이션과 사용자 경험
- ✅ **Future-proof**: 활발히 유지보수되는 라이브러리 기반
- ✅ **Accessibility**: 향상된 접근성 지원 