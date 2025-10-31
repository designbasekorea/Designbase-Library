import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SettingsModal, SettingsCategory } from './SettingsModal';
import { Button } from '@designbasekorea/ui';
import {
    HomeFilledIcon,
    UserFilledIcon,
    SettingsFilledIcon,
    BellFilledIcon,
    MailFilledIcon,
    FileBlankFilledIcon,
    FolderFilledIcon,
    GalleryFilledIcon,
    VideoFilledIcon,
    MusicFilledIcon
} from '@designbasekorea/icons';

const meta: Meta<typeof SettingsModal> = {
    title: 'Figma UI/SettingsModal',
    component: SettingsModal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCategories: SettingsCategory[] = [
    { id: 'home', title: '홈', enabled: true, order: 0, icon: <HomeFilledIcon size={16} /> },
    { id: 'profile', title: '프로필', enabled: true, order: 1, icon: <UserFilledIcon size={16} /> },
    { id: 'settings', title: '설정', enabled: true, order: 2, icon: <SettingsFilledIcon size={16} /> },
    { id: 'notifications', title: '알림', enabled: false, order: 3, icon: <BellFilledIcon size={16} /> },
    { id: 'messages', title: '메시지', enabled: false, order: 4, icon: <MailFilledIcon size={16} /> },
];

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [categories, setCategories] = useState(sampleCategories);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>설정 열기</Button>
                <SettingsModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    categories={categories}
                    onSave={(newCategories) => {
                        setCategories(newCategories);
                        console.log('Saved categories:', newCategories);
                    }}
                    onReset={() => {
                        setCategories(sampleCategories);
                        console.log('Reset to default');
                    }}
                />
            </>
        );
    },
};

export const WithManyCategories: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [categories, setCategories] = useState<SettingsCategory[]>([
            { id: 'home', title: '홈', enabled: true, order: 0, icon: <HomeFilledIcon size={16} /> },
            { id: 'profile', title: '프로필', enabled: true, order: 1, icon: <UserFilledIcon size={16} /> },
            { id: 'settings', title: '설정', enabled: true, order: 2, icon: <SettingsFilledIcon size={16} /> },
            { id: 'notifications', title: '알림', enabled: true, order: 3, icon: <BellFilledIcon size={16} /> },
            { id: 'messages', title: '메시지', enabled: true, order: 4, icon: <MailFilledIcon size={16} /> },
            { id: 'files', title: '파일', enabled: false, order: 5, icon: <FileBlankFilledIcon size={16} /> },
            { id: 'folders', title: '폴더', enabled: false, order: 6, icon: <FolderFilledIcon size={16} /> },
            { id: 'images', title: '이미지', enabled: false, order: 7, icon: <GalleryFilledIcon size={16} /> },
            { id: 'videos', title: '비디오', enabled: false, order: 8, icon: <VideoFilledIcon size={16} /> },
            { id: 'music', title: '음악', enabled: false, order: 9, icon: <MusicFilledIcon size={16} /> },
        ]);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>많은 카테고리 설정</Button>
                <SettingsModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    categories={categories}
                    onSave={(newCategories) => {
                        setCategories(newCategories);
                        console.log('Saved categories:', newCategories);
                    }}
                    onReset={() => {
                        setCategories(sampleCategories);
                        console.log('Reset to default');
                    }}
                    title="카테고리 설정"
                    description="드래그하여 순서를 변경하거나, 토글하여 카테고리를 표시/숨김 처리할 수 있습니다."
                />
            </>
        );
    },
};

export const WithoutIcons: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [categories, setCategories] = useState<SettingsCategory[]>([
            { id: 'category1', title: '카테고리 1', enabled: true, order: 0 },
            { id: 'category2', title: '카테고리 2', enabled: true, order: 1 },
            { id: 'category3', title: '카테고리 3', enabled: true, order: 2 },
            { id: 'category4', title: '카테고리 4', enabled: false, order: 3 },
            { id: 'category5', title: '카테고리 5', enabled: false, order: 4 },
        ]);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>아이콘 없는 설정</Button>
                <SettingsModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    categories={categories}
                    onSave={(newCategories) => {
                        setCategories(newCategories);
                        console.log('Saved categories:', newCategories);
                    }}
                />
            </>
        );
    },
};

export const FigmaLayerSettings: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [categories, setCategories] = useState<SettingsCategory[]>([
            { id: 'frames', title: '프레임', enabled: true, order: 0 },
            { id: 'components', title: '컴포넌트', enabled: true, order: 1 },
            { id: 'instances', title: '인스턴스', enabled: true, order: 2 },
            { id: 'groups', title: '그룹', enabled: true, order: 3 },
            { id: 'vectors', title: '벡터', enabled: false, order: 4 },
            { id: 'rectangles', title: '사각형', enabled: false, order: 5 },
            { id: 'ellipses', title: '원형', enabled: false, order: 6 },
            { id: 'polygons', title: '다각형', enabled: false, order: 7 },
            { id: 'stars', title: '별', enabled: false, order: 8 },
            { id: 'texts', title: '텍스트', enabled: false, order: 9 },
        ]);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>활성화된 레이어 타입:</h3>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                        {categories.filter(c => c.enabled).map(c => c.title).join(', ') || '없음'}
                    </div>
                </div>

                <Button onPress={() => setIsOpen(true)}>레이어 타입 설정</Button>

                <SettingsModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    categories={categories}
                    onSave={(newCategories) => {
                        setCategories(newCategories);
                        console.log('Saved layer types:', newCategories);
                    }}
                    onReset={() => {
                        const resetCategories = categories.map((cat, idx) => ({
                            ...cat,
                            enabled: idx < 4, // 처음 4개만 활성화
                            order: idx,
                        }));
                        setCategories(resetCategories);
                        console.log('Reset to default layer types');
                    }}
                    title="레이어 타입 설정"
                    description="표시할 레이어 타입을 선택하고 순서를 변경하세요."
                />
            </div>
        );
    },
};

export const IconLibrarySettings: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [categories, setCategories] = useState<SettingsCategory[]>([
            { id: 'ui', title: 'UI 아이콘', enabled: true, order: 0, icon: <SettingsFilledIcon size={16} /> },
            { id: 'communication', title: '커뮤니케이션', enabled: true, order: 1, icon: <MailFilledIcon size={16} /> },
            { id: 'media', title: '미디어', enabled: true, order: 2, icon: <GalleryFilledIcon size={16} /> },
            { id: 'file', title: '파일', enabled: true, order: 3, icon: <FileBlankFilledIcon size={16} /> },
            { id: 'social', title: '소셜', enabled: false, order: 4, icon: <UserFilledIcon size={16} /> },
            { id: 'navigation', title: '네비게이션', enabled: false, order: 5, icon: <HomeFilledIcon size={16} /> },
        ]);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>아이콘 라이브러리 설정</Button>
                <SettingsModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    categories={categories}
                    onSave={(newCategories) => {
                        setCategories(newCategories);
                        console.log('Saved icon library settings:', newCategories);
                    }}
                    onReset={() => {
                        setCategories(prev => prev.map((cat, idx) => ({
                            ...cat,
                            enabled: idx < 4,
                            order: idx,
                        })));
                    }}
                    title="아이콘 라이브러리 설정"
                    description="표시할 아이콘 카테고리를 선택하세요."
                />
            </>
        );
    },
};

export const WithoutReset: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [categories, setCategories] = useState(sampleCategories);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>초기화 버튼 없는 설정</Button>
                <SettingsModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    categories={categories}
                    onSave={(newCategories) => {
                        setCategories(newCategories);
                        console.log('Saved categories:', newCategories);
                    }}
                // onReset을 제공하지 않으면 초기화 버튼이 표시되지 않음
                />
            </>
        );
    },
};

