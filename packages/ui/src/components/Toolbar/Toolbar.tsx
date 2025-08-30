/**
 * Toolbar 컴포넌트
 * 
 * 특정 상황에 필요한 도구들을 모아놓은 기능적인 툴바 컴포넌트입니다.
 * 버튼, 드롭다운, 구분선 등을 포함할 수 있습니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Toolbar.scss';

export type ToolbarSize = 'sm' | 'md' | 'lg';
export type ToolbarVariant = 'default' | 'outlined' | 'filled' | 'ghost';
export type ToolbarPosition = 'top' | 'bottom' | 'left' | 'right' | 'floating';

export interface ToolbarItem {
    /** 아이템 ID */
    id: string;
    /** 아이템 타입 */
    type: 'button' | 'dropdown' | 'separator' | 'custom';
    /** 아이템 라벨 */
    label?: string;
    /** 아이템 아이콘 */
    icon?: React.ReactNode;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 활성화 여부 */
    active?: boolean;
    /** 드롭다운 옵션들 (type이 dropdown일 때) */
    options?: Array<{
        label: string;
        value: string;
        icon?: React.ReactNode;
        disabled?: boolean;
    }>;
    /** 드롭다운 값 변경 핸들러 */
    onOptionChange?: (value: string) => void;
    /** 현재 선택된 드롭다운 값 */
    selectedValue?: string;
    /** 커스텀 컴포넌트 (type이 custom일 때) */
    customComponent?: React.ReactNode;
    /** 툴팁 */
    tooltip?: string;
    /** 그룹 */
    group?: string;
}

export interface ToolbarProps {
    /** 툴바 아이템들 */
    items: ToolbarItem[];
    /** 툴바 크기 */
    size?: ToolbarSize;
    /** 툴바 변형 */
    variant?: ToolbarVariant;
    /** 툴바 위치 */
    position?: ToolbarPosition;
    /** 전체 너비 사용 */
    fullWidth?: boolean;
    /** 고정 위치 */
    fixed?: boolean;
    /** 그림자 표시 */
    shadow?: boolean;
    /** 둥근 모서리 */
    rounded?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 자식 요소 */
    children?: React.ReactNode;
}

export const Toolbar: React.FC<ToolbarProps> = ({
    items,
    size = 'md',
    variant = 'default',
    position = 'top',
    fullWidth = false,
    fixed = false,
    shadow = true,
    rounded = true,
    className,
    children,
}) => {
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

    const handleItemClick = (item: ToolbarItem) => {
        if (item.disabled) return;

        if (item.type === 'dropdown') {
            setOpenDropdown(openDropdown === item.id ? null : item.id);
        } else if (item.onClick) {
            item.onClick();
        }
    };

    const handleOptionClick = (item: ToolbarItem, optionValue: string) => {
        if (item.onOptionChange) {
            item.onOptionChange(optionValue);
        }
        setOpenDropdown(null);
    };

    const renderItem = (item: ToolbarItem) => {
        switch (item.type) {
            case 'button':
                return (
                    <button
                        key={item.id}
                        className={clsx(
                            'designbase-toolbar__item',
                            'designbase-toolbar__item--button',
                            {
                                'designbase-toolbar__item--active': item.active,
                                'designbase-toolbar__item--disabled': item.disabled,
                            }
                        )}
                        onClick={() => handleItemClick(item)}
                        disabled={item.disabled}
                        title={item.tooltip}
                    >
                        {item.icon && (
                            <span className="designbase-toolbar__item-icon">
                                {item.icon}
                            </span>
                        )}
                        {item.label && (
                            <span className="designbase-toolbar__item-label">
                                {item.label}
                            </span>
                        )}
                    </button>
                );

            case 'dropdown':
                return (
                    <div
                        key={item.id}
                        className={clsx(
                            'designbase-toolbar__item',
                            'designbase-toolbar__item--dropdown',
                            {
                                'designbase-toolbar__item--open': openDropdown === item.id,
                                'designbase-toolbar__item--disabled': item.disabled,
                            }
                        )}
                    >
                        <button
                            className="designbase-toolbar__dropdown-trigger"
                            onClick={() => handleItemClick(item)}
                            disabled={item.disabled}
                            title={item.tooltip}
                        >
                            {item.icon && (
                                <span className="designbase-toolbar__item-icon">
                                    {item.icon}
                                </span>
                            )}
                            {item.label && (
                                <span className="designbase-toolbar__item-label">
                                    {item.label}
                                </span>
                            )}
                            <span className="designbase-toolbar__dropdown-arrow">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        {openDropdown === item.id && item.options && (
                            <div className="designbase-toolbar__dropdown-menu">
                                {item.options.map((option) => (
                                    <button
                                        key={option.value}
                                        className={clsx(
                                            'designbase-toolbar__dropdown-option',
                                            {
                                                'designbase-toolbar__dropdown-option--selected': item.selectedValue === option.value,
                                                'designbase-toolbar__dropdown-option--disabled': option.disabled,
                                            }
                                        )}
                                        onClick={() => handleOptionClick(item, option.value)}
                                        disabled={option.disabled}
                                    >
                                        {option.icon && (
                                            <span className="designbase-toolbar__dropdown-option-icon">
                                                {option.icon}
                                            </span>
                                        )}
                                        <span className="designbase-toolbar__dropdown-option-label">
                                            {option.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                );

            case 'separator':
                return (
                    <div
                        key={item.id}
                        className="designbase-toolbar__item designbase-toolbar__item--separator"
                    />
                );

            case 'custom':
                return (
                    <div key={item.id} className="designbase-toolbar__item designbase-toolbar__item--custom">
                        {item.customComponent}
                    </div>
                );

            default:
                return null;
        }
    };

    // 그룹별로 아이템 정리
    const groupedItems = items.reduce((groups, item) => {
        const group = item.group || 'default';
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(item);
        return groups;
    }, {} as Record<string, ToolbarItem[]>);

    const classes = clsx(
        'designbase-toolbar',
        `designbase-toolbar--size-${size}`,
        `designbase-toolbar--variant-${variant}`,
        `designbase-toolbar--position-${position}`,
        {
            'designbase-toolbar--full-width': fullWidth,
            'designbase-toolbar--fixed': fixed,
            'designbase-toolbar--shadow': shadow,
            'designbase-toolbar--rounded': rounded,
        },
        className
    );

    return (
        <div className={classes}>
            <div className="designbase-toolbar__content">
                {Object.entries(groupedItems).map(([groupName, groupItems], groupIndex) => (
                    <div key={groupName} className="designbase-toolbar__group">
                        {groupItems.map(renderItem)}
                        {groupIndex < Object.keys(groupedItems).length - 1 && (
                            <div className="designbase-toolbar__group-separator" />
                        )}
                    </div>
                ))}
                {children && (
                    <div className="designbase-toolbar__children">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Toolbar;
