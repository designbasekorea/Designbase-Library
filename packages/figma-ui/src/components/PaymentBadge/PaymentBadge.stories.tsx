import type { Meta, StoryObj } from '@storybook/react';
import { PaymentBadge } from './PaymentBadge';

const meta: Meta<typeof PaymentBadge> = {
    title: 'Figma UI/PaymentBadge',
    component: PaymentBadge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isActive: {
            control: { type: 'boolean' },
            description: '유료 계정 여부',
        },
        isLoading: {
            control: { type: 'boolean' },
            description: '로딩 상태',
        },
        onClick: {
            action: 'clicked',
            description: '클릭 핸들러',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Free: Story = {
    args: {
        isActive: false,
        isLoading: false,
        onClick: () => console.log('Badge clicked'),
        t: (key: string) => {
            const translations: Record<string, string> = {
                usingFree: '무료 사용',
                proUser: '프로 계정',
            };
            return translations[key] || key;
        },
    },
};

export const Pro: Story = {
    args: {
        isActive: true,
        isLoading: false,
        onClick: () => console.log('Badge clicked'),
        t: (key: string) => {
            const translations: Record<string, string> = {
                usingFree: '무료 사용',
                proUser: '프로 계정',
            };
            return translations[key] || key;
        },
    },
};

export const Loading: Story = {
    args: {
        isActive: false,
        isLoading: true,
        onClick: () => console.log('Badge clicked'),
    },
};

export const CustomText: Story = {
    args: {
        isActive: true,
        isLoading: false,
        text: '프리미엄 플랜',
        onClick: () => console.log('Badge clicked'),
    },
};

export const Interactive: Story = {
    render: () => {
        const [isActive, setIsActive] = React.useState(false);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                <PaymentBadge
                    isActive={isActive}
                    onClick={() => setIsActive(!isActive)}
                    t={(key: string) => {
                        const translations: Record<string, string> = {
                            usingFree: '무료 사용',
                            proUser: '프로 계정',
                        };
                        return translations[key] || key;
                    }}
                />
                <p style={{ fontSize: '14px', color: '#666' }}>
                    클릭하여 상태 변경: {isActive ? '프로' : '무료'}
                </p>
            </div>
        );
    },
};

import React from 'react';

