/**
 * Accordion 컴포넌트
 * 
 * 목적: 접을 수 있는 콘텐츠 섹션을 관리하는 아코디언 컴포넌트
 * 기능: 단일/다중 확장, 아이콘, 다양한 스타일, 접근성 지원
 */

import React, { useState, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon } from '@designbasekorea/icons';
import type { IconProps } from '@designbasekorea/icons';
import './Accordion.scss';

export type AccordionItemType = 'icon' | 'number' | 'question' | 'none';

export interface AccordionItem {
    /** 아이템 ID */
    id: string;
    /** 아이템 제목 */
    title: string;
    /** 아이템 내용 */
    content: React.ReactNode;
    /** 왼쪽 아이콘 */
    icon?: React.ComponentType<IconProps>;
    /** 아이템 표시 타입 */
    itemType?: AccordionItemType;
    /** 아이템 비활성화 여부 */
    disabled?: boolean;
    /** 기본적으로 확장된 상태 */
    defaultExpanded?: boolean;
}

export interface AccordionProps {
    /** 아코디언 아이템들 */
    items: AccordionItem[];
    /** 아코디언 스타일 */
    style?: 'default' | 'bordered' | 'separated' | 'contained';
    /** 아코디언 크기 */
    size?: 's' | 'm' | 'l';
    /** 다중 확장 허용 여부 */
    allowMultiple?: boolean;
    /** 기본적으로 확장된 아이템들 (allowMultiple이 true일 때만 사용) */
    defaultExpandedItems?: string[];
    /** 기본 아이템 타입 (개별 아이템에서 itemType이 지정되지 않은 경우 사용) */
    defaultItemType?: AccordionItemType;
    /** 아이템 변경 핸들러 */
    onItemChange?: (expandedItems: string[]) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
    items,
    style = 'default',
    size = 'm',
    allowMultiple = false,
    defaultExpandedItems = [],
    defaultItemType = 'none',
    onItemChange,
    className,
}) => {
    const [expandedItems, setExpandedItems] = useState<string[]>(() => {
        if (allowMultiple) {
            return defaultExpandedItems;
        } else {
            // 단일 확장 모드에서는 첫 번째 기본 확장 아이템만
            const defaultItem = items.find(item => item.defaultExpanded);
            return defaultItem ? [defaultItem.id] : [];
        }
    });

    const handleItemToggle = useCallback((itemId: string) => {
        setExpandedItems(prev => {
            let newExpandedItems: string[];

            if (allowMultiple) {
                // 다중 확장 모드
                if (prev.includes(itemId)) {
                    newExpandedItems = prev.filter(id => id !== itemId);
                } else {
                    newExpandedItems = [...prev, itemId];
                }
            } else {
                // 단일 확장 모드
                newExpandedItems = prev.includes(itemId) ? [] : [itemId];
            }

            onItemChange?.(newExpandedItems);
            return newExpandedItems;
        });
    }, [allowMultiple, onItemChange]);

    const isExpanded = useCallback((itemId: string) => {
        return expandedItems.includes(itemId);
    }, [expandedItems]);

    // 현재 테마 감지
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const detectTheme = () => {
            const root = document.documentElement;

            // Storybook 전역 테마 감지
            const storybookTheme = root.getAttribute('data-theme');
            const isDarkMode = root.classList.contains('dark') ||
                root.classList.contains('sb-dark') ||
                root.classList.contains('dark-theme') ||
                root.classList.contains('theme-dark') ||
                storybookTheme === 'dark';

            // CSS 변수로 테마 확인
            const computedStyle = getComputedStyle(root);
            const bgColor = computedStyle.getPropertyValue('--color-semantic-background-primary');
            const isDarkBg = bgColor && bgColor.trim() !== '';

            const theme = (isDarkMode || isDarkBg) ? 'dark' : 'light';
            setCurrentTheme(theme);
        };

        // 초기 테마 감지
        detectTheme();

        // 테마 변경 감지
        const observer = new MutationObserver(detectTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme', 'class']
        });

        return () => observer.disconnect();
    }, []);

    const classes = clsx(
        'designbase-accordion',
        `designbase-accordion--${style}`,
        `designbase-accordion--${size}`,
        {
            'designbase-accordion--multiple': allowMultiple,
        },
        className
    );

    // 아이콘 크기 계산
    const iconSize = size === 's' ? 16 : size === 'l' ? 24 : 20;

    const renderItemPrefix = (item: AccordionItem, index: number) => {
        const itemType = item.itemType || defaultItemType;

        switch (itemType) {
            case 'icon':
                return item.icon ? (
                    <div className="designbase-accordion__icon">
                        <item.icon size={iconSize} />
                    </div>
                ) : null;

            case 'number':
                return (
                    <div className="designbase-accordion__number">
                        {index + 1}.
                    </div>
                );

            case 'question':
                return (
                    <div className="designbase-accordion__question">
                        Q.
                    </div>
                );

            case 'none':
            default:
                return null;
        }
    };

    return (
        <div
            className={classes}
            role="region"
            aria-label="아코디언"
            data-theme={currentTheme}
        >
            {items.map((item, index) => {
                const expanded = isExpanded(item.id);
                const itemClasses = clsx(
                    'designbase-accordion__item',
                    `designbase-accordion__item--${style}`,
                    {
                        'designbase-accordion__item--expanded': expanded,
                        'designbase-accordion__item--disabled': item.disabled,
                    }
                );

                return (
                    <div key={item.id} className={itemClasses}>
                        <button
                            type="button"
                            className="designbase-accordion__trigger"
                            onClick={() => !item.disabled && handleItemToggle(item.id)}
                            disabled={item.disabled}
                            aria-expanded={expanded}
                            aria-controls={`accordion-content-${item.id}`}
                        >
                            {/* 접두사 (아이콘, 숫자, Q. 등) */}
                            {renderItemPrefix(item, index)}

                            {/* 제목 */}
                            <span className="designbase-accordion__title">
                                {item.title}
                            </span>

                            {/* 화살표 아이콘 */}
                            <div className="designbase-accordion__chevron">
                                <ChevronDownIcon size={iconSize} />
                            </div>
                        </button>

                        {/* 콘텐츠 */}
                        <div
                            id={`accordion-content-${item.id}`}
                            className="designbase-accordion__content"
                            aria-hidden={!expanded}
                        >
                            <div className="designbase-accordion__content-inner">
                                {item.content}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

Accordion.displayName = 'Accordion';

export default Accordion;
