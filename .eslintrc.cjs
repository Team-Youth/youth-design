module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports', 'prettier'],
  root: true,
  rules: {
    'no-undef': 'off',
    'no-empty-pattern': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 100, // https://github.com/airbnb/javascript#19.13
        tabWidth: 2, // https://github.com/airbnb/javascript#19.1
        useTabs: false, // https://github.com/airbnb/javascript#19.1
        semi: true, // https://github.com/airbnb/javascript#21.1
        singleQuote: true, // https://github.com/airbnb/javascript#6.1
        trailingComma: 'all', // https://github.com/airbnb/javascript#20.2
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'off',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  ignorePatterns: ['node_modules', 'dist', 'build', 'public', 'src/orval'],
};
