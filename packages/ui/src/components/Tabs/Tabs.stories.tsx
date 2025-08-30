import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs, type TabItem } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: { type: 'select' },
            options: ['horizontal', 'vertical'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'pills', 'underline'],
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTabs: TabItem[] = [
    {
        id: 'tab1',
        label: '첫 번째 탭',
        content: (
            <div>
                <h3>첫 번째 탭 내용</h3>
                <p>이것은 첫 번째 탭의 내용입니다. 여기에 다양한 콘텐츠를 배치할 수 있습니다.</p>
                <p>예를 들어, 폼, 테이블, 이미지 등을 포함할 수 있습니다.</p>
            </div>
        ),
    },
    {
        id: 'tab2',
        label: '두 번째 탭',
        content: (
            <div>
                <h3>두 번째 탭 내용</h3>
                <p>이것은 두 번째 탭의 내용입니다.</p>
                <ul>
                    <li>목록 항목 1</li>
                    <li>목록 항목 2</li>
                    <li>목록 항목 3</li>
                </ul>
            </div>
        ),
    },
    {
        id: 'tab3',
        label: '세 번째 탭',
        content: (
            <div>
                <h3>세 번째 탭 내용</h3>
                <p>이것은 세 번째 탭의 내용입니다.</p>
                <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>스타일이 적용된 박스입니다.</p>
                </div>
            </div>
        ),
    },
    {
        id: 'tab4',
        label: '비활성화된 탭',
        content: <div>이 탭은 비활성화되어 있습니다.</div>,
        disabled: true,
    },
];

const longTabs: TabItem[] = [
    {
        id: 'overview',
        label: '개요',
        content: (
            <div>
                <h3>프로젝트 개요</h3>
                <p>이 프로젝트는 디자인 시스템을 구축하기 위한 것입니다.</p>
                <p>다양한 UI 컴포넌트들을 포함하고 있으며, 일관된 디자인 언어를 제공합니다.</p>
            </div>
        ),
    },
    {
        id: 'components',
        label: '컴포넌트',
        content: (
            <div>
                <h3>사용 가능한 컴포넌트</h3>
                <ul>
                    <li>Button - 다양한 스타일의 버튼</li>
                    <li>Input - 텍스트 입력 필드</li>
                    <li>Modal - 모달 다이얼로그</li>
                    <li>Card - 카드 레이아웃</li>
                    <li>Checkbox - 체크박스</li>
                    <li>Toggle - 토글 스위치</li>
                    <li>Radio - 라디오 버튼</li>
                    <li>Select - 드롭다운 선택</li>
                    <li>Tabs - 탭 네비게이션</li>
                    <li>SegmentControl - 세그먼트 컨트롤</li>
                    <li>Dropdown - 드롭다운 메뉴</li>
                    <li>Toast - 토스트 알림</li>
                </ul>
            </div>
        ),
    },
    {
        id: 'design',
        label: '디자인 토큰',
        content: (
            <div>
                <h3>디자인 토큰</h3>
                <p>모든 컴포넌트는 일관된 디자인 토큰을 사용합니다:</p>
                <ul>
                    <li>색상 (Colors)</li>
                    <li>간격 (Spacing)</li>
                    <li>타이포그래피 (Typography)</li>
                    <li>테두리 반경 (Border Radius)</li>
                    <li>그림자 (Shadows)</li>
                    <li>Z-인덱스 (Z-Index)</li>
                </ul>
            </div>
        ),
    },
    {
        id: 'accessibility',
        label: '접근성',
        content: (
            <div>
                <h3>접근성 가이드라인</h3>
                <p>모든 컴포넌트는 WCAG 2.1 AA 기준을 준수합니다:</p>
                <ul>
                    <li>키보드 네비게이션 지원</li>
                    <li>스크린 리더 호환성</li>
                    <li>적절한 ARIA 속성</li>
                    <li>색상 대비 준수</li>
                    <li>포커스 표시</li>
                </ul>
            </div>
        ),
    },
];

export const Default: Story = {
    args: {
        items: sampleTabs,
    },
};

export const WithDefaultSelected: Story = {
    args: {
        items: sampleTabs,
        defaultSelectedId: 'tab2',
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>기본 탭</h3>
                <Tabs items={sampleTabs} variant="default" />
            </div>
            <div>
                <h3>Pills 탭</h3>
                <Tabs items={sampleTabs} variant="pills" />
            </div>
            <div>
                <h3>Underline 탭</h3>
                <Tabs items={sampleTabs} variant="underline" />
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>Small</h3>
                <Tabs items={sampleTabs} size="sm" />
            </div>
            <div>
                <h3>Medium</h3>
                <Tabs items={sampleTabs} size="md" />
            </div>
            <div>
                <h3>Large</h3>
                <Tabs items={sampleTabs} size="lg" />
            </div>
        </div>
    ),
};

export const Vertical: Story = {
    args: {
        items: longTabs,
        orientation: 'vertical',
        defaultSelectedId: 'components',
    },
};

export const FullWidth: Story = {
    args: {
        items: sampleTabs,
        fullWidth: true,
    },
};

export const Controlled: Story = {
    render: () => {
        const [selectedTab, setSelectedTab] = useState('tab1');

        return (
            <div>
                <Tabs
                    items={sampleTabs}
                    selectedId={selectedTab}
                    onTabChange={setSelectedTab}
                />
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>현재 선택된 탭: <strong>{selectedTab}</strong></p>
                </div>
            </div>
        );
    },
};

export const WithIcons: Story = {
    render: () => {
        const tabsWithIcons: TabItem[] = [
            {
                id: 'home',
                label: '홈',
                content: <div>홈 페이지 내용</div>,
            },
            {
                id: 'profile',
                label: '프로필',
                content: <div>프로필 페이지 내용</div>,
            },
            {
                id: 'settings',
                label: '설정',
                content: <div>설정 페이지 내용</div>,
            },
        ];

        return <Tabs items={tabsWithIcons} />;
    },
};

export const LongContent: Story = {
    args: {
        items: longTabs,
        defaultSelectedId: 'components',
    },
};

export const DisabledTabs: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>비활성화된 탭이 포함된 탭</h3>
                <Tabs items={sampleTabs} />
            </div>
            <div>
                <h3>모든 탭이 비활성화된 경우</h3>
                <Tabs
                    items={[
                        { id: 'tab1', label: '비활성화 1', content: <div>내용 1</div>, disabled: true },
                        { id: 'tab2', label: '비활성화 2', content: <div>내용 2</div>, disabled: true },
                        { id: 'tab3', label: '비활성화 3', content: <div>내용 3</div>, disabled: true },
                    ]}
                />
            </div>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [selectedTab, setSelectedTab] = useState('tab1');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>수평 탭</h3>
                    <Tabs
                        items={sampleTabs}
                        selectedId={selectedTab}
                        onTabChange={setSelectedTab}
                    />
                </div>

                <div>
                    <h3>수직 탭</h3>
                    <Tabs
                        items={longTabs}
                        orientation="vertical"
                        selectedId={selectedTab}
                        onTabChange={setSelectedTab}
                    />
                </div>

                <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>현재 선택된 탭: <strong>{selectedTab}</strong></p>
                </div>
            </div>
        );
    },
};
