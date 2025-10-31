import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

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
                border: '1px solid #e5e7eb',
                borderRadius: 8,
                backgroundColor: '#f9fafb',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: 40,
                    borderRadius: 4,
                    background: asText ? '#ffffff' : bg, // 텍스트 컬러는 글자색으로도 보여주기 위해 배경을 흰색으로
                    marginBottom: 8,
                    border: '1px solid #d1d5db',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: asText ? `var(${variable}, #000)` : '#111827',
                    fontWeight: 600,
                }}
            >
                {asText ? 'Aa' : ''}
            </div>
            <div style={{ fontWeight: 500, marginBottom: 4 }}>{name}</div>
            <div style={{ fontSize: 12, color: '#6b7280', fontFamily: 'monospace' }}>{variable}</div>
            <div style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'monospace', marginTop: 2 }}>
                Value: {value}
            </div>
        </div>
    );
};

/**
 * 글로벌: 테마 토글(라이트/다크). 현재 tokens.css는 text/background/icon이 다크에만 있어서
 * 'dark'로 바꾸면 바로 보임.
 */
const meta: Meta = {
    title: 'Design System/Tokens',
    parameters: {
        layout: 'padded',
    },
    decorators: [
        (Story, ctx) => {
            const theme = (ctx.globals as any)?.theme || 'light';
            return (
                <div {...(theme === 'dark' ? { 'data-theme': 'dark' } : {})} style={{ padding: 20 }}>
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
 * ⚠️ Foundation Colors
 * 현재 CSS에 `--color-foundation-*` 변수가 없다면 스와치가 투명(보이지 않음).
 * 토큰 빌드에서 foundation 레이어도 CSS로 내보내야 정상 표출됨.
 */
export const ColorPalette: Story = {
    render: () => {
        const colorGroups = [
            {
                name: 'Neutral',
                colors: ['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100', 'white'],
            },
            { name: 'Blue', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
            { name: 'Green', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
            { name: 'Red', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
            { name: 'Orange', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
            { name: 'Yellow', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
            { name: 'Teal', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
            { name: 'Purple', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                <h2 style={{ marginBottom: 10 }}>Foundation Colors</h2>
                {colorGroups.map((group) => (
                    <div key={group.name}>
                        <h3 style={{ marginBottom: 16, color: '#374151' }}>{group.name}</h3>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {group.colors.map((shade) => {
                                const variable = `--color-foundation-${group.name.toLowerCase()}-${shade}`;
                                const value = useCssVar(variable);
                                return (
                                    <div key={shade} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div
                                            style={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: 8,
                                                backgroundColor: `var(${variable}, transparent)`,
                                                border: '1px solid #e5e7eb',
                                                marginBottom: 8,
                                            }}
                                        />
                                        <span style={{ fontSize: 12, fontWeight: 500 }}>{shade}</span>
                                        <span style={{ fontSize: 10, color: '#6b7280', fontFamily: 'monospace' }}>{value}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        );
    },
};

/** Status (이건 :root에도 존재하므로 바로 보임) */
export const SemanticColors: Story = {
    render: () => {
        const semanticColors = [
            { name: 'Success Foreground', variable: '--color-semantic-status-success-fg' },
            { name: 'Success Background', variable: '--color-semantic-status-success-bg' },
            { name: 'Warning Foreground', variable: '--color-semantic-status-warning-fg' },
            { name: 'Warning Background', variable: '--color-semantic-status-warning-bg' },
            { name: 'Error Foreground', variable: '--color-semantic-status-error-fg' },
            { name: 'Error Background', variable: '--color-semantic-status-error-bg' },
            { name: 'Info Foreground', variable: '--color-semantic-status-info-fg' },
            { name: 'Info Background', variable: '--color-semantic-status-info-bg' },
        ];

        return (
            <div>
                <h2 style={{ marginBottom: 30 }}>Semantic Status Colors</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {semanticColors.map((c) => (
                        <Swatch key={c.variable} name={c.name} variable={c.variable} />
                    ))}
                </div>
            </div>
        );
    },
};

/** ✅ 변수명 오타 수정: --color-semantic-text-link-hover */
export const TextColors: Story = {
    render: () => {
        const textColors = [
            { name: 'Primary Text', variable: '--color-semantic-text-primary' },
            { name: 'Secondary Text', variable: '--color-semantic-text-secondary' },
            { name: 'Muted Text', variable: '--color-semantic-text-muted' },
            { name: 'Disabled Text', variable: '--color-semantic-text-disabled' },
            { name: 'Inverse Text', variable: '--color-semantic-text-inverse' },
            { name: 'Link Text', variable: '--color-semantic-text-link' },
            { name: 'Link Hover', variable: '--color-semantic-text-link-hover' }, // ← 여기!
        ];
        return (
            <div>
                <h2 style={{ marginBottom: 30 }}>Text Colors</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {textColors.map((c) => (
                        <Swatch key={c.variable} name={c.name} variable={c.variable} asText />
                    ))}
                </div>
            </div>
        );
    },
};

export const BackgroundColors: Story = {
    render: () => {
        const backgroundColors = [
            { name: 'Primary Background', variable: '--color-semantic-background-primary' },
            { name: 'Secondary Background', variable: '--color-semantic-background-secondary' },
            { name: 'Tertiary Background', variable: '--color-semantic-background-tertiary' },
            { name: 'Inverse Background', variable: '--color-semantic-background-inverse' },
            { name: 'Overlay Background', variable: '--color-semantic-background-overlay' },
        ];
        return (
            <div>
                <h2 style={{ marginBottom: 30 }}>Background Colors</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {backgroundColors.map((c) => (
                        <Swatch key={c.variable} name={c.name} variable={c.variable} />
                    ))}
                </div>
            </div>
        );
    },
};

export const BorderColors: Story = {
    render: () => {
        const borderColors = [
            { name: 'Primary Border', variable: '--color-semantic-border-primary' },
            { name: 'Secondary Border', variable: '--color-semantic-border-secondary' },
            { name: 'Muted Border', variable: '--color-semantic-border-muted' },
            { name: 'Focus Border', variable: '--color-semantic-border-focus' },
        ];
        return (
            <div>
                <h2 style={{ marginBottom: 30 }}>Border Colors</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {borderColors.map((c) => (
                        <Swatch key={c.variable} name={c.name} variable={c.variable} />
                    ))}
                </div>
            </div>
        );
    },
};

export const IconColors: Story = {
    render: () => {
        const iconColors = [
            { name: 'Primary Icon', variable: '--color-semantic-component-icon-primary' },
            { name: 'Secondary Icon', variable: '--color-semantic-component-icon-secondary' },
            { name: 'Success Icon', variable: '--color-semantic-component-icon-success' },
            { name: 'Warning Icon', variable: '--color-semantic-component-icon-warning' },
            { name: 'Danger Icon', variable: '--color-semantic-component-icon-danger' },
            { name: 'Info Icon', variable: '--color-semantic-component-icon-info' },
            { name: 'Muted Icon', variable: '--color-semantic-component-icon-muted' },
            { name: 'Inverse Icon', variable: '--color-semantic-component-icon-inverse' },
        ];
        return (
            <div>
                <h2 style={{ marginBottom: 30 }}>Icon Colors</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {iconColors.map((c) => (
                        <Swatch key={c.variable} name={c.name} variable={c.variable} />
                    ))}
                </div>
            </div>
        );
    },
};

export const ButtonColors: Story = {
    render: () => {
        const buttonColors = [
            { name: 'Primary Default BG', variable: '--color-semantic-component-button-primary-default-bg' },
            { name: 'Primary Default Text', variable: '--color-semantic-component-button-primary-default-text' },
            { name: 'Primary Default Border', variable: '--color-semantic-component-button-primary-default-border' },
            { name: 'Primary Hover BG', variable: '--color-semantic-component-button-primary-hover-bg' },
            { name: 'Primary Active BG', variable: '--color-semantic-component-button-primary-active-bg' },
            { name: 'Primary Focus Ring', variable: '--color-semantic-component-button-primary-focus-ring' },
            { name: 'Primary Disabled BG', variable: '--color-semantic-component-button-primary-disabled-bg' },
            { name: 'Secondary Default BG', variable: '--color-semantic-component-button-secondary-default-bg' },
            { name: 'Secondary Default Text', variable: '--color-semantic-component-button-secondary-default-text' },
            { name: 'Secondary Default Border', variable: '--color-semantic-component-button-secondary-default-border' },
            { name: 'Secondary Hover BG', variable: '--color-semantic-component-button-secondary-hover-bg' },
            { name: 'Secondary Active BG', variable: '--color-semantic-component-button-secondary-active-bg' },
            { name: 'Secondary Focus Ring', variable: '--color-semantic-component-button-secondary-focus-ring' },
            { name: 'Ghost Default BG', variable: '--color-semantic-component-button-ghost-default-bg' },
            { name: 'Ghost Default Text', variable: '--color-semantic-component-button-ghost-default-text' },
            { name: 'Ghost Hover BG', variable: '--color-semantic-component-button-ghost-hover-bg' },
            { name: 'Ghost Active BG', variable: '--color-semantic-component-button-ghost-active-bg' },
            { name: 'Danger Default BG', variable: '--color-semantic-component-button-danger-default-bg' },
            { name: 'Danger Default Text', variable: '--color-semantic-component-button-danger-default-text' },
            { name: 'Danger Default Border', variable: '--color-semantic-component-button-danger-default-border' },
            { name: 'Danger Hover BG', variable: '--color-semantic-component-button-danger-hover-bg' },
            { name: 'Danger Active BG', variable: '--color-semantic-component-button-danger-active-bg' },
        ];
        return (
            <div>
                <h2 style={{ marginBottom: 30 }}>Button Component Colors</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {buttonColors.map((c) => (
                        <Swatch key={c.variable} name={c.name} variable={c.variable} />
                    ))}
                </div>
            </div>
        );
    },
};
