import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ContextMenu } from './ContextMenu';
import { useContextMenu } from './useContextMenu';
import {
    UserIcon,
    SettingsIcon,
    HelpIcon,
    EditIcon,
    DeleteIcon,
    CopyIcon,
    DownloadIcon,
    ShareAltIcon,
    StarIcon,
    HeartIcon,
    BookmarkIcon
} from '@designbase/icons';

const meta: Meta<typeof ContextMenu> = {
    title: 'Components/ContextMenu',
    component: ContextMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    {
        id: 'view',
        label: '보기',
        icon: UserIcon,
        onClick: () => console.log('보기 클릭'),
    },
    {
        id: 'edit',
        label: '편집',
        icon: EditIcon,
        onClick: () => console.log('편집 클릭'),
    },
    {
        id: 'copy',
        label: '복사',
        icon: CopyIcon,
        onClick: () => console.log('복사 클릭'),
    },
    {
        id: 'divider1',
        isDivider: true,
    },
    {
        id: 'share',
        label: '공유',
        icon: ShareAltIcon,
        subItems: [
            {
                id: 'email',
                label: '이메일로 공유',
                onClick: () => console.log('이메일 공유 클릭'),
            },
            {
                id: 'link',
                label: '링크 복사',
                onClick: () => console.log('링크 복사 클릭'),
            },
            {
                id: 'social',
                label: '소셜 미디어',
                subItems: [
                    {
                        id: 'facebook',
                        label: 'Facebook',
                        onClick: () => console.log('Facebook 공유 클릭'),
                    },
                    {
                        id: 'twitter',
                        label: 'Twitter',
                        onClick: () => console.log('Twitter 공유 클릭'),
                    },
                    {
                        id: 'linkedin',
                        label: 'LinkedIn',
                        onClick: () => console.log('LinkedIn 공유 클릭'),
                    },
                ],
            },
        ],
    },
    {
        id: 'favorites',
        label: '즐겨찾기',
        icon: StarIcon,
        subItems: [
            {
                id: 'add-favorite',
                label: '즐겨찾기 추가',
                icon: HeartIcon,
                onClick: () => console.log('즐겨찾기 추가 클릭'),
            },
            {
                id: 'bookmark',
                label: '북마크',
                icon: BookmarkIcon,
                onClick: () => console.log('북마크 클릭'),
            },
        ],
    },
    {
        id: 'divider2',
        isDivider: true,
    },
    {
        id: 'download',
        label: '다운로드',
        icon: DownloadIcon,
        onClick: () => console.log('다운로드 클릭'),
    },
    {
        id: 'delete',
        label: '삭제',
        icon: DeleteIcon,
        variant: 'danger' as const,
        onClick: () => console.log('삭제 클릭'),
    },
];

const fileItems = [
    {
        id: 'open',
        label: '열기',
        onClick: () => console.log('파일 열기 클릭'),
    },
    {
        id: 'open-with',
        label: '다른 프로그램으로 열기',
        subItems: [
            {
                id: 'notepad',
                label: '메모장',
                onClick: () => console.log('메모장으로 열기 클릭'),
            },
            {
                id: 'word',
                label: 'Microsoft Word',
                onClick: () => console.log('Word로 열기 클릭'),
            },
            {
                id: 'excel',
                label: 'Microsoft Excel',
                onClick: () => console.log('Excel로 열기 클릭'),
            },
        ],
    },
    {
        id: 'divider1',
        isDivider: true,
    },
    {
        id: 'cut',
        label: '잘라내기',
        onClick: () => console.log('잘라내기 클릭'),
    },
    {
        id: 'copy',
        label: '복사',
        onClick: () => console.log('복사 클릭'),
    },
    {
        id: 'paste',
        label: '붙여넣기',
        icon: CopyIcon,
        onClick: () => console.log('붙여넣기 클릭'),
    },
    {
        id: 'divider2',
        isDivider: true,
    },
    {
        id: 'rename',
        label: '이름 바꾸기',
        onClick: () => console.log('이름 바꾸기 클릭'),
    },
    {
        id: 'properties',
        label: '속성',
        onClick: () => console.log('속성 클릭'),
    },
    {
        id: 'divider3',
        isDivider: true,
    },
    {
        id: 'delete',
        label: '삭제',
        variant: 'danger' as const,
        onClick: () => console.log('삭제 클릭'),
    },
];

export const Default: Story = {
    render: () => {
        const { isOpen, x, y, handleContextMenu, handleClose } = useContextMenu();

        return (
            <div style={{ padding: '100px', textAlign: 'center' }}>
                <div
                    style={{
                        width: '300px',
                        height: '200px',
                        border: '2px dashed #ccc',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        userSelect: 'none',
                    }}
                    onContextMenu={handleContextMenu}
                >
                    <p>이 영역에서 우클릭하세요</p>
                </div>

                <ContextMenu
                    items={sampleItems}
                    open={isOpen}
                    x={x}
                    y={y}
                    onClose={handleClose}
                />
            </div>
        );
    },
};

export const FileContextMenu: Story = {
    render: () => {
        const { isOpen, x, y, handleContextMenu, handleClose } = useContextMenu();

        return (
            <div style={{ padding: '100px', textAlign: 'center' }}>
                <div
                    style={{
                        width: '200px',
                        height: '150px',
                        border: '2px dashed #ccc',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        userSelect: 'none',
                    }}
                    onContextMenu={handleContextMenu}
                >
                    <p>파일에서 우클릭하세요</p>
                </div>

                <ContextMenu
                    items={fileItems}
                    open={isOpen}
                    x={x}
                    y={y}
                    onClose={handleClose}
                />
            </div>
        );
    },
};

export const DisabledItems: Story = {
    render: () => {
        const { isOpen, x, y, handleContextMenu, handleClose } = useContextMenu();

        const disabledItems = [
            {
                id: 'enabled',
                label: '활성화된 항목',
                onClick: () => console.log('활성화된 항목 클릭'),
            },
            {
                id: 'disabled',
                label: '비활성화된 항목',
                disabled: true,
                onClick: () => console.log('이것은 실행되지 않습니다'),
            },
            {
                id: 'divider',
                isDivider: true,
            },
            {
                id: 'another-enabled',
                label: '또 다른 활성화된 항목',
                onClick: () => console.log('또 다른 활성화된 항목 클릭'),
            },
        ];

        return (
            <div style={{ padding: '100px', textAlign: 'center' }}>
                <div
                    style={{
                        width: '300px',
                        height: '200px',
                        border: '2px dashed #ccc',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        userSelect: 'none',
                    }}
                    onContextMenu={handleContextMenu}
                >
                    <p>비활성화된 항목이 있는 메뉴를 확인하세요</p>
                </div>

                <ContextMenu
                    items={disabledItems}
                    open={isOpen}
                    x={x}
                    y={y}
                    onClose={handleClose}
                />
            </div>
        );
    },
};

export const WithIcons: Story = {
    render: () => {
        const { isOpen, x, y, handleContextMenu, handleClose } = useContextMenu();

        const iconItems = [
            {
                id: 'user',
                label: '사용자 정보',
                icon: UserIcon,
                onClick: () => console.log('사용자 정보 클릭'),
            },
            {
                id: 'settings',
                label: '설정',
                icon: SettingsIcon,
                onClick: () => console.log('설정 클릭'),
            },
            {
                id: 'help',
                label: '도움말',
                icon: HelpIcon,
                onClick: () => console.log('도움말 클릭'),
            },
            {
                id: 'divider',
                isDivider: true,
            },
            {
                id: 'edit',
                label: '편집',
                icon: EditIcon,
                onClick: () => console.log('편집 클릭'),
            },
            {
                id: 'delete',
                label: '삭제',
                icon: DeleteIcon,
                variant: 'danger' as const,
                onClick: () => console.log('삭제 클릭'),
            },
        ];

        return (
            <div style={{ padding: '100px', textAlign: 'center' }}>
                <div
                    style={{
                        width: '300px',
                        height: '200px',
                        border: '2px dashed #ccc',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        userSelect: 'none',
                    }}
                    onContextMenu={handleContextMenu}
                >
                    <p>아이콘이 있는 메뉴를 확인하세요</p>
                </div>

                <ContextMenu
                    items={iconItems}
                    open={isOpen}
                    x={x}
                    y={y}
                    onClose={handleClose}
                />
            </div>
        );
    },
};
