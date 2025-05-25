# 배포 및 사용 가이드

## 🚀 GitHub에 업로드 후 사용하는 방법

### 1. GitHub 직접 설치 (가장 간단)

리포지토리를 GitHub에 올린 후 바로 사용 가능합니다:

```bash
# Public Repository
yarn add https://github.com/your-org/youth-design-system.git

# Private Repository (SSH 키 필요)
yarn add git+ssh://git@github.com/your-org/youth-design-system.git

# 특정 브랜치나 태그
yarn add https://github.com/your-org/youth-design-system.git#main
yarn add https://github.com/your-org/youth-design-system.git#v1.0.0
```

**사용 예시:**
```tsx
import { colors, typography } from '@youth-design/design-system';

const App = () => (
  <div style={{
    color: colors.primary.mainviolet,
    ...typography.textStyles.heading1
  }}>
    Hello Youth Design System!
  </div>
);
```

### 2. GitHub Packages (추천)

더 전문적인 패키지 관리를 위해 GitHub Packages 사용:

#### A. 패키지 발행 (Repository Owner)

1. **Release 생성:**
```bash
# 버전 태그 생성
git tag v1.0.0
git push origin v1.0.0

# 또는 GitHub에서 Release 생성
```

2. **자동 발행:**
- GitHub Actions가 자동으로 패키지를 GitHub Packages에 발행
- `.github/workflows/publish.yml` 참조

#### B. 패키지 사용 (Team Members)

1. **NPM 설정 (.npmrc 파일 생성):**
```bash
# 프로젝트 루트에 .npmrc 파일 생성
echo "@youth-design:registry=https://npm.pkg.github.com" >> .npmrc
```

2. **GitHub 토큰 설정:**
```bash
# Personal Access Token 생성 (packages:read 권한 필요)
# https://github.com/settings/tokens

# 토큰을 환경변수로 설정
export NPM_TOKEN=your_github_token

# 또는 .npmrc에 직접 추가 (보안상 비추천)
echo "//npm.pkg.github.com/:_authToken=your_github_token" >> .npmrc
```

3. **패키지 설치:**
```bash
yarn add @youth-design/design-system
```

### 3. NPM Public 패키지

NPM에 퍼블릭으로 발행하여 사용:

#### A. NPM 발행

1. **NPM 계정 생성 및 로그인:**
```bash
npm login
```

2. **package.json 수정:**
```json
{
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  }
}
```

3. **패키지 발행:**
```bash
yarn publish
```

#### B. 사용법
```bash
yarn add @youth-design/design-system
```

## 🔧 설정 방법별 비교

| 방법 | 장점 | 단점 | 사용 시나리오 |
|------|------|------|---------------|
| **GitHub 직접** | 즉시 사용 가능, 설정 불필요 | 버전 관리 어려움, 느린 설치 | 빠른 테스트, 프로토타입 |
| **GitHub Packages** | 버전 관리, 조직 내 사용, 보안 | 초기 설정 필요 | **내부 팀 사용 (추천)** |
| **NPM Public** | 쉬운 설치, 빠른 속도 | 공개적으로 노출 | 오픈소스 프로젝트 |

## 📋 추천 워크플로우

### 내부 팀 사용을 위한 설정:

1. **GitHub Organization에 리포지토리 생성**
2. **GitHub Packages 사용 설정**
3. **팀원들에게 설정 가이드 공유**

```bash
# 1. 팀원 설정 (한 번만)
echo "@youth-design:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_TOKEN" >> ~/.npmrc

# 2. 프로젝트에서 사용
yarn add @youth-design/design-system

# 3. 업데이트
yarn upgrade @youth-design/design-system
```

### 버전 관리:

```bash
# 새 버전 릴리즈
git tag v1.1.0
git push origin v1.1.0
# → GitHub Actions가 자동으로 패키지 발행
```

## 🛠 트러블슈팅

### 일반적인 문제들:

1. **Private Repository 접근 오류:**
```bash
# SSH 키가 설정되어 있는지 확인
ssh -T git@github.com
```

2. **GitHub Packages 인증 오류:**
```bash
# 토큰 권한 확인 (packages:read 필요)
# Organization의 경우 read:org 권한도 필요할 수 있음
```

3. **타입 정의 오류:**
```typescript
// TypeScript 프로젝트에서 타입이 인식되지 않는 경우
import type { ColorTokens } from '@youth-design/design-system';
```

## 📞 지원

배포 관련 문제가 있을 경우:
- Issues: [GitHub Issues](https://github.com/your-org/youth-design-system/issues)
- 팀 슬랙: #design-system
- 이메일: design-system@your-org.com 