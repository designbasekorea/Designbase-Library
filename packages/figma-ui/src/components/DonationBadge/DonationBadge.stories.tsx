import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DonationBadge } from './DonationBadge';

const meta: Meta<typeof DonationBadge> = {
    title: 'Figma UI/DonationBadge',
    component: DonationBadge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        iconType: {
            control: { type: 'select' },
            options: ['heart', 'coffee'],
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary', 'danger', 'ghost'],
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Buy me a coffee',
        iconType: 'heart',
        size: 's',
        variant: 'tertiary',
        fullWidth: false,
        disabled: false,
    },
};

export const WithHeart: Story = {
    args: {
        text: '기부하기',
        iconType: 'heart',
        size: 'm',
    },
};

export const WithCoffee: Story = {
    args: {
        text: 'Buy me a coffee',
        iconType: 'coffee',
        size: 'm',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <DonationBadge text="작은 사이즈" iconType="heart" size="s" />
            <DonationBadge text="중간 사이즈" iconType="heart" size="m" />
            <DonationBadge text="큰 사이즈" iconType="heart" size="l" />
        </div>
    ),
};

export const IconTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <DonationBadge text="하트로 후원하기" iconType="heart" size="m" />
            <DonationBadge text="커피 한 잔 사주기" iconType="coffee" size="m" />
        </div>
    ),
};

export const InFooter: Story = {
    render: () => (
        <div style={{
            padding: '20px',
            background: 'var(--db-surface-base)',
            borderTop: '1px solid var(--db-border-base)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px'
        }}>
            <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>
                이 플러그인이 유용했나요?
            </span>
            <DonationBadge
                text="커피 한 잔 사주기"
                iconType="coffee"
                size="m"
            />
        </div>
    ),
};

export const CustomURL: Story = {
    args: {
        text: '후원하기',
        iconType: 'heart',
        size: 'm',
        donationUrl: 'https://buymeacoffee.com/designbase',
    },
};

export const WithCustomHandler: Story = {
    render: () => (
        <DonationBadge
            text="클릭 이벤트 테스트"
            iconType="heart"
            size="m"
            onClick={() => {
                alert('커스텀 클릭 핸들러 실행!');
            }}
        />
    ),
};

export const WithPrompt: Story = {
    args: {
        text: '커피 한 잔 사주기',
        iconType: 'heart',
        size: 'm',
        showPrompt: true,
        promptText: '도움이 되었다면 커피 한 잔 사주세요!',
    },
};

export const WithPromptAndI18n: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>프롬프트 텍스트 포함</h3>
                <DonationBadge
                    text={{ key: 'donation.buy_me_a_coffee' }}
                    iconType="heart"
                    size="m"
                    showPrompt={true}
                    promptText={{ key: 'donation.prompt' }}
                    t={(key) => {
                        const translations: Record<string, string> = {
                            'donation.buy_me_a_coffee': '커피 한 잔 사주기',
                            'donation.prompt': '도움이 되었다면 커피 한 잔 사주세요!'
                        };
                        return translations[key] || key;
                    }}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>프롬프트 없음</h3>
                <DonationBadge
                    text={{ key: 'donation.buy_me_a_coffee' }}
                    iconType="heart"
                    size="m"
                    showPrompt={false}
                    t={(key) => {
                        const translations: Record<string, string> = {
                            'donation.buy_me_a_coffee': '커피 한 잔 사주기',
                            'donation.prompt': '도움이 되었다면 커피 한 잔 사주세요!'
                        };
                        return translations[key] || key;
                    }}
                />
            </div>
        </div>
    ),
};

export const WithI18nKeys: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 없음)</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <DonationBadge
                        text={{ key: 'donation.buy_me_a_coffee' }}
                        iconType="coffee"
                        size="m"
                    />
                    <DonationBadge
                        text={{ key: 'donation.support_us' }}
                        iconType="heart"
                        size="m"
                    />
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 있음)</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <DonationBadge
                        text={{ key: 'donation.buy_me_a_coffee' }}
                        iconType="coffee"
                        size="m"
                        t={(key) => {
                            const translations: Record<string, string> = {
                                'donation.buy_me_a_coffee': '커피 한 잔 사주기',
                                'donation.support_us': '후원하기'
                            };
                            return translations[key] || key;
                        }}
                    />
                    <DonationBadge
                        text={{ key: 'donation.support_us' }}
                        iconType="heart"
                        size="m"
                        t={(key) => {
                            const translations: Record<string, string> = {
                                'donation.buy_me_a_coffee': '커피 한 잔 사주기',
                                'donation.support_us': '후원하기'
                            };
                            return translations[key] || key;
                        }}
                    />
                </div>
            </div>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Button Variants</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <DonationBadge text="Primary" iconType="heart" size="m" variant="primary" />
                    <DonationBadge text="Secondary" iconType="heart" size="m" variant="secondary" />
                    <DonationBadge text="Tertiary" iconType="heart" size="m" variant="tertiary" />
                    <DonationBadge text="Danger" iconType="heart" size="m" variant="danger" />
                    <DonationBadge text="Ghost" iconType="heart" size="m" variant="ghost" />
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Sizes</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <DonationBadge text="Small" iconType="heart" size="s" variant="secondary" />
                    <DonationBadge text="Medium" iconType="heart" size="m" variant="secondary" />
                    <DonationBadge text="Large" iconType="heart" size="l" variant="secondary" />
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Icon Types</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <DonationBadge text="Heart" iconType="heart" size="m" variant="secondary" />
                    <DonationBadge text="Coffee" iconType="coffee" size="m" variant="secondary" />
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>States</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <DonationBadge text="Normal" iconType="heart" size="m" variant="secondary" />
                    <DonationBadge text="Disabled" iconType="heart" size="m" variant="secondary" disabled />
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Full Width</h3>
                <div style={{ width: '300px' }}>
                    <DonationBadge text="Full Width Button" iconType="heart" size="m" variant="secondary" fullWidth />
                </div>
            </div>
        </div>
    ),
};

