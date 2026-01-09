import React from 'react';
import clsx from 'clsx';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import './List.scss';

export type ListSize = 's' | 'm' | 'l';
export type ListVariant = 'default' | 'bordered' | 'card' | 'minimal';
export type ListItemType = 'default' | 'interactive' | 'selectable' | 'draggable';
export type ListLayout = 'vertical' | 'horizontal';

export interface ListItem {
    /** 아이템 고유 ID */
    id: string;
    /** 아이템 제목 */
    title: string;
    /** 아이템 설명 */
    description?: string;
    /** 아이템 아이콘 */
    icon?: React.ReactNode;
    /** 아이템 이미지 */
    image?: string;
    /** 아이템 배지 */
    badge?: {
        text: string;
        variant?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
        style?: 'text' | 'outlined';
    };
    /** 아이템 메타 정보 */
    meta?: {
        label: string;
        value: string;
    }[];
    /** 아이템 액션 버튼들 */
    actions?: React.ReactNode[];
    /** 아이템 비활성화 여부 */
    disabled?: boolean;
    /** 아이템 선택 여부 */
    selected?: boolean;
    /** 추가 데이터 */
    data?: any;
}

export interface ListProps {
    /** 리스트 아이템들 */
    items: ListItem[];
    /** 리스트 크기 */
    size?: ListSize;
    /** 리스트 스타일 변형 */
    variant?: ListVariant;
    /** 아이템 타입 */
    itemType?: ListItemType;
    /** 레이아웃 방향 */
    layout?: ListLayout;
    /** 선택 가능 여부 */
    selectable?: boolean;
    /** 다중 선택 가능 여부 */
    multiple?: boolean;
    /** 선택된 아이템들 */
    selectedItems?: string[];
    /** 드래그 가능 여부 */
    draggable?: boolean;
    /** 아이템 간격 */
    spacing?: 'none' | 's' | 'm' | 'l';
    /** 아이템 정렬 */
    alignment?: 'start' | 'center' | 'end' | 'stretch';
    /** 아이템 클릭 핸들러 */
    onItemClick?: (item: ListItem, index: number) => void;
    /** 아이템 선택 핸들러 */
    onItemSelect?: (selectedIds: string[]) => void;
    /** 아이템 드래그 핸들러 */
    onItemDrag?: (draggedId: string, targetId: string) => void;
    /** 빈 상태 표시 */
    emptyState?: React.ReactNode;
    /** 로딩 상태 */
    loading?: boolean;
    /** 로딩 스켈레톤 개수 */
    loadingCount?: number;
    /** 추가 CSS 클래스 */
    className?: string;
}

const List: React.FC<ListProps> = ({
    items,
    size = 'm',
    variant = 'default',
    itemType = 'default',
    layout = 'vertical',
    selectable = false,
    multiple = false,
    selectedItems = [],
    draggable = false,
    spacing = 'm',
    alignment = 'start',
    onItemClick,
    onItemSelect,
    onItemDrag,
    emptyState,
    loading = false,
    loadingCount = 3,
    className,
}) => {
    const [internalSelectedItems, setInternalSelectedItems] = React.useState<string[]>(selectedItems);
    const [draggedItem, setDraggedItem] = React.useState<string | null>(null);

    // 아이콘 크기 계산 (m이 기본값)
    const iconSize = size === 's' ? 16 : size === 'l' ? 24 : 20;

    // 외부에서 선택된 아이템이 변경되면 내부 상태 업데이트
    React.useEffect(() => {
        setInternalSelectedItems(selectedItems);
    }, [selectedItems]);

    const handleItemClick = (item: ListItem, index: number) => {
        if (item.disabled) return;

        if (selectable) {
            let newSelectedItems: string[];

            if (multiple) {
                if (internalSelectedItems.includes(item.id)) {
                    newSelectedItems = internalSelectedItems.filter(id => id !== item.id);
                } else {
                    newSelectedItems = [...internalSelectedItems, item.id];
                }
            } else {
                newSelectedItems = internalSelectedItems.includes(item.id) ? [] : [item.id];
            }

            setInternalSelectedItems(newSelectedItems);
            onItemSelect?.(newSelectedItems);
        }

        onItemClick?.(item, index);
    };

    const handleItemDragStart = (e: React.DragEvent, itemId: string) => {
        if (!draggable) return;
        setDraggedItem(itemId);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleItemDragOver = (e: React.DragEvent) => {
        if (!draggable) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleItemDrop = (e: React.DragEvent, targetId: string) => {
        if (!draggable || !draggedItem || draggedItem === targetId) return;
        e.preventDefault();
        onItemDrag?.(draggedItem, targetId);
        setDraggedItem(null);
    };

    const handleItemDragEnd = () => {
        setDraggedItem(null);
    };

    const isItemSelected = (itemId: string) => {
        return internalSelectedItems.includes(itemId);
    };

    const renderBadge = (badge: ListItem['badge']) => {
        if (!badge) return null;

        return (
            <Badge
                variant={badge.variant || 'primary'}
                style={badge.style || 'text'}
                size="s"
            >
                {badge.text}
            </Badge>
        );
    };

    const renderMeta = (meta: ListItem['meta']) => {
        if (!meta || meta.length === 0) return null;

        return (
            <div className="designbase-list__item-meta">
                {meta.map((item, index) => (
                    <div key={index} className="designbase-list__item-meta-item">
                        <span className="designbase-list__item-meta-label">{item.label}:</span>
                        <span className="designbase-list__item-meta-value">{item.value}</span>
                    </div>
                ))}
            </div>
        );
    };

    const renderActions = (actions: ListItem['actions']) => {
        if (!actions || actions.length === 0) return null;

        return (
            <div className="designbase-list__item-actions">
                {actions.map((action, index) => (
                    <div key={index} className="designbase-list__item-action">
                        {action}
                    </div>
                ))}
            </div>
        );
    };

    const renderItem = (item: ListItem, index: number) => {
        const isSelected = isItemSelected(item.id);
        const isDragging = draggedItem === item.id;

        const itemClasses = clsx(
            'designbase-list__item',
            `designbase-list__item--size-${size}`,
            `designbase-list__item--variant-${variant}`,
            `designbase-list__item--type-${itemType}`,
            `designbase-list__item--layout-${layout}`,
            `designbase-list__item--spacing-${spacing}`,
            `designbase-list__item--alignment-${alignment}`,
            {
                'designbase-list__item--selected': isSelected,
                'designbase-list__item--disabled': item.disabled,
                'designbase-list__item--dragging': isDragging,
                'designbase-list__item--clickable': onItemClick || selectable,
                'designbase-list__item--draggable': draggable,
            }
        );

        return (
            <div
                key={item.id}
                className={itemClasses}
                onClick={() => handleItemClick(item, index)}
                draggable={draggable}
                onDragStart={(e) => handleItemDragStart(e, item.id)}
                onDragOver={handleItemDragOver}
                onDrop={(e) => handleItemDrop(e, item.id)}
                onDragEnd={handleItemDragEnd}
                role={selectable ? 'button' : undefined}
                tabIndex={selectable ? 0 : undefined}
                aria-selected={selectable ? isSelected : undefined}
            >
                {selectable && (
                    <div className="designbase-list__item-checkbox">
                        <input
                            type={multiple ? 'checkbox' : 'radio'}
                            checked={isSelected}
                            onChange={() => handleItemClick(item, index)}
                            disabled={item.disabled}
                        />
                    </div>
                )}

                {item.icon && (
                    <div className="designbase-list__item-icon">
                        {React.isValidElement(item.icon) ? (
                            React.cloneElement(item.icon as React.ReactElement<any>, {
                                size: iconSize,
                                color: 'currentColor'
                            })
                        ) : item.icon}
                    </div>
                )}

                {item.image && (
                    <div className="designbase-list__item-image">
                        <img src={item.image} alt={item.title} />
                    </div>
                )}

                <div className="designbase-list__item-content">
                    <div className="designbase-list__item-header">
                        <h4 className="designbase-list__item-title">
                            {item.title}
                        </h4>
                        {item.badge && renderBadge(item.badge)}
                    </div>

                    {item.description && (
                        <p className="designbase-list__item-description">
                            {item.description}
                        </p>
                    )}

                    {item.meta && renderMeta(item.meta)}
                </div>

                {item.actions && renderActions(item.actions)}

                {draggable && (
                    <div className="designbase-list__item-drag-handle">
                        ⋮⋮
                    </div>
                )}
            </div>
        );
    };

    const renderLoadingSkeleton = () => {
        return Array.from({ length: loadingCount }, (_, index) => (
            <div key={index} className="designbase-list__item designbase-list__item--loading">
                <div className="designbase-list__item-skeleton">
                    <div className="designbase-list__item-skeleton-icon"></div>
                    <div className="designbase-list__item-skeleton-content">
                        <div className="designbase-list__item-skeleton-title"></div>
                        <div className="designbase-list__item-skeleton-description"></div>
                    </div>
                </div>
            </div>
        ));
    };

    const classes = clsx(
        'designbase-list',
        `designbase-list--size-${size}`,
        `designbase-list--variant-${variant}`,
        `designbase-list--layout-${layout}`,
        `designbase-list--spacing-${spacing}`,
        {
            'designbase-list--selectable': selectable,
            'designbase-list--multiple': multiple,
            'designbase-list--draggable': draggable,
            'designbase-list--loading': loading,
        },
        className
    );

    if (loading) {
        return (
            <div className={classes}>
                {renderLoadingSkeleton()}
            </div>
        );
    }

    if (items.length === 0 && emptyState) {
        return (
            <div className={classes}>
                <div className="designbase-list__empty">
                    {emptyState}
                </div>
            </div>
        );
    }

    return (
        <div className={classes}>
            {items.map((item, index) => renderItem(item, index))}
        </div>
    );
};

export default List;
