/**
 * ScrollArea 컴포넌트
 * 
 * 스크롤 가능한 영역을 제공하는 컴포넌트입니다.
 * 스크롤 방향, 스크롤바 스타일, 크기 등을 설정할 수 있습니다.
 */

import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import './ScrollArea.scss';

export type ScrollDirection = 'vertical' | 'horizontal' | 'both';
export type ScrollbarStyle = 'auto' | 'thin' | 'none';
export type ScrollAreaSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ScrollAreaProps {
    /** 스크롤 방향 */
    direction?: ScrollDirection;
    /** 스크롤바 스타일 */
    scrollbarStyle?: ScrollbarStyle;
    /** 최대 높이 */
    maxHeight?: string | number;
    /** 최대 너비 */
    maxWidth?: string | number;
    /** 최소 높이 */
    minHeight?: string | number;
    /** 최소 너비 */
    minWidth?: string | number;
    /** 전체 너비 사용 */
    fullWidth?: boolean;
    /** 전체 높이 사용 */
    fullHeight?: boolean;
    /** 스크롤바 항상 표시 */
    alwaysShowScrollbar?: boolean;
    /** 스크롤바 색상 */
    scrollbarColor?: string;
    /** 스크롤바 트랙 색상 */
    scrollbarTrackColor?: string;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 자식 요소 */
    children: React.ReactNode;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({
    direction = 'vertical',
    scrollbarStyle = 'auto',
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    fullWidth = false,
    fullHeight = false,
    alwaysShowScrollbar = false,
    scrollbarColor,
    scrollbarTrackColor,
    className,
    children,
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [hasVerticalScroll, setHasVerticalScroll] = useState(false);
    const [hasHorizontalScroll, setHasHorizontalScroll] = useState(false);

    // 스크롤 가능 여부 확인
    const checkScrollable = () => {
        if (scrollRef.current) {
            const element = scrollRef.current;
            setHasVerticalScroll(element.scrollHeight > element.clientHeight);
            setHasHorizontalScroll(element.scrollWidth > element.clientWidth);
        }
    };

    useEffect(() => {
        checkScrollable();

        // 리사이즈 이벤트 리스너 추가
        const resizeObserver = new ResizeObserver(checkScrollable);
        if (scrollRef.current) {
            resizeObserver.observe(scrollRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [children]);

    const classes = clsx(
        'designbase-scroll-area',
        `designbase-scroll-area--direction-${direction}`,
        `designbase-scroll-area--scrollbar-${scrollbarStyle}`,
        {
            'designbase-scroll-area--full-width': fullWidth,
            'designbase-scroll-area--full-height': fullHeight,
            'designbase-scroll-area--always-show': alwaysShowScrollbar,
            'designbase-scroll-area--has-vertical': hasVerticalScroll,
            'designbase-scroll-area--has-horizontal': hasHorizontalScroll,
        },
        className
    );

    const style: React.CSSProperties = {
        maxHeight: maxHeight ? (typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight) : undefined,
        maxWidth: maxWidth ? (typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth) : undefined,
        minHeight: minHeight ? (typeof minHeight === 'number' ? `${minHeight}px` : minHeight) : undefined,
        minWidth: minWidth ? (typeof minWidth === 'number' ? `${minWidth}px` : minWidth) : undefined,
        '--scrollbar-color': scrollbarColor,
        '--scrollbar-track-color': scrollbarTrackColor,
    } as React.CSSProperties;

    return (
        <div className={classes} style={style}>
            <div ref={scrollRef} className="designbase-scroll-area__content">
                {children}
            </div>
        </div>
    );
};

export default ScrollArea;
