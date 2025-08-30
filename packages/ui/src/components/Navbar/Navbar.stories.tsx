import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Navbar } from './Navbar';

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
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'transparent', 'solid'],
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
        icon: 'designbase-icon-user',
    },
    {
        id: 'settings',
        label: '설정',
        href: '#',
        icon: 'designbase-icon-settings',
    },
    {
        id: 'logout',
        label: '로그아웃',
        href: '#',
        icon: 'designbase-icon-logout',
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

export const WithUserAvatar: Story = {
    args: {
        items: sampleItems,
        size: 'md',
        variant: 'default',
        position: 'static',
        isAuthenticated: true,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
            avatar: 'https://via.placeholder.com/40',
        },
        userMenuItems: userMenuItems,
    },
};

export const WithUserAvatarAndBadge: Story = {
    args: {
        items: sampleItems,
        size: 'md',
        variant: 'default',
        position: 'static',
        isAuthenticated: true,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
            avatar: 'https://via.placeholder.com/40',
            badge: 3,
            badgeVariant: 'danger',
            badgeStyle: 'number',
        },
        userMenuItems: userMenuItems,
    },
};

export const WithUserInitialsAndBadge: Story = {
    args: {
        items: sampleItems,
        size: 'md',
        variant: 'default',
        position: 'static',
        isAuthenticated: true,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
            badge: 1,
            badgeVariant: 'success',
            badgeStyle: 'dot',
        },
        userMenuItems: userMenuItems,
    },
};

export const WithSearch: Story = {
    args: {
        items: sampleItems,
        showSearch: true,
        searchPlaceholder: '검색어를 입력하세요...',
        onSearch: (query) => console.log('Search:', query),
    },
};

export const WithUserMenu: Story = {
    args: {
        items: sampleItems,
        isAuthenticated: true,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
            avatar: 'https://via.placeholder.com/32x32',
        },
        userMenuItems,
        onUserMenuItemClick: (item) => console.log('User menu clicked:', item),
    },
};

export const WithoutAvatar: Story = {
    args: {
        items: sampleItems,
        isAuthenticated: true,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
        },
        userMenuItems,
    },
};

export const NotAuthenticated: Story = {
    args: {
        items: sampleItems,
        isAuthenticated: false,
        onAuthClick: () => console.log('Login clicked'),
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>Small Size</h3>
                <Navbar
                    items={sampleItems}
                    size="sm"
                    showSearch
                    isAuthenticated={true}
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
            <div>
                <h3>Medium Size (Default)</h3>
                <Navbar
                    items={sampleItems}
                    size="md"
                    showSearch
                    isAuthenticated={true}
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
            <div>
                <h3>Large Size</h3>
                <Navbar
                    items={sampleItems}
                    size="lg"
                    showSearch
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

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>Default Variant</h3>
                <Navbar
                    items={sampleItems}
                    variant="default"
                    showSearch
                    isAuthenticated={true}
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
            <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
                <h3 style={{ color: 'white' }}>Transparent Variant</h3>
                <Navbar
                    items={sampleItems}
                    variant="transparent"
                    showSearch
                    isAuthenticated={true}
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                />
            </div>
            <div>
                <h3>Solid Variant</h3>
                <Navbar
                    items={sampleItems}
                    variant="solid"
                    showSearch
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

export const WithShadow: Story = {
    args: {
        items: sampleItems,
        showSearch: true,
        shadow: true,
        isAuthenticated: true,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
        },
        userMenuItems,
    },
};

export const FullWidth: Story = {
    args: {
        items: sampleItems,
        showSearch: true,
        fullWidth: true,
        isAuthenticated: true,
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
        showSearch: true,
        isAuthenticated: true,
        userProfile: {
            name: '김철수',
            email: 'kim@example.com',
        },
        userMenuItems,
    },
};

export const Interactive: Story = {
    render: () => {
        const [activeItem, setActiveItem] = React.useState('home');
        const [searchQuery, setSearchQuery] = React.useState('');

        const handleItemClick = (item: any) => {
            if (item.href === '#') {
                setActiveItem(item.id);
            }
            console.log('Item clicked:', item);
        };

        const handleSearch = (query: string) => {
            setSearchQuery(query);
            console.log('Search:', query);
        };

        const itemsWithActive = sampleItems.map(item => ({
            ...item,
            active: item.id === activeItem,
        }));

        return (
            <div>
                <Navbar
                    items={itemsWithActive}
                    showSearch={true}
                    onSearch={handleSearch}
                    onItemClick={handleItemClick}
                    isAuthenticated={true}
                    userProfile={{
                        name: '김철수',
                        email: 'kim@example.com',
                    }}
                    userMenuItems={userMenuItems}
                    onUserMenuItemClick={(item) => console.log('User menu:', item)}
                />
                <div style={{ padding: '20px' }}>
                    <p>현재 활성 메뉴: <strong>{activeItem}</strong></p>
                    <p>검색어: <strong>{searchQuery}</strong></p>
                </div>
            </div>
        );
    },
};

export const MobileExample: Story = {
    render: () => (
        <div style={{
            width: '375px',
            height: '667px',
            border: '1px solid #ccc',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <Navbar
                items={sampleItems}
                showSearch={true}
                isAuthenticated={true}
                userProfile={{
                    name: '김철수',
                    email: 'kim@example.com',
                }}
                userMenuItems={userMenuItems}
            />
            <div style={{
                padding: '20px',
                height: 'calc(100% - 64px)',
                overflow: 'auto'
            }}>
                <h2>모바일 예제</h2>
                <p>이 예제는 모바일 화면에서 Navbar가 어떻게 보이는지 보여줍니다.</p>
                <p>햄버거 메뉴를 클릭하면 모바일 메뉴가 나타납니다.</p>
                <div style={{ height: '1000px', background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)' }}>
                    <p style={{ padding: '20px' }}>스크롤 가능한 콘텐츠</p>
                </div>
            </div>
        </div>
    ),
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
