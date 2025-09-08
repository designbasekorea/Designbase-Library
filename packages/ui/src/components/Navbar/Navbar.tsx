/**
 * Navbar 컴포넌트
 * 
 * 목적: 웹사이트의 상단 네비게이션 바 제공
 * 기능: 로고, 메뉴, 사용자 메뉴, 모바일 반응형 지원
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState } from 'react';
import clsx from 'clsx';
import { MenuItem, type MenuItemProps } from '../MenuItem/MenuItem';
import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';
import { Avatar } from '../Avatar/Avatar';
import './Navbar.scss';

export type NavbarSize = 'sm' | 'md' | 'lg';
export type NavbarVariant = 'default' | 'transparent' | 'solid';
export type NavbarPosition = 'fixed' | 'sticky' | 'static';

export interface NavbarItem extends Omit<MenuItemProps, 'onClick' | 'onChildClick'> {
    /** 하위 메뉴 아이템들 */
    children?: NavbarItem[];
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
    /** 로그인/로그아웃 핸들러 */
    onAuthClick?: () => void;
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
    size = 'md',
    variant = 'default',
    position = 'static',
    logo,
    onLogoClick,
    items = [],
    onItemClick,
    userMenuItems = [],
    onUserMenuItemClick,
    userProfile,
    onAuthClick,
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

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleUserMenuToggle = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const handleItemClick = (item: NavbarItem) => {
        if (item.disabled) return;

        if (onItemClick) {
            onItemClick(item);
        }

        // 모바일 메뉴 자동 닫기
        if (isMobileMenuOpen) {
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



    const classes = clsx(
        'designbase-navbar',
        `designbase-navbar--${size}`,
        `designbase-navbar--${variant}`,
        `designbase-navbar--${position}`,
        {
            'designbase-navbar--full-width': fullWidth,
            'designbase-navbar--shadow': shadow,
            'designbase-navbar--mobile-open': isMobileMenuOpen,
        },
        className
    );

    const containerClasses = clsx(
        'designbase-navbar__container',
        {
            'designbase-navbar__container--full-width': fullWidth,
        }
    );

    const renderNavItem = (item: NavbarItem) => (
        <li key={item.id} className="designbase-navbar__nav-item">
            <MenuItem
                {...item}
                type="inline"
                style="dropdown"
                onClick={() => handleItemClick(item)}
                onChildClick={(child) => handleItemClick(child)}
            />
        </li>
    );

    return (
        <nav
            className={classes}
            role="navigation"
            aria-label="메인 네비게이션"
            {...props}
        >
            <div className={containerClasses}>
                {/* 로고 영역 */}
                <div className="designbase-navbar__brand">
                    <div
                        className="designbase-navbar__logo"
                        onClick={onLogoClick}
                        role={onLogoClick ? 'button' : undefined}
                        tabIndex={onLogoClick ? 0 : undefined}
                    >
                        {logo || <Logo size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'} />}
                    </div>
                </div>

                {/* 데스크톱 네비게이션 */}
                <div className="designbase-navbar__nav">
                    <ul className="designbase-navbar__nav-list">
                        {items.map(renderNavItem)}
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
                            size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
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
                                    size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
                                    badge={userProfile.badge}
                                    badgeVariant={userProfile.badgeVariant}
                                    badgeStyle={userProfile.badgeStyle}
                                    badgeText={userProfile.badgeText}
                                />
                                <span className="designbase-navbar__user-name">
                                    {userProfile.name}
                                </span>
                                <i className="designbase-icon-chevron-down" />
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
                                                {item.icon && React.createElement(item.icon, { size: 16 })}
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ) : (
                        <button
                            className="designbase-navbar__auth-button"
                            onClick={onAuthClick}
                        >
                            로그인
                        </button>
                    )}
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
                    <div className="designbase-navbar__mobile-menu-header">
                        <h3>메뉴</h3>
                        <button
                            className="designbase-navbar__mobile-menu-close"
                            onClick={handleMobileMenuToggle}
                            aria-label="메뉴 닫기"
                        >
                            <i className="designbase-icon-x" />
                        </button>
                    </div>

                    {showSearch && (
                        <div className="designbase-navbar__mobile-search">
                            <SearchBar
                                placeholder={searchPlaceholder}
                                value={searchQuery}
                                onChange={setSearchQuery}
                                onSearch={onSearch}
                                size="sm"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                    )}

                    <ul className="designbase-navbar__mobile-nav-list">
                        {items.map((item) => (
                            <li key={item.id} className="designbase-navbar__mobile-nav-item">
                                <a
                                    href={item.href}
                                    className={clsx(
                                        'designbase-navbar__mobile-nav-link',
                                        {
                                            'designbase-navbar__mobile-nav-link--active': item.active,
                                            'designbase-navbar__mobile-nav-link--disabled': item.disabled,
                                        }
                                    )}
                                    onClick={(e) => {
                                        if (item.disabled) {
                                            e.preventDefault();
                                            return;
                                        }
                                        handleItemClick(item);
                                    }}
                                >
                                    {item.icon && React.createElement(item.icon, { size: 16 })}
                                    {item.label}
                                </a>
                                {item.children && item.children.length > 0 && (
                                    <ul className="designbase-navbar__mobile-submenu">
                                        {item.children.map((child) => (
                                            <li key={child.id}>
                                                <a
                                                    href={child.href}
                                                    className={clsx(
                                                        'designbase-navbar__mobile-submenu-link',
                                                        {
                                                            'designbase-navbar__mobile-submenu-link--active': child.active,
                                                            'designbase-navbar__mobile-submenu-link--disabled': child.disabled,
                                                        }
                                                    )}
                                                    onClick={(e) => {
                                                        if (child.disabled) {
                                                            e.preventDefault();
                                                            return;
                                                        }
                                                        handleItemClick(child);
                                                    }}
                                                >
                                                    {child.icon && React.createElement(child.icon, { size: 16 })}
                                                    {child.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {isAuthenticated && userProfile && (
                        <div className="designbase-navbar__mobile-user">
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
                                            {item.icon && React.createElement(item.icon, { size: 16 })}
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

Navbar.displayName = 'Navbar';

export default Navbar;
