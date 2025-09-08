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
    size?: 'sm' | 'md' | 'lg';
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 탭 스타일 */
    variant?: 'default' | 'pills' | 'underline';
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
    size = 'md',
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

    const tabListRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

    // 제어 컴포넌트 처리
    useEffect(() => {
        if (selectedId !== undefined) {
            setActiveTabId(selectedId);
        }
    }, [selectedId]);

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
        const tab = items.find(item => item.id === tabId);
        if (tab && !tab.disabled) {
            setActiveTabId(tabId);
            onTabChange?.(tabId);
        }
    }, [items, onTabChange]);

    const handleTabFocus = useCallback((tabId: string) => {
        setFocusedTabId(tabId);
    }, []);

    const handleTabBlur = useCallback(() => {
        setFocusedTabId('');
    }, []);

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
                            onClick={() => handleTabSelect(item.id)}
                            onKeyDown={(e) => handleKeyDown(e, item.id)}
                            onFocus={() => handleTabFocus(item.id)}
                            onBlur={handleTabBlur}
                        >
                            {item.icon && (
                                <span className="designbase-tabs__tab-icon">
                                    <item.icon size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />
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
