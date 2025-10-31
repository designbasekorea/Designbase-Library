import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FigmaSidebar } from './FigmaSidebar';
import { FigmaSection } from '../FigmaSection/FigmaSection';
import { Input, Button } from '@designbasekorea/ui';
import { SettingsIcon, EditIcon, TrashIcon } from '@designbasekorea/icons';

const meta = {
    title: 'Figma UI/FigmaSidebar',
    component: FigmaSidebar,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    '피그마 플러그인에서 사용하는 네비게이션 사이드바 컴포넌트입니다. 스크롤 네비게이션과 자동 활성 섹션 감지 기능을 제공합니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        categories: {
            control: 'object',
            description: '카테고리 목록',
        },
        categoryGroups: {
            control: 'object',
            description: '카테고리 그룹',
        },
        activeCategory: {
            control: 'text',
            description: '활성 카테고리',
        },
        onCategoryClick: {
            action: 'category-clicked',
            description: '카테고리 클릭 핸들러',
        },
        headerHeight: {
            control: 'number',
            description: '헤더 높이 (스크롤 오프셋용)',
        },
        scrollPadding: {
            control: 'number',
            description: '스크롤 패딩',
        },
        width: {
            control: 'number',
            description: '사이드바 폭 (픽셀 단위)',
        },
    },
} satisfies Meta<typeof FigmaSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        categories: ['general', 'advanced', 'danger', 'settings', 'about'],
        activeCategory: 'general',
    },
};

export const WithGroups: Story = {
    args: {
        categories: ['general', 'advanced', 'danger', 'settings', 'about'],
        categoryGroups: {
            '기본 설정': ['general', 'settings'],
            '고급 설정': ['advanced', 'danger'],
            '정보': ['about'],
        },
        activeCategory: 'general',
    },
};

export const Interactive: Story = {
    render: () => {
        const [activeCategory, setActiveCategory] = useState('profile');

        const categories = [
            'profile',
            'appearance',
            'notifications',
            'privacy',
            'security',
            'api',
            'billing',
            'team',
            'integrations',
            'advanced',
            'experimental',
            'about',
        ];

        const categoryGroups = {
            '기본 설정': ['profile', 'appearance', 'notifications'],
            '보안 설정': ['privacy', 'security', 'api'],
            '구독 및 팀': ['billing', 'team'],
            '고급 설정': ['integrations', 'advanced', 'experimental'],
            '정보': ['about'],
        };

        const categoryLabels: Record<string, string> = {
            'profile': '프로필',
            'appearance': '테마',
            'notifications': '알림',
            'privacy': '개인정보',
            'security': '보안',
            'api': 'API 키',
            'billing': '요금제',
            'team': '팀 관리',
            'integrations': '연동',
            'advanced': '고급',
            'experimental': '실험적 기능',
            'about': '정보',
        };

        const handleCategoryClick = (category: string) => {
            setActiveCategory(category);
        };

        return (
            <div style={{ display: 'flex', gap: '16px', height: '600px' }}>
                <div style={{ width: '200px', flexShrink: 0 }}>
                    <FigmaSidebar
                        categories={categories}
                        categoryGroups={categoryGroups}
                        categoryLabels={categoryLabels}
                        activeCategory={activeCategory}
                        onCategoryClick={handleCategoryClick}
                        headerHeight={0}
                        scrollContainerId="scroll-container"
                    />
                </div>

                <div
                    style={{
                        flex: 1,
                        overflow: 'auto',
                        padding: '16px',
                        backgroundColor: 'var(--db-surface-subtle)'
                    }}
                    id="scroll-container"
                >
                    {categories.map((category) => (
                        <FigmaSection
                            key={category}
                            title={categoryLabels[category]}
                            dataCategory={category}
                            enableScrollNavigation={true}
                            onActiveSectionChange={handleCategoryClick}
                            headerHeight={0}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <p>{categoryLabels[category]} 섹션입니다.</p>
                                <p>사이드바에서 클릭하거나 스크롤하면 자동으로 싱크됩니다.</p>
                                <Input label="설정 값" placeholder="값을 입력하세요" size="s" />
                                <Input label="옵션" placeholder="옵션을 입력하세요" size="s" />
                                <p>추가 컨텐츠 {category}</p>
                                <p>테스트 텍스트 1</p>
                                <p>테스트 텍스트 2</p>
                                <p>테스트 텍스트 3</p>
                            </div>
                        </FigmaSection>
                    ))}
                </div>
            </div>
        );
    },
};

export const DifferentWidths: Story = {
    render: () => {
        const [activeCategory, setActiveCategory] = useState('general');
        const categories = ['general', 'advanced', 'danger', 'settings', 'about'];

        return (
            <div style={{ display: 'flex', gap: '24px', height: '400px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h4 style={{ margin: '0', fontSize: '14px', fontWeight: '600' }}>160px 폭</h4>
                    <FigmaSidebar
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryClick={setActiveCategory}
                        width={160}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h4 style={{ margin: '0', fontSize: '14px', fontWeight: '600' }}>240px 폭</h4>
                    <FigmaSidebar
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryClick={setActiveCategory}
                        width={240}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h4 style={{ margin: '0', fontSize: '14px', fontWeight: '600' }}>320px 폭</h4>
                    <FigmaSidebar
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryClick={setActiveCategory}
                        width={320}
                    />
                </div>
            </div>
        );
    },
};

export const WithoutGroups: Story = {
    args: {
        categories: ['general', 'advanced', 'danger', 'settings', 'about'],
        activeCategory: 'general',
    },
    render: (args) => {
        const [activeCategory, setActiveCategory] = useState('general');

        const categories = ['general', 'advanced', 'danger', 'settings', 'about'];

        const handleCategoryClick = (category: string) => {
            setActiveCategory(category);
        };

        return (
            <div style={{ display: 'flex', gap: '16px', height: '600px' }}>
                <FigmaSidebar
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryClick={handleCategoryClick}
                />

                <div style={{ flex: 1, overflow: 'auto' }}>
                    <FigmaSection
                        title="일반 설정"
                        dataCategory="general"
                        enableScrollNavigation={true}
                        onActiveSectionChange={handleCategoryClick}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Input label="플러그인 이름" placeholder="내 플러그인" size="s" />
                            <Input label="설명" placeholder="플러그인 설명" size="s" />
                        </div>
                    </FigmaSection>

                    <FigmaSection
                        title="고급 설정"
                        dataCategory="advanced"
                        enableScrollNavigation={true}
                        onActiveSectionChange={handleCategoryClick}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Input label="API 키" placeholder="API 키를 입력하세요" size="s" />
                            <Input label="Webhook URL" placeholder="https://..." size="s" />
                        </div>
                    </FigmaSection>

                    <FigmaSection
                        title="위험 구역"
                        dataCategory="danger"
                        enableScrollNavigation={true}
                        onActiveSectionChange={handleCategoryClick}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <p style={{ color: 'var(--db-feedback-error-fg)', fontSize: '12px' }}>
                                이 작업은 되돌릴 수 없습니다.
                            </p>
                            <Button variant="danger" size="s" fullWidth>
                                모든 데이터 삭제
                            </Button>
                        </div>
                    </FigmaSection>

                    <FigmaSection
                        title="설정"
                        dataCategory="settings"
                        enableScrollNavigation={true}
                        onActiveSectionChange={handleCategoryClick}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <p>설정 섹션입니다.</p>
                            <Input label="테마" placeholder="다크/라이트" size="s" />
                            <Input label="언어" placeholder="한국어" size="s" />
                        </div>
                    </FigmaSection>

                    <FigmaSection
                        title="정보"
                        dataCategory="about"
                        enableScrollNavigation={true}
                        onActiveSectionChange={handleCategoryClick}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <p>정보 섹션입니다.</p>
                            <p>버전: 1.0.0</p>
                            <p>개발자: Designbase Korea</p>
                        </div>
                    </FigmaSection>
                </div>
            </div>
        );
    },
};
