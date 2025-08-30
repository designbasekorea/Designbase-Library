import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Toolbar } from './Toolbar';

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
            options: ['sm', 'md', 'lg'],
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

// 기본 아이콘들
const BoldIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 2h5.5a3.5 3.5 0 0 1 0 7H4V2zm0 7h6a3.5 3.5 0 0 1 0 7H4V9z" fill="currentColor" />
    </svg>
);

const ItalicIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 2h4l-1 2H9.5L8.5 4H7l1 2H6V2zm-2 10h4l-1 2H3.5L2.5 14H1l1 2h2l-1-2h2z" fill="currentColor" />
    </svg>
);

const UnderlineIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 2v6a4 4 0 0 0 8 0V2h-2v6a2 2 0 0 1-4 0V2H4zM3 12h10v2H3v-2z" fill="currentColor" />
    </svg>
);

const AlignLeftIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h12v2H2V4zm0 4h8v2H2V8zm0 4h10v2H2v-2z" fill="currentColor" />
    </svg>
);

const AlignCenterIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h12v2H2V4zm1 4h10v2H3V8zm2 4h6v2H5v-2z" fill="currentColor" />
    </svg>
);

const AlignRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h12v2H2V4zm4 4h10v2H6V8zm2 4h8v2H8v-2z" fill="currentColor" />
    </svg>
);

const ListIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h2v2H2V4zm4 0h8v2H6V4zM2 7h2v2H2V7zm4 0h8v2H6V7zM2 10h2v2H2v-2zm4 0h8v2H6v-2z" fill="currentColor" />
    </svg>
);

const ImageIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 2h12v12H2V2zm2 2v8l3-3 2 2 3-3V4H4zm2 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
    </svg>
);

const LinkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M7.5 2.5a3.5 3.5 0 0 1 4.95 0l.707.707a3.5 3.5 0 0 1-4.95 4.95L7.5 8.207 6.793 7.5l.707-.707a3.5 3.5 0 0 1 0-4.95zM8.5 7.5l-.707.707a3.5 3.5 0 0 0 0 4.95l.707.707L9.207 13.5l-.707-.707a3.5 3.5 0 0 0-4.95 0L2.843 12.5a3.5 3.5 0 0 0 4.95 4.95L8.5 7.5z" fill="currentColor" />
    </svg>
);

const SettingsIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" fill="currentColor" />
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" fill="currentColor" />
    </svg>
);

// 기본 텍스트 편집기 툴바 아이템들
const textEditorItems = [
    {
        id: 'bold',
        type: 'button' as const,
        label: '굵게',
        icon: <BoldIcon />,
        onClick: fn(),
        tooltip: '굵게 (Ctrl+B)',
        group: 'formatting',
    },
    {
        id: 'italic',
        type: 'button' as const,
        label: '기울임',
        icon: <ItalicIcon />,
        onClick: fn(),
        tooltip: '기울임 (Ctrl+I)',
        group: 'formatting',
    },
    {
        id: 'underline',
        type: 'button' as const,
        label: '밑줄',
        icon: <UnderlineIcon />,
        onClick: fn(),
        tooltip: '밑줄 (Ctrl+U)',
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
        icon: <AlignLeftIcon />,
        options: [
            { label: '왼쪽 정렬', value: 'left', icon: <AlignLeftIcon /> },
            { label: '가운데 정렬', value: 'center', icon: <AlignCenterIcon /> },
            { label: '오른쪽 정렬', value: 'right', icon: <AlignRightIcon /> },
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
        icon: <ListIcon />,
        onClick: fn(),
        tooltip: '목록 만들기',
        group: 'insert',
    },
    {
        id: 'image',
        type: 'button' as const,
        label: '이미지',
        icon: <ImageIcon />,
        onClick: fn(),
        tooltip: '이미지 삽입',
        group: 'insert',
    },
    {
        id: 'link',
        type: 'button' as const,
        label: '링크',
        icon: <LinkIcon />,
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
        icon: <BoldIcon />,
        onClick: fn(),
        tooltip: '굵게',
    },
    {
        id: 'italic',
        type: 'button' as const,
        icon: <ItalicIcon />,
        onClick: fn(),
        tooltip: '기울임',
    },
    {
        id: 'underline',
        type: 'button' as const,
        icon: <UnderlineIcon />,
        onClick: fn(),
        tooltip: '밑줄',
    },
    {
        id: 'separator1',
        type: 'separator' as const,
    },
    {
        id: 'settings',
        type: 'button' as const,
        icon: <SettingsIcon />,
        onClick: fn(),
        tooltip: '설정',
    },
];

export const Default: Story = {
    args: {
        items: simpleItems,
        size: 'md',
        variant: 'default',
    },
};

export const TextEditor: Story = {
    args: {
        items: textEditorItems,
        size: 'md',
        variant: 'default',
        fullWidth: true,
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h3>작은 크기</h3>
                <Toolbar items={simpleItems} size="sm" />
            </div>

            <div>
                <h3>중간 크기</h3>
                <Toolbar items={simpleItems} size="md" />
            </div>

            <div>
                <h3>큰 크기</h3>
                <Toolbar items={simpleItems} size="lg" />
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

        return <Toolbar items={itemsWithActive} size="md" />;
    },
};

export const WithDisabledItems: Story = {
    render: () => {
        const itemsWithDisabled = textEditorItems.map((item, index) => ({
            ...item,
            disabled: index % 3 === 0, // 3의 배수 인덱스 아이템을 비활성화
        }));

        return <Toolbar items={itemsWithDisabled} size="md" />;
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

        return <Toolbar items={itemsWithCustom} size="md" />;
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
        <Toolbar items={simpleItems} size="md">
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
        size: 'lg',
        fullWidth: true,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
