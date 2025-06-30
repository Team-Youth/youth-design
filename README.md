# Youth Design System - Stack팀을 위한 완벽 가이드 📚

> 🎯 **이 문서는 Youth Design System을 사용하는 모든 팀원을 위한 가이드입니다.**
> 개발 환경 설정부터 컴포넌트 활용, 배포까지 단계별로 설명합니다!

## 🌟 새로운 기능: React Native 지원

**Youth Design System이 이제 React Native도 지원합니다!** 📱

* ✅ **웹과 모바일 통합**: 동일한 디자인 토큰을 웹과 모바일에서 공유
* ✅ **주요 컴포넌트 포팅**: Button, Icon, TextInput 등 핵심 컴포넌트 지원
* ✅ **완전한 TypeScript 지원**: 타입 안전성 보장
* ✅ **간편한 설치**: 기존 React Native 프로젝트에 쉽게 추가

📖 **[React Native 사용 가이드 보기 →](./REACT_NATIVE_GUIDE.md)**

---

## 📋 목차

1. [개발 환경 설정](#타입에보이는-개발-환경-설정)
2. [프로젝트 구조 이해하기](#프로젝트-구조-이해하기)
3. [일상적인 작업 가이드](#일상적인-작업-가이드)
4. [Storybook 사용법](#storybook-사용법)
5. [디자인 토큰 수정하기](#디자인-토큰-수정하기)
6. [문제 해결 가이드](#문제-해결-가이드)
7. [협업 가이드](#협업-가이드)
8. [Vercel 배포 가이드](#vercel-배포-가이드)

---

## 💻 개발 환경 설정

### 필수 요구사항

* Node.js 18.x 이상
* Yarn 1.22.x 이상
* Git
* Cursor (또는 VS Code)

### 설치 순서

```bash
# 1. Node.js 설치 (https://nodejs.org/)
node --version

# 2. yarn 설치
npm install -g yarn
yarn --version

# 3. 프로젝트 클론
cd Desktop
git clone [레포 주소]
cd youth-design
yarn install
```

---

## 📁 프로젝트 구조 이해하기

```
youth-design/
├── src/
│   ├── tokens/         # 디자인 토큰
│   ├── stories/        # Storybook 스토리
│   └── index.ts        # 메인 엔트리
├── .storybook/         # Storybook 설정
├── package.json        # 프로젝트 메타
└── yarn.lock           # 의존성 버전 고정
```

---

## 🔄 일상적인 작업 가이드

### 매일 시작할 때

```bash
cd youth-design
git pull origin main
yarn install
```

### 작업 마무리할 때

```bash
git add .
git commit -m "타이포그래피: 캡션 스타일 추가"
git push origin main
```

---

## 📖 Storybook 사용법

### 실행하기

```bash
yarn storybook
# http://localhost:6006 으로 접속
```

### 구성

* **Colors**: 색상 토큰 시각화
* **Typography**: 폰트 스타일 확인
* **Spacing**: 간격 시스템 확인
* **Shadows & Borders**: 그림자와 테두리 확인

---

## 🎨 디자인 토큰 수정하기

### 색상 추가 예시

```ts
export const colors = {
  primary: {
    mainviolet: '#7248D9',
    newblue: '#2563EB',
  },
};
```

### 폰트 스타일 추가 예시

```ts
export const typography = {
  textStyles: {
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.4,
    },
  },
};
```

---

## 🔧 문제 해결 가이드

* yarn 명령어가 안 될 때: `npm install -g yarn`
* 모듈 에러: `rm -rf node_modules && yarn install`
* Storybook 안 열릴 때: `yarn storybook --no-manager-cache`
* git 충돌: `git status`, `git add .`, `git commit`

---

## 🤝 협업 가이드

### 커밋 메시지 작성 예시

```bash
git commit -m "색상: 새로운 브랜드 컬러 추가"
git commit -m "스페이싱: xxxl 간격 추가"
```

### 브랜치 전략 예시

```bash
git checkout -b feature/new-tokens
git merge feature/new-tokens
```

---

## 🚀 Vercel 배포 가이드

### 자동 배포 설정

1. GitHub 연결
2. Framework: Other
3. 명령어 설정:

   * Build: `yarn build:storybook`
   * Output: `storybook-static`

### 수동 배포

```bash
yarn build:storybook
npx vercel --prod
```

---

## 📝 라이센스

MIT License

---

**Youth Design System** - Stack팀의 일관된 UI/UX를 위한 디자인 시스템
