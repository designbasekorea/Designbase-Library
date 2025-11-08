/**
 * Tabs 컴포넌트
 * 
 * 목적: 탭 기반 네비게이션 및 콘텐츠 전환 제공
 * 기능: 수평/수직 탭, 키보드 네비게이션, 접근성 지원
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import './Tabs.scss';

export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
    icon?: React.ComponentType<{ size?: number }>;
}

export interface TabsProps {
    /** 탭 아이템 목록 */
    items: TabItem[];
    /** 기본 선택된 탭 ID */
    defaultSelectedId?: string;
    /** 현재 선택된 탭 ID (제어 컴포넌트용) */
    selectedId?: string;
    /** 탭 방향 */
    orientation?: 'horizontal' | 'vertical';
    /** 탭 크기 */
    size?: 's' | 'm' | 'l';
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 탭 스타일 */
    variant?: 'default' | 'pills';
    /** 추가 CSS 클래스 */
    className?: string;
    /** 탭 변경 핸들러 */
    onTabChange?: (tabId: string) => void;
    /** 추가 props */
    [key: string]: any;
}

export const Tabs: React.FC<TabsProps> = ({
    items,
    defaultSelectedId,
    selectedId,
    orientation = 'horizontal',
    size = 'm',
    fullWidth = false,
    variant = 'default',
    className,
    onTabChange,
    ...props
}) => {
    const [activeTabId, setActiveTabId] = useState<string>(
        selectedId ?? defaultSelectedId ?? items[0]?.id ?? ''
    );
    const [focusedTabId, setFocusedTabId] = useState<string>('');
    const [isDragging, setIsDragging] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [showRightGradient, setShowRightGradient] = useState(false);

    const tabListRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
    const dragStartRef = useRef<{ x: number; scrollLeft: number } | null>(null);
    const clickStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

    // 제어 컴포넌트 처리
    useEffect(() => {
        if (selectedId !== undefined) {
            setActiveTabId(selectedId);
        }
    }, [selectedId]);

    // 스크롤 가능 여부 감지
    useEffect(() => {
        const checkScrollable = () => {
            if (tabListRef.current) {
                const isScrollable = tabListRef.current.scrollWidth > tabListRef.current.clientWidth;
                const isScrolledToEnd =
                    tabListRef.current.scrollLeft + tabListRef.current.clientWidth >=
                    tabListRef.current.scrollWidth - 5; // 5px 여유
                setShowRightGradient(isScrollable && !isScrolledToEnd);
            }
        };

        checkScrollable();
        window.addEventListener('resize', checkScrollable);

        const listElement = tabListRef.current;
        if (listElement) {
            listElement.addEventListener('scroll', checkScrollable);
        }

        return () => {
            window.removeEventListener('resize', checkScrollable);
            if (listElement) {
                listElement.removeEventListener('scroll', checkScrollable);
            }
        };
    }, [items]);

    // 키보드 네비게이션
    const handleKeyDown = useCallback((event: React.KeyboardEvent, currentTabId: string) => {
        const currentIndex = items.findIndex(item => item.id === currentTabId);
        if (currentIndex === -1) return;

        let nextIndex = currentIndex;

        switch (event.key) {
            case 'ArrowLeft':
                if (orientation === 'horizontal') {
                    event.preventDefault();
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
                }
                break;
            case 'ArrowRight':
                if (orientation === 'horizontal') {
                    event.preventDefault();
                    nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
                }
                break;
            case 'ArrowUp':
                if (orientation === 'vertical') {
                    event.preventDefault();
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
                }
                break;
            case 'ArrowDown':
                if (orientation === 'vertical') {
                    event.preventDefault();
                    nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
                }
                break;
            case 'Home':
                event.preventDefault();
                nextIndex = 0;
                break;
            case 'End':
                event.preventDefault();
                nextIndex = items.length - 1;
                break;
            case 'Enter':
            case ' ':
                event.preventDefault();
                const nextTab = items[nextIndex];
                if (nextTab && !nextTab.disabled) {
                    handleTabSelect(nextTab.id);
                }
                return;
        }

        // 비활성화된 탭 건너뛰기
        while (nextIndex !== currentIndex) {
            const nextTab = items[nextIndex];
            if (nextTab && !nextTab.disabled) {
                setFocusedTabId(nextTab.id);
                tabRefs.current.get(nextTab.id)?.focus();
                break;
            }

            if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                nextIndex = nextIndex > 0 ? nextIndex - 1 : items.length - 1;
            } else {
                nextIndex = nextIndex < items.length - 1 ? nextIndex + 1 : 0;
            }
        }
    }, [items, orientation]);

    const handleTabSelect = useCallback((tabId: string) => {
        // 드래그 중이면 탭 선택 무시
        if (isDragging) return;

        const tab = items.find(item => item.id === tabId);
        if (tab && !tab.disabled) {
            setActiveTabId(tabId);
            onTabChange?.(tabId);
        }
    }, [items, onTabChange, isDragging]);

    const handleTabFocus = useCallback((tabId: string) => {
        setFocusedTabId(tabId);
    }, []);

    const handleTabBlur = useCallback(() => {
        setFocusedTabId('');
    }, []);

    // 드래그 스크롤 핸들러들
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        if (orientation !== 'horizontal' || !tabListRef.current) return;

        // 클릭 시작 위치와 시간 기록
        clickStartRef.current = {
            x: e.pageX,
            y: e.pageY,
            time: Date.now()
        };

        dragStartRef.current = {
            x: e.pageX - tabListRef.current.offsetLeft,
            scrollLeft: tabListRef.current.scrollLeft
        };

        setIsMouseDown(true);
    }, [orientation]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!dragStartRef.current || !tabListRef.current) return;

        // 아직 드래그가 시작되지 않았다면 드래그 시작 여부 판단
        if (!isDragging && clickStartRef.current) {
            const deltaX = Math.abs(e.pageX - clickStartRef.current.x);
            const deltaY = Math.abs(e.pageY - clickStartRef.current.y);
            const deltaTime = Date.now() - clickStartRef.current.time;

            // 5px 이상 이동하거나 200ms 이상 지났으면 드래그 시작
            if (deltaX > 5 || deltaY > 5 || deltaTime > 200) {
                setIsDragging(true);
            }
        }

        if (!isDragging || !dragStartRef.current) return;

        e.preventDefault();
        const x = e.pageX - tabListRef.current.offsetLeft;
        const walk = (x - dragStartRef.current.x) * 2; // 스크롤 속도 조절
        tabListRef.current.scrollLeft = dragStartRef.current.scrollLeft - walk;
    }, [isDragging]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        setIsMouseDown(false);
        dragStartRef.current = null;
        clickStartRef.current = null;
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsDragging(false);
        setIsMouseDown(false);
        dragStartRef.current = null;
        clickStartRef.current = null;
    }, []);

    // 터치 이벤트 핸들러들
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (orientation !== 'horizontal' || !tabListRef.current) return;

        const touch = e.touches[0];

        // 클릭 시작 위치와 시간 기록
        clickStartRef.current = {
            x: touch.pageX,
            y: touch.pageY,
            time: Date.now()
        };

        dragStartRef.current = {
            x: touch.pageX - tabListRef.current.offsetLeft,
            scrollLeft: tabListRef.current.scrollLeft
        };

        setIsMouseDown(true);
    }, [orientation]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!dragStartRef.current || !tabListRef.current) return;

        // 아직 드래그가 시작되지 않았다면 드래그 시작 여부 판단
        if (!isDragging && clickStartRef.current) {
            const touch = e.touches[0];
            const deltaX = Math.abs(touch.pageX - clickStartRef.current.x);
            const deltaY = Math.abs(touch.pageY - clickStartRef.current.y);
            const deltaTime = Date.now() - clickStartRef.current.time;

            // 5px 이상 이동하거나 200ms 이상 지났으면 드래그 시작
            if (deltaX > 5 || deltaY > 5 || deltaTime > 200) {
                setIsDragging(true);
            }
        }

        if (!isDragging || !dragStartRef.current) return;

        e.preventDefault();
        const touch = e.touches[0];
        const x = touch.pageX - tabListRef.current.offsetLeft;
        const walk = (x - dragStartRef.current.x) * 2; // 스크롤 속도 조절
        tabListRef.current.scrollLeft = dragStartRef.current.scrollLeft - walk;
    }, [isDragging]);

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false);
        setIsMouseDown(false);
        dragStartRef.current = null;
        clickStartRef.current = null;
    }, []);

    // 드래그 이벤트 리스너 등록/해제
    useEffect(() => {
        if (isMouseDown) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('mouseleave', handleMouseLeave);
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave, handleTouchMove, handleTouchEnd]);

    const activeTab = items.find(item => item.id === activeTabId);
    const activeIndex = items.findIndex(item => item.id === activeTabId);

    const classes = clsx(
        'designbase-tabs',
        `designbase-tabs--${orientation}`,
        `designbase-tabs--${size}`,
        `designbase-tabs--${variant}`,
        {
            'designbase-tabs--full-width': fullWidth,
        },
        className
    );

    const tabListClasses = clsx(
        'designbase-tabs__list',
        `designbase-tabs__list--${orientation}`,
        {
            'designbase-tabs__list--full-width': fullWidth,
            'designbase-tabs__list--dragging': isDragging,
            'designbase-tabs__list--show-gradient': showRightGradient,
        }
    );

    return (
        <div className={classes} {...props}>
            <div
                ref={tabListRef}
                className={tabListClasses}
                role="tablist"
                aria-orientation={orientation}
                aria-label="탭 목록"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                {items.map((item, index) => {
                    const isSelected = item.id === activeTabId;
                    const isFocused = item.id === focusedTabId;
                    const isDisabled = item.disabled;

                    const tabClasses = clsx(
                        'designbase-tabs__tab',
                        {
                            'designbase-tabs__tab--selected': isSelected,
                            'designbase-tabs__tab--focused': isFocused,
                            'designbase-tabs__tab--disabled': isDisabled,
                            'designbase-tabs__tab--dragging': isDragging,
                        }
                    );

                    return (
                        <button
                            key={item.id}
                            ref={(el) => {
                                if (el) {
                                    tabRefs.current.set(item.id, el);
                                } else {
                                    tabRefs.current.delete(item.id);
                                }
                            }}
                            className={tabClasses}
                            role="tab"
                            aria-selected={isSelected}
                            aria-disabled={isDisabled}
                            aria-controls={`panel-${item.id}`}
                            id={`tab-${item.id}`}
                            tabIndex={isSelected ? 0 : -1}
                            disabled={isDisabled}
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleTouchStart}
                            onClick={() => handleTabSelect(item.id)}
                            onKeyDown={(e) => handleKeyDown(e, item.id)}
                            onFocus={() => handleTabFocus(item.id)}
                            onBlur={handleTabBlur}
                        >
                            {item.icon && (
                                <span className="designbase-tabs__tab-icon">
                                    <item.icon size={size === 's' ? 16 : size === 'l' ? 20 : 18} />
                                </span>
                            )}
                            <span className="designbase-tabs__tab-label">{item.label}</span>
                        </button>
                    );
                })}
            </div>

            {activeTab && (
                <div
                    className="designbase-tabs__panel"
                    role="tabpanel"
                    id={`panel-${activeTab.id}`}
                    aria-labelledby={`tab-${activeTab.id}`}
                    tabIndex={0}
                >
                    {activeTab.content}
                </div>
            )}
        </div>
    );
};

Tabs.displayName = 'Tabs';

export default Tabs;
