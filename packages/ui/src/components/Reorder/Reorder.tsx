import React, { useState, useRef, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { MoveIcon, MoreVerticalIcon } from '@designbasekorea/icons';
import './Reorder.scss';

export type ReorderVariant = 'default' | 'bordered' | 'filled' | 'minimal';
export type ReorderSize = 's' | 'm' | 'l';
export type ReorderOrientation = 'vertical' | 'horizontal';

export interface ReorderItem {
    /** 아이템 고유 ID */
    id: string;
    /** 아이템 내용 */
    content: React.ReactNode;
    /** 아이템 비활성화 여부 */
    disabled?: boolean;
    /** 아이템 선택 여부 */
    selected?: boolean;
    /** 아이템 메타 데이터 */
    meta?: Record<string, any>;
}

export interface ReorderProps {
    /** 재정렬할 아이템들 */
    items: ReorderItem[];
    /** 재정렬 변형 */
    variant?: ReorderVariant;
    /** 재정렬 크기 */
    size?: ReorderSize;
    /** 재정렬 방향 */
    orientation?: ReorderOrientation;
    /** 드래그 핸들 표시 여부 */
    showDragHandle?: boolean;
    /** 드래그 아이콘 표시 여부 */
    showDragIcon?: boolean;
    /** 선택 가능 여부 */
    selectable?: boolean;
    /** 다중 선택 가능 여부 */
    multiSelect?: boolean;
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React.CSSProperties;
    /** 순서 변경 콜백 */
    onReorder?: (items: ReorderItem[]) => void;
    /** 아이템 선택 콜백 */
    onSelect?: (selectedItems: ReorderItem[]) => void;
    /** 아이템 클릭 콜백 */
    onItemClick?: (item: ReorderItem, index: number) => void;
    /** 드래그 시작 콜백 */
    onDragStart?: (item: ReorderItem, index: number) => void;
    /** 드래그 종료 콜백 */
    onDragEnd?: (item: ReorderItem, fromIndex: number, toIndex: number) => void;
}

const Reorder: React.FC<ReorderProps> = ({
    items,
    variant = 'default',
    size = 'm',
    orientation = 'vertical',
    showDragHandle = true,
    showDragIcon = true,
    selectable = false,
    multiSelect = false,
    fullWidth = false,
    disabled = false,
    className,
    style,
    onReorder,
    onSelect,
    onItemClick,
    onDragStart,
    onDragEnd,
}) => {
    const [reorderedItems, setReorderedItems] = useState<ReorderItem[]>(items);
    const [draggedItem, setDraggedItem] = useState<ReorderItem | null>(null);
    const [draggedIndex, setDraggedIndex] = useState<number>(-1);
    const [dragOverIndex, setDragOverIndex] = useState<number>(-1);
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
    const [isDragging, setIsDragging] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

    // 아이템 업데이트 시 상태 동기화
    useEffect(() => {
        setReorderedItems(items);
    }, [items]);

    // 선택된 아이템들 업데이트
    useEffect(() => {
        const selected = items.filter(item => item.selected);
        setSelectedItems(new Set(selected.map(item => item.id)));
    }, [items]);

    // 드래그 시작 핸들러
    const handleDragStart = useCallback((e: React.DragEvent, item: ReorderItem, index: number) => {
        if (disabled || item.disabled) {
            e.preventDefault();
            return;
        }

        setDraggedItem(item);
        setDraggedIndex(index);
        setIsDragging(true);
        setDragOverIndex(-1);

        // 드래그 이미지 설정 - 커스텀 드래그 이미지 사용하지 않음
        // 브라우저 기본 드래그 이미지를 사용하여 자연스러운 드래그 경험 제공

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', item.id);

        // 드래그 시작 애니메이션
        const dragElement = itemRefs.current.get(item.id);
        if (dragElement) {
            dragElement.style.animation = 'dragStart 0.2s ease-out forwards';
        }

        onDragStart?.(item, index);
    }, [disabled, onDragStart]);

    // 드래그 오버 핸들러 - 드래그 방향에 따른 정확한 디바이더 위치 계산
    const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';

        if (draggedIndex === -1 || draggedIndex === index) {
            setDragOverIndex(-1);
            return;
        }

        // 드래그 방향에 따라 디바이더 위치 결정
        let dropIndex = index;

        if (draggedIndex < index) {
            // 아래로 드래그: 현재 아이템 위에 디바이더 표시
            dropIndex = index;
        } else if (draggedIndex > index) {
            // 위로 드래그: 현재 아이템 위에 디바이더 표시 (index 그대로 사용)
            dropIndex = index;
        }

        setDragOverIndex(dropIndex);
    }, [draggedIndex]);

    // 드래그 리브 핸들러
    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 요소를 벗어났는지 확인
        if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
            setDragOverIndex(-1);
        }
    }, []);

    // 드롭 핸들러 - 드래그 방향에 따른 정확한 드롭 위치 사용
    const handleDrop = useCallback((e: React.DragEvent, dropIndex: number) => {
        e.preventDefault();

        if (draggedIndex === -1 || draggedIndex === dropIndex) {
            setDragOverIndex(-1);
            return;
        }

        // 드래그 방향에 따라 실제 드롭 위치 계산
        let actualDropIndex = dropIndex;

        if (draggedIndex < dropIndex) {
            // 아래로 드래그: 현재 위치에 삽입
            actualDropIndex = dropIndex;
        } else if (draggedIndex > dropIndex) {
            // 위로 드래그: 현재 위치에 삽입 (dropIndex 그대로 사용)
            actualDropIndex = dropIndex;
        }

        const newItems = [...reorderedItems];
        const [draggedItemData] = newItems.splice(draggedIndex, 1);
        newItems.splice(actualDropIndex, 0, draggedItemData);

        setReorderedItems(newItems);
        setDragOverIndex(-1);
        setIsDragging(false);

        // 드롭 완료 애니메이션
        const dropElement = itemRefs.current.get(draggedItemData.id);
        if (dropElement) {
            dropElement.style.animation = 'dropComplete 0.3s ease-out forwards';
            setTimeout(() => {
                dropElement.style.animation = '';
            }, 300);
        }

        onReorder?.(newItems);
        onDragEnd?.(draggedItemData, draggedIndex, actualDropIndex);
    }, [reorderedItems, draggedIndex, onReorder, onDragEnd]);

    // 드래그 종료 핸들러
    const handleDragEnd = useCallback((e: React.DragEvent) => {
        e.preventDefault();

        // 모든 아이템의 스타일 초기화
        itemRefs.current.forEach((element) => {
            if (element) {
                element.style.animation = '';
                element.style.transform = '';
                element.style.opacity = '';
                element.style.zIndex = '';
                element.style.boxShadow = '';
                element.style.border = '';
                element.style.background = '';
            }
        });

        setDraggedItem(null);
        setDraggedIndex(-1);
        setDragOverIndex(-1);
        setIsDragging(false);
    }, []);

    // 아이템 선택 핸들러
    const handleItemSelect = useCallback((item: ReorderItem) => {
        if (!selectable || disabled || item.disabled) return;

        const newSelectedItems = new Set(selectedItems);

        if (multiSelect) {
            if (newSelectedItems.has(item.id)) {
                newSelectedItems.delete(item.id);
            } else {
                newSelectedItems.add(item.id);
            }
        } else {
            newSelectedItems.clear();
            newSelectedItems.add(item.id);
        }

        setSelectedItems(newSelectedItems);

        const selectedItemsList = reorderedItems.filter(item => newSelectedItems.has(item.id));
        onSelect?.(selectedItemsList);
    }, [selectable, disabled, multiSelect, selectedItems, reorderedItems, onSelect]);

    // 아이템 클릭 핸들러
    const handleItemClick = useCallback((item: ReorderItem, index: number) => {
        if (disabled || item.disabled) return;

        if (selectable) {
            handleItemSelect(item);
        }

        onItemClick?.(item, index);
    }, [disabled, selectable, handleItemSelect, onItemClick]);

    // 키보드 네비게이션 핸들러
    const handleKeyDown = useCallback((e: React.KeyboardEvent, item: ReorderItem, index: number) => {
        if (disabled || item.disabled) return;

        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                handleItemClick(item, index);
                break;
            case 'ArrowUp':
                if (orientation === 'vertical' && index > 0) {
                    e.preventDefault();
                    const prevItem = itemRefs.current.get(reorderedItems[index - 1].id);
                    prevItem?.focus();
                }
                break;
            case 'ArrowDown':
                if (orientation === 'vertical' && index < reorderedItems.length - 1) {
                    e.preventDefault();
                    const nextItem = itemRefs.current.get(reorderedItems[index + 1].id);
                    nextItem?.focus();
                }
                break;
            case 'ArrowLeft':
                if (orientation === 'horizontal' && index > 0) {
                    e.preventDefault();
                    const prevItem = itemRefs.current.get(reorderedItems[index - 1].id);
                    prevItem?.focus();
                }
                break;
            case 'ArrowRight':
                if (orientation === 'horizontal' && index < reorderedItems.length - 1) {
                    e.preventDefault();
                    const nextItem = itemRefs.current.get(reorderedItems[index + 1].id);
                    nextItem?.focus();
                }
                break;
        }
    }, [disabled, orientation, reorderedItems, handleItemClick]);

    const classes = clsx(
        'designbase-reorder',
        `designbase-reorder--${variant}`,
        `designbase-reorder--${size}`,
        `designbase-reorder--${orientation}`,
        {
            'designbase-reorder--full-width': fullWidth,
            'designbase-reorder--disabled': disabled,
            'designbase-reorder--dragging': isDragging,
            'designbase-reorder--selectable': selectable,
        },
        className
    );

    return (
        <div
            ref={containerRef}
            className={classes}
            style={style}
            role="list"
            aria-label="재정렬 가능한 목록"
        >
            {reorderedItems.map((item, index) => {
                const isSelected = selectedItems.has(item.id);
                const isDragged = draggedItem?.id === item.id;
                const isDragOver = dragOverIndex === index;
                const isDisabled = disabled || item.disabled;

                // 디바이더 표시 조건: 드래그 중이고, 드래그 중인 아이템이 아니고, 드롭 위치에 해당하는 아이템
                const showDivider = isDragging && !isDragged && isDragOver;

                // 드래그 방향에 따른 디바이더 클래스 (드롭 위치에만 적용)
                const isDraggingDown = isDragOver && draggedIndex !== -1 && draggedIndex < index;
                const isDraggingUp = isDragOver && draggedIndex !== -1 && draggedIndex > index;
                const isDraggingRight = isDragOver && draggedIndex !== -1 && draggedIndex < index;
                const isDraggingLeft = isDragOver && draggedIndex !== -1 && draggedIndex > index;

                const itemClasses = clsx(
                    'designbase-reorder__item',
                    {
                        'designbase-reorder__item--selected': isSelected,
                        'designbase-reorder__item--dragged': isDragged,
                        'designbase-reorder__item--drag-over': isDragOver,
                        'designbase-reorder__item--disabled': isDisabled,
                        // 드래그 방향에 따른 클래스
                        'designbase-reorder__item--drag-down': isDraggingDown,
                        'designbase-reorder__item--drag-up': isDraggingUp,
                        'designbase-reorder__item--drag-right': isDraggingRight,
                        'designbase-reorder__item--drag-left': isDraggingLeft,
                    }
                );

                return (
                    <div
                        key={item.id}
                        ref={(el) => {
                            if (el) {
                                itemRefs.current.set(item.id, el);
                            } else {
                                itemRefs.current.delete(item.id);
                            }
                        }}
                        className={itemClasses}
                        draggable={!isDisabled}
                        tabIndex={isDisabled ? -1 : 0}
                        role="listitem"
                        aria-selected={selectable ? isSelected : undefined}
                        aria-disabled={isDisabled}
                        onDragStart={(e) => handleDragStart(e, item, index)}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragEnd={handleDragEnd}
                        onClick={() => handleItemClick(item, index)}
                        onKeyDown={(e) => handleKeyDown(e, item, index)}
                    >
                        {/* 드래그 핸들 */}
                        {showDragHandle && !isDisabled && (
                            <div className="designbase-reorder__drag-handle">
                                {showDragIcon ? <MoveIcon /> : <MoreVerticalIcon />}
                            </div>
                        )}

                        {/* 선택 체크박스 */}
                        {selectable && (
                            <div className="designbase-reorder__checkbox">
                                <input
                                    type={multiSelect ? 'checkbox' : 'radio'}
                                    checked={isSelected}
                                    disabled={isDisabled}
                                    onChange={() => handleItemSelect(item)}
                                    onClick={(e) => e.stopPropagation()}
                                    className="designbase-reorder__checkbox-input"
                                />
                            </div>
                        )}

                        {/* 아이템 내용 */}
                        <div className="designbase-reorder__content">
                            {item.content}
                        </div>


                    </div>
                );
            })}
        </div>
    );
};

export { Reorder };
export default Reorder;
