/**
 * Grid 컴포넌트
 * 
 * 그리드 레이아웃을 제공하는 컴포넌트입니다.
 * 컬럼 수, 간격, 정렬 등을 설정할 수 있습니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Grid.scss';

export type GridBreakpoint = 'xs' | 's' | 'm' | 'l' | 'xl';
export type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
export type GridAlignment = 'start' | 'center' | 'end' | 'stretch';
export type GridJustify = 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly';

export interface GridProps {
    /** 고정 너비 사용 여부 */
    fixed?: boolean;
    /** 그리드 패딩 제거 */
    noPadding?: boolean;
    /** 커스텀 CSS 클래스 */
    className?: string;
    /** 커스텀 스타일 */
    style?: React.CSSProperties;
    /** 자식 요소 */
    children: React.ReactNode;
}

export interface GridRowProps {
    /** 세로 정렬 */
    align?: GridAlignment;
    /** 가로 정렬 */
    justify?: GridJustify;
    /** 커스텀 CSS 클래스 */
    className?: string;
    /** 커스텀 스타일 */
    style?: React.CSSProperties;
    /** 자식 요소 */
    children: React.ReactNode;
}

export interface GridColProps {
    /** 기본 크기 (xs 이상) */
    size?: GridSize;
    /** sm 브레이크포인트 이상에서의 크기 */
    sizeSm?: GridSize;
    /** md 브레이크포인트 이상에서의 크기 */
    sizeMd?: GridSize;
    /** lg 브레이크포인트 이상에서의 크기 */
    sizeLg?: GridSize;
    /** xl 브레이크포인트 이상에서의 크기 */
    sizeXl?: GridSize;
    /** 기본 오프셋 (xs 이상) */
    offset?: number;
    /** sm 브레이크포인트 이상에서의 오프셋 */
    offsetSm?: number;
    /** md 브레이크포인트 이상에서의 오프셋 */
    offsetMd?: number;
    /** lg 브레이크포인트 이상에서의 오프셋 */
    offsetLg?: number;
    /** xl 브레이크포인트 이상에서의 오프셋 */
    offsetXl?: number;
    /** 기본 푸시 (xs 이상) */
    push?: number;
    /** sm 브레이크포인트 이상에서의 푸시 */
    pushSm?: number;
    /** md 브레이크포인트 이상에서의 푸시 */
    pushMd?: number;
    /** lg 브레이크포인트 이상에서의 푸시 */
    pushLg?: number;
    /** xl 브레이크포인트 이상에서의 푸시 */
    pushXl?: number;
    /** 기본 풀 (xs 이상) */
    pull?: number;
    /** sm 브레이크포인트 이상에서의 풀 */
    pullSm?: number;
    /** md 브레이크포인트 이상에서의 풀 */
    pullMd?: number;
    /** lg 브레이크포인트 이상에서의 풀 */
    pullLg?: number;
    /** xl 브레이크포인트 이상에서의 풀 */
    pullXl?: number;
    /** 커스텀 CSS 클래스 */
    className?: string;
    /** 커스텀 스타일 */
    style?: React.CSSProperties;
    /** 자식 요소 */
    children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({
    fixed = false,
    noPadding = false,
    className,
    style,
    children,
}) => {
    const classes = clsx(
        'designbase-grid',
        {
            'designbase-grid--fixed': fixed,
            'designbase-grid--no-padding': noPadding,
        },
        className
    );

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

const GridRow: React.FC<GridRowProps> = ({
    align = 'stretch',
    justify = 'start',
    className,
    style,
    children,
}) => {
    const classes = clsx(
        'designbase-grid__row',
        `designbase-grid__row--align-${align}`,
        `designbase-grid__row--justify-${justify}`,
        className
    );

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

const GridCol: React.FC<GridColProps> = ({
    size,
    sizeSm,
    sizeMd,
    sizeLg,
    sizeXl,
    offset = 0,
    offsetSm = 0,
    offsetMd = 0,
    offsetLg = 0,
    offsetXl = 0,
    push = 0,
    pushSm = 0,
    pushMd = 0,
    pushLg = 0,
    pushXl = 0,
    pull = 0,
    pullSm = 0,
    pullMd = 0,
    pullLg = 0,
    pullXl = 0,
    className,
    style,
    children,
}) => {
    const getSizeClass = (breakpoint: string, size?: GridSize) => {
        if (!size) return '';
        return `designbase-grid__col--${breakpoint}-${size}`;
    };

    const getOffsetClass = (breakpoint: string, offset: number) => {
        if (offset === 0) return '';
        return `designbase-grid__col--${breakpoint}-offset-${offset}`;
    };

    const getPushClass = (breakpoint: string, push: number) => {
        if (push === 0) return '';
        return `designbase-grid__col--${breakpoint}-push-${push}`;
    };

    const getPullClass = (breakpoint: string, pull: number) => {
        if (pull === 0) return '';
        return `designbase-grid__col--${breakpoint}-pull-${pull}`;
    };

    const classes = clsx(
        'designbase-grid__col',
        getSizeClass('xs', size),
        getSizeClass('sm', sizeSm),
        getSizeClass('md', sizeMd),
        getSizeClass('lg', sizeLg),
        getSizeClass('xl', sizeXl),
        getOffsetClass('xs', offset),
        getOffsetClass('sm', offsetSm),
        getOffsetClass('md', offsetMd),
        getOffsetClass('lg', offsetLg),
        getOffsetClass('xl', offsetXl),
        getPushClass('xs', push),
        getPushClass('sm', pushSm),
        getPushClass('md', pushMd),
        getPushClass('lg', pushLg),
        getPushClass('xl', pushXl),
        getPullClass('xs', pull),
        getPullClass('sm', pullSm),
        getPullClass('md', pullMd),
        getPullClass('lg', pullLg),
        getPullClass('xl', pullXl),
        className
    );

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export { Grid, GridRow, GridCol };
export default Grid;
