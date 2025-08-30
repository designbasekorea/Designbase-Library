/**
 * Range Slider 컴포넌트
 * 
 * 목적: 범위 값을 선택하는 슬라이더 컴포넌트 제공
 * 기능: 단일 값/범위 값, 수치 표시, 마커, 단계 설정
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import './RangeSlider.scss';

export type RangeSliderSize = 'sm' | 'md' | 'lg';
export type RangeSliderVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export interface RangeSliderProps {
    /** 현재 값 (단일 값) */
    value?: number;
    /** 범위 값 [최소값, 최대값] */
    range?: [number, number];
    /** 최소값 */
    min?: number;
    /** 최대값 */
    max?: number;
    /** 단계 */
    step?: number;
    /** 슬라이더 크기 */
    size?: RangeSliderSize;
    /** 슬라이더 스타일 */
    variant?: RangeSliderVariant;
    /** 수치 표시 여부 */
    showValue?: boolean;
    /** 마커 표시 여부 */
    showMarks?: boolean;
    /** 마커 값들 */
    marks?: number[];
    /** 마커 라벨 */
    markLabels?: { [key: number]: string };
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 읽기 전용 여부 */
    readOnly?: boolean;
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 수직 방향 여부 */
    vertical?: boolean;
    /** 값 변경 핸들러 (단일 값) */
    onChange?: (value: number) => void;
    /** 범위 변경 핸들러 */
    onRangeChange?: (range: [number, number]) => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
    value,
    range,
    min = 0,
    max = 100,
    step = 1,
    size = 'md',
    variant = 'default',
    showValue = false,
    showMarks = false,
    marks = [],
    markLabels = {},
    disabled = false,
    readOnly = false,
    fullWidth = false,
    vertical = false,
    onChange,
    onRangeChange,
    className,
    ...props
}) => {
    const [internalValue, setInternalValue] = useState(value ?? min);
    const [internalRange, setInternalRange] = useState<[number, number]>(range ?? [min, max]);
    const [isDragging, setIsDragging] = useState(false);
    const [activeThumb, setActiveThumb] = useState<'min' | 'max' | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // 제어 컴포넌트 처리
    const isControlled = value !== undefined || range !== undefined;
    const currentValue = isControlled ? (value ?? internalValue) : internalValue;
    const currentRange = isControlled ? (range ?? internalRange) : internalRange;

    // 값 정규화
    const normalizeValue = useCallback((val: number) => {
        return Math.max(min, Math.min(max, val));
    }, [min, max]);

    // 퍼센트 계산
    const getPercentage = useCallback((val: number) => {
        return ((val - min) / (max - min)) * 100;
    }, [min, max]);

    // 픽셀에서 값 계산
    const getValueFromPixel = useCallback((pixel: number) => {
        if (!trackRef.current) return min;

        const rect = trackRef.current.getBoundingClientRect();
        const trackLength = vertical ? rect.height : rect.width;
        const position = vertical ? rect.bottom - pixel : pixel - rect.left;
        const percentage = (position / trackLength) * 100;
        const value = min + (percentage / 100) * (max - min);
        const steppedValue = Math.round(value / step) * step;

        return normalizeValue(steppedValue);
    }, [min, max, step, normalizeValue, vertical]);

    // 마우스/터치 이벤트 처리
    const handlePointerDown = useCallback((e: React.PointerEvent, thumb?: 'min' | 'max') => {
        if (disabled || readOnly) return;

        e.preventDefault();
        setIsDragging(true);
        setActiveThumb(thumb || null);

        const handlePointerMove = (e: PointerEvent) => {
            const newValue = getValueFromPixel(vertical ? e.clientY : e.clientX);

            if (range !== undefined) {
                // 범위 모드
                if (thumb === 'min') {
                    const newRange: [number, number] = [newValue, currentRange[1]];
                    if (newRange[0] <= newRange[1]) {
                        setInternalRange(newRange);
                        onRangeChange?.(newRange);
                    }
                } else if (thumb === 'max') {
                    const newRange: [number, number] = [currentRange[0], newValue];
                    if (newRange[0] <= newRange[1]) {
                        setInternalRange(newRange);
                        onRangeChange?.(newRange);
                    }
                }
            } else {
                // 단일 값 모드
                setInternalValue(newValue);
                onChange?.(newValue);
            }
        };

        const handlePointerUp = () => {
            setIsDragging(false);
            setActiveThumb(null);
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
        };

        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);
    }, [disabled, readOnly, range, currentRange, getValueFromPixel, vertical, onChange, onRangeChange]);

    // 트랙 클릭 처리
    const handleTrackClick = useCallback((e: React.MouseEvent) => {
        if (disabled || readOnly) return;

        const newValue = getValueFromPixel(vertical ? e.clientY : e.clientX);

        if (range !== undefined) {
            // 범위 모드: 가까운 썸을 이동
            const minDistance = Math.abs(newValue - currentRange[0]);
            const maxDistance = Math.abs(newValue - currentRange[1]);

            if (minDistance <= maxDistance) {
                const newRange: [number, number] = [newValue, currentRange[1]];
                if (newRange[0] <= newRange[1]) {
                    setInternalRange(newRange);
                    onRangeChange?.(newRange);
                }
            } else {
                const newRange: [number, number] = [currentRange[0], newValue];
                if (newRange[0] <= newRange[1]) {
                    setInternalRange(newRange);
                    onRangeChange?.(newRange);
                }
            }
        } else {
            // 단일 값 모드
            setInternalValue(newValue);
            onChange?.(newValue);
        }
    }, [disabled, readOnly, range, currentRange, getValueFromPixel, vertical, onChange, onRangeChange]);

    // 키보드 네비게이션
    const handleKeyDown = useCallback((e: React.KeyboardEvent, thumb?: 'min' | 'max') => {
        if (disabled || readOnly) return;

        const key = e.key;
        let newValue: number;

        if (range !== undefined) {
            const currentThumbValue = thumb === 'min' ? currentRange[0] : currentRange[1];

            switch (key) {
                case 'ArrowLeft':
                case 'ArrowDown':
                    newValue = normalizeValue(currentThumbValue - step);
                    break;
                case 'ArrowRight':
                case 'ArrowUp':
                    newValue = normalizeValue(currentThumbValue + step);
                    break;
                case 'Home':
                    newValue = min;
                    break;
                case 'End':
                    newValue = max;
                    break;
                default:
                    return;
            }

            const newRange: [number, number] = [...currentRange] as [number, number];
            if (thumb === 'min') {
                newRange[0] = newValue;
            } else {
                newRange[1] = newValue;
            }

            if (newRange[0] <= newRange[1]) {
                setInternalRange(newRange);
                onRangeChange?.(newRange);
            }
        } else {
            switch (key) {
                case 'ArrowLeft':
                case 'ArrowDown':
                    newValue = normalizeValue(currentValue - step);
                    break;
                case 'ArrowRight':
                case 'ArrowUp':
                    newValue = normalizeValue(currentValue + step);
                    break;
                case 'Home':
                    newValue = min;
                    break;
                case 'End':
                    newValue = max;
                    break;
                default:
                    return;
            }

            setInternalValue(newValue);
            onChange?.(newValue);
        }

        e.preventDefault();
    }, [disabled, readOnly, range, currentRange, currentValue, step, min, max, normalizeValue, onChange, onRangeChange]);

    // 마커 렌더링
    const renderMarks = () => {
        if (!showMarks || marks.length === 0) return null;

        return marks.map((mark) => {
            const percentage = getPercentage(mark);
            const isInRange = range !== undefined
                ? mark >= currentRange[0] && mark <= currentRange[1]
                : mark <= currentValue;

            return (
                <div
                    key={mark}
                    className={clsx('designbase-range-slider__mark', {
                        'designbase-range-slider__mark--active': isInRange,
                    })}
                    style={{
                        [vertical ? 'bottom' : 'left']: `${percentage}%`,
                    }}
                    aria-hidden="true"
                >
                    {markLabels[mark] && (
                        <span className="designbase-range-slider__mark-label">
                            {markLabels[mark]}
                        </span>
                    )}
                </div>
            );
        });
    };

    const classes = clsx(
        'designbase-range-slider',
        `designbase-range-slider--${size}`,
        `designbase-range-slider--${variant}`,
        {
            'designbase-range-slider--disabled': disabled,
            'designbase-range-slider--readonly': readOnly,
            'designbase-range-slider--full-width': fullWidth,
            'designbase-range-slider--vertical': vertical,
            'designbase-range-slider--range': range !== undefined,
        },
        className
    );

    const trackClasses = clsx(
        'designbase-range-slider__track',
        {
            'designbase-range-slider__track--disabled': disabled,
            'designbase-range-slider__track--readonly': readOnly,
        }
    );

    const fillStyle = range !== undefined
        ? {
            [vertical ? 'height' : 'width']: `${getPercentage(currentRange[1]) - getPercentage(currentRange[0])}%`,
            [vertical ? 'bottom' : 'left']: `${getPercentage(currentRange[0])}%`,
        }
        : {
            [vertical ? 'height' : 'width']: `${getPercentage(currentValue)}%`,
        };

    return (
        <div className={classes} {...props}>
            {/* 값 표시 */}
            {showValue && (
                <div className="designbase-range-slider__values">
                    {range !== undefined ? (
                        <>
                            <span className="designbase-range-slider__value">
                                {currentRange[0]}
                            </span>
                            <span className="designbase-range-slider__value">
                                {currentRange[1]}
                            </span>
                        </>
                    ) : (
                        <span className="designbase-range-slider__value">
                            {currentValue}
                        </span>
                    )}
                </div>
            )}

            {/* 슬라이더 트랙 */}
            <div
                ref={containerRef}
                className="designbase-range-slider__container"
                role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={range !== undefined ? currentRange[0] : currentValue}
                aria-valuetext={range !== undefined ? `${currentRange[0]} to ${currentRange[1]}` : currentValue.toString()}
                aria-disabled={disabled}
                aria-readonly={readOnly}
                tabIndex={disabled || readOnly ? -1 : 0}
                onKeyDown={(e) => handleKeyDown(e)}
            >
                <div
                    ref={trackRef}
                    className={trackClasses}
                    onClick={handleTrackClick}
                >
                    {/* 채워진 영역 */}
                    <div
                        className="designbase-range-slider__fill"
                        style={fillStyle}
                    />

                    {/* 마커들 */}
                    {renderMarks()}

                    {/* 썸들 */}
                    {range !== undefined ? (
                        <>
                            {/* 최소값 썸 */}
                            <div
                                className={clsx('designbase-range-slider__thumb', {
                                    'designbase-range-slider__thumb--active': activeThumb === 'min',
                                })}
                                style={{
                                    [vertical ? 'bottom' : 'left']: `${getPercentage(currentRange[0])}%`,
                                }}
                                onPointerDown={(e) => handlePointerDown(e, 'min')}
                                onKeyDown={(e) => handleKeyDown(e, 'min')}
                                role="slider"
                                aria-valuemin={min}
                                aria-valuemax={currentRange[1]}
                                aria-valuenow={currentRange[0]}
                                tabIndex={disabled || readOnly ? -1 : 0}
                                draggable={false}
                            />
                            {/* 최대값 썸 */}
                            <div
                                className={clsx('designbase-range-slider__thumb', {
                                    'designbase-range-slider__thumb--active': activeThumb === 'max',
                                })}
                                style={{
                                    [vertical ? 'bottom' : 'left']: `${getPercentage(currentRange[1])}%`,
                                }}
                                onPointerDown={(e) => handlePointerDown(e, 'max')}
                                onKeyDown={(e) => handleKeyDown(e, 'max')}
                                role="slider"
                                aria-valuemin={currentRange[0]}
                                aria-valuemax={max}
                                aria-valuenow={currentRange[1]}
                                tabIndex={disabled || readOnly ? -1 : 0}
                                draggable={false}
                            />
                        </>
                    ) : (
                        /* 단일 값 썸 */
                        <div
                            className={clsx('designbase-range-slider__thumb', {
                                'designbase-range-slider__thumb--active': isDragging,
                            })}
                            style={{
                                [vertical ? 'bottom' : 'left']: `${getPercentage(currentValue)}%`,
                            }}
                            onPointerDown={handlePointerDown}
                            onKeyDown={handleKeyDown}
                            role="slider"
                            aria-valuemin={min}
                            aria-valuemax={max}
                            aria-valuenow={currentValue}
                            tabIndex={disabled || readOnly ? -1 : 0}
                            draggable={false}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

RangeSlider.displayName = 'RangeSlider';

export default RangeSlider;
