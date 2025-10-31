/**
 * Progress 컴포넌트
 * 
 * 진행률을 표시하는 컴포넌트입니다.
 * 선형과 원형 진행률을 지원합니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Progress.scss';

export type ProgressSize = 's' | 'm' | 'l';
export type ProgressVariant = 'default' | 'success' | 'warning' | 'danger';
export type ProgressType = 'linear' | 'circular';

export interface ProgressProps {
    /** 진행률 값 (0-100) */
    value: number;
    /** 최대 값 */
    max?: number;
    /** 진행률 크기 */
    size?: ProgressSize;
    /** 진행률 스타일 변형 */
    variant?: ProgressVariant;
    /** 진행률 타입 */
    type?: ProgressType;
    /** 진행률 텍스트 표시 */
    showValue?: boolean;
    /** 진행률 텍스트 포맷터 */
    valueFormatter?: (value: number, max: number) => string;
    /** 애니메이션 효과 */
    animated?: boolean;
    /** 스트라이프 효과 */
    striped?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
    value,
    max = 100,
    size = 'm',
    variant = 'default',
    type = 'linear',
    showValue = false,
    valueFormatter,
    animated = false,
    striped = false,
    className,
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const classes = clsx(
        'designbase-progress',
        `designbase-progress--size-${size}`,
        `designbase-progress--variant-${variant}`,
        `designbase-progress--type-${type}`,
        {
            'designbase-progress--animated': animated,
            'designbase-progress--striped': striped,
        },
        className
    );

    const defaultFormatter = (value: number, max: number) => `${Math.round((value / max) * 100)}%`;

    const renderLinearProgress = () => (
        <div className="designbase-progress__linear">
            <div className="designbase-progress__track">
                <div
                    className="designbase-progress__bar"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            {showValue && (
                <span className="designbase-progress__value">
                    {valueFormatter ? valueFormatter(value, max) : defaultFormatter(value, max)}
                </span>
            )}
        </div>
    );

    const renderCircularProgress = () => {
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        const strokeDasharray = circumference;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;

        return (
            <div className="designbase-progress__circular">
                <svg
                    className="designbase-progress__circular-svg"
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                >
                    <circle
                        className="designbase-progress__circular-track"
                        cx="60"
                        cy="60"
                        r={radius}
                        strokeWidth="8"
                    />
                    <circle
                        className="designbase-progress__circular-bar"
                        cx="60"
                        cy="60"
                        r={radius}
                        strokeWidth="8"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        transform="rotate(-90 60 60)"
                    />
                </svg>
                {showValue && (
                    <span className="designbase-progress__circular-value">
                        {valueFormatter ? valueFormatter(value, max) : defaultFormatter(value, max)}
                    </span>
                )}
            </div>
        );
    };

    return (
        <div className={classes}>
            {type === 'linear' ? renderLinearProgress() : renderCircularProgress()}
        </div>
    );
};

export default Progress;
