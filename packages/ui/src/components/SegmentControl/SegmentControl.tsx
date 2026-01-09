/**
 * SegmentControl 컴포넌트
 * 
 * 목적: iOS 스타일의 세그먼트 컨트롤 제공
 * 기능: 단일 선택, 키보드 네비게이션, 접근성 지원
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import './SegmentControl.scss';

export interface SegmentOption {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: React.ComponentType<{ size?: number }>;
}

export interface SegmentControlProps {
    /** 세그먼트 옵션 목록 */
    options: SegmentOption[];
    /** 기본 선택된 값 */
    defaultValue?: string;
    /** 현재 선택된 값 (제어 컴포넌트용) */
    value?: string;
    /** 세그먼트 크기 */
    size?: 's' | 'm' | 'l';
    /** 세그먼트 타입: 'default' (텍스트+아이콘) | 'icon-only' (아이콘만) */
    variant?: 'default' | 'icon-only';
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 값 변경 핸들러 */
    onChange?: (value: string) => void;
    /** 추가 props */
    [key: string]: any;
}

export const SegmentControl: React.FC<SegmentControlProps> = ({
    options,
    defaultValue,
    value,
    size = 'm',
    variant = 'default',
    fullWidth = false,
    disabled = false,
    className,
    onChange,
    ...props
}) => {
    const [selectedValue, setSelectedValue] = useState<string>(
        value ?? defaultValue ?? options[0]?.value ?? ''
    );
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const segmentRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

    // 제어 컴포넌트 처리
    useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [value]);

    // 키보드 네비게이션
    const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
        if (disabled) return;

        const currentIndex = options.findIndex(option => option.value === selectedValue);
        if (currentIndex === -1) return;

        let nextIndex = currentIndex;

        switch (event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
                break;
            case 'ArrowRight':
                event.preventDefault();
                nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
                break;
            case 'Home':
                event.preventDefault();
                nextIndex = 0;
                break;
            case 'End':
                event.preventDefault();
                nextIndex = options.length - 1;
                break;
            case 'Enter':
            case ' ':
                event.preventDefault();
                const nextOption = options[nextIndex];
                if (nextOption && !nextOption.disabled) {
                    handleSegmentSelect(nextOption.value);
                }
                return;
        }

        // 비활성화된 세그먼트 건너뛰기
        while (nextIndex !== currentIndex) {
            const nextOption = options[nextIndex];
            if (nextOption && !nextOption.disabled) {
                setFocusedIndex(nextIndex);
                segmentRefs.current.get(nextOption.value)?.focus();
                break;
            }
            
            if (event.key === 'ArrowLeft' || event.key === 'Home') {
                nextIndex = nextIndex > 0 ? nextIndex - 1 : options.length - 1;
            } else {
                nextIndex = nextIndex < options.length - 1 ? nextIndex + 1 : 0;
            }
        }
    }, [options, selectedValue, disabled]);

    const handleSegmentSelect = useCallback((segmentValue: string) => {
        const option = options.find(opt => opt.value === segmentValue);
        if (option && !option.disabled && !disabled) {
            setSelectedValue(segmentValue);
            onChange?.(segmentValue);
        }
    }, [options, disabled, onChange]);

    const handleSegmentFocus = useCallback((index: number) => {
        setFocusedIndex(index);
    }, []);

    const handleSegmentBlur = useCallback(() => {
        setFocusedIndex(-1);
    }, []);

    const selectedIndex = options.findIndex(option => option.value === selectedValue);

    const classes = clsx(
        'designbase-segment-control',
        `designbase-segment-control--${size}`,
        `designbase-segment-control--${variant}`,
        {
            'designbase-segment-control--full-width': fullWidth,
            'designbase-segment-control--disabled': disabled,
        },
        className
    );

    return (
        <div
            ref={containerRef}
            className={classes}
            role="tablist"
            aria-label="세그먼트 컨트롤"
            onKeyDown={handleKeyDown}
            {...props}
        >
            {options.map((option, index) => {
                const isSelected = option.value === selectedValue;
                const isFocused = index === focusedIndex;
                const isDisabled = option.disabled || disabled;

                const segmentClasses = clsx(
                    'designbase-segment-control__segment',
                    {
                        'designbase-segment-control__segment--selected': isSelected,
                        'designbase-segment-control__segment--focused': isFocused,
                        'designbase-segment-control__segment--disabled': isDisabled,
                    }
                );

                return (
                    <button
                        key={option.value}
                        ref={(el) => {
                            if (el) {
                                segmentRefs.current.set(option.value, el);
                            } else {
                                segmentRefs.current.delete(option.value);
                            }
                        }}
                        className={segmentClasses}
                        role="tab"
                        aria-selected={isSelected}
                        aria-disabled={isDisabled}
                        tabIndex={isSelected ? 0 : -1}
                        disabled={isDisabled}
                        onClick={() => handleSegmentSelect(option.value)}
                        onFocus={() => handleSegmentFocus(index)}
                        onBlur={handleSegmentBlur}
                    >
                        {option.icon && (
                            <span className="designbase-segment-control__segment-icon">
                                <option.icon size={size === 's' ? 14 : size === 'l' ? 18 : 16} />
                            </span>
                        )}
                        {variant === 'default' && (
                            <span className="designbase-segment-control__segment-label">
                                {option.label}
                            </span>
                        )}
                        {variant === 'icon-only' && !option.icon && (
                            <span className="designbase-segment-control__segment-label" aria-label={option.label}>
                                {option.label}
                            </span>
                        )}
                    </button>
                );
            })}
            
            {/* 선택 표시기 */}
            <div
                className="designbase-segment-control__indicator"
                style={{
                    transform: `translateX(${selectedIndex * 100}%)`,
                    width: `${100 / options.length}%`,
                }}
            />
        </div>
    );
};

SegmentControl.displayName = 'SegmentControl';

export default SegmentControl;
