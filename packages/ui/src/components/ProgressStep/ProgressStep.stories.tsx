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
    HomeFilledIcon
} from '@designbase/icons';
import ProgressStep from './ProgressStep';

const meta: Meta<typeof ProgressStep> = {
    title: 'Components/ProgressStep',
    component: ProgressStep,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '진행 단계를 시각적으로 표시하는 ProgressStep 컴포넌트입니다. 다양한 레이아웃, 크기, 상태를 지원하며 클릭 가능한 인터랙션을 제공합니다.',
            },
        },
    },
    argTypes: {
        items: {
            control: false,
            description: '진행 단계 아이템들',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'filled', 'minimal'],
            description: '진행 단계 변형',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: '진행 단계 크기',
        },
        layout: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal', 'alternating'],
            description: '진행 단계 레이아웃',
        },
        currentStep: {
            control: { type: 'number', min: 0, max: 4, step: 1 },
            description: '현재 활성 단계',
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
        onStepClick: {
            action: 'onStepClick',
            description: '단계 클릭 콜백',
        },
    },
    args: {
        variant: 'default',
        size: 'md',
        layout: 'vertical',
        currentStep: 1,
        clickable: false,
        fullWidth: false,
        disabled: false,
        onStepClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 단계 데이터
const defaultItems = [
    {
        id: 'step1',
        title: '주문 접수',
        description: '고객의 주문이 접수되었습니다.',
        status: 'completed' as const,
        icon: <CircleCheckFilledIcon size={16} />,
        timestamp: '2024-01-15 10:30',
    },
    {
        id: 'step2',
        title: '결제 확인',
        description: '결제 정보를 확인하고 있습니다.',
        status: 'active' as const,
        icon: <CreditCardIcon size={16} />,
        timestamp: '2024-01-15 11:15',
    },
    {
        id: 'step3',
        title: '상품 준비',
        description: '주문하신 상품을 준비하고 있습니다.',
        status: 'pending' as const,
        icon: <PackageIcon size={16} />,
    },
    {
        id: 'step4',
        title: '배송 시작',
        description: '택배사에 상품을 전달합니다.',
        status: 'pending' as const,
        icon: <DeliveryFilledIcon size={16} />,
    },
    {
        id: 'step5',
        title: '배송 완료',
        description: '상품이 고객에게 전달되었습니다.',
        status: 'pending' as const,
        icon: <HomeFilledIcon size={16} />,
    },
];

// 기본 스토리
export const Default: Story = {
    args: {
        items: defaultItems,
    },
};

// 다양한 변형
export const DifferentVariants: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                    <h3>Default Variant</h3>
                    <ProgressStep items={defaultItems} variant="default" />
                </div>
                <div>
                    <h3>Outlined Variant</h3>
                    <ProgressStep items={defaultItems} variant="outlined" />
                </div>
                <div>
                    <h3>Filled Variant</h3>
                    <ProgressStep items={defaultItems} variant="filled" />
                </div>
                <div>
                    <h3>Minimal Variant</h3>
                    <ProgressStep items={defaultItems} variant="minimal" />
                </div>
            </div>
        );
    },
};

// 다양한 크기
export const DifferentSizes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                    <h3>Small Size</h3>
                    <ProgressStep items={defaultItems} size="sm" />
                </div>
                <div>
                    <h3>Medium Size (Default)</h3>
                    <ProgressStep items={defaultItems} size="md" />
                </div>
                <div>
                    <h3>Large Size</h3>
                    <ProgressStep items={defaultItems} size="lg" />
                </div>
            </div>
        );
    },
};

// 다양한 레이아웃
export const DifferentLayouts: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                    <h3>Vertical Layout (Default)</h3>
                    <ProgressStep items={defaultItems} layout="vertical" />
                </div>
                <div>
                    <h3>Horizontal Layout</h3>
                    <ProgressStep items={defaultItems} layout="horizontal" />
                </div>
                <div>
                    <h3>Alternating Layout</h3>
                    <ProgressStep items={defaultItems} layout="alternating" />
                </div>
            </div>
        );
    },
};

// 다양한 상태
export const DifferentStates: Story = {
    render: () => {
        const completedItems = [
            {
                id: 'step1',
                title: '주문 접수',
                description: '고객의 주문이 접수되었습니다.',
                status: 'completed' as const,
                icon: <CircleCheckFilledIcon size={16} />,
                timestamp: '2024-01-15 10:30',
            },
            {
                id: 'step2',
                title: '결제 확인',
                description: '결제 정보를 확인하고 있습니다.',
                status: 'completed' as const,
                icon: <CircleCheckFilledIcon size={16} />,
                timestamp: '2024-01-15 11:15',
            },
            {
                id: 'step3',
                title: '상품 준비',
                description: '주문하신 상품을 준비하고 있습니다.',
                status: 'completed' as const,
                icon: <CircleCheckFilledIcon size={16} />,
                timestamp: '2024-01-15 14:20',
            },
            {
                id: 'step4',
                title: '배송 시작',
                description: '택배사에 상품을 전달합니다.',
                status: 'active' as const,
                icon: <DeliveryFilledIcon size={16} />,
                timestamp: '2024-01-15 16:45',
            },
            {
                id: 'step5',
                title: '배송 완료',
                description: '상품이 고객에게 전달되었습니다.',
                status: 'pending' as const,
                icon: <HomeFilledIcon size={16} />,
            },
        ];

        const errorItems = [
            {
                id: 'step1',
                title: '주문 접수',
                description: '고객의 주문이 접수되었습니다.',
                status: 'completed' as const,
                icon: <CircleCheckFilledIcon size={16} />,
                timestamp: '2024-01-15 10:30',
            },
            {
                id: 'step2',
                title: '결제 확인',
                description: '결제 정보를 확인하고 있습니다.',
                status: 'completed' as const,
                icon: <CircleCheckFilledIcon size={16} />,
                timestamp: '2024-01-15 11:15',
            },
            {
                id: 'step3',
                title: '상품 준비',
                description: '재고 부족으로 인해 지연되고 있습니다.',
                status: 'error' as const,
                icon: <WarningFilledIcon size={16} />,
                timestamp: '2024-01-15 14:20',
            },
            {
                id: 'step4',
                title: '배송 시작',
                description: '택배사에 상품을 전달합니다.',
                status: 'pending' as const,
                icon: <DeliveryFilledIcon size={16} />,
            },
            {
                id: 'step5',
                title: '배송 완료',
                description: '상품이 고객에게 전달되었습니다.',
                status: 'pending' as const,
                icon: <HomeFilledIcon size={16} />,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                    <h3>Normal Progress</h3>
                    <ProgressStep items={defaultItems} />
                </div>
                <div>
                    <h3>Mostly Completed</h3>
                    <ProgressStep items={completedItems} />
                </div>
                <div>
                    <h3>With Error State</h3>
                    <ProgressStep items={errorItems} />
                </div>
            </div>
        );
    },
};

// 인터랙티브 ProgressStep
export const Interactive: Story = {
    render: () => {
        const [currentStep, setCurrentStep] = useState(1);
        const [clickedStep, setClickedStep] = useState<string | null>(null);

        const handleStepClick = (item: any, index: number) => {
            setClickedStep(item.id);
            setCurrentStep(index);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Clickable Progress Steps</h3>
                    <p>현재 단계: {currentStep + 1}</p>
                    <p>클릭된 단계: {clickedStep || '없음'}</p>
                </div>
                <ProgressStep
                    items={defaultItems}
                    currentStep={currentStep}
                    clickable={true}
                    onStepClick={handleStepClick}
                />
            </div>
        );
    },
};

// 전체 너비 ProgressStep
export const FullWidth: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                    <h3>Full Width Progress Steps</h3>
                    <ProgressStep items={defaultItems} fullWidth={true} />
                </div>
                <div>
                    <h3>Full Width Horizontal Layout</h3>
                    <ProgressStep items={defaultItems} layout="horizontal" fullWidth={true} />
                </div>
            </div>
        );
    },
};

// 비활성화된 ProgressStep
export const Disabled: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                    <h3>Disabled Progress Steps</h3>
                    <ProgressStep items={defaultItems} disabled={true} />
                </div>
                <div>
                    <h3>Disabled with Clickable (should not work)</h3>
                    <ProgressStep items={defaultItems} disabled={true} clickable={true} />
                </div>
            </div>
        );
    },
};

// 사용자 등록 프로세스 예제
export const UserRegistrationProcess: Story = {
    render: () => {
        const registrationItems = [
            {
                id: 'account',
                title: '계정 생성',
                description: '기본 계정 정보를 입력합니다.',
                status: 'completed' as const,
                icon: <UserIcon size={16} />,
                timestamp: '2024-01-15 09:00',
            },
            {
                id: 'verification',
                title: '이메일 인증',
                description: '이메일 주소를 확인합니다.',
                status: 'completed' as const,
                icon: <CircleCheckFilledIcon size={16} />,
                timestamp: '2024-01-15 09:05',
            },
            {
                id: 'profile',
                title: '프로필 설정',
                description: '개인 정보를 입력합니다.',
                status: 'active' as const,
                icon: <UserIcon size={16} />,
                timestamp: '2024-01-15 09:10',
            },
            {
                id: 'preferences',
                title: '환경설정',
                description: '앱 사용 환경을 설정합니다.',
                status: 'pending' as const,
                icon: <ClockIcon size={16} />,
            },
            {
                id: 'complete',
                title: '가입 완료',
                description: '모든 설정이 완료되었습니다.',
                status: 'pending' as const,
                icon: <CircleCheckFilledIcon size={16} />,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>사용자 등록 프로세스</h2>
                <ProgressStep items={registrationItems} variant="filled" size="lg" />
            </div>
        );
    },
};

// 주문 처리 프로세스 예제
export const OrderProcessingWorkflow: Story = {
    render: () => {
        const orderItems = [
            {
                id: 'order',
                title: '주문 접수',
                description: '고객의 주문이 시스템에 등록되었습니다.',
                status: 'completed' as const,
                icon: <CircleCheckFilledIcon size={16} />,
                timestamp: '2024-01-15 10:00',
            },
            {
                id: 'payment',
                title: '결제 처리',
                description: '결제 정보를 검증하고 처리합니다.',
                status: 'completed' as const,
                icon: <CreditCardIcon size={16} />,
                timestamp: '2024-01-15 10:05',
            },
            {
                id: 'inventory',
                title: '재고 확인',
                description: '주문 상품의 재고를 확인합니다.',
                status: 'completed' as const,
                icon: <PackageIcon size={16} />,
                timestamp: '2024-01-15 10:10',
            },
            {
                id: 'packing',
                title: '상품 포장',
                description: '주문 상품을 안전하게 포장합니다.',
                status: 'active' as const,
                icon: <PackageIcon size={16} />,
                timestamp: '2024-01-15 10:30',
            },
            {
                id: 'shipping',
                title: '배송 준비',
                description: '택배사에 상품을 전달합니다.',
                status: 'pending' as const,
                icon: <DeliveryFilledIcon size={16} />,
            },
            {
                id: 'delivery',
                title: '배송 완료',
                description: '상품이 고객에게 전달되었습니다.',
                status: 'pending' as const,
                icon: <HomeFilledIcon size={16} />,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>주문 처리 워크플로우</h2>
                <ProgressStep items={orderItems} layout="horizontal" variant="outlined" />
            </div>
        );
    },
};

// 에러 상태가 포함된 프로세스
export const ProcessWithErrors: Story = {
    render: () => {
        const errorItems = [
            {
                id: 'step1',
                title: '데이터 수집',
                description: '필요한 데이터를 수집합니다.',
                status: 'completed' as const,
                icon: <CircleCheckFilledIcon size={16} />,
                timestamp: '2024-01-15 08:00',
            },
            {
                id: 'step2',
                title: '데이터 검증',
                description: '수집된 데이터의 유효성을 검증합니다.',
                status: 'completed' as const,
                icon: <CircleCheckFilledIcon size={16} />,
                timestamp: '2024-01-15 08:30',
            },
            {
                id: 'step3',
                title: '데이터 처리',
                description: '데이터 처리 중 오류가 발생했습니다.',
                status: 'error' as const,
                icon: <WarningFilledIcon size={16} />,
                timestamp: '2024-01-15 09:00',
            },
            {
                id: 'step4',
                title: '결과 생성',
                description: '처리 결과를 생성합니다.',
                status: 'pending' as const,
                icon: <ClockIcon size={16} />,
            },
            {
                id: 'step5',
                title: '완료',
                description: '모든 작업이 완료되었습니다.',
                status: 'pending' as const,
                icon: <CircleCheckFilledIcon size={16} />,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>에러가 포함된 프로세스</h2>
                <ProgressStep items={errorItems} variant="minimal" />
            </div>
        );
    },
};

// 미니멀 스타일의 간단한 진행 단계
export const MinimalSimpleSteps: Story = {
    render: () => {
        const simpleItems = [
            {
                id: 'step1',
                title: '시작',
                status: 'completed' as const,
            },
            {
                id: 'step2',
                title: '진행 중',
                status: 'active' as const,
            },
            {
                id: 'step3',
                title: '완료',
                status: 'pending' as const,
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                    <h3>Minimal Simple Steps</h3>
                    <ProgressStep items={simpleItems} variant="minimal" size="sm" />
                </div>
                <div>
                    <h3>Minimal Simple Steps - Horizontal</h3>
                    <ProgressStep items={simpleItems} variant="minimal" size="sm" layout="horizontal" />
                </div>
            </div>
        );
    },
};
