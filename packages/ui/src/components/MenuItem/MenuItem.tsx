/**
 * MenuItem 컴포넌트
 * 
 * 목적: 네비게이션 메뉴의 개별 아이템을 표시하는 컴포넌트
 * 기능: 인라인/블록 타입, 다양한 스타일, 아이콘, 차일드 메뉴, 활성화 상태
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션
 */

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import type { BaseIconProps } from '@designbase/icons';
import { ChevronDownIcon, ChevronUpIcon } from '@designbase/icons';
import { Badge } from '../Badge/Badge';
import './MenuItem.scss';

export type MenuItemVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type MenuItemType = 'inline' | 'block';
export type MenuItemSize = 'sm' | 'md' | 'lg';
export type MenuItemStyle = 'dropdown' | 'accordion';

export interface MenuItemChild {
    /** 차일드 아이템 ID */
    id: string;
    /** 차일드 아이템 라벨 */
    label: string;
    /** 차일드 아이템 링크 */
    href?: string;
    /** 차일드 아이템 아이콘 */
    icon?: React.ComponentType<BaseIconProps>;
    /** 차일드 아이템 활성화 상태 */
    active?: boolean;
    /** 차일드 아이템 비활성화 상태 */
    disabled?: boolean;
    /** 차일드 아이템 배지 */
    badge?: number | string;
    /** 차일드 아이템 배지 색상 */
    badgeColor?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
    /** 차일드 아이템 variant */
    variant?: MenuItemVariant;
    /** 차일드 아이템 타입 */
    type?: MenuItemType;
    /** 차일드 아이템 스타일 */
    style?: MenuItemStyle;
    /** 차일드 메뉴 아이템들 */
    subItems?: MenuItemChild[];
}

export interface MenuItemProps {
    /** 메뉴 아이템 ID */
    id: string;
    /** 메뉴 아이템 라벨 */
    label: string;
    /** 메뉴 아이템 링크 */
    href?: string;
    /** 메뉴 아이템 아이콘 */
    icon?: React.ComponentType<BaseIconProps>;
    /** 메뉴 아이템 활성화 상태 */
    active?: boolean;
    /** 메뉴 아이템 비활성화 상태 */
    disabled?: boolean;
    /** 메뉴 아이템 배지 */
    badge?: number | string;
    /** 메뉴 아이템 배지 색상 */
    badgeColor?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
    /** 메뉴 아이템 variant */
    variant?: MenuItemVariant;
    /** 메뉴 아이템 타입 */
    type?: MenuItemType;
    /** 메뉴 아이템 크기 */
    size?: MenuItemSize;
    /** 메뉴 아이템 스타일 */
    style?: MenuItemStyle;
    /** 차일드 메뉴 아이템들 */
    subItems?: MenuItemChild[];
    /** 차일드 메뉴 확장 상태 */
    expanded?: boolean;
    /** 차일드 메뉴 확장 가능 여부 */
    expandable?: boolean;
    /** 메뉴 아이템 깊이 */
    depth?: number;
    /** 클릭 핸들러 */
    onClick?: (item: MenuItemProps) => void;
    /** 차일드 아이템 클릭 핸들러 */
    onChildClick?: (child: MenuItemChild) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
    id,
    label,
    href,
    icon: Icon,
    active = false,
    disabled = false,
    badge,
    badgeColor = 'primary',
    variant = 'default',
    type = 'inline',
    size = 'md',
    style = 'dropdown',
    subItems,
    expanded = false,
    expandable = false,
    depth = 0,
    onClick,
    onChildClick,
    className,
}) => {
    const [internalExpanded, setInternalExpanded] = useState(expanded);

    // expanded prop이 변경될 때 internalExpanded 업데이트
    useEffect(() => {
        setInternalExpanded(expanded);
    }, [expanded]);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (disabled) return;

        if (expandable && subItems && subItems.length > 0) {
            setInternalExpanded(!internalExpanded);
        }

        onClick?.({
            id,
            label,
            href,
            icon: Icon,
            active,
            disabled,
            badge,
            badgeColor,
            variant,
            type,
            size,
            subItems,
            expanded: internalExpanded,
            expandable,
            onClick,
            onChildClick,
            className,
        });
    };

    const handleChildClick = (child: MenuItemChild) => {
        if (child.disabled) return;
        onChildClick?.(child);
    };

    const isExpanded = expandable ? internalExpanded : expanded;
    const hasChildren = subItems && subItems.length > 0;

    const classes = clsx(
        'designbase-menu-item',
        `designbase-menu-item--${type}`,
        `designbase-menu-item--${size}`,
        `designbase-menu-item--${variant}`,
        `designbase-menu-item--${style}`,
        `designbase-menu-item--depth-${depth}`,
        {
            'designbase-menu-item--active': active,
            'designbase-menu-item--disabled': disabled,
            'designbase-menu-item--expandable': expandable,
            'designbase-menu-item--expanded': isExpanded,
            'designbase-menu-item--with-children': hasChildren,
            'designbase-menu-item--with-badge': badge,
            'designbase-menu-item--with-icon': Icon,
        },
        className
    );

    const contentClasses = clsx(
        'designbase-menu-item__content',
        {
            'designbase-menu-item__content--clickable': onClick || href,
        }
    );

    return (
        <div className={classes}>
            <div className={contentClasses} onClick={handleClick}>
                {/* 아이콘 */}
                {Icon && (
                    <div className={clsx(
                        'designbase-menu-item__icon',
                        `designbase-menu-item__icon--${variant}`,
                        {
                            'designbase-menu-item__icon--active': active,
                            'designbase-menu-item__icon--disabled': disabled,
                        }
                    )}>
                        <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
                    </div>
                )}

                {/* 라벨 */}
                <span className="designbase-menu-item__label">{label}</span>

                {/* 배지 */}
                {badge && (
                    <Badge
                        count={typeof badge === 'string' ? parseInt(badge) : badge}
                        variant={badgeColor === 'neutral' ? 'secondary' : badgeColor as any}
                        size="sm"
                        style="number"
                    />
                )}

                {/* 확장 아이콘 */}
                {hasChildren && (
                    <div className="designbase-menu-item__expand-icon">
                        {isExpanded ? (
                            <ChevronUpIcon size={16} />
                        ) : (
                            <ChevronDownIcon size={16} />
                        )}
                    </div>
                )}
            </div>

            {/* 차일드 메뉴 */}
            {hasChildren && isExpanded && (
                <div className={clsx(
                    'designbase-menu-item__children',
                    `designbase-menu-item__children--${style}`
                )}>
                    {subItems.map((child) => (
                        <MenuItem
                            key={child.id}
                            id={child.id}
                            label={child.label}
                            href={child.href}
                            icon={child.icon}
                            active={child.active}
                            disabled={child.disabled}
                            badge={child.badge}
                            badgeColor={child.badgeColor}
                            variant={child.variant}
                            type={child.type}
                            size={size}
                            style={child.style || style}
                            subItems={child.subItems}
                            depth={depth + 1}
                            onClick={() => handleChildClick(child)}
                            onChildClick={onChildClick}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
