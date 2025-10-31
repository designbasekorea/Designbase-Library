import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
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
    LayoutIcon,
} from '@designbasekorea/icons';

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
            options: ['s', 'm', 'l'],
        },
        position: {
            control: { type: 'select' },
            options: ['left', 'right'],
        },
        collapsed: { control: { type: 'boolean' } },
        collapsible: { control: { type: 'boolean' } },
        fixed: { control: { type: 'boolean' } },
        fullHeight: { control: { type: 'boolean' } },
        shadow: { control: { type: 'boolean' } },
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
        size: 'm',
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
        onLogoClick: () => console.log('로고 클릭됨'),
        onUserMenuItemClick: (item) => console.log('사용자 메뉴 클릭됨:', item),
    },
};

// 간소화: 꼭 필요한 스토리만 유지

// 크기/위치/접힘 여부를 컨트롤 패널로 조정하면서 기본 사용 확인
export const Sizes: Story = {
    args: {
        items: sampleItems,
        size: 'm',
        position: 'left',
        collapsible: true,
    },
};
