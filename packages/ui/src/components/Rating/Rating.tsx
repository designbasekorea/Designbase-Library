/**
 * Rating 컴포넌트
 * 
 * 별점 평가를 위한 컴포넌트입니다.
 * 읽기 전용과 인터랙티브 모드를 지원합니다.
 */

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import { StarIcon, StarFilledIcon, StarHalfIcon } from '@designbasekorea/icons';
import './Rating.scss';

// 타입 정의
export type RatingSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type RatingVariant = 'default' | 'minimal' | 'card' | 'inline' | 'large';
export type RatingType = 'star' | 'number' | 'percentage' | 'text';
export type RatingDisplay = 'stars' | 'number' | 'both' | 'reviews' | 'detailed';

export interface RatingProps {
    /** 평점 값 (0-5 또는 0-100) */
    value: number;
    /** 최대 평점 */
    maxValue?: number;
    /** Rating 크기 */
    size?: RatingSize;
    /** Rating 스타일 변형 */
    variant?: RatingVariant;
    /** Rating 타입 */
    type?: RatingType;
    /** 표시 방식 */
    display?: RatingDisplay;
    /** 리뷰 수 */
    reviewCount?: number;
    /** 평점 텍스트 */
    ratingText?: string;
    /** 리뷰 텍스트 */
    reviewText?: string;
    /** 반올림 허용 */
    allowHalf?: boolean;
    /** 읽기 전용 */
    readonly?: boolean;
    /** 비활성화 */
    disabled?: boolean;
    /** 클릭 가능 */
    clickable?: boolean;
    /** 색상 */
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'custom';
    /** 커스텀 색상 */
    customColor?: string;
    /** 애니메이션 */
    animated?: boolean;
    /** 호버 효과 */
    hoverEffect?: boolean;
    /** 평점 변경 핸들러 */
    onChange?: (value: number) => void;
    /** 호버 핸들러 */
    onHover?: (value: number) => void;
    /** 클릭 핸들러 */
    onClick?: (value: number) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

const Rating: React.FC<RatingProps> = ({
    value,
    maxValue = 5,
    size = 'm',
    variant = 'default',
    type = 'star',
    display = 'stars',
    reviewCount,
    ratingText,
    reviewText,
    allowHalf = false,
    readonly = false,
    disabled = false,
    clickable = false,
    color = 'primary',
    customColor,
    animated = false,
    hoverEffect = true,
    onChange,
    onHover,
    onClick,
    className,
}) => {
    const [hoverValue, setHoverValue] = useState<number | null>(null);
    const [isHovering, setIsHovering] = useState(false);

    // 현재 표시할 값 (호버 중이면 호버 값, 아니면 실제 값)
    const displayValue = hoverValue !== null ? hoverValue : value;

    // 별점 계산
    const getStarValue = useCallback((index: number) => {
        const starIndex = index + 1;
        const normalizedValue = (displayValue / maxValue) * 5;

        if (allowHalf) {
            if (normalizedValue >= starIndex) return 1; // 완전한 별
            if (normalizedValue >= starIndex - 0.5) return 0.5; // 반별
            return 0; // 빈 별
        } else {
            return normalizedValue >= starIndex ? 1 : 0;
        }
    }, [displayValue, maxValue, allowHalf]);

    // 평점 텍스트 생성
    const getRatingText = useCallback(() => {
        if (ratingText) return ratingText;

        const normalizedValue = (value / maxValue) * 5;
        if (type === 'percentage') {
            return `${Math.round((value / maxValue) * 100)}%`;
        } else if (type === 'number') {
            return allowHalf ? normalizedValue.toFixed(1) : Math.round(normalizedValue).toString();
        } else {
            return `${normalizedValue.toFixed(1)}/5`;
        }
    }, [value, maxValue, type, allowHalf, ratingText]);

    // 리뷰 텍스트 생성
    const getReviewText = useCallback(() => {
        if (reviewText) return reviewText;
        if (!reviewCount) return '';

        if (reviewCount === 1) return '1 리뷰';
        return `${reviewCount.toLocaleString()} 리뷰`;
    }, [reviewCount, reviewText]);

    // 별점 클릭 핸들러
    const handleStarClick = useCallback((index: number) => {
        if (disabled || readonly || !clickable) return;

        const clickedValue = index + 1;
        const newValue = (clickedValue / 5) * maxValue;
        onChange?.(newValue);
        onClick?.(newValue);
    }, [disabled, readonly, clickable, maxValue, onChange, onClick]);

    // 별점 호버 핸들러
    const handleStarHover = useCallback((index: number) => {
        if (disabled || readonly || !hoverEffect) return;

        const hoveredValue = index + 1;
        const normalizedValue = (hoveredValue / 5) * maxValue;
        setHoverValue(normalizedValue);
        setIsHovering(true);
        onHover?.(normalizedValue);
    }, [disabled, readonly, hoverEffect, maxValue, onHover]);

    // 호버 아웃 핸들러
    const handleStarHoverOut = useCallback(() => {
        if (disabled || readonly) return;

        setHoverValue(null);
        setIsHovering(false);
    }, [disabled, readonly]);

    // 별 아이콘 렌더링
    const renderStar = useCallback((index: number) => {
        const starValue = getStarValue(index);
        const isClickable = clickable && !disabled && !readonly;

        const starProps = {
            size: size === 'xs' ? 12 : size === 's' ? 16 : size === 'm' ? 20 : size === 'l' ? 24 : 32,
            className: clsx(
                'designbase-rating__star',
                {
                    'designbase-rating__star--clickable': isClickable,
                    'designbase-rating__star--animated': animated,
                }
            ),
            onClick: () => handleStarClick(index),
            onMouseEnter: () => handleStarHover(index),
            onMouseLeave: handleStarHoverOut,
        };

        if (starValue === 1) {
            return <StarFilledIcon key={index} {...starProps} />;
        } else if (starValue === 0.5 && allowHalf) {
            return <StarHalfIcon key={index} {...starProps} />;
        } else {
            return <StarIcon key={index} {...starProps} />;
        }
    }, [getStarValue, size, clickable, disabled, readonly, animated, allowHalf, handleStarClick, handleStarHover, handleStarHoverOut]);

    // 숫자 평점 렌더링
    const renderNumberRating = useCallback(() => {
        return (
            <span className="designbase-rating__number">
                {getRatingText()}
            </span>
        );
    }, [getRatingText]);

    // 리뷰 수 렌더링
    const renderReviewCount = useCallback(() => {
        const text = getReviewText();
        if (!text) return null;

        return (
            <span className="designbase-rating__review-count">
                {text}
            </span>
        );
    }, [getReviewText]);

    // 상세 정보 렌더링
    const renderDetailedInfo = useCallback(() => {
        return (
            <div className="designbase-rating__detailed">
                <div className="designbase-rating__rating-info">
                    {renderNumberRating()}
                    {renderReviewCount()}
                </div>
            </div>
        );
    }, [renderNumberRating, renderReviewCount]);

    // 클래스명 생성
    const classes = clsx(
        'designbase-rating',
        `designbase-rating--size-${size}`,
        `designbase-rating--variant-${variant}`,
        `designbase-rating--type-${type}`,
        `designbase-rating--display-${display}`,
        `designbase-rating--color-${color}`,
        {
            'designbase-rating--readonly': readonly,
            'designbase-rating--disabled': disabled,
            'designbase-rating--clickable': clickable,
            'designbase-rating--animated': animated,
            'designbase-rating--hovering': isHovering,
        },
        className
    );

    // 커스텀 색상 스타일
    const customStyle = customColor ? { '--rating-color': customColor } as React.CSSProperties : undefined;

    return (
        <div className={classes} style={customStyle}>
            {/* 별점 표시 */}
            {display === 'stars' || display === 'both' || display === 'detailed' ? (
                <div className="designbase-rating__stars">
                    {Array.from({ length: 5 }, (_, index) => renderStar(index))}
                </div>
            ) : null}

            {/* 숫자 평점 표시 */}
            {display === 'number' || display === 'both' ? (
                <div className="designbase-rating__number-container">
                    {renderNumberRating()}
                </div>
            ) : null}

            {/* 리뷰 수 표시 */}
            {display === 'reviews' ? (
                <div className="designbase-rating__reviews">
                    {renderReviewCount()}
                </div>
            ) : null}

            {/* 상세 정보 표시 */}
            {display === 'detailed' ? (
                renderDetailedInfo()
            ) : null}
        </div>
    );
};

export default Rating;
