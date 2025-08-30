/**
 * 전역 ESLint 설정
 * 
 * 목적: 모든 패키지와 앱에 적용되는 공통 린팅 규칙을 정의
 * 기능: TypeScript, React, Accessibility 규칙 적용
 * 표준: Airbnb 스타일 가이드 기반
 */

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        '@typescript-eslint/recommended',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        // React 관련 규칙
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',

        // TypeScript 관련 규칙
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // Import 관련 규칙
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                '**/*.test.{ts,tsx}',
                '**/*.spec.{ts,tsx}',
                '**/test/**',
                '**/*.stories.{ts,tsx}',
                '**/vite.config.ts',
                '**/rollup.config.js',
            ],
        }],

        // 일반 규칙
        'no-console': 'warn',
        'no-debugger': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {},
        },
    },
};
