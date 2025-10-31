import React from 'react';
import { Button } from '@designbasekorea/ui';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import './PaymentStatusSection.scss';

export interface PaymentStatusSectionProps {
    /** 결제 상태 */
    status: 'PAID' | 'FREE' | 'UNPAID';
    /** 사용 횟수 */
    usageCount?: number;
    /** 활성화 제한 */
    activationLimit: number;
    /** 활성화 사용량 */
    activationUsage: number;
    /** 라이선스 키 */
    licenseKey: string;
    /** 비활성화 핸들러 */
    onDeactivate: () => void;
    /** 비활성화 중 여부 */
    isDeactivating?: boolean;
    /** 상세 정보 표시 여부 */
    showDetails?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 소비자가 주입할 번역함수 (선택) */
    t?: TFunctionLite;
}

export const PaymentStatusSection: React.FC<PaymentStatusSectionProps> = ({
    status,
    usageCount,
    activationLimit,
    activationUsage,
    licenseKey,
    onDeactivate,
    isDeactivating = false,
    showDetails = false,
    className,
    t
}) => {
    const remainingActivations = activationLimit - activationUsage;

    return (
        <div className={`designbase-figma-payment-status ${className || ''}`}>
            <div className="designbase-figma-payment-status__license-key">
                {resolveText(t, { key: 'payment.license_key_label' }, '라이선스 키')}: <span>{licenseKey}</span>
            </div>

            {showDetails && (
                <div className="designbase-figma-payment-status__details">
                    <div className="designbase-figma-payment-status__activation-info">
                        <div className="designbase-figma-payment-status__remaining">
                            {remainingActivations} {resolveText(t, { key: 'payment.activations_remaining' }, '활성')} {resolveText(t, { key: 'payment.spots_remaining' }, '자리 남음')}
                        </div>
                        <div className="designbase-figma-payment-status__usage">
                            {activationUsage}/{activationLimit}
                        </div>
                    </div>
                    <Button
                        onClick={onDeactivate}
                        variant="tertiary"
                        size="s"
                        disabled={isDeactivating}
                    >
                        {isDeactivating
                            ? resolveText(t, { key: 'payment.deactivating' }, '비활성화중...')
                            : resolveText(t, { key: 'payment.deactivate_license' }, '라이선스 비활성화')
                        }
                    </Button>
                </div>
            )}
        </div>
    );
};

PaymentStatusSection.displayName = 'PaymentStatusSection';

export default PaymentStatusSection;

