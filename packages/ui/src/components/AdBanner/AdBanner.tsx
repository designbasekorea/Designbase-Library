/**
 * AdBanner 컴포넌트
 * 
 * 다양한 타입의 광고 배너 컴포넌트
 */

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { CloseIcon, ArrowRightIcon, StarIcon, TrendingUpIcon, StarFilledIcon, CartIcon } from '@designbasekorea/icons';
import { Button } from '../Button/Button';
import { RandomGradient, type GradientScheme, type GradientTone } from '../RandomGradient/RandomGradient';
import { Countdown } from '../Countdown/Countdown';
import './AdBanner.scss';

export type AdBannerType = 'hero' | 'topbar' | 'card' | 'floating';
export type AdBannerVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

export interface AdBannerProps {
    /** 배너 타입 */
    type?: AdBannerType;
    /** 배너 스타일 */
    variant?: AdBannerVariant;
    /** 제목 */
    title?: string;
    /** 부제목 */
    subtitle?: string;
    /** CTA 버튼 텍스트 */
    ctaText?: string;
    /** CTA 버튼 클릭 핸들러 */
    onCtaClick?: () => void;
    /** 닫기 핸들러 */
    onClose?: () => void;
    /** 자동 닫기 여부 */
    autoClose?: boolean;
    /** 자동 닫기 지연 시간 (ms) */
    closeDelay?: number;
    /** 아이콘 */
    icon?: React.ReactNode;
    /** 랜덤 그라데이션 배경 사용 여부 */
    useRandomGradient?: boolean;
    /** 랜덤 그라데이션 색상 계열 */
    gradientScheme?: GradientScheme;
    /** 랜덤 그라데이션 톤 */
    gradientTone?: GradientTone;
    /** 랜덤 그라데이션 애니메이션 여부 */
    gradientAnimated?: boolean;
    /** 카운트다운 종료 시간 */
    countdownEndDate?: Date | string;
    /** 카운트다운 표시 여부 */
    showCountdown?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({
    type = 'hero',
    variant = 'primary',
    title,
    subtitle,
    ctaText,
    onCtaClick,
    onClose,
    autoClose = false,
    closeDelay = 5000,
    icon,
    useRandomGradient = false,
    gradientScheme,
    gradientTone = 'vivid',
    gradientAnimated = true,
    countdownEndDate,
    showCountdown = false,
    className,
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (autoClose) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    const newProgress = prev - (100 / (closeDelay / 100));
                    if (newProgress <= 0) {
                        handleClose();
                        clearInterval(interval);
                        return 0;
                    }
                    return newProgress;
                });
            }, 100);

            return () => clearInterval(interval);
        }
    }, [autoClose, closeDelay]);

    const handleClose = () => {
        setIsVisible(false);
        onClose?.();
    };

    const handleCtaClick = () => {
        onCtaClick?.();
    };

    if (!isVisible) return null;

    const classes = clsx(
        'designbase-ad-banner',
        `designbase-ad-banner--type-${type}`,
        `designbase-ad-banner--variant-${variant}`,
        {
            'designbase-ad-banner--auto-close': autoClose,
            'designbase-ad-banner--with-gradient': useRandomGradient,
            'designbase-ad-banner--gradient-light': useRandomGradient && gradientTone === 'light',
        },
        className
    );

    // 기본 아이콘
    const defaultIcons: Record<AdBannerType, React.ReactNode> = {
        hero: <StarIcon size={24} />,
        topbar: <TrendingUpIcon size={24} />,
        card: <StarFilledIcon size={32} />,
        floating: <CartIcon size={28} />,
    };

    const displayIcon = icon || defaultIcons[type];
    const displayTitle = title || getDefaultTitle(type);
    const displaySubtitle = subtitle || getDefaultSubtitle(type);
    const displayCtaText = ctaText || getDefaultCtaText(type);

    // variant에 따른 그라데이션 색상 계열 매핑
    const getGradientScheme = (): GradientScheme => {
        if (gradientScheme) return gradientScheme;

        const schemeMap: Record<AdBannerVariant, GradientScheme> = {
            primary: 'primary',
            secondary: 'secondary',
            success: 'success',
            warning: 'warning',
            error: 'error',
        };

        return schemeMap[variant];
    };

    // 배너 컨텐츠
    const bannerContent = (
        <div className="designbase-ad-banner__content">
            {/* 닫기 버튼 - 모든 타입에서 우측 상단으로 통일 */}
            <button
                className="designbase-ad-banner__close"
                onClick={handleClose}
                aria-label="닫기"
            >
                <CloseIcon size={20} />
            </button>

            {/* 메인 컨텐츠 */}
            <div className="designbase-ad-banner__main">
                {/* 아이콘 영역 */}
                <div className="designbase-ad-banner__icon">
                    {displayIcon}
                    {type === 'topbar' && (
                        <span className="designbase-ad-banner__label">특별 이벤트</span>
                    )}
                    {type === 'floating' && (
                        <span className="designbase-ad-banner__badge">HOT DEAL</span>
                    )}
                </div>

                {/* 텍스트 영역 */}
                <div className="designbase-ad-banner__text">
                    <h2 className="designbase-ad-banner__title">{displayTitle}</h2>
                    <p className="designbase-ad-banner__subtitle">{displaySubtitle}</p>

                    {/* 카운트다운 */}
                    {showCountdown && countdownEndDate && (
                        <div className="designbase-ad-banner__countdown">
                            <Countdown
                                endDate={countdownEndDate}
                                size="s"
                                variant="compact"
                                showLabels={false}
                                onComplete={() => {
                                    console.log('카운트다운 완료!');
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* CTA 버튼 */}
                <div className="designbase-ad-banner__actions">
                    <Button
                        variant="primary"
                        size={type === 'hero' ? 'l' : type === 'card' ? 's' : 'm'}
                        onPress={handleCtaClick}
                        className="designbase-ad-banner__cta"
                        fullWidth={type === 'floating'}
                    >
                        {displayCtaText}
                        <ArrowRightIcon size={type === 'hero' ? 20 : 16} />
                    </Button>
                </div>
            </div>

            {/* 자동 닫기 프로그레스 바 */}
            {autoClose && (
                <div className="designbase-ad-banner__progress">
                    <div
                        className="designbase-ad-banner__progress-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}
        </div>
    );

    return (
        <div className={classes}>
            {useRandomGradient ? (
                <RandomGradient
                    scheme={getGradientScheme()}
                    tone={gradientTone}
                    animated={gradientAnimated}
                    height="100%"
                    width="100%"
                    className="designbase-ad-banner__gradient-bg"
                >
                    {bannerContent}
                </RandomGradient>
            ) : (
                bannerContent
            )}
        </div>
    );
};

// 기본 텍스트 헬퍼
function getDefaultTitle(type: AdBannerType): string {
    const titles: Record<AdBannerType, string> = {
        hero: '지금 바로 시작하세요',
        topbar: '🎉 신규 가입 시 10,000원 적립금 증정!',
        card: '프리미엄 멤버십',
        floating: '오늘만 특가!',
    };
    return titles[type];
}

function getDefaultSubtitle(type: AdBannerType): string {
    const subtitles: Record<AdBannerType, string> = {
        hero: '최대 50% 할인된 가격으로 프리미엄 서비스를 경험해보세요. 기간 한정 특별 혜택!',
        topbar: '오늘 하루만 특별 혜택',
        card: '무제한 서비스 이용권을 특별가에 만나보세요',
        floating: '장바구니에 담긴 상품 추가 20% 할인',
    };
    return subtitles[type];
}

function getDefaultCtaText(type: AdBannerType): string {
    const ctaTexts: Record<AdBannerType, string> = {
        hero: '자세히 보기',
        topbar: '지금 가입하기',
        card: '알아보기',
        floating: '할인받기',
    };
    return ctaTexts[type];
}

AdBanner.displayName = 'AdBanner';

export default AdBanner;
