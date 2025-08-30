import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from './index';

const meta: Meta = {
    title: 'Icons/Gallery',
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj;

export const AllIcons: Story = {
    render: () => {
        const iconNames = Object.keys(Icons).filter(name =>
            name.endsWith('Icon') && typeof Icons[name as keyof typeof Icons] === 'function'
        );

        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                gap: '16px',
                padding: '20px'
            }}>
                {iconNames.map((name) => {
                    const Icon = Icons[name as keyof typeof Icons] as React.ComponentType<any>;
                    return (
                        <div
                            key={name}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                backgroundColor: '#f9fafb'
                            }}
                        >
                            <Icon size={24} color="#374151" />
                            <code style={{
                                fontSize: '11px',
                                textAlign: 'center',
                                color: '#6b7280',
                                wordBreak: 'break-word'
                            }}>
                                {name}
                            </code>
                        </div>
                    );
                })}
            </div>
        );
    },
};

export const IconSizes: Story = {
    render: () => {
        const sizes = [16, 20, 24, 32, 48];
        const sampleIcons = ['SearchIcon', 'SettingsIcon', 'CheckIcon', 'CloseIcon', 'ArrowRightIcon'];

        return (
            <div style={{ padding: '20px' }}>
                <h3 style={{ marginBottom: '20px' }}>아이콘 크기별 미리보기</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {sizes.map(size => (
                        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{ minWidth: '60px', fontWeight: 500 }}>{size}px:</span>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                {sampleIcons.map(iconName => {
                                    const Icon = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
                                    return Icon ? (
                                        <div key={iconName} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                            <Icon size={size} color="#374151" />
                                            <span style={{ fontSize: '10px', color: '#6b7280' }}>{iconName}</span>
                                        </div>
                                    ) : null;
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};

// 색상별 아이콘 미리보기 (새로운 버전)
export const IconColorVariants: Story = {
    render: () => {
        const variants = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'muted', 'inverse'] as const;
        const sampleIcons = ['SearchIcon', 'SettingsIcon', 'CloseIcon', 'ArrowRightIcon'];

        return (
            <div style={{ padding: 20 }}>
                <h2 style={{ marginBottom: 30 }}>아이콘 색상별 미리보기</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {variants.map(variant => (
                        <div key={variant}>
                            <h3 style={{
                                marginBottom: 16,
                                textTransform: 'capitalize',
                                color: '#374151',
                                fontSize: 18,
                                fontWeight: 600
                            }}>
                                {variant}
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                                gap: '16px'
                            }}>
                                {sampleIcons.map(iconName => {
                                    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
                                    if (!IconComponent) {
                                        console.warn(`Icon component not found: ${iconName}`);
                                        return null;
                                    }
                                    return (
                                        <div key={iconName} style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            padding: 16,
                                            border: '1px solid #e5e7eb',
                                            borderRadius: 8,
                                            backgroundColor: '#ffffff'
                                        }}>
                                            <IconComponent size={24} variant={variant} />
                                            <div style={{
                                                marginTop: 8,
                                                fontSize: 11,
                                                textAlign: 'center',
                                                color: '#6b7280',
                                                fontFamily: 'monospace'
                                            }}>
                                                {iconName}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};

// 이전 버전과의 호환성을 위한 별칭
export const IconColors: Story = {
    ...IconColorVariants,
};
