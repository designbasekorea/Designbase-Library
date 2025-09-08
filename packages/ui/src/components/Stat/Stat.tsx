/**
 * Stat 컴포넌트
 * 
 * 통계 정보를 표시하는 컴포넌트입니다.
 * 숫자, 라벨, 설명, 아이콘 등을 포함할 수 있습니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Stat.scss';

// 타입 정의
export type StatSize = 'sm' | 'md' | 'lg' | 'xl';
export type StatVariant = 'default' | 'minimal' | 'card' | 'colored';
export type StatLayout = 'horizontal' | 'vertical' | 'reverse';
export type StatColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'custom';

export interface StatProps {
    /** 통계 값 */
    value: string | number;
    /** 통계 라벨 */
    label: string;
    /** 아이콘 */
    icon?: React.ReactNode;
    /** 아이콘 위치 */
    iconPosition?: 'left' | 'right';
    /** 통계 크기 */
    size?: StatSize;
    /** 통계 스타일 변형 */
    variant?: StatVariant;
    /** 레이아웃 방향 */
    layout?: StatLayout;
    /** 색상 */
    color?: StatColor;
    /** 커스텀 색상 */
    customColor?: string;
    /** 진행률 (0-100) */
    progress?: number;
    /** 진행률 표시 */
    showProgress?: boolean;
    /** 변화율 */
    change?: {
        value: number;
        type: 'increase' | 'decrease';
        period?: string;
    };
    /** 변화율 표시 */
    showChange?: boolean;
    /** 설명 텍스트 */
    description?: string;
    /** 설명 표시 */
    showDescription?: boolean;
    /** 클릭 가능 */
    clickable?: boolean;
    /** 비활성화 */
    disabled?: boolean;
    /** 애니메이션 */
    animated?: boolean;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

const Stat: React.FC<StatProps> = ({
    value,
    label,
    icon,
    iconPosition = 'left',
    size = 'md',
    variant = 'default',
    layout = 'horizontal',
    color = 'primary',
    customColor,
    progress,
    showProgress = false,
    change,
    showChange = false,
    description,
    showDescription = false,
    clickable = false,
    disabled = false,
    animated = false,
    onClick,
    className,
}) => {
    // 변화율 텍스트 생성
    const getChangeText = () => {
        if (!change) return '';

        const sign = change.type === 'increase' ? '+' : '-';
        const period = change.period ? ` ${change.period}` : '';
        return `${sign}${Math.abs(change.value)}%${period}`;
    };

    // 변화율 클래스 생성
    const getChangeClass = () => {
        if (!change) return '';
        return change.type === 'increase' ? 'designbase-stat__change--increase' : 'designbase-stat__change--decrease';
    };

    // 클래스명 생성
    const classes = clsx(
        'designbase-stat',
        `designbase-stat--size-${size}`,
        `designbase-stat--variant-${variant}`,
        `designbase-stat--layout-${layout}`,
        `designbase-stat--color-${color}`,
        {
            'designbase-stat--clickable': clickable,
            'designbase-stat--disabled': disabled,
            'designbase-stat--animated': animated,
            'designbase-stat--with-progress': showProgress,
            'designbase-stat--with-change': showChange && change,
            'designbase-stat--with-description': showDescription && description,
        },
        className
    );

    // 커스텀 색상 스타일
    const customStyle = customColor ? { '--stat-color': customColor } as React.CSSProperties : undefined;

    // 클릭 핸들러
    const handleClick = () => {
        if (disabled || !clickable) return;
        onClick?.();
    };

    return (
        <div
            className={classes}
            style={customStyle}
            onClick={handleClick}
            role={clickable ? 'button' : undefined}
            tabIndex={clickable ? 0 : undefined}
        >
            {/* 아이콘 */}
            {icon && (
                <div className={clsx(
                    'designbase-stat__icon',
                    `designbase-stat__icon--${iconPosition}`
                )}>
                    {icon}
                </div>
            )}

            {/* 콘텐츠 */}
            <div className="designbase-stat__content">
                {/* 값과 라벨 */}
                <div className="designbase-stat__main">
                    <div className="designbase-stat__value">
                        {value}
                    </div>
                    <div className="designbase-stat__label">
                        {label}
                    </div>
                </div>

                {/* 변화율 */}
                {showChange && change && (
                    <div className={clsx('designbase-stat__change', getChangeClass())}>
                        {getChangeText()}
                    </div>
                )}

                {/* 설명 */}
                {showDescription && description && (
                    <div className="designbase-stat__description">
                        {description}
                    </div>
                )}
            </div>

            {/* 진행률 바 */}
            {showProgress && progress !== undefined && (
                <div className="designbase-stat__progress">
                    <div
                        className="designbase-stat__progress-bar"
                        style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
                    />
                </div>
            )}
        </div>
    );
};

export default Stat;
