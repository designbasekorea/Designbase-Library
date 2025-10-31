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
} from '@designbasekorea/icons';
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
            options: ['s', 'm', 'l'],
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
        badge: { text: 'New', variant: 'success' as const },
        meta: [
            { label: '생성일', value: '2024-01-15' },
            { label: '수정일', value: '2024-01-20' }
        ]
    },
    {
        id: '2',
        title: '시스템 설정',
        description: '시스템 전반의 설정을 관리합니다.',
        icon: <SettingsIcon size={20} />,
        badge: { text: 'Updated', variant: 'info' as const, style: 'outlined' as const },
        meta: [
            { label: '버전', value: 'v2.1.0' },
            { label: '상태', value: '활성' }
        ]
    },
    {
        id: '3',
        title: '알림 관리',
        description: '사용자 알림을 설정하고 관리합니다.',
        icon: <BellIcon size={20} />,
        badge: { text: '3', variant: 'warning' as const },
        meta: [
            { label: '읽지 않은 알림', value: '3개' },
            { label: '전체 알림', value: '12개' }
        ]
    },
    {
        id: '4',
        title: '즐겨찾기',
        description: '자주 사용하는 항목들을 관리합니다.',
        icon: <StarIcon size={20} />,
        badge: { text: '5', variant: 'primary' as const },
        meta: [
            { label: '총 항목', value: '5개' },
            { label: '마지막 업데이트', value: '1시간 전' }
        ]
    }
];

const imageItems = [
    {
        id: '1',
        title: '프로필 사진',
        description: '사용자 프로필 이미지입니다.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        badge: { text: 'Active', variant: 'success' as const }
    },
    {
        id: '2',
        title: '커버 이미지',
        description: '페이지 커버 이미지입니다.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop',
        badge: { text: 'Featured', variant: 'primary' as const, style: 'outlined' as const }
    },
    {
        id: '3',
        title: '갤러리 이미지',
        description: '갤러리에 표시되는 이미지입니다.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=150&fit=crop',
        badge: { text: 'New', variant: 'info' as const }
    }
];

export const Default: Story = {
    args: {
        items: sampleItems,
        size: 'm',
        variant: 'default',
        layout: 'vertical',
        spacing: 'm',
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

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3>Small</h3>
                <List items={sampleItems.slice(0, 2)} size="s" />
            </div>
            <div>
                <h3>Medium</h3>
                <List items={sampleItems.slice(0, 2)} size="m" />
            </div>
            <div>
                <h3>Large</h3>
                <List items={sampleItems.slice(0, 2)} size="l" />
            </div>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3>Default</h3>
                <List items={sampleItems.slice(0, 2)} variant="default" />
            </div>
            <div>
                <h3>Bordered</h3>
                <List items={sampleItems.slice(0, 2)} variant="bordered" />
            </div>
            <div>
                <h3>Card</h3>
                <List items={sampleItems.slice(0, 2)} variant="card" />
            </div>
            <div>
                <h3>Minimal</h3>
                <List items={sampleItems.slice(0, 2)} variant="minimal" />
            </div>
        </div>
    ),
};

export const WithImages: Story = {
    args: {
        items: imageItems,
        size: 'm',
        variant: 'card',
        layout: 'vertical',
        spacing: 'm',
    },
};

export const HorizontalLayout: Story = {
    args: {
        items: sampleItems,
        size: 'm',
        variant: 'card',
        layout: 'horizontal',
        spacing: 'm',
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
        size: 'm',
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
            </div>
        ),
    },
};

