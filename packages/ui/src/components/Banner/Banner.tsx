import React from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import './Banner.scss';

export type BannerSize = 's' | 'm' | 'l';
export type BannerVariant = 'primary' | 'secondary' | 'tertiary' | 'image';

export interface BannerAction {
    /** 액션 텍스트 */
    text: string;
    /** 액션 링크 */
    href?: string;
    /** 액션 타입 */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    /** 액션 크기 */
    size?: 's' | 'm' | 'l';
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
    /** 배너 크기 */
    size?: BannerSize;
    /** 배너 변형 */
    variant?: BannerVariant;
    /** 배경 이미지 (variant가 'image'일 때 사용) */
    backgroundImage?: string;
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
    size = 'm',
    variant = 'primary',
    backgroundImage,
    className,
}) => {
    // 아이콘 크기 계산 (m이 기본값)
    const iconSize = size === 's' ? 16 : size === 'l' ? 24 : 20;

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
        if (variant !== 'image' || !backgroundImage) return null;

        return (
            <>
                <div
                    className="designbase-banner__background"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <div className="designbase-banner__overlay" />
            </>
        );
    };

    const classes = clsx(
        'designbase-banner',
        `designbase-banner--${size}`,
        `designbase-banner--${variant}`,
        className
    );

    return (
        <div className={classes}>
            {renderBackground()}

            <div className="designbase-banner__container">
                {icon && (
                    <div className="designbase-banner__icon">
                        {React.isValidElement(icon) ? (
                            React.cloneElement(icon as React.ReactElement, {
                                size: iconSize,
                                color: 'currentColor'
                            })
                        ) : icon}
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
            </div>
        </div>
    );
};

export default Banner;
