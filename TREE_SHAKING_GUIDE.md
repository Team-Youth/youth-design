# Youth Design System - Tree-Shaking 최적화 가이드

## 🚀 개요

이제 Youth Design System은 **tsup**을 사용해서 최적화된 tree-shaking을 제공합니다!

### 🎯 주요 개선사항

- ✅ **ESM + CJS 동시 지원**: Modern bundler와 legacy bundler 모두 지원
- ✅ **CSS 자동 추출**: 각 컴포넌트의 CSS가 개별 파일로 분리
- ✅ **개별 모듈화**: 필요한 컴포넌트만 선택적으로 import 가능
- ✅ **Tree-shaking 최적화**: 사용하지 않는 코드가 번들에서 완전히 제거
- ✅ **TypeScript 완벽 지원**: .d.ts 파일과 source map 제공

## 📦 사용 방법

### 1. 전체 라이브러리 import (기존 방식)

```typescript
// 모든 컴포넌트를 가져옴
import { Button, Tab, Modal } from '@team-youth/youth-design';
import '@team-youth/youth-design/dist/index.css';
```

### 2. 컴포넌트 모듈만 import

```typescript
// 컴포넌트만 가져옴 (토큰 제외)
import { Button, Tab } from '@team-youth/youth-design/components';
import '@team-youth/youth-design/dist/components/index.css';
```

### 3. 토큰만 import

```typescript
// 디자인 토큰만 가져옴
import { colors, typography } from '@team-youth/youth-design/tokens';
```

### 4. 개별 컴포넌트 import (최대 최적화) ⭐

```typescript
// 가장 최적화된 방식 - 필요한 컴포넌트만!
import { Button } from '@team-youth/youth-design/individual/box-button';
import '@team-youth/youth-design/dist/individual/box-button/index.css';

import { Tab } from '@team-youth/youth-design/individual/tab';
import '@team-youth/youth-design/dist/individual/tab/index.css';
```

## 🎯 Tree-Shaking 효과

### Before (rollup)
```bash
# 전체 번들에서 Button만 사용해도 모든 컴포넌트가 포함됨
Bundle size: ~280KB (전체)
```

### After (tsup + 개별 import)
```bash
# Button만 import하면 Button 관련 코드만 포함
Bundle size: ~10KB (Button만)
Bundle size: ~120KB (Tab만) 
```

## 📂 빌드 구조

```
dist/
├── index.js              # 전체 라이브러리 (ESM)
├── index.cjs             # 전체 라이브러리 (CJS)
├── index.css             # 전체 CSS
├── components/           # 컴포넌트만
│   ├── index.js
│   ├── index.cjs
│   └── index.css
├── tokens/              # 토큰만
│   ├── index.js
│   ├── index.cjs
│   └── 각종 토큰 파일들
└── individual/          # 개별 컴포넌트 (최적화)
    ├── box-button/
    │   ├── index.js     # Button ESM
    │   ├── index.css    # Button CSS
    │   └── index.d.ts   # Button Types
    ├── tab/
    ├── modal/
    └── ...
```

## 🔧 Vite에서 사용 예시

```typescript
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['@team-youth/youth-design']
  },
  // tree-shaking이 자동으로 작동함!
});
```

```typescript
// 컴포넌트에서 사용
import { Button } from '@team-youth/youth-design/individual/box-button';
import '@team-youth/youth-design/dist/individual/box-button/index.css';

function App() {
  return <Button>클릭</Button>;
}
```

## 🎨 CSS 처리

각 빌드 방식에 따라 적절한 CSS를 import해야 합니다:

```typescript
// 1. 전체 사용시
import '@team-youth/youth-design/dist/index.css';

// 2. 컴포넌트만 사용시  
import '@team-youth/youth-design/dist/components/index.css';

// 3. 개별 컴포넌트 사용시
import '@team-youth/youth-design/dist/individual/box-button/index.css';
import '@team-youth/youth-design/dist/individual/tab/index.css';
```

## 🚀 성능 비교

| Import 방식 | Bundle Size | Tree-shaking | 권장도 |
|------------|-------------|-------------|--------|
| 전체 import | ~280KB | ❌ | 개발시에만 |
| 컴포넌트 import | ~260KB | ✅ | 일반적 |
| 개별 import | ~10-120KB | ✅✅ | **권장** |

## 💡 개발 팁

1. **개발시에는 전체 import**를 사용해서 편리하게 개발
2. **프로덕션 빌드시에는 개별 import**로 최적화
3. **Bundle Analyzer**로 실제 tree-shaking 효과 확인

```bash
# 빌드 분석 (예시)
npx vite-bundle-analyzer dist
```

## 🔧 빌드 스크립트

```json
{
  "scripts": {
    "build": "tsup",           # tsup으로 빌드
    "build:rollup": "rollup -c", # 기존 rollup 빌드  
    "dev": "tsup --watch"      # 개발 모드
  }
}
```

이제 Youth Design System은 모던 번들러와 완벽하게 호환되며, 최적의 tree-shaking을 제공합니다! 🎉 