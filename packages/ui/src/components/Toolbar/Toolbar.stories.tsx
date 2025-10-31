import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Toolbar } from './Toolbar';
import {
    BoldIcon,
    ItalicIcon,
    TextAlignLeftIcon,
    TextAlignCenterIcon,
    TextAlignRightIcon,
    ListUlIcon,
    GalleryIcon,
    LinkIcon,
    SettingsIcon,
    ChevronDownIcon
} from '@designbasekorea/icons';

const meta: Meta<typeof Toolbar> = {
    title: 'Components/Toolbar',
    component: Toolbar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'filled', 'ghost'],
        },
        position: {
            control: { type: 'select' },
            options: ['top', 'bottom', 'left', 'right', 'floating'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// @icons 패키지의 아이콘들을 사용합니다

// 기본 텍스트 편집기 툴바 아이템들
const textEditorItems = [
    {
        id: 'bold',
        type: 'button' as const,
        label: '굵게',
        icon: <BoldIcon size={16} />,
        onClick: fn(),
        tooltip: '굵게 (Ctrl+B)',
        group: 'formatting',
    },
    {
        id: 'italic',
        type: 'button' as const,
        label: '기울임',
        icon: <ItalicIcon size={16} />,
        onClick: fn(),
        tooltip: '기울임 (Ctrl+I)',
        group: 'formatting',
    },
    {
        id: 'separator1',
        type: 'separator' as const,
        group: 'formatting',
    },
    {
        id: 'align',
        type: 'dropdown' as const,
        label: '정렬',
        icon: <TextAlignLeftIcon size={16} />,
        options: [
            { label: '왼쪽 정렬', value: 'left', icon: <TextAlignLeftIcon size={16} /> },
            { label: '가운데 정렬', value: 'center', icon: <TextAlignCenterIcon size={16} /> },
            { label: '오른쪽 정렬', value: 'right', icon: <TextAlignRightIcon size={16} /> },
        ],
        selectedValue: 'left',
        onOptionChange: fn(),
        tooltip: '텍스트 정렬',
        group: 'alignment',
    },
    {
        id: 'list',
        type: 'button' as const,
        label: '목록',
        icon: <ListUlIcon size={16} />,
        onClick: fn(),
        tooltip: '목록 만들기',
        group: 'insert',
    },
    {
        id: 'image',
        type: 'button' as const,
        label: '이미지',
        icon: <GalleryIcon size={16} />,
        onClick: fn(),
        tooltip: '이미지 삽입',
        group: 'insert',
    },
    {
        id: 'link',
        type: 'button' as const,
        label: '링크',
        icon: <LinkIcon size={16} />,
        onClick: fn(),
        tooltip: '링크 삽입',
        group: 'insert',
    },
];

// 간단한 툴바 아이템들
const simpleItems = [
    {
        id: 'save',
        type: 'button' as const,
        label: '저장',
        onClick: fn(),
    },
    {
        id: 'undo',
        type: 'button' as const,
        label: '실행 취소',
        onClick: fn(),
    },
    {
        id: 'redo',
        type: 'button' as const,
        label: '다시 실행',
        onClick: fn(),
    },
];

// 아이콘만 있는 툴바 아이템들
const iconOnlyItems = [
    {
        id: 'bold',
        type: 'button' as const,
        icon: <BoldIcon size={16} />,
        onClick: fn(),
        tooltip: '굵게',
    },
    {
        id: 'italic',
        type: 'button' as const,
        icon: <ItalicIcon size={16} />,
        onClick: fn(),
        tooltip: '기울임',
    },
    {
        id: 'separator1',
        type: 'separator' as const,
    },
    {
        id: 'settings',
        type: 'button' as const,
        icon: <SettingsIcon size={16} />,
        onClick: fn(),
        tooltip: '설정',
    },
];

export const Default: Story = {
    args: {
        items: simpleItems,
        size: 'm',
        variant: 'default',
    },
};

export const TextEditor: Story = {
    args: {
        items: textEditorItems,
        size: 'm',
        variant: 'default',
        fullWidth: true,
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h3>작은 크기</h3>
                <Toolbar items={simpleItems} size="s" />
            </div>

            <div>
                <h3>중간 크기</h3>
                <Toolbar items={simpleItems} size="m" />
            </div>

            <div>
                <h3>큰 크기</h3>
                <Toolbar items={simpleItems} size="l" />
            </div>
        </div>
    ),
};

export const DifferentVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h3>기본 스타일</h3>
                <Toolbar items={simpleItems} variant="default" />
            </div>

            <div>
                <h3>아웃라인 스타일</h3>
                <Toolbar items={simpleItems} variant="outlined" />
            </div>

            <div>
                <h3>채워진 스타일</h3>
                <Toolbar items={simpleItems} variant="filled" />
            </div>

            <div>
                <h3>고스트 스타일</h3>
                <Toolbar items={simpleItems} variant="ghost" />
            </div>
        </div>
    ),
};

export const IconOnly: Story = {
    args: {
        items: iconOnlyItems,
        size: 'md',
        variant: 'default',
    },
};

export const WithDropdown: Story = {
    args: {
        items: textEditorItems,
        size: 'md',
        variant: 'default',
    },
};

export const WithActiveState: Story = {
    render: () => {
        const [activeItems, setActiveItems] = React.useState<Set<string>>(new Set(['bold']));

        const itemsWithActive = textEditorItems.map(item => ({
            ...item,
            active: activeItems.has(item.id),
            onClick: () => {
                if (item.type === 'button') {
                    const newActiveItems = new Set(activeItems);
                    if (newActiveItems.has(item.id)) {
                        newActiveItems.delete(item.id);
                    } else {
                        newActiveItems.add(item.id);
                    }
                    setActiveItems(newActiveItems);
                }
            },
        }));

        return <Toolbar items={itemsWithActive} size="m" />;
    },
};

export const WithDisabledItems: Story = {
    render: () => {
        const itemsWithDisabled = textEditorItems.map((item, index) => ({
            ...item,
            disabled: index % 3 === 0, // 3의 배수 인덱스 아이템을 비활성화
        }));

        return <Toolbar items={itemsWithDisabled} size="m" />;
    },
};

export const WithCustomComponent: Story = {
    render: () => {
        const itemsWithCustom = [
            ...simpleItems,
            {
                id: 'custom',
                type: 'custom' as const,
                customComponent: (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '0 8px'
                    }}>
                        <span style={{ fontSize: '12px', color: '#666' }}>색상:</span>
                        <input
                            type="color"
                            defaultValue="#000000"
                            style={{ width: '24px', height: '24px', border: 'none', cursor: 'pointer' }}
                        />
                    </div>
                ),
            },
        ];

        return <Toolbar items={itemsWithCustom} size="m" />;
    },
};

export const Floating: Story = {
    args: {
        items: iconOnlyItems,
        size: 'md',
        variant: 'default',
        position: 'floating',
        shadow: true,
        rounded: true,
    },
    parameters: {
        layout: 'centered',
    },
};

export const FullWidth: Story = {
    args: {
        items: textEditorItems,
        size: 'md',
        variant: 'default',
        fullWidth: true,
    },
};

export const WithChildren: Story = {
    render: () => (
        <Toolbar items={simpleItems} size="m">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                color: '#666'
            }}>
                <span>문자 수: 1,234</span>
                <span>•</span>
                <span>단어 수: 123</span>
            </div>
        </Toolbar>
    ),
};

export const ResponsiveExample: Story = {
    args: {
        items: textEditorItems,
        size: 'l',
        fullWidth: true,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
