/**
 * Stat 컴포넌트
 * 
 * 통계 정보를 표시하는 컴포넌트입니다.
 * 숫자, 라벨, 설명, 아이콘 등을 포함할 수 있습니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Stat.scss';

export type StatSize = 'sm' | 'md' | 'lg' | 'xl';
export type StatVariant = 'default' | 'elevated' | 'outlined' | 'filled';
export type StatTrend = 'up' | 'down' | 'neutral';

export interface StatProps {
    /** 통계 값 */
    value: string | number;
    /** 통계 라벨 */
    label: string;
    /** 통계 설명 */
    description?: string;
    /** 통계 아이콘 */
    icon?: React.ReactNode;
    /** 통계 크기 */
    size?: StatSize;
    /** 통계 스타일 변형 */
    variant?: StatVariant;
    /** 트렌드 방향 */
    trend?: StatTrend;
    /** 트렌드 값 */
    trendValue?: string | number;
    /** 트렌드 기간 */
    trendPeriod?: string;
    /** 전체 너비 사용 */
    fullWidth?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const Stat: React.FC<StatProps> = ({
    value,
    label,
    description,
    icon,
    size = 'md',
    variant = 'default',
    trend,
    trendValue,
    trendPeriod,
    fullWidth = false,
    className,
}) => {
    const classes = clsx(
        'designbase-stat',
        `designbase-stat--size-${size}`,
        `designbase-stat--variant-${variant}`,
        {
            'designbase-stat--full-width': fullWidth,
        },
        className
    );

    const trendClasses = clsx(
        'designbase-stat__trend',
        `designbase-stat__trend--${trend}`
    );

    return (
        <div className={classes}>
            {icon && (
                <div className="designbase-stat__icon">
                    {icon}
                </div>
            )}

            <div className="designbase-stat__content">
                <div className="designbase-stat__header">
                    <h3 className="designbase-stat__value">{value}</h3>
                    {trend && (
                        <div className={trendClasses}>
                            {trend === 'up' && (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 14l5-5 5 5" />
                                </svg>
                            )}
                            {trend === 'down' && (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 10l5 5 5-5" />
                                </svg>
                            )}
                            {trend === 'neutral' && (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14" />
                                </svg>
                            )}
                            {trendValue && (
                                <span className="designbase-stat__trend-value">{trendValue}</span>
                            )}
                        </div>
                    )}
                </div>

                <h4 className="designbase-stat__label">{label}</h4>

                {description && (
                    <p className="designbase-stat__description">{description}</p>
                )}

                {trendPeriod && (
                    <span className="designbase-stat__trend-period">{trendPeriod}</span>
                )}
            </div>
        </div>
    );
};

export default Stat;
