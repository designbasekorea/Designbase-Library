/**
 * Container 컴포넌트
 * 
 * 콘텐츠의 최대 폭을 제한하고 중앙 정렬을 제공하는 컨테이너 컴포넌트입니다.
 * 반응형 디자인을 위한 다양한 크기 옵션을 제공합니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Container.scss';

export type ContainerSize = 's' | 'm' | 'l' | 'xl' | 'full';
export type ContainerPadding = 'none' | 's' | 'm' | 'l' | 'xl';
export type ContainerVariant = 'plain' | 'wrapper';

export interface ContainerProps {
    /** 컨테이너 크기 */
    size?: ContainerSize;
    /** 최대 폭 (px) */
    maxWidth?: number;
    /** 컨테이너 변형 */
    variant?: ContainerVariant;
    /** 좌우 패딩 (wrapper 변형에서만 적용) */
    padding?: ContainerPadding;
    /** 좌우 마진 (wrapper 변형에서만 적용) */
    margin?: ContainerPadding;
    /** 배경색 (wrapper 변형에서만 적용) */
    backgroundColor?: string;
    /** 테두리 (wrapper 변형에서만 적용) */
    border?: boolean;
    /** 둥근 모서리 (wrapper 변형에서만 적용) */
    rounded?: boolean | 's' | 'm' | 'l';
    /** 그림자 (wrapper 변형에서만 적용) */
    shadow?: boolean | 's' | 'm' | 'l';
    /** 추가 CSS 클래스 */
    className?: string;
    /** 자식 요소 */
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
    size = 'l',
    maxWidth,
    variant = 'plain',
    padding = 'm',
    margin = 'none',
    backgroundColor,
    border = false,
    rounded = false,
    shadow = false,
    className,
    children,
}) => {
    // 크기별 최대 폭 설정 (토큰 기반)
    const getMaxWidth = () => {
        if (maxWidth) return maxWidth;

        const sizes: Record<ContainerSize, string> = {
            s: 'var(--db-container-max-width-s)',
            m: 'var(--db-container-max-width-m)',
            l: 'var(--db-container-max-width-l)',
            xl: 'var(--db-container-max-width-xl)',
            full: '100%',
        };

        return sizes[size];
    };

    // 패딩 클래스 계산 (wrapper 변형에서만 적용)
    const getPaddingClass = () => {
        if (variant !== 'wrapper') return '';

        const paddingClasses: Record<ContainerPadding, string> = {
            none: 'designbase-container--padding-none',
            s: 'designbase-container--padding-s',
            m: 'designbase-container--padding-m',
            l: 'designbase-container--padding-l',
            xl: 'designbase-container--padding-xl',
        };
        return paddingClasses[padding];
    };

    // 마진 클래스 계산 (wrapper 변형에서만 적용)
    const getMarginClass = () => {
        if (variant !== 'wrapper') return '';

        const marginClasses: Record<ContainerPadding, string> = {
            none: 'designbase-container--margin-none',
            s: 'designbase-container--margin-s',
            m: 'designbase-container--margin-m',
            l: 'designbase-container--margin-l',
            xl: 'designbase-container--margin-xl',
        };
        return marginClasses[margin];
    };

    // 둥근 모서리 클래스 계산 (wrapper 변형에서만 적용)
    const getRoundedClass = () => {
        if (variant !== 'wrapper') return '';

        if (rounded === true) return 'designbase-container--rounded';
        if (typeof rounded === 'string') return `designbase-container--rounded-${rounded}`;
        return '';
    };

    // 그림자 클래스 계산 (wrapper 변형에서만 적용)
    const getShadowClass = () => {
        if (variant !== 'wrapper') return '';

        if (shadow === true) return 'designbase-container--shadow';
        if (typeof shadow === 'string') return `designbase-container--shadow-${shadow}`;
        return '';
    };

    const classes = clsx(
        'designbase-container',
        `designbase-container--size-${size}`,
        `designbase-container--variant-${variant}`,
        getPaddingClass(),
        getMarginClass(),
        getRoundedClass(),
        getShadowClass(),
        {
            'designbase-container--border': variant === 'wrapper' && border,
        },
        className
    );

    const style: React.CSSProperties = {
        maxWidth: getMaxWidth(),
        backgroundColor: variant === 'wrapper' ? backgroundColor : undefined,
    };

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default Container;
