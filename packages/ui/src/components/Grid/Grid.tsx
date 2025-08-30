/**
 * Grid 컴포넌트
 * 
 * 그리드 레이아웃을 제공하는 컴포넌트입니다.
 * 컬럼 수, 간격, 정렬 등을 설정할 수 있습니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Grid.scss';

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12;
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GridAlignment = 'start' | 'center' | 'end' | 'stretch';

export interface GridProps {
    /** 컬럼 수 */
    columns?: GridColumns;
    /** 가로 간격 */
    gap?: GridGap;
    /** 세로 간격 */
    rowGap?: GridGap;
    /** 세로 정렬 */
    alignment?: GridAlignment;
    /** 전체 너비 사용 */
    fullWidth?: boolean;
    /** 전체 높이 사용 */
    fullHeight?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 자식 요소 */
    children: React.ReactNode;
}

export interface GridItemProps {
    /** 시작 컬럼 */
    start?: number;
    /** 끝 컬럼 */
    end?: number;
    /** 컬럼 스팬 */
    span?: number;
    /** 세로 정렬 */
    alignment?: GridAlignment;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 자식 요소 */
    children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
    columns = 12,
    gap = 'md',
    rowGap,
    alignment = 'start',
    fullWidth = false,
    fullHeight = false,
    className,
    children,
}) => {
    const classes = clsx(
        'designbase-grid',
        `designbase-grid--columns-${columns}`,
        `designbase-grid--gap-${gap}`,
        `designbase-grid--alignment-${alignment}`,
        {
            'designbase-grid--full-width': fullWidth,
            'designbase-grid--full-height': fullHeight,
        },
        className
    );

    const style: React.CSSProperties = {
        rowGap: rowGap ? `var(--spacing-semantic-margin-${rowGap}, ${rowGap === 'xs' ? '4px' : rowGap === 'sm' ? '8px' : rowGap === 'md' ? '16px' : rowGap === 'lg' ? '24px' : '32px'})` : undefined,
    };

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export const GridItem: React.FC<GridItemProps> = ({
    start,
    end,
    span,
    alignment = 'start',
    className,
    children,
}) => {
    const getGridColumn = () => {
        if (start && end) {
            return `${start} / ${end}`;
        }
        if (span) {
            return `span ${span}`;
        }
        return undefined;
    };

    const classes = clsx(
        'designbase-grid-item',
        `designbase-grid-item--alignment-${alignment}`,
        className
    );

    const style: React.CSSProperties = {
        gridColumn: getGridColumn(),
    };

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default Grid;
