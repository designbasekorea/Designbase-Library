/**
 * BottomNavigation 컴포넌트
 * 
 * 목적: 모바일 앱에서 자주 사용되는 하단 네비게이션 바
 * 기능: 아이콘, 라벨, 배지, 활성 상태 표시, 클릭 이벤트
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션
 */

import React from 'react';
import clsx from 'clsx';
import { Badge } from '../Badge/Badge';
import type { IconProps } from '@designbasekorea/icons';
import './BottomNavigation.scss';

export interface BottomNavigationItem {
    /** 아이템 ID */
    id: string;
    /** 아이콘 컴포넌트 (기본 상태) */
    icon: React.ComponentType<IconProps>;
    /** 활성화된 아이콘 컴포넌트 (선택사항) */
    activeIcon?: React.ComponentType<IconProps>;
    /** 라벨 텍스트 */
    label: string;
    /** 활성 상태 */
    isActive?: boolean;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 배지 표시 */
    badge?: string | number;
    /** 배지 색상 */
    badgeColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 추가 데이터 */
    data?: any;
}

export interface BottomNavigationProps {
    /** 네비게이션 아이템들 */
    items: BottomNavigationItem[];
    /** 활성 아이템 ID */
    activeItemId?: string;
    /** 아이템 클릭 핸들러 */
    onItemClick?: (item: BottomNavigationItem) => void;
    /** 고정 여부 (화면 하단에 고정) */
    fixed?: boolean;
    /** 배경색 */
    backgroundColor?: 'default' | 'glass' | 'transparent';
    /** 크기 */
    size?: 's' | 'm' | 'l';
    /** 추가 CSS 클래스 */
    className?: string;
    /** 스타일 */
    style?: React.CSSProperties;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
    items,
    activeItemId,
    onItemClick,
    fixed = true,
    backgroundColor = 'default',
    size = 'm',
    className,
    style,
}) => {
    const handleItemClick = (item: BottomNavigationItem) => {
        if (item.disabled) return;

        if (item.onClick) {
            item.onClick();
        }

        if (onItemClick) {
            onItemClick(item);
        }
    };

    const classes = clsx(
        'designbase-bottom-navigation',
        `designbase-bottom-navigation--${size}`,
        `designbase-bottom-navigation--${backgroundColor}`,
        {
            'designbase-bottom-navigation--fixed': fixed,
        },
        className
    );

    return (
        <nav
            className={classes}
            style={style}
            role="navigation"
            aria-label="하단 네비게이션"
        >
            <div className="designbase-bottom-navigation__container">
                {items.map((item) => {
                    const isActive = activeItemId === item.id || item.isActive;
                    // 활성화 상태에 따라 다른 아이콘 사용
                    const Icon = isActive && item.activeIcon ? item.activeIcon : item.icon;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            className={clsx(
                                'designbase-bottom-navigation__item',
                                {
                                    'designbase-bottom-navigation__item--active': isActive,
                                    'designbase-bottom-navigation__item--disabled': item.disabled,
                                }
                            )}
                            onClick={() => handleItemClick(item)}
                            disabled={item.disabled}
                            aria-label={item.label}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            <div className="designbase-bottom-navigation__item-content">
                                <div className="designbase-bottom-navigation__icon-wrapper">
                                    <Icon
                                        size={size === 's' ? 20 : size === 'm' ? 24 : 28}
                                        className="designbase-bottom-navigation__icon"
                                    />
                                    {item.badge && (
                                        <Badge
                                            size="s"
                                            variant={item.badgeColor === 'error' ? 'danger' : item.badgeColor === 'warning' ? 'warning' : item.badgeColor === 'success' ? 'success' : item.badgeColor === 'info' ? 'info' : item.badgeColor === 'primary' ? 'primary' : 'secondary'}
                                            className="designbase-bottom-navigation__badge"
                                        >
                                            {item.badge}
                                        </Badge>
                                    )}
                                </div>
                                <span className="designbase-bottom-navigation__label">
                                    {item.label}
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

BottomNavigation.displayName = 'BottomNavigation';

export default BottomNavigation;
