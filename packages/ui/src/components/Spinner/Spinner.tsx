/**
 * Spinner 컴포넌트
 * 
 * 목적: 로딩 상태를 표시하는 애니메이션 컴포넌트 제공
 * 기능: 다양한 타입, 크기, 색상 지원
 * 접근성: ARIA 가이드라인 준수, 스크린 리더 지원
 */

import React from 'react';
import clsx from 'clsx';
import './Spinner.scss';

export type SpinnerType = 'circular' | 'dots' | 'bars' | 'pulse' | 'ripple';
export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SpinnerProps {
    /** 스피너 타입 */
    type?: SpinnerType;
    /** 스피너 크기 */
    size?: SpinnerSize;
    /** 스피너 색상 */
    color?: string;
    /** 스피너 속도 (초 단위) */
    speed?: number;
    /** 로딩 텍스트 */
    label?: string;
    /** 로딩 텍스트 표시 여부 */
    showLabel?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Spinner: React.FC<SpinnerProps> = ({
    type = 'circular',
    size = 'md',
    color,
    speed = 1,
    label = '로딩 중...',
    showLabel = false,
    className,
    ...props
}) => {
    const classes = clsx(
        'designbase-spinner',
        `designbase-spinner--${type}`,
        `designbase-spinner--${size}`,
        className
    );

    const style = {
        '--spinner-color': color,
        '--spinner-speed': `${speed}s`,
    } as React.CSSProperties;

    const renderSpinner = () => {
        switch (type) {
            case 'circular':
                return (
                    <svg
                        className="designbase-spinner__circular"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            className="designbase-spinner__circular-track"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                        <circle
                            className="designbase-spinner__circular-indicator"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                );

            case 'dots':
                return (
                    <div className="designbase-spinner__dots">
                        <div className="designbase-spinner__dot" />
                        <div className="designbase-spinner__dot" />
                        <div className="designbase-spinner__dot" />
                    </div>
                );

            case 'bars':
                return (
                    <div className="designbase-spinner__bars">
                        <div className="designbase-spinner__bar" />
                        <div className="designbase-spinner__bar" />
                        <div className="designbase-spinner__bar" />
                        <div className="designbase-spinner__bar" />
                        <div className="designbase-spinner__bar" />
                    </div>
                );

            case 'pulse':
                return (
                    <div className="designbase-spinner__pulse" />
                );

            case 'ripple':
                return (
                    <div className="designbase-spinner__ripple">
                        <div className="designbase-spinner__ripple-circle" />
                        <div className="designbase-spinner__ripple-circle" />
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div
            className={classes}
            style={style}
            role="status"
            aria-label={showLabel ? label : undefined}
            {...props}
        >
            {renderSpinner()}
            {showLabel && label && (
                <span className="designbase-spinner__label" aria-hidden="true">
                    {label}
                </span>
            )}
        </div>
    );
};

Spinner.displayName = 'Spinner';

export default Spinner;
