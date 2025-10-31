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
        position: {
            control: { type: 'select' },
            options: ['left', 'right', 'alternate', 'reverse-alternate'],
            description: '타임라인 위치',
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
        position: 'alternate',
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

// 기본 타임라인 데이터
const defaultItems = [
    {
        id: 'eat',
        title: 'Eat',
        description: 'Because you need strength',
        timestamp: '9:30 am',
        icon: <BarChartIcon size={16} />,
        color: 'default' as const,
    },
    {
        id: 'code',
        title: 'Code',
        description: 'Because it\'s awesome!',
        timestamp: '10:00 am',
        icon: <BookIcon size={16} />,
        color: 'primary' as const,
    },
    {
        id: 'sleep',
        title: 'Sleep',
        description: 'Because you need rest',
        timestamp: '12:00 am',
        icon: <HomeFilledIcon size={16} />,
        color: 'secondary' as const,
    },
    {
        id: 'repeat',
        title: 'Repeat',
        description: 'Because this is the life you love!',
        timestamp: '9:00 am',
        icon: <StarFilledIcon size={16} />,
        color: 'success' as const,
    },
];

// 기본 스토리
export const Default: Story = {
    args: {
        items: defaultItems,
    },
};

// 다양한 위치
export const DifferentPositions: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <div>
                    <h3>Left Positioned Timeline</h3>
                    <Timeline items={defaultItems} position="left" />
                </div>
                <div>
                    <h3>Right Positioned Timeline</h3>
                    <Timeline items={defaultItems} position="right" />
                </div>
                <div>
                    <h3>Alternating Timeline (Default)</h3>
                    <Timeline items={defaultItems} position="alternate" />
                </div>
                <div>
                    <h3>Reverse Alternating Timeline</h3>
                    <Timeline items={defaultItems} position="reverse-alternate" />
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

// 다양한 색상
export const DifferentColors: Story = {
    render: () => {
        const coloredItems = [
            {
                id: 'primary',
                title: 'Primary Color',
                description: 'Primary color timeline item',
                timestamp: '9:30 am',
                icon: <CircleCheckFilledIcon size={16} />,
                color: 'primary' as const,
            },
            {
                id: 'secondary',
                title: 'Secondary Color',
                description: 'Secondary color timeline item',
                timestamp: '10:00 am',
                icon: <ClockIcon size={16} />,
                color: 'secondary' as const,
            },
            {
                id: 'success',
                title: 'Success Color',
                description: 'Success color timeline item',
                timestamp: '11:00 am',
                icon: <CircleCheckFilledIcon size={16} />,
                color: 'success' as const,
            },
            {
                id: 'warning',
                title: 'Warning Color',
                description: 'Warning color timeline item',
                timestamp: '12:00 pm',
                icon: <WarningFilledIcon size={16} />,
                color: 'warning' as const,
            },
            {
                id: 'error',
                title: 'Error Color',
                description: 'Error color timeline item',
                timestamp: '1:00 pm',
                icon: <WarningFilledIcon size={16} />,
                color: 'error' as const,
            },
            {
                id: 'info',
                title: 'Info Color',
                description: 'Info color timeline item',
                timestamp: '2:00 pm',
                icon: <BarChartIcon size={16} />,
                color: 'info' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <div>
                    <h3>Different Colors</h3>
                    <Timeline items={coloredItems} position="alternate" />
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
                    <Timeline items={defaultItems} fullWidth={true} />
                </div>
                <div>
                    <h3>Full Width Left Positioned</h3>
                    <Timeline items={defaultItems} position="left" fullWidth={true} />
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
                <Timeline items={orderItems} position="alternate" variant="outlined" />
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
                <Timeline items={activityItems} position="left" variant="filled" />
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
                <Timeline items={projectItems} position="alternate" size="l" />
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
                    <Timeline items={minimalItems} position="left" variant="outlined" size="s" />
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
                <Timeline items={oppositeItems} position="alternate" variant="outlined" />
            </div>
        );
    },
};

// 커스터마이제이션 예제
export const Customization: Story = {
    render: () => {
        const customItems = [
            {
                id: 'eat',
                title: 'Eat',
                description: 'Because you need strength',
                timestamp: '9:30 am',
                icon: <BarChartIcon size={16} />,
                color: 'default' as const,
            },
            {
                id: 'code',
                title: 'Code',
                description: 'Because it\'s awesome!',
                timestamp: '10:00 am',
                icon: <BookIcon size={16} />,
                color: 'primary' as const,
            },
            {
                id: 'sleep',
                title: 'Sleep',
                description: 'Because you need rest',
                icon: <HomeFilledIcon size={16} />,
                color: 'secondary' as const,
            },
            {
                id: 'repeat',
                title: 'Repeat',
                description: 'Because this is the life you love!',
                icon: <StarFilledIcon size={16} />,
                color: 'success' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>Customization Example</h2>
                <p>커스텀 아이콘과 색상이 적용된 타임라인입니다.</p>
                <Timeline items={customItems} position="alternate" variant="filled" size="l" />
            </div>
        );
    },
};
