/**
 * Avatar 컴포넌트
 * 
 * 목적: 사용자 프로필 이미지나 이니셜을 표시하는 컴포넌트
 * 기능: 이미지, 이니셜, 아이콘, 그룹, 상태 표시
 * 접근성: ARIA 가이드라인 준수
 */

import React from 'react';
import clsx from 'clsx';
import { Badge } from '../Badge/Badge';
import './Avatar.scss';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export interface AvatarProps {
    /** 아바타 이미지 URL */
    src?: string;
    /** 이미지 로드 실패 시 대체 텍스트 */
    alt?: string;
    /** 이니셜 (이미지가 없을 때 표시) */
    initials?: string;
    /** 아이콘 (이미지와 이니셜이 없을 때 표시) */
    icon?: React.ReactNode;
    /** 아바타 크기 */
    size?: AvatarSize;
    /** 아바타 모양 */
    variant?: AvatarVariant;
    /** 상태 표시 */
    status?: AvatarStatus;
    /** 배지 숫자 */
    badge?: number;
    /** 배지 최대 숫자 */
    badgeMaxCount?: number;
    /** 배지 색상 */
    badgeVariant?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
    /** 배지 스타일 */
    badgeStyle?: 'dot' | 'number' | 'text' | 'outlined';
    /** 배지 텍스트 (badgeStyle이 'text'일 때 사용) */
    badgeText?: string;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export interface AvatarGroupProps {
    /** 아바타들 */
    children: React.ReactNode;
    /** 최대 표시 개수 */
    max?: number;
    /** 아바타 크기 */
    size?: AvatarSize;
    /** 아바타 모양 */
    variant?: AvatarVariant;
    /** 겹침 간격 */
    spacing?: 'tight' | 'normal' | 'loose';
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    initials,
    icon,
    size = 'md',
    variant = 'circle',
    status,
    badge,
    badgeMaxCount = 99,
    badgeVariant = 'danger',
    badgeStyle = 'number',
    badgeText,
    onClick,
    disabled = false,
    className,
    ...props
}) => {
    const [imageError, setImageError] = React.useState(false);
    const shouldShowImage = src && !imageError;
    const shouldShowInitials = !shouldShowImage && initials;
    const shouldShowIcon = !shouldShowImage && !shouldShowInitials && icon;

    const handleImageError = () => {
        setImageError(true);
    };

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    const classes = clsx(
        'designbase-avatar',
        `designbase-avatar--${size}`,
        variant && `designbase-avatar--${variant}`,
        {
            'designbase-avatar--clickable': onClick,
            'designbase-avatar--disabled': disabled,
        },
        className
    );

    const getInitials = () => {
        if (!initials) return '';
        return initials.slice(0, 2).toUpperCase();
    };

    return (
        <div
            className={classes}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick && !disabled ? 0 : undefined}
            onClick={handleClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
            {...props}
        >
            {shouldShowImage && (
                <img
                    src={src}
                    alt={alt || '아바타 이미지'}
                    className="designbase-avatar__image"
                    onError={handleImageError}
                />
            )}

            {shouldShowInitials && (
                <div className="designbase-avatar__initials">
                    {getInitials()}
                </div>
            )}

            {shouldShowIcon && (
                <div className="designbase-avatar__icon">
                    {icon}
                </div>
            )}

            {status && (
                <span className={clsx(
                    'designbase-avatar__status',
                    `designbase-avatar__status--${status}`
                )} />
            )}

            {/* 배지 */}
            {badge !== undefined && (
                <div className="designbase-avatar__badge">
                    <Badge
                        count={badgeStyle === 'text' ? undefined : badge}
                        maxCount={badgeMaxCount}
                        variant={badgeVariant}
                        style={badgeStyle}
                        size={size === 'xs' || size === 'sm' ? 'sm' : size === 'lg' || size === 'xl' || size === '2xl' ? 'lg' : 'md'}
                    >
                        {badgeStyle === 'text' ? badgeText : undefined}
                    </Badge>
                </div>
            )}
        </div>
    );
};

Avatar.displayName = 'Avatar';

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
    children,
    max,
    size = 'md',
    variant = 'circle',
    spacing = 'normal',
    className,
    ...props
}) => {
    const childrenArray = React.Children.toArray(children);
    const totalCount = childrenArray.length;
    const visibleCount = max ? Math.min(max, totalCount) : totalCount;
    const hiddenCount = totalCount - visibleCount;

    const classes = clsx(
        'designbase-avatar-group',
        `designbase-avatar-group--${size}`,
        `designbase-avatar-group--${variant}`,
        `designbase-avatar-group--${spacing}`,
        className
    );

    return (
        <div className={classes} {...props}>
            {childrenArray.slice(0, visibleCount).map((child, index) => (
                <div key={index} className="designbase-avatar-group__item">
                    {React.cloneElement(child as React.ReactElement, {
                        size,
                        variant,
                    })}
                </div>
            ))}

            {hiddenCount > 0 && (
                <div className="designbase-avatar-group__item">
                    <div className="designbase-avatar-group__overflow">
                        +{hiddenCount}
                    </div>
                </div>
            )}
        </div>
    );
};

AvatarGroup.displayName = 'AvatarGroup';

export default Avatar;
