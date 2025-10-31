import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FigmaSection, scrollToSection, getActiveSection } from './FigmaSection';
import { Button, Input, Badge, Dropdown, ColorPicker } from '@designbasekorea/ui';
import { SettingsIcon, EditIcon, TrashIcon, ChevronDownIcon } from '@designbasekorea/icons';

const meta = {
    title: 'Figma UI/FigmaSection',
    component: FigmaSection,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    '피그마 플러그인에서 사용하는 섹션 컴포넌트입니다. 토글 가능하고 아이콘 버튼을 추가할 수 있습니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: '섹션 제목',
        },
        dataCategory: {
            control: 'text',
            description: '데이터 카테고리 속성',
        },
        iconButton: {
            control: false,
            description: '헤더 우측 아이콘 버튼',
        },
        children: {
            control: false,
            description: '섹션 컨텐츠',
        },
        marginBottom: {
            control: 'number',
            description: '하단 마진 (px)',
        },
        isEnabled: {
            control: 'boolean',
            description: '활성화 여부',
        },
        onToggle: {
            action: 'toggled',
            description: '토글 변경 핸들러',
        },
        badge: {
            control: 'text',
            description: '타이틀 우측 뱃지 텍스트',
        },
        overflowVisible: {
            control: 'boolean',
            description: '오버플로우를 visible로 설정 (드롭다운, 팝오버 등이 잘리는 경우)',
        },
    },
} satisfies Meta<typeof FigmaSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: '기본 섹션',
        dataCategory: 'default',
        children: (
            <div>
                <p>이것은 기본 섹션 컨텐츠입니다.</p>
                <p>여러 줄의 내용을 담을 수 있습니다.</p>
            </div>
        ),
        isEnabled: true,
    },
};

export const WithIconButton: Story = {
    args: {
        title: '아이콘 버튼이 있는 섹션',
        dataCategory: 'with-icon',
        iconButton: (
            <button
                className="designbase-figma-section__icon-button"
                onClick={() => console.log('Settings clicked')}
            >
                <SettingsIcon size={16} />
            </button>
        ),
        children: (
            <div>
                <p>우측 상단에 아이콘 버튼이 있습니다.</p>
            </div>
        ),
        isEnabled: true,
    },
};

export const WithToggle: Story = {
    args: {
        title: '토글 가능한 섹션',
        dataCategory: 'toggleable',
        children: (
            <div>
                <p>이 섹션은 토글로 켜고 끌 수 있습니다.</p>
                <Input placeholder="입력 필드" size="s" />
            </div>
        ),
        isEnabled: true,
        onToggle: (category) => console.log('Toggled:', category),
    },
};

export const Disabled: Story = {
    args: {
        title: '비활성화된 섹션',
        dataCategory: 'disabled',
        children: (
            <p>이 컨텐츠는 비활성화 상태에서 숨겨집니다.</p>
        ),
        isEnabled: false,
        onToggle: (category) => console.log('Toggled:', category),
    },
};

export const WithMargin: Story = {
    args: {
        title: '마진이 있는 섹션',
        dataCategory: 'with-margin',
        marginBottom: 24,
        children: (
            <p>이 섹션은 하단에 24px 마진이 있습니다.</p>
        ),
        isEnabled: true,
    },
};

export const WithForm: Story = {
    args: {
        title: '폼이 있는 섹션',
        dataCategory: 'form',
        iconButton: (
            <button
                className="designbase-figma-section__icon-button"
                onClick={() => console.log('Edit clicked')}
            >
                <EditIcon size={16} />
            </button>
        ),
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Input label="이름" placeholder="이름을 입력하세요" size="s" />
                <Input label="이메일" placeholder="email@example.com" size="s" />
                <Button variant="primary" size="s" fullWidth>
                    저장
                </Button>
            </div>
        ),
        isEnabled: true,
    },
};

export const Interactive: Story = {
    render: () => {
        const [sections, setSections] = useState({
            general: true,
            advanced: true,
            danger: true,
        });

        const handleToggle = (category: string) => {
            setSections((prev) => ({
                ...prev,
                [category]: !prev[category as keyof typeof prev],
            }));
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <FigmaSection
                    title="일반 설정"
                    dataCategory="general"
                    isEnabled={sections.general}
                    onToggle={handleToggle}
                    iconButton={
                        <button className="designbase-figma-section__icon-button">
                            <SettingsIcon size={16} />
                        </button>
                    }
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Input label="플러그인 이름" placeholder="내 플러그인" size="s" />
                        <Input label="설명" placeholder="플러그인 설명" size="s" />
                    </div>
                </FigmaSection>

                <FigmaSection
                    title="고급 설정"
                    dataCategory="advanced"
                    isEnabled={sections.advanced}
                    onToggle={handleToggle}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Input label="API 키" placeholder="API 키를 입력하세요" size="s" />
                        <Input label="Webhook URL" placeholder="https://..." size="s" />
                    </div>
                </FigmaSection>

                <FigmaSection
                    title="위험 구역"
                    dataCategory="danger"
                    isEnabled={sections.danger}
                    onToggle={handleToggle}
                    iconButton={
                        <button
                            className="designbase-figma-section__icon-button"
                            onClick={() => console.log('Delete clicked')}
                        >
                            <TrashIcon size={16} />
                        </button>
                    }
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
            </div>
        );
    },
};

export const MultipleSections: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <FigmaSection title="섹션 1" dataCategory="section1" marginBottom={0}>
                <p>첫 번째 섹션 내용</p>
            </FigmaSection>

            <FigmaSection title="섹션 2" dataCategory="section2" marginBottom={0}>
                <p>두 번째 섹션 내용</p>
            </FigmaSection>

            <FigmaSection title="섹션 3" dataCategory="section3" marginBottom={0}>
                <p>세 번째 섹션 내용</p>
            </FigmaSection>
        </div>
    ),
};

export const WithoutHeader: Story = {
    args: {
        dataCategory: 'no-header',
        children: (
            <div>
                <p>제목이 없는 섹션입니다.</p>
                <p>헤더 없이 컨텐츠만 표시됩니다.</p>
            </div>
        ),
        isEnabled: true,
    },
};

export const WithScrollNavigation: Story = {
    args: {
        title: '스크롤 네비게이션 테스트',
        dataCategory: 'scroll-test',
        enableScrollNavigation: true,
        onActiveSectionChange: (category) => console.log('Active section:', category),
        children: (
            <div>
                <p>이 섹션은 스크롤 네비게이션이 활성화되어 있습니다.</p>
                <p>스크롤할 때 활성 섹션 변경 콜백이 호출됩니다.</p>
            </div>
        ),
        isEnabled: true,
    },
};

export const Collapsible: Story = {
    args: {
        title: '접기/펼치기 가능한 섹션',
        dataCategory: 'collapsible',
        collapsible: true,
        children: (
            <div>
                <p>헤더를 클릭하면 섹션이 접히고 펼쳐집니다.</p>
                <Input placeholder="입력 필드" size="s" />
                <Button variant="secondary" size="s">버튼</Button>
            </div>
        ),
        isEnabled: true,
    },
};

export const CollapsibleDefaultCollapsed: Story = {
    args: {
        title: '기본 접힌 상태',
        dataCategory: 'collapsed',
        collapsible: true,
        defaultCollapsed: true,
        children: (
            <p>이 섹션은 기본적으로 접혀있는 상태로 시작합니다.</p>
        ),
        isEnabled: true,
    },
};

export const CollapsibleMultiple: Story = {
    render: () => {
        const [collapsedStates, setCollapsedStates] = useState({
            section1: false,
            section2: true,
            section3: false,
        });

        const handleCollapseChange = (collapsed: boolean, category: string) => {
            setCollapsedStates((prev) => ({
                ...prev,
                [category]: collapsed,
            }));
            console.log(`Section ${category} is now ${collapsed ? 'collapsed' : 'expanded'}`);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <FigmaSection
                    title="접기/펼치기 가능한 섹션 1"
                    dataCategory="section1"
                    collapsible={true}
                    defaultCollapsed={collapsedStates.section1}
                    onCollapseChange={handleCollapseChange}
                    marginBottom={0}
                >
                    <div>
                        <p>첫 번째 섹션 내용입니다.</p>
                        <Input placeholder="입력 필드 1" size="s" />
                    </div>
                </FigmaSection>

                <FigmaSection
                    title="접기/펼치기 가능한 섹션 2"
                    dataCategory="section2"
                    collapsible={true}
                    defaultCollapsed={collapsedStates.section2}
                    onCollapseChange={handleCollapseChange}
                    marginBottom={0}
                >
                    <div>
                        <p>두 번째 섹션 내용입니다.</p>
                        <Input placeholder="입력 필드 2" size="s" />
                    </div>
                </FigmaSection>

                <FigmaSection
                    title="접기/펼치기 가능한 섹션 3"
                    dataCategory="section3"
                    collapsible={true}
                    defaultCollapsed={collapsedStates.section3}
                    onCollapseChange={handleCollapseChange}
                    marginBottom={0}
                >
                    <div>
                        <p>세 번째 섹션 내용입니다.</p>
                        <Input placeholder="입력 필드 3" size="s" />
                    </div>
                </FigmaSection>
            </div>
        );
    },
};

export const WithCustomTitle: Story = {
    args: {
        title: (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>커스텀 타이틀</span>
                <span style={{
                    background: '#E3F2FD',
                    color: '#1976D2',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '500'
                }}>
                    라이브러리
                </span>
            </div>
        ),
        dataCategory: 'custom-title',
        children: (
            <div>
                <p>타이틀에 커스텀 JSX를 사용할 수 있습니다.</p>
                <p>복잡한 레이아웃도 자유롭게 구성 가능합니다.</p>
            </div>
        ),
        isEnabled: true,
    },
};

export const WithBadge: Story = {
    args: {
        title: '뱃지가 있는 섹션',
        dataCategory: 'with-badge',
        badge: 'NEW',
        children: (
            <div>
                <p>타이틀 우측에 뱃지를 표시할 수 있습니다.</p>
                <p>Badge 컴포넌트를 사용하여 secondary 스타일로 표시됩니다.</p>
            </div>
        ),
        isEnabled: true,
    },
};

export const WithCustomTitleAndBadge: Story = {
    args: {
        title: (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>컬렉션</span>
                <span style={{
                    background: '#E3F2FD',
                    color: '#1976D2',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '500'
                }}>
                    디자인 시스템
                </span>
            </div>
        ),
        dataCategory: 'collection',
        badge: '활성',
        children: (
            <div>
                <p>커스텀 타이틀과 뱃지를 함께 사용할 수 있습니다.</p>
                <p>실제 사용 사례와 같은 복잡한 레이아웃이 가능합니다.</p>
            </div>
        ),
        isEnabled: true,
    },
};

export const WithDropdown: Story = {
    args: {
        title: '드롭다운이 있는 섹션',
        dataCategory: 'with-dropdown',
        overflowVisible: true,
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p>이 섹션에는 드롭다운이 포함되어 있습니다.</p>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>카테고리:</span>
                    <Dropdown
                        trigger={
                            <Button variant="secondary" size="s">
                                선택하세요
                                <ChevronDownIcon size={14} />
                            </Button>
                        }
                        items={[
                            {
                                id: 'design-system',
                                label: '디자인 시스템',
                                onClick: () => console.log('Selected: design-system')
                            },
                            {
                                id: 'components',
                                label: '컴포넌트',
                                onClick: () => console.log('Selected: components')
                            },
                            {
                                id: 'icons',
                                label: '아이콘',
                                onClick: () => console.log('Selected: icons')
                            },
                            {
                                id: 'colors',
                                label: '색상',
                                onClick: () => console.log('Selected: colors')
                            },
                        ]}
                    />
                </div>
            </div>
        ),
        isEnabled: true,
    },
};

export const WithColorPicker: Story = {
    args: {
        title: '컬러 피커가 있는 섹션',
        dataCategory: 'with-color-picker',
        overflowVisible: true,
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p>이 섹션에는 컬러 피커가 포함되어 있습니다.</p>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>테마 색상:</span>
                    <ColorPicker
                        defaultValue="#006FFF"
                        size="s"
                        showFormatSelector={false}
                        showCopyButton={false}
                    />
                </div>
            </div>
        ),
        isEnabled: true,
    },
};

export const OverflowComparison: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
                    기본 상태 (overflow: hidden) - 드롭다운이 잘림
                </h4>
                <FigmaSection
                    title="기본 오버플로우"
                    dataCategory="default-overflow"
                    children={
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>카테고리:</span>
                            <Dropdown
                                trigger={
                                    <Button variant="secondary" size="s">
                                        선택하세요
                                        <ChevronDownIcon size={14} />
                                    </Button>
                                }
                                items={[
                                    {
                                        id: 'design-system',
                                        label: '디자인 시스템',
                                        onClick: () => console.log('Selected: design-system')
                                    },
                                    {
                                        id: 'components',
                                        label: '컴포넌트',
                                        onClick: () => console.log('Selected: components')
                                    },
                                    {
                                        id: 'icons',
                                        label: '아이콘',
                                        onClick: () => console.log('Selected: icons')
                                    },
                                    {
                                        id: 'colors',
                                        label: '색상',
                                        onClick: () => console.log('Selected: colors')
                                    },
                                ]}
                            />
                        </div>
                    }
                />
            </div>

            <div>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
                    overflowVisible: true - 드롭다운이 정상 표시
                </h4>
                <FigmaSection
                    title="오버플로우 허용"
                    dataCategory="visible-overflow"
                    overflowVisible={true}
                    children={
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>카테고리:</span>
                            <Dropdown
                                trigger={
                                    <Button variant="secondary" size="s">
                                        선택하세요
                                        <ChevronDownIcon size={14} />
                                    </Button>
                                }
                                items={[
                                    {
                                        id: 'design-system',
                                        label: '디자인 시스템',
                                        onClick: () => console.log('Selected: design-system')
                                    },
                                    {
                                        id: 'components',
                                        label: '컴포넌트',
                                        onClick: () => console.log('Selected: components')
                                    },
                                    {
                                        id: 'icons',
                                        label: '아이콘',
                                        onClick: () => console.log('Selected: icons')
                                    },
                                    {
                                        id: 'colors',
                                        label: '색상',
                                        onClick: () => console.log('Selected: colors')
                                    },
                                ]}
                            />
                        </div>
                    }
                />
            </div>
        </div>
    ),
};