import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { PageLicense } from './PageLicense';

const meta: Meta<typeof PageLicense> = {
    title: 'Figma UI/PageLicense',
    component: PageLicense,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: { type: 'select' },
            options: ['PAID', 'FREE', 'UNPAID'],
        },
        onClose: {
            action: 'closed',
        },
        onLicenseSubmit: {
            action: 'submitted',
        },
        setPaymentStatus: {
            action: 'paymentStatusChanged',
        },
        setUsageCount: {
            action: 'usageCountChanged',
        },
        setShowLicensePage: {
            action: 'showLicensePageChanged',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FreeUser: Story = {
    args: {
        status: 'FREE',
        usageCount: 5,
        onClose: () => console.log('Page closed'),
        onLicenseSubmit: async (licenseKey: string) => {
            console.log('License submitted:', licenseKey);
            await new Promise(resolve => setTimeout(resolve, 2000));
        },
        setPaymentStatus: (status: 'PAID' | 'FREE' | 'UNPAID') => console.log('Payment status:', status),
        setUsageCount: (count: number) => console.log('Usage count:', count),
        setShowLicensePage: (show: boolean) => console.log('Show license page:', show),
        licenseKey: '',
        paymentPageUrl: 'https://designbasekorea.lemonsqueezy.com/buy/fc202a67-6f1a-4a61-9242-c643b282e230',
        pricingFeatures: [
            { name: '사용 제한', free: '일일 제한', pro: '무제한' },
            { name: '모든 주제 사용', free: false, pro: true },
            { name: '최대 선택 제한', free: '최대 5개', pro: '최대 30개' },
            { name: '더미 개수', free: '1,400개', pro: '4,400개 +' },
            { name: '커스텀 숫자 사용', free: false, pro: true },
        ],
        pricing: {
            monthly: 2,
            yearly: 21.6,
        },
        t: (key: string) => {
            const translations: Record<string, string> = {
                'license.pro_account': '프로 계정',
                'license.upgrade_to_pro': '프로로 업그레이드',
                'license.all_features_available': '모든 기능을 사용할 수 있습니다.',
                'license.purchase_for_unlimited': '라이선스 구매 후 무제한 접근이 가능합니다.',
                'license.activated': '라이선스 활성화됨',
                'license.enter_key': '라이선스 키 입력',
                'license.purchase': '라이선스 구매',
                'license.key': 'License Key',
                'license.submit': 'Submit',
                'license.verifying': 'Verifying...',
                'license.enter_from_email': '구독 후 이메일로 받은 라이선스 키를 입력하세요.',
                'license.key_label': '라이선스 키',
                'license.activations_remaining': '활성',
                'license.spots_remaining': '자리 남음',
                'license.deactivating': '비활성화중...',
                'license.deactivate': '라이선스 비활성화',
                // PricingComparison 번역
                'monthlyBilling': '월간 결제',
                'yearlyBilling': '연간 결제',
                'feature': '기능',
                'free': 'Free',
                'freePrice': '$0',
                'pro': 'Pro',
                'recommended': '추천',
                'perMonth': '월',
                'perYear': '년',
            };
            return translations[key] || key;
        },
    },
};

export const PaidUser: Story = {
    args: {
        status: 'PAID',
        usageCount: 0,
        onClose: () => console.log('Page closed'),
        onLicenseSubmit: async (licenseKey: string) => {
            console.log('License submitted:', licenseKey);
        },
        setPaymentStatus: (status: 'PAID' | 'FREE' | 'UNPAID') => console.log('Payment status:', status),
        setUsageCount: (count: number) => console.log('Usage count:', count),
        setShowLicensePage: (show: boolean) => console.log('Show license page:', show),
        licenseKey: 'abc123-def456-ghi789-jkl012-mno345',
        paymentPageUrl: 'https://designbasekorea.lemonsqueezy.com/buy/fc202a67-6f1a-4a61-9242-c643b282e230',
        pricingFeatures: [
            { name: '사용 제한', free: '일일 제한', pro: '무제한' },
            { name: '모든 주제 사용', free: false, pro: true },
            { name: '최대 선택 제한', free: '최대 5개', pro: '최대 30개' },
            { name: '더미 개수', free: '1,400개', pro: '4,400개 +' },
            { name: '커스텀 숫자 사용', free: false, pro: true },
        ],
        pricing: {
            monthly: 2,
            yearly: 21.6,
        },
        t: (key: string) => {
            const translations: Record<string, string> = {
                'license.pro_account': '프로 계정',
                'license.upgrade_to_pro': '프로로 업그레이드',
                'license.all_features_available': '모든 기능을 사용할 수 있습니다.',
                'license.purchase_for_unlimited': '라이선스 구매 후 무제한 접근이 가능합니다.',
                'license.activated': '라이선스 활성화됨',
                'license.enter_key': '라이선스 키 입력',
                'license.purchase': '라이선스 구매',
                'license.key': 'License Key',
                'license.submit': 'Submit',
                'license.verifying': 'Verifying...',
                'license.enter_from_email': '구독 후 이메일로 받은 라이선스 키를 입력하세요.',
                'license.key_label': '라이선스 키',
                'license.activations_remaining': '활성',
                'license.spots_remaining': '자리 남음',
                'license.deactivating': '비활성화중...',
                'license.deactivate': '라이선스 비활성화',
                // PricingComparison 번역
                'monthlyBilling': '월간 결제',
                'yearlyBilling': '연간 결제',
                'feature': '기능',
                'free': 'Free',
                'freePrice': '$0',
                'pro': 'Pro',
                'recommended': '추천',
                'perMonth': '월',
                'perYear': '년',
            };
            return translations[key] || key;
        },
    },
};

export const Interactive: Story = {
    render: () => {
        const [status, setStatus] = useState<'PAID' | 'FREE' | 'UNPAID'>('FREE');
        const [usageCount, setUsageCount] = useState(5);
        const [showLicensePage, setShowLicensePage] = useState(true);

        return (
            <PageLicense
                status={status}
                usageCount={usageCount}
                onClose={() => setShowLicensePage(false)}
                onLicenseSubmit={async (licenseKey: string) => {
                    console.log('License submitted:', licenseKey);
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    setStatus('PAID');
                    setUsageCount(0);
                }}
                setPaymentStatus={setStatus}
                setUsageCount={setUsageCount}
                setShowLicensePage={setShowLicensePage}
                licenseKey=""
                paymentPageUrl="https://designbasekorea.lemonsqueezy.com/buy/fc202a67-6f1a-4a61-9242-c643b282e230"
                t={(key: string) => {
                    const translations: Record<string, string> = {
                        'license.pro_account': '프로 계정',
                        'license.upgrade_to_pro': '프로로 업그레이드',
                        'license.all_features_available': '모든 기능을 사용할 수 있습니다.',
                        'license.purchase_for_unlimited': '라이선스 구매 후 무제한 접근이 가능합니다.',
                        'license.activated': '라이선스 활성화됨',
                        'license.enter_key': '라이선스 키 입력',
                        'license.purchase': '라이선스 구매',
                        'license.key': 'License Key',
                        'license.submit': 'Submit',
                        'license.verifying': 'Verifying...',
                        'license.enter_from_email': '구독 후 이메일로 받은 라이선스 키를 입력하세요.',
                        'license.key_label': '라이선스 키',
                        'license.activations_remaining': '활성',
                        'license.spots_remaining': '자리 남음',
                        'license.deactivating': '비활성화중...',
                        'license.deactivate': '라이선스 비활성화'
                    };
                    return translations[key] || key;
                }}
            />
        );
    },
};

export const CustomPricing: Story = {
    args: {
        status: 'FREE',
        usageCount: 5,
        onClose: () => console.log('Page closed'),
        onLicenseSubmit: async (licenseKey: string) => {
            console.log('License submitted:', licenseKey);
            await new Promise(resolve => setTimeout(resolve, 2000));
        },
        setPaymentStatus: (status: 'PAID' | 'FREE' | 'UNPAID') => console.log('Payment status:', status),
        setUsageCount: (count: number) => console.log('Usage count:', count),
        setShowLicensePage: (show: boolean) => console.log('Show license page:', show),
        licenseKey: '',
        paymentPageUrl: 'https://designbasekorea.lemonsqueezy.com/buy/fc202a67-6f1a-4a61-9242-c643b282e230',
        // 커스텀 가격 비교 정보
        pricingFeatures: [
            { name: '일일 사용량', free: '20회', pro: '무제한' },
            { name: '고급 템플릿', free: false, pro: true },
            { name: '우선 지원', free: false, pro: true },
            { name: 'API 접근', free: false, pro: true },
            { name: '커스텀 브랜딩', free: false, pro: true },
            { name: '팀 협업', free: false, pro: true },
        ],
        pricing: {
            monthly: 5,
            yearly: 50,
        },
        paymentType: 'subscription',
        t: (key: string) => {
            const translations: Record<string, string> = {
                'license.pro_account': '프로 계정',
                'license.upgrade_to_pro': '프로로 업그레이드',
                'license.all_features_available': '모든 기능을 사용할 수 있습니다.',
                'license.purchase_for_unlimited': '라이선스 구매 후 무제한 접근이 가능합니다.',
                'license.activated': '라이선스 활성화됨',
                'license.enter_key': '라이선스 키 입력',
                'license.purchase': '라이선스 구매',
                'license.key': 'License Key',
                'license.submit': 'Submit',
                'license.verifying': 'Verifying...',
                'license.enter_from_email': '구독 후 이메일로 받은 라이선스 키를 입력하세요.',
                'license.key_label': '라이선스 키',
                'license.activations_remaining': '활성',
                'license.spots_remaining': '자리 남음',
                'license.deactivating': '비활성화중...',
                'license.deactivate': '라이선스 비활성화',
                // PricingComparison 번역
                'monthlyBilling': '월간 결제',
                'yearlyBilling': '연간 결제',
                'feature': '기능',
                'free': 'Free',
                'freePrice': '$0',
                'pro': 'Pro',
                'recommended': '추천',
                'perMonth': '월',
                'perYear': '년',
            };
            return translations[key] || key;
        },
    },
};

export const LifetimePricing: Story = {
    args: {
        status: 'FREE',
        usageCount: 5,
        onClose: () => console.log('Page closed'),
        onLicenseSubmit: async (licenseKey: string) => {
            console.log('License submitted:', licenseKey);
            await new Promise(resolve => setTimeout(resolve, 2000));
        },
        setPaymentStatus: (status: 'PAID' | 'FREE' | 'UNPAID') => console.log('Payment status:', status),
        setUsageCount: (count: number) => console.log('Usage count:', count),
        setShowLicensePage: (show: boolean) => console.log('Show license page:', show),
        licenseKey: '',
        paymentPageUrl: 'https://designbasekorea.lemonsqueezy.com/buy/fc202a67-6f1a-4a61-9242-c643b282e230',
        // Lifetime 가격 비교 정보
        pricingFeatures: [
            { name: '사용 제한', free: '일일 제한', pro: '무제한' },
            { name: '모든 주제 사용', free: false, pro: true },
            { name: '최대 선택 제한', free: '최대 5개', pro: '최대 30개' },
            { name: '더미 개수', free: '1,400개', pro: '4,400개 +' },
            { name: '커스텀 숫자 사용', free: false, pro: true },
        ],
        pricing: {
            lifetime: 50,
        },
        paymentType: 'lifetime',
        t: (key: string) => {
            const translations: Record<string, string> = {
                'license.pro_account': '프로 계정',
                'license.upgrade_to_pro': '프로로 업그레이드',
                'license.all_features_available': '모든 기능을 사용할 수 있습니다.',
                'license.purchase_for_unlimited': '라이선스 구매 후 무제한 접근이 가능합니다.',
                'license.activated': '라이선스 활성화됨',
                'license.enter_key': '라이선스 키 입력',
                'license.purchase': '라이선스 구매',
                'license.key': 'License Key',
                'license.submit': 'Submit',
                'license.verifying': 'Verifying...',
                'license.enter_from_email': '구매 후 이메일로 받은 라이선스 키를 입력하세요.',
                'license.key_label': '라이선스 키',
                'license.activations_remaining': '활성',
                'license.spots_remaining': '자리 남음',
                'license.deactivating': '비활성화중...',
                'license.deactivate': '라이선스 비활성화',
                // PricingComparison 번역
                'feature': '기능',
                'free': 'Free',
                'freePrice': '$0',
                'pro': 'Pro',
                'recommended': '추천',
                'lifetimeAccess': '평생 이용',
                'oneTimePaymentLifetime': 'One-time payment for lifetime access!',
            };
            return translations[key] || key;
        },
    },
};

export const WithoutPaymentUrl: Story = {
    args: {
        status: 'FREE',
        usageCount: 5,
        onClose: () => console.log('Page closed'),
        onLicenseSubmit: async (licenseKey: string) => {
            console.log('License submitted:', licenseKey);
            await new Promise(resolve => setTimeout(resolve, 2000));
        },
        setPaymentStatus: (status: 'PAID' | 'FREE' | 'UNPAID') => console.log('Payment status:', status),
        setUsageCount: (count: number) => console.log('Usage count:', count),
        setShowLicensePage: (show: boolean) => console.log('Show license page:', show),
        licenseKey: '',
        // paymentPageUrl 없음 - 구매 버튼이 표시되지 않음
        t: (key: string) => {
            const translations: Record<string, string> = {
                'license.pro_account': '프로 계정',
                'license.upgrade_to_pro': '프로로 업그레이드',
                'license.all_features_available': '모든 기능을 사용할 수 있습니다.',
                'license.purchase_for_unlimited': '라이선스 구매 후 무제한 접근이 가능합니다.',
                'license.activated': '라이선스 활성화됨',
                'license.enter_key': '라이선스 키 입력',
                'license.purchase': '라이선스 구매',
                'license.key': 'License Key',
                'license.submit': 'Submit',
                'license.verifying': 'Verifying...',
                'license.enter_from_email': '구독 후 이메일로 받은 라이선스 키를 입력하세요.',
                'license.key_label': '라이선스 키',
                'license.activations_remaining': '활성',
                'license.spots_remaining': '자리 남음',
                'license.deactivating': '비활성화중...',
                'license.deactivate': '라이선스 비활성화',
                // PricingComparison 번역
                'monthlyBilling': '월간 결제',
                'yearlyBilling': '연간 결제',
                'feature': '기능',
                'free': 'Free',
                'freePrice': '$0',
                'pro': 'Pro',
                'recommended': '추천',
                'perMonth': '월',
                'perYear': '년',
            };
            return translations[key] || key;
        },
    },
};
