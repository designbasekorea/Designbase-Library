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
} from '@designbasekorea/icons';
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
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
            description: '진행 단계 크기',
        },
        layout: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal'],
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
        size: 'm',
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


// 다양한 크기
export const AllSizes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                    <h3>Small Size</h3>
                    <ProgressStep items={defaultItems} size="s" />
                </div>
                <div>
                    <h3>Medium Size (Default)</h3>
                    <ProgressStep items={defaultItems} size="m" />
                </div>
                <div>
                    <h3>Large Size</h3>
                    <ProgressStep items={defaultItems} size="l" />
                </div>
            </div>
        );
    },
};

// 다양한 레이아웃
export const AllLayouts: Story = {
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
            </div>
        );
    },
};

// 다양한 상태
export const AllStates: Story = {
    render: () => {
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
