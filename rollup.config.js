import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const createConfig = (input, outputDir, includeCSS = true) => ({
  input,
  output: [
    {
      file: `dist/${outputDir}/index.js`,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: `dist/${outputDir}/index.esm.js`,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: !outputDir.includes('native'),
    }),
    commonjs(),
    json(),
    ...(includeCSS
      ? [
          postcss({
            extract: true,
            minimize: true,
          }),
        ]
      : []),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: `dist/${outputDir}`,
      rootDir: 'src',
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
});

export default [
  // Main entry point (Web)
  createConfig('src/index.ts', '.'),
  // Token entry point
  createConfig('src/tokens/index.ts', 'token'),
  // Components entry point (Web)
  createConfig('src/components/index.ts', 'components'),
  // React Native entry point
  createConfig('src/native/index.ts', 'native', false),
];
