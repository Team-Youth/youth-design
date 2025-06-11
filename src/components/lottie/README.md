# YouthLottie 컴포넌트

`YouthLottie`는 After Effects에서 생성된 Lottie 애니메이션을 웹에서 렌더링할 수 있는 React 컴포넌트입니다.

## 기능

- ✨ Lottie 애니메이션 재생
- 🔄 반복 재생 제어
- ⚡ 재생 속도 조절
- ↔️ 재생 방향 제어 (정방향/역방향)
- 🎯 특정 세그먼트 재생
- 📱 반응형 크기 조절
- 🎮 프로그래매틱 제어 (재생/정지/일시정지)

## 설치

```bash
yarn add lottie-react
```

## 기본 사용법

```tsx
import { YouthLottie } from '@team-youth/youth-design';
import animationData from './animation.json';

function App() {
  return (
    <YouthLottie 
      animationData={animationData}
      width={200}
      height={200}
    />
  );
}
```

## Props

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `animationData` | `object` | - | Lottie 애니메이션 JSON 데이터 (필수) |
| `loop` | `boolean` | `true` | 애니메이션 반복 재생 여부 |
| `autoplay` | `boolean` | `true` | 자동 재생 여부 |
| `speed` | `number` | `1` | 애니메이션 재생 속도 |
| `direction` | `1 \| -1` | `1` | 재생 방향 (1: 정방향, -1: 역방향) |
| `width` | `number` | - | 애니메이션 컨테이너 너비 (픽셀) |
| `height` | `number` | - | 애니메이션 컨테이너 높이 (픽셀) |
| `className` | `string` | `''` | 추가 CSS 클래스 |
| `style` | `React.CSSProperties` | `{}` | 추가 스타일 |
| `onComplete` | `() => void` | - | 애니메이션 완료 시 콜백 |
| `onLoopComplete` | `() => void` | - | 애니메이션 반복 완료 시 콜백 |
| `segments` | `[number, number]` | - | 특정 세그먼트만 재생 |
| `rendererSettings` | `object` | - | 렌더링 설정 |

## Ref 메서드

컴포넌트를 프로그래매틱하게 제어하려면 `ref`를 사용하세요:

```tsx
import { useRef } from 'react';
import { YouthLottie, LottieRef } from '@team-youth/youth-design';

function App() {
  const lottieRef = useRef<LottieRef>(null);

  const handlePlay = () => {
    lottieRef.current?.play();
  };

  const handlePause = () => {
    lottieRef.current?.pause();
  };

  const handleStop = () => {
    lottieRef.current?.stop();
  };

  return (
    <div>
      <YouthLottie 
        ref={lottieRef}
        animationData={animationData}
        autoplay={false}
      />
      <button onClick={handlePlay}>재생</button>
      <button onClick={handlePause}>일시정지</button>
      <button onClick={handleStop}>정지</button>
    </div>
  );
}
```

### 사용 가능한 Ref 메서드

| 메서드 | 설명 |
|--------|------|
| `play()` | 애니메이션 재생 |
| `pause()` | 애니메이션 일시정지 |
| `stop()` | 애니메이션 정지 |
| `goToAndStop(frame)` | 특정 프레임으로 이동하고 정지 |
| `goToAndPlay(frame)` | 특정 프레임으로 이동하고 재생 |
| `setSpeed(speed)` | 재생 속도 설정 |
| `setDirection(direction)` | 재생 방향 설정 |
| `getLottieInstance()` | Lottie 인스턴스 반환 |

## 사용 예시

### 속도 조절

```tsx
<YouthLottie 
  animationData={animationData}
  speed={0.5} // 절반 속도
  width={150}
  height={150}
/>
```

### 역방향 재생

```tsx
<YouthLottie 
  animationData={animationData}
  direction={-1} // 역방향
  width={150}
  height={150}
/>
```

### 반복 없는 재생

```tsx
<YouthLottie 
  animationData={animationData}
  loop={false}
  onComplete={() => console.log('애니메이션 완료!')}
  width={150}
  height={150}
/>
```

### 특정 세그먼트 재생

```tsx
<YouthLottie 
  animationData={animationData}
  segments={[30, 60]} // 30프레임부터 60프레임까지만 재생
  width={150}
  height={150}
/>
```

## Lottie 파일 준비

1. After Effects에서 애니메이션을 만듭니다
2. Bodymovin/Lottie 플러그인을 사용해 JSON으로 내보냅니다
3. JSON 파일을 프로젝트에 추가합니다
4. 컴포넌트에서 import하여 사용합니다

```tsx
import animationData from './assets/loading-animation.json';
```

## 접근성

컴포넌트는 기본적으로 `role="img"`와 `aria-label="애니메이션"`을 제공합니다. 더 구체적인 설명이 필요한 경우 직접 설정하세요:

```tsx
<div role="img" aria-label="로딩 중...">
  <YouthLottie animationData={animationData} />
</div>
``` 