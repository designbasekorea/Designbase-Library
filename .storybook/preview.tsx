import React from 'react';
import type { Preview } from '@storybook/react';
import { setTheme, getTheme, type Theme } from '@designbase/theme';
import '../packages/theme/dist/css/theme.css';
import '../packages/tokens/dist/css/tokens.css';
import './storybook.css';

// 테마 컨트롤을 위한 글로벌 타입 정의
declare global {
    interface Window {
        __STORYBOOK_ADDON_THEMES__?: {
            setTheme: (theme: Theme) => void;
            getTheme: () => Theme;
        };
    }
}

// 테마 전환 함수들을 전역에 노출
if (typeof window !== 'undefined') {
    window.__STORYBOOK_ADDON_THEMES__ = {
        setTheme,
        getTheme,
    };
}

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        // 테마 관련 파라미터
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: 'light', color: '#ffffff' },
                { name: 'dark', class: 'dark', color: '#1a1a1a' },
            ],
        },
        // 배경색 설정
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#1a1a1a' },
            ],
        },

    },
    // 글로벌 데코레이터
    decorators: [
        (Story, context) => {
            // 현재 선택된 테마 가져오기
            const currentTheme = context.globals.theme || 'light';

            // 테마 설정 - 더 확실하게 적용
            React.useEffect(() => {
                if (typeof document !== 'undefined') {
                    // HTML과 body에 data-theme 속성 설정 (토큰이 자동 적용됨)
                    document.documentElement.setAttribute('data-theme', currentTheme);
                    document.body.setAttribute('data-theme', currentTheme);
                }
            }, [currentTheme]);

            return (
                <div
                    data-theme={currentTheme}
                    style={{
                        minHeight: '100vh',
                        padding: '20px',
                        backgroundColor: currentTheme === 'dark' ? '#1a1a1a' : '#ffffff',
                        color: currentTheme === 'dark' ? '#ffffff' : '#000000',
                        transition: 'background-color 0.3s ease, color 0.3s ease',
                    }}
                >
                    <Story />
                </div>
            );
        },
    ],
    // 글로벌 컨트롤
    globalTypes: {
        theme: {
            description: '글로벌 테마 설정',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'paintbrush',
                items: [
                    { value: 'light', title: 'Light', icon: 'circlehollow' },
                    { value: 'dark', title: 'Dark', icon: 'circle' },
                ],
                dynamicTitle: true,
            },
        },
    },
};

export default preview;
