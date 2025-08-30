/**
 * MenuItem 컴포넌트 스토리
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MenuItem } from './MenuItem';
import {
    RocketIcon,
    UserIcon,
    SettingsIcon,
    BellIcon,
    MailIcon,
    DocumentationIcon,
    FolderIcon,
    StarIcon,
    HeartIcon,
    BookmarkIcon
} from '@designbase/icons';

const meta: Meta<typeof MenuItem> = {
    title: 'Components/MenuItem',
    component: MenuItem,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '네비게이션 메뉴의 개별 아이템을 표시하는 컴포넌트입니다. 인라인/블록 타입, 다양한 스타일, 아이콘, 차일드 메뉴를 지원합니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['inline', 'block'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
        },
        badgeColor: {
            control: { type: 'select' },
            options: ['primary', 'success', 'warning', 'danger', 'info', 'neutral'],
        },
        active: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        expandable: {
            control: { type: 'boolean' },
        },
        onClick: {
            action: 'clicked',
        },
        onChildClick: {
            action: 'child clicked',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleChildren = [
    {
        id: 'child-1',
        label: '서브 메뉴 1',
        icon: DocumentationIcon,
        active: false,
    },
    {
        id: 'child-2',
        label: '서브 메뉴 2',
        icon: FolderIcon,
        active: true,
        badge: 3,
        badgeColor: 'success' as const,
    },
    {
        id: 'child-3',
        label: '서브 메뉴 3',
        icon: StarIcon,
        disabled: true,
    },
];

export const Default: Story = {
    args: {
        id: 'menu-item-1',
        label: '메뉴 아이템',
        icon: RocketIcon,
    },
};

export const WithIconColors: Story = {
    args: {
        id: 'menu-item-1',
        label: '아이콘 컬러 예시',
        icon: RocketIcon,
        variant: 'primary',
    },
};

export const DropdownStyle: Story = {
    render: () => {
        const [isExpanded, setIsExpanded] = useState(false);

        const handleClick = (item: any) => {
            console.log('Dropdown clicked:', item);
            if (item.subItems && item.subItems.length > 0) {
                setIsExpanded(!isExpanded);
            }
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px', position: 'relative' }}>
                <h3>드롭다운 스타일 (absolute로 떠있음)</h3>
                <MenuItem
                    id="dropdown-menu"
                    label="드롭다운 메뉴"
                    icon={RocketIcon}
                    style="dropdown"
                    subItems={sampleChildren}
                    expandable={true}
                    expanded={isExpanded}
                    onClick={handleClick}
                />
                <p>현재 상태: {isExpanded ? '확장됨' : '축소됨'}</p>
            </div>
        );
    },
};

export const AccordionStyle: Story = {
    render: () => {
        const [isExpanded, setIsExpanded] = useState(false);

        const handleClick = (item: any) => {
            console.log('Accordion clicked:', item);
            if (item.subItems && item.subItems.length > 0) {
                setIsExpanded(!isExpanded);
            }
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
                <h3>아코디언 스타일 (아래로 밀어내는 형태)</h3>
                <MenuItem
                    id="accordion-menu"
                    label="아코디언 메뉴"
                    icon={FolderIcon}
                    style="accordion"
                    subItems={sampleChildren}
                    expandable={true}
                    expanded={isExpanded}
                    onClick={handleClick}
                />
                <p>현재 상태: {isExpanded ? '확장됨' : '축소됨'}</p>
            </div>
        );
    },
};

export const MultiDepth: Story = {
    args: {
        id: 'menu-item-1',
        label: '다중 깊이 메뉴',
        icon: RocketIcon,
        style: 'accordion',
        subItems: [
            {
                id: 'child-1',
                label: '1뎁스 메뉴',
                icon: DocumentationIcon,
                subItems: [
                    {
                        id: 'child-1-1',
                        label: '2뎁스 메뉴',
                        icon: FolderIcon,
                        subItems: [
                            {
                                id: 'child-1-1-1',
                                label: '3뎁스 메뉴',
                                icon: StarIcon,
                            }
                        ]
                    }
                ]
            }
        ],
        expandable: true,
    },
};

export const WithBadge: Story = {
    args: {
        id: 'menu-item-2',
        label: '알림',
        icon: BellIcon,
        badge: 3,
        badgeColor: 'danger',
    },
};

export const Active: Story = {
    args: {
        id: 'menu-item-3',
        label: '활성 메뉴',
        icon: UserIcon,
        active: true,
    },
};

export const Disabled: Story = {
    args: {
        id: 'menu-item-4',
        label: '비활성 메뉴',
        icon: SettingsIcon,
        disabled: true,
    },
};

export const WithChildren: Story = {
    args: {
        id: 'menu-item-5',
        label: '차일드 메뉴',
        icon: FolderIcon,
        subItems: sampleChildren,
        expandable: true,
    },
};

export const StyleComparison: Story = {
    render: () => {
        const [dropdownExpanded, setDropdownExpanded] = useState(false);
        const [accordionExpanded, setAccordionExpanded] = useState(false);

        const handleDropdownClick = (item: any) => {
            if (item.subItems && item.subItems.length > 0) {
                setDropdownExpanded(!dropdownExpanded);
            }
        };

        const handleAccordionClick = (item: any) => {
            if (item.subItems && item.subItems.length > 0) {
                setAccordionExpanded(!accordionExpanded);
            }
        };

        return (
            <div style={{ display: 'flex', gap: '32px', padding: '20px' }}>
                {/* 드롭다운 스타일 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px', position: 'relative' }}>
                    <h3>드롭다운 스타일</h3>
                    <p style={{ fontSize: '12px', color: '#666' }}>absolute로 떠있는 형태</p>
                    <MenuItem
                        id="dropdown-menu"
                        label="드롭다운 메뉴"
                        icon={RocketIcon}
                        style="dropdown"
                        subItems={sampleChildren}
                        expandable={true}
                        expanded={dropdownExpanded}
                        onClick={handleDropdownClick}
                    />
                    <p>상태: {dropdownExpanded ? '확장됨' : '축소됨'}</p>
                </div>

                {/* 아코디언 스타일 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
                    <h3>아코디언 스타일</h3>
                    <p style={{ fontSize: '12px', color: '#666' }}>아래로 밀어내는 형태</p>
                    <MenuItem
                        id="accordion-menu"
                        label="아코디언 메뉴"
                        icon={FolderIcon}
                        style="accordion"
                        subItems={sampleChildren}
                        expandable={true}
                        expanded={accordionExpanded}
                        onClick={handleAccordionClick}
                    />
                    <p>상태: {accordionExpanded ? '확장됨' : '축소됨'}</p>
                </div>
            </div>
        );
    },
};



export const Types: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h3>Inline Type</h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <MenuItem
                        id="inline-1"
                        label="홈"
                        icon={RocketIcon}
                        type="inline"
                        onClick={() => console.log('Home clicked')}
                    />
                    <MenuItem
                        id="inline-2"
                        label="사용자"
                        icon={UserIcon}
                        type="inline"
                        onClick={() => console.log('User clicked')}
                    />
                    <MenuItem
                        id="inline-3"
                        label="설정"
                        icon={SettingsIcon}
                        type="inline"
                        onClick={() => console.log('Settings clicked')}
                    />
                </div>
            </div>
            <div>
                <h3>Block Type</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
                    <MenuItem
                        id="block-1"
                        label="홈"
                        icon={RocketIcon}
                        type="block"
                        onClick={() => console.log('Home clicked')}
                    />
                    <MenuItem
                        id="block-2"
                        label="사용자"
                        icon={UserIcon}
                        type="block"
                        onClick={() => console.log('User clicked')}
                    />
                    <MenuItem
                        id="block-3"
                        label="설정"
                        icon={SettingsIcon}
                        type="block"
                        onClick={() => console.log('Settings clicked')}
                    />
                </div>
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h3>Small</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
                    <MenuItem
                        id="small-1"
                        label="홈"
                        icon={RocketIcon}
                        size="sm"
                        onClick={() => console.log('Home clicked')}
                    />
                    <MenuItem
                        id="small-2"
                        label="사용자"
                        icon={UserIcon}
                        size="sm"
                        onClick={() => console.log('User clicked')}
                    />
                </div>
            </div>
            <div>
                <h3>Medium</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
                    <MenuItem
                        id="medium-1"
                        label="홈"
                        icon={RocketIcon}
                        size="md"
                        onClick={() => console.log('Home clicked')}
                    />
                    <MenuItem
                        id="medium-2"
                        label="사용자"
                        icon={UserIcon}
                        size="md"
                        onClick={() => console.log('User clicked')}
                    />
                </div>
            </div>
            <div>
                <h3>Large</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
                    <MenuItem
                        id="large-1"
                        label="홈"
                        icon={RocketIcon}
                        size="lg"
                        onClick={() => console.log('Home clicked')}
                    />
                    <MenuItem
                        id="large-2"
                        label="사용자"
                        icon={UserIcon}
                        size="lg"
                        onClick={() => console.log('User clicked')}
                    />
                </div>
            </div>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h3>Variants</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
                    <MenuItem
                        id="default"
                        label="기본"
                        icon={RocketIcon}
                        variant="default"
                        onClick={() => console.log('Default clicked')}
                    />
                    <MenuItem
                        id="primary"
                        label="주요"
                        icon={UserIcon}
                        variant="primary"
                        onClick={() => console.log('Primary clicked')}
                    />
                    <MenuItem
                        id="success"
                        label="성공"
                        icon={StarIcon}
                        variant="success"
                        onClick={() => console.log('Success clicked')}
                    />
                    <MenuItem
                        id="warning"
                        label="경고"
                        icon={BellIcon}
                        variant="warning"
                        onClick={() => console.log('Warning clicked')}
                    />
                    <MenuItem
                        id="danger"
                        label="위험"
                        icon={HeartIcon}
                        variant="danger"
                        onClick={() => console.log('Danger clicked')}
                    />
                    <MenuItem
                        id="info"
                        label="정보"
                        icon={MailIcon}
                        variant="info"
                        onClick={() => console.log('Info clicked')}
                    />
                </div>
            </div>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [activeItem, setActiveItem] = useState<string>('home');
        const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

        const handleItemClick = (item: any) => {
            if (item.children && item.children.length > 0) {
                const newExpanded = new Set(expandedItems);
                if (newExpanded.has(item.id)) {
                    newExpanded.delete(item.id);
                } else {
                    newExpanded.add(item.id);
                }
                setExpandedItems(newExpanded);
            } else {
                setActiveItem(item.id);
            }
            console.log('Item clicked:', item);
        };

        const handleChildClick = (child: any) => {
            console.log('Child clicked:', child);
        };

        const menuItems = [
            {
                id: 'home',
                label: '홈',
                icon: RocketIcon,
                active: activeItem === 'home',
            },
            {
                id: 'user',
                label: '사용자',
                icon: UserIcon,
                active: activeItem === 'user',
            },
            {
                id: 'settings',
                label: '설정',
                icon: SettingsIcon,
                active: activeItem === 'settings',
                subItems: sampleChildren,
                expandable: true,
                expanded: expandedItems.has('settings'),
            },
            {
                id: 'notifications',
                label: '알림',
                icon: BellIcon,
                active: activeItem === 'notifications',
                badge: 5,
                badgeColor: 'danger' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.id}
                        {...item}
                        onClick={handleItemClick}
                        onChildClick={handleChildClick}
                    />
                ))}
            </div>
        );
    },
};

export const ComplexMenu: Story = {
    render: () => {
        const [activeItem, setActiveItem] = useState<string>('dashboard');
        const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['projects']));

        const handleItemClick = (item: any) => {
            if (item.subItems && item.subItems.length > 0) {
                const newExpanded = new Set(expandedItems);
                if (newExpanded.has(item.id)) {
                    newExpanded.delete(item.id);
                } else {
                    newExpanded.add(item.id);
                }
                setExpandedItems(newExpanded);
            } else {
                setActiveItem(item.id);
            }
        };

        const complexMenuItems = [
            {
                id: 'dashboard',
                label: '대시보드',
                icon: RocketIcon,
                active: activeItem === 'dashboard',
            },
            {
                id: 'projects',
                label: '프로젝트',
                icon: FolderIcon,
                active: activeItem === 'projects',
                subItems: [
                    {
                        id: 'project-1',
                        label: '웹사이트 리뉴얼',
                        icon: DocumentationIcon,
                        active: false,
                        badge: '진행중',
                        badgeColor: 'warning' as const,
                    },
                    {
                        id: 'project-2',
                        label: '모바일 앱 개발',
                        icon: DocumentationIcon,
                        active: false,
                        badge: '완료',
                        badgeColor: 'success' as const,
                    },
                    {
                        id: 'project-3',
                        label: '데이터 분석',
                        icon: DocumentationIcon,
                        active: false,
                        badge: 'New',
                        badgeColor: 'info' as const,
                    },
                ],
                expandable: true,
                expanded: expandedItems.has('projects'),
            },
            {
                id: 'team',
                label: '팀',
                icon: UserIcon,
                active: activeItem === 'team',
                subItems: [
                    {
                        id: 'team-1',
                        label: '개발팀',
                        icon: UserIcon,
                        active: false,
                    },
                    {
                        id: 'team-2',
                        label: '디자인팀',
                        icon: UserIcon,
                        active: false,
                    },
                    {
                        id: 'team-3',
                        label: '마케팅팀',
                        icon: UserIcon,
                        active: false,
                        disabled: true,
                    },
                ],
                expandable: true,
                expanded: expandedItems.has('team'),
            },
            {
                id: 'notifications',
                label: '알림',
                icon: BellIcon,
                active: activeItem === 'notifications',
                badge: 12,
                badgeColor: 'danger' as const,
            },
            {
                id: 'favorites',
                label: '즐겨찾기',
                icon: BookmarkIcon,
                active: activeItem === 'favorites',
                variant: 'warning' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
                {complexMenuItems.map((item) => (
                    <MenuItem
                        key={item.id}
                        {...item}
                        onClick={handleItemClick}
                    />
                ))}
            </div>
        );
    },
};


