/**
 * Stepper 컴포넌트
 * 
 * +, - 버튼으로 숫자를 조정하는 컴포넌트입니다.
 * 최소값, 최대값, 단계값 등을 설정할 수 있습니다.
 */

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import './Stepper.scss';

export type StepperSize = 's' | 'm' | 'l';
export type StepperVariant = 'default' | 'outlined' | 'filled';

export interface StepperProps {
    /** 현재 값 */
    value?: number;
    /** 최소값 */
    min?: number;
    /** 최대값 */
    max?: number;
    /** 단계값 (한 번에 증가/감소할 값) */
    step?: number;
    /** Stepper 크기 */
    size?: StepperSize;
    /** Stepper 스타일 변형 */
    variant?: StepperVariant;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 읽기 전용 모드 */
    readonly?: boolean;
    /** 값 변경 핸들러 */
    onChange?: (value: number) => void;
    /** 최소값 도달 시 핸들러 */
    onMinReached?: () => void;
    /** 최대값 도달 시 핸들러 */
    onMaxReached?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
    value = 0,
    min = 0,
    max = 100,
    step = 1,
    size = 'm',
    variant = 'default',
    disabled = false,
    readonly = false,
    onChange,
    onMinReached,
    onMaxReached,
    className,
}) => {
    const [internalValue, setInternalValue] = useState(value);

    const currentValue = value !== undefined ? value : internalValue;
    const isMinReached = currentValue <= min;
    const isMaxReached = currentValue >= max;

    const handleIncrement = useCallback(() => {
        if (disabled || readonly || isMaxReached) return;

        const newValue = Math.min(currentValue + step, max);
        setInternalValue(newValue);
        onChange?.(newValue);

        if (newValue === max) {
            onMaxReached?.();
        }
    }, [disabled, readonly, isMaxReached, currentValue, step, max, onChange, onMaxReached]);

    const handleDecrement = useCallback(() => {
        if (disabled || readonly || isMinReached) return;

        const newValue = Math.max(currentValue - step, min);
        setInternalValue(newValue);
        onChange?.(newValue);

        if (newValue === min) {
            onMinReached?.();
        }
    }, [disabled, readonly, isMinReached, currentValue, step, min, onChange, onMinReached]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (disabled || readonly) return;

        switch (e.key) {
            case 'ArrowUp':
            case '+':
                e.preventDefault();
                handleIncrement();
                break;
            case 'ArrowDown':
            case '-':
                e.preventDefault();
                handleDecrement();
                break;
            case 'Home':
                e.preventDefault();
                if (currentValue !== min) {
                    setInternalValue(min);
                    onChange?.(min);
                }
                break;
            case 'End':
                e.preventDefault();
                if (currentValue !== max) {
                    setInternalValue(max);
                    onChange?.(max);
                }
                break;
        }
    }, [disabled, readonly, handleIncrement, handleDecrement, currentValue, min, max, onChange]);

    const classes = clsx(
        'designbase-stepper',
        `designbase-stepper--size-${size}`,
        `designbase-stepper--variant-${variant}`,
        {
            'designbase-stepper--disabled': disabled,
            'designbase-stepper--readonly': readonly,
        },
        className
    );

    const decrementClasses = clsx(
        'designbase-stepper__button',
        'designbase-stepper__button--decrement',
        {
            'designbase-stepper__button--disabled': disabled || readonly || isMinReached,
        }
    );

    const incrementClasses = clsx(
        'designbase-stepper__button',
        'designbase-stepper__button--increment',
        {
            'designbase-stepper__button--disabled': disabled || readonly || isMaxReached,
        }
    );

    return (
        <div className={classes}>
            <button
                type="button"
                className={decrementClasses}
                onClick={handleDecrement}
                disabled={disabled || readonly || isMinReached}
                aria-label="감소"
                aria-describedby="stepper-description"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>

            <div className="designbase-stepper__value">
                <span className="designbase-stepper__value-text">{currentValue}</span>
            </div>

            <button
                type="button"
                className={incrementClasses}
                onClick={handleIncrement}
                disabled={disabled || readonly || isMaxReached}
                aria-label="증가"
                aria-describedby="stepper-description"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>

            <div id="stepper-description" className="sr-only">
                숫자 조정기. 화살표 키나 +/- 키를 사용하여 값을 조정할 수 있습니다.
                현재 값: {currentValue}, 최소값: {min}, 최대값: {max}, 단계: {step}
            </div>
        </div>
    );
};

export default Stepper;
