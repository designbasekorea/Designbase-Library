import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = {
    title: 'Components/Timeline',
    component: Timeline,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'filled'],
        },
        spacing: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        itemType: {
            control: { type: 'select' },
            options: ['icon', 'number', 'minimal'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 타임라인 아이템들
const sampleItems = [
    {
        id: '1',
        title: '주문 접수',
        description: '고객의 주문이 성공적으로 접수되었습니다.',
        date: '2024-01-15 09:00',
        status: 'completed' as const,
    },
    {
        id: '2',
        title: '결제 확인',
        description: '결제가 완료되었습니다.',
        date: '2024-01-15 09:05',
        status: 'completed' as const,
    },
    {
        id: '3',
        title: '상품 준비',
        description: '상품을 포장하고 있습니다.',
        date: '2024-01-15 10:30',
        status: 'active' as const,
    },
    {
        id: '4',
        title: '배송 시작',
        description: '배송이 시작될 예정입니다.',
        date: '2024-01-15 14:00',
        status: 'pending' as const,
    },
    {
        id: '5',
        title: '배송 완료',
        description: '고객에게 상품이 전달됩니다.',
        date: '2024-01-16 10:00',
        status: 'pending' as const,
    },
];

const projectItems = [
    {
        id: '1',
        title: '기획 단계',
        description: '프로젝트 요구사항 분석 및 기획',
        date: '1주차',
        status: 'completed' as const,
    },
    {
        id: '2',
        title: '디자인 단계',
        description: 'UI/UX 디자인 및 프로토타입 제작',
        date: '2-3주차',
        status: 'completed' as const,
    },
    {
        id: '3',
        title: '개발 단계',
        description: '프론트엔드 및 백엔드 개발',
        date: '4-8주차',
        status: 'active' as const,
    },
    {
        id: '4',
        title: '테스트 단계',
        description: '품질 검증 및 버그 수정',
        date: '9주차',
        status: 'pending' as const,
    },
    {
        id: '5',
        title: '배포 단계',
        description: '프로덕션 환경 배포',
        date: '10주차',
        status: 'pending' as const,
    },
];

const errorItems = [
    {
        id: '1',
        title: '파일 업로드 시작',
        description: '파일 업로드가 시작되었습니다.',
        date: '14:30',
        status: 'completed' as const,
    },
    {
        id: '2',
        title: '파일 검증',
        description: '파일 형식을 검증하고 있습니다.',
        date: '14:31',
        status: 'completed' as const,
    },
    {
        id: '3',
        title: '업로드 실패',
        description: '파일 크기가 제한을 초과했습니다.',
        date: '14:32',
        status: 'error' as const,
    },
];

export const Default: Story = {
    args: {
        items: sampleItems,
    },
};

export const Horizontal: Story = {
    args: {
        direction: 'horizontal',
        items: sampleItems,
    },
};

export const WithNumbers: Story = {
    args: {
        items: sampleItems,
        itemType: 'number',
    },
};

export const HorizontalWithNumbers: Story = {
    args: {
        direction: 'horizontal',
        items: sampleItems,
        itemType: 'number',
    },
};

export const Minimal: Story = {
    args: {
        items: sampleItems,
        itemType: 'minimal',
    },
};

export const HorizontalMinimal: Story = {
    args: {
        direction: 'horizontal',
        items: sampleItems,
        itemType: 'minimal',
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>작은 크기</h3>
                <Timeline size="sm" items={sampleItems.slice(0, 3)} />
            </div>

            <div>
                <h3>중간 크기</h3>
                <Timeline size="md" items={sampleItems.slice(0, 3)} />
            </div>

            <div>
                <h3>큰 크기</h3>
                <Timeline size="lg" items={sampleItems.slice(0, 3)} />
            </div>
        </div>
    ),
};

export const DifferentSpacings: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>작은 간격</h3>
                <Timeline spacing="sm" items={sampleItems.slice(0, 3)} />
            </div>

            <div>
                <h3>중간 간격</h3>
                <Timeline spacing="md" items={sampleItems.slice(0, 3)} />
            </div>

            <div>
                <h3>큰 간격</h3>
                <Timeline spacing="lg" items={sampleItems.slice(0, 3)} />
            </div>
        </div>
    ),
};

export const ProjectTimeline: Story = {
    args: {
        items: projectItems,
        lineColor: '#3b82f6',
    },
};

export const WithError: Story = {
    args: {
        items: errorItems,
    },
};

export const ClickableItems: Story = {
    args: {
        items: sampleItems.map(item => ({
            ...item,
            onClick: () => alert(`${item.title} 클릭됨`),
        })),
    },
};

export const CustomIcons: Story = {
    args: {
        items: [
            {
                id: '1',
                title: '첫 번째 단계',
                description: '커스텀 아이콘이 있는 타임라인',
                date: '2024-01-15',
                status: 'completed',
                icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                ),
            },
            {
                id: '2',
                title: '두 번째 단계',
                description: '다른 커스텀 아이콘',
                date: '2024-01-16',
                status: 'active',
                icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v6m0 6v6" />
                        <path d="M17.66 17.66l-1.41-1.41m-8.5-8.5L7.34 7.34" />
                    </svg>
                ),
            },
        ],
    },
};

export const WithExtraContent: Story = {
    args: {
        items: [
            {
                id: '1',
                title: '주문 접수',
                description: '고객의 주문이 성공적으로 접수되었습니다.',
                date: '2024-01-15 09:00',
                status: 'completed',
                content: (
                    <div style={{ padding: '8px', backgroundColor: '#f0f9ff', borderRadius: '4px', fontSize: '12px' }}>
                        주문 번호: #12345<br />
                        총 금액: ₩50,000
                    </div>
                ),
            },
            {
                id: '2',
                title: '결제 확인',
                description: '결제가 완료되었습니다.',
                date: '2024-01-15 09:05',
                status: 'completed',
                content: (
                    <div style={{ padding: '8px', backgroundColor: '#f0fdf4', borderRadius: '4px', fontSize: '12px' }}>
                        결제 방법: 신용카드<br />
                        승인 번호: 12345678
                    </div>
                ),
            },
        ],
    },
};

export const ItemTypeComparison: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>아이콘 타입</h3>
                <Timeline itemType="icon" items={sampleItems.slice(0, 3)} />
            </div>

            <div>
                <h3>숫자 타입</h3>
                <Timeline itemType="number" items={sampleItems.slice(0, 3)} />
            </div>

            <div>
                <h3>미니멀 타입</h3>
                <Timeline itemType="minimal" items={sampleItems.slice(0, 3)} />
            </div>
        </div>
    ),
};

export const HorizontalItemTypeComparison: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>아이콘 타입 (가로)</h3>
                <Timeline direction="horizontal" itemType="icon" items={sampleItems.slice(0, 3)} />
            </div>

            <div>
                <h3>숫자 타입 (가로)</h3>
                <Timeline direction="horizontal" itemType="number" items={sampleItems.slice(0, 3)} />
            </div>

            <div>
                <h3>미니멀 타입 (가로)</h3>
                <Timeline direction="horizontal" itemType="minimal" items={sampleItems.slice(0, 3)} />
            </div>
        </div>
    ),
};

export const ResponsiveExample: Story = {
    args: {
        direction: 'horizontal',
        items: sampleItems,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
