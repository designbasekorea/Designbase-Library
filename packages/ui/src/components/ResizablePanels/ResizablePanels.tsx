import React, { useState, useRef, useCallback, useEffect, ReactNode } from 'react';
import classNames from 'classnames';
import { MoveIcon, ExpandIcon, ArrowUpRightIcon, ArrowDownRightIcon, ArrowUpLeftIcon, ArrowDownLeftIcon, ArrowRightIcon, ArrowDownIcon } from '@designbasekorea/icons';
import './ResizablePanels.scss';

export interface ResizablePanelsProps {
    /** 자식 요소들 */
    children: ReactNode;
    /** 초기 너비 */
    initialWidth?: string | number;
    /** 초기 높이 */
    initialHeight?: string | number;
    /** 최소 너비 */
    minWidth?: string | number;
    /** 최소 높이 */
    minHeight?: string | number;
    /** 최대 너비 */
    maxWidth?: string | number;
    /** 최대 높이 */
    maxHeight?: string | number;
    /** 리사이즈 방향 */
    direction?: 'both' | 'horizontal' | 'vertical';
    /** 리사이즈 핸들 위치 */
    handlePosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'right' | 'bottom';
    /** 리사이즈 핸들 크기 */
    handleSize?: number;
    /** 리사이즈 핸들 아이콘 */
    handleIcon?: ReactNode;
    /** 리사이즈 핸들 색상 */
    handleColor?: string;
    /** 리사이즈 핸들 호버 색상 */
    handleHoverColor?: string;
    /** 리사이즈 중일 때 스냅 간격 */
    snapToGrid?: number;
    /** 리사이즈 중일 때 가이드라인 표시 */
    showGuides?: boolean;
    /** 리사이즈 중일 때 크기 표시 */
    showSizeIndicator?: boolean;
    /** 리사이즈 중일 때 최소/최대 경고 표시 */
    showConstraints?: boolean;
    /** 테두리 표시 */
    showBorder?: boolean;
    /** 그림자 효과 */
    shadow?: boolean;
    /** 배경색 */
    backgroundColor?: string;
    /** 테두리 반경 */
    borderRadius?: string | number;
    /** 클래스명 */
    className?: string;
    /** 리사이즈 시작 이벤트 */
    onResizeStart?: (size: { width: number; height: number }) => void;
    /** 리사이즈 중 이벤트 */
    onResize?: (size: { width: number; height: number }) => void;
    /** 리사이즈 완료 이벤트 */
    onResizeEnd?: (size: { width: number; height: number }) => void;
    /** 크기 변경 이벤트 */
    onSizeChange?: (size: { width: number; height: number }) => void;
}

const ResizablePanels: React.FC<ResizablePanelsProps> = ({
    children,
    initialWidth = '100%',
    initialHeight = '100%',
    minWidth = 200,
    minHeight = 150,
    maxWidth = '100vw',
    maxHeight = '100vh',
    direction = 'both',
    handlePosition = 'bottom-right',
    handleSize = 20,
    handleIcon,
    handleColor = '#666',
    handleHoverColor = '#333',
    snapToGrid = 0,
    showGuides = true,
    showSizeIndicator = true,
    showConstraints = true,
    showBorder = true,
    shadow = true,
    backgroundColor,
    borderRadius = 8,
    className,
    onResizeStart,
    onResize,
    onResizeEnd,
    onSizeChange,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [startSize, setStartSize] = useState({ width: 0, height: 0 });
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [currentSize, setCurrentSize] = useState({
        width: typeof initialWidth === 'number' ? initialWidth : 0,
        height: typeof initialHeight === 'number' ? initialHeight : 0,
    });

    // 최소/최대 크기 계산
    const getMinSize = useCallback(() => ({
        width: typeof minWidth === 'number' ? minWidth : 0,
        height: typeof minHeight === 'number' ? minHeight : 0,
    }), [minWidth, minHeight]);

    const getMaxSize = useCallback(() => {
        const container = containerRef.current;
        if (!container) return { width: Infinity, height: Infinity };

        const parentRect = container.parentElement?.getBoundingClientRect();
        if (!parentRect) return { width: Infinity, height: Infinity };

        return {
            width: typeof maxWidth === 'number' ? maxWidth :
                maxWidth === '100vw' ? window.innerWidth :
                    maxWidth === '100%' ? parentRect.width : Infinity,
            height: typeof maxHeight === 'number' ? maxHeight :
                maxHeight === '100vh' ? window.innerHeight :
                    maxHeight === '100%' ? parentRect.height : Infinity,
        };
    }, [maxWidth, maxHeight]);

    // 초기 크기 설정
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const parentRect = container.parentElement?.getBoundingClientRect();
        if (!parentRect) return;

        const newSize = {
            width: typeof initialWidth === 'number' ? initialWidth :
                initialWidth === '100%' ? parentRect.width :
                    parseInt(initialWidth) || parentRect.width,
            height: typeof initialHeight === 'number' ? initialHeight :
                initialHeight === '100%' ? parentRect.height :
                    parseInt(initialHeight) || parentRect.height,
        };

        setCurrentSize(newSize);
        onSizeChange?.(newSize);
    }, [initialWidth, initialHeight, onSizeChange]);

    // 마우스 다운 이벤트 핸들러
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const parentRect = container.parentElement?.getBoundingClientRect();
        if (!parentRect) return;

        const currentSizeSnapshot = { ...currentSize };
        const startPosSnapshot = { x: e.clientX, y: e.clientY };

        setIsResizing(true);
        setStartSize(currentSizeSnapshot);
        setStartPos(startPosSnapshot);

        onResizeStart?.(currentSizeSnapshot);

        // 전역 마우스 이벤트 리스너 등록
        const handleMouseMove = (e: MouseEvent) => {
            const deltaX = e.clientX - startPosSnapshot.x;
            const deltaY = e.clientY - startPosSnapshot.y;

            let newWidth = currentSizeSnapshot.width;
            let newHeight = currentSizeSnapshot.height;

            // 방향에 따른 크기 조정
            if (direction === 'both' || direction === 'horizontal') {
                newWidth = currentSizeSnapshot.width + deltaX;
            }
            if (direction === 'both' || direction === 'vertical') {
                newHeight = currentSizeSnapshot.height + deltaY;
            }

            // 그리드 스냅 적용
            if (snapToGrid > 0) {
                newWidth = Math.round(newWidth / snapToGrid) * snapToGrid;
                newHeight = Math.round(newHeight / snapToGrid) * snapToGrid;
            }

            // 최소/최대 크기 제한 적용
            const minSize = getMinSize();
            const maxSize = getMaxSize();

            newWidth = Math.max(minSize.width, Math.min(maxSize.width, newWidth));
            newHeight = Math.max(minSize.height, Math.min(maxSize.height, newHeight));

            const newSize = { width: newWidth, height: newHeight };

            // 디버깅용 로그
            console.log('Resizing:', {
                deltaX,
                deltaY,
                startSize: currentSizeSnapshot,
                newSize,
                direction
            });

            setCurrentSize(newSize);
            onResize?.(newSize);
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            onResizeEnd?.(currentSize);

            // 전역 이벤트 리스너 제거
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [currentSize, direction, snapToGrid, getMinSize, getMaxSize, onResizeStart, onResize, onResizeEnd]);

    // 터치 이벤트 핸들러
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const container = containerRef.current;
        if (!container) return;

        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const parentRect = container.parentElement?.getBoundingClientRect();
        if (!parentRect) return;

        const currentSizeSnapshot = { ...currentSize };
        const startPosSnapshot = { x: touch.clientX, y: touch.clientY };

        setIsResizing(true);
        setStartSize(currentSizeSnapshot);
        setStartPos(startPosSnapshot);

        onResizeStart?.(currentSizeSnapshot);

        // 전역 터치 이벤트 리스너 등록
        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            const deltaX = touch.clientX - startPosSnapshot.x;
            const deltaY = touch.clientY - startPosSnapshot.y;

            let newWidth = currentSizeSnapshot.width;
            let newHeight = currentSizeSnapshot.height;

            // 방향에 따른 크기 조정
            if (direction === 'both' || direction === 'horizontal') {
                newWidth = currentSizeSnapshot.width + deltaX;
            }
            if (direction === 'both' || direction === 'vertical') {
                newHeight = currentSizeSnapshot.height + deltaY;
            }

            // 그리드 스냅 적용
            if (snapToGrid > 0) {
                newWidth = Math.round(newWidth / snapToGrid) * snapToGrid;
                newHeight = Math.round(newHeight / snapToGrid) * snapToGrid;
            }

            // 최소/최대 크기 제한 적용
            const minSize = getMinSize();
            const maxSize = getMaxSize();

            newWidth = Math.max(minSize.width, Math.min(maxSize.width, newWidth));
            newHeight = Math.max(minSize.height, Math.min(maxSize.height, newHeight));

            const newSize = { width: newWidth, height: newHeight };
            setCurrentSize(newSize);
            onResize?.(newSize);
        };

        const handleTouchEnd = () => {
            setIsResizing(false);
            onResizeEnd?.(currentSize);

            // 전역 이벤트 리스너 제거
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
    }, [currentSize, direction, snapToGrid, getMinSize, getMaxSize, onResizeStart, onResize, onResizeEnd]);

    // 리사이즈 핸들 위치 계산
    const getHandleStyle = useCallback(() => {
        const baseStyle: React.CSSProperties = {
            width: handleSize,
            height: handleSize,
            backgroundColor: handleColor,
            cursor: direction === 'both' ? 'nw-resize' :
                direction === 'horizontal' ? 'ew-resize' :
                    direction === 'vertical' ? 'ns-resize' : 'nw-resize',
        };

        switch (handlePosition) {
            case 'bottom-right':
                return { ...baseStyle, bottom: 0, right: 0 };
            case 'bottom-left':
                return { ...baseStyle, bottom: 0, left: 0 };
            case 'top-right':
                return { ...baseStyle, top: 0, right: 0 };
            case 'top-left':
                return { ...baseStyle, top: 0, left: 0 };
            case 'right':
                return { ...baseStyle, top: '50%', right: 0, transform: 'translateY(-50%)' };
            case 'bottom':
                return { ...baseStyle, bottom: 0, left: '50%', transform: 'translateX(-50%)' };
            default:
                return { ...baseStyle, bottom: 0, right: 0 };
        }
    }, [handlePosition, handleSize, handleColor, direction]);

    // 방향에 따른 기본 리사이즈 핸들 아이콘
    const getDefaultHandleIcon = () => {
        const iconSize = Math.max(12, handleSize - 4);
        
        switch (handlePosition) {
            case 'bottom-right':
                return <ArrowDownRightIcon size={iconSize} />;
            case 'bottom-left':
                return <ArrowDownLeftIcon size={iconSize} />;
            case 'top-right':
                return <ArrowUpRightIcon size={iconSize} />;
            case 'top-left':
                return <ArrowUpLeftIcon size={iconSize} />;
            case 'right':
                return <ArrowRightIcon size={iconSize} />;
            case 'bottom':
                return <ArrowDownIcon size={iconSize} />;
            default:
                return direction === 'both' ? <MoveIcon size={iconSize} /> : <ExpandIcon size={iconSize} />;
        }
    };

    const classes = classNames(
        'designbase-resizable-panels',
        {
            'designbase-resizable-panels--resizing': isResizing,
            'designbase-resizable-panels--border': showBorder,
            'designbase-resizable-panels--shadow': shadow,
        },
        className
    );

    const style = {
        width: currentSize.width,
        height: currentSize.height,
        backgroundColor,
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    };

    return (
        <div
            ref={containerRef}
            className={classes}
            style={style}
        >
            {/* 가이드라인 */}
            {showGuides && isResizing && (
                <div className="designbase-resizable-panels__guides">
                    <div className="designbase-resizable-panels__guide designbase-resizable-panels__guide--horizontal" />
                    <div className="designbase-resizable-panels__guide designbase-resizable-panels__guide--vertical" />
                </div>
            )}

            {/* 크기 표시기 */}
            {showSizeIndicator && isResizing && (
                <div className="designbase-resizable-panels__size-indicator">
                    {Math.round(currentSize.width)} × {Math.round(currentSize.height)}
                </div>
            )}

            {/* 제약 조건 경고 */}
            {showConstraints && isResizing && (
                <div className="designbase-resizable-panels__constraints">
                    {currentSize.width <= getMinSize().width && (
                        <div className="designbase-resizable-panels__constraint designbase-resizable-panels__constraint--min">
                            최소 너비 도달
                        </div>
                    )}
                    {currentSize.height <= getMinSize().height && (
                        <div className="designbase-resizable-panels__constraint designbase-resizable-panels__constraint--min">
                            최소 높이 도달
                        </div>
                    )}
                    {currentSize.width >= getMaxSize().width && (
                        <div className="designbase-resizable-panels__constraint designbase-resizable-panels__constraint--max">
                            최대 너비 도달
                        </div>
                    )}
                    {currentSize.height >= getMaxSize().height && (
                        <div className="designbase-resizable-panels__constraint designbase-resizable-panels__constraint--max">
                            최대 높이 도달
                        </div>
                    )}
                </div>
            )}

            {/* 내용 */}
            <div className="designbase-resizable-panels__content">
                {children}
            </div>

            {/* 리사이즈 핸들 */}
            <div
                className="designbase-resizable-panels__handle"
                style={getHandleStyle()}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundColor = handleHoverColor;
                }}
                onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundColor = handleColor;
                }}
            >
                {handleIcon || getDefaultHandleIcon()}
            </div>
        </div>
    );
};

export default ResizablePanels;
