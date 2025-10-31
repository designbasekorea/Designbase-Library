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
} from '@designbasekorea/icons';

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
            options: ['s', 'm', 'l'],
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
                        type="inline"
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
                        type="block"
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



export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3>Inline</h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <MenuItem id="inline-1" label="홈" icon={RocketIcon} type="inline" />
                    <MenuItem id="inline-2" label="사용자" icon={UserIcon} type="inline" />
                    <MenuItem id="inline-3" label="설정" icon={SettingsIcon} type="inline" />
                </div>
            </div>
            <div>
                <h3>Block</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
                    <MenuItem id="block-1" label="홈" icon={RocketIcon} type="block" />
                    <MenuItem id="block-2" label="사용자" icon={UserIcon} type="block" />
                    <MenuItem id="block-3" label="설정" icon={SettingsIcon} type="block" />
                </div>
            </div>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3>Small</h3>
                <MenuItem id="small-1" label="홈" icon={RocketIcon} size="s" />
            </div>
            <div>
                <h3>Medium</h3>
                <MenuItem id="medium-1" label="홈" icon={RocketIcon} size="m" />
            </div>
            <div>
                <h3>Large</h3>
                <MenuItem id="large-1" label="홈" icon={RocketIcon} size="l" />
            </div>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
            <MenuItem id="default" label="기본" icon={RocketIcon} variant="default" />
            <MenuItem id="primary" label="주요" icon={UserIcon} variant="primary" />
            <MenuItem id="success" label="성공" icon={StarIcon} variant="success" />
            <MenuItem id="warning" label="경고" icon={BellIcon} variant="warning" />
            <MenuItem id="danger" label="위험" icon={HeartIcon} variant="danger" />
            <MenuItem id="info" label="정보" icon={MailIcon} variant="info" />
        </div>
    ),
};

export const WithSubItems: Story = {
    render: () => {
        const [accordionExpanded, setAccordionExpanded] = useState(false);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                    <h3>Accordion (아래로 밀어내는 형태)</h3>
                    <div style={{ maxWidth: '300px' }}>
                        <MenuItem
                            id="accordion-menu"
                            label="아코디언 메뉴"
                            icon={FolderIcon}
                            type="block"
                            style="accordion"
                            subItems={sampleChildren}
                            expandable={true}
                            expanded={accordionExpanded}
                            onClick={() => setAccordionExpanded(!accordionExpanded)}
                        />
                    </div>
                </div>
            </div>
        );
    },
};

export const WithBadgeAndStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
            <MenuItem id="normal" label="일반 메뉴" icon={RocketIcon} type="block" />
            <MenuItem id="with-badge" label="알림" icon={BellIcon} badge={5} badgeColor="danger" type="block" />
            <MenuItem id="active" label="활성 메뉴" icon={UserIcon} active={true} type="block" />
            <MenuItem id="disabled" label="비활성 메뉴" icon={SettingsIcon} disabled={true} type="block" />
        </div>
    ),
};


