import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import {
    PhoneIcon,
    UsersIcon,
    ListUlIcon,
    PlusIcon,
    HideIcon,
    PackageIcon,
    FolderIcon,
    CameraIcon,
    BarChartIcon,
    TrendingUpIcon,
    SettingsIcon,
    UserIcon,
    LayoutIcon
} from '@designbase/icons';

const meta: Meta<typeof Sidebar> = {
    title: 'Components/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'dark', 'light'],
        },
        position: {
            control: { type: 'select' },
            options: ['left', 'right'],
        },
        collapsed: {
            control: { type: 'boolean' },
        },
        collapsible: {
            control: { type: 'boolean' },
        },
        fixed: {
            control: { type: 'boolean' },
        },
        fullHeight: {
            control: { type: 'boolean' },
        },
        shadow: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    {
        id: 'dashboard',
        label: '대시보드',
        href: '#',
        icon: PhoneIcon,
        active: true,
    },
    {
        id: 'users',
        label: '사용자 관리',
        href: '#',
        icon: UsersIcon,
        children: [
            { id: 'user-list', label: '사용자 목록', href: '#', icon: ListUlIcon },
            { id: 'user-add', label: '사용자 추가', href: '#', icon: PlusIcon },
            { id: 'user-roles', label: '권한 관리', href: '#', icon: HideIcon },
        ],
    },
    {
        id: 'products',
        label: '제품 관리',
        href: '#',
        icon: PackageIcon,
        badge: 'New',
        badgeColor: 'success' as const,
        children: [
            { id: 'product-list', label: '제품 목록', href: '#', icon: ListUlIcon },
            { id: 'product-add', label: '제품 추가', href: '#', icon: PlusIcon },
            { id: 'product-categories', label: '카테고리', href: '#', icon: FolderIcon },
        ],
    },
    {
        id: 'orders',
        label: '주문 관리',
        href: '#',
        icon: CameraIcon,
        badge: '5',
        badgeColor: 'warning' as const,
    },
    {
        id: 'analytics',
        label: '분석',
        href: '#',
        icon: BarChartIcon,
        children: [
            { id: 'sales-analytics', label: '매출 분석', href: '#', icon: TrendingUpIcon },
            { id: 'user-analytics', label: '사용자 분석', href: '#', icon: UsersIcon },
        ],
    },
    {
        id: 'settings',
        label: '설정',
        href: '#',
        icon: SettingsIcon,
        children: [
            { id: 'general-settings', label: '일반 설정', href: '#', icon: SettingsIcon },
            { id: 'security-settings', label: '보안 설정', href: '#', icon: HideIcon },
            { id: 'notification-settings', label: '알림 설정', href: '#', icon: HideIcon },
        ],
    },
];

const userMenuItems = [
    {
        id: 'profile',
        label: '프로필',
        href: '#',
        icon: UserIcon,
    },
    {
        id: 'settings',
        label: '설정',
        href: '#',
        icon: SettingsIcon,
    },
    {
        id: 'help',
        label: '도움말',
        href: '#',
        icon: HideIcon,
    },
    {
        id: 'logout',
        label: '로그아웃',
        href: '#',
        icon: LayoutIcon,
    },
];

export const Default: Story = {
    args: {
        items: sampleItems,
        size: 'md',
        variant: 'default',
        position: 'left',
        collapsed: false,
        collapsible: true,
    },
};

export const Collapsed: Story = {
    args: {
        items: sampleItems,
        collapsed: true,
        collapsible: true,
    },
};

export const WithUserProfile: Story = {
    args: {
        items: sampleItems,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
            role: '관리자',
            avatar: 'https://via.placeholder.com/40x40',
        },
        userMenuItems,
    },
};

export const WithoutAvatar: Story = {
    args: {
        items: sampleItems,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
            role: '관리자',
        },
        userMenuItems,
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '20px', height: '400px' }}>
            <div>
                <h3>Small</h3>
                <Sidebar
                    items={sampleItems}
                    size="sm"
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
            <div>
                <h3>Medium (Default)</h3>
                <Sidebar
                    items={sampleItems}
                    size="md"
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
            <div>
                <h3>Large</h3>
                <Sidebar
                    items={sampleItems}
                    size="lg"
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '20px', height: '400px' }}>
            <div>
                <h3>Default</h3>
                <Sidebar
                    items={sampleItems}
                    variant="default"
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
            <div>
                <h3>Dark</h3>
                <Sidebar
                    items={sampleItems}
                    variant="dark"
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
            <div>
                <h3>Light</h3>
                <Sidebar
                    items={sampleItems}
                    variant="light"
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
        </div>
    ),
};

export const RightPosition: Story = {
    args: {
        items: sampleItems,
        position: 'right',
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
        },
        userMenuItems,
    },
};

export const WithShadow: Story = {
    args: {
        items: sampleItems,
        shadow: true,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
        },
        userMenuItems,
    },
};

export const NotCollapsible: Story = {
    args: {
        items: sampleItems,
        collapsible: false,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
        },
        userMenuItems,
    },
};

export const WithCustomLogo: Story = {
    args: {
        items: sampleItems,
        logo: (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#3b82f6'
            }}>
                <span>🚀</span>
                <span>MyApp</span>
            </div>
        ),
        onLogoClick: () => console.log('Logo clicked'),
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
        },
        userMenuItems,
    },
};

export const Interactive: Story = {
    render: () => {
        const [collapsed, setCollapsed] = useState(false);
        const [activeItem, setActiveItem] = useState('dashboard');

        const handleItemClick = (item: any) => {
            if (item.href === '#') {
                setActiveItem(item.id);
            }
            console.log('Item clicked:', item);
        };

        const handleToggle = (isCollapsed: boolean) => {
            setCollapsed(isCollapsed);
            console.log('Sidebar toggled:', isCollapsed);
        };

        const itemsWithActive = sampleItems.map(item => ({
            ...item,
            active: item.id === activeItem,
        }));

        return (
            <div style={{ display: 'flex', height: '500px' }}>
                <Sidebar
                    items={itemsWithActive}
                    collapsed={collapsed}
                    onToggle={handleToggle}
                    onItemClick={handleItemClick}
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                    onUserMenuItemClick={(item) => console.log('User menu:', item)}
                />
                <div style={{ flex: 1, padding: '20px' }}>
                    <h2>인터랙티브 예제</h2>
                    <p>현재 상태: <strong>{collapsed ? '접힘' : '펼침'}</strong></p>
                    <p>활성 메뉴: <strong>{activeItem}</strong></p>
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            padding: '8px 16px',
                            margin: '10px 0',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {collapsed ? '펼치기' : '접기'}
                    </button>
                </div>
            </div>
        );
    },
};

export const WithContent: Story = {
    render: () => {
        const [collapsed, setCollapsed] = useState(false);

        return (
            <div style={{ display: 'flex', height: '100vh' }}>
                <Sidebar
                    items={sampleItems}
                    collapsed={collapsed}
                    onToggle={setCollapsed}
                    fixed={true}
                    shadow={true}
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
                <div style={{
                    flex: 1,
                    marginLeft: collapsed ? '64px' : '280px',
                    transition: 'margin-left 0.3s ease',
                    padding: '20px'
                }}>
                    <h1>메인 콘텐츠</h1>
                    <p>이 예제는 사이드바와 함께 사용되는 메인 콘텐츠 영역을 보여줍니다.</p>
                    <p>사이드바를 접으면 콘텐츠 영역이 자동으로 조정됩니다.</p>

                    <div style={{
                        background: '#f5f5f5',
                        padding: '20px',
                        borderRadius: '8px',
                        margin: '20px 0'
                    }}>
                        <h3>콘텐츠 카드</h3>
                        <p>여기에 실제 페이지 콘텐츠가 들어갑니다.</p>
                    </div>

                    <div style={{
                        background: '#e8f4fd',
                        padding: '20px',
                        borderRadius: '8px',
                        margin: '20px 0'
                    }}>
                        <h3>또 다른 콘텐츠</h3>
                        <p>스크롤 가능한 콘텐츠 영역입니다.</p>
                    </div>

                    {Array.from({ length: 10 }, (_, i) => (
                        <div key={i} style={{
                            background: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '4px',
                            margin: '10px 0',
                            border: '1px solid #eee'
                        }}>
                            콘텐츠 항목 {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        );
    },
    parameters: {
        layout: 'fullscreen',
    },
};
