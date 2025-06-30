# Toast 컴포넌트

youth-design의 Toast 시스템이 **완전히** [Base UI](https://base-ui.com/react/components/toast) 기반으로 리팩토링되었습니다.

## 🎯 핵심 개념

이제 **Base UI의 Toast 컴포넌트들**(`Toast.Root`, `Toast.Title`, `Toast.Description`, `Toast.Close` 등)을 **직접 사용**하면서, **스타일만** youth-design 토큰으로 커스터마이징합니다.

### 🔧 구현 방식
- **Base UI의 Toast.Root**: 기본 토스트 컨테이너 + 애니메이션 + 접근성
- **Base UI의 Toast.Title**: 제목 영역 + ARIA 속성
- **Base UI의 Toast.Description**: 설명 영역 + ARIA 속성  
- **Base UI의 Toast.Close**: 닫기 버튼 + 키보드 네비게이션
- **youth-design 스타일**: colors, typography, spacing 등 디자인 토큰 적용

## 🔄 주요 변경사항

### 이전 (react-hot-toast 기반)
```tsx
// 완전히 커스텀 컴포넌트
<div className="toast">
  <h3>{title}</h3>
  <p>{description}</p>
  <button onClick={onClose}>×</button>
</div>
```

### 현재 (base-ui 기반)
```tsx
// Base UI 컴포넌트 + youth-design 스타일
<BaseToast.Root toast={toast} style={youthDesignStyles}>
  <BaseToast.Title style={titleStyles}>{title}</BaseToast.Title>
  <BaseToast.Description style={descStyles}>{description}</BaseToast.Description>
  <BaseToast.Close style={closeStyles}>×</BaseToast.Close>
</BaseToast.Root>
```

### ✨ 얻게 된 기능들
- **접근성**: ARIA 속성, 스크린 리더 지원, Live Region
- **키보드 네비게이션**: F6 포커스, Escape 닫기, Tab 이동
- **터치 제스처**: 스와이프로 토스트 닫기 (방향 설정 가능)
- **포커스 관리**: 토스트 닫힘 후 이전 포커스 위치 복귀
- **애니메이션**: 부드러운 입장/퇴장 애니메이션
- **호버 관리**: 마우스 호버 시 타이머 일시정지
- **창 포커스 관리**: 창이 비활성화되면 타이머 일시정지

## 📦 설치

```bash
yarn add @base-ui-components/react
```

## 🚀 기본 사용법

### 1. Provider 설정

```tsx
import { ToastProvider } from '@team-youth/youth-design/toast';

function App() {
  return (
    <ToastProvider 
      position="top-right" 
      defaultDuration={4000}
      limit={3}
    >
      <YourApp />
    </ToastProvider>
  );
}
```

### 2. 컴포넌트에서 사용

```tsx
import { useToast } from '@team-youth/youth-design/toast';

function YourComponent() {
  const toast = useToast();

  const handleSuccess = () => {
    toast.success('성공!', '작업이 완료되었습니다.');
  };

  return <button onClick={handleSuccess}>Success</button>;
}
```

## 🎛️ API 레퍼런스

### ToastProvider Props

| Props | Type | Default | Description |
|-------|------|---------|-------------|
| `position` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| 'top-center' \| 'bottom-center'` | `'top-right'` | 토스트 표시 위치 |
| `defaultDuration` | `number` | `4000` | 기본 지속 시간 (ms) |
| `limit` | `number` | `3` | 최대 토스트 개수 |

### useToast Hook

```tsx
const toast = useToast();

// 기본 메서드들 (react-hot-toast와 동일한 API)
toast.success(title, description?, options?)
toast.error(title, description?, options?)
toast.warning(title, description?, options?)
toast.info(title, description?, options?)
toast.custom(options)

// 관리 메서드들
toast.remove(id)           // 특정 토스트 제거
toast.removeAll()          // 모든 토스트 제거
```

## ♿ 접근성 기능 (Base UI 제공)

### 키보드 네비게이션
- **F6**: 토스트 영역에 포커스
- **Escape**: 현재 포커스된 토스트 닫기
- **Tab/Shift+Tab**: 토스트 간 이동
- **Enter/Space**: 액션 버튼 실행

### 스크린 리더 지원
- 토스트 제목과 설명이 자동으로 읽힘
- ARIA live region으로 동적 콘텐츠 알림
- 적절한 role과 aria 속성 자동 설정

### 포커스 관리
- 토스트 닫힘 시 이전 포커스 위치로 자동 복귀
- 여러 토스트 중 하나가 닫히면 다음/이전 토스트로 포커스 이동

## 📱 터치 제스처 (Base UI 제공)

```tsx
// 스와이프 방향 설정 (개발자 커스터마이징 가능)
<BaseToast.Root 
  toast={toast}
  swipeDirection={['down', 'right']}  // 기본값
>
```

- **기본 지원**: 아래쪽, 오른쪽 스와이프
- **커스터마이징**: `swipeDirection` prop으로 방향 설정
- **임계값**: 40px 이상 스와이프해야 닫힘
- **취소**: 반대 방향으로 스와이프하면 취소

## 🎨 스타일링

Base UI의 기본 동작을 사용하면서 youth-design 스타일 적용:

```tsx
// 실제 구현 방식
<BaseToast.Root 
  toast={toast}
  style={{
    backgroundColor: colors.semantic.background.primary,
    borderRadius: radius.l,
    boxShadow: shadows.s,
    padding: spacing.l,
    // ... youth-design 토큰들
  }}
>
  <BaseToast.Title style={{
    ...textStyles.heading3,
    color: colors.semantic.text.primary,
  }}>
    {title}
  </BaseToast.Title>
</BaseToast.Root>
```

### 사용되는 youth-design 토큰들
- **colors**: semantic 컬러 시스템
- **typography**: textStyles (heading3, body2)
- **spacing**: 일관된 여백 (l, m, xxs)
- **shadows**: 그림자 효과 (s)
- **radius**: 모서리 둥글기 (l, xs)

## 🔧 마이그레이션 가이드

### ✅ API 호환성 100% 유지
```tsx
// 기존 코드 그대로 사용 가능
const toast = useToast();
toast.success('제목', '설명');
toast.error('제목', '설명');
// 모든 기존 API가 동일하게 작동
```

### 📦 패키지 의존성 변경
```bash
# 제거
yarn remove react-hot-toast

# 추가
yarn add @base-ui-components/react
```

### 🎨 시각적 변화 없음
- 디자인은 기존과 동일 (youth-design 토큰 그대로 사용)
- 동작만 Base UI의 향상된 기능으로 업그레이드

## 🧪 테스트

### 📖 Storybook에서 테스트

Toast의 모든 기능을 Storybook에서 인터랙티브하게 테스트할 수 있습니다:

```bash
yarn storybook
```

**Storybook Stories:**
- `Default`: 기본 토스트 설정
- `Success/Error/Warning/Info`: 각 상태별 토스트
- `LongMessage`: 긴 텍스트 테스트
- `MultipleToasts`: 여러 토스트 스택 테스트
- `PositionTopLeft/BottomCenter`: 다양한 위치 테스트
- `Interactive`: Controls 패널로 실시간 설정 변경

**Storybook에서 테스트할 수 있는 기능:**
- ⌨️ **키보드 네비게이션**: F6, Escape, Tab 키
- 📱 **터치 제스처**: 모바일 디바이스에서 스와이프
- 🎛️ **실시간 설정**: Controls 패널에서 position, duration, limit 조정
- 🎯 **접근성**: 스크린 리더 테스트
- 📚 **여러 시나리오**: 다양한 use case별 Stories

### 🎮 ToastExample 컴포넌트 사용

독립적인 예시 페이지로도 테스트 가능:

```tsx
import { ToastExample } from '@team-youth/youth-design/toast';

function TestPage() {
  return <ToastExample />;
}
```

### 테스트할 수 있는 기능들
- ✅ 기본 토스트 타입들 (success, error, warning, info)
- ⌨️ 키보드 네비게이션 (F6, Escape, Tab)
- 📱 터치 제스처 (스와이프)
- 🎯 접근성 (스크린 리더)
- 📚 여러 토스트 스택 관리
- ⏸️ 호버 시 타이머 일시정지

## 🏗️ 내부 구조

```
ToastProvider (BaseToast.Provider)
├── children (앱 컨텐츠)
└── BaseToast.Viewport
    └── ToastRenderer
        └── Toast (커스텀 래퍼)
            └── BaseToast.Root
                ├── BaseToast.Title
                ├── BaseToast.Description
                └── BaseToast.Close
```

## 🐛 문제 해결

### Toast가 표시되지 않음
1. `ToastProvider`가 앱 최상위에 있는지 확인
2. `useToast`가 Provider 내부에서 사용되는지 확인
3. Base UI 패키지가 올바르게 설치되었는지 확인

### 키보드 네비게이션 작동 안함
1. 브라우저 설정에서 키보드 네비게이션 활성화 확인
2. F6 키로 토스트 포커스 → Tab/Escape 키 테스트
3. 다른 모달이나 오버레이가 포커스를 가로채는지 확인

### 스와이프 제스처 작동 안함
1. 터치 지원 디바이스에서 테스트
2. 토스트 내부 버튼/링크가 아닌 빈 공간에서 스와이프
3. 40px 이상 충분히 스와이프했는지 확인

### 스타일이 적용되지 않음
1. youth-design 토큰들이 올바르게 import되었는지 확인
2. CSS-in-JS 스타일이 Base UI 컴포넌트에 적용되는지 확인

## 📚 추가 정보

- [Base UI Toast 문서](https://base-ui.com/react/components/toast)
- [Base UI 접근성 가이드](https://base-ui.com/react/guides/accessibility)
- [Youth Design 토큰 시스템](../../../tokens/README.md)
- [Storybook Stories](../../stories/Toast.stories.tsx) 