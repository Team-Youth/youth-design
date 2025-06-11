import { defineConfig } from 'tsup';

export default defineConfig([
  // Main entry point - 전체 라이브러리
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    outDir: 'dist',
    splitting: true,
    treeshake: true,
    minify: false,
    target: 'es2015',
    external: ['react', 'react-dom', 'react-hot-toast'],
  },

  // Components - 개별 컴포넌트 단위로 분리
  {
    entry: ['src/components/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    outDir: 'dist/components',
    splitting: true,
    treeshake: true,
    minify: false,
    target: 'es2015',
    external: ['react', 'react-dom', 'react-hot-toast'],
  },

  // Tokens - 디자인 토큰 분리
  {
    entry: ['src/tokens/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    outDir: 'dist/tokens',
    splitting: true,
    treeshake: true,
    minify: false,
    target: 'es2015',
  },

  // Individual components - 각각의 컴포넌트를 개별 빌드
  {
    entry: [
      'src/components/box-button/index.ts',
      'src/components/font/index.ts',
      'src/components/icon/index.ts',
      'src/components/illust/index.ts',
      'src/components/label/index.ts',
      'src/components/text-input/index.ts',
      'src/components/text-button/index.ts',
      'src/components/tab/index.ts',
      'src/components/tab-bar/index.ts',
      'src/components/chips/index.ts',
      'src/components/radio/index.ts',
      'src/components/check-box/index.ts',
      'src/components/toggle/index.ts',
      'src/components/toast/index.ts',
      'src/components/popup/index.ts',
      'src/components/modal/index.ts',
      'src/components/dropdown/index.ts',
      'src/components/text-area/index.ts',
      'src/components/text-field/index.ts',
      'src/components/exercise-card/index.ts',
      'src/components/activity-goal-card/index.ts',
      'src/components/greeting-header/index.ts',
      'src/components/exercise-list/index.ts',
      'src/components/stepper/index.ts',
    ],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    outDir: 'dist/individual',
    splitting: false,
    treeshake: true,
    minify: false,
    target: 'es2015',
    external: ['react', 'react-dom', 'react-hot-toast'],
  },
]);
