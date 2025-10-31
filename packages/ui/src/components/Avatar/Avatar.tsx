/**
 * Avatar 컴포넌트
 * 
 * 목적: 사용자 프로필 이미지나 이니셜을 표시하는 컴포넌트
 * 기능: 이미지, 이니셜, 아이콘, 그룹, 상태 표시
 * 접근성: ARIA 가이드라인 준수
 */

import React, { useState } from 'react';
import clsx from 'clsx';
import { Badge } from '../Badge/Badge';
import { UserIcon } from '@designbasekorea/icons';
import './Avatar.scss';

export type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';
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
    size = 'm',
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
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    // 아이콘 크기 계산 (m이 기본값)
    const iconSize = size === 'xs' ? 12 : size === 's' ? 16 : size === 'm' ? 20 : size === 'l' ? 24 : size === 'xl' ? 32 : 40; // 2xl

    const shouldShowImage = src && !imageError;
    const shouldShowInitials = !shouldShowImage && initials;
    const shouldShowIcon = !shouldShowImage && !shouldShowInitials;

    const handleImageError = () => {
        setImageError(true);
        setImageLoading(false);
    };

    const handleImageLoad = () => {
        setImageLoading(false);
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

    // 랜덤 컬러 생성 함수
    const generateRandomColor = (text: string) => {
        // 텍스트를 기반으로 일관된 색상 생성
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            hash = text.charCodeAt(i) + ((hash << 5) - hash);
        }

        // 연한 배경색 팔레트
        const lightColors = [
            '#E3F2FD', // 연한 파랑
            '#F3E5F5', // 연한 보라
            '#E8F5E8', // 연한 초록
            '#FFF3E0', // 연한 주황
            '#FCE4EC', // 연한 핑크
            '#E0F2F1', // 연한 청록
            '#FFF8E1', // 연한 노랑
            '#F1F8E9', // 연한 라임
            '#E8EAF6', // 연한 인디고
            '#FFEBEE', // 연한 빨강
        ];

        // 진한 텍스트 색상 팔레트
        const darkColors = [
            '#1976D2', // 진한 파랑
            '#7B1FA2', // 진한 보라
            '#388E3C', // 진한 초록
            '#F57C00', // 진한 주황
            '#C2185B', // 진한 핑크
            '#00796B', // 진한 청록
            '#F9A825', // 진한 노랑
            '#689F38', // 진한 라임
            '#3F51B5', // 진한 인디고
            '#D32F2F', // 진한 빨강
        ];

        const colorIndex = Math.abs(hash) % lightColors.length;
        return {
            backgroundColor: lightColors[colorIndex],
            color: darkColors[colorIndex]
        };
    };

    const getInitials = () => {
        if (!initials) return '';
        // 한 글자만 표시 (첫 번째 글자)
        return initials.charAt(0).toUpperCase();
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
            {/* 로딩 상태 */}
            {imageLoading && shouldShowImage && (
                <div className="designbase-avatar__loading">
                    <div className="designbase-avatar__skeleton" />
                </div>
            )}

            {shouldShowImage && (
                <img
                    src={src}
                    alt={alt || '아바타 이미지'}
                    className="designbase-avatar__image"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                />
            )}

            {shouldShowInitials && (
                <div
                    className="designbase-avatar__initials"
                    style={generateRandomColor(initials || '')}
                >
                    {getInitials()}
                </div>
            )}

            {shouldShowIcon && (
                <div className="designbase-avatar__icon">
                    {icon ? (
                        React.isValidElement(icon) ? (
                            React.cloneElement(icon as React.ReactElement, {
                                size: iconSize,
                                color: 'currentColor'
                            })
                        ) : icon
                    ) : (
                        <UserIcon size={iconSize} color="currentColor" />
                    )}
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
                        size={size === 'xs' || size === 's' ? 's' : size === 'l' || size === 'xl' || size === '2xl' ? 'l' : 'm'}
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
    size = 'm',
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
