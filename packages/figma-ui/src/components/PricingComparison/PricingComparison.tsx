import React, { useState } from 'react';
import { SegmentControl } from '@designbasekorea/ui';
import './PricingComparison.scss';

export interface PricingFeature {
    name: string;
    free: string | boolean;
    pro: string | boolean;
}

export interface PlanPricing {
    monthly?: number;
    yearly?: number;
    lifetime?: number;
}

export interface PricingComparisonProps {
    /** 기능 목록 */
    features?: PricingFeature[];
    /** 가격 정보 */
    pricing?: PlanPricing;
    /** 결제 타입 ('subscription' | 'lifetime') */
    paymentType?: 'subscription' | 'lifetime';
    /** 다국어 번역 함수 */
    t?: (key: string) => string;
    /** 추가 CSS 클래스 */
    className?: string;
}

const defaultFeatures: PricingFeature[] = [
    { name: '사용 제한', free: '일일 제한', pro: '무제한' },
    { name: '모든 주제 사용', free: false, pro: true },
    { name: '최대 선택 제한', free: '최대 5개', pro: '최대 30개' },
    { name: '더미 개수', free: '1,400개', pro: '4,400개 +' },
    { name: '커스텀 숫자 사용', free: false, pro: true },
];

const defaultPricing: PlanPricing = {
    monthly: 2,
    yearly: 21.6,
    lifetime: 50,
};

export const PricingComparison: React.FC<PricingComparisonProps> = ({
    features = defaultFeatures,
    pricing = defaultPricing,
    paymentType = 'subscription',
    t = (key: string) => key,
    className,
}) => {
    const [isYearly, setIsYearly] = useState(false);

    const getPrice = () => {
        if (paymentType === 'lifetime') {
            return `$${pricing.lifetime?.toLocaleString()} - ${t('lifetimeAccess') || '평생 이용'}`;
        }

        const price = isYearly ? pricing.yearly : pricing.monthly;
        return `$${price?.toLocaleString()} / ${isYearly ? t('perYear') : t('perMonth')}`;
    };

    const getDiscountPercentage = () => {
        if (paymentType === 'lifetime') {
            return null; // lifetime 타입에서는 할인율 표시 안함
        }

        const monthlyPrice = (pricing.monthly || 0) * 12;
        const yearlyPrice = pricing.yearly || 0;
        const discount = Math.round(((monthlyPrice - yearlyPrice) / monthlyPrice) * 100);
        return discount;
    };

    return (
        <div className={`designbase-figma-pricing-comparison ${className || ''}`}>
            {/* 구독 타입일 때만 결제 주기 선택 표시 */}
            {paymentType === 'subscription' && (
                <div className="designbase-figma-pricing-comparison__billing-toggle">
                    <SegmentControl
                        value={isYearly ? 'yearly' : 'monthly'}
                        onChange={(value) => setIsYearly(value === 'yearly')}
                        options={[
                            {
                                value: 'monthly',
                                label: t('monthlyBilling') || '월간 결제',
                            },
                            {
                                value: 'yearly',
                                label: (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {t('yearlyBilling') || '연간 결제'}
                                        <span className="designbase-figma-pricing-comparison__discount-badge">
                                            {getDiscountPercentage()}% 절약
                                        </span>
                                    </div>
                                ),
                            },
                        ]}
                        size="s"
                    />
                </div>
            )}

            {/* Lifetime 타입일 때 설명 텍스트 표시 */}
            {paymentType === 'lifetime' && (
                <div className="designbase-figma-pricing-comparison__lifetime-info">
                    <p className="designbase-figma-pricing-comparison__lifetime-text">
                        {t('oneTimePaymentLifetime') || 'One-time payment for lifetime access!'}
                    </p>
                </div>
            )}

            <table className="designbase-figma-pricing-comparison__table">
                <thead>
                    <tr>
                        <th>{t('feature') || '기능'}</th>
                        <th>
                            <div className="designbase-figma-pricing-comparison__plan-name">
                                {t('free') || 'Free'}
                            </div>
                            <div>{t('freePrice') || '$0'}</div>
                        </th>
                        <th className="designbase-figma-pricing-comparison__recommended">
                            <div className="designbase-figma-pricing-comparison__plan-name">
                                {t('pro') || 'Pro'}
                                <span className="designbase-figma-pricing-comparison__recommended-badge">
                                    {t('recommended') || '추천'}
                                </span>
                            </div>
                            <div>{getPrice()}</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, index) => (
                        <tr key={index}>
                            <td>{feature.name}</td>
                            <td>
                                {typeof feature.free === 'boolean'
                                    ? (feature.free ? '✓' : '✗')
                                    : feature.free}
                            </td>
                            <td>
                                {typeof feature.pro === 'boolean'
                                    ? (feature.pro ? '✓' : '✗')
                                    : feature.pro}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

PricingComparison.displayName = 'PricingComparison';

export default PricingComparison;

