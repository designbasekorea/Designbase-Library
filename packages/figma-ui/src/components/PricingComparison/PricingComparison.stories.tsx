import type { Meta, StoryObj } from '@storybook/react';
import { PricingComparison } from './PricingComparison';

const meta: Meta<typeof PricingComparison> = {
    title: 'Figma UI/PricingComparison',
    component: PricingComparison,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        features: {
            control: { type: 'object' },
        },
        pricing: {
            control: { type: 'object' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        paymentType: 'subscription',
        t: (key: string) => {
            const translations: Record<string, string> = {
                monthlyBilling: '월간 결제',
                yearlyBilling: '연간 결제',
                save10Percent: '10% 절약',
                feature: '기능',
                free: 'Free',
                freePrice: '$0',
                pro: 'Pro',
                recommended: '추천',
                perMonth: '월',
                perYear: '년',
            };
            return translations[key] || key;
        },
    },
};

export const CustomFeatures: Story = {
    args: {
        features: [
            { name: '사용 제한', free: '일일 20회', pro: '무제한' },
            { name: '고급 기능', free: false, pro: true },
            { name: '우선 지원', free: false, pro: true },
            { name: 'API 접근', free: false, pro: true },
        ],
        pricing: {
            monthly: 5,
            yearly: 50,
        },
        t: (key: string) => {
            const translations: Record<string, string> = {
                monthlyBilling: '월간 결제',
                yearlyBilling: '연간 결제',
                feature: '기능',
                free: 'Free',
                freePrice: '$0',
                pro: 'Pro',
                recommended: '추천',
                perMonth: '월',
                perYear: '년',
            };
            return translations[key] || key;
        },
    },
};

export const Lifetime: Story = {
    args: {
        paymentType: 'lifetime',
        features: [
            { name: '사용 제한', free: '일일 제한', pro: '무제한' },
            { name: '모든 주제 사용', free: false, pro: true },
            { name: '최대 선택 제한', free: '최대 5개', pro: '최대 30개' },
            { name: '더미 개수', free: '1,400개', pro: '4,400개 +' },
            { name: '커스텀 숫자 사용', free: false, pro: true },
        ],
        pricing: {
            lifetime: 50,
        },
        t: (key: string) => {
            const translations: Record<string, string> = {
                feature: '기능',
                free: 'Free',
                freePrice: '$0',
                pro: 'Pro',
                recommended: '추천',
                lifetimeAccess: '평생 이용',
                oneTimePaymentLifetime: 'One-time payment for lifetime access!',
            };
            return translations[key] || key;
        },
    },
};

export const English: Story = {
    args: {
        paymentType: 'subscription',
        features: [
            { name: 'Usage Limit', free: 'Daily Limit', pro: 'Unlimited' },
            { name: 'All Themes', free: false, pro: true },
            { name: 'Max Selection', free: 'Max 5', pro: 'Max 30' },
            { name: 'Dummy Count', free: '1,400', pro: '4,400+' },
            { name: 'Custom Numbers', free: false, pro: true },
        ],
        pricing: {
            monthly: 2,
            yearly: 21.6,
        },
        t: (key: string) => {
            const translations: Record<string, string> = {
                monthlyBilling: 'Monthly Billing',
                yearlyBilling: 'Yearly Billing',
                feature: 'Feature',
                free: 'Free',
                freePrice: '$0',
                pro: 'Pro',
                recommended: 'Recommended',
                perMonth: 'month',
                perYear: 'year',
            };
            return translations[key] || key;
        },
    },
};

export const EnglishLifetime: Story = {
    args: {
        paymentType: 'lifetime',
        features: [
            { name: 'Usage Limit', free: 'Daily Limit', pro: 'Unlimited' },
            { name: 'All Themes', free: false, pro: true },
            { name: 'Max Selection', free: 'Max 5', pro: 'Max 30' },
            { name: 'Dummy Count', free: '1,400', pro: '4,400+' },
            { name: 'Custom Numbers', free: false, pro: true },
        ],
        pricing: {
            lifetime: 50,
        },
        t: (key: string) => {
            const translations: Record<string, string> = {
                feature: 'Feature',
                free: 'Free',
                freePrice: '$0',
                pro: 'Pro',
                recommended: 'Recommended',
                lifetimeAccess: 'Lifetime Access',
                oneTimePaymentLifetime: 'One-time payment for lifetime access!',
            };
            return translations[key] || key;
        },
    },
};
