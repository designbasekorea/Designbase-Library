import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FigmaContainer } from './FigmaContainer';
import { Input, SegmentControl, Select } from '@designbasekorea/ui';
import { FigmaSection } from '../FigmaSection/FigmaSection';
import { FigmaFooter } from '../FigmaFooter/FigmaFooter';
import { FigmaHeader } from '../FigmaHeader/FigmaHeader';
import { FigmaSidebar } from '../FigmaSidebar/FigmaSidebar';
import { InteractionFeedback } from '../InteractionFeedback/InteractionFeedback';
import { UpgradeBanner } from '../UpgradeBanner/UpgradeBanner';
import { SettingsIcon, SearchIcon, PlusIcon, DownloadIcon } from '@designbasekorea/icons';
import { Button } from '@designbasekorea/ui';

const meta: Meta<typeof FigmaContainer> = {
    title: 'Figma UI/FigmaContainer',
    component: FigmaContainer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        bannerPosition: {
            control: { type: 'select' },
            options: ['top', 'bottom'],
        },
        sidebarWidth: {
            control: { type: 'number' },
        },
        header: {
            control: false,
        },
        footer: {
            control: false,
        },
        banner: {
            control: false,
        },
        sidebar: {
            control: false,
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
    <div>
        <FigmaSection title="디자인 시스템 관리" dataCategory="design-system">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input type="text" placeholder="컴포넌트 이름" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }} />
                <select style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}>
                    <option>카테고리 선택</option>
                    <option>버튼</option>
                    <option>입력</option>
                    <option>카드</option>
                </select>
                <textarea placeholder="컴포넌트 설명" rows={3} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
        </FigmaSection>

        <FigmaSection title="색상 팔레트" dataCategory="color-palette">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'].map((color, index) => (
                    <div key={index} style={{
                        width: '100%',
                        height: '40px',
                        backgroundColor: color,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        border: '2px solid transparent',
                        transition: 'border-color 0.2s'
                    }} />
                ))}
            </div>
        </FigmaSection>

        <FigmaSection title="타이포그래피" dataCategory="typography">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Heading 1</div>
                <div style={{ fontSize: '20px', fontWeight: '600' }}>Heading 2</div>
                <div style={{ fontSize: '16px', fontWeight: '500' }}>Heading 3</div>
                <div style={{ fontSize: '14px' }}>Body Text</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Caption</div>
            </div>
        </FigmaSection>

        <FigmaSection title="컴포넌트 라이브러리" dataCategory="component-library">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {['Primary Button', 'Secondary Button', 'Text Input', 'Select Dropdown', 'Checkbox', 'Radio Button', 'Card', 'Modal'].map((component, index) => (
                    <div key={index} style={{
                        padding: '12px',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        backgroundColor: '#f9fafb',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}>
                        <div style={{ fontWeight: '500', marginBottom: '4px' }}>{component}</div>
                        <div style={{ fontSize: '12px', color: '#666' }}>재사용 가능한 컴포넌트</div>
                    </div>
                ))}
            </div>
        </FigmaSection>

        <FigmaSection title="스페이싱 시스템" dataCategory="spacing-system">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[4, 8, 12, 16, 24, 32, 48, 64].map((size, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            width: `${size}px`,
                            height: '20px',
                            backgroundColor: '#3b82f6',
                            borderRadius: '2px'
                        }} />
                        <span style={{ fontSize: '12px', color: '#666' }}>{size}px</span>
                    </div>
                ))}
            </div>
        </FigmaSection>
    </div>
);

const SampleFooter = () => (
    <FigmaFooter
        paymentStatus="FREE"
        usageCount={3}
        maxDailyUsage={20}
        showPaymentStatus={true}
        showDonation={true}
        showLanguageSelector={false}
    />
);

const SampleHeader = () => {
    const [activeTab, setActiveTab] = useState('design');
    const [searchValue, setSearchValue] = useState('');

    const options = [
        { value: 'design', label: '디자인' },
        { value: 'prototype', label: '프로토타입' },
        { value: 'dev', label: '개발' },
    ];

    return (
        <FigmaHeader
            searchBar={
                <Input
                    placeholder="검색..."
                    size="s"
                    icon={<SearchIcon size={16} />}
                    value={searchValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                />
            }
            actions={[
                <PlusIcon key="plus" size={16} />,
                <DownloadIcon key="download" size={16} />,
                <SettingsIcon key="settings" size={16} />,
            ]}
        >
            <SegmentControl
                options={options}
                value={activeTab}
                onChange={setActiveTab}
                size="s"
            />
        </FigmaHeader>
    );
};

export const Default: Story = {
    args: {
        children: <SampleContent />,
        footer: <SampleFooter />,
    },
};

export const WithHeader: Story = {
    args: {
        header: <SampleHeader />,
        children: <SampleContent />,
    },
};

export const WithHeaderAndFooter: Story = {
    args: {
        header: <SampleHeader />,
        children: <SampleContent />,
        footer: <SampleFooter />,
    },
};

export const WithInteractionFeedback: Story = {
    render: () => {
        const [selectedCount, setSelectedCount] = useState(5);
        const [sortOrder, setSortOrder] = useState('default');

        return (
            <FigmaContainer
                header={<SampleHeader />}
                footer={<SampleFooter />}
                interactionFeedback={
                    <InteractionFeedback
                        status="warning"
                        message={`${selectedCount}개 선택됨`}
                        statusMessage="무료 사용자는 3개까지만 선택할 수 있습니다"
                        visible={selectedCount > 0}
                        rightAction={
                            <Select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                size="s"
                                disabled={selectedCount < 2}
                            >
                                <option value="default">기본 순서</option>
                                <option value="name-asc">이름 오름차순</option>
                                <option value="name-desc">이름 내림차순</option>
                                <option value="position-x">X 위치</option>
                                <option value="position-y">Y 위치</option>
                            </Select>
                        }
                    />
                }
            >
                <SampleContent />
            </FigmaContainer>
        );
    },
};

export const WithoutFooter: Story = {
    args: {
        children: <SampleContent />,
    },
};

export const ResizableFooter: Story = {
    args: {
        children: <SampleContent />,
        footer: <SampleFooter />,
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <div>
                <h3>Small</h3>
                <div style={{ height: '300px', border: '1px solid #ddd' }}>
                    <FigmaContainer size="s" fullHeight={false}>
                        <SampleContent />
                    </FigmaContainer>
                </div>
            </div>
            <div>
                <h3>Medium</h3>
                <div style={{ height: '300px', border: '1px solid #ddd' }}>
                    <FigmaContainer size="m" fullHeight={false}>
                        <SampleContent />
                    </FigmaContainer>
                </div>
            </div>
            <div>
                <h3>Large</h3>
                <div style={{ height: '300px', border: '1px solid #ddd' }}>
                    <FigmaContainer size="l" fullHeight={false}>
                        <SampleContent />
                    </FigmaContainer>
                </div>
            </div>
        </div>
    ),
};

export const WithFooterVariations: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <div>
                <h3>무료 플러그인 푸터</h3>
                <div style={{ height: '300px', border: '1px solid #ddd' }}>
                    <FigmaContainer fullHeight={false} footer={<SampleFooter />}>
                        <SampleContent />
                    </FigmaContainer>
                </div>
            </div>
            <div>
                <h3>유료 플러그인 푸터</h3>
                <div style={{ height: '300px', border: '1px solid #ddd' }}>
                    <FigmaContainer fullHeight={false} footer={
                        <FigmaFooter
                            paymentStatus="PAID"
                            showPaymentStatus={true}
                            showDonation={false}
                            showLanguageSelector={true}
                        />
                    }>
                        <SampleContent />
                    </FigmaContainer>
                </div>
            </div>
            <div>
                <h3>트라이얼 플러그인 푸터</h3>
                <div style={{ height: '300px', border: '1px solid #ddd' }}>
                    <FigmaContainer fullHeight={false} footer={
                        <FigmaFooter
                            paymentStatus="TRIAL"
                            usageCount={15}
                            maxDailyUsage={20}
                            showPaymentStatus={true}
                            showDonation={true}
                            showLanguageSelector={true}
                        />
                    }>
                        <SampleContent />
                    </FigmaContainer>
                </div>
            </div>
        </div>
    ),
};

export const WithActionButton: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <div>
                <h3>액션 버튼 + 푸터</h3>
                <div style={{ height: '400px', border: '1px solid #ddd' }}>
                    <FigmaContainer
                        fullHeight={false}
                        actionButton={
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', width: '100%' }}>
                                <Button variant="tertiary" size="m">취소</Button>
                                <Button variant="primary" size="m">적용하기</Button>
                            </div>
                        }
                        footer={<SampleFooter />}
                    >
                        <SampleContent />
                    </FigmaContainer>
                </div>
            </div>
            <div>
                <h3>인터랙션 피드백 + 액션 버튼 + 푸터</h3>
                <div style={{ height: '450px', border: '1px solid #ddd' }}>
                    <FigmaContainer
                        fullHeight={false}
                        interactionFeedback={
                            <InteractionFeedback
                                status="info"
                                message="5개 항목이 선택되었습니다"
                                visible={true}
                            />
                        }
                        actionButton={
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', width: '100%' }}>
                                <Button variant="tertiary" size="m">취소</Button>
                                <Button variant="primary" size="m">적용하기</Button>
                            </div>
                        }
                        footer={<SampleFooter />}
                    >
                        <SampleContent />
                    </FigmaContainer>
                </div>
            </div>
        </div>
    ),
};

export const BannerTop: Story = {
    render: () => (
        <div style={{ height: '600px', border: '1px solid #ddd' }}>
            <FigmaContainer
                fullHeight={false}
                header={<SampleHeader />}
                banner={
                    <UpgradeBanner
                        onClick={() => console.log('Upgrade clicked')}
                        variant="clickable"
                        useGradient={true}
                        gradientScheme="primary"
                        gradientTone="light"
                        gradientAnimated={true}
                        t={(key: string) => {
                            const translations: Record<string, string> = {
                                'banner.upgrade_title': '프로로 업그레이드하세요',
                                'banner.upgrade_description': '무제한 기능을 사용하고 더 많은 혜택을 누리세요.',
                                'banner.upgrade_button': '지금 업그레이드',
                            };
                            return translations[key] || key;
                        }}
                    />
                }
                bannerPosition="top"
                footer={<SampleFooter />}
            >
                <SampleContent />
            </FigmaContainer>
        </div>
    ),
};

export const BannerBottom: Story = {
    render: () => (
        <div style={{ height: '600px', border: '1px solid #ddd' }}>
            <FigmaContainer
                fullHeight={false}
                header={<SampleHeader />}
                banner={
                    <UpgradeBanner
                        onClick={() => console.log('Upgrade clicked')}
                        variant="clickable"
                        useGradient={true}
                        gradientScheme="success"
                        gradientTone="light"
                        gradientAnimated={true}
                        t={(key: string) => {
                            const translations: Record<string, string> = {
                                'banner.upgrade_title': '새로운 기능이 추가되었습니다',
                                'banner.upgrade_description': '최신 업데이트를 확인하고 새로운 기능을 사용해보세요.',
                                'banner.upgrade_button': '자세히 보기',
                            };
                            return translations[key] || key;
                        }}
                    />
                }
                bannerPosition="bottom"
                footer={<SampleFooter />}

            >
                <SampleContent />
            </FigmaContainer>
        </div>
    ),
};

export const WithSidebar: Story = {
    render: () => {
        const categories = ['design-system', 'color-palette', 'typography', 'component-library', 'spacing-system'];
        const categoryLabels: Record<string, string> = {
            'design-system': '디자인 시스템',
            'color-palette': '색상 팔레트',
            'typography': '타이포그래피',
            'component-library': '컴포넌트 라이브러리',
            'spacing-system': '스페이싱 시스템',
        };

        const [activeCategory, setActiveCategory] = React.useState(categories[0]);

        return (
            <div style={{ height: '600px', border: '1px solid #ddd' }}>
                <FigmaContainer
                    fullHeight={false}
                    header={<SampleHeader />}
                    sidebar={
                        <FigmaSidebar
                            categories={categories}
                            categoryLabels={categoryLabels}
                            activeCategory={activeCategory}
                            onCategoryClick={setActiveCategory}
                            scrollContainerId="scroll-container"
                            headerHeight={48}
                        />
                    }
                    sidebarWidth={120}
                    footer={<SampleFooter />}
                >
                    <div id="scroll-container">
                        <FigmaSection title="디자인 시스템 관리" dataCategory="design-system" enableScrollNavigation onActiveSectionChange={setActiveCategory}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <input type="text" placeholder="컴포넌트 이름" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }} />
                                <select style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}>
                                    <option>카테고리 선택</option>
                                    <option>버튼</option>
                                    <option>입력</option>
                                    <option>카드</option>
                                </select>
                                <textarea placeholder="컴포넌트 설명" rows={3} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }} />
                            </div>
                        </FigmaSection>

                        <FigmaSection title="색상 팔레트" dataCategory="color-palette" enableScrollNavigation onActiveSectionChange={setActiveCategory}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                                {['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'].map((color, index) => (
                                    <div key={index} style={{
                                        width: '100%',
                                        height: '40px',
                                        backgroundColor: color,
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        border: '2px solid transparent',
                                        transition: 'border-color 0.2s'
                                    }} />
                                ))}
                            </div>
                        </FigmaSection>

                        <FigmaSection title="타이포그래피" dataCategory="typography" enableScrollNavigation onActiveSectionChange={setActiveCategory}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Heading 1</div>
                                <div style={{ fontSize: '20px', fontWeight: '600' }}>Heading 2</div>
                                <div style={{ fontSize: '16px', fontWeight: '500' }}>Heading 3</div>
                                <div style={{ fontSize: '14px' }}>Body Text</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Caption</div>
                            </div>
                        </FigmaSection>

                        <FigmaSection title="컴포넌트 라이브러리" dataCategory="component-library" enableScrollNavigation onActiveSectionChange={setActiveCategory}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                                {['Primary Button', 'Secondary Button', 'Text Input', 'Select Dropdown', 'Checkbox', 'Radio Button', 'Card', 'Modal'].map((component, index) => (
                                    <div key={index} style={{
                                        padding: '12px',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '6px',
                                        backgroundColor: '#f9fafb',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}>
                                        <div style={{ fontWeight: '500', marginBottom: '4px' }}>{component}</div>
                                        <div style={{ fontSize: '12px', color: '#666' }}>재사용 가능한 컴포넌트</div>
                                    </div>
                                ))}
                            </div>
                        </FigmaSection>

                        <FigmaSection title="스페이싱 시스템" dataCategory="spacing-system" enableScrollNavigation onActiveSectionChange={setActiveCategory}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {[4, 8, 12, 16, 24, 32, 48, 64].map((size, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{
                                            width: `${size}px`,
                                            height: '20px',
                                            backgroundColor: '#3b82f6',
                                            borderRadius: '2px'
                                        }} />
                                        <span style={{ fontSize: '12px', color: '#666' }}>{size}px</span>
                                    </div>
                                ))}
                            </div>
                        </FigmaSection>
                    </div>
                </FigmaContainer>
            </div>
        );
    },
};

