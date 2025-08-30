/**
 * Sidebar 컴포넌트
 * 
 * 목적: 웹사이트의 측면 네비게이션 바 제공
 * 기능: 메뉴, 접기/펼치기, 반응형 지원, 사용자 프로필
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState } from 'react';
import clsx from 'clsx';
import { MenuItem, type MenuItemProps } from '../MenuItem/MenuItem';
import { Logo } from '../Logo/Logo';
import './Sidebar.scss';

export type SidebarSize = 'sm' | 'md' | 'lg';
export type SidebarVariant = 'default' | 'dark' | 'light';
export type SidebarPosition = 'left' | 'right';

export interface SidebarItem extends Omit<MenuItemProps, 'onClick' | 'onChildClick'> {
    /** 하위 메뉴 아이템들 */
    children?: SidebarItem[];
}

export interface SidebarProps {
    /** 사이드바 크기 */
    size?: SidebarSize;
    /** 사이드바 스타일 */
    variant?: SidebarVariant;
    /** 사이드바 위치 */
    position?: SidebarPosition;
    /** 로고 컴포넌트 */
    logo?: React.ReactNode;
    /** 로고 클릭 핸들러 */
    onLogoClick?: () => void;
    /** 메뉴 아이템들 */
    items?: SidebarItem[];
    /** 메뉴 아이템 클릭 핸들러 */
    onItemClick?: (item: SidebarItem) => void;
    /** 사용자 프로필 정보 */
    userProfile?: {
        name: string;
        email?: string;
        avatar?: string;
        role?: string;
    };
    /** 사용자 메뉴 아이템들 */
    userMenuItems?: SidebarItem[];
    /** 사용자 메뉴 클릭 핸들러 */
    onUserMenuItemClick?: (item: SidebarItem) => void;
    /** 접기/펼치기 상태 */
    collapsed?: boolean;
    /** 접기/펼치기 핸들러 */
    onToggle?: (collapsed: boolean) => void;
    /** 접기/펼치기 가능 여부 */
    collapsible?: boolean;
    /** 고정 위치 여부 */
    fixed?: boolean;
    /** 전체 높이 여부 */
    fullHeight?: boolean;
    /** 그림자 효과 */
    shadow?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Sidebar: React.FC<SidebarProps> = ({
    size = 'md',
    variant = 'default',
    position = 'left',
    logo,
    onLogoClick,
    items = [],
    onItemClick,
    userProfile,
    userMenuItems = [],
    onUserMenuItemClick,
    collapsed = false,
    onToggle,
    collapsible = true,
    fixed = false,
    fullHeight = false,
    shadow = false,
    className,
    ...props
}) => {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const handleToggle = () => {
        if (onToggle) {
            onToggle(!collapsed);
        }
    };

    const handleItemClick = (item: SidebarItem) => {
        if (item.disabled) return;

        if (item.children && item.children.length > 0) {
            // 하위 메뉴가 있는 경우 접기/펼치기
            setExpandedItems(prev =>
                prev.includes(item.id)
                    ? prev.filter(id => id !== item.id)
                    : [...prev, item.id]
            );
        } else {
            // 일반 메뉴 클릭
            if (onItemClick) {
                onItemClick(item);
            }
        }
    };

    const handleUserMenuItemClick = (item: SidebarItem) => {
        if (item.disabled) return;

        if (onUserMenuItemClick) {
            onUserMenuItemClick(item);
        }
    };

    const classes = clsx(
        'designbase-sidebar',
        `designbase-sidebar--${size}`,
        `designbase-sidebar--${variant}`,
        `designbase-sidebar--${position}`,
        {
            'designbase-sidebar--collapsed': collapsed,
            'designbase-sidebar--fixed': fixed,
            'designbase-sidebar--full-height': fullHeight,
            'designbase-sidebar--shadow': shadow,
        },
        className
    );

    const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
        const isExpanded = expandedItems.includes(item.id);
        const hasChildren = item.children && item.children.length > 0;

        return (
            <li key={item.id} className="designbase-sidebar__item">
                <MenuItem
                    {...item}
                    type="block"
                    style="accordion"
                    depth={level}
                    expanded={isExpanded}
                    expandable={hasChildren}
                    onClick={() => handleItemClick(item)}
                    onChildClick={(child) => handleItemClick(child)}
                />
            </li>
        );
    };

    return (
        <aside
            className={classes}
            role="complementary"
            aria-label="사이드바 네비게이션"
            {...props}
        >
            <div className="designbase-sidebar__container">
                {/* 헤더 영역 */}
                <div className="designbase-sidebar__header">
                    <div
                        className="designbase-sidebar__logo"
                        onClick={onLogoClick}
                        role={onLogoClick ? 'button' : undefined}
                        tabIndex={onLogoClick ? 0 : undefined}
                    >
                        {logo || <Logo size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'} />}
                    </div>

                    {collapsible && (
                        <button
                            className="designbase-sidebar__toggle"
                            onClick={handleToggle}
                            aria-label={collapsed ? '사이드바 펼치기' : '사이드바 접기'}
                        >
                            <i className={clsx(
                                'designbase-sidebar__toggle-icon',
                                'designbase-icon-chevron-left',
                                {
                                    'designbase-sidebar__toggle-icon--collapsed': collapsed,
                                }
                            )} />
                        </button>
                    )}
                </div>

                {/* 네비게이션 메뉴 */}
                <nav className="designbase-sidebar__nav">
                    <ul className="designbase-sidebar__nav-list">
                        {items.map((item) => renderSidebarItem(item))}
                    </ul>
                </nav>

                {/* 사용자 프로필 영역 */}
                {userProfile && !collapsed && (
                    <div className="designbase-sidebar__user">
                        <div className="designbase-sidebar__user-info">
                            {userProfile.avatar ? (
                                <img
                                    src={userProfile.avatar}
                                    alt={userProfile.name}
                                    className="designbase-sidebar__user-avatar"
                                />
                            ) : (
                                <div className="designbase-sidebar__user-avatar-placeholder">
                                    {userProfile.name.charAt(0).toUpperCase()}
                                </div>
                            )}
                            <div className="designbase-sidebar__user-details">
                                <div className="designbase-sidebar__user-name">
                                    {userProfile.name}
                                </div>
                                {userProfile.email && (
                                    <div className="designbase-sidebar__user-email">
                                        {userProfile.email}
                                    </div>
                                )}
                                {userProfile.role && (
                                    <div className="designbase-sidebar__user-role">
                                        {userProfile.role}
                                    </div>
                                )}
                            </div>
                        </div>

                        {userMenuItems.length > 0 && (
                            <ul className="designbase-sidebar__user-menu">
                                {userMenuItems.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={item.href}
                                            className={clsx(
                                                'designbase-sidebar__user-menu-link',
                                                {
                                                    'designbase-sidebar__user-menu-link--disabled': item.disabled,
                                                }
                                            )}
                                            onClick={(e) => {
                                                if (item.disabled) {
                                                    e.preventDefault();
                                                    return;
                                                }
                                                handleUserMenuItemClick(item);
                                            }}
                                        >
                                            {item.icon && <i className={item.icon} />}
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                {/* 접힌 상태에서 사용자 아바타만 표시 */}
                {userProfile && collapsed && (
                    <div className="designbase-sidebar__user-collapsed">
                        {userProfile.avatar ? (
                            <img
                                src={userProfile.avatar}
                                alt={userProfile.name}
                                className="designbase-sidebar__user-avatar-collapsed"
                            />
                        ) : (
                            <div className="designbase-sidebar__user-avatar-placeholder-collapsed">
                                {userProfile.name.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </aside>
    );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
