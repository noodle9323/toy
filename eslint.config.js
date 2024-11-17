import featureSlicedPlugin from 'eslint-plugin-feature-sliced';
import importPlugin from 'eslint-plugin-import';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@feature-sliced': featureSlicedPlugin,
      '@typescript-eslint': typescriptPlugin,
      import: importPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: true,
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'], // 상위/형제 디렉토리
            'index', // 현재 디렉토리
            'object', // object imports
            'type', // type imports
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**', // 모든 앱 내부 imports
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@shared/lib/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@shared/ui/**',
              group: 'internal',
              position: 'after',
            },
          ],
          distinctGroup: false,
          pathGroupsExcludedImportTypes: ['react', 'next'],
          'newlines-between': 'always',
        },
      ],
      // import 관련 유용한 규칙들
      'import/no-unresolved': 'error',
      'import/named': 'error',

      // Feature-Sliced 관련 규칙 추가
      '@feature-sliced/layers-slices': 'error',
      '@feature-sliced/import-segments': 'error',

      // 타입스크립트 관련 유용한 규칙들
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
