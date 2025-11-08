import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FigmaPageHead } from './FigmaPageHead';
import { Button } from '@designbasekorea/ui';
import { SettingsIcon, EditIcon, TrashIcon, DownloadIcon } from '@designbasekorea/icons';

const meta: Meta<typeof FigmaPageHead> = {
    title: 'Figma UI/FigmaPageHead',
    component: FigmaPageHead,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    '플러그인 내에서 특정 페이지로 이동할 때 사용하는 페이지 헤더 컴포넌트입니다. 뒤로가기 버튼, 페이지 제목/설명, 액션 버튼들을 포함할 수 있습니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: '페이지 제목',
        },
        description: {
            control: 'text',
            description: '페이지 설명 (선택사항)',
        },
        onBack: {
            action: 'back-clicked',
            description: '뒤로가기 핸들러',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onBack: () => console.log('뒤로가기 클릭'),
        title: '타이포그래피 스타일',
        description: '12개의 텍스트 스타일이 있습니다',
    },
};

export const WithoutDescription: Story = {
    args: {
        onBack: () => console.log('뒤로가기 클릭'),
        title: '설정',
    },
};

export const WithActions: Story = {
    args: {
        onBack: () => console.log('뒤로가기 클릭'),
        title: '컴포넌트 라이브러리',
        description: '24개의 컴포넌트가 있습니다',
        actions: [
            <Button
                key="download"
                variant="tertiary"
                size="s"
                iconOnly
                aria-label="다운로드"
                onPress={() => console.log('다운로드 클릭')}
            >
                <DownloadIcon size={16} />
            </Button>,
        ],
    },
};

export const WithMoreActions: Story = {
    args: {
        onBack: () => console.log('뒤로가기 클릭'),
        title: '디자인 토큰',
        description: '색상, 타이포그래피, 간격 등',
        moreActions: [
            {
                id: 'export',
                label: '내보내기',
                onClick: () => console.log('내보내기 클릭'),
            },
            {
                id: 'duplicate',
                label: '복제',
                onClick: () => console.log('복제 클릭'),
            },
            {
                id: 'delete',
                label: '삭제',
                onClick: () => console.log('삭제 클릭'),
            },
        ],
    },
};

export const WithBothActions: Story = {
    args: {
        onBack: () => console.log('뒤로가기 클릭'),
        title: '레이어 스타일',
        description: '8개의 레이어 스타일이 있습니다',
        actions: [
            <Button
                key="edit"
                variant="tertiary"
                size="s"
                iconOnly
                aria-label="편집"
                onPress={() => console.log('편집 클릭')}
            >
                <EditIcon size={16} />
            </Button>,
        ],
        moreActions: [
            {
                id: 'settings',
                label: '설정',
                onClick: () => console.log('설정 클릭'),
            },
            {
                id: 'export',
                label: '내보내기',
                onClick: () => console.log('내보내기 클릭'),
            },
            {
                id: 'delete',
                label: '삭제',
                onClick: () => console.log('삭제 클릭'),
            },
        ],
    },
};

export const WithMultipleActions: Story = {
    args: {
        onBack: () => console.log('뒤로가기 클릭'),
        title: '컬러 팔레트',
        description: '16개의 색상이 있습니다',
        actions: [
            <Button
                key="settings"
                variant="tertiary"
                size="s"
                iconOnly
                aria-label="설정"
                onPress={() => console.log('설정 클릭')}
            >
                <SettingsIcon size={16} />
            </Button>,
            <Button
                key="edit"
                variant="tertiary"
                size="s"
                iconOnly
                aria-label="편집"
                onPress={() => console.log('편집 클릭')}
            >
                <EditIcon size={16} />
            </Button>,
        ],
        moreActions: [
            {
                id: 'import',
                label: '가져오기',
                onClick: () => console.log('가져오기 클릭'),
            },
            {
                id: 'export',
                label: '내보내기',
                onClick: () => console.log('내보내기 클릭'),
            },
            {
                id: 'reset',
                label: '초기화',
                onClick: () => console.log('초기화 클릭'),
            },
        ],
    },
};

export const WithLongTitle: Story = {
    args: {
        onBack: () => console.log('뒤로가기 클릭'),
        title: '매우 긴 페이지 제목이 표시되는 경우 텍스트가 잘려서 표시됩니다',
        description: '매우 긴 설명 텍스트도 마찬가지로 잘려서 표시됩니다',
    },
};

export const WithI18nKeys: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
                    I18n 키 사용 (t 함수 없음)
                </h3>
                <FigmaPageHead
                    onBack={() => console.log('뒤로가기 클릭')}
                    title={{ key: 'page.typography_title' }}
                    description={{ key: 'page.typography_description' }}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
                    I18n 키 사용 (t 함수 있음)
                </h3>
                <FigmaPageHead
                    onBack={() => console.log('뒤로가기 클릭')}
                    title={{ key: 'page.typography_title' }}
                    description={{ key: 'page.typography_description' }}
                    moreActions={[
                        {
                            id: 'export',
                            label: { key: 'action.export' },
                            onClick: () => console.log('내보내기 클릭'),
                        },
                        {
                            id: 'delete',
                            label: { key: 'action.delete' },
                            onClick: () => console.log('삭제 클릭'),
                        },
                    ]}
                    t={(key) => {
                        const translations: Record<string, string> = {
                            'page.typography_title': '타이포그래피 스타일',
                            'page.typography_description': '12개의 텍스트 스타일이 있습니다',
                            'action.export': '내보내기',
                            'action.delete': '삭제',
                        };
                        return translations[key] || key;
                    }}
                />
            </div>
        </div>
    ),
};

export const InContainer: Story = {
    render: () => (
        <div style={{ border: '1px solid var(--db-border-base)', borderRadius: 'var(--db-radius-m)' }}>
            <FigmaPageHead
                onBack={() => console.log('뒤로가기 클릭')}
                title="컴포넌트 상세"
                description="이 컴포넌트에 대한 상세 정보를 확인할 수 있습니다"
                actions={[
                    <Button
                        key="download"
                        variant="tertiary"
                        size="s"
                        iconOnly
                        aria-label="다운로드"
                        onPress={() => console.log('다운로드 클릭')}
                    >
                        <DownloadIcon size={16} />
                    </Button>,
                ]}
                moreActions={[
                    {
                        id: 'edit',
                        label: '편집',
                        onClick: () => console.log('편집 클릭'),
                    },
                    {
                        id: 'duplicate',
                        label: '복제',
                        onClick: () => console.log('복제 클릭'),
                    },
                    {
                        id: 'delete',
                        label: '삭제',
                        onClick: () => console.log('삭제 클릭'),
                    },
                ]}
            />
            <div style={{ padding: '20px' }}>
                <p>페이지 컨텐츠 영역입니다.</p>
            </div>
        </div>
    ),
};

