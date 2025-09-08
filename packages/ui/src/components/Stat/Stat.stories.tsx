import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from '@storybook/test';
import {
    WriteIcon,
    CommentIcon,
    BarChartIcon,
    LocationIcon,
    PackageIcon,
    UserIcon,
    HelpIcon
} from '@designbase/icons';
import Stat from './Stat';

const meta: Meta<typeof Stat> = {
    title: 'Components/Stat',
    component: Stat,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '통계 데이터를 표시하는 Stat 컴포넌트입니다. 다양한 크기, 스타일, 레이아웃을 지원하며 진행률, 변화율, 설명 등을 포함할 수 있습니다.',
            },
        },
    },
    argTypes: {
        value: {
            control: { type: 'text' },
            description: '통계 값',
        },
        label: {
            control: { type: 'text' },
            description: '통계 라벨',
        },
        icon: {
            control: false,
            description: '아이콘',
        },
        iconPosition: {
            control: { type: 'select' },
            options: ['left', 'right'],
            description: '아이콘 위치',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl'],
            description: '통계 크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'minimal', 'card', 'colored'],
            description: '통계 스타일 변형',
        },
        layout: {
            control: { type: 'select' },
            options: ['horizontal', 'vertical', 'reverse'],
            description: '레이아웃 방향',
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'custom'],
            description: '색상',
        },
        customColor: {
            control: { type: 'color' },
            description: '커스텀 색상',
        },
        progress: {
            control: { type: 'number', min: 0, max: 100, step: 1 },
            description: '진행률 (0-100)',
        },
        showProgress: {
            control: { type: 'boolean' },
            description: '진행률 표시',
        },
        change: {
            control: { type: 'object' },
            description: '변화율',
        },
        showChange: {
            control: { type: 'boolean' },
            description: '변화율 표시',
        },
        description: {
            control: { type: 'text' },
            description: '설명 텍스트',
        },
        showDescription: {
            control: { type: 'boolean' },
            description: '설명 표시',
        },
        clickable: {
            control: { type: 'boolean' },
            description: '클릭 가능',
        },
        disabled: {
            control: { type: 'boolean' },
            description: '비활성화',
        },
        animated: {
            control: { type: 'boolean' },
            description: '애니메이션',
        },
        onClick: {
            action: 'onClick',
            description: '클릭 핸들러',
        },
    },
    args: {
        value: '278',
        label: 'New Posts',
        icon: <WriteIcon size={20} />,
        iconPosition: 'left',
        size: 'md',
        variant: 'default',
        layout: 'horizontal',
        color: 'primary',
        showProgress: false,
        showChange: false,
        showDescription: false,
        clickable: false,
        disabled: false,
        animated: false,
        onClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
    args: {
        value: '278',
        label: 'New Posts',
        icon: <WriteIcon size={20} />,
    },
};

// 다양한 크기
export const DifferentSizes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Small</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={16} />} size="sm" />
                </div>
                <div>
                    <h3>Medium</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} size="md" />
                </div>
                <div>
                    <h3>Large</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={24} />} size="lg" />
                </div>
                <div>
                    <h3>Extra Large</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={28} />} size="xl" />
                </div>
            </div>
        );
    },
};

// 다양한 변형
export const DifferentVariants: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Default</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} variant="default" />
                </div>
                <div>
                    <h3>Minimal</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} variant="minimal" />
                </div>
                <div>
                    <h3>Card</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} variant="card" />
                </div>
                <div>
                    <h3>Colored</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} variant="colored" color="primary" />
                </div>
            </div>
        );
    },
};

// 다양한 레이아웃
export const DifferentLayouts: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Horizontal (Default)</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} layout="horizontal" />
                </div>
                <div>
                    <h3>Vertical</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} layout="vertical" />
                </div>
                <div>
                    <h3>Reverse</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} layout="reverse" />
                </div>
            </div>
        );
    },
};

// 다양한 색상
export const DifferentColors: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Primary</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} color="primary" />
                </div>
                <div>
                    <h3>Secondary</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} color="secondary" />
                </div>
                <div>
                    <h3>Success</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} color="success" />
                </div>
                <div>
                    <h3>Warning</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} color="warning" />
                </div>
                <div>
                    <h3>Error</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} color="error" />
                </div>
                <div>
                    <h3>Info</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} color="info" />
                </div>
                <div>
                    <h3>Custom Color</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} color="custom" customColor="#8b5cf6" />
                </div>
            </div>
        );
    },
};

// 진행률이 있는 Stat
export const WithProgress: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>With Progress Bar</h3>
                    <Stat
                        value="278"
                        label="New Posts"
                        icon={<WriteIcon size={20} />}
                        showProgress={true}
                        progress={75}
                    />
                </div>
                <div>
                    <h3>Different Progress Values</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Stat value="156" label="New Comments" icon={<CommentIcon size={20} />} showProgress={true} progress={45} color="warning" />
                        <Stat value="64.89%" label="Bounce Rate" icon={<BarChartIcon size={20} />} showProgress={true} progress={65} color="success" />
                        <Stat value="423" label="Total Visits" icon={<LocationIcon size={20} />} showProgress={true} progress={85} color="error" />
                    </div>
                </div>
            </div>
        );
    },
};

// 변화율이 있는 Stat
export const WithChange: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>With Change Rate</h3>
                    <Stat
                        value="278"
                        label="New Posts"
                        icon={<WriteIcon size={20} />}
                        showChange={true}
                        change={{ value: 12.5, type: 'increase', period: 'this month' }}
                    />
                </div>
                <div>
                    <h3>Different Change Types</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Stat value="156" label="New Comments" icon={<CommentIcon size={20} />} showChange={true} change={{ value: 8.3, type: 'increase', period: 'this week' }} color="success" />
                        <Stat value="64.89%" label="Bounce Rate" icon={<BarChartIcon size={20} />} showChange={true} change={{ value: 5.2, type: 'decrease', period: 'this month' }} color="warning" />
                        <Stat value="423" label="Total Visits" icon={<LocationIcon size={20} />} showChange={true} change={{ value: 15.7, type: 'increase', period: 'this quarter' }} color="error" />
                    </div>
                </div>
            </div>
        );
    },
};

// 설명이 있는 Stat
export const WithDescription: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>With Description</h3>
                    <Stat
                        value="278"
                        label="New Posts"
                        icon={<WriteIcon size={20} />}
                        showDescription={true}
                        description="Compared to last month's performance"
                    />
                </div>
                <div>
                    <h3>Different Descriptions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Stat value="156" label="New Comments" icon={<CommentIcon size={20} />} showDescription={true} description="User engagement is increasing" color="success" />
                        <Stat value="64.89%" label="Bounce Rate" icon={<BarChartIcon size={20} />} showDescription={true} description="Target is below 50%" color="warning" />
                        <Stat value="423" label="Total Visits" icon={<LocationIcon size={20} />} showDescription={true} description="Traffic from organic search" color="info" />
                    </div>
                </div>
            </div>
        );
    },
};

// 인터랙티브 Stat
export const Interactive: Story = {
    render: () => {
        const [clickCount, setClickCount] = useState(0);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Clickable Stat</h3>
                    <Stat
                        value="278"
                        label="New Posts"
                        icon={<WriteIcon size={20} />}
                        clickable={true}
                        onClick={() => setClickCount(prev => prev + 1)}
                    />
                    <p>클릭 횟수: {clickCount}</p>
                </div>
                <div>
                    <h3>Disabled Stat</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} disabled={true} />
                </div>
                <div>
                    <h3>Animated Stat</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} animated={true} />
                </div>
            </div>
        );
    },
};

// 미니멀 통계 카드 (이미지와 동일한 스타일)
export const MinimalStatisticsCards: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>Minimal Statistics Cards</h2>
                <p>Statistics on minimal cards.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    {/* Row 1 */}
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} variant="minimal" color="primary" />
                    <Stat value="156" label="New Comments" icon={<CommentIcon size={20} />} variant="minimal" color="warning" />
                    <Stat value="64.89%" label="Bounce Rate" icon={<BarChartIcon size={20} />} variant="minimal" color="success" />
                    <Stat value="423" label="Total Visits" icon={<LocationIcon size={20} />} variant="minimal" color="error" />

                    {/* Row 2 */}
                    <Stat value="278" label="New Projects" icon={<PackageIcon size={20} />} variant="minimal" color="error" layout="reverse" />
                    <Stat value="156" label="New Clients" icon={<UserIcon size={20} />} variant="minimal" color="info" layout="reverse" />
                    <Stat value="64.89%" label="Conversion Rate" icon={<BarChartIcon size={20} />} variant="minimal" color="error" layout="reverse" />
                    <Stat value="423" label="Support Tickets" icon={<HelpIcon size={20} />} variant="minimal" color="primary" layout="reverse" />

                    {/* Row 3 with Progress */}
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} variant="minimal" color="primary" layout="reverse" showProgress={true} progress={75} />
                    <Stat value="156" label="New Comments" icon={<CommentIcon size={20} />} variant="minimal" color="warning" layout="reverse" showProgress={true} progress={55} />
                    <Stat value="64.89%" label="Bounce Rate" icon={<BarChartIcon size={20} />} variant="minimal" color="success" layout="reverse" showProgress={true} progress={65} />
                    <Stat value="423" label="Total Visits" icon={<LocationIcon size={20} />} variant="minimal" color="error" layout="reverse" showProgress={true} progress={45} />
                </div>
            </div>
        );
    },
};

// 배경색이 있는 미니멀 통계
export const MinimalStatisticsWithBackgroundColor: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>Minimal Statistics With Background Color</h2>
                <p>Statistics on minimal cards with background color.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} variant="colored" color="primary" />
                    <Stat value="156" label="New Comments" icon={<CommentIcon size={20} />} variant="colored" color="warning" />
                    <Stat value="64.89%" label="Bounce Rate" icon={<BarChartIcon size={20} />} variant="colored" color="success" />
                    <Stat value="423" label="Total Visits" icon={<LocationIcon size={20} />} variant="colored" color="error" />
                </div>
            </div>
        );
    },
};

// 복합 기능이 있는 Stat
export const ComplexStats: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>Complex Statistics</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                    <Stat
                        value="278"
                        label="New Posts"
                        icon={<WriteIcon size={20} />}
                        showProgress={true}
                        progress={75}
                        showChange={true}
                        change={{ value: 12.5, type: 'increase', period: 'this month' }}
                        showDescription={true}
                        description="Content creation is on track"
                        color="primary"
                    />

                    <Stat
                        value="156"
                        label="New Comments"
                        icon={<CommentIcon size={20} />}
                        showProgress={true}
                        progress={55}
                        showChange={true}
                        change={{ value: 8.3, type: 'increase', period: 'this week' }}
                        showDescription={true}
                        description="User engagement is growing"
                        color="success"
                    />

                    <Stat
                        value="64.89%"
                        label="Bounce Rate"
                        icon={<BarChartIcon size={20} />}
                        showProgress={true}
                        progress={65}
                        showChange={true}
                        change={{ value: 5.2, type: 'decrease', period: 'this month' }}
                        showDescription={true}
                        description="Improving user retention"
                        color="warning"
                    />

                    <Stat
                        value="423"
                        label="Total Visits"
                        icon={<LocationIcon size={20} />}
                        showProgress={true}
                        progress={85}
                        showChange={true}
                        change={{ value: 15.7, type: 'increase', period: 'this quarter' }}
                        showDescription={true}
                        description="Traffic from multiple sources"
                        color="info"
                    />
                </div>
            </div>
        );
    },
};

// 카드 스타일 예제
export const CardStyle: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2>Card Style Statistics</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    <Stat
                        value="278"
                        label="New Posts"
                        icon={<WriteIcon size={24} />}
                        variant="card"
                        size="lg"
                        color="primary"
                    />

                    <Stat
                        value="156"
                        label="New Comments"
                        icon={<CommentIcon size={24} />}
                        variant="card"
                        size="lg"
                        color="success"
                    />

                    <Stat
                        value="64.89%"
                        label="Bounce Rate"
                        icon={<BarChartIcon size={24} />}
                        variant="card"
                        size="lg"
                        color="warning"
                    />

                    <Stat
                        value="423"
                        label="Total Visits"
                        icon={<LocationIcon size={24} />}
                        variant="card"
                        size="lg"
                        color="error"
                    />
                </div>
            </div>
        );
    },
};
