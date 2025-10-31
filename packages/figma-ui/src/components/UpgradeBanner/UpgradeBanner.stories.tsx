import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { UpgradeBanner } from './UpgradeBanner';

const meta: Meta<typeof UpgradeBanner> = {
    title: 'Figma UI/UpgradeBanner',
    component: UpgradeBanner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isLoading: {
            control: { type: 'boolean' },
        },
        onClick: {
            action: 'clicked',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onClick: () => console.log('Upgrade clicked'),
        isLoading: false,
        t: (key: string) => {
            const translations: Record<string, string> = {
                'banner.upgrade_title': '프로로 업그레이드하세요',
                'banner.upgrade_description': '무제한 기능을 사용하고 더 많은 혜택을 누리세요.',
                'banner.upgrade_button': '지금 업그레이드',
            };
            return translations[key] || key;
        },
    },
};

export const Loading: Story = {
    args: {
        onClick: () => console.log('Upgrade clicked'),
        isLoading: true,
        t: (key: string) => {
            const translations: Record<string, string> = {
                'banner.upgrade_title': '프로로 업그레이드하세요',
                'banner.upgrade_description': '무제한 기능을 사용하고 더 많은 혜택을 누리세요.',
                'banner.upgrade_button': '지금 업그레이드',
            };
            return translations[key] || key;
        },
    },
};

export const CustomContent: Story = {
    args: {
        onClick: () => console.log('Upgrade clicked'),
        isLoading: false,
        title: '프리미엄 플랜으로 업그레이드',
        description: '모든 고급 기능과 우선 지원을 받으세요.',
        buttonText: '프리미엄 시작하기',
        t: (key: string) => key,
    },
};

export const English: Story = {
    args: {
        onClick: () => console.log('Upgrade clicked'),
        isLoading: false,
        title: 'Upgrade to Pro',
        description: 'Unlock unlimited features and get more benefits.',
        buttonText: 'Upgrade Now',
        t: (key: string) => key,
    },
};

export const LongText: Story = {
    args: {
        onClick: () => console.log('Upgrade clicked'),
        isLoading: false,
        title: '프로 플랜으로 업그레이드하여 모든 기능을 사용하세요',
        description: '무제한 사용량, 고급 기능, 우선 지원, 그리고 더 많은 혜택을 받으실 수 있습니다.',
        buttonText: '지금 바로 업그레이드하기',
        t: (key: string) => key,
    },
};

export const WithI18nKeys: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 없음)</h3>
                <UpgradeBanner
                    onClick={() => console.log('Upgrade clicked')}
                    title={{ key: 'banner.upgrade_title' }}
                    description={{ key: 'banner.upgrade_description' }}
                    buttonText={{ key: 'banner.upgrade_button' }}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 있음)</h3>
                <UpgradeBanner
                    onClick={() => console.log('Upgrade clicked')}
                    title={{ key: 'banner.upgrade_title' }}
                    description={{ key: 'banner.upgrade_description' }}
                    buttonText={{ key: 'banner.upgrade_button' }}
                    t={(key) => {
                        const translations: Record<string, string> = {
                            'banner.upgrade_title': '프로로 업그레이드하세요',
                            'banner.upgrade_description': '무제한 기능을 사용하고 더 많은 혜택을 누리세요.',
                            'banner.upgrade_button': '지금 업그레이드'
                        };
                        return translations[key] || key;
                    }}
                />
            </div>
        </div>
    ),
};

export const ClickableVariant: Story = {
    args: {
        onClick: () => console.log('Upgrade clicked'),
        variant: 'clickable',
        isLoading: false,
        t: (key: string) => {
            const translations: Record<string, string> = {
                'banner.upgrade_title': '프로로 업그레이드하세요',
                'banner.upgrade_description': '무제한 기능을 사용하고 더 많은 혜택을 누리세요.',
                'banner.upgrade_button': '지금 업그레이드',
            };
            return translations[key] || key;
        },
    },
};

export const WithGradient: Story = {
    args: {
        onClick: () => console.log('Upgrade clicked'),
        variant: 'clickable',
        useGradient: true,
        gradientScheme: 'primary',
        gradientTone: 'light',
        gradientAnimated: true,
        t: (key: string) => {
            const translations: Record<string, string> = {
                'banner.upgrade_title': '프로로 업그레이드하세요',
                'banner.upgrade_description': '무제한 기능을 사용하고 더 많은 혜택을 누리세요.',
                'banner.upgrade_button': '지금 업그레이드',
            };
            return translations[key] || key;
        },
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>버튼 타입 (기본)</h3>
                <UpgradeBanner
                    onClick={() => console.log('Upgrade clicked')}
                    variant="button"
                    t={(key: string) => {
                        const translations: Record<string, string> = {
                            'banner.upgrade_title': '프로로 업그레이드하세요',
                            'banner.upgrade_description': '무제한 기능을 사용하고 더 많은 혜택을 누리세요.',
                            'banner.upgrade_button': '지금 업그레이드',
                        };
                        return translations[key] || key;
                    }}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>클릭 가능한 타입</h3>
                <UpgradeBanner
                    onClick={() => console.log('Upgrade clicked')}
                    variant="clickable"
                    t={(key: string) => {
                        const translations: Record<string, string> = {
                            'banner.upgrade_title': '프로로 업그레이드하세요',
                            'banner.upgrade_description': '무제한 기능을 사용하고 더 많은 혜택을 누리세요.',
                            'banner.upgrade_button': '지금 업그레이드',
                        };
                        return translations[key] || key;
                    }}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>그라데이션 배경 (밝은 톤)</h3>
                <UpgradeBanner
                    onClick={() => console.log('Upgrade clicked')}
                    variant="clickable"
                    useGradient={true}
                    gradientScheme="primary"
                    gradientTone="light"
                    gradientAnimated={true}
                    t={(key: string) => {
                        const translations: Record<string, string> = {
                            'banner.upgrade_title': '프로로 업그레이드하세요',
                            'banner.upgrade_description': '무제한 기능을 사용하고 더 많은 혜택을 누리세요.',
                            'banner.upgrade_button': '지금 업그레이드',
                        };
                        return translations[key] || key;
                    }}
                />
            </div>
        </div>
    ),
};
