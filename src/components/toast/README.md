# Toast 컴포넌트

youth-design의 Toast 시스템이 **완전히** [Sonner](https://sonner.emilkowal.ski/) 기반으로 리팩토링되었습니다.

## 🎯 핵심 개념

이제 **Sonner 라이브러리**를 사용하여 **현대적이고 성능 최적화된** 토스트 시스템을 제공하며, **Figma 디자인과 완전히 일치**하는 UI를 구현합니다.

### 🔧 구현 방식
- **Sonner**: 고성능 토스트 라이브러리 + 접근성 + 터치 제스처
- **Youth-design 토큰**: colors, typography, radius 등 디자인 토큰 적용
- **Figma 정확성**: 360px 너비, 20px 패딩, 16px 보더 레디우스 등 완벽 일치

## 🔄 주요 변경사항

### 이전 (base-ui 기반)
```tsx
// Base UI 컴포넌트 + 복잡한 설정
<BaseToast.Provider>
  <BaseToast.Root toast={toast}>
    <BaseToast.Title>{title}</BaseToast.Title>
    <BaseToast.Description>{description}</BaseToast.Description>
  </BaseToast.Root>
</BaseToast.Provider>
```

### 현재 (sonner 기반)
```tsx
// 간단하고 직관적인 API
const { success } = useToast();
success('성공!', '작업이 완료되었습니다.');
```

### ✨ 얻게 된 기능들
- **성능 최적화**: 더 빠른 렌더링과 메모리 효율성
- **접근성**: ARIA 속성, 스크린 리더 지원
- **터치 제스처**: 스와이프로 토스트 닫기
- **호버 일시정지**: 마우스 호버 시 타이머 일시정지
- **애니메이션**: 부드러운 입장/퇴장 애니메이션
- **Figma 일치**: 디자인 시스템과 100% 일치하는 UI

## 📦 설치

Sonner는 이미 dependencies에 포함되어 있습니다:

```bash
# 별도 설치 불필요 - 이미 포함됨
yarn # sonner@^2.0.7 포함
```

## 🚀 사용법

### 1. Provider 설정

앱의 최상위에 `ToastProvider`를 설정합니다:

```tsx
import { ToastProvider } from '@team-youth/youth-design/toast';

function App() {
  return (
    <ToastProvider 
      position="top-right" 
      defaultDuration={3000} 
      limit={3}
    >
      <YourApp />
    </ToastProvider>
  );
}
```

### 2. 컴포넌트에서 사용

`useToast` 훅을 사용하여 토스트를 표시합니다:

```tsx
import { useToast } from '@team-youth/youth-design/toast';

function YourComponent() {
  const toast = useToast();

  const handleSuccess = () => {
    toast.success('성공!', '작업이 성공적으로 완료되었습니다.');
  };

  const handleError = () => {
    toast.error('오류 발생', '작업 중 오류가 발생했습니다.');
  };

  const handleWarning = () => {
    toast.warning('주의!', '주의가 필요한 상황입니다.');
  };

  const handleInfo = () => {
    toast.info('정보', '새로운 정보가 있습니다.');
  };

  const handleCustom = () => {
    toast.custom({
      status: 'success',
      title: '커스텀 토스트',
      description: '커스텀 설정으로 만든 토스트입니다.',
      duration: 6000,
    });
  };

  return (
    <div>
      <button onClick={handleSuccess}>성공 토스트</button>
      <button onClick={handleError}>에러 토스트</button>
      <button onClick={handleWarning}>경고 토스트</button>
      <button onClick={handleInfo}>정보 토스트</button>
      <button onClick={handleCustom}>커스텀 토스트</button>
    </div>
  );
}
```

## 🎨 Figma 디자인 일치

토스트는 다음 Figma 사양에 정확히 일치합니다:

### 📏 레이아웃
- **너비**: 360px (고정)
- **패딩**: 20px
- **간격**: 16px (아이콘과 텍스트 사이)
- **보더 레디우스**: 16px
- **그림자**: `shadow-s` (0px 1px 8px rgba(21, 23, 25, 0.08))

### 🎯 텍스트 스타일
- **제목**: `Title/H3` (Pretendard 600, 18px, line-height 1.33, #25282D)
- **설명**: `body/b2_regular` (Pretendard 400, 14px, line-height 1.57, #6E7887)

### 🎨 컬러 시스템
- **성공**: `#00C785`
- **에러**: `#FF2E2E`  
- **경고**: `#FFCC00`
- **정보**: `#2F6EFF`

### 🔘 아이콘
- **크기**: 24x24px
- **스타일**: 원형 배경 + 흰색 아이콘

## ⚙️ Provider 옵션

```tsx
interface ToastProviderProps {
  children: ReactNode;
  /** Toast가 표시될 위치 */
  position?: 
    | 'top-right' 
    | 'top-left' 
    | 'bottom-right' 
    | 'bottom-left' 
    | 'top-center' 
    | 'bottom-center';
  /** 기본 지속 시간 (ms) */
  defaultDuration?: number;
  /** 최대 토스트 개수 */
  limit?: number;
}
```

## 🔧 useToast API

```tsx
const toast = useToast();

// 기본 토스트 타입들
toast.success(title, description?, options?);
toast.error(title, description?, options?);
toast.warning(title, description?, options?);
toast.info(title, description?, options?);

// 커스텀 토스트
toast.custom({
  status: 'success' | 'error' | 'warning' | 'info',
  title: string,
  description?: string,
  duration?: number,
});

// 관리 기능
toast.remove(id);     // 특정 토스트 제거
toast.removeAll();    // 모든 토스트 제거
```

## 🎛️ 토스트 옵션

```tsx
interface ToastItem {
  id?: string;          // 고유 ID
  duration?: number;    // 지속 시간 (ms)
  status?: ToastStatus; // 토스트 타입
  title?: string;       // 제목
  description?: string; // 설명
}
```

## 🌟 Sonner의 장점

### ⚡ 성능
- **경량화**: 최소한의 번들 사이즈
- **최적화**: 효율적인 렌더링과 메모리 사용
- **애니메이션**: 하드웨어 가속 애니메이션

### 🎯 사용자 경험
- **터치 제스처**: 모바일에서 스와이프로 닫기
- **호버 일시정지**: 마우스 호버 시 타이머 일시정지
- **키보드 접근성**: 스크린 리더 지원
- **스택 관리**: 자동 스택 관리 및 제한

### 🎨 디자인
- **Figma 완벽 일치**: 디자인 시스템 100% 준수
- **일관성**: 모든 플랫폼에서 동일한 경험
- **커스터마이징**: 유연한 스타일 적용

## 🚨 마이그레이션 가이드

기존 base-ui 기반 코드를 sonner로 마이그레이션:

### Before (base-ui)
```tsx
import { Toast } from '@team-youth/youth-design';

// 직접 컴포넌트 사용 (더 이상 지원되지 않음)
<Toast 
  status="success" 
  title="성공!" 
  description="작업이 완료되었습니다." 
/>
```

### After (sonner)
```tsx
import { useToast } from '@team-youth/youth-design/toast';

function MyComponent() {
  const { success } = useToast();
  
  const handleClick = () => {
    success('성공!', '작업이 완료되었습니다.');
  };
  
  return <button onClick={handleClick}>액션</button>;
}
```

## 📚 예시

전체 예시는 `ToastExample` 컴포넌트를 참고하세요:

```tsx
import { ToastExample } from '@team-youth/youth-design/toast';

// Storybook이나 개발 환경에서 테스트
<ToastExample />
```

## 🔗 관련 문서

- [Sonner 공식 문서](https://sonner.emilkowal.ski/)
- [Youth Design System](https://github.com/Team-Youth/youth-design)
- [Figma 디자인](https://www.figma.com/design/MYWlOHlr5kI8RPUJw3ROca/Stack?node-id=157-2037)