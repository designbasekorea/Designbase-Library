/**
 * ContextMenu 컴포넌트
 * 
 * 목적: 우클릭 시 나타나는 컨텍스트 메뉴 컴포넌트
 * 기능: 마우스 위치 기반 표시, 서브메뉴, 접근성 지원
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { MenuItem, type MenuItemProps } from '../MenuItem/MenuItem';
import { Divider } from '../Divider/Divider';
import './ContextMenu.scss';

export interface ContextMenuItem {
    /** 아이템 ID */
    id: string;
    /** 아이템 라벨 */
    label?: string;
    /** 아이콘 */
    icon?: React.ComponentType<any>;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 서브메뉴 아이템들 */
    subItems?: ContextMenuItem[];
    /** 구분선 여부 */
    isDivider?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 아이템 스타일 */
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    /** 추가 CSS 클래스 */
    className?: string;
}

export interface ContextMenuProps {
    /** 컨텍스트 메뉴 아이템들 */
    items: ContextMenuItem[];
    /** 메뉴 표시 여부 */
    open: boolean;
    /** 메뉴 위치 X 좌표 */
    x: number;
    /** 메뉴 위치 Y 좌표 */
    y: number;
    /** 메뉴 닫기 핸들러 */
    onClose: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
    items,
    open,
    x,
    y,
    onClose,
    className,
}) => {
    const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // 메뉴 위치 계산
    useEffect(() => {
        if (!open || !menuRef.current) return;

        const menuElement = menuRef.current;
        const rect = menuElement.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let adjustedX = x;
        let adjustedY = y;

        // 오른쪽으로 넘어가는 경우 왼쪽에 표시
        if (x + rect.width > viewportWidth) {
            adjustedX = x - rect.width;
        }

        // 아래로 넘어가는 경우 위에 표시
        if (y + rect.height > viewportHeight) {
            adjustedY = y - rect.height;
        }

        // 최소값 보장
        adjustedX = Math.max(0, adjustedX);
        adjustedY = Math.max(0, adjustedY);

        setMenuStyle({
            position: 'fixed',
            left: adjustedX,
            top: adjustedY,
            zIndex: 1000,
        });
    }, [open, x, y]);

    // 바깥 클릭 감지
    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, onClose]);

    // 서브메뉴 위치 계산
    const handleSubMenuOpen = useCallback((itemId: string, event: React.MouseEvent) => {
        const subMenuElement = subMenuRefs.current[itemId];
        if (!subMenuElement) return;

        const rect = subMenuElement.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let subMenuX = rect.right;
        let subMenuY = rect.top;

        // 오른쪽으로 넘어가는 경우 왼쪽에 표시
        if (subMenuX + rect.width > viewportWidth) {
            subMenuX = rect.left - rect.width;
        }

        // 아래로 넘어가는 경우 위에 표시
        if (subMenuY + rect.height > viewportHeight) {
            subMenuY = viewportHeight - rect.height - 10;
        }

        subMenuElement.style.left = `${subMenuX}px`;
        subMenuElement.style.top = `${subMenuY}px`;
        setActiveSubMenu(itemId);
    }, []);

    const handleSubMenuClose = useCallback(() => {
        setActiveSubMenu(null);
    }, []);

    const handleItemClick = useCallback((item: ContextMenuItem) => {
        if (item.disabled) return;

        if (item.onClick) {
            item.onClick();
        }

        // 서브메뉴가 없으면 메뉴 닫기
        if (!item.subItems || item.subItems.length === 0) {
            onClose();
        }
    }, [onClose]);

    const renderMenuItem = useCallback((item: ContextMenuItem, index: number) => {
        if (item.isDivider) {
            return <Divider key={`divider-${index}`} />;
        }

        const hasSubMenu = item.subItems && item.subItems.length > 0;
        const isSubMenuOpen = activeSubMenu === item.id;

        return (
            <div key={item.id} className="designbase-context-menu__item-wrapper">
                <MenuItem
                    id={item.id}
                    label={item.label || ''}
                    icon={item.icon}
                    onClick={() => handleItemClick(item)}
                    disabled={item.disabled}
                    variant={item.variant}
                    className={item.className}
                />
                {hasSubMenu && (
                    <div
                        ref={(el) => { subMenuRefs.current[item.id] = el; }}
                        className={clsx(
                            'designbase-context-menu__submenu',
                            {
                                'designbase-context-menu__submenu--open': isSubMenuOpen,
                            }
                        )}
                        onMouseEnter={() => setActiveSubMenu(item.id)}
                        onMouseLeave={handleSubMenuClose}
                    >
                        {item.subItems!.map((subItem, subIndex) => renderMenuItem(subItem, subIndex))}
                    </div>
                )}
            </div>
        );
    }, [activeSubMenu, handleItemClick, handleSubMenuOpen, handleSubMenuClose]);

    if (!open) return null;

    const classes = clsx('designbase-context-menu', className);

    return (
        <div
            ref={menuRef}
            className={classes}
            style={menuStyle}
            role="menu"
            aria-orientation="vertical"
        >
            {items.map((item, index) => renderMenuItem(item, index))}
        </div>
    );
};

ContextMenu.displayName = 'ContextMenu';

export default ContextMenu;
