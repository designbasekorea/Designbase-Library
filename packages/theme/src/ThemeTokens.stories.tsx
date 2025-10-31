import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { setTheme, getTheme, type Theme } from '@designbasekorea/theme';

/**
 * 공통 유틸: CSS 변수 값을 읽어와 표시(미정의 시 "UNDEFINED")
 */
const useCssVar = (variable: string) => {
    const [value, setValue] = React.useState<string>('');
    React.useEffect(() => {
        if (typeof window === 'undefined') return;
        const v = getComputedStyle(document.documentElement)
            .getPropertyValue(variable)
            .trim();
        setValue(v || 'UNDEFINED');
    }, [variable]);
    return value;
};

const Swatch: React.FC<{ name: string; variable: string; asText?: boolean }> = ({ name, variable, asText }) => {
    const value = useCssVar(variable);
    const bg = `var(${variable}, transparent)`;

    return (
        <div
            style={{
                padding: 16,
                border: '1px solid var(--db-border-muted)',
                borderRadius: 8,
                backgroundColor: 'var(--db-bg-secondary)',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: 40,
                    borderRadius: 4,
                    background: asText ? 'var(--db-bg-primary)' : bg,
                    marginBottom: 8,
                    border: '1px solid var(--db-border-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: asText ? `var(${variable}, var(--db-text-primary))` : 'var(--db-text-primary)',
                    fontWeight: 600,
                }}
            >
                {asText ? 'Aa' : ''}
            </div>
            <div style={{ fontWeight: 500, marginBottom: 4, color: 'var(--db-text-primary)' }}>{name}</div>
            <div style={{ fontSize: 12, color: 'var(--db-text-secondary)', fontFamily: 'monospace' }}>{variable}</div>
            <div style={{ fontSize: 11, color: 'var(--db-text-muted)', fontFamily: 'monospace', marginTop: 2 }}>
                Value: {value}
            </div>
        </div>
    );
};

/**
 * 테마 상태 표시 컴포넌트 (스토리북 글로벌 테마와 연동)
 */
const ThemeStatus: React.FC<{ currentTheme: Theme }> = ({ currentTheme }) => {
    return (
        <div style={{
            marginBottom: 24,
            padding: 16,
            backgroundColor: 'var(--db-bg-secondary)',
            border: '1px solid var(--db-border-muted)',
            borderRadius: 8
        }}>
            <h3 style={{
                margin: '0 0 12px 0',
                fontSize: 16,
                fontWeight: 600,
                color: 'var(--db-text-primary)'
            }}>
                현재 테마 상태
            </h3>
            <p style={{
                margin: '8px 0 0 0',
                fontSize: 14,
                color: 'var(--db-text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: 8
            }}>
                <span>{currentTheme === 'light' ? '☀️' : '🌙'}</span>
                <strong style={{ color: 'var(--db-text-primary)' }}>
                    {currentTheme === 'light' ? 'Light Mode' : 'Dark Mode'}
                </strong>
                <span style={{ fontSize: 12 }}>
                    (스토리북 상단 툴바에서 테마를 변경하세요)
                </span>
            </p>
        </div>
    );
};

const meta: Meta = {
    title: 'Design System/Theme',
    parameters: {
        layout: 'padded',
    },
    decorators: [
        (Story, ctx) => {
            const theme = (ctx.globals as any)?.theme || 'light';
            React.useEffect(() => {
                if (typeof document !== 'undefined') {
                    setTheme(theme);
                    document.documentElement.setAttribute('data-theme', theme);
                    document.body.setAttribute('data-theme', theme);
                }
            }, [theme]);
            return (
                <div data-theme={theme} style={{ padding: 20 }}>
                    <Story />
                </div>
            );
        },
    ],
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Light/Dark theme',
            defaultValue: 'light',
            toolbar: {
                icon: 'mirror',
                items: [
                    { value: 'light', title: 'Light' },
                    { value: 'dark', title: 'Dark' },
                ],
                dynamicTitle: true,
            },
        },
    },
};

export default meta;
type Story = StoryObj;

/**
 * 테마 기본 변수들
 */
export const ThemeVariables: Story = {
    render: (args, context) => {
        const currentTheme = (context.globals as any)?.theme || 'light';
        const themeVariables = [
            // Spacing
            { name: 'Padding XS', variable: '--db-padding-xs' },
            { name: 'Padding S', variable: '--db-padding-s' },
            { name: 'Padding M', variable: '--db-padding-m' },
            { name: 'Padding L', variable: '--db-padding-l' },
            { name: 'Padding XL', variable: '--db-padding-xl' },

            // Typography
            { name: 'Text XS', variable: '--db-text-xs' },
            { name: 'Text S', variable: '--db-text-s' },
            { name: 'Text M', variable: '--db-text-m' },
            { name: 'Text L', variable: '--db-text-l' },
            { name: 'Text XL', variable: '--db-text-xl' },

            // Border Radius
            { name: 'Border Radius S', variable: '--db-radius-s' },
            { name: 'Border Radius M', variable: '--db-radius-m' },
            { name: 'Border Radius L', variable: '--db-radius-l' },

            // Shadows
            { name: 'Shadow Card', variable: '--db-shadow-card' },
            { name: 'Shadow Button', variable: '--db-shadow-button' },
            { name: 'Shadow Modal', variable: '--db-shadow-modal' },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                <ThemeStatus currentTheme={currentTheme} />
                <h2 style={{ marginBottom: 10, color: 'var(--db-text-primary)' }}>Theme Variables</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {themeVariables.map((v) => (
                        <Swatch key={v.variable} name={v.name} variable={v.variable} />
                    ))}
                </div>
            </div>
        );
    },
};

/**
 * 시멘틱 색상 (테마에 따라 변함)
 */
export const SemanticColors: Story = {
    render: (args, context) => {
        const currentTheme = (context.globals as any)?.theme || 'light';
        const semanticColors = [
            // Text Colors
            { name: 'Primary Text', variable: '--db-text-primary', asText: true },
            { name: 'Secondary Text', variable: '--db-text-secondary', asText: true },
            { name: 'Muted Text', variable: '--db-text-muted', asText: true },
            { name: 'Disabled Text', variable: '--db-text-disabled', asText: true },
            { name: 'Link Text', variable: '--db-text-link', asText: true },

            // Background Colors
            { name: 'Primary Background', variable: '--db-bg-primary' },
            { name: 'Secondary Background', variable: '--db-bg-secondary' },
            { name: 'Tertiary Background', variable: '--db-bg-tertiary' },

            // Border Colors
            { name: 'Primary Border', variable: '--db-border-primary' },
            { name: 'Secondary Border', variable: '--db-border-secondary' },
            { name: 'Focus Border', variable: '--db-border-focus' },
            { name: 'Error Border', variable: '--db-border-error' },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                <ThemeStatus currentTheme={currentTheme} />
                <h2 style={{ marginBottom: 10, color: 'var(--db-text-primary)' }}>Semantic Colors (Theme Responsive)</h2>
                <p style={{ color: 'var(--db-text-secondary)', marginBottom: 20 }}>
                    이 색상들은 테마에 따라 자동으로 변경됩니다. 스토리북 상단 툴바의 테마 버튼을 사용해보세요!
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {semanticColors.map((c) => (
                        <Swatch key={c.variable} name={c.name} variable={c.variable} asText={c.asText} />
                    ))}
                </div>
            </div>
        );
    },
};

/**
 * 상태별 색상 (Interactive)
 */
export const StateColors: Story = {
    render: (args, context) => {
        const currentTheme = (context.globals as any)?.theme || 'light';
        const stateColors = [
            // Success
            { name: 'Success Text', variable: '--db-text-success', asText: true },
            { name: 'Success Background', variable: '--db-bg-success' },
            { name: 'Success Border', variable: '--db-border-success' },

            // Warning
            { name: 'Warning Text', variable: '--db-text-warning', asText: true },
            { name: 'Warning Background', variable: '--db-bg-warning' },
            { name: 'Warning Border', variable: '--db-border-warning' },

            // Danger/Error
            { name: 'Error Text', variable: '--db-text-error', asText: true },
            { name: 'Error Background', variable: '--db-bg-error' },
            { name: 'Error Border', variable: '--db-border-danger' },

            // Info
            { name: 'Info Text', variable: '--db-text-info', asText: true },
            { name: 'Info Background', variable: '--db-bg-info' },
            { name: 'Info Border', variable: '--db-border-info' },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                <ThemeStatus currentTheme={currentTheme} />
                <h2 style={{ marginBottom: 10, color: 'var(--db-text-primary)' }}>State Colors</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {stateColors.map((c) => (
                        <Swatch key={c.variable} name={c.name} variable={c.variable} asText={c.asText} />
                    ))}
                </div>
            </div>
        );
    },
};

/**
 * 컴포넌트별 테마 변수
 */
export const ComponentVariables: Story = {
    render: (args, context) => {
        const currentTheme = (context.globals as any)?.theme || 'light';
        const componentVariables = [
            // Button Variables
            { name: 'Button Primary BG', variable: '--db-btn-primary-bg' },
            { name: 'Button Primary Text', variable: '--db-btn-primary-text', asText: true },
            { name: 'Button Primary Hover', variable: '--db-btn-primary-hover-bg' },
            { name: 'Button Secondary BG', variable: '--db-btn-secondary-bg' },
            { name: 'Button Secondary Text', variable: '--db-btn-secondary-text', asText: true },
            { name: 'Button Secondary Hover', variable: '--db-btn-secondary-hover-bg' },

            // Icon Variables
            { name: 'Icon Primary', variable: '--db-icon-primary', asText: true },
            { name: 'Icon Secondary', variable: '--db-icon-secondary', asText: true },
            { name: 'Icon Success', variable: '--db-icon-success', asText: true },
            { name: 'Icon Warning', variable: '--db-icon-warning', asText: true },
            { name: 'Icon Danger', variable: '--db-icon-danger', asText: true },
            { name: 'Icon Info', variable: '--db-icon-info', asText: true },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                <ThemeStatus currentTheme={currentTheme} />
                <h2 style={{ marginBottom: 10, color: 'var(--db-text-primary)' }}>Component Theme Variables</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {componentVariables.map((v) => (
                        <Swatch key={v.variable} name={v.name} variable={v.variable} asText={v.asText} />
                    ))}
                </div>
            </div>
        );
    },
};

/**
 * 테마 전환 데모
 */
export const ThemeDemo: Story = {
    render: (args, context) => {
        const currentTheme = (context.globals as any)?.theme || 'light';
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                <ThemeStatus currentTheme={currentTheme} />
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                    {/* Button Demo */}
                    <div style={{ flex: '1', minWidth: 200 }}>
                        <h3 style={{ marginBottom: 12, color: 'var(--db-text-primary)' }}>Button Component</h3>
                        <button
                            style={{
                                padding: '12px 24px',
                                backgroundColor: 'var(--db-btn-primary-bg)',
                                color: 'var(--db-btn-primary-text)',
                                border: '1px solid var(--db-border-primary)',
                                borderRadius: 'var(--db-radius-m)',
                                cursor: 'pointer',
                                fontWeight: 500,
                                fontSize: 'var(--db-text-m)',
                            }}
                        >
                            Primary Button
                        </button>
                        <br />
                        <button
                            style={{
                                padding: '12px 24px',
                                backgroundColor: 'var(--db-btn-secondary-bg)',
                                color: 'var(--db-btn-secondary-text)',
                                border: '1px solid var(--db-border-secondary)',
                                borderRadius: 'var(--db-radius-m)',
                                cursor: 'pointer',
                                fontWeight: 500,
                                fontSize: 'var(--db-text-m)',
                                marginTop: 8,
                            }}
                        >
                            Secondary Button
                        </button>
                    </div>

                    {/* Card Demo */}
                    <div style={{ flex: '1', minWidth: 200 }}>
                        <h3 style={{ marginBottom: 12, color: 'var(--db-text-primary)' }}>Card Component</h3>
                        <div
                            style={{
                                padding: 'var(--db-padding-l)',
                                backgroundColor: 'var(--db-bg-primary)',
                                border: '1px solid var(--db-border-muted)',
                                borderRadius: 'var(--db-radius-l)',
                                boxShadow: 'var(--db-shadow-card)',
                            }}
                        >
                            <h4 style={{ color: 'var(--db-text-primary)', margin: '0 0 8px 0' }}>
                                Card Title
                            </h4>
                            <p style={{ color: 'var(--db-text-secondary)', margin: 0 }}>
                                이 카드는 테마에 따라 자동으로 색상이 변경됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};
