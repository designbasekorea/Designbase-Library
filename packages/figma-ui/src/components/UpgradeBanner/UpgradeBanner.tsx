import React from 'react';
import { Button, RandomGradient, type GradientScheme, type GradientTone } from '@designbasekorea/ui';
import { ChevronRightIcon } from '@designbasekorea/icons';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import './UpgradeBanner.scss';

export type UpgradeBannerVariant = 'button' | 'clickable';

export interface UpgradeBannerProps {
    /** 클릭 핸들러 */
    onClick: () => void;
    /** 배너 타입 */
    variant?: UpgradeBannerVariant;
    /** 로딩 상태 */
    isLoading?: boolean;
    /** 배너 제목 - 문자열 또는 { key, values } */
    title?: I18nText;
    /** 배너 설명 - 문자열 또는 { key, values } */
    description?: I18nText;
    /** 버튼 텍스트 - 문자열 또는 { key, values } (variant="button"일 때만 사용) */
    buttonText?: I18nText;
    /** 그라데이션 배경 사용 여부 */
    useGradient?: boolean;
    /** 그라데이션 색상 계열 */
    gradientScheme?: GradientScheme;
    /** 그라데이션 톤 */
    gradientTone?: GradientTone;
    /** 그라데이션 애니메이션 여부 */
    gradientAnimated?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 소비자가 주입할 번역함수 (선택) */
    t?: TFunctionLite;
}

export const UpgradeBanner: React.FC<UpgradeBannerProps> = ({
    onClick,
    variant = 'button',
    isLoading = false,
    title = { key: 'banner.upgrade_title' },
    description = { key: 'banner.upgrade_description' },
    buttonText = { key: 'banner.upgrade_button' },
    useGradient = false,
    gradientScheme = 'primary',
    gradientTone = 'light',
    gradientAnimated = true,
    className,
    t
}) => {
    const displayTitle = resolveText(t, title, '프로로 업그레이드하세요');
    const displayDescription = resolveText(t, description, '무제한 기능을 사용하고 더 많은 혜택을 누리세요.');
    const displayButtonText = resolveText(t, buttonText, '지금 업그레이드');

    const bannerContent = (
        <div
            className={`designbase-figma-upgrade-banner__content designbase-figma-upgrade-banner__content--${variant}`}
            onClick={variant === 'clickable' ? onClick : undefined}
            role={variant === 'clickable' ? 'button' : undefined}
            tabIndex={variant === 'clickable' ? 0 : undefined}
            onKeyDown={variant === 'clickable' ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            } : undefined}
            style={{ cursor: variant === 'clickable' ? 'pointer' : 'default' }}
        >
            <div className="designbase-figma-upgrade-banner__text-wrap">
                <h3 className="designbase-figma-upgrade-banner__title">
                    {displayTitle}
                </h3>
                <p className="designbase-figma-upgrade-banner__text">
                    {displayDescription}
                </p>
            </div>

            {variant === 'button' ? (
                <Button
                    onClick={onClick}
                    variant="primary"
                    size="m"
                    disabled={isLoading}
                >
                    {displayButtonText}
                </Button>
            ) : (
                <div className="designbase-figma-upgrade-banner__icon">
                    <ChevronRightIcon size={20} />
                </div>
            )}
        </div>
    );

    return (
        <div className={`designbase-figma-upgrade-banner designbase-figma-upgrade-banner--${variant} ${className || ''}`}>
            {useGradient ? (
                <RandomGradient
                    scheme={gradientScheme}
                    tone={gradientTone}
                    animated={gradientAnimated}
                    height="100%"
                    width="100%"
                    className="designbase-figma-upgrade-banner__gradient-bg"
                >
                    {bannerContent}
                </RandomGradient>
            ) : (
                bannerContent
            )}
        </div>
    );
};

UpgradeBanner.displayName = 'UpgradeBanner';

export default UpgradeBanner;

