import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const config: StorybookConfig = {
    stories: [
        // 각 패키지 안의 stories/MDX 자동 수집
        '../packages/**/src/**/*.stories.@(tsx|mdx)',
        '../packages/**/stories/**/*.stories.@(tsx|mdx)',
        '../stories/**/*.stories.@(tsx|mdx)',
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    typescript: {
        check: false,
    },
    async viteFinal(config) {
        // 워크스페이스 패키지를 dist가 아니라 "src"로 바로 바라보게 alias
        config.resolve = config.resolve || {};
        config.resolve.alias = [
            { find: '@designbase/ui', replacement: resolve(root, 'packages/ui/src') },
            { find: '@designbase/icons', replacement: resolve(root, 'packages/icons/src') },
            { find: '@designbase/theme', replacement: resolve(root, 'packages/theme/src') },
            { find: '@designbase/tokens', replacement: resolve(root, 'packages/tokens/src') },
            { find: '@designbase/utils', replacement: resolve(root, 'packages/utils/src') },
            { find: '@designbase/figma-bridge', replacement: resolve(root, 'packages/figma-bridge/src') },
        ];

        return config;
    },
};

export default config;
