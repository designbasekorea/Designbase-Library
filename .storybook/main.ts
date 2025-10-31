// .storybook/main.ts
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const config: StorybookConfig = {
    stories: [
        '../packages/**/src/**/*.stories.@(tsx|mdx)',
        '../packages/**/stories/**/*.stories.@(tsx|mdx)',
        '../stories/**/*.stories.@(tsx|mdx)',
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-themes', // ← themes 파라미터 쓰면 같이 넣어두세요
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    typescript: { check: false },

    async viteFinal(cfg) {
        cfg.resolve ??= {};
        const alias = Array.isArray(cfg.resolve.alias) ? cfg.resolve.alias : [];

        // 1) css 서브패스는 dist 쪽으로 고정(예외 처리) — alias 앞쪽에 둡니다.
        alias.unshift(
            {
                find: '@designbasekorea/theme/css',
                replacement: resolve(root, 'packages/theme/dist/css/theme.css'),
            },
            {
                find: '@designbasekorea/tokens/css',
                replacement: resolve(root, 'packages/tokens/dist/css/tokens.css'),
            },
        );

        // 2) 나머지 패키지는 src를 보게 함
        alias.push(
            { find: '@designbasekorea/ui', replacement: resolve(root, 'packages/ui/src') },
            { find: '@designbasekorea/icons', replacement: resolve(root, 'packages/icons/src') },
            { find: '@designbasekorea/theme', replacement: resolve(root, 'packages/theme/src') },
            { find: '@designbasekorea/tokens', replacement: resolve(root, 'packages/tokens/src') },
            { find: '@designbasekorea/utils', replacement: resolve(root, 'packages/utils/src') },
            { find: '@designbasekorea/figma-bridge', replacement: resolve(root, 'packages/figma-bridge/src') },
        );

        cfg.resolve.alias = alias;
        return cfg;
    },
};

export default config;
