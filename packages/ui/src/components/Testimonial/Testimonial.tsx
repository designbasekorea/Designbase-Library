import React from 'react';
import clsx from 'clsx';
import { Avatar, type AvatarProps } from '../Avatar';
import { Badge, type BadgeProps } from '../Badge';
import { Rating, type RatingProps } from '../Rating';
import './Testimonial.scss';

export type TestimonialAlignment = 'left' | 'center';
export type TestimonialSize = 's' | 'm' | 'l';

export interface TestimonialProps {
    /** 추천/후기 내용 */
    quote: string;
    /** 추천인 이름 */
    author: string;
    /** 추천인 직책 */
    role?: string;
    /** 추천인 소속 */
    company?: string;
    /** 추천인 아바타 이미지 */
    avatar?: string;
    /** 별점 값 */
    rating?: number;
    /** 별점 최대 값 (기본 5) */
    maxRating?: number;
    /** 레이아웃 크기 */
    size?: TestimonialSize;
    /** 정렬 */
    align?: TestimonialAlignment;
    /** 상단 라벨 (예: Featured, Top pick) */
    badge?: string;
    /** 하단 추가 콘텐츠 */
    children?: React.ReactNode;
    /** 커스텀 클래스 */
    className?: string;
    /** 뱃지 컴포넌트 커스터마이즈 */
    badgeProps?: Omit<BadgeProps, 'children'>;
    /** 아바타 컴포넌트 커스터마이즈 */
    avatarProps?: Partial<AvatarProps>;
    /** 별점 컴포넌트 커스터마이즈 */
    ratingProps?: Omit<RatingProps, 'value'>;
}

const clampRating = (rating: number | undefined, maxRating: number) => {
    if (typeof rating !== 'number' || Number.isNaN(rating)) return undefined;
    if (rating < 0) return 0;
    if (rating > maxRating) return maxRating;
    return Math.round(rating * 10) / 10;
};

export const Testimonial: React.FC<TestimonialProps> = ({
    quote,
    author,
    role,
    company,
    avatar,
    rating,
    maxRating = 5,
    size = 'm',
    align = 'left',
    badge,
    children,
    className,
    badgeProps,
    avatarProps,
    ratingProps,
}) => {
    const clampedRating = clampRating(rating, maxRating);
    const avatarSizeMap: Record<TestimonialSize, AvatarProps['size']> = {
        s: 's',
        m: 'm',
        l: 'l',
    };
    const ratingSizeMap: Record<TestimonialSize, RatingProps['size']> = {
        s: 's',
        m: 'm',
        l: 'l',
    };

    const { className: badgeCustomClassName, size: badgeSize, variant: badgeVariant, style: badgeStyle, ...restBadgeProps } = badgeProps ?? {};
    const { className: avatarCustomClassName, size: avatarSize, alt: avatarAlt, src: avatarSrc, ...restAvatarProps } = avatarProps ?? {};
    const {
        className: ratingCustomClassName,
        maxValue: ratingMaxValueOverride,
        size: ratingSize,
        display: ratingDisplay,
        allowHalf: ratingAllowHalf,
        readonly: ratingReadonly,
        color: ratingColor,
        customColor: ratingCustomColor,
        ...restRatingProps
    } = ratingProps ?? {};

    const computedBadgeSize = badgeSize ?? 's';
    const computedBadgeVariant = badgeVariant ?? 'primary';
    const computedBadgeStyle = badgeStyle ?? 'text';

    const computedAvatarSrc = avatarSrc ?? avatar;
    const computedAvatarAlt = avatarAlt ?? `${author} 프로필 이미지`;
    const computedAvatarSize = avatarSize ?? avatarSizeMap[size];

    const computedRatingMaxValue = ratingMaxValueOverride ?? maxRating;
    const computedRatingSize = ratingSize ?? ratingSizeMap[size];
    const computedRatingDisplay = ratingDisplay ?? 'both';
    const computedRatingAllowHalf = ratingAllowHalf ?? true;
    const computedRatingReadonly = ratingReadonly ?? true;
    const computedRatingColor = ratingColor ?? 'primary';
    const computedRatingCustomColor = computedRatingColor === 'custom' ? ratingCustomColor : undefined;

    const shouldRenderAvatar = Boolean(computedAvatarSrc || restAvatarProps.initials || restAvatarProps.icon);

    return (
        <figure
            className={clsx(
                'designbase-testimonial',
                `designbase-testimonial--size-${size}`,
                `designbase-testimonial--align-${align}`,
                className
            )}
        >
            {badge && (
                <Badge
                    size={computedBadgeSize}
                    variant={computedBadgeVariant}
                    style={computedBadgeStyle}
                    className={clsx('designbase-testimonial__badge', badgeCustomClassName)}
                    {...restBadgeProps}
                >
                    {badge}
                </Badge>
            )}
            <blockquote className="designbase-testimonial__quote">“{quote}”</blockquote>
            <figcaption className="designbase-testimonial__footer">
                {shouldRenderAvatar && (
                    <div className="designbase-testimonial__avatar">
                        <Avatar
                            src={computedAvatarSrc}
                            alt={computedAvatarAlt}
                            size={computedAvatarSize}
                            className={clsx('designbase-testimonial__avatar-image', avatarCustomClassName)}
                            {...restAvatarProps}
                        />
                    </div>
                )}

                <div className="designbase-testimonial__meta">
                    <span className="designbase-testimonial__author">{author}</span>
                    {(role || company) && (
                        <span className="designbase-testimonial__role">
                            {[role, company].filter(Boolean).join(' · ')}
                        </span>
                    )}
                </div>

                {typeof clampedRating === 'number' && (
                    <Rating
                        value={clampedRating}
                        maxValue={computedRatingMaxValue}
                        size={computedRatingSize}
                        display={computedRatingDisplay}
                        allowHalf={computedRatingAllowHalf}
                        readonly={computedRatingReadonly}
                        color={computedRatingColor}
                        customColor={computedRatingCustomColor}
                        className={clsx('designbase-testimonial__rating', ratingCustomClassName)}
                        {...restRatingProps}
                    />
                )}
            </figcaption>
            {children && <div className="designbase-testimonial__extra">{children}</div>}
        </figure>
    );
};

export default Testimonial;

