import React from 'react';
import clsx from 'clsx';
import { PaymentBadge } from '../PaymentBadge/PaymentBadge';
import { DonationBadge } from '../DonationBadge/DonationBadge';
import { LanguageSelector, Language } from '../LanguageSelector/LanguageSelector';
import { LogoDropdown, LogoDropdownLink } from '../LogoDropdown/LogoDropdown';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import './FigmaFooter.scss';

// 기본 번역 함수
const defaultTranslations: Record<string, string> = {
    unlimitedUsage: '무제한 사용',
    perDay: '일',
    resetsDaily: '매일 리셋',
    donationPrompt: '이 플러그인이 유용했나요?',
};

const defaultT = (key: string) => defaultTranslations[key] || key;

export interface FigmaFooterProps {
    /** 라이선스 페이지 클릭 핸들러 */
    onLicensePageClick?: () => void;
    /** 결제 상태 */
    paymentStatus?: 'PAID' | 'FREE' | 'TRIAL';
    /** 사용량 */
    usageCount?: number;
    /** 로딩 상태 */
    isLoading?: boolean;
    /** 사용량 표시 여부 */
    showUsageInfo?: boolean;
    /** 최대 일일 사용량 */
    maxDailyUsage?: number;
    /** PaymentBadge 표시 여부 */
    showPaymentBadge?: boolean;
    /** 기부 버튼 표시 여부 (무료 플러그인용) */
    showDonation?: boolean;
    /** 기부 URL */
    donationUrl?: string;
    /** 기부 버튼 텍스트 - 문자열 또는 { key, values } */
    donationText?: I18nText;
    /** 도네이션 유도 텍스트 표시 여부 */
    showDonationText?: boolean;
    /** 도네이션 유도 텍스트 - 문자열 또는 { key, values } */
    donationPromptText?: I18nText;
    /** 언어 선택기 표시 여부 */
    showLanguageSelector?: boolean;
    /** 현재 언어 코드 */
    currentLanguage?: string;
    /** 지원하는 언어 목록 */
    languages?: Language[];
    /** 언어 변경 핸들러 */
    onLanguageChange?: (languageCode: string) => void;
    /** 로고 이미지 소스 */
    logoSrc?: string;
    /** 로고 alt 텍스트 */
    logoAlt?: string;
    /** 로고 타입 */
    logoType?: 'designbase' | 'designbase-mark' | 'custom';
    /** 로고 크기 */
    logoSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
    /** 로고 드롭다운 링크 목록 */
    logoLinks?: LogoDropdownLink[];
    /** 추가 CSS 클래스 */
    className?: string;
    /** 소비자가 주입할 번역함수 (선택) */
    t?: TFunctionLite;
    /** 자식 요소 */
    children?: React.ReactNode;
}

export const FigmaFooter: React.FC<FigmaFooterProps> = ({
    onLicensePageClick,
    paymentStatus = 'FREE',
    usageCount = 0,
    isLoading = false,
    showPaymentStatus = true,
    showUsageInfo = true,
    maxDailyUsage = 20,
    showPaymentBadge = true,
    showDonation = true,
    donationUrl = 'https://buymeacoffee.com/designbase',
    donationText = 'Buy me a coffee',
    showDonationText = true,
    donationPromptText,
    showLanguageSelector = false,
    currentLanguage = 'ko',
    languages,
    onLanguageChange,
    logoSrc,
    logoAlt = 'DesignBase',
    logoType = 'designbase',
    logoSize = 'xs',
    logoLinks,
    className,
    t = defaultT,
    children,
}) => {
    const isActive = paymentStatus === 'PAID';
    const hasChildren = React.Children.count(children) > 0;

    const classes = clsx(
        'designbase-figma-footer',
        {
            'designbase-figma-footer--has-children': hasChildren,
        },
        className
    );

    return (
        <footer className={classes}>
            <div className="designbase-figma-footer__wrap">
                <div className="designbase-figma-footer__left">
                    <LogoDropdown
                        logoSrc={logoSrc}
                        logoAlt={logoAlt}
                        logoType={logoType}
                        logoSize={logoSize}
                        links={logoLinks}
                        t={t}
                    />
                    {showLanguageSelector && (
                        <LanguageSelector
                            currentLanguage={currentLanguage}
                            languages={languages}
                            onLanguageChange={onLanguageChange}
                            size="s"
                        />
                    )}
                </div>

                {showPaymentStatus && (
                    <div className="designbase-figma-footer__payment-states">
                        {showUsageInfo && !isLoading && (
                            <div className="designbase-figma-footer__usage-info">
                                {isActive ? (
                                    <span
                                        className="designbase-figma-footer__unlimited-usage designbase-figma-footer__unlimited-usage--tooltip"
                                        title={t('unlimitedUsageTooltip')}
                                    >
                                        {t('unlimitedUsage')}
                                    </span>
                                ) : (
                                    <>
                                        <span
                                            className="designbase-figma-footer__usage-info designbase-figma-footer__usage-info--tooltip"
                                            title={t('resetsDaily')}
                                        >
                                            <span className="designbase-figma-footer__usage-count">
                                                {usageCount}
                                            </span>
                                            <span className="designbase-figma-footer__max-daily-usage">
                                                /{maxDailyUsage} {t('perDay')}
                                            </span>
                                        </span>
                                    </>
                                )}
                            </div>
                        )}

                        {showPaymentBadge && (
                            <PaymentBadge
                                isActive={isActive}
                                onClick={onLicensePageClick}
                                isLoading={isLoading}
                                t={t}
                            />
                        )}
                    </div>
                )}

                {showDonation && (
                    <div className="designbase-figma-footer__donation">
                        <DonationBadge
                            donationUrl={donationUrl}
                            text={donationText}
                            iconType="heart"
                            size="s"
                            showPrompt={showDonationText && !isActive}
                            promptText={donationPromptText}
                            t={t}
                        />
                    </div>
                )}
            </div>
            {children}
        </footer>
    );
};

FigmaFooter.displayName = 'FigmaFooter';

export default FigmaFooter;
