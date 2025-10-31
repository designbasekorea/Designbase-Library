/**
 * Dropdown 컴포넌트
 * 
 * 목적: 드롭다운 메뉴 시스템 제공
 * 기능: 커스텀 트리거, 메뉴 아이템, 키보드 네비게이션
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon } from '@designbasekorea/icons';
import { Button } from '../Button/Button';
import './Dropdown.scss';

export interface DropdownItem {
    id: string;
    label?: string;
    icon?: React.ComponentType<{ size?: number }>;
    disabled?: boolean;
    divider?: boolean;
    onClick?: () => void;
    /** 커스텀 컨텐츠 (아이템 대신 렌더링) */
    custom?: React.ReactNode;
}

export interface DropdownProps {
    /** 드롭다운 아이템 목록 */
    items: DropdownItem[];
    /** 트리거 요소 */
    trigger?: React.ReactNode;
    /** 트리거 라벨 */
    label?: string;
    /** 트리거 버튼 variant */
    triggerVariant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
    /** 트리거 버튼 아이콘 */
    triggerIcon?: React.ComponentType<{ size?: number }>;
    /** 아이콘 전용 버튼 여부 */
    iconOnly?: boolean;
    /** 드롭다운 크기 */
    size?: 's' | 'm' | 'l';
    /** 드롭다운 위치 */
    placement?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 드롭다운 열림 상태 */
    isOpen?: boolean;
    /** 드롭다운 열림/닫힘 핸들러 */
    onToggle?: (isOpen: boolean) => void;
    /** 추가 props */
    [key: string]: any;
}

export const Dropdown: React.FC<DropdownProps> = ({
    items,
    trigger,
    label = '메뉴',
    triggerVariant = 'tertiary',
    triggerIcon,
    iconOnly = false,
    size = 'm',
    placement = 'bottom-left',
    fullWidth = false,
    disabled = false,
    className,
    isOpen: controlledIsOpen,
    onToggle,
    ...props
}) => {
    // 아이콘 크기 계산 (m이 기본값)
    const iconSize = size === 's' ? 14 : size === 'l' ? 18 : 16;
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

    // 제어 컴포넌트 처리
    const isControlled = controlledIsOpen !== undefined;
    const isDropdownOpen = isControlled ? controlledIsOpen : isOpen;

    // 외부 클릭 감지
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                handleClose();
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    // ESC 키 감지
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isDropdownOpen) {
                event.preventDefault();
                handleClose();
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isDropdownOpen]);

    const handleToggle = useCallback(() => {
        if (disabled) return;

        const newIsOpen = !isDropdownOpen;
        if (!isControlled) {
            setIsOpen(newIsOpen);
        }
        onToggle?.(newIsOpen);
    }, [disabled, isDropdownOpen, isControlled, onToggle]);

    const handleClose = useCallback(() => {
        if (!isControlled) {
            setIsOpen(false);
        }
        onToggle?.(false);
        setFocusedIndex(-1);
    }, [isControlled, onToggle]);

    // 키보드 네비게이션
    const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
        if (!isDropdownOpen) {
            if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
                event.preventDefault();
                handleToggle();
            }
            return;
        }

        const enabledItems = items.filter(item => !item.disabled && !item.divider);
        if (enabledItems.length === 0) return;

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                setFocusedIndex(prev => {
                    const nextIndex = prev < enabledItems.length - 1 ? prev + 1 : 0;
                    const nextItem = enabledItems[nextIndex];
                    if (nextItem) {
                        itemRefs.current.get(nextItem.id)?.focus();
                    }
                    return nextIndex;
                });
                break;
            case 'ArrowUp':
                event.preventDefault();
                setFocusedIndex(prev => {
                    const nextIndex = prev > 0 ? prev - 1 : enabledItems.length - 1;
                    const nextItem = enabledItems[nextIndex];
                    if (nextItem) {
                        itemRefs.current.get(nextItem.id)?.focus();
                    }
                    return nextIndex;
                });
                break;
            case 'Home':
                event.preventDefault();
                const firstItem = enabledItems[0];
                if (firstItem) {
                    setFocusedIndex(0);
                    itemRefs.current.get(firstItem.id)?.focus();
                }
                break;
            case 'End':
                event.preventDefault();
                const lastItem = enabledItems[enabledItems.length - 1];
                if (lastItem) {
                    setFocusedIndex(enabledItems.length - 1);
                    itemRefs.current.get(lastItem.id)?.focus();
                }
                break;
            case 'Enter':
            case ' ':
                event.preventDefault();
                const focusedItem = enabledItems[focusedIndex];
                if (focusedItem) {
                    handleItemClick(focusedItem);
                }
                break;
        }
    }, [isDropdownOpen, items, focusedIndex]);

    const handleItemClick = useCallback((item: DropdownItem) => {
        if (item.disabled || item.divider) return;

        item.onClick?.();
        handleClose();
    }, [handleClose]);

    const classes = clsx(
        'designbase-dropdown',
        `designbase-dropdown--${size}`,
        `designbase-dropdown--${placement}`,
        {
            'designbase-dropdown--open': isDropdownOpen,
            'designbase-dropdown--full-width': fullWidth,
            'designbase-dropdown--disabled': disabled,
        },
        className
    );

    const buttonSize = size;

    const menuClasses = clsx(
        'designbase-dropdown__menu',
        `designbase-dropdown__menu--${placement}`,
        {
            'designbase-dropdown__menu--open': isDropdownOpen,
        }
    );

    return (
        <div ref={containerRef} className={classes} {...props}>
            {trigger ? (
                <div ref={triggerRef} onClick={handleToggle} onKeyDown={handleKeyDown}>
                    {trigger}
                </div>
            ) : (
                <div ref={triggerRef}>
                    <Button
                        variant={triggerVariant}
                        size={buttonSize}
                        iconOnly={iconOnly}
                        startIcon={triggerIcon}
                        endIcon={ChevronDownIcon}
                        disabled={disabled}
                        fullWidth={fullWidth}
                        onPress={handleToggle}
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                        aria-label={label}
                        className={isDropdownOpen ? 'designbase-dropdown__trigger--open' : ''}
                    >
                        {label}
                    </Button>
                </div>
            )}

            <div
                ref={menuRef}
                className={menuClasses}
                role="menu"
                aria-label={label}
            >
                {items.map((item, index) => {
                    if (item.divider) {
                        return (
                            <div
                                key={`divider-${index}`}
                                className="designbase-dropdown__divider"
                                role="separator"
                            />
                        );
                    }

                    // 커스텀 컨텐츠가 있는 경우
                    if (item.custom) {
                        return (
                            <div key={item.id} className="designbase-dropdown__custom">
                                {item.custom}
                            </div>
                        );
                    }

                    const isDisabled = item.disabled || disabled;
                    const isFocused = focusedIndex === index;

                    const itemClasses = clsx(
                        'designbase-dropdown__item',
                        {
                            'designbase-dropdown__item--focused': isFocused,
                            'designbase-dropdown__item--disabled': isDisabled,
                        }
                    );

                    return (
                        <button
                            key={item.id}
                            ref={(el) => {
                                if (el) {
                                    itemRefs.current.set(item.id, el);
                                } else {
                                    itemRefs.current.delete(item.id);
                                }
                            }}
                            className={itemClasses}
                            role="menuitem"
                            disabled={isDisabled}
                            onClick={() => handleItemClick(item)}
                            onFocus={() => setFocusedIndex(index)}
                        >
                            {item.icon && (
                                <span className="designbase-dropdown__item-icon">
                                    <item.icon size={iconSize} />
                                </span>
                            )}
                            {item.label && (
                                <span className="designbase-dropdown__item-label">{item.label}</span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
