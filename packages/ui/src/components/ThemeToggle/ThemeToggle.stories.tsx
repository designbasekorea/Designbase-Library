import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ThemeToggle from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
    title: 'Components/ThemeToggle',
    component: ThemeToggle,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '라이트/다크 테마를 전환할 수 있는 ThemeToggle 컴포넌트입니다. 버튼, 드롭다운, 탭 형태로 제공됩니다.',
            },
        },
    },
    argTypes: {
        themes: {
            control: { type: 'object' },
            description: '표시할 테마 옵션들',
        },
        defaultTheme: {
            control: { type: 'select' },
            options: ['light', 'dark'],
            description: '기본 테마',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: '컴포넌트 크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['button', 'dropdown', 'tabs'],
            description: '스타일 변형',
        },
        onThemeChange: {
            action: 'onThemeChange',
            description: '테마 변경 시 콜백',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 사용법 (버튼 형태)
export const Default: Story = {
    args: {
        themes: ['light', 'dark'],
        defaultTheme: 'light',
        size: 'md',
        variant: 'button',
        onThemeChange: fn(),
    },
};

// 작은 크기
export const Small: Story = {
    args: {
        ...Default.args,
        size: 'sm',
    },
};

// 큰 크기
export const Large: Story = {
    args: {
        ...Default.args,
        size: 'lg',
    },
};

// 드롭다운 형태
export const Dropdown: Story = {
    args: {
        ...Default.args,
        variant: 'dropdown',
    },
};

// 탭 형태
export const Tabs: Story = {
    args: {
        ...Default.args,
        variant: 'tabs',
    },
};

// 라이트/다크만
export const LightDarkOnly: Story = {
    args: {
        themes: ['light', 'dark'],
        defaultTheme: 'light',
        variant: 'button',
        onThemeChange: fn(),
    },
};

// 브랜드 테마 스토리는 제거되었습니다.

// 테마 변경 이벤트 모니터링
export const WithEventMonitoring: Story = {
    render: () => {
        const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
        const [themeHistory, setThemeHistory] = useState<string[]>([]);

        const handleThemeChange = (theme: 'light' | 'dark') => {
            setCurrentTheme(theme);
            setThemeHistory(prev => [...prev, `${new Date().toLocaleTimeString()}: ${theme} 테마로 변경`]);
        };

        return (
            <div style={{ padding: '20px' }}>
                <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                    <h3>테마 변경 이벤트 모니터링</h3>
                    <p><strong>현재 테마:</strong> {currentTheme}</p>
                    <p><strong>변경 횟수:</strong> {themeHistory.length}</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <ThemeToggle
                        themes={['light', 'dark']}
                        defaultTheme={currentTheme}
                        variant="button"
                        onThemeChange={handleThemeChange}
                    />
                </div>

                {themeHistory.length > 0 && (
                    <div style={{
                        padding: '15px',
                        backgroundColor: '#e9ecef',
                        borderRadius: '8px',
                        maxHeight: '200px',
                        overflowY: 'auto'
                    }}>
                        <h4>테마 변경 기록:</h4>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                            {themeHistory.map((record, index) => (
                                <li key={index} style={{ marginBottom: '4px' }}>{record}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    },
};

// 다양한 변형 비교
export const VariantComparison: Story = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h3>ThemeToggle 변형 비교</h3>

            <div style={{ marginBottom: '30px' }}>
                <h4>버튼 형태</h4>
                <ThemeToggle
                    themes={['light', 'dark']}
                    variant="button"
                    onThemeChange={fn()}
                />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>드롭다운 형태</h4>
                <ThemeToggle
                    themes={['light', 'dark']}
                    variant="dropdown"
                    onThemeChange={fn()}
                />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h4>탭 형태</h4>
                <ThemeToggle
                    themes={['light', 'dark']}
                    variant="tabs"
                    onThemeChange={fn()}
                />
            </div>
        </div>
    ),
};

// 크기 비교
export const SizeComparison: Story = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h3>ThemeToggle 크기 비교</h3>

            <div style={{ marginBottom: '20px' }}>
                <h4>작은 크기 (sm)</h4>
                <ThemeToggle
                    themes={['light', 'dark']}
                    size="sm"
                    variant="button"
                    onThemeChange={fn()}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h4>중간 크기 (md)</h4>
                <ThemeToggle
                    themes={['light', 'dark']}
                    size="md"
                    variant="button"
                    onThemeChange={fn()}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h4>큰 크기 (lg)</h4>
                <ThemeToggle
                    themes={['light', 'dark']}
                    size="lg"
                    variant="button"
                    onThemeChange={fn()}
                />
            </div>
        </div>
    ),
};
