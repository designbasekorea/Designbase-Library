/**
 * Skeleton 컴포넌트
 * 
 * 목적: 로딩 상태를 시각적으로 표현하는 스켈레톤 UI 컴포넌트
 * 기능: 다양한 variant, size, shape 지원, 애니메이션 효과
 * 접근성: 스크린 리더를 위한 적절한 aria-label 제공
 */

import React, { forwardRef } from 'react';
import clsx from 'clsx';
import './Skeleton.scss';

export interface SkeletonProps {
    /** 스켈레톤 variant */
    variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
    /** 스켈레톤 크기 */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** 너비 (CSS 값) */
    width?: string | number;
    /** 높이 (CSS 값) */
    height?: string | number;
    /** 애니메이션 효과 */
    animation?: 'pulse' | 'wave' | 'none';
    /** 텍스트 라인 수 (text variant에서만 사용) */
    lines?: number;
    /** 텍스트 라인 간격 (text variant에서만 사용) */
    lineSpacing?: string | number;
    /** 마지막 라인 너비 비율 (text variant에서만 사용) */
    lastLineWidth?: string | number;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 스타일 객체 */
    style?: React.CSSProperties;
    /** 스크린 리더용 라벨 */
    'aria-label'?: string;
    /** 추가 props */
    [key: string]: any;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
    (
        {
            variant = 'text',
            size = 'md',
            width,
            height,
            animation = 'pulse',
            lines = 1,
            lineSpacing = '8px',
            lastLineWidth = '60%',
            className,
            style,
            'aria-label': ariaLabel,
            ...props
        },
        forwardedRef
    ) => {
        // 기본 크기 결정
        const getDefaultSize = () => {
            switch (size) {
                case 'xs':
                    return variant === 'circular' ? '16px' : '12px';
                case 'sm':
                    return variant === 'circular' ? '24px' : '16px';
                case 'md':
                    return variant === 'circular' ? '32px' : '20px';
                case 'lg':
                    return variant === 'circular' ? '48px' : '24px';
                case 'xl':
                    return variant === 'circular' ? '64px' : '32px';
                default:
                    return variant === 'circular' ? '32px' : '20px';
            }
        };

        // 텍스트 라인 높이 결정
        const getTextLineHeight = () => {
            switch (size) {
                case 'xs': return '12px';
                case 'sm': return '16px';
                case 'md': return '20px';
                case 'lg': return '24px';
                case 'xl': return '32px';
                default: return '20px';
            }
        };

        const classes = clsx(
            'designbase-skeleton',
            `designbase-skeleton--${variant}`,
            `designbase-skeleton--${size}`,
            `designbase-skeleton--${animation}`,
            {
                'designbase-skeleton--custom-size': width || height,
            },
            className
        );

        const skeletonStyle: React.CSSProperties = {
            ...style,
            width: width || (variant === 'circular' ? getDefaultSize() : '100%'),
            height: height || (variant === 'circular' ? getDefaultSize() : getTextLineHeight()),
        };

        // 텍스트 라인 렌더링
        const renderTextLines = () => {
            if (variant !== 'text' || lines <= 1) {
                return null;
            }

            return Array.from({ length: lines - 1 }, (_, index) => (
                <div
                    key={index}
                    className="designbase-skeleton__line"
                    style={{
                        marginTop: lineSpacing,
                        width: index === lines - 2 ? lastLineWidth : '100%',
                    }}
                />
            ));
        };

        const defaultAriaLabel = ariaLabel || `${variant} 스켈레톤 로딩 중`;

        return (
            <div
                ref={forwardedRef}
                className={classes}
                style={skeletonStyle}
                aria-label={defaultAriaLabel}
                role="status"
                aria-live="polite"
                {...props}
            >
                {variant === 'text' && lines > 1 && renderTextLines()}
            </div>
        );
    }
);

Skeleton.displayName = 'Skeleton';

// Named export 추가
export { Skeleton };
export default Skeleton;
