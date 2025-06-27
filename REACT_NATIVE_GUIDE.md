# Youth Design System - React Native 가이드

이 가이드는 Youth Design System을 React Native 프로젝트에서 사용하는 방법을 설명합니다.

## 설치

### 1. 메인 패키지 설치
```bash
npm install @team-youth/youth-design
# 또는
yarn add @team-youth/youth-design
```

### 2. React Native 의존성 설치
```bash
npm install react-native-svg
# 또는
yarn add react-native-svg
```

### 3. iOS 설정 (iOS 프로젝트인 경우)
```bash
cd ios && pod install
```

## 사용법

### 기본 import
```typescript
// React Native 전용 컴포넌트 import
import { Button, Icon, TextInput } from '@team-youth/youth-design/native';

// 토큰은 공통으로 사용
import { colors, spacing } from '@team-youth/youth-design/token';
```

### Button 컴포넌트

```typescript
import React from 'react';
import { View } from 'react-native';
import { Button } from '@team-youth/youth-design/native';

export const Example = () => {
  return (
    <View style={{ padding: 20 }}>
      {/* 기본 CTA 버튼 */}
      <Button onPress={() => console.log('Pressed!')}>
        확인
      </Button>

      {/* 아이콘이 있는 버튼 */}
      <Button 
        leftIcon="search" 
        type="outlined"
        onPress={() => console.log('Search!')}
      >
        검색
      </Button>

      {/* 로딩 상태 버튼 */}
      <Button isLoading onPress={() => {}}>
        로딩 중...
      </Button>

      {/* 아이콘만 있는 버튼 */}
      <Button 
        iconOnly="close" 
        size="m"
        onPress={() => console.log('Close!')}
      />
    </View>
  );
};
```

### TextInput 컴포넌트

```typescript
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from '@team-youth/youth-design/native';

export const FormExample = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ padding: 20 }}>
      {/* 이메일 입력 */}
      <TextInput
        label="이메일"
        placeholder="이메일을 입력하세요"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        leftIcon="search"
        required
      />

      {/* 비밀번호 입력 */}
      <TextInput
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        required
        style={{ marginTop: 16 }}
      />

      {/* 에러가 있는 입력 */}
      <TextInput
        label="전화번호"
        placeholder="전화번호를 입력하세요"
        error={true}
        errorMessage="올바른 전화번호를 입력해주세요"
        style={{ marginTop: 16 }}
      />
    </View>
  );
};
```

### Icon 컴포넌트

```typescript
import React from 'react';
import { View } from 'react-native';
import { Icon, colors } from '@team-youth/youth-design/native';

export const IconExample = () => {
  return (
    <View style={{ flexDirection: 'row', padding: 20 }}>
      {/* 기본 아이콘 */}
      <Icon type="home" />

      {/* 크기와 색상이 커스텀된 아이콘 */}
      <Icon 
        type="heart" 
        size={32} 
        color={colors.semantic.state.error} 
      />

      {/* 터치 가능한 아이콘 */}
      <Icon 
        type="search" 
        onPress={() => console.log('Search pressed!')}
      />
    </View>
  );
};
```

### 색상 토큰 사용

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@team-youth/youth-design/token';

export const ColorExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.primaryText}>Primary Text</Text>
      <Text style={styles.secondaryText}>Secondary Text</Text>
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error Message</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.semantic.background.primary,
  },
  primaryText: {
    color: colors.semantic.text.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryText: {
    color: colors.semantic.text.secondary,
    fontSize: 14,
  },
  errorContainer: {
    backgroundColor: colors.semantic.state.error + '10', // 10% opacity
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  errorText: {
    color: colors.semantic.state.error,
    fontSize: 14,
  },
});
```

## 현재 지원되는 컴포넌트

### ✅ 구현 완료
- **Button**: 모든 타입과 크기 지원 (solid, outlined, text)
- **Icon**: 주요 아이콘들 (search, close, add, home 등)
- **TextInput**: 레이블, 에러, 아이콘 지원

### 🚧 개발 예정
- **Modal**: React Native Modal 기반
- **Checkbox**: 체크박스 컴포넌트
- **Radio**: 라디오 버튼 컴포넌트
- **Toggle**: 스위치 컴포넌트
- **Tab**: 탭 네비게이션
- **Toast**: React Native용 토스트

## 주요 차이점

### 웹 버전과의 차이

1. **스타일링**: CSS 대신 StyleSheet 사용
2. **이벤트**: `onClick` 대신 `onPress` 사용
3. **SVG**: `react-native-svg` 사용
4. **애니메이션**: React Native Animated API 또는 Reanimated 사용

### 성능 최적화

- StyleSheet.create() 사용으로 스타일 캐싱
- memo 사용으로 불필요한 리렌더링 방지
- 아이콘 SVG 최적화

## 트러블슈팅

### 1. react-native-svg 관련 오류
```bash
# Android
cd android && ./gradlew clean

# iOS
cd ios && rm -rf Pods && pod install
```

### 2. Metro bundler 오류
```bash
npx react-native start --reset-cache
```

### 3. TypeScript 오류
```json
// tsconfig.json에 추가
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```

## 예제 프로젝트

전체 예제는 [examples/react-native](./examples/react-native) 폴더에서 확인할 수 있습니다.

## 피드백 및 기여

React Native 호환성에 대한 피드백이나 기여는 언제든 환영합니다!

- 이슈 제보: [GitHub Issues](https://github.com/Team-Youth/youth-design/issues)
- 기여 가이드: [CONTRIBUTING.md](./CONTRIBUTING.md) 