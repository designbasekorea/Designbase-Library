import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from '@storybook/test';
import {
    CircleCheckFilledIcon,
    ClockIcon,
    WarningFilledIcon,
    UserIcon,
    PackageIcon,
    DeliveryFilledIcon,
    CreditCardIcon,
    HomeFilledIcon,
    BarChartIcon,
    BookIcon,
    CameraIcon,
    StarFilledIcon
} from '@designbasekorea/icons';
import Timeline from './Timeline';

const meta: Meta<typeof Timeline> = {
    title: 'Components/Timeline',
    component: Timeline,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '시간 순서대로 이벤트를 표시하는 Timeline 컴포넌트입니다. 다양한 레이아웃, 색상, 스타일을 지원하며 클릭 가능한 인터랙션을 제공합니다.',
            },
        },
    },
    argTypes: {
        items: {
            control: false,
            description: '타임라인 아이템들',
        },
        type: {
            control: { type: 'select' },
            options: ['left', 'alternate'],
            description: '타임라인 타입: left (왼쪽 라인) | alternate (가운데 라인, 좌우 번갈아)',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'filled'],
            description: '타임라인 변형',
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
            description: '타임라인 크기',
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default'],
            description: '기본 색상',
        },
        clickable: {
            control: { type: 'boolean' },
            description: '클릭 가능 여부',
        },
        fullWidth: {
            control: { type: 'boolean' },
            description: '전체 너비 여부',
        },
        disabled: {
            control: { type: 'boolean' },
            description: '비활성화 여부',
        },
        onItemClick: {
            action: 'onItemClick',
            description: '아이템 클릭 콜백',
        },
    },
    args: {
        type: 'alternate',
        variant: 'default',
        size: 'm',
        color: 'primary',
        clickable: false,
        fullWidth: false,
        disabled: false,
        onItemClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 타임라인 데이터 (상태별)
const defaultItems = [
    {
        id: 'completed',
        title: 'Primary Color',
        description: 'Primary color timeline item',
        timestamp: '9:30 am',
        status: 'completed' as const,
    },
    {
        id: 'active',
        title: 'Secondary Color',
        description: 'Secondary color timeline item',
        timestamp: '10:00 am',
        status: 'active' as const,
    },
    {
        id: 'completed2',
        title: 'Success Color',
        description: 'Success color timeline item',
        timestamp: '11:00 am',
        status: 'completed' as const,
    },
    {
        id: 'pending',
        title: 'Warning Color',
        description: 'Warning color timeline item',
        timestamp: '12:00 pm',
        status: 'pending' as const,
    },
];

// 기본 스토리
export const Default: Story = {
    args: {
        items: defaultItems,
        type: 'alternate',
    },
};

// 두 가지 타입
export const DifferentTypes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <div>
                    <h3>Left Type Timeline (왼쪽 라인)</h3>
                    <p>왼쪽에 인디케이터가 있고, 오른쪽에 콘텐츠가 표시됩니다.</p>
                    <Timeline items={defaultItems} type="left" />
                </div>
                <div>
                    <h3>Alternate Type Timeline (가운데 라인, 좌우 번갈아)</h3>
                    <p>가운데에 라인이 있고, 콘텐츠가 좌우로 번갈아 표시됩니다.</p>
                    <Timeline items={defaultItems} type="alternate" />
                </div>
            </div>
        );
    },
};

// 다양한 변형
export const DifferentVariants: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <div>
                    <h3>Default Variant</h3>
                    <Timeline items={defaultItems} variant="default" />
                </div>
                <div>
                    <h3>Outlined Variant</h3>
                    <Timeline items={defaultItems} variant="outlined" />
                </div>
                <div>
                    <h3>Filled Variant</h3>
                    <Timeline items={defaultItems} variant="filled" />
                </div>
            </div>
        );
    },
};

// 다양한 크기
export const DifferentSizes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <div>
                    <h3>Small Size</h3>
                    <Timeline items={defaultItems} size="s" />
                </div>
                <div>
                    <h3>Medium Size (Default)</h3>
                    <Timeline items={defaultItems} size="m" />
                </div>
                <div>
                    <h3>Large Size</h3>
                    <Timeline items={defaultItems} size="l" />
                </div>
            </div>
        );
    },
};

// 상태별 타임라인 (기본 점)
export const StatusTimeline: Story = {
    render: () => {
        const statusItems = [
            {
                id: 'completed',
                title: '완료된 작업',
                description: '작업이 성공적으로 완료되었습니다.',
                timestamp: '9:30 am',
                status: 'completed' as const,
            },
            {
                id: 'active',
                title: '진행중인 작업',
                description: '현재 진행 중인 작업입니다.',
                timestamp: '10:00 am',
                status: 'active' as const,
            },
            {
                id: 'pending',
                title: '예정된 작업',
                description: '아직 시작하지 않은 작업입니다.',
                timestamp: '11:00 am',
                status: 'pending' as const,
            },
            {
                id: 'completed2',
                title: '완료된 작업 2',
                description: '또 다른 완료된 작업입니다.',
                timestamp: '12:00 pm',
                status: 'completed' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <div>
                    <h3>상태별 타임라인 (Alternate)</h3>
                    <p>완료(파랑), 진행중(secondary + pulse), 예정(회색)</p>
                    <Timeline items={statusItems} type="alternate" />
                </div>
                <div>
                    <h3>상태별 타임라인 (Left)</h3>
                    <Timeline items={statusItems} type="left" />
                </div>
            </div>
        );
    },
};

// 아이콘과 숫자가 있는 타임라인
export const WithIconsAndNumbers: Story = {
    render: () => {
        const items = [
            {
                id: 'icon1',
                title: '아이콘 있는 항목',
                description: '아이콘이 표시되고 테두리가 있습니다.',
                timestamp: '9:30 am',
                icon: <CircleCheckFilledIcon size={16} />,
                status: 'completed' as const,
            },
            {
                id: 'number1',
                title: '숫자 있는 항목',
                description: '숫자가 표시됩니다.',
                timestamp: '10:00 am',
                number: 1,
                status: 'active' as const,
            },
            {
                id: 'dot1',
                title: '기본 점 항목',
                description: '기본 점만 표시됩니다 (테두리 없음).',
                timestamp: '11:00 am',
                status: 'pending' as const,
            },
            {
                id: 'icon2',
                title: '아이콘 있는 항목 2',
                description: '아이콘과 테두리가 있습니다.',
                timestamp: '12:00 pm',
                icon: <WarningFilledIcon size={16} />,
                status: 'completed' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <div>
                    <h3>아이콘, 숫자, 기본 점</h3>
                    <Timeline items={items} type="alternate" />
                </div>
            </div>
        );
    },
};

// 인터랙티브 Timeline
export const Interactive: Story = {
    render: () => {
        const [clickedItem, setClickedItem] = useState<string | null>(null);

        const handleItemClick = (item: any, index: number) => {
            setClickedItem(item.id);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Clickable Timeline Items</h3>
                    <p>클릭된 아이템: {clickedItem || '없음'}</p>
                </div>
                <Timeline
                    items={defaultItems}
                    type="alternate"
                    clickable={true}
                    onItemClick={handleItemClick}
                />
            </div>
        );
    },
};

// 전체 너비 Timeline
export const FullWidth: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <div>
                    <h3>Full Width Timeline</h3>
                    <Timeline items={defaultItems} type="alternate" fullWidth={true} />
                </div>
                <div>
                    <h3>Full Width Left Type</h3>
                    <Timeline items={defaultItems} type="left" fullWidth={true} />
                </div>
            </div>
        );
    },
};

// 비활성화된 Timeline
export const Disabled: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <div>
                    <h3>Disabled Timeline</h3>
                    <Timeline items={defaultItems} disabled={true} />
                </div>
                <div>
                    <h3>Disabled with Clickable (should not work)</h3>
                    <Timeline items={defaultItems} disabled={true} clickable={true} />
                </div>
            </div>
        );
    },
};

// 주문 처리 타임라인
export const OrderProcessingTimeline: Story = {
    render: () => {
        const orderItems = [
            {
                id: 'order',
                title: '주문 접수',
                description: '고객의 주문이 시스템에 등록되었습니다.',
                timestamp: '2024-01-15 10:00',
                icon: <CircleCheckFilledIcon size={16} />,
                color: 'success' as const,
            },
            {
                id: 'payment',
                title: '결제 처리',
                description: '결제 정보를 검증하고 처리합니다.',
                timestamp: '2024-01-15 10:05',
                icon: <CreditCardIcon size={16} />,
                color: 'success' as const,
            },
            {
                id: 'inventory',
                title: '재고 확인',
                description: '주문 상품의 재고를 확인합니다.',
                timestamp: '2024-01-15 10:10',
                icon: <PackageIcon size={16} />,
                color: 'success' as const,
            },
            {
                id: 'packing',
                title: '상품 포장',
                description: '주문 상품을 안전하게 포장합니다.',
                timestamp: '2024-01-15 10:30',
                icon: <PackageIcon size={16} />,
                color: 'primary' as const,
            },
            {
                id: 'shipping',
                title: '배송 준비',
                description: '택배사에 상품을 전달합니다.',
                timestamp: '2024-01-15 11:00',
                icon: <DeliveryFilledIcon size={16} />,
                color: 'info' as const,
            },
            {
                id: 'delivery',
                title: '배송 완료',
                description: '상품이 고객에게 전달되었습니다.',
                timestamp: '2024-01-15 14:00',
                icon: <HomeFilledIcon size={16} />,
                color: 'default' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>주문 처리 타임라인</h2>
                <Timeline items={orderItems} type="alternate" variant="outlined" />
            </div>
        );
    },
};

// 사용자 활동 타임라인
export const UserActivityTimeline: Story = {
    render: () => {
        const activityItems = [
            {
                id: 'login',
                title: '로그인',
                description: '사용자가 시스템에 로그인했습니다.',
                timestamp: '09:00',
                icon: <UserIcon size={16} />,
                color: 'success' as const,
            },
            {
                id: 'upload',
                title: '파일 업로드',
                description: '새로운 파일을 업로드했습니다.',
                timestamp: '09:30',
                icon: <CameraIcon size={16} />,
                color: 'primary' as const,
            },
            {
                id: 'edit',
                title: '문서 편집',
                description: '문서를 편집하고 저장했습니다.',
                timestamp: '10:15',
                icon: <BookIcon size={16} />,
                color: 'info' as const,
            },
            {
                id: 'share',
                title: '공유',
                description: '문서를 팀원들과 공유했습니다.',
                timestamp: '11:00',
                icon: <BarChartIcon size={16} />,
                color: 'secondary' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>사용자 활동 타임라인</h2>
                <Timeline items={activityItems} type="left" variant="filled" />
            </div>
        );
    },
};

// 프로젝트 진행 타임라인
export const ProjectProgressTimeline: Story = {
    render: () => {
        const projectItems = [
            {
                id: 'planning',
                title: '기획 단계',
                description: '프로젝트 요구사항 분석 및 기획',
                timestamp: '1주차',
                icon: <BookIcon size={16} />,
                color: 'success' as const,
            },
            {
                id: 'design',
                title: '디자인 단계',
                description: 'UI/UX 디자인 및 프로토타입 제작',
                timestamp: '2-3주차',
                icon: <CameraIcon size={16} />,
                color: 'success' as const,
            },
            {
                id: 'development',
                title: '개발 단계',
                description: '프론트엔드 및 백엔드 개발',
                timestamp: '4-8주차',
                icon: <BookIcon size={16} />,
                color: 'primary' as const,
            },
            {
                id: 'testing',
                title: '테스트 단계',
                description: '품질 검증 및 버그 수정',
                timestamp: '9주차',
                icon: <WarningFilledIcon size={16} />,
                color: 'warning' as const,
            },
            {
                id: 'deployment',
                title: '배포 단계',
                description: '프로덕션 환경 배포 및 런칭',
                timestamp: '10주차',
                icon: <CircleCheckFilledIcon size={16} />,
                color: 'default' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>프로젝트 진행 타임라인</h2>
                <Timeline items={projectItems} type="alternate" size="l" />
            </div>
        );
    },
};

// 미니멀 타임라인
export const MinimalTimeline: Story = {
    render: () => {
        const minimalItems = [
            {
                id: 'step1',
                title: '시작',
                timestamp: '09:00',
                color: 'success' as const,
            },
            {
                id: 'step2',
                title: '진행 중',
                timestamp: '10:00',
                color: 'primary' as const,
            },
            {
                id: 'step3',
                title: '완료',
                timestamp: '11:00',
                color: 'default' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <div>
                    <h3>Minimal Timeline</h3>
                    <Timeline items={minimalItems} variant="outlined" size="s" />
                </div>
                <div>
                    <h3>Minimal Timeline - Left Positioned</h3>
                    <Timeline items={minimalItems} type="left" variant="outlined" size="s" />
                </div>
            </div>
        );
    },
};

// Opposite Content 스타일 (이미지와 동일한 스타일)
export const OppositeContent: Story = {
    render: () => {
        const oppositeItems = [
            {
                id: 'eat',
                title: 'Eat',
                timestamp: '09:30 am',
                color: 'default' as const,
            },
            {
                id: 'code',
                title: 'Code',
                timestamp: '10:00 am',
                color: 'primary' as const,
            },
            {
                id: 'sleep',
                title: 'Sleep',
                timestamp: '12:00 am',
                color: 'secondary' as const,
            },
            {
                id: 'repeat',
                title: 'Repeat',
                timestamp: '9:00 am',
                color: 'success' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>Opposite Content Timeline</h2>
                <p>타임라인 콘텐츠가 반대편에 표시됩니다.</p>
                <Timeline items={oppositeItems} type="alternate" variant="outlined" />
            </div>
        );
    },
};

// 커스텀 콘텐츠 예제
export const CustomContent: Story = {
    render: () => {
        const customItems = [
            {
                id: 'custom1',
                timestamp: '9:30 am',
                status: 'completed' as const,
                content: (
                    <div>
                        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>
                            커스텀 제목
                        </h3>
                        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                            자유롭게 구성한 내용입니다.
                        </p>
                        <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
                            <button style={{ padding: '4px 8px', fontSize: '12px' }}>액션 1</button>
                            <button style={{ padding: '4px 8px', fontSize: '12px' }}>액션 2</button>
                        </div>
                    </div>
                ),
            },
            {
                id: 'custom2',
                timestamp: '10:00 am',
                status: 'active' as const,
                content: (
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <span style={{ 
                                padding: '2px 8px', 
                                background: '#e3f2fd', 
                                color: '#1976d2',
                                borderRadius: '4px',
                                fontSize: '12px',
                                fontWeight: 600
                            }}>
                                진행중
                            </span>
                            <span style={{ fontSize: '12px', color: '#666' }}>2024-01-15</span>
                        </div>
                        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
                            커스텀 레이아웃
                        </h3>
                        <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#666' }}>
                            완전히 커스터마이징된 콘텐츠입니다.
                        </p>
                    </div>
                ),
            },
            {
                id: 'custom3',
                timestamp: '11:00 am',
                status: 'pending' as const,
                content: (
                    <div>
                        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>
                            또 다른 커스텀 항목
                        </h3>
                        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                            원하는 어떤 내용이든 넣을 수 있습니다.
                        </p>
                    </div>
                ),
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>커스텀 콘텐츠 예제</h2>
                <p>content prop을 사용하여 완전히 커스터마이징된 콘텐츠를 넣을 수 있습니다.</p>
                <Timeline items={customItems} type="alternate" />
            </div>
        );
    },
};
