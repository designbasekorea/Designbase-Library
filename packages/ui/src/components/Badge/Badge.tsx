/**
 * Badge 컴포넌트
 * 
 * 목적: 작은 텍스트를 감싸는 다양한 스타일의 배지 컴포넌트
 * 기능: 점, 숫자, 텍스트 라벨, 아웃라인 스타일 지원
 * 접근성: ARIA 가이드라인 준수
 */

import React from 'react';
import clsx from 'clsx';
import './Badge.scss';

export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeVariant = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
export type BadgeStyle = 'dot' | 'number' | 'text' | 'outlined';

export interface BadgeProps {
    /** 배지 내용 (텍스트 또는 숫자) */
    children?: React.ReactNode;
    /** 배지 크기 */
    size?: BadgeSize;
    /** 배지 색상 */
    variant?: BadgeVariant;
    /** 배지 스타일 */
    style?: BadgeStyle;
    /** 숫자 값 (style이 'number'일 때 사용) */
    count?: number;
    /** 최대 표시 숫자 */
    maxCount?: number;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    size = 'md',
    variant = 'primary',
    style = 'text',
    count,
    maxCount = 99,
    disabled = false,
    className,
    ...props
}) => {
    // 숫자 스타일일 때 count 값을 사용
    const displayContent = style === 'number' && count !== undefined
        ? (count > maxCount ? `${maxCount}+` : count.toString())
        : children;

    const classes = clsx(
        'designbase-badge',
        `designbase-badge--${size}`,
        `designbase-badge--${variant}`,
        `designbase-badge--${style}`,
        {
            'designbase-badge--disabled': disabled,
        },
        className
    );

    return (
        <span className={classes} {...props}>
            {displayContent}
        </span>
    );
};

Badge.displayName = 'Badge';

export default Badge;
