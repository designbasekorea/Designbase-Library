import React, { useState, useEffect } from 'react';
import { Modal, Button, Toggle } from '@designbasekorea/ui';
import { GripVerticalIcon } from '@designbasekorea/icons';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import clsx from 'clsx';
import './SettingsModal.scss';

export interface SettingsCategory {
    id: string;
    title: I18nText;
    enabled: boolean;
    order: number;
    icon?: React.ReactNode;
}

export interface SettingsCategoryGroup {
    id: string;
    title: I18nText;
    categories: string[]; // category IDs
}

export interface SettingsModalProps {
    /** 모달 표시 여부 */
    isOpen: boolean;
    /** 닫기 핸들러 */
    onClose: () => void;
    /** 카테고리 목록 */
    categories: SettingsCategory[];
    /** 카테고리 그룹 (선택사항) */
    categoryGroups?: SettingsCategoryGroup[];
    /** 저장 핸들러 */
    onSave: (categories: SettingsCategory[]) => void;
    /** 초기화 핸들러 */
    onReset?: () => void;
    /** 모달 제목 - 문자열 또는 { key, values } */
    title?: I18nText;
    /** 설명 텍스트 - 문자열 또는 { key, values } */
    description?: I18nText;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 소비자가 주입할 번역함수 (선택) */
    t?: TFunctionLite;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
    isOpen,
    onClose,
    categories: initialCategories,
    categoryGroups,
    onSave,
    onReset,
    title = { key: 'settings.modal_title' },
    description = { key: 'settings.modal_description' },
    className,
    t
}) => {
    const [tempCategories, setTempCategories] = useState<SettingsCategory[]>(initialCategories);
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

    useEffect(() => {
        setTempCategories(initialCategories);
    }, [initialCategories]);

    const handleDragStart = (e: React.DragEvent, index: number) => {
        setDraggedIndex(index);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', index.toString());
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e: React.DragEvent, dropIndex: number) => {
        e.preventDefault();
        const dragIndex = Number(e.dataTransfer.getData('text/plain'));

        if (dragIndex === dropIndex) {
            setDraggedIndex(null);
            return;
        }

        const newCategories = [...tempCategories];
        const [draggedItem] = newCategories.splice(dragIndex, 1);

        // 활성화/비활성화된 항목 분리
        const enabledCategories = newCategories.filter(cat => cat.enabled);
        const disabledCategories = newCategories.filter(cat => !cat.enabled);

        if (draggedItem.enabled) {
            // 활성화된 항목을 드래그할 때
            if (dropIndex <= enabledCategories.length) {
                // 활성화된 영역 내에서 드롭
                const adjustedDropIndex = dragIndex < dropIndex ? dropIndex - 1 : dropIndex;
                enabledCategories.splice(adjustedDropIndex, 0, draggedItem);
            } else {
                // 비활성화된 영역에 드롭하면 마지막 활성화 항목 뒤에 배치
                enabledCategories.push(draggedItem);
            }
        } else {
            // 비활성화된 항목을 드래그할 때
            if (dropIndex > enabledCategories.length) {
                // 비활성화된 영역 내에서 드롭
                const disabledDropIndex = dropIndex - enabledCategories.length;
                const adjustedDropIndex = dragIndex < dropIndex ? disabledDropIndex - 1 : disabledDropIndex;
                disabledCategories.splice(adjustedDropIndex, 0, draggedItem);
            } else {
                // 활성화된 영역에 드롭하면 첫 번째 비활성화 항목 앞에 배치
                disabledCategories.unshift(draggedItem);
            }
        }

        // 활성화된 항목과 비활성화된 항목을 합치고 순서 업데이트
        const reorderedCategories = [
            ...enabledCategories.map((cat, idx) => ({ ...cat, order: idx })),
            ...disabledCategories.map((cat, idx) => ({ ...cat, order: enabledCategories.length + idx }))
        ];

        setTempCategories(reorderedCategories);
        setDraggedIndex(null);
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
    };

    const handleToggle = (id: string) => {
        setTempCategories(prev => {
            const enabledCategories = prev.filter(cat => cat.id !== id && cat.enabled);
            const disabledCategories = prev.filter(cat => cat.id !== id && !cat.enabled);
            const targetCategory = prev.find(cat => cat.id === id);

            if (!targetCategory) return prev;

            const newTargetCategory = { ...targetCategory, enabled: !targetCategory.enabled };

            // 토글 상태에 따라 카테고리 재정렬
            if (newTargetCategory.enabled) {
                // 활성화되면 활성화된 목록의 마지막으로
                return [
                    ...enabledCategories,
                    newTargetCategory,
                    ...disabledCategories
                ].map((cat, idx) => ({ ...cat, order: idx }));
            } else {
                // 비활성화되면 비활성화된 목록의 마지막으로
                return [
                    ...enabledCategories,
                    ...disabledCategories,
                    newTargetCategory
                ].map((cat, idx) => ({ ...cat, order: idx }));
            }
        });
    };

    const handleSave = () => {
        onSave(tempCategories);
        onClose();
    };

    const handleCancel = () => {
        setTempCategories(initialCategories);
        onClose();
    };

    const handleReset = () => {
        if (onReset) {
            onReset();
        }
    };

    const modalClasses = clsx('designbase-figma-settings-modal', className);
    const displayTitle = resolveText(t, title, '목록 변경');
    const displayDescription = resolveText(t, description, '드래그하여 순서를 변경하거나, 토글하여 카테고리를 숨길 수 있습니다.');

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={displayTitle}
            size="m"
            className={modalClasses}
        >
            <div className="designbase-figma-settings-modal__content">
                {/* 설명 */}
                {displayDescription && (
                    <p className="designbase-figma-settings-modal__description">
                        {displayDescription}
                    </p>
                )}

                {/* 카테고리 목록 */}
                <ul className="designbase-figma-settings-modal__list">
                    {tempCategories.map((category, index) => (
                        <li
                            key={category.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, index)}
                            onDragEnd={handleDragEnd}
                            className={clsx(
                                'designbase-figma-settings-modal__item',
                                {
                                    'designbase-figma-settings-modal__item--disabled': !category.enabled,
                                    'designbase-figma-settings-modal__item--dragging': draggedIndex === index,
                                }
                            )}
                        >
                            <div className="designbase-figma-settings-modal__item-info">
                                <span className="designbase-figma-settings-modal__drag-handle">
                                    <GripVerticalIcon size={16} />
                                </span>
                                {category.icon && (
                                    <span className="designbase-figma-settings-modal__category-icon">
                                        {category.icon}
                                    </span>
                                )}
                                <span className="designbase-figma-settings-modal__category-title">
                                    {resolveText(t, category.title)}
                                </span>
                            </div>
                            <Toggle
                                checked={category.enabled}
                                onChange={() => handleToggle(category.id)}
                                size="s"
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <div className="designbase-figma-settings-modal__footer">
                {onReset && (
                    <Button
                        onPress={handleReset}
                        variant="tertiary"
                        size="s"
                    >
                        {resolveText(t, { key: 'settings.reset' }, '초기화')}
                    </Button>
                )}
                <div className="designbase-figma-settings-modal__footer-right">
                    <Button
                        onPress={handleCancel}
                        variant="tertiary"
                        size="s"
                    >
                        {resolveText(t, { key: 'settings.cancel' }, '취소')}
                    </Button>
                    <Button
                        onPress={handleSave}
                        variant="primary"
                        size="s"
                    >
                        {resolveText(t, { key: 'settings.save' }, '저장')}
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

SettingsModal.displayName = 'SettingsModal';

export default SettingsModal;

