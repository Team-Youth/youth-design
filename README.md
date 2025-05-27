# Youth Design System - 디자이너를 위한 완벽 가이드 📚

> 🎯 **이 문서는 엔지니어링을 처음 접하는 디자이너를 위해 작성되었습니다.**  
> 모든 과정을 단계별로 상세히 설명하니, 천천히 따라해보세요!

## 📋 목차

1. [시작하기 전에 알아야 할 것들](#시작하기-전에-알아야-할-것들)
2. [개발 환경 설정](#개발-환경-설정)
3. [프로젝트 구조 이해하기](#프로젝트-구조-이해하기)
4. [일상적인 작업 가이드](#일상적인-작업-가이드)
5. [Storybook 사용법](#storybook-사용법)
6. [디자인 토큰 수정하기](#디자인-토큰-수정하기)
7. [문제 해결 가이드](#문제-해결-가이드)
8. [협업 가이드](#협업-가이드)

---

## 🚀 시작하기 전에 알아야 할 것들

### 용어 정리
- **터미널(Terminal)**: 컴퓨터에 명령어를 입력하는 검은 화면
- **Node.js**: JavaScript를 실행할 수 있게 해주는 프로그램
- **yarn**: 프로젝트에 필요한 라이브러리들을 관리해주는 도구
- **Git**: 코드 변경사항을 추적하고 관리하는 도구
- **Storybook**: 디자인 시스템을 시각적으로 보여주는 도구

### 필요한 프로그램들
1. **Node.js** (버전 18 이상)
2. **yarn** (패키지 매니저)
3. **Git** (버전 관리)
4. **Cursor** (코드 에디터, 추천)

---

## 💻 개발 환경 설정

### 1단계: Node.js 설치

1. [Node.js 공식 웹사이트](https://nodejs.org/)에 접속
2. "LTS" 버전 다운로드 (안정적인 버전)
3. 다운로드한 파일을 실행하여 설치
4. 설치 확인:
   ```bash
   # 터미널을 열고 다음 명령어 입력
   node --version
   # v18.0.0 같은 버전이 나오면 성공!
   ```

### 2단계: yarn 설치

```bash
# 터미널에서 실행
npm install -g yarn

# 설치 확인
yarn --version
# 1.22.0 같은 버전이 나오면 성공!
```

### 3단계: Cursor 설치 (추천)

1. [Cursor 공식 웹사이트](https://www.cursor.so/)에서 다운로드
2. 설치 후 다음 확장 프로그램(또는 플러그인) 설치:
   - **Korean Language Pack** (한국어 지원)
   - **Prettier** (코드 정리)
   - **ES7+ React/Redux/React-Native snippets**
   - **GitHub Copilot** (AI 코드 추천, 선택)

> 참고: Cursor는 VS Code 기반이므로, VS Code의 대부분의 확장 프로그램을 그대로 사용할 수 있습니다.

### 4단계: 프로젝트 클론하기

```bash
# 터미널에서 원하는 폴더로 이동
cd Desktop

# 프로젝트 복사
git clone [프로젝트 주소]

# 프로젝트 폴더로 이동
cd youth-design

# 의존성 설치 (시간이 좀 걸려요!)
yarn install
```

---

## 📁 프로젝트 구조 이해하기

```
youth-design/
├── 📁 src/                    # 소스 코드가 있는 폴더
│   ├── 📁 tokens/            # 디자인 토큰들 (색상, 폰트 등)
│   │   ├── 🎨 colors.ts      # 색상 정의
│   │   ├── 📝 typography.ts  # 폰트 정의
│   │   ├── 📏 spacing.ts     # 간격 정의
│   │   ├── 🌟 shadows.ts     # 그림자 정의
│   │   ├── 🔄 radius.ts      # 둥근 모서리 정의
│   │   ├── 🔲 borders.ts     # 테두리 정의
│   │   └── 📦 index.ts       # 모든 토큰을 모아놓은 파일
│   ├── 📁 stories/           # Storybook 문서들
│   │   ├── Colors.stories.tsx
│   │   ├── Typography.stories.tsx
│   │   └── ...
│   └── 📄 index.ts           # 메인 파일
├── 📁 .storybook/            # Storybook 설정
├── 📄 package.json           # 프로젝트 정보 및 의존성
├── 📄 README.md              # 이 파일!
└── 📄 yarn.lock              # 의존성 버전 고정 (건드리지 마세요!)
```

### 🎯 주요 파일 설명

#### `src/tokens/colors.ts` - 색상 관리
```typescript
// 이런 식으로 색상이 정의되어 있어요
export const colors = {
  primary: {
    mainviolet: '#7248D9',  // 메인 보라색
    // ...
  },
  gray: {
    50: '#F9FAFB',   // 가장 밝은 회색
    100: '#F3F4F6',  // 밝은 회색
    // ...
  }
}
```

#### `src/tokens/typography.ts` - 폰트 관리
```typescript
// 폰트 크기와 스타일이 정의되어 있어요
export const typography = {
  textStyles: {
    heading1: {
      fontSize: '2rem',
      fontWeight: 700,
      // ...
    }
  }
}
```

---

## 🔄 일상적인 작업 가이드

### 매일 시작할 때

1. **터미널 열기**
   - Mac: `Cmd + Space` → "터미널" 검색
   - Windows: `Win + R` → "cmd" 입력

2. **프로젝트 폴더로 이동**
   ```bash
   cd [프로젝트 경로]
   # 예: cd Desktop/youth-design
   ```

3. **최신 코드 받기**
   ```bash
   git pull origin main
   ```

4. **의존성 업데이트 (필요시)**
   ```bash
   yarn install
   ```

### 작업 마무리할 때

1. **변경사항 저장**
   ```bash
   # 변경된 파일들 확인
   git status
   
   # 모든 변경사항 추가
   git add .
   
   # 커밋 메시지와 함께 저장
   git commit -m "색상 토큰 업데이트: 새로운 브랜드 컬러 추가"
   
   # 서버에 업로드
   git push origin main
   ```

---

## 📖 Storybook 사용법

### Storybook이란?
디자인 시스템의 모든 요소들을 시각적으로 보여주는 문서화 도구입니다.

### Storybook 실행하기

1. **터미널에서 프로젝트 폴더로 이동**
   ```bash
   cd youth-design
   ```

2. **Storybook 실행**
   ```bash
   yarn storybook
   ```

3. **브라우저에서 확인**
   - 자동으로 브라우저가 열리거나
   - 수동으로 `http://localhost:6006` 접속

### Storybook 화면 구성

```
┌─────────────────┬─────────────────────────────┐
│                 │                             │
│   📁 Stories    │        미리보기 영역          │
│   ├─ Colors     │                             │
│   ├─ Typography │     여기서 디자인 토큰을      │
│   ├─ Spacing    │     시각적으로 확인할 수      │
│   └─ Shadows    │           있어요!            │
│                 │                             │
└─────────────────┴─────────────────────────────┘
```

### 각 스토리 설명

#### 🎨 Colors Story
- 모든 색상 팔레트 확인
- 색상 코드 복사 가능
- 접근성 대비율 확인

#### 📝 Typography Story
- 모든 텍스트 스타일 확인
- 폰트 크기, 굵기, 줄 간격 등

#### 📏 Spacing Story
- 간격 시스템 시각화
- 각 간격의 픽셀 값 확인

#### 🌟 Shadows & Borders Story
- 그림자 효과 미리보기
- 테두리 두께 확인

---

## 🎨 디자인 토큰 수정하기

### 색상 추가/수정하기

1. **파일 열기**: `src/tokens/colors.ts`

2. **색상 추가 예시**:
   ```typescript
   // 기존 코드
   export const colors = {
     primary: {
       mainviolet: '#7248D9',
       // 여기에 새로운 색상 추가
       newblue: '#2563EB',  // 새로운 파란색
     },
     // ...
   }
   ```

3. **저장 후 확인**:
   ```bash
   # Storybook이 실행 중이라면 자동으로 업데이트됨
   # 실행 중이 아니라면
   yarn storybook
   ```

### 폰트 스타일 수정하기

1. **파일 열기**: `src/tokens/typography.ts`

2. **새로운 텍스트 스타일 추가**:
   ```typescript
   export const typography = {
     textStyles: {
       // 기존 스타일들...
       
       // 새로운 스타일 추가
       caption: {
         fontSize: '0.75rem',    // 12px
         fontWeight: 400,        // Regular
         lineHeight: 1.4,        // 140%
         letterSpacing: '0.01em' // 1%
       }
     }
   }
   ```

### 간격 시스템 수정하기

1. **파일 열기**: `src/tokens/spacing.ts`

2. **간격 수정 예시**:
   ```typescript
   export const spacing = {
     xs: '0.125rem',  // 2px
     s: '0.25rem',    // 4px
     m: '0.5rem',     // 8px
     l: '1rem',       // 16px
     xl: '1.5rem',    // 24px
     xxl: '2rem',     // 32px
     // 새로운 간격 추가
     xxxl: '3rem',    // 48px
   }
   ```

---

## 🔧 문제 해결 가이드

### 자주 발생하는 문제들

#### 1. "command not found: yarn"
**해결법**:
```bash
npm install -g yarn
```

#### 2. "Module not found" 에러
**해결법**:
```bash
# 의존성 재설치
rm -rf node_modules
yarn install
```

#### 3. Storybook이 실행되지 않을 때
**해결법**:
```bash
# 캐시 삭제 후 재실행
yarn storybook --no-manager-cache
```

#### 4. Git 관련 에러
**해결법**:
```bash
# 현재 상태 확인
git status

# 충돌 해결 후
git add .
git commit -m "충돌 해결"
```

### 🆘 도움이 필요할 때

1. **에러 메시지 스크린샷 찍기**
2. **어떤 작업을 하다가 에러가 났는지 기록**
3. **시니어 개발자에게 문의**

---

## 🤝 협업 가이드

### Git 사용 규칙

#### 커밋 메시지 작성법
```bash
# 좋은 예시
git commit -m "색상: 새로운 브랜드 컬러 추가"
git commit -m "타이포그래피: 캡션 스타일 수정"
git commit -m "스페이싱: 새로운 간격 토큰 추가"

# 나쁜 예시
git commit -m "수정"
git commit -m "업데이트"
```

#### 브랜치 사용법 (고급)
```bash
# 새로운 기능 작업시
git checkout -b feature/new-colors
# 작업 완료 후
git checkout main
git merge feature/new-colors
```

### 코드 리뷰 요청하기

1. **변경사항 설명 작성**
2. **스크린샷 첨부 (Storybook)**
3. **시니어 개발자에게 리뷰 요청**

---

## 📚 추가 학습 자료

### 기본 개념 학습
- [Git 기초 학습](https://learngitbranching.js.org/?locale=ko)
- [JavaScript 기초](https://ko.javascript.info/)
- [TypeScript 기초](https://www.typescriptlang.org/ko/docs/)

### 디자인 시스템 관련
- [Design Tokens 개념](https://spectrum.adobe.com/page/design-tokens/)
- [Storybook 공식 문서](https://storybook.js.org/docs/react/get-started/introduction)

---

## 🎯 체크리스트

### 매일 작업 전 체크리스트
- [ ] 최신 코드 받기 (`git pull`)
- [ ] Storybook 실행 확인
- [ ] 변경할 토큰 파일 확인

### 작업 완료 후 체크리스트
- [ ] Storybook에서 변경사항 확인
- [ ] 다른 토큰에 영향 없는지 확인
- [ ] 커밋 메시지 작성
- [ ] 코드 푸시

### 주간 체크리스트
- [ ] 의존성 업데이트 확인
- [ ] 새로운 디자인 요구사항 반영
- [ ] 문서 업데이트

---

## 📞 연락처

- **시니어 개발자**: [이름] - [이메일]
- **디자인 팀 리드**: [이름] - [이메일]
- **긴급 상황**: [연락처]

---

**🎉 축하합니다!** 이제 Youth Design System을 관리할 준비가 되었습니다.  
천천히, 하나씩 익혀가면서 멋진 디자인 시스템을 만들어가세요! 💪 