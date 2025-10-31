/**
 * Navbar 컴포넌트
 * 
 * 목적: 웹사이트의 상단 네비게이션 바 제공
 * 기능: 로고, 메뉴, 사용자 메뉴, 모바일 반응형 지원
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { MenuItem, type MenuItemProps } from '../MenuItem/MenuItem';
import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ChevronDownIcon, ChevronRightIcon } from '@designbasekorea/icons';
import './Navbar.scss';

export type NavbarSize = 's' | 'm' | 'l';
export type NavbarVariant = 'default' | 'transparent';
export type NavbarPosition = 'fixed' | 'sticky' | 'static';

export interface NavbarItem extends Omit<MenuItemProps, 'onClick' | 'onChildClick'> {
    /** 하위 메뉴 아이템들 */
    children?: NavbarItem[];
    /** 메뉴 아이템 클릭 핸들러 */
    onClick?: (item: NavbarItem) => void;
}

export interface NavbarProps {
    /** 네비게이션 바 크기 */
    size?: NavbarSize;
    /** 네비게이션 바 스타일 */
    variant?: NavbarVariant;
    /** 네비게이션 바 위치 */
    position?: NavbarPosition;
    /** 로고 컴포넌트 */
    logo?: React.ReactNode;
    /** 로고 클릭 핸들러 */
    onLogoClick?: () => void;
    /** 메인 네비게이션 아이템들 */
    items?: NavbarItem[];
    /** 메뉴 아이템 클릭 핸들러 */
    onItemClick?: (item: NavbarItem) => void;
    /** 사용자 메뉴 아이템들 */
    userMenuItems?: NavbarItem[];
    /** 사용자 메뉴 클릭 핸들러 */
    onUserMenuItemClick?: (item: NavbarItem) => void;
    /** 사용자 프로필 정보 */
    userProfile?: {
        name: string;
        email?: string;
        avatar?: string;
        badge?: number;
        badgeVariant?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
        badgeStyle?: 'dot' | 'number' | 'text' | 'outlined';
        badgeText?: string;
    };
    /** 로그인 핸들러 */
    onLoginClick?: () => void;
    /** 로그아웃 핸들러 */
    onLogoutClick?: () => void;
    /** 인증 상태 */
    isAuthenticated?: boolean;
    /** 검색 기능 활성화 */
    showSearch?: boolean;
    /** 검색 핸들러 */
    onSearch?: (query: string) => void;
    /** 검색 플레이스홀더 */
    searchPlaceholder?: string;
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 그림자 효과 */
    shadow?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Navbar: React.FC<NavbarProps> = ({
    size = 'm',
    variant = 'default',
    position = 'static',
    logo,
    onLogoClick,
    items = [],
    onItemClick,
    userMenuItems = [],
    onUserMenuItemClick,
    userProfile,
    onLoginClick,
    onLogoutClick,
    isAuthenticated = false,
    showSearch = false,
    onSearch,
    searchPlaceholder = '검색...',
    fullWidth = false,
    shadow = false,
    className,
    ...props
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
    const navbarRef = useRef<HTMLElement>(null);

    // 아이콘 크기 계산 (m이 기본값)
    const iconSize = size === 's' ? 16 : size === 'l' ? 24 : 20;

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleUserMenuToggle = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const handleItemClick = (item: NavbarItem, isMobile = false) => {
        if (item.disabled) return;

        // 모바일/태블릿에서만 하위 메뉴 확장/축소 토글
        if (isMobile && item.children && item.children.length > 0) {
            setExpandedItems(prev => ({
                ...prev,
                [item.id]: !prev[item.id]
            }));
            // 하위 메뉴가 있는 경우 메뉴를 닫지 않음
            return;
        }

        if (item.onClick) {
            item.onClick(item);
        }

        if (onItemClick) {
            onItemClick(item);
        }

        // 모바일 메뉴 자동 닫기 (하위 메뉴가 없는 경우에만)
        if (isMobileMenuOpen && (!item.children || item.children.length === 0)) {
            setIsMobileMenuOpen(false);
        }
    };

    const handleUserMenuItemClick = (item: NavbarItem) => {
        if (item.disabled) return;

        if (onUserMenuItemClick) {
            onUserMenuItemClick(item);
        }

        setIsUserMenuOpen(false);
    };

    const handleSubItemClick = (item: NavbarItem) => {
        if (item.disabled) return;

        if (item.onClick) {
            item.onClick(item);
        }

        if (onItemClick) {
            onItemClick(item);
        }

        // 하위 메뉴 아이템 클릭 시 모바일 메뉴 닫기
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    // 외부 클릭 시 메뉴 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    const classes = clsx(
        'designbase-navbar',
        `designbase-navbar--${size}`,
        `designbase-navbar--${variant}`,
        `designbase-navbar--${position}`,
        {
            'designbase-navbar--full-width': fullWidth,
            'designbase-navbar--shadow': shadow,
        },
        className
    );

    const containerClasses = clsx(
        'designbase-navbar__container',
        {
            'designbase-navbar__container--full-width': fullWidth,
        }
    );

    // 메뉴 아이템을 렌더링하는 함수
    const renderMenuItem = (item: NavbarItem, isMobile = false): React.ReactNode => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedItems[item.id];

        if (isMobile) {
            // 모바일에서는 MenuItem 컴포넌트 사용
            return (
                <MenuItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    href={item.href}
                    icon={item.icon}
                    active={item.active}
                    disabled={item.disabled}
                    badge={item.badge}
                    badgeColor={item.badgeColor}
                    variant={item.variant}
                    type="block"
                    size={size}
                    style="accordion"
                    subItems={item.children?.map(child => ({
                        id: child.id,
                        label: child.label,
                        href: child.href,
                        icon: child.icon,
                        active: child.active,
                        disabled: child.disabled,
                        badge: child.badge,
                        badgeColor: child.badgeColor,
                        variant: child.variant,
                        onClick: () => handleSubItemClick(child),
                    }))}
                    expandable={hasChildren}
                    expanded={isExpanded}
                    onClick={() => handleItemClick(item, true)}
                />
            );
        }

        // 데스크톱에서는 기존 방식 유지
        return (
            <li key={item.id} className="designbase-navbar__nav-item">
                {hasChildren ? (
                    <div className="designbase-navbar__dropdown">
                        <button
                            className={clsx(
                                'designbase-navbar__nav-link',
                                'designbase-navbar__nav-link--has-children',
                                {
                                    'designbase-navbar__nav-link--active': item.active,
                                    'designbase-navbar__nav-link--disabled': item.disabled,
                                }
                            )}
                            onClick={() => handleItemClick(item, false)}
                            disabled={item.disabled}
                        >
                            {item.icon && React.createElement(item.icon, { size: iconSize, color: 'currentColor' })}
                            {item.label}
                            <ChevronDownIcon
                                size={12}
                                className={clsx(
                                    'designbase-navbar__chevron',
                                    {
                                        'designbase-navbar__chevron--expanded': isExpanded,
                                    }
                                )}
                            />
                        </button>
                        <ul className="designbase-navbar__dropdown-menu">
                            {item.children!.map((child) => (
                                <li key={child.id}>
                                    <a
                                        href={child.href}
                                        className={clsx(
                                            'designbase-navbar__dropdown-item',
                                            {
                                                'designbase-navbar__dropdown-item--active': child.active,
                                                'designbase-navbar__dropdown-item--disabled': child.disabled,
                                            }
                                        )}
                                        onClick={(e) => {
                                            if (child.disabled) {
                                                e.preventDefault();
                                                return;
                                            }
                                            handleItemClick(child, false);
                                        }}
                                    >
                                        {child.icon && React.createElement(child.icon, { size: iconSize, color: 'currentColor' })}
                                        {child.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <a
                        href={item.href}
                        className={clsx(
                            'designbase-navbar__nav-link',
                            {
                                'designbase-navbar__nav-link--active': item.active,
                                'designbase-navbar__nav-link--disabled': item.disabled,
                            }
                        )}
                        onClick={(e) => {
                            if (item.disabled) {
                                e.preventDefault();
                                return;
                            }
                            handleItemClick(item, false);
                        }}
                    >
                        {item.icon && React.createElement(item.icon, { size: iconSize, color: 'currentColor' })}
                        {item.label}
                    </a>
                )}
            </li>
        );
    };

    return (
        <nav
            ref={navbarRef}
            className={clsx(classes, {
                'designbase-navbar--mobile-open': isMobileMenuOpen,
            })}
            role="navigation"
            aria-label="메인 네비게이션"
            {...props}
        >
            <div className={containerClasses}>
                {/* 왼쪽 영역 - 로고 */}
                <div className="designbase-navbar__left">
                    <div className="designbase-navbar__brand">
                        <div
                            className="designbase-navbar__logo"
                            onClick={onLogoClick}
                            role={onLogoClick ? 'button' : undefined}
                            tabIndex={onLogoClick ? 0 : undefined}
                        >
                            {logo || <Logo size="s" />}
                        </div>
                    </div>
                </div>

                {/* 오른쪽 영역 - 메뉴, 검색, 사용자 */}
                <div className="designbase-navbar__right">
                    {/* 데스크톱 네비게이션 */}
                    <div className="designbase-navbar__nav designbase-navbar__nav--desktop">
                        <ul className="designbase-navbar__nav-list">
                            {items.map(item => renderMenuItem(item, false))}
                        </ul>
                    </div>

                    {/* 검색 영역 */}
                    {showSearch && (
                        <div className="designbase-navbar__search">
                            <SearchBar
                                placeholder={searchPlaceholder}
                                value={searchQuery}
                                onChange={setSearchQuery}
                                onSearch={onSearch}
                                size={size === 's' ? 's' : size === 'l' ? 'l' : 'm'}
                                variant="outlined"
                            />
                        </div>
                    )}

                    {/* 사용자 메뉴 영역 */}
                    <div className="designbase-navbar__user-menu">
                        {isAuthenticated && userProfile ? (
                            <div className="designbase-navbar__user-dropdown">
                                <button
                                    className="designbase-navbar__user-toggle"
                                    onClick={handleUserMenuToggle}
                                    aria-expanded={isUserMenuOpen}
                                >
                                    <Avatar
                                        src={userProfile.avatar}
                                        alt={userProfile.name}
                                        initials={userProfile.name}
                                        size={size === 's' ? 's' : size === 'l' ? 'l' : 'm'}
                                        badge={userProfile.badge}
                                        badgeVariant={userProfile.badgeVariant}
                                        badgeStyle={userProfile.badgeStyle}
                                        badgeText={userProfile.badgeText}
                                    />
                                    <span className="designbase-navbar__user-name">
                                        {userProfile.name}
                                    </span>
                                    <ChevronDownIcon size={12} />
                                </button>
                                {isUserMenuOpen && (
                                    <ul className="designbase-navbar__user-dropdown-menu">
                                        {userProfile.email && (
                                            <li className="designbase-navbar__user-info">
                                                <span className="designbase-navbar__user-email">
                                                    {userProfile.email}
                                                </span>
                                            </li>
                                        )}
                                        {userMenuItems.map((item) => (
                                            <li key={item.id}>
                                                <a
                                                    href={item.href}
                                                    className={clsx(
                                                        'designbase-navbar__user-dropdown-item',
                                                        {
                                                            'designbase-navbar__user-dropdown-item--disabled': item.disabled,
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
                                                    {item.icon && React.createElement(item.icon, { size: iconSize, color: 'currentColor' })}
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <Button
                                variant="primary"
                                size={size === 's' ? 's' : size === 'l' ? 'l' : 'm'}
                                onClick={onLoginClick}
                            >
                                로그인
                            </Button>
                        )}
                    </div>
                </div>

                {/* 모바일 햄버거 메뉴 */}
                <button
                    className="designbase-navbar__mobile-toggle"
                    onClick={handleMobileMenuToggle}
                    aria-expanded={isMobileMenuOpen}
                    aria-label="메뉴 열기"
                >
                    <span className="designbase-navbar__mobile-toggle-line" />
                    <span className="designbase-navbar__mobile-toggle-line" />
                    <span className="designbase-navbar__mobile-toggle-line" />
                </button>
            </div>

            {/* 모바일 메뉴 */}
            {isMobileMenuOpen && (
                <div className="designbase-navbar__mobile-menu">

                    {showSearch && (
                        <div className="designbase-navbar__mobile-search">
                            <SearchBar
                                placeholder={searchPlaceholder}
                                value={searchQuery}
                                onChange={setSearchQuery}
                                onSearch={onSearch}
                                size="s"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                    )}

                    <ul className="designbase-navbar__mobile-nav-list">
                        {items.map((item) => renderMenuItem(item, true))}
                    </ul>

                    <div className="designbase-navbar__mobile-user">
                        {isAuthenticated && userProfile ? (
                            <>
                                <div className="designbase-navbar__mobile-user-info">
                                    {userProfile.avatar ? (
                                        <img
                                            src={userProfile.avatar}
                                            alt={userProfile.name}
                                            className="designbase-navbar__mobile-user-avatar"
                                        />
                                    ) : (
                                        <div className="designbase-navbar__mobile-user-avatar-placeholder">
                                            {userProfile.name.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                    <div>
                                        <div className="designbase-navbar__mobile-user-name">
                                            {userProfile.name}
                                        </div>
                                        {userProfile.email && (
                                            <div className="designbase-navbar__mobile-user-email">
                                                {userProfile.email}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <ul className="designbase-navbar__mobile-user-menu">
                                    {userMenuItems.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={item.href}
                                                className={clsx(
                                                    'designbase-navbar__mobile-user-menu-link',
                                                    {
                                                        'designbase-navbar__mobile-user-menu-link--disabled': item.disabled,
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
                                                {item.icon && React.createElement(item.icon, { size: iconSize, color: 'currentColor' })}
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <Button
                                variant="primary"
                                size="m"
                                onClick={onLoginClick}
                                fullWidth
                            >
                                로그인
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

Navbar.displayName = 'Navbar';

export default Navbar;
