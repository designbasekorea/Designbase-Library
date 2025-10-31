/**
 * Breadcrumbs 컴포넌트
 * 
 * 목적: 웹사이트의 현재 위치를 표시하는 네비게이션 컴포넌트
 * 기능: 경로 표시, 구분자 커스터마이징, 반응형 지원
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React from 'react';
import clsx from 'clsx';
import { ChevronRightIcon } from '@designbasekorea/icons';
import './Breadcrumbs.scss';

export type BreadcrumbsSize = 's' | 'm' | 'l';
export type BreadcrumbsStyle = 'default' | 'contained' | 'underlined';

export interface BreadcrumbItem {
    /** 브레드크럼 아이템 ID */
    id: string;
    /** 브레드크럼 아이템 라벨 */
    label: string;
    /** 브레드크럼 아이템 링크 */
    href?: string;
    /** 활성화 상태 */
    active?: boolean;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 아이콘 컴포넌트 */
    icon?: React.ReactNode;
}

export interface BreadcrumbsProps {
    /** 브레드크럼 아이템들 */
    items: BreadcrumbItem[];
    /** 브레드크럼 크기 */
    size?: BreadcrumbsSize;
    /** 브레드크럼 스타일 */
    breadcrumbStyle?: BreadcrumbsStyle;
    /** 구분자 아이콘 */
    separator?: React.ReactNode;
    /** 아이템 클릭 핸들러 */
    onItemClick?: (item: BreadcrumbItem) => void;
    /** 최대 표시 아이템 수 (나머지는 ...으로 표시) */
    maxItems?: number;
    /** 반응형에서 축약 표시 */
    collapseOnMobile?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    items,
    size = 'm',
    breadcrumbStyle = 'default',
    separator = <ChevronRightIcon size={16} />,
    onItemClick,
    maxItems,
    collapseOnMobile = true,
    className,
    ...props
}) => {
    const handleItemClick = (item: BreadcrumbItem, e: React.MouseEvent) => {
        if (item.disabled || item.active) {
            e.preventDefault();
            return;
        }

        if (onItemClick) {
            onItemClick(item);
        }
    };

    const getVisibleItems = () => {
        if (!maxItems || items.length <= maxItems) {
            return items;
        }

        const firstItem = items[0];
        const lastItem = items[items.length - 1];
        const middleItems = items.slice(1, -1);
        const visibleMiddleCount = maxItems - 2;

        if (visibleMiddleCount <= 0) {
            return [firstItem, lastItem];
        }

        const startIndex = Math.floor(middleItems.length / 2) - Math.floor(visibleMiddleCount / 2);
        const visibleMiddleItems = middleItems.slice(startIndex, startIndex + visibleMiddleCount);

        return [firstItem, ...visibleMiddleItems, lastItem];
    };

    const visibleItems = getVisibleItems();
    const hasCollapsedItems = visibleItems.length < items.length;

    const classes = clsx(
        'designbase-breadcrumbs',
        `designbase-breadcrumbs--${size}`,
        `designbase-breadcrumbs--${breadcrumbStyle}`,
        {
            'designbase-breadcrumbs--collapsed': hasCollapsedItems,
        },
        className
    );

    const renderItem = (item: BreadcrumbItem, index: number) => {
        const isLast = index === visibleItems.length - 1;
        const isFirst = index === 0;

        return (
            <li key={item.id} className="designbase-breadcrumbs__item">
                {item.href && !isLast ? (
                    <a
                        href={item.href}
                        className={clsx(
                            'designbase-breadcrumbs__link',
                            {
                                'designbase-breadcrumbs__link--active': item.active,
                                'designbase-breadcrumbs__link--disabled': item.disabled,
                            }
                        )}
                        onClick={(e) => handleItemClick(item, e)}
                    >
                        {item.icon && <span className="designbase-breadcrumbs__icon">{item.icon}</span>}
                        <span className="designbase-breadcrumbs__label">{item.label}</span>
                    </a>
                ) : (
                    <span
                        className={clsx(
                            'designbase-breadcrumbs__text',
                            {
                                'designbase-breadcrumbs__text--active': isLast,
                                'designbase-breadcrumbs__text--disabled': item.disabled,
                            }
                        )}
                    >
                        {item.icon && <span className="designbase-breadcrumbs__icon">{item.icon}</span>}
                        <span className="designbase-breadcrumbs__label">{item.label}</span>
                    </span>
                )}

                {!isLast && (
                    <span className="designbase-breadcrumbs__separator">
                        {separator}
                    </span>
                )}
            </li>
        );
    };

    return (
        <nav
            className={classes}
            aria-label="브레드크럼 네비게이션"
            {...props}
        >
            <ol className="designbase-breadcrumbs__list">
                {visibleItems.map(renderItem)}
            </ol>
        </nav>
    );
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
