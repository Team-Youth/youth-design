# Youth Design System

청년 의료 플랫폼을 위한 디자인 토큰 시스템입니다.

## 🎯 개요

Youth Design System은 의료 플랫폼의 일관된 사용자 경험을 제공하기 위해 설계된 디자인 토큰 시스템입니다. 디자이너와 개발자 모두가 효율적으로 사용할 수 있도록 체계적으로 구성되었습니다.

## ✨ 특징

- **디자인 토큰 기반**: 색상, 타이포그래피, 스페이싱 등 모든 디자인 요소가 토큰화
- **TypeScript 지원**: 완전한 타입 안전성 제공
- **Storybook 문서화**: 모든 토큰의 시각적 문서화
- **의료 플랫폼 특화**: 의료 서비스에 최적화된 색상 팔레트
- **접근성 준수**: WCAG 가이드라인을 따른 접근성 고려
- **반응형 디자인**: 다양한 디바이스에서 일관된 경험

## 📦 설치

```bash
# yarn 사용
yarn add @youth-design/design-system

# npm 사용
npm install @youth-design/design-system
```

## 🚀 사용법

### 기본 사용법

```tsx
import { colors, typography, spacing, radius, shadows, borders } from '@youth-design/design-system';

// 색상 사용
const primaryColor = colors.primary.mainviolet;
const textColor = colors.semantic.text.primary;

// 타이포그래피 사용
const headingStyle = typography.textStyles.heading1;

// 스페이싱 사용
const cardPadding = spacing.l;

// 기타 토큰 사용
const cardRadius = radius.s;
const cardShadow = shadows.m;
const borderWidth = borders.s;
```

### 실제 컴포넌트에서 사용

```tsx
import { tokens } from '@youth-design/design-system';

const MedicalCard = () => (
  <div style={{
    padding: tokens.spacing.l,
    backgroundColor: tokens.colors.semantic.background.primary,
    borderRadius: tokens.radius.s,
    boxShadow: tokens.shadows.m,
    border: `${tokens.borders.s} solid ${tokens.colors.semantic.border.default}`,
    ...tokens.typography.textStyles.body1
  }}>
    <h3 style={{
      ...tokens.typography.textStyles.heading3,
      color: tokens.colors.semantic.text.primary,
      marginBottom: tokens.spacing.s
    }}>
      진료 예약
    </h3>
    <p style={{
      ...tokens.typography.textStyles.body2,
      color: tokens.colors.semantic.text.secondary
    }}>
      온라인으로 간편하게 진료를 예약하세요.
    </p>
  </div>
);
```

## 🎨 디자인 토큰

### 색상 시스템

- **Primary**: 브랜드 메인 컬러 (#7248D9)
- **Gray Scale**: 9단계 그레이 스케일
- **Cool Gray**: 넓은 영역용 중립 색상
- **Tint Colors**: 보조 색상 팔레트 (Violet, Blue, Red, Yellow, Green)
- **Semantic Colors**: 의미 전달용 색상 (텍스트, 상태, 배경, 보더)
- **Illustration Colors**: 의료 일러스트용 색상 (피부, 머리카락, 장기)

### 타이포그래피

- **폰트**: Pretendard (웹폰트)
- **텍스트 스타일**: Display, Heading, Body, Caption
- **반응형**: rem 단위 기반 확장성

### 스페이싱

4px와 8px 배수 기반의 9단계 스페이싱 시스템 (2px ~ 40px)

### 그림자

3단계 elevation 시스템 (Small, Medium, Large)

### 테두리

3단계 두께 시스템 (1px, 1.5px, 2px)

### 둥근 모서리

6단계 radius 시스템 (4px ~ 50%)

## 📚 Storybook

토큰 문서화 및 시각적 가이드를 위해 Storybook을 제공합니다.

```bash
yarn storybook
```

브라우저에서 `http://localhost:6006`으로 접속하여 모든 디자인 토큰을 시각적으로 확인할 수 있습니다.

## 🛠 개발

### 프로젝트 설정

```bash
# 의존성 설치
yarn install

# 개발 모드 실행
yarn dev

# Storybook 실행
yarn storybook

# 빌드
yarn build

# 타입 체크
yarn type-check

# 린트
yarn lint
```

### 디렉토리 구조

```
src/
├── tokens/           # 디자인 토큰
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   ├── shadows.ts
│   ├── radius.ts
│   ├── borders.ts
│   └── index.ts
├── stories/          # Storybook 스토리
│   ├── Colors.stories.tsx
│   ├── Typography.stories.tsx
│   ├── Spacing.stories.tsx
│   └── BorderRadiusShadow.stories.tsx
└── index.ts         # 메인 export
```

## 🎯 의료 플랫폼 특화 기능

### 일러스트레이션 색상

의료 서비스 특성을 반영한 전용 색상 팔레트:

```tsx
// 피부 톤
colors.illustration.skin.light
colors.illustration.skin.base
colors.illustration.skin.shadow

// 머리카락
colors.illustration.hair.light
colors.illustration.hair.base

// 장기 표현
colors.illustration.organ.light
colors.illustration.organ.base
```

### 의료 UI 패턴

```tsx
// 진료 예약 카드 스타일
const appointmentCardStyle = {
  padding: spacing.l,
  backgroundColor: colors.semantic.background.primary,
  borderRadius: radius.m,
  boxShadow: shadows.m,
  border: `${borders.s} solid ${colors.tint.violet[100]}`,
};

// 상태 표시 색상
const statusColors = {
  success: colors.semantic.state.success,  // 예약 완료
  warning: colors.semantic.state.warning,  // 대기 중
  error: colors.semantic.state.error,      // 취소됨
  info: colors.semantic.state.info,        // 안내 사항
};
```

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 지원

- 이슈 리포트: [GitHub Issues](https://github.com/youth-design/design-system/issues)
- 문서: [Storybook Documentation](http://localhost:6006)
- 이메일: design-system@youth-platform.com

---

**Youth Design Team** - 청년을 위한 더 나은 의료 경험을 만들어갑니다. 