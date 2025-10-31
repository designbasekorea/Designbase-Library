import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BottomNavigation } from './BottomNavigation';
import {
    HomeFilledIcon,
    HomeOutlineIcon,
    SearchIcon,
    SearchFilledIcon,
    HeartIcon,
    HeartFilledIcon,
    UserIcon,
    UserFilledIcon,
    SettingsIcon,
    SettingsFilledIcon,
    BellIcon,
    BellFilledIcon,
    CartIcon,
    CartFilledIcon,
    MessageIcon,
    MessageFilledIcon
} from '@designbasekorea/icons';

const meta: Meta<typeof BottomNavigation> = {
    title: 'Components/BottomNavigation',
    component: BottomNavigation,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        backgroundColor: {
            control: { type: 'select' },
            options: ['default', 'glass', 'transparent'],
        },
        fixed: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 네비게이션 아이템들 (활성화 아이콘 포함)
const defaultItems = [
    {
        id: 'home',
        icon: HomeOutlineIcon,
        activeIcon: HomeFilledIcon,
        label: '홈',
    },
    {
        id: 'search',
        icon: SearchIcon,
        activeIcon: SearchFilledIcon,
        label: '검색',
    },
    {
        id: 'favorites',
        icon: HeartIcon,
        activeIcon: HeartFilledIcon,
        label: '즐겨찾기',
    },
    {
        id: 'profile',
        icon: UserIcon,
        activeIcon: UserFilledIcon,
        label: '프로필',
    },
];

const itemsWithBadges = [
    {
        id: 'home',
        icon: HomeOutlineIcon,
        activeIcon: HomeFilledIcon,
        label: '홈',
    },
    {
        id: 'notifications',
        icon: BellIcon,
        activeIcon: BellFilledIcon,
        label: '알림',
        badge: 3,
        badgeColor: 'error' as const,
    },
    {
        id: 'cart',
        icon: CartIcon,
        activeIcon: CartFilledIcon,
        label: '장바구니',
        badge: 12,
        badgeColor: 'primary' as const,
    },
    {
        id: 'messages',
        icon: MessageIcon,
        activeIcon: MessageFilledIcon,
        label: '메시지',
        badge: '99+',
        badgeColor: 'warning' as const,
    },
    {
        id: 'profile',
        icon: UserIcon,
        activeIcon: UserFilledIcon,
        label: '프로필',
    },
];

export const Default: Story = {
    render: () => {
        const [activeItem, setActiveItem] = useState('home');

        return (
            <div style={{ height: '100vh', position: 'relative' }}>
                <div style={{ padding: '20px', height: 'calc(100vh - 80px)', overflow: 'auto' }}>
                    <h2>BottomNavigation 기본 예제</h2>
                    <p>하단 네비게이션을 클릭해보세요!</p>
                    <p>현재 활성 아이템: <strong>{activeItem}</strong></p>
                </div>
                <BottomNavigation
                    items={defaultItems}
                    activeItemId={activeItem}
                    onItemClick={(item) => setActiveItem(item.id)}
                />
            </div>
        );
    },
};

export const WithBadges: Story = {
    render: () => {
        const [activeItem, setActiveItem] = useState('home');

        return (
            <div style={{ height: '100vh', position: 'relative' }}>
                <div style={{ padding: '20px', height: 'calc(100vh - 80px)', overflow: 'auto' }}>
                    <h2>배지가 있는 BottomNavigation</h2>
                    <p>각 아이템에 배지가 표시됩니다.</p>
                    <p>현재 활성 아이템: <strong>{activeItem}</strong></p>
                </div>
                <BottomNavigation
                    items={itemsWithBadges}
                    activeItemId={activeItem}
                    onItemClick={(item) => setActiveItem(item.id)}
                />
            </div>
        );
    },
};

export const Sizes: Story = {
    render: () => {
        const [activeItem, setActiveItem] = useState('home');

        return (
            <div style={{ height: '100vh', position: 'relative' }}>
                <div style={{ padding: '20px', height: 'calc(100vh - 200px)', overflow: 'auto' }}>
                    <h2>다양한 크기의 BottomNavigation</h2>
                    <p>Small, Medium, Large 크기를 비교해보세요.</p>
                </div>

                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}>
                    <BottomNavigation
                        items={defaultItems}
                        activeItemId={activeItem}
                        onItemClick={(item) => setActiveItem(item.id)}
                        size="s"
                        fixed={false}
                        style={{ borderBottom: '1px solid var(--db-border-base)' }}
                    />
                    <BottomNavigation
                        items={defaultItems}
                        activeItemId={activeItem}
                        onItemClick={(item) => setActiveItem(item.id)}
                        size="m"
                        fixed={false}
                        style={{ borderBottom: '1px solid var(--db-border-base)' }}
                    />
                    <BottomNavigation
                        items={defaultItems}
                        activeItemId={activeItem}
                        onItemClick={(item) => setActiveItem(item.id)}
                        size="l"
                        fixed={false}
                    />
                </div>
            </div>
        );
    },
};

export const BackgroundVariants: Story = {
    render: () => {
        const [activeItem, setActiveItem] = useState('home');

        return (
            <div style={{
                height: '100vh',
                position: 'relative',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '20px'
            }}>
                <div style={{
                    height: 'calc(100vh - 160px)',
                    overflow: 'auto',
                    color: 'white'
                }}>
                    <h2>다양한 배경 스타일</h2>
                    <p>Default, Glass, Transparent 스타일을 비교해보세요.</p>
                </div>

                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}>
                    <BottomNavigation
                        items={defaultItems}
                        activeItemId={activeItem}
                        onItemClick={(item) => setActiveItem(item.id)}
                        backgroundColor="default"
                        fixed={false}
                        style={{ borderBottom: '1px solid var(--db-border-base)' }}
                    />
                    <BottomNavigation
                        items={defaultItems}
                        activeItemId={activeItem}
                        onItemClick={(item) => setActiveItem(item.id)}
                        backgroundColor="glass"
                        fixed={false}
                        style={{ borderBottom: '1px solid var(--db-border-base)' }}
                    />
                    <BottomNavigation
                        items={defaultItems}
                        activeItemId={activeItem}
                        onItemClick={(item) => setActiveItem(item.id)}
                        backgroundColor="transparent"
                        fixed={false}
                    />
                </div>
            </div>
        );
    },
};

export const Interactive: Story = {
    render: () => {
        const [activeItem, setActiveItem] = useState('home');

        const handleItemClick = (item: any) => {
            setActiveItem(item.id);
            console.log('Clicked item:', item);
        };

        return (
            <div style={{ height: '100vh', position: 'relative' }}>
                <div style={{ padding: '20px', height: 'calc(100vh - 80px)', overflow: 'auto' }}>
                    <h2>인터랙티브 BottomNavigation</h2>
                    <p>아이템을 클릭하면 콘솔에 로그가 출력됩니다.</p>
                    <p>현재 활성 아이템: <strong>{activeItem}</strong></p>

                    <div style={{ marginTop: '20px' }}>
                        <button
                            onClick={() => setActiveItem('home')}
                            style={{ margin: '5px', padding: '8px 16px' }}
                        >
                            홈으로
                        </button>
                        <button
                            onClick={() => setActiveItem('search')}
                            style={{ margin: '5px', padding: '8px 16px' }}
                        >
                            검색으로
                        </button>
                        <button
                            onClick={() => setActiveItem('favorites')}
                            style={{ margin: '5px', padding: '8px 16px' }}
                        >
                            즐겨찾기로
                        </button>
                        <button
                            onClick={() => setActiveItem('profile')}
                            style={{ margin: '5px', padding: '8px 16px' }}
                        >
                            프로필로
                        </button>
                    </div>
                </div>
                <BottomNavigation
                    items={defaultItems}
                    activeItemId={activeItem}
                    onItemClick={handleItemClick}
                />
            </div>
        );
    },
};

export const ActiveIcons: Story = {
    render: () => {
        const [activeItem, setActiveItem] = useState('home');

        return (
            <div style={{ height: '100vh', position: 'relative' }}>
                <div style={{ padding: '20px', height: 'calc(100vh - 80px)', overflow: 'auto' }}>
                    <h2>활성화 아이콘이 있는 BottomNavigation</h2>
                    <p>아이템을 클릭하면 아이콘이 변경됩니다!</p>
                    <p>• 홈: HomeOutlineIcon → HomeFilledIcon</p>
                    <p>• 검색: SearchIcon → SearchFilledIcon</p>
                    <p>• 즐겨찾기: HeartIcon → HeartFilledIcon</p>
                    <p>• 프로필: UserIcon → UserFilledIcon</p>
                    <p>현재 활성 아이템: <strong>{activeItem}</strong></p>
                </div>
                <BottomNavigation
                    items={defaultItems}
                    activeItemId={activeItem}
                    onItemClick={(item) => setActiveItem(item.id)}
                />
            </div>
        );
    },
};

export const DisabledItems: Story = {
    render: () => {
        const [activeItem, setActiveItem] = useState('home');

        const itemsWithDisabled = [
            {
                id: 'home',
                icon: HomeOutlineIcon,
                activeIcon: HomeFilledIcon,
                label: '홈',
            },
            {
                id: 'search',
                icon: SearchIcon,
                activeIcon: SearchFilledIcon,
                label: '검색',
                disabled: true,
            },
            {
                id: 'favorites',
                icon: HeartIcon,
                activeIcon: HeartFilledIcon,
                label: '즐겨찾기',
            },
            {
                id: 'settings',
                icon: SettingsIcon,
                activeIcon: SettingsFilledIcon,
                label: '설정',
                disabled: true,
            },
        ];

        return (
            <div style={{ height: '100vh', position: 'relative' }}>
                <div style={{ padding: '20px', height: 'calc(100vh - 80px)', overflow: 'auto' }}>
                    <h2>비활성화된 아이템이 있는 BottomNavigation</h2>
                    <p>검색과 설정 아이템이 비활성화되어 있습니다.</p>
                    <p>현재 활성 아이템: <strong>{activeItem}</strong></p>
                </div>
                <BottomNavigation
                    items={itemsWithDisabled}
                    activeItemId={activeItem}
                    onItemClick={(item) => setActiveItem(item.id)}
                />
            </div>
        );
    },
};
