import React from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import './Banner.scss';

export type BannerSize = 'sm' | 'md' | 'lg';
export type BannerVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'promo';
export type BannerStyle = 'solid' | 'outline' | 'soft' | 'gradient';
export type BannerPosition = 'top' | 'bottom' | 'fixed' | 'sticky';
export type BannerAlignment = 'left' | 'center' | 'right';

export interface BannerAction {
    /** 액션 텍스트 */
    text: string;
    /** 액션 링크 */
    href?: string;
    /** 액션 타입 */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    /** 액션 크기 */
    size?: 'sm' | 'md' | 'lg';
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 아이콘 */
    icon?: React.ReactNode;
    /** 새 창에서 열기 */
    external?: boolean;
}

export interface BannerProps {
    /** 배너 제목 */
    title?: string;
    /** 배너 설명 */
    description?: string;
    /** 배너 아이콘 */
    icon?: React.ReactNode;
    /** 배너 이미지 */
    image?: string;
    /** 배너 이미지 대체 텍스트 */
    imageAlt?: string;
    /** 액션들 */
    actions?: BannerAction[];
    /** 닫기 버튼 표시 */
    dismissible?: boolean;
    /** 자동 닫기 시간 (ms) */
    autoDismiss?: number;
    /** 배너 크기 */
    size?: BannerSize;
    /** 배너 스타일 변형 */
    variant?: BannerVariant;
    /** 배너 스타일 */
    style?: BannerStyle;
    /** 배너 위치 */
    position?: BannerPosition;
    /** 콘텐츠 정렬 */
    alignment?: BannerAlignment;
    /** 애니메이션 */
    animated?: boolean;
    /** 전체 너비 */
    fullWidth?: boolean;
    /** 그림자 */
    shadow?: boolean;
    /** 둥근 모서리 */
    rounded?: boolean;
    /** 배경 이미지 */
    backgroundImage?: string;
    /** 배경 오버레이 색상 */
    overlayColor?: string;
    /** 배경 오버레이 투명도 */
    overlayOpacity?: number;
    /** 닫기 핸들러 */
    onDismiss?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

const Banner: React.FC<BannerProps> = ({
    title,
    description,
    icon,
    image,
    imageAlt,
    actions = [],
    dismissible = false,
    autoDismiss,
    size = 'md',
    variant = 'default',
    style = 'solid',
    position = 'top',
    alignment = 'left',
    animated = false,
    fullWidth = false,
    shadow = false,
    rounded = true,
    backgroundImage,
    overlayColor,
    overlayOpacity = 0.1,
    onDismiss,
    className,
}) => {
    const [isVisible, setIsVisible] = React.useState(true);

    // 자동 닫기
    React.useEffect(() => {
        if (autoDismiss && autoDismiss > 0) {
            const timer = setTimeout(() => {
                handleDismiss();
            }, autoDismiss);

            return () => clearTimeout(timer);
        }
    }, [autoDismiss]);

    const handleDismiss = () => {
        setIsVisible(false);
        onDismiss?.();
    };

    const renderActions = () => {
        if (actions.length === 0) return null;

        return (
            <div className="designbase-banner__actions">
                {actions.map((action, index) => (
                    <Button
                        key={index}
                        href={action.href}
                        variant={action.variant || 'primary'}
                        size={action.size || 'sm'}
                        onClick={action.onClick}
                        target={action.external ? '_blank' : undefined}
                        rel={action.external ? 'noopener noreferrer' : undefined}
                        icon={action.icon}
                    >
                        {action.text}
                    </Button>
                ))}
            </div>
        );
    };

    const renderBackground = () => {
        if (!backgroundImage) return null;

        return (
            <div
                className="designbase-banner__background"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
        );
    };

    const renderOverlay = () => {
        if (!overlayColor && !backgroundImage) return null;

        return (
            <div
                className="designbase-banner__overlay"
                style={{
                    backgroundColor: overlayColor,
                    opacity: overlayOpacity
                }}
            />
        );
    };

    const classes = clsx(
        'designbase-banner',
        `designbase-banner--size-${size}`,
        `designbase-banner--variant-${variant}`,
        `designbase-banner--style-${style}`,
        `designbase-banner--position-${position}`,
        `designbase-banner--alignment-${alignment}`,
        {
            'designbase-banner--animated': animated,
            'designbase-banner--full-width': fullWidth,
            'designbase-banner--shadow': shadow,
            'designbase-banner--rounded': rounded,
            'designbase-banner--dismissible': dismissible,
            'designbase-banner--visible': isVisible,
            'designbase-banner--hidden': !isVisible,
        },
        className
    );

    if (!isVisible) return null;

    return (
        <div className={classes}>
            {renderBackground()}
            {renderOverlay()}

            <div className="designbase-banner__container">
                {icon && (
                    <div className="designbase-banner__icon">
                        {icon}
                    </div>
                )}

                {image && (
                    <div className="designbase-banner__image">
                        <img src={image} alt={imageAlt || title || 'Banner image'} />
                    </div>
                )}

                <div className="designbase-banner__content">
                    {title && (
                        <h3 className="designbase-banner__title">
                            {title}
                        </h3>
                    )}

                    {description && (
                        <p className="designbase-banner__description">
                            {description}
                        </p>
                    )}
                </div>

                {renderActions()}

                {dismissible && (
                    <button
                        className="designbase-banner__dismiss"
                        onClick={handleDismiss}
                        aria-label="닫기"
                    >
                        ×
                    </button>
                )}
            </div>
        </div>
    );
};

export default Banner;
