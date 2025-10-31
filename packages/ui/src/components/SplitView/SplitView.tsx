/**
 * SplitView 컴포넌트
 * 
 * 화면을 분할하여 여러 개의 패널을 제공하는 컴포넌트입니다.
 * 리사이즈 가능한 분할선과 패널 크기 조절을 지원합니다.
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import './SplitView.scss';

export type SplitDirection = 'horizontal' | 'vertical';
export type SplitSize = 's' | 'm' | 'l' | 'xl';
export type SplitMode = 'ratio' | 'fixed';

export interface SplitPanel {
    /** 패널 컨텐츠 */
    content: React.ReactNode;
    /** 패널 크기 (고정 크기는 px, 비율은 0-1) */
    size?: number;
    /** 최소 크기 (px) */
    minSize?: number;
    /** 최대 크기 (px) */
    maxSize?: number;
    /** 리사이즈 가능 여부 */
    resizable?: boolean;
    /** 나머지 공간을 자동으로 채울지 여부 (기본값: 마지막 패널만 true) */
    flexible?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
}

export interface SplitViewProps {
    /** 분할 방향 */
    direction?: SplitDirection;
    /** 분할 모드: ratio(비율) 또는 fixed(고정크기) */
    mode?: SplitMode;
    /** 패널 목록 (2개 이상) */
    panels: SplitPanel[];
    /** 분할선 크기 (px) */
    splitterSize?: number;
    /** 분할선 색상 */
    splitterColor?: string;
    /** 분할선 호버 색상 */
    splitterHoverColor?: string;
    /** 패널 간 간격 (px, 기본값: 0) */
    gap?: number;
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
    panels,
    splitterSize = 4,
    splitterColor,
    splitterHoverColor,
    gap = 0,
    fullWidth = false,
    fullHeight = false,
    className,
}) => {
    // 각 패널의 현재 크기 상태
    const [panelSizes, setPanelSizes] = useState<number[]>(() =>
        panels.map((panel, index) => {
            if (panel.size !== undefined) return panel.size;
            if (mode === 'ratio') return 1 / panels.length;
            return 200; // 기본 고정 크기
        })
    );

    const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // 드래그 시작
    const handleMouseDown = useCallback((index: number) => (e: React.MouseEvent) => {
        e.preventDefault();
        setDraggingIndex(index);
        document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
        document.body.style.userSelect = 'none';
    }, [direction]);

    // 드래그 중
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (draggingIndex === null || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const panel = panels[draggingIndex];
        let newSize: number;

        if (direction === 'horizontal') {
            const containerWidth = containerRect.width;
            const mouseX = e.clientX - containerRect.left;

            // 이전 패널들의 총 크기 계산
            let offsetX = 0;
            for (let i = 0; i < draggingIndex; i++) {
                const size = panelSizes[i];
                offsetX += mode === 'fixed' ? size : (size * containerWidth);
                offsetX += splitterSize; // 분할선 크기 추가
            }

            const rawSize = mouseX - offsetX;

            if (mode === 'fixed') {
                newSize = Math.max(
                    panel.minSize || 0,
                    Math.min(panel.maxSize || containerWidth, rawSize)
                );
            } else {
                newSize = rawSize / containerWidth;
                const minSplit = panel.minSize ? panel.minSize / containerWidth : 0;
                const maxSplit = panel.maxSize ? panel.maxSize / containerWidth : 1;
                newSize = Math.max(minSplit, Math.min(maxSplit, newSize));
            }
        } else {
            const containerHeight = containerRect.height;
            const mouseY = e.clientY - containerRect.top;

            // 이전 패널들의 총 크기 계산
            let offsetY = 0;
            for (let i = 0; i < draggingIndex; i++) {
                const size = panelSizes[i];
                offsetY += mode === 'fixed' ? size : (size * containerHeight);
                offsetY += splitterSize; // 분할선 크기 추가
            }

            const rawSize = mouseY - offsetY;

            if (mode === 'fixed') {
                newSize = Math.max(
                    panel.minSize || 0,
                    Math.min(panel.maxSize || containerHeight, rawSize)
                );
            } else {
                newSize = rawSize / containerHeight;
                const minSplit = panel.minSize ? panel.minSize / containerHeight : 0;
                const maxSplit = panel.maxSize ? panel.maxSize / containerHeight : 1;
                newSize = Math.max(minSplit, Math.min(maxSplit, newSize));
            }
        }

        setPanelSizes(prev => {
            const next = [...prev];
            next[draggingIndex] = newSize;
            return next;
        });
    }, [draggingIndex, direction, mode, splitterSize, panelSizes, panels]);

    // 드래그 종료
    const handleMouseUp = useCallback(() => {
        setDraggingIndex(null);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }, []);

    // 이벤트 리스너 등록/해제
    useEffect(() => {
        if (draggingIndex !== null) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [draggingIndex, handleMouseMove, handleMouseUp]);

    const classes = clsx(
        'designbase-split-view',
        `designbase-split-view--direction-${direction}`,
        `designbase-split-view--mode-${mode}`,
        {
            'designbase-split-view--full-width': fullWidth,
            'designbase-split-view--full-height': fullHeight,
            'designbase-split-view--dragging': draggingIndex !== null,
        },
        className
    );

    const style: React.CSSProperties = {
        '--splitter-size': `${splitterSize}px`,
        '--splitter-color': splitterColor,
        '--splitter-hover-color': splitterHoverColor,
        gap: gap > 0 ? `${gap}px` : undefined,
    } as React.CSSProperties;

    return (
        <div ref={containerRef} className={classes} style={style}>
            {panels.map((panel, index) => {
                const size = panelSizes[index];
                const isLast = index === panels.length - 1;
                const isFlexible = panel.flexible !== undefined ? panel.flexible : isLast;
                const isResizable = panel.resizable !== false && !isLast;

                const panelStyle: React.CSSProperties = {};
                if (isFlexible) {
                    // flexible 패널은 나머지 공간을 자동으로 채움
                    panelStyle.flex = 1;
                } else {
                    // 고정 크기 또는 비율 패널
                    if (direction === 'horizontal') {
                        panelStyle.width = mode === 'fixed' ? `${size}px` : `${size * 100}%`;
                        panelStyle.flexShrink = 0;
                    } else {
                        panelStyle.height = mode === 'fixed' ? `${size}px` : `${size * 100}%`;
                        panelStyle.flexShrink = 0;
                    }
                }

                return (
                    <React.Fragment key={index}>
                        <div
                            className={clsx(
                                'designbase-split-view__panel',
                                {
                                    'designbase-split-view__panel--flexible': isFlexible,
                                    'designbase-split-view__panel--fixed': !isFlexible,
                                },
                                panel.className
                            )}
                            style={panelStyle}
                        >
                            {panel.content}
                        </div>
                        {!isLast && isResizable && gap === 0 && (
                            <div
                                className={clsx(
                                    'designbase-split-view__splitter',
                                    `designbase-split-view__splitter--direction-${direction}`
                                )}
                                onMouseDown={handleMouseDown(index)}
                                style={{
                                    cursor: direction === 'horizontal' ? 'col-resize' : 'row-resize',
                                }}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default SplitView;
