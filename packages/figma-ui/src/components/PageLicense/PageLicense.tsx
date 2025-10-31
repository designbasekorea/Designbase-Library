import React, { useState, useEffect } from 'react';
import { Button, Divider } from '@designbasekorea/ui';
import { CloseIcon, SettingsIcon, MoreHorizontalIcon, ExternalLinkIcon } from '@designbasekorea/icons';
import { FormWithSubmit } from '../FormWithSubmit/FormWithSubmit';
import { PricingComparison, PricingFeature, PlanPricing } from '../PricingComparison/PricingComparison';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import './PageLicense.scss';

export interface PageLicenseProps {
    /** 초기 결제 상태 */
    status: 'PAID' | 'FREE' | 'UNPAID';
    /** 닫기 핸들러 */
    onClose: () => void;
    /** 초기 사용 횟수 */
    usageCount?: number;
    /** 라이선스 제출 핸들러 */
    onLicenseSubmit: (licenseKey: string) => Promise<void> | void;
    /** 초기 라이선스 키 */
    licenseKey?: string;
    /** 결제 상태 변경 핸들러 */
    setPaymentStatus: (status: 'PAID' | 'FREE' | 'UNPAID') => void;
    /** 사용 횟수 변경 핸들러 */
    setUsageCount: (count: number) => void;
    /** 라이선스 페이지 표시 변경 핸들러 */
    setShowLicensePage: (show: boolean) => void;
    /** 결제 페이지 URL (선택사항) */
    paymentPageUrl?: string;
    /** 가격 비교 기능 목록 (선택사항) */
    pricingFeatures?: PricingFeature[];
    /** 가격 정보 (선택사항) */
    pricing?: PlanPricing;
    /** 결제 타입 ('subscription' | 'lifetime') */
    paymentType?: 'subscription' | 'lifetime';
    /** 다국어 번역 함수 */
    t?: TFunctionLite;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const PageLicense: React.FC<PageLicenseProps> = ({
    status: initialStatus,
    onClose,
    usageCount: initialUsageCount = 0,
    onLicenseSubmit,
    licenseKey: initialLicenseKey = '',
    setPaymentStatus,
    setUsageCount,
    setShowLicensePage,
    paymentPageUrl,
    pricingFeatures,
    pricing,
    paymentType = 'subscription',
    t,
    className,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDeactivating, setIsDeactivating] = useState(false);
    const [licenseKey, setLicenseKey] = useState(initialLicenseKey);
    const [status, setStatus] = useState(initialStatus);
    const [usageCount, setLocalUsageCount] = useState(initialUsageCount);
    // 토스트 대신 콘솔 로그나 다른 알림 방식 사용
    const [activationLimit, setActivationLimit] = useState(0);
    const [activationUsage, setActivationUsage] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const { type, paymentStatus, licenseKey, activationLimit, activationUsage, success, message, usageCount } = event.data.pluginMessage || {};

            if (type === 'update-plugin-status' || type === 'license-verification-result') {
                if (paymentStatus) setStatus(paymentStatus);
                if (licenseKey) setLicenseKey(licenseKey);
                if (activationLimit !== undefined) setActivationLimit(activationLimit);
                if (activationUsage !== undefined) setActivationUsage(activationUsage);
                if (paymentStatus) setPaymentStatus(paymentStatus);
                if (usageCount !== undefined) {
                    setLocalUsageCount(usageCount);
                    setUsageCount(usageCount);
                }
            }

            if (type === 'license-verification-result') {
                setIsSubmitting(false);
                if (message) console.log('License verification:', message);
                if (success) {
                    setStatus('PAID');
                    setPaymentStatus('PAID');
                }
            }

            if (type === 'license-deactivation-result') {
                setIsDeactivating(false);
                if (message) console.log('License deactivation:', message);
                if (success) {
                    setStatus('UNPAID');
                    setPaymentStatus('UNPAID');
                    setLicenseKey('');
                    setLocalUsageCount(20);
                    setActivationLimit(0);
                    setActivationUsage(0);
                }
            }
        };

        window.addEventListener('message', handleMessage);

        // 피그마 플러그인 초기화
        if (typeof parent !== 'undefined') {
            parent.postMessage({ pluginMessage: { type: 'initialize' } }, '*');
        }

        return () => window.removeEventListener('message', handleMessage);
    }, [setPaymentStatus, setUsageCount]);

    const handleLicenseSubmit = async (submittedLicenseKey: string) => {
        setIsSubmitting(true);
        if (typeof parent !== 'undefined') {
            parent.postMessage({
                pluginMessage: {
                    type: 'verify-license',
                    licenseKey: submittedLicenseKey
                }
            }, '*');
        }
    };

    const handleDeactivateLicense = () => {
        setIsDeactivating(true);
        if (typeof parent !== 'undefined') {
            parent.postMessage({
                pluginMessage: { type: 'deactivate-license' }
            }, '*');
        }
    };

    const isPaid = status === 'PAID';

    return (
        <div className={`designbase-figma-page-license ${className || ''}`}>
            <div className="designbase-figma-page-license__content">
                {/* 헤더 */}
                <div className="designbase-figma-page-license__header">
                    <div className="designbase-figma-page-license__title">
                        <h2>{isPaid ? resolveText(t, { key: 'license.pro_account' }, '프로 계정') : resolveText(t, { key: 'license.upgrade_to_pro' }, '프로로 업그레이드')}</h2>
                    </div>
                    <p className="designbase-figma-page-license__description">
                        {isPaid
                            ? resolveText(t, { key: 'license.all_features_available' }, '모든 기능을 사용할 수 있습니다.')
                            : resolveText(t, { key: 'license.purchase_for_unlimited' }, '라이선스 구매 후 무제한 접근이 가능합니다.')}
                    </p>
                </div>

                {/* 가격 비교 */}
                <PricingComparison
                    features={pricingFeatures}
                    pricing={pricing}
                    paymentType={paymentType}
                    t={t}
                />


                {/* 활성화된 라이선스 정보 */}
                {isPaid && (
                    <div className="designbase-figma-page-license__section">
                        <div className="designbase-figma-page-license__section-header">
                            <h3>{resolveText(t, { key: 'license.activated' }, '라이선스 활성화됨')}</h3>
                            <Button
                                onClick={() => setShowDetails(!showDetails)}
                                variant="tertiary"
                                size="s"
                                iconOnly={true}
                            >
                                <MoreHorizontalIcon size={16} />
                            </Button>
                        </div>

                        {/* 라이선스 키 표시 */}
                        <div className="designbase-figma-page-license__license-key">
                            {resolveText(t, { key: 'license.key_label' }, '라이선스 키')}: <span>{licenseKey}</span>
                        </div>

                        {/* 상세 정보 */}
                        {showDetails && (
                            <div className="designbase-figma-page-license__details">
                                <div className="designbase-figma-page-license__activation-info">
                                    <div className="designbase-figma-page-license__remaining">
                                        {activationLimit - activationUsage} {resolveText(t, { key: 'license.activations_remaining' }, '활성')} {resolveText(t, { key: 'license.spots_remaining' }, '자리 남음')}
                                    </div>
                                    <div className="designbase-figma-page-license__usage">
                                        {activationUsage}/{activationLimit}
                                    </div>
                                </div>
                                <Button
                                    onClick={handleDeactivateLicense}
                                    variant="tertiary"
                                    size="s"
                                    disabled={isDeactivating}
                                >
                                    {isDeactivating
                                        ? resolveText(t, { key: 'license.deactivating' }, '비활성화중...')
                                        : resolveText(t, { key: 'license.deactivate' }, '라이선스 비활성화')
                                    }
                                </Button>
                            </div>
                        )}
                    </div>
                )}

                {/* 라이선스 키 입력 - 비활성화 상태에서만 표시 */}
                {!isPaid && (
                    <div className="designbase-figma-page-license__section">
                        <div className="designbase-figma-page-license__section-header">
                            <h3>{resolveText(t, { key: 'license.enter_key' }, '라이선스 키 입력')}</h3>
                            {paymentPageUrl && (
                                <Button
                                    onClick={() => window.open(paymentPageUrl, '_blank')}
                                    variant="primary"
                                    size="s"
                                >
                                    <span>{resolveText(t, { key: 'license.purchase' }, '라이선스 구매')}</span>
                                    <ExternalLinkIcon size={16} />
                                </Button>
                            )}
                        </div>
                        <FormWithSubmit
                            onLicenseSubmit={handleLicenseSubmit}
                            disabled={false}
                            isSubmitting={isSubmitting}
                            value={licenseKey}
                            onValueChange={setLicenseKey}
                            label={{ key: 'license.key' }}
                            submitText={{ key: 'license.submit' }}
                            submittingText={{ key: 'license.verifying' }}
                            helperText={{ key: 'license.enter_from_email' }}
                            t={t}
                        />
                    </div>
                )}
            </div>

            {/* 닫기 버튼 */}
            <Button
                className="designbase-figma-page-license__close"
                onPress={onClose}
                variant="tertiary"
                size="s"
                aria-label="Close"
            >
                <CloseIcon size={20} />
            </Button>
        </div>
    );
};

PageLicense.displayName = 'PageLicense';

export default PageLicense;

