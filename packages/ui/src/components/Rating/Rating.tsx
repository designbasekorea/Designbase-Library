/**
 * Rating 컴포넌트
 * 
 * 별점 평가를 위한 컴포넌트입니다.
 * 읽기 전용과 인터랙티브 모드를 지원합니다.
 */

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import './Rating.scss';

export type RatingSize = 'sm' | 'md' | 'lg' | 'xl';
export type RatingVariant = 'default' | 'filled' | 'outlined';

export interface RatingProps {
    /** 현재 평점 (0-5) */
    value?: number;
    /** 최대 평점 */
    max?: number;
    /** 평점 크기 */
    size?: RatingSize;
    /** 평점 스타일 변형 */
    variant?: RatingVariant;
    /** 읽기 전용 모드 */
    readonly?: boolean;
    /** 평점 변경 핸들러 */
    onChange?: (value: number) => void;
    /** 평점에 마우스 오버 시 핸들러 */
    onHover?: (value: number) => void;
    /** 평점에서 마우스 아웃 시 핸들러 */
    onMouseLeave?: () => void;
    /** 평점 텍스트 표시 */
    showText?: boolean;
    /** 평점 텍스트 포맷터 */
    textFormatter?: (value: number, max: number) => string;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const Rating: React.FC<RatingProps> = ({
    value = 0,
    max = 5,
    size = 'md',
    variant = 'default',
    readonly = false,
    onChange,
    onHover,
    onMouseLeave,
    showText = false,
    textFormatter,
    className,
}) => {
    const [hoverValue, setHoverValue] = useState<number | null>(null);
    const [internalValue, setInternalValue] = useState(value);

    const displayValue = hoverValue !== null ? hoverValue : internalValue;

    const handleStarClick = useCallback((starValue: number) => {
        if (readonly) return;

        const newValue = starValue === internalValue ? 0 : starValue;
        setInternalValue(newValue);
        onChange?.(newValue);
    }, [readonly, internalValue, onChange]);

    const handleStarHover = useCallback((starValue: number) => {
        if (readonly) return;

        setHoverValue(starValue);
        onHover?.(starValue);
    }, [readonly, onHover]);

    const handleMouseLeave = useCallback(() => {
        if (readonly) return;

        setHoverValue(null);
        onMouseLeave?.();
    }, [readonly, onMouseLeave]);

    const classes = clsx(
        'designbase-rating',
        `designbase-rating--size-${size}`,
        `designbase-rating--variant-${variant}`,
        {
            'designbase-rating--readonly': readonly,
        },
        className
    );

    const defaultTextFormatter = (value: number, max: number) => {
        if (value === 0) return '평점 없음';
        if (value === 1) return '매우 나쁨';
        if (value === 2) return '나쁨';
        if (value === 3) return '보통';
        if (value === 4) return '좋음';
        if (value === 5) return '매우 좋음';
        return `${value}/${max}`;
    };

    const renderStar = (starValue: number) => {
        const isFilled = starValue <= displayValue;
        const isHalf = !isFilled && starValue - 0.5 <= displayValue;

        const starClasses = clsx(
            'designbase-rating__star',
            {
                'designbase-rating__star--filled': isFilled,
                'designbase-rating__star--half': isHalf,
            }
        );

        return (
            <button
                key={starValue}
                type="button"
                className={starClasses}
                onClick={() => handleStarClick(starValue)}
                onMouseEnter={() => handleStarHover(starValue)}
                onMouseLeave={handleMouseLeave}
                disabled={readonly}
                aria-label={`${starValue}점`}
                aria-pressed={starValue <= internalValue}
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </button>
        );
    };

    return (
        <div className={classes}>
            <div className="designbase-rating__stars">
                {Array.from({ length: max }, (_, index) => renderStar(index + 1))}
            </div>

            {showText && (
                <span className="designbase-rating__text">
                    {textFormatter ? textFormatter(displayValue, max) : defaultTextFormatter(displayValue, max)}
                </span>
            )}
        </div>
    );
};

export default Rating;
