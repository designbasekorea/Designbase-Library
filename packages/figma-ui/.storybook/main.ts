import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    '@designbasekorea/ui': path.resolve(__dirname, '../../ui/src'),
                    '@designbasekorea/icons': path.resolve(__dirname, '../../icons/src'),
                    '@designbasekorea/theme': path.resolve(__dirname, '../../theme/src'),
                    '@designbasekorea/tokens': path.resolve(__dirname, '../../tokens/src'),
                },
            },
        });
    },
};

export default config;

