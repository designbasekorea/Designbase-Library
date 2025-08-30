import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dropdown, type DropdownItem } from './Dropdown';
import { Avatar } from '../Avatar/Avatar';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        placement: {
            control: { type: 'select' },
            options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems: DropdownItem[] = [
    { id: 'edit', label: '편집', onClick: () => console.log('편집 클릭') },
    { id: 'copy', label: '복사', onClick: () => console.log('복사 클릭') },
    { id: 'delete', label: '삭제', onClick: () => console.log('삭제 클릭') },
];

const userMenuItems: DropdownItem[] = [
    { id: 'profile', label: '프로필', onClick: () => console.log('프로필 클릭') },
    { id: 'settings', label: '설정', onClick: () => console.log('설정 클릭') },
    { id: 'divider1', label: '', divider: true },
    { id: 'logout', label: '로그아웃', onClick: () => console.log('로그아웃 클릭') },
];

const actionItems: DropdownItem[] = [
    { id: 'download', label: '다운로드', onClick: () => console.log('다운로드 클릭') },
    { id: 'share', label: '공유', onClick: () => console.log('공유 클릭') },
    { id: 'export', label: '내보내기', onClick: () => console.log('내보내기 클릭') },
    { id: 'divider1', label: '', divider: true },
    { id: 'archive', label: '보관', onClick: () => console.log('보관 클릭') },
    { id: 'delete', label: '삭제', onClick: () => console.log('삭제 클릭') },
];

export const Default: Story = {
    args: {
        items: sampleItems,
        label: '메뉴',
    },
};

export const WithCustomTrigger: Story = {
    render: () => (
        <Dropdown
            items={sampleItems}
            trigger={<button style={{ padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '4px' }}>커스텀 트리거</button>}
        />
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Dropdown items={sampleItems} size="sm" label="Small" />
            <Dropdown items={sampleItems} size="md" label="Medium" />
            <Dropdown items={sampleItems} size="lg" label="Large" />
        </div>
    ),
};

export const Placements: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Dropdown items={sampleItems} placement="bottom-left" label="Bottom Left" />
            <Dropdown items={sampleItems} placement="bottom-right" label="Bottom Right" />
            <Dropdown items={sampleItems} placement="top-left" label="Top Left" />
            <Dropdown items={sampleItems} placement="top-right" label="Top Right" />
        </div>
    ),
};

export const UserMenu: Story = {
    render: () => (
        <Dropdown
            items={userMenuItems}
            label="사용자 메뉴"
            trigger={
                <Avatar
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="사용자 아바타"
                    size="md"
                />
            }
        />
    ),
};

export const ActionMenu: Story = {
    render: () => (
        <Dropdown
            items={actionItems}
            label="작업"
            trigger={<button style={{ padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '4px' }}>⋮</button>}
        />
    ),
};

export const WithDisabledItems: Story = {
    render: () => {
        const itemsWithDisabled: DropdownItem[] = [
            { id: 'edit', label: '편집', onClick: () => console.log('편집 클릭') },
            { id: 'copy', label: '복사', onClick: () => console.log('복사 클릭') },
            { id: 'delete', label: '삭제', disabled: true, onClick: () => console.log('삭제 클릭') },
        ];

        return <Dropdown items={itemsWithDisabled} label="메뉴" />;
    },
};

export const FullWidth: Story = {
    args: {
        items: sampleItems,
        label: '전체 너비 드롭다운',
        fullWidth: true,
    },
};

export const Disabled: Story = {
    args: {
        items: sampleItems,
        label: '비활성화된 드롭다운',
        disabled: true,
    },
};

export const Controlled: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div>
                <Dropdown
                    items={sampleItems}
                    label="제어된 드롭다운"
                    isOpen={isOpen}
                    onToggle={setIsOpen}
                />
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>드롭다운 상태: <strong>{isOpen ? '열림' : '닫힘'}</strong></p>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ marginTop: '8px', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '4px' }}
                    >
                        {isOpen ? '닫기' : '열기'}
                    </button>
                </div>
            </div>
        );
    },
};

export const Interactive: Story = {
    render: () => {
        const [selectedAction, setSelectedAction] = useState<string>('');

        const handleItemClick = (action: string) => {
            setSelectedAction(action);
        };

        const interactiveItems: DropdownItem[] = [
            { id: 'action1', label: '액션 1', onClick: () => handleItemClick('액션 1') },
            { id: 'action2', label: '액션 2', onClick: () => handleItemClick('액션 2') },
            { id: 'action3', label: '액션 3', onClick: () => handleItemClick('액션 3') },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <Dropdown items={interactiveItems} label="인터랙티브 메뉴" />

                <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>선택된 액션: <strong>{selectedAction || '없음'}</strong></p>
                </div>
            </div>
        );
    },
};
