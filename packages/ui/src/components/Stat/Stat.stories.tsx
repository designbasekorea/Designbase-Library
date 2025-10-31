import type { Meta, StoryObj } from '@storybook/react';
import {
    WriteIcon,
    CommentIcon,
    BarChartIcon,
    LocationIcon,
    PackageIcon,
    UserIcon,
    HelpIcon
} from '@designbasekorea/icons';
import Stat from './Stat';

const meta: Meta<typeof Stat> = {
    title: 'Components/Stat',
    component: Stat,
    parameters: { layout: 'padded' },
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
        iconPosition: { control: { type: 'select' }, options: ['left', 'right'] },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl'],
            description: '통계 크기',
        },
        variant: { control: { type: 'select' }, options: ['default', 'minimal'] },
        layout: { control: { type: 'select' }, options: ['horizontal', 'vertical'] },
        color: { control: { type: 'select' }, options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'] },
        customColor: { control: false },
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
        onClick: { action: 'onClick' },
    },
    args: {
        value: '278',
        label: 'New Posts',
        icon: <WriteIcon size={20} />,
        iconPosition: 'left',
        size: 'm',
        variant: 'default',
        layout: 'horizontal',
        color: 'primary',
        showProgress: false,
        showChange: false,
        showDescription: false,
        clickable: false,
        disabled: false,
        animated: false,
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
export const AllSizes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Small</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={16} />} size="s" />
                </div>
                <div>
                    <h3>Medium</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} size="m" />
                </div>
                <div>
                    <h3>Large</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={24} />} size="l" />
                </div>
                <div>
                    <h3>Extra Large</h3>
                    <Stat value="278" label="New Posts" icon={<WriteIcon size={28} />} size="xl" />
                </div>
            </div>
        );
    },
};

// 진행률 예제
export const WithProgressExample: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} showProgress progress={75} />
                <Stat value="156" label="New Comments" icon={<CommentIcon size={20} />} showProgress progress={45} color="warning" />
                <Stat value="64.89%" label="Bounce Rate" icon={<BarChartIcon size={20} />} showProgress progress={65} color="success" />
            </div>
        );
    },
};

// 변화율 예제
export const WithChangeExample: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Stat value="278" label="New Posts" icon={<WriteIcon size={20} />} showChange change={{ value: 12.5, type: 'increase', period: 'this month' }} />
                <Stat value="156" label="New Comments" icon={<CommentIcon size={20} />} showChange change={{ value: 5.2, type: 'decrease', period: 'this week' }} color="error" />
            </div>
        );
    },
};

// 다양한 색상
// 불필요한 색상/카드/복합 예제는 제거하여 간소화

// 진행률 상세 예제 (간소화)
export const WithProgressDetails: Story = {
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

// 변화율 상세 예제 (간소화)
export const WithChangeDetails: Story = {
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

// 설명 예제
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

// 인터랙티브 예제 제거 (간소화)

// 미니멀 카드 예제 (필요 시 참고용)
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
                        size="l"
                        color="primary"
                    />

                    <Stat
                        value="156"
                        label="New Comments"
                        icon={<CommentIcon size={24} />}
                        variant="card"
                        size="l"
                        color="success"
                    />

                    <Stat
                        value="64.89%"
                        label="Bounce Rate"
                        icon={<BarChartIcon size={24} />}
                        variant="card"
                        size="l"
                        color="warning"
                    />

                    <Stat
                        value="423"
                        label="Total Visits"
                        icon={<LocationIcon size={24} />}
                        variant="card"
                        size="l"
                        color="error"
                    />
                </div>
            </div>
        );
    },
};
