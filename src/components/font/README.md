# Font 컴포넌트

Youth Design System의 Typography 토큰을 기반으로 한 Font 컴포넌트입니다.

## 특징

- 🎨 디자인 시스템의 Typography 토큰 완전 지원
- 🔧 fontWeight 오버라이드 가능
- 🌈 자유로운 색상 설정 (hex, rgb, hsl 등)
- 🎯 호버 효과 지원
- 📱 반응형 텍스트 스타일
- ♿ 접근성 고려된 색상 대비

## 기본 사용법

```tsx
import { Font } from '@team-youth/youth-design';
import { colors } from '@team-youth/youth-design/token';

// 기본 사용
<Font type="body1">안녕하세요!</Font>

// 타입과 폰트 웨이트 지정
<Font type="heading1" fontWeight="bold">
  중요한 제목
</Font>

// 디자인 시스템 색상 사용
<Font type="body2" color={colors.semantic.text.secondary}>
  부가 정보 텍스트
</Font>

// 커스텀 색상 사용
<Font type="body1" color="#7248D9">
  브랜드 컬러 텍스트
</Font>

// 호버 효과
<Font type="body1" color="#333" hoverColor="#7248D9">
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
텍스트 색상을 지정합니다. 기본값은 `colors.semantic.text.primary`입니다.

```tsx
// 디자인 시스템 색상 사용
<Font type="body1" color={colors.semantic.text.primary}>기본 텍스트</Font>
<Font type="body1" color={colors.semantic.state.success}>성공 메시지</Font>
<Font type="body1" color={colors.semantic.state.error}>오류 메시지</Font>

// 커스텀 색상 사용
<Font type="body1" color="#FF6B6B">Hex 색상</Font>
<Font type="body1" color="rgb(255, 107, 107)">RGB 색상</Font>
<Font type="body1" color="hsl(0, 100%, 70%)">HSL 색상</Font>
```

### 기타 Props

```tsx
interface FontProps {
  hoverColor?: string;              // 호버 시 색상
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

### 디자인 시스템 색상 활용

```tsx
import { colors } from '@team-youth/youth-design/token';

<div>
  <Font type="display1" color={colors.semantic.text.primary}>
    청년 의료 플랫폼
  </Font>
  <Font type="body1" color={colors.semantic.text.secondary}>
    건강한 청년을 위한 맞춤형 의료 서비스를 제공합니다.
  </Font>
</div>
```

### 카드 컴포넌트

```tsx
<div className="card">
  <Font type="heading3" fontWeight="semibold" color={colors.semantic.text.primary}>
    진료 예약
  </Font>
  <Font type="body2" color={colors.semantic.text.tertiary}>
    원하는 시간에 간편하게 예약하세요
  </Font>
  <Font type="caption" color={colors.semantic.state.info}>
    평일 09:00 - 18:00 운영
  </Font>
</div>
```

### 상태 메시지

```tsx
<div>
  <Font type="body2" color={colors.semantic.state.success}>
    ✅ 예약이 완료되었습니다.
  </Font>
  <Font type="body2" color={colors.semantic.state.error}>
    ❌ 입력 정보를 확인해주세요.
  </Font>
  <Font type="body2" color={colors.semantic.state.warning}>
    ⚠️ 예약 시간이 임박했습니다.
  </Font>
</div>
```

### 커스텀 색상 사용

```tsx
<div>
  <Font type="heading2" color="#7248D9">
    브랜드 메인 컬러
  </Font>
  <Font type="body1" color="rgb(255, 107, 107)">
    RGB 빨간색
  </Font>
  <Font type="body1" color="hsl(200, 100%, 50%)">
    HSL 파란색
  </Font>
</div>
```

### 링크 스타일

```tsx
<Font 
  type="body1" 
  color={colors.semantic.state.info}
  hoverColor={colors.semantic.text.primary}
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

## 권장 색상 사용법

### 디자인 시스템 색상 우선 사용
```tsx
// ✅ 권장: 디자인 시스템 색상 사용
<Font color={colors.semantic.text.primary}>텍스트</Font>
<Font color={colors.semantic.state.success}>성공 메시지</Font>

// ⚠️ 주의: 커스텀 색상은 필요한 경우에만
<Font color="#FF0000">특별한 강조</Font>
```

### 자주 사용되는 색상들
```tsx
// 텍스트 색상
colors.semantic.text.primary      // #25282D - 주요 텍스트
colors.semantic.text.secondary    // #505862 - 보조 텍스트
colors.semantic.text.tertiary     // #8D97A5 - 부가 텍스트
colors.semantic.text.disabled     // #D1D5DB - 비활성 텍스트
colors.semantic.text.inverse      // #FFFFFF - 역색 텍스트

// 상태 색상
colors.semantic.state.success     // #00C785 - 성공
colors.semantic.state.warning     // #FFCC00 - 경고
colors.semantic.state.error       // #FF2E2E - 오류
colors.semantic.state.info        // #2F6EFF - 정보

// 브랜드 색상
colors.primary.mainviolet         // #7248D9 - 메인 브랜드
```

## 접근성 고려사항

- 디자인 시스템 색상은 WCAG 2.1 AA 기준을 만족합니다
- 커스텀 색상 사용 시 충분한 대비율을 확인하세요
- 색상만으로 정보를 전달하지 말고 텍스트나 아이콘을 함께 사용하세요

## 디자인 토큰 연동

Font 컴포넌트는 다음 토큰들을 사용합니다:

- `typography.textStyles` - 텍스트 스타일 정의
- `typography.fontWeight` - 폰트 웨이트 값
- `colors.semantic` - 권장 색상 팔레트

토큰 값이 변경되면 Font 컴포넌트에 자동으로 반영됩니다. 