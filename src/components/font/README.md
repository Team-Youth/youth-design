# Font 컴포넌트

Youth Design System의 Typography 토큰을 기반으로 한 Font 컴포넌트입니다.

## 특징

- 🎨 디자인 시스템의 Typography 토큰 완전 지원
- 🔧 fontWeight 오버라이드 가능
- 🌈 Semantic 색상 시스템 지원
- 🎯 호버 효과 지원
- 📱 반응형 텍스트 스타일
- ♿ 접근성 고려된 색상 대비

## 기본 사용법

```tsx
import { Font } from '@team-youth/youth-design';

// 기본 사용
<Font type="body1">안녕하세요!</Font>

// 타입과 폰트 웨이트 지정
<Font type="heading1" fontWeight="bold">
  중요한 제목
</Font>

// 색상 지정
<Font type="body2" color="secondary">
  부가 정보 텍스트
</Font>

// 호버 효과
<Font type="body1" color="primary" hoverColor="info">
  마우스를 올려보세요
</Font>
```

## Props

### type (필수)
Typography variant를 지정합니다.

```tsx
type FontType = 
  | 'display1'    // 32px, bold - 큰 타이틀 영역 강조
  | 'display2'    // 28px, bold - 중간 크기 타이틀
  | 'heading1'    // 24px, bold - 정보성 카드 타이틀
  | 'heading2'    // 20px, semibold - 섹션 구분 타이틀
  | 'heading3'    // 18px, semibold - 소제목
  | 'heading4'    // 16px, semibold - 리스트 아이템, 버튼 텍스트
  | 'heading5'    // 14px, semibold - 부가 정보, 캡션
  | 'body1'       // 16px, regular - 주요 본문 텍스트
  | 'body2'       // 14px, regular - 보조 본문 텍스트
  | 'body3'       // 12px, regular - 하위 위계 텍스트
  | 'caption';    // 12px, regular - 보조 정보
```

### fontWeight (선택)
기본 폰트 웨이트를 오버라이드합니다.

```tsx
type FontWeight = 'bold' | 'semibold' | 'medium' | 'regular';

<Font type="body1" fontWeight="bold">강조된 본문</Font>
```

### color (선택)
텍스트 색상을 지정합니다. 기본값은 `'primary'`입니다.

```tsx
type FontColor = 
  | 'primary'     // 가장 중요한 정보
  | 'secondary'   // 부가적인 내용
  | 'tertiary'    // 시각적 우선순위가 낮은 텍스트
  | 'disabled'    // 비활성화된 상태
  | 'inverse'     // 어두운 배경 위의 밝은 텍스트
  | 'success'     // 성공 상태
  | 'warning'     // 경고 상태
  | 'error'       // 오류 상태
  | 'info';       // 정보 상태

<Font type="body1" color="success">성공 메시지</Font>
<Font type="body1" color="error">오류 메시지</Font>
```

### 기타 Props

```tsx
interface FontProps {
  hoverColor?: FontColor;           // 호버 시 색상
  align?: 'left' | 'center' | 'right' | 'justify';  // 텍스트 정렬
  whiteSpace?: 'nowrap' | 'normal' | 'pre-line';    // 공백 처리
  noWhiteSpace?: boolean;           // 말줄임표 처리
  underline?: boolean;              // 밑줄
  className?: string;               // 커스텀 클래스
  style?: React.CSSProperties;      // 커스텀 스타일
  children?: ReactNode;             // 텍스트 내용
}
```

## 사용 예시

### 페이지 제목과 설명

```tsx
<div>
  <Font type="display1" color="primary">
    청년 의료 플랫폼
  </Font>
  <Font type="body1" color="secondary">
    건강한 청년을 위한 맞춤형 의료 서비스를 제공합니다.
  </Font>
</div>
```

### 카드 컴포넌트

```tsx
<div className="card">
  <Font type="heading3" fontWeight="semibold">
    진료 예약
  </Font>
  <Font type="body2" color="tertiary">
    원하는 시간에 간편하게 예약하세요
  </Font>
  <Font type="caption" color="info">
    평일 09:00 - 18:00 운영
  </Font>
</div>
```

### 상태 메시지

```tsx
<div>
  <Font type="body2" color="success">
    ✅ 예약이 완료되었습니다.
  </Font>
  <Font type="body2" color="error">
    ❌ 입력 정보를 확인해주세요.
  </Font>
  <Font type="body2" color="warning">
    ⚠️ 예약 시간이 임박했습니다.
  </Font>
</div>
```

### 링크 스타일

```tsx
<Font 
  type="body1" 
  color="info" 
  hoverColor="primary"
  underline
>
  자세히 보기
</Font>
```

### 텍스트 오버플로우 처리

```tsx
<div style={{ width: '200px' }}>
  <Font type="body1" noWhiteSpace>
    매우 긴 텍스트가 있을 때 말줄임표로 처리됩니다
  </Font>
</div>
```

## 접근성 고려사항

- 모든 색상은 WCAG 2.1 AA 기준을 만족하는 대비율을 가집니다
- `semantic.text` 색상을 사용하여 의미 전달이 명확합니다
- 호버 효과는 키보드 포커스에서도 동작합니다

## 디자인 토큰 연동

Font 컴포넌트는 다음 토큰들을 사용합니다:

- `typography.textStyles` - 텍스트 스타일 정의
- `typography.fontWeight` - 폰트 웨이트 값
- `colors.semantic.text` - 텍스트 색상
- `colors.semantic.state` - 상태 색상

토큰 값이 변경되면 Font 컴포넌트에 자동으로 반영됩니다. 