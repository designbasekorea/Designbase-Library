import React from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';
import Stat from '../Stat/Stat';
import './HeroFeature.scss';

export type HeroFeatureSize = 'sm' | 'md' | 'lg' | 'xl';
export type HeroFeatureVariant = 'default' | 'centered' | 'split' | 'overlay' | 'minimal';
export type HeroFeatureTheme = 'light' | 'dark' | 'gradient' | 'image';
export type HeroFeatureAlignment = 'left' | 'center' | 'right';

export interface HeroFeatureButton {
    /** 버튼 텍스트 */
    text: string;
    /** 버튼 링크 */
    href?: string;
    /** 버튼 타입 */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    /** 버튼 크기 */
    size?: 'sm' | 'md' | 'lg';
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 아이콘 */
    icon?: React.ReactNode;
    /** 새 창에서 열기 */
    external?: boolean;
}

export interface HeroFeatureProps {
    /** 제목 */
    title: string;
    /** 부제목 */
    subtitle?: string;
    /** 설명 */
    description?: string;
    /** 이미지 URL */
    image?: string;
    /** 이미지 대체 텍스트 */
    imageAlt?: string;
    /** 배경 이미지 URL */
    backgroundImage?: string;
    /** 배경 비디오 URL */
    backgroundVideo?: string;
    /** 배경 오버레이 색상 */
    overlayColor?: string;
    /** 배경 오버레이 투명도 */
    overlayOpacity?: number;
    /** 버튼들 */
    buttons?: HeroFeatureButton[];
    /** 배지 */
    badge?: {
        text: string;
        color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
        variant?: 'solid' | 'outline' | 'soft';
    };
    /** 통계 정보 */
    stats?: {
        label: string;
        value: string;
        description?: string;
    }[];
    /** 아이콘 */
    icon?: React.ReactNode;
    /** Hero 크기 */
    size?: HeroFeatureSize;
    /** Hero 스타일 변형 */
    variant?: HeroFeatureVariant;
    /** Hero 테마 */
    theme?: HeroFeatureTheme;
    /** 콘텐츠 정렬 */
    alignment?: HeroFeatureAlignment;
    /** 애니메이션 */
    animated?: boolean;
    /** 패럴랙스 효과 */
    parallax?: boolean;
    /** 전체 높이 */
    fullHeight?: boolean;
    /** 최소 높이 */
    minHeight?: string;
    /** 최대 높이 */
    maxHeight?: string;
    /** 추가 CSS 클래스 */
    className?: string;
}

const HeroFeature: React.FC<HeroFeatureProps> = ({
    title,
    subtitle,
    description,
    image,
    imageAlt,
    backgroundImage,
    backgroundVideo,
    overlayColor,
    overlayOpacity = 0.5,
    buttons = [],
    badge,
    stats = [],
    icon,
    size = 'lg',
    variant = 'default',
    theme = 'light',
    alignment = 'left',
    animated = false,
    parallax = false,
    fullHeight = false,
    minHeight,
    maxHeight,
    className,
}) => {
    const renderBadge = () => {
        if (!badge) return null;

        // Badge 컴포넌트의 variant와 style 매핑
        const getBadgeVariant = (color: string) => {
            switch (color) {
                case 'primary': return 'primary';
                case 'secondary': return 'secondary';
                case 'success': return 'success';
                case 'warning': return 'warning';
                case 'error': return 'danger';
                case 'info': return 'info';
                default: return 'primary';
            }
        };

        const getBadgeStyle = (variant: string) => {
            switch (variant) {
                case 'solid': return 'text';
                case 'outline': return 'outlined';
                case 'soft': return 'text';
                default: return 'text';
            }
        };

        return (
            <Badge
                variant={getBadgeVariant(badge.color || 'primary')}
                style={getBadgeStyle(badge.variant || 'solid')}
                size="md"
                className="designbase-hero-feature__badge"
            >
                {badge.text}
            </Badge>
        );
    };

    const renderButtons = () => {
        if (buttons.length === 0) return null;

        return (
            <div className="designbase-hero-feature__buttons">
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        href={button.href}
                        variant={button.variant || 'primary'}
                        size={button.size || 'md'}
                        onClick={button.onClick}
                        target={button.external ? '_blank' : undefined}
                        rel={button.external ? 'noopener noreferrer' : undefined}
                        icon={button.icon}
                    >
                        {button.text}
                    </Button>
                ))}
            </div>
        );
    };

    const renderStats = () => {
        if (stats.length === 0) return null;

        return (
            <div className="designbase-hero-feature__stats">
                {stats.map((stat, index) => (
                    <Stat
                        key={index}
                        value={stat.value}
                        label={stat.label}
                        description={stat.description}
                        size="md"
                        variant="minimal"
                        layout="vertical"
                        className="designbase-hero-feature__stat"
                    />
                ))}
            </div>
        );
    };

    const renderImage = () => {
        if (!image) return null;

        return (
            <div className="designbase-hero-feature__image">
                <img
                    src={image}
                    alt={imageAlt || title}
                    className={clsx({
                        'designbase-hero-feature__image--parallax': parallax
                    })}
                />
            </div>
        );
    };

    const renderBackground = () => {
        if (backgroundVideo) {
            return (
                <video
                    className="designbase-hero-feature__background-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            );
        }

        if (backgroundImage) {
            return (
                <div
                    className="designbase-hero-feature__background-image"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            );
        }

        return null;
    };

    const renderOverlay = () => {
        if (!overlayColor && !backgroundImage && !backgroundVideo) return null;

        return (
            <div
                className="designbase-hero-feature__overlay"
                style={{
                    backgroundColor: overlayColor,
                    opacity: overlayOpacity
                }}
            />
        );
    };

    const classes = clsx(
        'designbase-hero-feature',
        `designbase-hero-feature--size-${size}`,
        `designbase-hero-feature--variant-${variant}`,
        `designbase-hero-feature--theme-${theme}`,
        `designbase-hero-feature--alignment-${alignment}`,
        {
            'designbase-hero-feature--animated': animated,
            'designbase-hero-feature--parallax': parallax,
            'designbase-hero-feature--full-height': fullHeight,
        },
        className
    );

    const containerStyle: React.CSSProperties = {};
    if (minHeight) containerStyle.minHeight = minHeight;
    if (maxHeight) containerStyle.maxHeight = maxHeight;

    return (
        <section className={classes} style={containerStyle}>
            {renderBackground()}
            {renderOverlay()}

            <div className="designbase-hero-feature__container">
                <div className="designbase-hero-feature__content">
                    {icon && (
                        <div className="designbase-hero-feature__icon">
                            {icon}
                        </div>
                    )}

                    {renderBadge()}

                    <h1 className="designbase-hero-feature__title">
                        {title}
                    </h1>

                    {subtitle && (
                        <h2 className="designbase-hero-feature__subtitle">
                            {subtitle}
                        </h2>
                    )}

                    {description && (
                        <p className="designbase-hero-feature__description">
                            {description}
                        </p>
                    )}

                    {renderButtons()}
                    {renderStats()}
                </div>

                {variant === 'split' && renderImage()}
            </div>

            {variant !== 'split' && renderImage()}
        </section>
    );
};

export default HeroFeature;
