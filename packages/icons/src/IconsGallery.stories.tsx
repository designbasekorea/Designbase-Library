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
        const [currentTheme, setCurrentTheme] = React.useState('light');
        const iconNames = Object.keys(Icons).filter(name =>
            name.endsWith('Icon') && typeof Icons[name as keyof typeof Icons] === 'function'
        );

        // Storybook의 실제 테마 상태 감지
        React.useEffect(() => {
            const checkTheme = () => {
                const htmlElement = document.documentElement;
                const theme = htmlElement.getAttribute('data-theme') || 'light';
                setCurrentTheme(theme);
            };

            // 초기 테마 확인
            checkTheme();

            // MutationObserver로 테마 변경 감지
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                        checkTheme();
                    }
                });
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['data-theme']
            });

            return () => observer.disconnect();
        }, []);


        return (
            <div style={{ padding: '20px' }}>
                {/* 헤더 영역 */}
                <div style={{
                    marginBottom: '24px',
                    padding: '16px',
                    backgroundColor: currentTheme === 'light' ? '#f8fafc' : '#1e293b',
                    borderRadius: '12px',
                    border: `1px solid ${currentTheme === 'light' ? '#e2e8f0' : '#334155'}`
                }}>
                    <div>
                        <h2 style={{
                            margin: '0 0 8px 0',
                            color: currentTheme === 'light' ? '#1e293b' : '#f1f5f9',
                            fontSize: '24px',
                            fontWeight: '600'
                        }}>
                            모든 아이콘 ({iconNames.length}개)
                        </h2>
                        <p style={{
                            margin: '0',
                            color: currentTheme === 'light' ? '#64748b' : '#94a3b8',
                            fontSize: '14px'
                        }}>
                            현재 테마: {currentTheme === 'light' ? '라이트' : '다크'}
                        </p>
                    </div>
                </div>

                {/* 아이콘 그리드 */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                    gap: '16px'
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
                                    padding: '16px',
                                    border: `1px solid ${currentTheme === 'light' ? '#f3f6f9' : '#2f3845'}`,
                                    borderRadius: '8px',
                                    backgroundColor: currentTheme === 'light' ? '#ffffff' : '#202832',
                                    transition: 'all 0.2s ease',
                                    boxShadow: currentTheme === 'light' ? '0 1px 3px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                <Icon size={24} variant="primary" />
                                <code style={{
                                    fontSize: '11px',
                                    textAlign: 'center',
                                    color: currentTheme === 'light' ? '#323841' : '#e4e9f0',
                                    wordBreak: 'break-word',
                                    fontFamily: 'monospace'
                                }}>
                                    {name}
                                </code>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    },
};

export const IconSizes: Story = {
    render: () => {
        const [currentTheme, setCurrentTheme] = React.useState('light');
        const sizes = [16, 20, 24, 32, 48];
        const sampleIcons = ['SearchIcon', 'SettingsIcon', 'CheckIcon', 'CloseIcon', 'ArrowRightIcon'];

        // Storybook의 실제 테마 상태 감지
        React.useEffect(() => {
            const checkTheme = () => {
                const htmlElement = document.documentElement;
                const theme = htmlElement.getAttribute('data-theme') || 'light';
                setCurrentTheme(theme);
            };

            // 초기 테마 확인
            checkTheme();

            // MutationObserver로 테마 변경 감지
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                        checkTheme();
                    }
                });
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['data-theme']
            });

            return () => observer.disconnect();
        }, []);

        return (
            <div style={{ padding: '20px' }}>
                <h3 style={{
                    marginBottom: '20px',
                    color: currentTheme === 'light' ? '#1e293b' : '#f1f5f9'
                }}>아이콘 크기별 미리보기</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {sizes.map(size => (
                        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{
                                minWidth: '60px',
                                fontWeight: 500,
                                color: currentTheme === 'light' ? '#374151' : '#e2e8f0'
                            }}>{size}px:</span>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                {sampleIcons.map(iconName => {
                                    const Icon = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
                                    return Icon ? (
                                        <div key={iconName} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                            <Icon size={size} color={currentTheme === 'light' ? '#374151' : '#e2e8f0'} />
                                            <span style={{
                                                fontSize: '10px',
                                                color: currentTheme === 'light' ? '#6b7280' : '#94a3b8'
                                            }}>{iconName}</span>
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

// 색상별 아이콘 미리보기
export const IconColorVariants: Story = {
    render: () => {
        const [currentTheme, setCurrentTheme] = React.useState('light');
        const variants = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'muted', 'inverse'] as const;
        const sampleIcons = ['SearchIcon', 'SettingsIcon', 'CloseIcon', 'ArrowRightIcon'];

        // Storybook의 실제 테마 상태 감지
        React.useEffect(() => {
            const checkTheme = () => {
                const htmlElement = document.documentElement;
                const theme = htmlElement.getAttribute('data-theme') || 'light';
                setCurrentTheme(theme);
            };

            // 초기 테마 확인
            checkTheme();

            // MutationObserver로 테마 변경 감지
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                        checkTheme();
                    }
                });
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['data-theme']
            });

            return () => observer.disconnect();
        }, []);

        return (
            <div style={{ padding: 20 }}>
                <h2 style={{
                    marginBottom: 30,
                    color: currentTheme === 'light' ? '#1e293b' : '#f1f5f9'
                }}>아이콘 색상별 미리보기</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {variants.map(variant => (
                        <div key={variant}>
                            <h3 style={{
                                marginBottom: 16,
                                textTransform: 'capitalize',
                                color: currentTheme === 'light' ? '#374151' : '#e2e8f0',
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
                                            border: `1px solid ${currentTheme === 'light' ? '#e5e7eb' : '#475569'}`,
                                            borderRadius: 8,
                                            backgroundColor: currentTheme === 'light' ? '#ffffff' : '#334155'
                                        }}>
                                            <IconComponent size={24} variant={variant} />
                                            <div style={{
                                                marginTop: 8,
                                                fontSize: 11,
                                                textAlign: 'center',
                                                color: currentTheme === 'light' ? '#6b7280' : '#94a3b8',
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


