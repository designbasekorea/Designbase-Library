/**
 * Progressbar 컴포넌트
 * 
 * 목적: 진행률을 시각적으로 표시하는 컴포넌트 제공
 * 기능: 다양한 스타일, 크기, 애니메이션, 라벨 지원
 * 접근성: ARIA 가이드라인 준수, 스크린 리더 지원
 */

import React from 'react';
import clsx from 'clsx';
import './Progressbar.scss';

export type ProgressbarSize = 's' | 'm' | 'l';
export type ProgressbarVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type ProgressbarStyle = 'solid' | 'striped' | 'animated';

export interface ProgressbarProps {
    /** 진행률 (0-100) */
    value: number;
    /** 최대값 */
    max?: number;
    /** 최소값 */
    min?: number;
    /** 진행바 크기 */
    size?: ProgressbarSize;
    /** 진행바 스타일 */
    variant?: ProgressbarVariant;
    /** 진행바 디자인 스타일 */
    style?: ProgressbarStyle;
    /** 라벨 표시 여부 */
    showLabel?: boolean;
    /** 커스텀 라벨 */
    label?: string;
    /** 라벨 위치 */
    labelPosition?: 'top' | 'bottom' | 'inside';
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Progressbar: React.FC<ProgressbarProps> = ({
    value,
    max = 100,
    min = 0,
    size = 'm',
    variant = 'default',
    style = 'solid',
    showLabel = false,
    label,
    labelPosition = 'top',
    fullWidth = false,
    disabled = false,
    className,
    ...props
}) => {
    // 값 범위 제한
    const clampedValue = Math.max(min, Math.min(max, value));
    const percentage = ((clampedValue - min) / (max - min)) * 100;

    const classes = clsx(
        'designbase-progressbar',
        `designbase-progressbar--${size}`,
        `designbase-progressbar--${variant}`,
        `designbase-progressbar--${style}`,
        {
            'designbase-progressbar--full-width': fullWidth,
            'designbase-progressbar--disabled': disabled,
            'designbase-progressbar--completed': percentage === 100,
        },
        className
    );

    const containerClasses = clsx(
        'designbase-progressbar__container',
        `designbase-progressbar__container--${labelPosition}`
    );

    const trackClasses = clsx(
        'designbase-progressbar__track',
        {
            'designbase-progressbar__track--disabled': disabled,
        }
    );

    const fillClasses = clsx(
        'designbase-progressbar__fill',
        {
            'designbase-progressbar__fill--disabled': disabled,
        }
    );

    const labelClasses = clsx(
        'designbase-progressbar__label',
        `designbase-progressbar__label--${labelPosition}`
    );

    const getDisplayLabel = () => {
        if (label) return label;
        if (showLabel) return `${Math.round(percentage)}%`;
        return '';
    };

    const displayLabel = getDisplayLabel();

    return (
        <div
            className={classes}
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-label={label || `진행률 ${Math.round(percentage)}%`}
            {...props}
        >
            <div className={containerClasses}>
                {displayLabel && labelPosition === 'top' && (
                    <div className={labelClasses}>
                        {displayLabel}
                    </div>
                )}

                <div className={trackClasses}>
                    <div
                        className={fillClasses}
                        style={{ width: `${percentage}%` }}
                    >
                        {displayLabel && labelPosition === 'inside' && (
                            <span className="designbase-progressbar__fill-label">
                                {displayLabel}
                            </span>
                        )}
                    </div>
                </div>

                {displayLabel && labelPosition === 'bottom' && (
                    <div className={labelClasses}>
                        {displayLabel}
                    </div>
                )}
            </div>
        </div>
    );
};

Progressbar.displayName = 'Progressbar';

export default Progressbar;
