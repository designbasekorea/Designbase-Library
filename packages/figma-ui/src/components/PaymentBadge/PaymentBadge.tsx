import React from 'react';
import { Badge, Spinner } from '@designbasekorea/ui';
import './PaymentBadge.scss';

export interface PaymentBadgeProps {
    /** 활성화 상태 (유료 계정 여부) */
    isActive: boolean;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 로딩 상태 */
    isLoading?: boolean;
    /** 커스텀 텍스트 */
    text?: string;
    /** 다국어 번역 함수 */
    t?: (key: string) => string;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const PaymentBadge: React.FC<PaymentBadgeProps> = ({
    isActive,
    onClick,
    isLoading = false,
    text,
    t = (key: string) => key,
    className,
}) => {
    const getBadgeText = () => {
        if (text) return text;
        return isActive
            ? (t('proUser') || '프로 계정')
            : (t('usingFree') || '무료 사용');
    };

    const getBadgeVariant = () => {
        return isActive ? 'success' : 'secondary';
    };

    return (
        <div
            className={`designbase-figma-payment-badge ${className || ''} ${isActive ? 'active' : 'free'}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {isLoading ? (
                <Spinner size="s" />
            ) : (
                <Badge
                    variant={getBadgeVariant()}
                    size="s"
                    className="designbase-figma-payment-badge__badge"
                >
                    {getBadgeText()}
                </Badge>
            )}
        </div>
    );
};

PaymentBadge.displayName = 'PaymentBadge';

export default PaymentBadge;

