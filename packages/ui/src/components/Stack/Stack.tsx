/**
 * Stack 컴포넌트
 * 
 * 세로 방향으로 요소들을 쌓는 레이아웃 컴포넌트입니다.
 * 간격, 정렬, 크기 등을 설정할 수 있습니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Stack.scss';

export type StackDirection = 'vertical' | 'horizontal';
export type StackAlignment = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
export type StackSpacing = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';

export interface StackProps {
    /** 스택 방향 */
    direction?: StackDirection;
    /** 세로 정렬 */
    alignment?: StackAlignment;
    /** 가로 정렬 */
    justify?: StackJustify;
    /** 요소 간 간격 */
    spacing?: StackSpacing;
    /** 전체 너비 사용 */
    fullWidth?: boolean;
    /** 전체 높이 사용 */
    fullHeight?: boolean;
    /** 줄바꿈 허용 */
    wrap?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 자식 요소 */
    children: React.ReactNode;
}

export const Stack: React.FC<StackProps> = ({
    direction = 'vertical',
    alignment = 'start',
    justify = 'start',
    spacing = 'md',
    fullWidth = false,
    fullHeight = false,
    wrap = false,
    className,
    children,
}) => {
    const classes = clsx(
        'designbase-stack',
        `designbase-stack--direction-${direction}`,
        `designbase-stack--alignment-${alignment}`,
        `designbase-stack--justify-${justify}`,
        `designbase-stack--spacing-${spacing}`,
        {
            'designbase-stack--full-width': fullWidth,
            'designbase-stack--full-height': fullHeight,
            'designbase-stack--wrap': wrap,
        },
        className
    );

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Stack;
