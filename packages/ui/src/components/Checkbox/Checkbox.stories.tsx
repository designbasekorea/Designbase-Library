import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        hasLabel: {
            control: { type: 'boolean' },
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        isSelected: {
            control: { type: 'boolean' },
        },
        isIndeterminate: {
            control: { type: 'boolean' },
        },
        isDisabled: {
            control: { type: 'boolean' },
        },
        isReadOnly: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '체크박스 라벨',
    },
};

// 모든 사이즈 (s, m, l)
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Small (s)</h4>
                <Checkbox size="s">Small 체크박스</Checkbox>
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Medium (m) - 기본값</h4>
                <Checkbox size="m">Medium 체크박스</Checkbox>
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Large (l)</h4>
                <Checkbox size="l">Large 체크박스</Checkbox>
            </div>
        </div>
    ),
};

// 모든 상태 (기본, 선택, 중간, 비활성화, 읽기전용)
export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>기본 상태</h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <Checkbox size="s">Small</Checkbox>
                    <Checkbox size="m">Medium</Checkbox>
                    <Checkbox size="l">Large</Checkbox>
                </div>
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>선택된 상태</h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <Checkbox size="s" isSelected>Small</Checkbox>
                    <Checkbox size="m" isSelected>Medium</Checkbox>
                    <Checkbox size="l" isSelected>Large</Checkbox>
                </div>
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>중간 상태</h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <Checkbox size="s" isIndeterminate>Small</Checkbox>
                    <Checkbox size="m" isIndeterminate>Medium</Checkbox>
                    <Checkbox size="l" isIndeterminate>Large</Checkbox>
                </div>
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>비활성화 상태</h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <Checkbox size="s" isDisabled>Small</Checkbox>
                    <Checkbox size="m" isDisabled>Medium</Checkbox>
                    <Checkbox size="l" isDisabled>Large</Checkbox>
                </div>
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>선택된 비활성화 상태</h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <Checkbox size="s" isSelected isDisabled>Small</Checkbox>
                    <Checkbox size="m" isSelected isDisabled>Medium</Checkbox>
                    <Checkbox size="l" isSelected isDisabled>Large</Checkbox>
                </div>
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>읽기 전용 상태</h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <Checkbox size="s" isReadOnly>Small</Checkbox>
                    <Checkbox size="m" isReadOnly>Medium</Checkbox>
                    <Checkbox size="l" isReadOnly>Large</Checkbox>
                </div>
            </div>
        </div>
    ),
};

// 인터랙티브 예제
export const Interactive: Story = {
    render: () => {
        const [selected, setSelected] = useState(false);
        const [indeterminate, setIndeterminate] = useState(false);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Checkbox
                    isSelected={selected}
                    onChange={setSelected}
                >
                    상호작용 가능한 체크박스
                </Checkbox>
                <Checkbox
                    isIndeterminate={indeterminate}
                    onChange={setIndeterminate}
                >
                    중간 상태 체크박스
                </Checkbox>
                <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p style={{ margin: '0 0 4px 0' }}>선택됨: {selected ? '예' : '아니오'}</p>
                    <p style={{ margin: '0' }}>중간 상태: {indeterminate ? '예' : '아니오'}</p>
                </div>
            </div>
        );
    },
};

// 레이블 유무
export const WithAndWithoutLabel: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox hasLabel={true}>레이블이 있는 체크박스</Checkbox>
            <Checkbox hasLabel={false} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Checkbox hasLabel={false} />
                <span>레이블이 없는 체크박스 (텍스트는 별도)</span>
            </div>
        </div>
    ),
};

// 전체선택 기능
export const SelectAll: Story = {
    render: () => {
        const [items, setItems] = useState([
            { id: 1, name: '항목 1', selected: false },
            { id: 2, name: '항목 2', selected: false },
            { id: 3, name: '항목 3', selected: false },
            { id: 4, name: '항목 4', selected: false },
            { id: 5, name: '항목 5', selected: false },
        ]);

        const selectedCount = items.filter(item => item.selected).length;
        const isAllSelected = selectedCount === items.length;
        const isIndeterminate = selectedCount > 0 && selectedCount < items.length;

        const handleSelectAll = () => {
            if (isAllSelected) {
                // 모든 항목이 선택된 상태 → 모두 해제
                setItems(items.map(item => ({ ...item, selected: false })));
            } else {
                // 일부만 선택되거나 모두 해제된 상태 → 모두 선택
                setItems(items.map(item => ({ ...item, selected: true })));
            }
        };

        const handleItemChange = (id: number, selected: boolean) => {
            setItems(items.map(item =>
                item.id === id ? { ...item, selected } : item
            ));
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>전체선택 기능</h3>

                {/* 전체선택 체크박스 */}
                <div style={{ padding: '8px 0', borderBottom: '1px solid #e5e7eb' }}>
                    <Checkbox
                        isSelected={isAllSelected}
                        isIndeterminate={isIndeterminate}
                        onChange={handleSelectAll}
                    >
                        전체선택 ({selectedCount}/{items.length})
                    </Checkbox>
                </div>

                {/* 개별 항목들 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {items.map(item => (
                        <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Checkbox
                                isSelected={item.selected}
                                onChange={(selected) => handleItemChange(item.id, selected)}
                                size="s"
                            >
                                {item.name}
                            </Checkbox>
                        </div>
                    ))}
                </div>

                {/* 상태 정보 */}
                <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
                    <p style={{ margin: '0 0 4px 0', fontSize: '14px' }}>
                        <strong>전체선택 상태:</strong> {isAllSelected ? '모두 선택됨' : isIndeterminate ? '부분 선택됨' : '모두 해제됨'}
                    </p>
                    <p style={{ margin: '0', fontSize: '14px' }}>
                        <strong>선택된 항목:</strong> {selectedCount}개
                    </p>
                </div>
            </div>
        );
    },
};

// 복잡한 전체선택 시나리오
export const ComplexSelectAll: Story = {
    render: () => {
        const [categories, setCategories] = useState([
            {
                id: 'category1',
                name: '카테고리 1',
                items: [
                    { id: 'item1', name: '항목 1-1', selected: false },
                    { id: 'item2', name: '항목 1-2', selected: false },
                    { id: 'item3', name: '항목 1-3', selected: false },
                ]
            },
            {
                id: 'category2',
                name: '카테고리 2',
                items: [
                    { id: 'item4', name: '항목 2-1', selected: false },
                    { id: 'item5', name: '항목 2-2', selected: false },
                ]
            }
        ]);

        const allItems = categories.flatMap(cat => cat.items);
        const selectedCount = allItems.filter(item => item.selected).length;
        const totalCount = allItems.length;
        const isAllSelected = selectedCount === totalCount;
        const isIndeterminate = selectedCount > 0 && selectedCount < totalCount;

        const handleSelectAll = () => {
            if (isAllSelected) {
                // 모든 항목 해제
                setCategories(categories.map(cat => ({
                    ...cat,
                    items: cat.items.map(item => ({ ...item, selected: false }))
                })));
            } else {
                // 모든 항목 선택
                setCategories(categories.map(cat => ({
                    ...cat,
                    items: cat.items.map(item => ({ ...item, selected: true }))
                })));
            }
        };

        const handleCategorySelectAll = (categoryId: string) => {
            setCategories(categories.map(cat => {
                if (cat.id === categoryId) {
                    const categorySelectedCount = cat.items.filter(item => item.selected).length;
                    const isCategoryAllSelected = categorySelectedCount === cat.items.length;

                    return {
                        ...cat,
                        items: cat.items.map(item => ({
                            ...item,
                            selected: !isCategoryAllSelected
                        }))
                    };
                }
                return cat;
            }));
        };

        const handleItemChange = (categoryId: string, itemId: string, selected: boolean) => {
            setCategories(categories.map(cat => {
                if (cat.id === categoryId) {
                    return {
                        ...cat,
                        items: cat.items.map(item =>
                            item.id === itemId ? { ...item, selected } : item
                        )
                    };
                }
                return cat;
            }));
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>복잡한 전체선택 (카테고리별)</h3>

                {/* 전체선택 체크박스 */}
                <div style={{ padding: '8px 0', borderBottom: '1px solid #e5e7eb' }}>
                    <Checkbox
                        isSelected={isAllSelected}
                        isIndeterminate={isIndeterminate}
                        onChange={handleSelectAll}
                    >
                        전체선택 ({selectedCount}/{totalCount})
                    </Checkbox>
                </div>

                {/* 카테고리별 선택 */}
                {categories.map(category => {
                    const categorySelectedCount = category.items.filter(item => item.selected).length;
                    const isCategoryAllSelected = categorySelectedCount === category.items.length;
                    const isCategoryIndeterminate = categorySelectedCount > 0 && categorySelectedCount < category.items.length;

                    return (
                        <div key={category.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {/* 카테고리 전체선택 */}
                            <div style={{ padding: '4px 0' }}>
                                <Checkbox
                                    isSelected={isCategoryAllSelected}
                                    isIndeterminate={isCategoryIndeterminate}
                                    onChange={() => handleCategorySelectAll(category.id)}
                                >
                                    {category.name} ({categorySelectedCount}/{category.items.length})
                                </Checkbox>
                            </div>

                            {/* 카테고리 내 항목들 */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginLeft: '20px' }}>
                                {category.items.map(item => (
                                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Checkbox
                                            isSelected={item.selected}
                                            onChange={(selected) => handleItemChange(category.id, item.id, selected)}
                                            size="s"
                                        >
                                            {item.name}
                                        </Checkbox>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}

                {/* 상태 정보 */}
                <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
                    <p style={{ margin: '0 0 4px 0', fontSize: '14px' }}>
                        <strong>전체선택 상태:</strong> {isAllSelected ? '모두 선택됨' : isIndeterminate ? '부분 선택됨' : '모두 해제됨'}
                    </p>
                    <p style={{ margin: '0 0 4px 0', fontSize: '14px' }}>
                        <strong>선택된 항목:</strong> {selectedCount}개
                    </p>
                    <p style={{ margin: '0', fontSize: '14px' }}>
                        <strong>카테고리별:</strong> {categories.map(cat => {
                            const count = cat.items.filter(item => item.selected).length;
                            return `${cat.name}(${count}/${cat.items.length})`;
                        }).join(', ')}
                    </p>
                </div>
            </div>
        );
    },
};
