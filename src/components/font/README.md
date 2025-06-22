# Font Component

디자인 시스템의 Typography 토큰을 기반으로 한 Font 컴포넌트입니다. 일관된 텍스트 스타일과 반응형 디자인을 제공합니다.

## Features

- **Typography Variants**: Display, Heading, Body, Caption 등 다양한 텍스트 스타일
- **Font Weight Override**: Bold, Semibold, Medium, Regular 옵션
- **Color System**: 시맨틱 컬러와 커스텀 컬러 지원
- **Responsive Design**: 태블릿과 모바일 환경을 위한 반응형 폰트 크기 조정
- **Text Styling**: 정렬, 줄바꿈, 말줄임, 밑줄 등 다양한 텍스트 스타일링
- **Hover Effects**: 호버 시 색상 변경 효과

## Usage

### Basic Usage

```tsx
import { Font } from '@youth-design/components';

// 기본 사용법
<Font type="body1">안녕하세요!</Font>

// 반응형 텍스트
<Font type="heading1" responsive="auto">
  반응형 제목
</Font>
```

### Responsive Options

Font 컴포넌트는 다양한 화면 크기에 최적화된 4가지 반응형 모드를 제공합니다:

#### 1. Auto (기본값)
```tsx
<Font type="heading1" responsive="auto">
  화면 크기에 따라 자동 조정
</Font>
```
- 모든 화면 크기에서 최적의 가독성을 제공
- CSS `clamp()` 함수를 사용한 유연한 크기 조정

#### 2. Tablet Optimized
```tsx
<Font type="heading1" responsive="tablet-optimized">
  태블릿 최적화
</Font>
```
- 태블릿 환경에서 더 큰 폰트 크기로 표시
- 태블릿의 중간 해상도에 최적화

#### 3. Mobile First
```tsx
<Font type="heading1" responsive="mobile-first">
  모바일 우선
</Font>
```
- 작은 화면에서 시작해서 점진적으로 크기 증가
- 모바일 우선 접근법

#### 4. None (고정 크기)
```tsx
<Font type="heading1" responsive="none">
  고정 크기
</Font>
```
- 반응형 비활성화
- 모든 화면에서 동일한 크기 유지

### Advanced Usage

```tsx
// 폰트 굵기 및 색상 조정
<Font 
  type="heading2" 
  fontWeight="semibold"
  color="#7248D9"
  responsive="tablet-optimized"
>
  커스텀 스타일 제목
</Font>

// 호버 효과가 있는 텍스트
<Font 
  type="body1"
  color="#333"
  hoverColor="#7248D9"
  responsive="auto"
>
  호버해보세요
</Font>

// 말줄임 처리
<Font 
  type="body1" 
  noWhiteSpace
  responsive="auto"
>
  매우 긴 텍스트가 말줄임표로 처리됩니다...
</Font>
```

## Typography Scale

### Responsive Font Sizes
모든 폰트 크기는 `clamp()` 함수를 사용하여 반응형으로 설계되었습니다:

- **Display 1**: `clamp(1.75rem, 4vw, 2rem)` (28px ~ 32px)
- **Display 2**: `clamp(1.5rem, 3.5vw, 1.75rem)` (24px ~ 28px)
- **Heading 1**: `clamp(1.25rem, 3vw, 1.5rem)` (20px ~ 24px)
- **Heading 2**: `clamp(1.125rem, 2.5vw, 1.25rem)` (18px ~ 20px)
- **Body 1**: `clamp(0.875rem, 1.5vw, 1rem)` (14px ~ 16px)
- **Body 2**: `clamp(0.75rem, 1.25vw, 0.875rem)` (12px ~ 14px)

### Line Heights
모든 라인 높이는 상대 단위로 설정되어 폰트 크기와 비례적으로 조정됩니다:

- **Display**: 1.3 (130%)
- **Headings**: 1.33-1.4 (133%-140%)
- **Body**: 1.5-1.67 (150%-167%)
- **Caption**: 1.8 (180%)

## Breakpoints

반응형 디자인을 위한 브레이크포인트:

- **Mobile**: 320px ~ 767px
- **Tablet**: 768px ~ 1023px  
- **Desktop**: 1024px+

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `FontType` | - | Typography variant (required) |
| `fontWeight` | `FontWeight` | - | Font weight override |
| `color` | `string` | `colors.semantic.text.primary` | Text color |
| `hoverColor` | `string` | - | Hover color |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Text alignment |
| `responsive` | `'auto' \| 'tablet-optimized' \| 'mobile-first' \| 'none'` | `'auto'` | Responsive behavior |
| `noWhiteSpace` | `boolean` | `false` | Text overflow with ellipsis |
| `underline` | `boolean` | `false` | Underline decoration |
| `className` | `string` | - | Custom CSS class |
| `style` | `React.CSSProperties` | - | Custom inline styles |
| `children` | `ReactNode` | - | Text content |

## Best Practices

### 반응형 사용 가이드

1. **일반적인 콘텐츠**: `responsive="auto"` 사용 (기본값)
2. **태블릿 중심 서비스**: `responsive="tablet-optimized"` 사용
3. **모바일 앱의 웹 버전**: `responsive="mobile-first"` 사용
4. **정확한 크기가 필요한 경우**: `responsive="none"` 사용

### 접근성 고려사항

- 최소 폰트 크기 14px 이상 유지
- 충분한 색상 대비비 확보 (4.5:1 이상)
- 터치 타겟 크기 고려 (44px 이상)

### 성능 최적화

- `clamp()` 함수 사용으로 CSS 계산 최적화
- 불필요한 미디어 쿼리 방지
- 폰트 로딩 최적화

## Examples

스토리북에서 다양한 반응형 예제를 확인할 수 있습니다:

- **ResponsiveComparison**: 각 반응형 모드 비교
- **ResponsiveBreakpoints**: 브레이크포인트별 텍스트 크기 변화
- **Playground**: 실시간 속성 테스트 