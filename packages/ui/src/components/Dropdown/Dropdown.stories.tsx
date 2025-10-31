import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dropdown, type DropdownItem } from './Dropdown';
import { Avatar } from '../Avatar/Avatar';
import { Checkbox } from '../Checkbox/Checkbox';
import { Toggle } from '../Toggle/Toggle';

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
            options: ['s', 'm', 'l'],
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

// 모든 사이즈 (s, m, l)
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Small (s)</h4>
                <Dropdown items={sampleItems} size="s" label="Small Dropdown" />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Medium (m) - 기본값</h4>
                <Dropdown items={sampleItems} size="m" label="Medium Dropdown" />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Large (l)</h4>
                <Dropdown items={sampleItems} size="l" label="Large Dropdown" />
            </div>
        </div>
    ),
};

// 모든 상태 (기본, 비활성화, 전체 너비)
export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', width: '100%', maxWidth: '400px' }}>
            <div style={{ width: '100%' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>기본 상태</h4>
                <Dropdown items={sampleItems} label="기본 드롭다운" />
            </div>
            <div style={{ width: '100%' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>비활성화 상태</h4>
                <Dropdown items={sampleItems} label="비활성화됨" disabled />
            </div>
            <div style={{ width: '100%' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>전체 너비</h4>
                <Dropdown items={sampleItems} label="전체 너비 드롭다운" fullWidth />
            </div>
            <div style={{ width: '100%' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>비활성화된 항목 포함</h4>
                <Dropdown
                    items={[
                        { id: 'edit', label: '편집', onClick: () => console.log('편집') },
                        { id: 'copy', label: '복사', onClick: () => console.log('복사') },
                        { id: 'delete', label: '삭제', disabled: true, onClick: () => console.log('삭제') },
                    ]}
                    label="항목 비활성화"
                />
            </div>
        </div>
    ),
};

// 다양한 배치 (Placement)
export const AllPlacements: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '100px', padding: '100px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Bottom Left</h4>
                <Dropdown items={sampleItems} placement="bottom-left" label="Bottom Left" />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Bottom Right</h4>
                <Dropdown items={sampleItems} placement="bottom-right" label="Bottom Right" />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Top Left</h4>
                <Dropdown items={sampleItems} placement="top-left" label="Top Left" />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Top Right</h4>
                <Dropdown items={sampleItems} placement="top-right" label="Top Right" />
            </div>
        </div>
    ),
};

// 사용 예시 (유저 메뉴, 액션 메뉴)
export const UsageExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>사용자 메뉴 (아바타 트리거)</h4>
                <Dropdown
                    items={userMenuItems}
                    label="사용자 메뉴"
                    trigger={
                        <Avatar
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                            alt="사용자"
                            size="m"
                        />
                    }
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>액션 메뉴 (커스텀 트리거)</h4>
                <Dropdown
                    items={actionItems}
                    label="작업"
                    trigger={
                        <button style={{
                            padding: '8px 12px',
                            border: '1px solid #e8eef2',
                            borderRadius: '6px',
                            background: 'white',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: '600'
                        }}>
                            ⋮
                        </button>
                    }
                />
            </div>
        </div>
    ),
};

// 인터랙티브 예제
export const Interactive: Story = {
    render: () => {
        const [selectedAction, setSelectedAction] = useState<string>('');
        const [isOpen, setIsOpen] = useState(false);

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
                <Dropdown
                    items={interactiveItems}
                    label="인터랙티브 메뉴"
                    isOpen={isOpen}
                    onToggle={setIsOpen}
                />

                <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p style={{ margin: '0 0 4px 0' }}>선택된 액션: <strong>{selectedAction || '없음'}</strong></p>
                    <p style={{ margin: '0' }}>드롭다운 상태: <strong>{isOpen ? '열림' : '닫힘'}</strong></p>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ marginTop: '12px', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        {isOpen ? '닫기' : '열기'}
                    </button>
                </div>
            </div>
        );
    },
};

// 커스텀 메뉴 아이템 예제
export const WithCustomItems: Story = {
    render: () => {
        const [notifications, setNotifications] = useState(false);
        const [autoSave, setAutoSave] = useState(false);
        const [soundEnabled, setSoundEnabled] = useState(true);

        const customItems: DropdownItem[] = [
            { id: 'title', custom: <div style={{ fontWeight: '600', padding: '8px 12px', fontSize: '12px', color: '#666' }}>알림 설정</div> },
            {
                id: 'notifications',
                custom: (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px' }}>
                        <span>알림 받기</span>
                        <Toggle checked={notifications} onChange={setNotifications} size="s" />
                    </div>
                )
            },
            {
                id: 'auto-save',
                custom: (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px' }}>
                        <span>자동 저장</span>
                        <Toggle checked={autoSave} onChange={setAutoSave} size="s" />
                    </div>
                )
            },
            { id: 'divider1', label: '', divider: true },
            { id: 'sounds', label: '효과음', icon: () => <span>🔊</span>, onClick: () => console.log('효과음') },
            {
                id: 'theme',
                custom: (
                    <div style={{ padding: '8px 12px' }}>
                        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>테마</div>
                        <Checkbox checked={false} label="다크 모드" onChange={() => console.log('다크모드')} />
                        <Checkbox checked={true} label="라이트 모드" onChange={() => console.log('라이트모드')} />
                    </div>
                )
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <Dropdown
                    items={customItems}
                    label="설정"
                />
                <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p style={{ margin: '0 0 4px 0' }}>알림 받기: <strong>{notifications ? 'ON' : 'OFF'}</strong></p>
                    <p style={{ margin: '0 0 4px 0' }}>자동 저장: <strong>{autoSave ? 'ON' : 'OFF'}</strong></p>
                    <p style={{ margin: '0' }}>효과음: <strong>{soundEnabled ? 'ON' : 'OFF'}</strong></p>
                </div>
            </div>
        );
    },
};
