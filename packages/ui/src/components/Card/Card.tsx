import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import { Image } from '../Image/Image';
import './Card.scss';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled' | 'flat';
export type CardSize = 's' | 'm' | 'l' | 'xl';
export type CardLayout = 'vertical' | 'horizontal' | 'compact';
export type CardImagePosition = 'top' | 'bottom' | 'left' | 'right' | 'background';

export interface CardImage {
    src: string;
    alt?: string;
    ratio?: '1:1' | '16:9' | '4:3' | '3:2' | '3:4' | '2:1' | 'auto';
    fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    loading?: 'lazy' | 'eager';
    placeholder?: 'skeleton' | 'blur' | 'none';
    onClick?: () => void;
}

export interface CardAction {
    label: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 's' | 'm' | 'l';
    icon?: React.ComponentType<any>;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export interface CardProps {
    title?: string;
    subtitle?: string;
    description?: string;
    children?: React.ReactNode;
    image?: CardImage;
    icon?: React.ComponentType<any>;
    actions?: CardAction[];
    tags?: string[];
    meta?: {
        author?: string;
        date?: string;
        views?: number;
        likes?: number;
        comments?: number;
        custom?: Record<string, any>;
    };
    variant?: CardVariant;
    size?: CardSize;
    layout?: CardLayout;
    imagePosition?: CardImagePosition;
    fullWidth?: boolean;
    clickable?: boolean;
    hoverable?: boolean;
    selectable?: boolean;
    selected?: boolean;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    onSelect?: (selected: boolean) => void;
    onAction?: (action: CardAction, index: number) => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
    {
        title,
        subtitle,
        description,
        children,
        image,
        icon: Icon,
        actions = [],
        tags = [],
        meta,
        variant = 'default',
        size = 'm',
        layout = 'vertical',
        imagePosition = 'top',
        fullWidth = false,
        clickable = false,
        hoverable = false,
        selectable = false,
        selected = false,
        disabled = false,
        loading = false,
        className,
        style,
        onClick,
        onSelect,
        onAction,
    },
    ref
) {
    // 아이콘 크기(과도하지 않게 정규화)
    const iconSize = size === 's' ? 16 : size === 'l' ? 22 : size === 'xl' ? 24 : 18;

    const handleClick = () => {
        if (!disabled && !loading && onClick) onClick();
    };

    const handleSelect = () => {
        if (!disabled && !loading && selectable && onSelect) onSelect(!selected);
    };

    const handleActionClick = (action: CardAction, index: number) => {
        if (!disabled && !loading && action.onClick) action.onClick();
        onAction?.(action, index);
    };

    const classes = clsx(
        'designbase-card',
        `designbase-card--${variant}`,
        `designbase-card--${size}`,
        `designbase-card--${layout}`,
        {
            'designbase-card--full-width': fullWidth,
            'designbase-card--clickable': clickable,
            'designbase-card--hoverable': hoverable,
            'designbase-card--selectable': selectable,
            'designbase-card--selected': selected,
            'designbase-card--disabled': disabled,
            'designbase-card--loading': loading,
            'designbase-card--with-image': !!image,
            [`designbase-card--image-${imagePosition}`]: !!image,
        },
        className
    );

    const renderImage = () => {
        if (!image) return null;

        const imageClasses = clsx(
            'designbase-card__image',
            `designbase-card__image--${imagePosition}`
        );

        return (
            <div className={imageClasses}>
                <Image
                    src={image.src}
                    alt={image.alt || title || 'Card image'}
                    ratio={image.ratio}
                    fit={image.fit}
                    loading={image.loading}
                    placeholder={image.placeholder}
                    onClick={image.onClick}
                    className="designbase-card__image-element"
                />
            </div>
        );
    };

    const renderIcon = () => {
        if (!Icon) return null;
        return (
            <div className="designbase-card__icon" aria-hidden="true">
                <Icon size={iconSize} color="currentColor" className="designbase-card__icon-element" />
            </div>
        );
    };

    const renderTags = () => {
        if (!tags?.length) return null;
        return (
            <div className="designbase-card__tags">
                {tags.map((tag, i) => (
                    <span key={i} className="designbase-card__tag">{tag}</span>
                ))}
            </div>
        );
    };

    const renderMeta = () => {
        if (!meta) return null;
        const items: Array<[string, React.ReactNode]> = [];

        if (meta.author) items.push(['작성자', meta.author]);
        if (meta.date) items.push(['날짜', meta.date]);
        if (typeof meta.views === 'number') items.push(['조회수', meta.views]);
        if (typeof meta.likes === 'number') items.push(['좋아요', meta.likes]);
        if (typeof meta.comments === 'number') items.push(['댓글', meta.comments]);
        if (meta.custom) {
            Object.entries(meta.custom).forEach(([key, value]) => {
                items.push([key, value as React.ReactNode]);
            });
        }

        if (!items.length) return null;

        return (
            <div className="designbase-card__meta">
                {items.map(([label, value], idx) => (
                    <span key={`${label}-${idx}`} className="designbase-card__meta-item">
                        <span className="designbase-card__meta-label">{label}</span>
                        <span className="designbase-card__meta-sep">·</span>
                        <span className="designbase-card__meta-value">{value}</span>
                    </span>
                ))}
            </div>
        );
    };

    const renderActions = () => {
        if (!actions?.length) return null;

        return (
            <div className="designbase-card__actions">
                {actions.map((action, index) => {
                    const ActionIcon = action.icon;
                    return (
                        <Button
                            key={index}
                            variant={action.variant || 'primary'}
                            size={action.size || 's'}
                            onClick={() => handleActionClick(action, index)}
                            disabled={action.disabled || disabled}
                            loading={!!action.loading}
                            icon={ActionIcon}
                        >
                            {action.label}
                        </Button>
                    );
                })}
            </div>
        );
    };

    const renderContent = () => (
        <div className="designbase-card__content">
            {renderIcon()}

            {(title || subtitle) && (
                <div className="designbase-card__header">
                    {title && <h3 className="designbase-card__title">{title}</h3>}
                    {subtitle && <p className="designbase-card__subtitle">{subtitle}</p>}
                </div>
            )}

            {description && <p className="designbase-card__description">{description}</p>}

            {children && <div className="designbase-card__body">{children}</div>}

            {renderTags()}
            {renderMeta()}
            {renderActions()}
        </div>
    );

    return (
        <div
            ref={ref}
            className={classes}
            style={style}
            onClick={clickable ? handleClick : undefined}
            onKeyDown={(e) => {
                if (clickable && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleClick();
                }
            }}
            tabIndex={clickable ? 0 : undefined}
            role={clickable ? 'button' : undefined}
            aria-label={clickable ? title : undefined}
            aria-disabled={disabled || loading ? true : undefined}
        >
            {selectable && (
                <div className="designbase-card__select-overlay" onClick={handleSelect}>
                    <input
                        type="checkbox"
                        checked={selected}
                        onChange={handleSelect}
                        className="designbase-card__select-input"
                        aria-label="카드 선택"
                    />
                </div>
            )}

            {loading && (
                <div className="designbase-card__loading-overlay" aria-live="polite" aria-busy="true">
                    <div className="designbase-card__loading-spinner" />
                </div>
            )}

            {imagePosition === 'background' ? (
                <>
                    {renderImage()}
                    <div className="designbase-card__overlay">{renderContent()}</div>
                </>
            ) : (
                <>
                    {(imagePosition === 'top' || imagePosition === 'left') && renderImage()}
                    {renderContent()}
                    {(imagePosition === 'bottom' || imagePosition === 'right') && renderImage()}
                </>
            )}
        </div>
    );
});

Card.displayName = 'Card';

export { Card };
export default Card;
