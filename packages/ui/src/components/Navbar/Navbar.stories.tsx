import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Navbar } from './Navbar';
import { UserIcon, SettingsIcon } from '@designbasekorea/icons';

const meta: Meta<typeof Navbar> = {
    title: 'Components/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'transparent'],
        },
        position: {
            control: { type: 'select' },
            options: ['fixed', 'sticky', 'static'],
        },
        showSearch: {
            control: { type: 'boolean' },
        },
        isAuthenticated: {
            control: { type: 'boolean' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
        shadow: {
            control: { type: 'boolean' },
        },
        onLoginClick: {
            action: 'login clicked',
        },
        onLogoutClick: {
            action: 'logout clicked',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    {
        id: 'home',
        label: '홈',
        href: '#',
        active: true,
    },
    {
        id: 'products',
        label: '제품',
        href: '#',
        children: [
            { id: 'featured', label: '추천 제품', href: '#' },
            { id: 'new', label: '신제품', href: '#' },
            { id: 'sale', label: '할인 제품', href: '#' },
        ],
    },
    {
        id: 'services',
        label: '서비스',
        href: '#',
        children: [
            { id: 'consulting', label: '컨설팅', href: '#' },
            { id: 'support', label: '고객 지원', href: '#' },
        ],
    },
    {
        id: 'about',
        label: '회사 소개',
        href: '#',
    },
    {
        id: 'contact',
        label: '연락처',
        href: '#',
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
        id: 'logout',
        label: '로그아웃',
        href: '#',
        icon: SettingsIcon,
    },
];

export const Default: Story = {
    args: {
        items: sampleItems,
        size: 'md',
        variant: 'default',
        position: 'static',
    },
};

export const WithUser: Story = {
    args: {
        items: sampleItems,
        isAuthenticated: true,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
            avatar: 'https://via.placeholder.com/40',
        },
        userMenuItems: userMenuItems,
    },
};

export const WithSearch: Story = {
    args: {
        items: sampleItems,
        showSearch: true,
        searchPlaceholder: '검색어를 입력하세요...',
        onSearch: (query: string) => console.log('Search:', query),
    },
};

export const NotAuthenticated: Story = {
    args: {
        items: sampleItems,
        isAuthenticated: false,
        onLoginClick: () => console.log('Login clicked'),
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>Small</h3>
                <Navbar
                    items={sampleItems}
                    size="s"
                    isAuthenticated={true}
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
            <div>
                <h3>Medium</h3>
                <Navbar
                    items={sampleItems}
                    size="m"
                    isAuthenticated={true}
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
            <div>
                <h3>Large</h3>
                <Navbar
                    items={sampleItems}
                    size="l"
                    isAuthenticated={true}
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

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>Default</h3>
                <Navbar
                    items={sampleItems}
                    variant="default"
                    isAuthenticated={true}
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
            <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
                <h3 style={{ color: 'white' }}>Transparent</h3>
                <Navbar
                    items={sampleItems}
                    variant="transparent"
                    isAuthenticated={true}
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

export const WithCustomLogo: Story = {
    args: {
        items: sampleItems,
        logo: (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#3b82f6'
            }}>
                <span>🚀</span>
                <span>MyApp</span>
            </div>
        ),
        onLogoClick: () => console.log('Logo clicked'),
        isAuthenticated: true,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
        },
        userMenuItems,
    },
};
