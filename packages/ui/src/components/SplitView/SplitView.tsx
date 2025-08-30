/**
 * SplitView 컴포넌트
 * 
 * 화면을 분할하여 두 개의 패널을 제공하는 컴포넌트입니다.
 * 리사이즈 가능한 분할선과 패널 크기 조절을 지원합니다.
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import './SplitView.scss';

export type SplitDirection = 'horizontal' | 'vertical';
export type SplitSize = 'sm' | 'md' | 'lg' | 'xl';
export type SplitMode = 'ratio' | 'fixed';

export interface SplitViewProps {
    /** 분할 방향 */
    direction?: SplitDirection;
    /** 분할 모드: ratio(비율) 또는 fixed(고정크기) */
    mode?: SplitMode;
    /** 초기 분할 비율 (0-1) - mode가 'ratio'일 때 사용 */
    initialSplit?: number;
    /** 첫 번째 패널 고정 크기 (px) - mode가 'fixed'일 때 사용 */
    firstSize?: number;
    /** 최소 패널 크기 (px) */
    minSize?: number;
    /** 최대 패널 크기 (px) */
    maxSize?: number;
    /** 분할선 크기 (px) */
    splitterSize?: number;
    /** 분할선 색상 */
    splitterColor?: string;
    /** 분할선 호버 색상 */
    splitterHoverColor?: string;
    /** 첫 번째 패널 */
    first: React.ReactNode;
    /** 두 번째 패널 */
    second: React.ReactNode;
    /** 전체 너비 사용 */
    fullWidth?: boolean;
    /** 전체 높이 사용 */
    fullHeight?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const SplitView: React.FC<SplitViewProps> = ({
    direction = 'horizontal',
    mode = 'ratio',
    initialSplit = 0.5,
    firstSize = 200,
    minSize = 100,
    maxSize,
    splitterSize = 4,
    splitterColor,
    splitterHoverColor,
    first,
    second,
    fullWidth = false,
    fullHeight = false,
    className,
}) => {
    const [split, setSplit] = useState(initialSplit);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const splitterRef = useRef<HTMLDivElement>(null);

    // 분할 비율 또는 고정 크기 계산
    const getSplitValue = useCallback(() => {
        if (mode === 'fixed') {
            return firstSize;
        }
        return Math.max(0, Math.min(1, split)) * 100;
    }, [mode, split, firstSize]);

    // 드래그 시작
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
        document.body.style.userSelect = 'none';
    }, [direction]);

    // 드래그 중
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        let newSplit: number;

        if (direction === 'horizontal') {
            const containerWidth = containerRect.width;
            const mouseX = e.clientX - containerRect.left;

            if (mode === 'fixed') {
                // 고정 크기 모드: 픽셀 값으로 설정
                newSplit = Math.max(minSize, Math.min(maxSize || containerWidth - minSize, mouseX));
                setSplit(newSplit);
            } else {
                // 비율 모드: 0-1 값으로 설정
                newSplit = mouseX / containerWidth;

                // 최소/최대 크기 제한
                if (minSize || maxSize) {
                    const minSplit = minSize ? minSize / containerWidth : 0;
                    const maxSplit = maxSize ? maxSize / containerWidth : 1;
                    newSplit = Math.max(minSplit, Math.min(maxSplit, newSplit));
                }

                setSplit(newSplit);
            }
        } else {
            const containerHeight = containerRect.height;
            const mouseY = e.clientY - containerRect.top;

            if (mode === 'fixed') {
                // 고정 크기 모드: 픽셀 값으로 설정
                newSplit = Math.max(minSize, Math.min(maxSize || containerHeight - minSize, mouseY));
                setSplit(newSplit);
            } else {
                // 비율 모드: 0-1 값으로 설정
                newSplit = mouseY / containerHeight;

                // 최소/최대 크기 제한
                if (minSize || maxSize) {
                    const minSplit = minSize ? minSize / containerHeight : 0;
                    const maxSplit = maxSize ? maxSize / containerHeight : 1;
                    newSplit = Math.max(minSplit, Math.min(maxSplit, newSplit));
                }

                setSplit(newSplit);
            }
        }
    }, [isDragging, direction, mode, minSize, maxSize]);

    // 드래그 종료
    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }, []);

    // 이벤트 리스너 등록/해제
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, handleMouseMove, handleMouseUp]);

    const classes = clsx(
        'designbase-split-view',
        `designbase-split-view--direction-${direction}`,
        `designbase-split-view--mode-${mode}`,
        {
            'designbase-split-view--full-width': fullWidth,
            'designbase-split-view--full-height': fullHeight,
            'designbase-split-view--dragging': isDragging,
        },
        className
    );

    const splitterClasses = clsx(
        'designbase-split-view__splitter',
        `designbase-split-view__splitter--direction-${direction}`
    );

    const style: React.CSSProperties = {
        '--split-value': mode === 'fixed' ? `${getSplitValue()}px` : `${getSplitValue()}%`,
        '--splitter-size': `${splitterSize}px`,
        '--splitter-color': splitterColor,
        '--splitter-hover-color': splitterHoverColor,
    } as React.CSSProperties;

    return (
        <div ref={containerRef} className={classes} style={style}>
            <div className="designbase-split-view__first">
                {first}
            </div>
            <div
                ref={splitterRef}
                className={splitterClasses}
                onMouseDown={handleMouseDown}
            />
            <div className="designbase-split-view__second">
                {second}
            </div>
        </div>
    );
};

export default SplitView;
