import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {
    UserIcon,
    SettingsIcon,
    BellIcon,
    StarIcon,
    HeartIcon,
    ShareAltIcon,
    EditIcon,
    DeleteIcon,
    CircleCheckedIcon,
    CloseIcon
} from '@designbase/icons';
import List from './List';

const meta: Meta<typeof List> = {
    title: 'Components/List',
    component: List,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '다양한 스타일과 기능을 가진 List 컴포넌트입니다. 아이템 선택, 드래그 앤 드롭, 로딩 상태 등을 지원합니다.',
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: '리스트 아이템의 크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'bordered', 'card', 'minimal'],
            description: '리스트의 스타일 변형',
        },
        layout: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal'],
            description: '리스트의 레이아웃 방향',
        },
        spacing: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg'],
            description: '아이템 간의 간격',
        },
        alignment: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'stretch'],
            description: '아이템의 정렬 방식',
        },
        selectable: {
            control: { type: 'boolean' },
            description: '아이템 선택 가능 여부',
        },
        multiple: {
            control: { type: 'boolean' },
            description: '다중 선택 가능 여부',
        },
        draggable: {
            control: { type: 'boolean' },
            description: '드래그 앤 드롭 가능 여부',
        },
        loading: {
            control: { type: 'boolean' },
            description: '로딩 상태',
        },
        onItemClick: { action: 'item clicked' },
        onItemSelect: { action: 'item selected' },
        onItemDrag: { action: 'item dragged' },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 데이터
const sampleItems = [
    {
        id: '1',
        title: '사용자 프로필',
        description: '사용자 정보를 관리하고 편집할 수 있습니다.',
        icon: <UserIcon size={20} />,
        badge: { text: 'New', color: 'success' as const, variant: 'soft' as const },
        meta: [
            { label: '생성일', value: '2024-01-15' },
            { label: '수정일', value: '2024-01-20' }
        ],
        actions: [
            <button key="edit" className="designbase-button designbase-button--size-sm designbase-button--variant-ghost">
                <EditIcon size={16} />
            </button>,
            <button key="delete" className="designbase-button designbase-button--size-sm designbase-button--variant-ghost">
                <DeleteIcon size={16} />
            </button>
        ]
    },
    {
        id: '2',
        title: '시스템 설정',
        description: '시스템 전반의 설정을 관리합니다.',
        icon: <SettingsIcon size={20} />,
        badge: { text: 'Updated', color: 'info' as const, variant: 'outline' as const },
        meta: [
            { label: '버전', value: 'v2.1.0' },
            { label: '상태', value: '활성' }
        ],
        actions: [
            <button key="settings" className="designbase-button designbase-button--size-sm designbase-button--variant-ghost">
                <SettingsIcon size={16} />
            </button>
        ]
    },
    {
        id: '3',
        title: '알림 관리',
        description: '사용자 알림을 설정하고 관리합니다.',
        icon: <BellIcon size={20} />,
        badge: { text: '3', color: 'warning' as const, variant: 'solid' as const },
        meta: [
            { label: '읽지 않은 알림', value: '3개' },
            { label: '전체 알림', value: '12개' }
        ],
        actions: [
            <button key="mark-read" className="designbase-button designbase-button--size-sm designbase-button--variant-ghost">
                <CircleCheckedIcon size={16} />
            </button>
        ]
    },
    {
        id: '4',
        title: '즐겨찾기',
        description: '자주 사용하는 항목들을 관리합니다.',
        icon: <StarIcon size={20} />,
        badge: { text: '5', color: 'primary' as const, variant: 'soft' as const },
        meta: [
            { label: '총 항목', value: '5개' },
            { label: '마지막 업데이트', value: '1시간 전' }
        ],
        actions: [
            <button key="add" className="designbase-button designbase-button--size-sm designbase-button--variant-ghost">
                <StarIcon size={16} />
            </button>
        ]
    }
];

const imageItems = [
    {
        id: '1',
        title: '프로필 사진',
        description: '사용자 프로필 이미지입니다.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        badge: { text: 'Active', color: 'success', variant: 'solid' }
    },
    {
        id: '2',
        title: '커버 이미지',
        description: '페이지 커버 이미지입니다.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop',
        badge: { text: 'Featured', color: 'primary', variant: 'outline' }
    },
    {
        id: '3',
        title: '갤러리 이미지',
        description: '갤러리에 표시되는 이미지입니다.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=150&fit=crop',
        badge: { text: 'New', color: 'info', variant: 'soft' }
    }
];

export const Default: Story = {
    args: {
        items: sampleItems,
        size: 'md',
        variant: 'default',
        layout: 'vertical',
        spacing: 'md',
        alignment: 'start',
        selectable: false,
        multiple: false,
        draggable: false,
        loading: false,
        onItemClick: fn(),
        onItemSelect: fn(),
        onItemDrag: fn(),
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3>Small Size</h3>
                <List items={sampleItems.slice(0, 2)} size="sm" />
            </div>
            <div>
                <h3>Medium Size</h3>
                <List items={sampleItems.slice(0, 2)} size="md" />
            </div>
            <div>
                <h3>Large Size</h3>
                <List items={sampleItems.slice(0, 2)} size="lg" />
            </div>
        </div>
    ),
};

export const DifferentVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3>Default Variant</h3>
                <List items={sampleItems.slice(0, 2)} variant="default" />
            </div>
            <div>
                <h3>Bordered Variant</h3>
                <List items={sampleItems.slice(0, 2)} variant="bordered" />
            </div>
            <div>
                <h3>Card Variant</h3>
                <List items={sampleItems.slice(0, 2)} variant="card" />
            </div>
            <div>
                <h3>Minimal Variant</h3>
                <List items={sampleItems.slice(0, 2)} variant="minimal" />
            </div>
        </div>
    ),
};

export const WithImages: Story = {
    args: {
        items: imageItems,
        size: 'md',
        variant: 'card',
        layout: 'vertical',
        spacing: 'md',
    },
};

export const HorizontalLayout: Story = {
    args: {
        items: sampleItems,
        size: 'md',
        variant: 'card',
        layout: 'horizontal',
        spacing: 'md',
    },
};

export const Selectable: Story = {
    render: () => {
        const [selectedItems, setSelectedItems] = useState<string[]>([]);

        return (
            <div>
                <p>선택된 항목: {selectedItems.join(', ') || '없음'}</p>
                <List
                    items={sampleItems}
                    selectable={true}
                    multiple={true}
                    selectedItems={selectedItems}
                    onItemSelect={setSelectedItems}
                />
            </div>
        );
    },
};

export const SingleSelect: Story = {
    render: () => {
        const [selectedItem, setSelectedItem] = useState<string>('');

        return (
            <div>
                <p>선택된 항목: {selectedItem || '없음'}</p>
                <List
                    items={sampleItems}
                    selectable={true}
                    multiple={false}
                    selectedItems={selectedItem ? [selectedItem] : []}
                    onItemSelect={(items) => setSelectedItem(items[0] || '')}
                />
            </div>
        );
    },
};

export const Draggable: Story = {
    render: () => {
        const [items, setItems] = useState(sampleItems);

        const handleDrag = (draggedId: string, targetId: string) => {
            const draggedIndex = items.findIndex(item => item.id === draggedId);
            const targetIndex = items.findIndex(item => item.id === targetId);

            if (draggedIndex === -1 || targetIndex === -1) return;

            const newItems = [...items];
            const [draggedItem] = newItems.splice(draggedIndex, 1);
            newItems.splice(targetIndex, 0, draggedItem);

            setItems(newItems);
        };

        return (
            <div>
                <p>아이템을 드래그하여 순서를 변경할 수 있습니다.</p>
                <List
                    items={items}
                    draggable={true}
                    onItemDrag={handleDrag}
                />
            </div>
        );
    },
};

export const Loading: Story = {
    args: {
        items: [],
        loading: true,
        loadingCount: 5,
        size: 'md',
        variant: 'default',
    },
};

export const EmptyState: Story = {
    args: {
        items: [],
        emptyState: (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
                <h3>항목이 없습니다</h3>
                <p>새로운 항목을 추가해보세요.</p>
                <button className="designbase-button designbase-button--variant-primary">
                    항목 추가
                </button>
            </div>
        ),
    },
};

export const WithActions: Story = {
    args: {
        items: sampleItems.map(item => ({
            ...item,
            actions: [
                <button key="like" className="designbase-button designbase-button--size-sm designbase-button--variant-ghost">
                    <HeartIcon size={16} />
                </button>,
                <button key="share" className="designbase-button designbase-button--size-sm designbase-button--variant-ghost">
                    <ShareAltIcon size={16} />
                </button>,
                <button key="edit" className="designbase-button designbase-button--size-sm designbase-button--variant-ghost">
                    <EditIcon size={16} />
                </button>,
                <button key="delete" className="designbase-button designbase-button--size-sm designbase-button--variant-ghost">
                    <DeleteIcon size={16} />
                </button>
            ]
        })),
        size: 'md',
        variant: 'bordered',
    },
};

export const Interactive: Story = {
    render: () => {
        const [items, setItems] = useState(sampleItems);
        const [selectedItems, setSelectedItems] = useState<string[]>([]);

        const handleItemClick = (item: any, index: number) => {
            console.log('Clicked item:', item.title);
        };

        const handleItemSelect = (selectedIds: string[]) => {
            setSelectedItems(selectedIds);
            console.log('Selected items:', selectedIds);
        };

        const handleItemDrag = (draggedId: string, targetId: string) => {
            const draggedIndex = items.findIndex(item => item.id === draggedId);
            const targetIndex = items.findIndex(item => item.id === targetId);

            if (draggedIndex === -1 || targetIndex === -1) return;

            const newItems = [...items];
            const [draggedItem] = newItems.splice(draggedIndex, 1);
            newItems.splice(targetIndex, 0, draggedItem);

            setItems(newItems);
            console.log('Dragged item:', draggedId, 'to position of:', targetId);
        };

        return (
            <div>
                <div style={{ marginBottom: '1rem' }}>
                    <p>선택된 항목: {selectedItems.join(', ') || '없음'}</p>
                </div>
                <List
                    items={items}
                    selectable={true}
                    multiple={true}
                    draggable={true}
                    selectedItems={selectedItems}
                    onItemClick={handleItemClick}
                    onItemSelect={handleItemSelect}
                    onItemDrag={handleItemDrag}
                    variant="card"
                />
            </div>
        );
    },
};

export const DifferentSpacings: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3>No Spacing</h3>
                <List items={sampleItems.slice(0, 2)} spacing="none" />
            </div>
            <div>
                <h3>Small Spacing</h3>
                <List items={sampleItems.slice(0, 2)} spacing="sm" />
            </div>
            <div>
                <h3>Medium Spacing</h3>
                <List items={sampleItems.slice(0, 2)} spacing="md" />
            </div>
            <div>
                <h3>Large Spacing</h3>
                <List items={sampleItems.slice(0, 2)} spacing="lg" />
            </div>
        </div>
    ),
};

export const DifferentAlignments: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3>Start Alignment</h3>
                <List items={sampleItems.slice(0, 2)} alignment="start" />
            </div>
            <div>
                <h3>Center Alignment</h3>
                <List items={sampleItems.slice(0, 2)} alignment="center" />
            </div>
            <div>
                <h3>End Alignment</h3>
                <List items={sampleItems.slice(0, 2)} alignment="end" />
            </div>
            <div>
                <h3>Stretch Alignment</h3>
                <List items={sampleItems.slice(0, 2)} alignment="stretch" />
            </div>
        </div>
    ),
};

export const DisabledItems: Story = {
    args: {
        items: [
            ...sampleItems,
            {
                id: '5',
                title: '비활성화된 항목',
                description: '이 항목은 비활성화되어 있습니다.',
                icon: <CloseIcon size={20} />,
                disabled: true,
                badge: { text: 'Disabled', color: 'error', variant: 'soft' }
            }
        ],
        size: 'md',
        variant: 'bordered',
    },
};
