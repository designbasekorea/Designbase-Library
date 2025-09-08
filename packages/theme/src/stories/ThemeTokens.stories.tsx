import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Theme',
} satisfies Meta;

export default meta;

function VarSwatch({ label, cssVar }: { label: string; cssVar: string }) {
    const ref = React.useRef<HTMLDivElement>(null);
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        if (!ref.current) return;
        const v = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
        setValue(v);
    }, [cssVar]);

    return (
        <div
            ref={ref}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid var(--db-border-muted)',
                background: 'var(--db-bg-secondary)',
                color: 'var(--db-text-primary)',
                padding: '8px 12px',
                borderRadius: '8px',
                fontFamily: 'var(--db-font-primary)'
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600 }}>{label}</span>
                <code style={{ opacity: 0.8 }}>{cssVar}</code>
            </div>
            <div style={{ opacity: 0.9 }}>{value || '—'}</div>
        </div>
    );
}

type Story = StoryObj<typeof meta>;

export const Spacing: Story = {
    render: () => {
        const paddings = ['--db-padding-xxs', '--db-padding-xs', '--db-padding-s', '--db-padding-m', '--db-padding-l', '--db-padding-xl'];
        const margins = ['--db-margin-xs', '--db-margin-s', '--db-margin-m', '--db-margin-l', '--db-margin-xl', '--db-margin-xxl'];
        const gaps = ['--db-gap-xs', '--db-gap-s', '--db-gap-m', '--db-gap-l', '--db-gap-xl'];

        return (
            <div style={{ display: 'grid', gap: '16px', padding: '16px' }}>
                <h3 style={{ margin: 0, color: 'var(--db-text-primary)' }}>Padding</h3>
                <div style={{ display: 'grid', gap: '8px' }}>
                    {paddings.map((v) => (
                        <div key={v} style={{
                            border: '1px dashed var(--db-border-primary)',
                            borderRadius: '8px',
                            background: 'var(--db-bg-primary)'
                        }}>
                            <div style={{ padding: `var(${v})`, background: 'var(--db-bg-secondary)' }}>
                                <VarSwatch label={v.replace('--db-', '')} cssVar={v} />
                            </div>
                        </div>
                    ))}
                </div>

                <h3 style={{ margin: 0, color: 'var(--db-text-primary)' }}>Margin</h3>
                <div>
                    {margins.map((v) => (
                        <div key={v} style={{ marginBottom: `var(${v})` }}>
                            <VarSwatch label={v.replace('--db-', '')} cssVar={v} />
                        </div>
                    ))}
                </div>

                <h3 style={{ margin: 0, color: 'var(--db-text-primary)' }}>Gap</h3>
                <div style={{ display: 'grid', gap: '12px' }}>
                    {gaps.map((v) => (
                        <div key={v}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 32px)', gap: `var(${v})` }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} style={{ width: 32, height: 24, background: 'var(--db-blue-400)', borderRadius: 4 }} />
                                ))}
                            </div>
                            <div style={{ marginTop: 8 }}>
                                <VarSwatch label={v.replace('--db-', '')} cssVar={v} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export const Radius: Story = {
    render: () => {
        const radii = [
            '--db-radius-none', '--db-radius-sm', '--db-radius-base', '--db-radius-md', '--db-radius-lg', '--db-radius-xl', '--db-radius-2xl', '--db-radius-3xl', '--db-radius-full',
            '--db-radius-btn-sm', '--db-radius-btn-md', '--db-radius-btn-lg', '--db-radius-btn-pill',
            '--db-radius-input-sm', '--db-radius-input-md', '--db-radius-input-lg',
            '--db-radius-card-sm', '--db-radius-card-md', '--db-radius-card-lg',
            '--db-radius-action-sm', '--db-radius-action-md', '--db-radius-action-lg', '--db-radius-action-pill'
        ];
        return (
            <div style={{ display: 'grid', gap: 16, padding: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
                    {radii.map((v) => (
                        <div key={v} style={{ display: 'grid', gap: 8 }}>
                            <div style={{ width: '100%', height: 56, background: 'var(--db-bg-secondary)', border: '1px solid var(--db-border-primary)', borderRadius: `var(${v})` }} />
                            <VarSwatch label={v.replace('--db-', '')} cssVar={v} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export const Colors: Story = {
    render: () => {
        const items = [
            ['Text', ['--db-text-primary', '--db-text-secondary', '--db-text-muted', '--db-text-disabled', '--db-text-inverse', '--db-text-link', '--db-text-link-hover', '--db-text-success', '--db-text-warning', '--db-text-error']],
            ['Background', ['--db-bg-primary', '--db-bg-secondary', '--db-bg-tertiary', '--db-bg-inverse', '--db-bg-success', '--db-bg-warning', '--db-bg-error']],
            ['Border', ['--db-border-primary', '--db-border-secondary', '--db-border-muted', '--db-border-focus']]
        ] as const;
        return (
            <div style={{ display: 'grid', gap: 16, padding: 16 }}>
                {items.map(([title, vars]) => (
                    <div key={title} style={{ display: 'grid', gap: 8 }}>
                        <h3 style={{ margin: 0, color: 'var(--db-text-primary)' }}>{title}</h3>
                        <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                            {vars.map((v) => (
                                <div key={v} style={{ border: '1px solid var(--db-border-muted)', borderRadius: 8, overflow: 'hidden' }}>
                                    <div style={{ height: 56, background: `var(${v})` }} />
                                    <div style={{ padding: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--db-text-primary)' }}>{v.replace('--db-', '')}</span>
                                        <code style={{ opacity: 0.8 }}>{v}</code>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
};

export const Typography: Story = {
    render: () => {
        const sizes = ['--db-text-xs', '--db-text-sm', '--db-text-base', '--db-text-lg', '--db-text-xl', '--db-text-2xl', '--db-text-3xl', '--db-text-4xl'];
        const weights = ['--db-weight-light', '--db-weight-normal', '--db-weight-medium', '--db-weight-semibold', '--db-weight-bold'];
        return (
            <div style={{ display: 'grid', gap: 16, padding: 16, fontFamily: 'var(--db-font-primary)', color: 'var(--db-text-primary)' }}>
                <div>
                    <h3 style={{ margin: 0 }}>Font Sizes</h3>
                    <div style={{ display: 'grid', gap: 8 }}>
                        {sizes.map((v) => (
                            <div key={v} style={{ fontSize: `var(${v})`, lineHeight: 1.5 }}>
                                The quick brown fox jumps over the lazy dog — <code>{v}</code>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 style={{ margin: 0 }}>Font Weights</h3>
                    <div style={{ display: 'grid', gap: 8 }}>
                        {weights.map((v) => (
                            <div key={v} style={{ fontWeight: `var(${v})` }}>
                                The quick brown fox jumps over the lazy dog — <code>{v}</code>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};


