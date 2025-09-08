import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import { Image } from '../Image/Image';
import './Card.scss';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled' | 'flat';
export type CardSize = 'sm' | 'md' | 'lg' | 'xl';
export type CardLayout = 'vertical' | 'horizontal' | 'compact';
export type CardImagePosition = 'top' | 'bottom' | 'left' | 'right' | 'background';

export interface CardImage {
    /** 이미지 URL */
    src: string;
    /** 이미지 대체 텍스트 */
    alt?: string;
    /** 이미지 비율 */
    ratio?: '1:1' | '16:9' | '4:3' | '3:2' | '3:4' | '2:1' | 'auto';
    /** 이미지 피팅 방식 */
    fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    /** 이미지 로딩 방식 */
    loading?: 'lazy' | 'eager';
    /** 이미지 플레이스홀더 */
    placeholder?: 'skeleton' | 'blur' | 'none';
    /** 이미지 클릭 핸들러 */
    onClick?: () => void;
}

export interface CardAction {
    /** 액션 라벨 */
    label: string;
    /** 액션 타입 */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    /** 액션 크기 */
    size?: 'sm' | 'md' | 'lg';
    /** 액션 아이콘 */
    icon?: React.ComponentType<any>;
    /** 액션 클릭 핸들러 */
    onClick?: () => void;
    /** 액션 비활성화 여부 */
    disabled?: boolean;
    /** 액션 로딩 상태 */
    loading?: boolean;
}

export interface CardProps {
    /** 카드 제목 */
    title?: string;
    /** 카드 부제목 */
    subtitle?: string;
    /** 카드 설명 */
    description?: string;
    /** 카드 내용 */
    children?: React.ReactNode;
    /** 카드 이미지 */
    image?: CardImage;
    /** 카드 아이콘 */
    icon?: React.ComponentType<any>;
    /** 카드 액션들 */
    actions?: CardAction[];
    /** 카드 태그들 */
    tags?: string[];
    /** 카드 메타 정보 */
    meta?: {
        /** 작성자 */
        author?: string;
        /** 날짜 */
        date?: string;
        /** 조회수 */
        views?: number;
        /** 좋아요 수 */
        likes?: number;
        /** 댓글 수 */
        comments?: number;
        /** 커스텀 메타 정보 */
        custom?: Record<string, any>;
    };
    /** 카드 변형 */
    variant?: CardVariant;
    /** 카드 크기 */
    size?: CardSize;
    /** 카드 레이아웃 */
    layout?: CardLayout;
    /** 이미지 위치 */
    imagePosition?: CardImagePosition;
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 클릭 가능 여부 */
    clickable?: boolean;
    /** 호버 효과 여부 */
    hoverable?: boolean;
    /** 선택 가능 여부 */
    selectable?: boolean;
    /** 선택된 상태 */
    selected?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 로딩 상태 */
    loading?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React.CSSProperties;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 선택 핸들러 */
    onSelect?: (selected: boolean) => void;
    /** 액션 클릭 핸들러 */
    onAction?: (action: CardAction, index: number) => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    (
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
            size = 'md',
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
    ) => {
        const handleClick = () => {
            if (!disabled && !loading && onClick) {
                onClick();
            }
        };

        const handleSelect = () => {
            if (!disabled && !loading && selectable && onSelect) {
                onSelect(!selected);
            }
        };

        const handleActionClick = (action: CardAction, index: number) => {
            if (!disabled && !loading && action.onClick) {
                action.onClick();
            }
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
                'designbase-card--with-image': image,
                [`designbase-card--image-${imagePosition}`]: image,
            },
            className
        );

        // 이미지 렌더링
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

        // 아이콘 렌더링
        const renderIcon = () => {
            if (!Icon) return null;

            return (
                <div className="designbase-card__icon">
                    <Icon className="designbase-card__icon-element" />
                </div>
            );
        };

        // 태그 렌더링
        const renderTags = () => {
            if (tags.length === 0) return null;

            return (
                <div className="designbase-card__tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="designbase-card__tag">
                            {tag}
                        </span>
                    ))}
                </div>
            );
        };

        // 메타 정보 렌더링
        const renderMeta = () => {
            if (!meta) return null;

            return (
                <div className="designbase-card__meta">
                    {meta.author && (
                        <span className="designbase-card__meta-item">
                            <span className="designbase-card__meta-label">작성자:</span>
                            <span className="designbase-card__meta-value">{meta.author}</span>
                        </span>
                    )}
                    {meta.date && (
                        <span className="designbase-card__meta-item">
                            <span className="designbase-card__meta-label">날짜:</span>
                            <span className="designbase-card__meta-value">{meta.date}</span>
                        </span>
                    )}
                    {meta.views !== undefined && (
                        <span className="designbase-card__meta-item">
                            <span className="designbase-card__meta-label">조회수:</span>
                            <span className="designbase-card__meta-value">{meta.views}</span>
                        </span>
                    )}
                    {meta.likes !== undefined && (
                        <span className="designbase-card__meta-item">
                            <span className="designbase-card__meta-label">좋아요:</span>
                            <span className="designbase-card__meta-value">{meta.likes}</span>
                        </span>
                    )}
                    {meta.comments !== undefined && (
                        <span className="designbase-card__meta-item">
                            <span className="designbase-card__meta-label">댓글:</span>
                            <span className="designbase-card__meta-value">{meta.comments}</span>
                        </span>
                    )}
                    {meta.custom && Object.entries(meta.custom).map(([key, value]) => (
                        <span key={key} className="designbase-card__meta-item">
                            <span className="designbase-card__meta-label">{key}:</span>
                            <span className="designbase-card__meta-value">{value}</span>
                        </span>
                    ))}
                </div>
            );
        };

        // 액션 버튼들 렌더링
        const renderActions = () => {
            if (actions.length === 0) return null;

            return (
                <div className="designbase-card__actions">
                    {actions.map((action, index) => {
                        const ActionIcon = action.icon;
                        return (
                            <Button
                                key={index}
                                variant={action.variant || 'primary'}
                                size={action.size || 'sm'}
                                onClick={() => handleActionClick(action, index)}
                                disabled={action.disabled || disabled}
                                loading={action.loading}
                                icon={ActionIcon}
                            >
                                {action.label}
                            </Button>
                        );
                    })}
                </div>
            );
        };

        // 카드 내용 렌더링
        const renderContent = () => (
            <div className="designbase-card__content">
                {renderIcon()}

                {(title || subtitle) && (
                    <div className="designbase-card__header">
                        {title && <h3 className="designbase-card__title">{title}</h3>}
                        {subtitle && <h4 className="designbase-card__subtitle">{subtitle}</h4>}
                    </div>
                )}

                {description && (
                    <p className="designbase-card__description">{description}</p>
                )}

                {children && (
                    <div className="designbase-card__body">{children}</div>
                )}

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
            >
                {selectable && (
                    <div className="designbase-card__select-overlay" onClick={handleSelect}>
                        <input
                            type="checkbox"
                            checked={selected}
                            onChange={handleSelect}
                            className="designbase-card__select-input"
                        />
                    </div>
                )}

                {loading && (
                    <div className="designbase-card__loading-overlay">
                        <div className="designbase-card__loading-spinner" />
                    </div>
                )}

                {imagePosition === 'background' ? (
                    <>
                        {renderImage()}
                        <div className="designbase-card__overlay">
                            {renderContent()}
                        </div>
                    </>
                ) : (
                    <>
                        {imagePosition === 'top' && renderImage()}
                        {imagePosition === 'left' && renderImage()}
                        {renderContent()}
                        {imagePosition === 'bottom' && renderImage()}
                        {imagePosition === 'right' && renderImage()}
                    </>
                )}
            </div>
        );
    }
);

Card.displayName = 'Card';

export { Card };
export default Card;
