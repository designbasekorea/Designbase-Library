import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Design System/Tokens',
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj;

export const ColorPalette: Story = {
    render: () => {
        const colorGroups = [
            {
                name: 'Neutral',
                colors: ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100']
            },
            {
                name: 'Blue',
                colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
            },
            {
                name: 'Green',
                colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
            },
            {
                name: 'Red',
                colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
            },
            {
                name: 'Orange',
                colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
            },
            {
                name: 'Yellow',
                colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
            },
            {
                name: 'Teal',
                colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
            },
            {
                name: 'Purple',
                colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
            }
        ];

        return (
            <div style={{ padding: 20 }}>
                <h2 style={{ marginBottom: 30 }}>Foundation Colors</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                    {colorGroups.map(group => (
                        <div key={group.name}>
                            <h3 style={{ marginBottom: 16, color: '#374151' }}>{group.name}</h3>
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                {group.colors.map(shade => (
                                    <div key={shade} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div
                                            style={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: 8,
                                                backgroundColor: `var(--color-foundation-${group.name.toLowerCase()}-${shade})`,
                                                border: '1px solid #e5e7eb',
                                                marginBottom: 8
                                            }}
                                        />
                                        <span style={{ fontSize: 12, fontWeight: 500 }}>{shade}</span>
                                        <span style={{ fontSize: 10, color: '#6b7280' }}>
                                            {getComputedStyle(document.documentElement)
                                                .getPropertyValue(`--color-foundation-${group.name.toLowerCase()}-${shade}`)
                                                .trim()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};

export const SemanticColors: Story = {
    render: () => {
        const semanticColors = [
            // Success Colors
            { name: 'Success Foreground', variable: '--color-semantic-success-foreground' },
            { name: 'Success Background', variable: '--color-semantic-success-background' },
            // Warning Colors
            { name: 'Warning Foreground', variable: '--color-semantic-warning-foreground' },
            { name: 'Warning Background', variable: '--color-semantic-warning-background' },
            // Error Colors
            { name: 'Error Foreground', variable: '--color-semantic-error-foreground' },
            { name: 'Error Background', variable: '--color-semantic-error-background' },
            // Info Colors
            { name: 'Info Foreground', variable: '--color-semantic-info-foreground' },
            { name: 'Info Background', variable: '--color-semantic-info-background' },
            // Text Colors
            { name: 'Primary Text', variable: '--color-semantic-text-primary' },
            { name: 'Secondary Text', variable: '--color-semantic-text-secondary' },
            { name: 'Muted Text', variable: '--color-semantic-text-muted' },
            { name: 'Link', variable: '--color-semantic-text-link' },
        ];

        return (
            <div style={{ padding: 20 }}>
                <h2 style={{ marginBottom: 30 }}>Semantic Colors</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    {semanticColors.map(color => (
                        <div key={color.name} style={{
                            padding: 16,
                            border: '1px solid #e5e7eb',
                            borderRadius: 8,
                            backgroundColor: '#f9fafb'
                        }}>
                            <div style={{
                                width: '100%',
                                height: 40,
                                borderRadius: 4,
                                backgroundColor: `var(${color.variable})`,
                                marginBottom: 8,
                                border: '1px solid #d1d5db'
                            }} />
                            <div style={{ fontWeight: 500, marginBottom: 4 }}>{color.name}</div>
                            <div style={{ fontSize: 12, color: '#6b7280', fontFamily: 'monospace' }}>
                                {color.variable}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};

export const ButtonColors: Story = {
    render: () => {
        const buttonColors = [
            // Primary Button
            { name: 'Primary Button BG', variable: '--color-semantic-component-button-primary-bg' },
            { name: 'Primary Button Hover', variable: '--color-semantic-component-button-primary-bgHover' },
            { name: 'Primary Button Text', variable: '--color-semantic-component-button-primary-text' },
            // Secondary Button
            { name: 'Secondary Button BG', variable: '--color-semantic-component-button-secondary-bg' },
            { name: 'Secondary Button Hover', variable: '--color-semantic-component-button-secondary-bgHover' },
            { name: 'Secondary Button Text', variable: '--color-semantic-component-button-secondary-text' },
            { name: 'Secondary Button Border', variable: '--color-semantic-component-button-secondary-border' },
            // Tertiary Button
            { name: 'Tertiary Button BG', variable: '--color-semantic-component-button-tertiary-bg' },
            { name: 'Tertiary Button Hover', variable: '--color-semantic-component-button-tertiary-bgHover' },
            { name: 'Tertiary Button Text', variable: '--color-semantic-component-button-tertiary-text' },
            { name: 'Tertiary Button Border', variable: '--color-semantic-component-button-tertiary-border' },
            // Danger Button
            { name: 'Danger Button BG', variable: '--color-semantic-component-button-danger-bg' },
            { name: 'Danger Button Hover', variable: '--color-semantic-component-button-danger-bgHover' },
            { name: 'Danger Button Text', variable: '--color-semantic-component-button-danger-text' },
        ];

        return (
            <div style={{ padding: 20 }}>
                <h2 style={{ marginBottom: 30 }}>Button Component Colors</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    {buttonColors.map(color => (
                        <div key={color.name} style={{
                            padding: 16,
                            border: '1px solid #e5e7eb',
                            borderRadius: 8,
                            backgroundColor: '#f9fafb'
                        }}>
                            <div style={{
                                width: '100%',
                                height: 40,
                                borderRadius: 4,
                                backgroundColor: `var(${color.variable})`,
                                marginBottom: 8,
                                border: '1px solid #d1d5db'
                            }} />
                            <div style={{ fontWeight: 500, marginBottom: 4 }}>{color.name}</div>
                            <div style={{ fontSize: 12, color: '#6b7280', fontFamily: 'monospace' }}>
                                {color.variable}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};

export const Spacing: Story = {
    render: () => {
        const spacingValues = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64];

        return (
            <div style={{ padding: 20 }}>
                <h2 style={{ marginBottom: 30 }}>Spacing Scale</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {spacingValues.map(value => (
                        <div key={value} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                            <span style={{ minWidth: 40, fontWeight: 500 }}>{value}:</span>
                            <div
                                style={{
                                    width: value * 4,
                                    height: 20,
                                    backgroundColor: '#3b82f6',
                                    borderRadius: 4
                                }}
                            />
                            <span style={{ fontSize: 12, color: '#6b7280' }}>
                                {value * 4}px ({value * 0.25}rem)
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};

export const Typography: Story = {
    render: () => {
        const typographyStyles = [
            { name: 'Heading 1', size: '2.25rem', weight: '700', lineHeight: '1.2' },
            { name: 'Heading 2', size: '1.875rem', weight: '600', lineHeight: '1.3' },
            { name: 'Heading 3', size: '1.5rem', weight: '600', lineHeight: '1.4' },
            { name: 'Heading 4', size: '1.25rem', weight: '500', lineHeight: '1.5' },
            { name: 'Body Large', size: '1.125rem', weight: '400', lineHeight: '1.6' },
            { name: 'Body', size: '1rem', weight: '400', lineHeight: '1.6' },
            { name: 'Body Small', size: '0.875rem', weight: '400', lineHeight: '1.5' },
            { name: 'Caption', size: '0.75rem', weight: '400', lineHeight: '1.4' },
        ];

        return (
            <div style={{ padding: 20 }}>
                <h2 style={{ marginBottom: 30 }}>Typography Scale</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {typographyStyles.map(style => (
                        <div key={style.name} style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: 16,
                            padding: 8,
                            border: '1px solid #e5e7eb',
                            borderRadius: 4
                        }}>
                            <span style={{ minWidth: 120, fontWeight: 500, fontSize: '0.875rem' }}>
                                {style.name}:
                            </span>
                            <span style={{
                                fontSize: style.size,
                                fontWeight: style.weight,
                                lineHeight: style.lineHeight,
                                color: '#111827'
                            }}>
                                The quick brown fox jumps over the lazy dog
                            </span>
                            <span style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace' }}>
                                {style.size} / {style.weight} / {style.lineHeight}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};

export const SemanticSpacing: Story = {
    render: () => {
        const semanticSpacing = [
            // Margin
            { name: 'Margin XS', variable: '--spacing-semantic-margin-xs' },
            { name: 'Margin S', variable: '--spacing-semantic-margin-s' },
            { name: 'Margin M', variable: '--spacing-semantic-margin-m' },
            { name: 'Margin L', variable: '--spacing-semantic-margin-l' },
            { name: 'Margin XL', variable: '--spacing-semantic-margin-xl' },
            { name: 'Margin XXL', variable: '--spacing-semantic-margin-xxl' },
            // Padding
            { name: 'Padding XXS', variable: '--spacing-semantic-padding-xxs' },
            { name: 'Padding XS', variable: '--spacing-semantic-padding-xs' },
            { name: 'Padding S', variable: '--spacing-semantic-padding-s' },
            { name: 'Padding M', variable: '--spacing-semantic-padding-m' },
            { name: 'Padding L', variable: '--spacing-semantic-padding-l' },
            { name: 'Padding XL', variable: '--spacing-semantic-padding-xl' },
            // Gap
            { name: 'Gap XS', variable: '--spacing-semantic-gap-xs' },
            { name: 'Gap S', variable: '--spacing-semantic-gap-s' },
            { name: 'Gap M', variable: '--spacing-semantic-gap-m' },
            { name: 'Gap L', variable: '--spacing-semantic-gap-l' },
            { name: 'Gap XL', variable: '--spacing-semantic-gap-xl' },
        ];

        return (
            <div style={{ padding: 20 }}>
                <h2 style={{ marginBottom: 30 }}>Semantic Spacing</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    {semanticSpacing.map(spacing => (
                        <div key={spacing.name} style={{
                            padding: 16,
                            border: '1px solid #e5e7eb',
                            borderRadius: 8,
                            backgroundColor: '#f9fafb'
                        }}>
                            <div style={{
                                width: '100%',
                                height: 40,
                                borderRadius: 4,
                                backgroundColor: '#e5e7eb',
                                marginBottom: 8,
                                border: '1px solid #d1d5db',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 12,
                                color: '#6b7280'
                            }}>
                                {spacing.name}
                            </div>
                            <div style={{ fontWeight: 500, marginBottom: 4 }}>{spacing.name}</div>
                            <div style={{ fontSize: 12, color: '#6b7280', fontFamily: 'monospace' }}>
                                {spacing.variable}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};
