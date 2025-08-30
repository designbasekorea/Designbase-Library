import type { Preview } from '@storybook/react';
import React from 'react';

// 디자인 시스템 전역 스타일/토큰(CSS 변수) 주입
import '../packages/tokens/dist/css/tokens.css';
import '../packages/theme/dist/css/theme.css';

const preview: Preview = {
    parameters: {
        layout: 'centered',
        controls: { expanded: true },
        docs: { source: { type: 'dynamic' } },
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#111827' },
            ],
        },
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Designbase theme',
            defaultValue: 'light',
            toolbar: {
                icon: 'mirror',
                items: [
                    { value: 'light', title: 'Light' },
                    { value: 'dark', title: 'Dark' },
                ],
            },
        },
    },
    decorators: [
        (Story, context) => {
            const mode = context.globals.theme as 'light' | 'dark';
            return (
                <div data-theme={mode} style={{ padding: 16, minWidth: 320 }}>
                    <Story />
                </div>
            );
        },
    ],
};

export default preview;
