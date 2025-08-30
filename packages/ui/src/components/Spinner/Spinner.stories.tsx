import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['circular', 'dots', 'bars', 'pulse', 'ripple'],
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        color: {
            control: { type: 'color' },
        },
        speed: {
            control: { type: 'range', min: 0.5, max: 3, step: 0.1 },
        },
        showLabel: {
            control: { type: 'boolean' },
            description: '로딩 텍스트를 표시할지 여부',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'circular',
        size: 'md',
    },
};

export const Types: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Circular</h3>
                <Spinner type="circular" size="md" />
            </div>
            <div>
                <h3>Dots</h3>
                <Spinner type="dots" size="md" />
            </div>
            <div>
                <h3>Bars</h3>
                <Spinner type="bars" size="md" />
            </div>
            <div>
                <h3>Pulse</h3>
                <Spinner type="pulse" size="md" />
            </div>
            <div>
                <h3>Ripple</h3>
                <Spinner type="ripple" size="md" />
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ textAlign: 'center' }}>
                <h4>XS</h4>
                <Spinner type="circular" size="xs" />
            </div>
            <div style={{ textAlign: 'center' }}>
                <h4>SM</h4>
                <Spinner type="circular" size="sm" />
            </div>
            <div style={{ textAlign: 'center' }}>
                <h4>MD</h4>
                <Spinner type="circular" size="md" />
            </div>
            <div style={{ textAlign: 'center' }}>
                <h4>LG</h4>
                <Spinner type="circular" size="lg" />
            </div>
            <div style={{ textAlign: 'center' }}>
                <h4>XL</h4>
                <Spinner type="circular" size="xl" />
            </div>
        </div>
    ),
};

export const WithLabel: Story = {
    args: {
        type: 'circular',
        size: 'md',
        label: '데이터를 불러오는 중...',
        showLabel: true,
    },
};

export const CustomColors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Primary Color</h3>
                <Spinner type="circular" color="#3b82f6" />
            </div>
            <div>
                <h3>Success Color</h3>
                <Spinner type="dots" color="#10b981" />
            </div>
            <div>
                <h3>Warning Color</h3>
                <Spinner type="bars" color="#f59e0b" />
            </div>
            <div>
                <h3>Error Color</h3>
                <Spinner type="pulse" color="#ef4444" />
            </div>
            <div>
                <h3>Purple Color</h3>
                <Spinner type="ripple" color="#8b5cf6" />
            </div>
        </div>
    ),
};

export const CustomSpeeds: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Slow (2s)</h3>
                <Spinner type="circular" speed={2} />
            </div>
            <div>
                <h3>Normal (1s)</h3>
                <Spinner type="circular" speed={1} />
            </div>
            <div>
                <h3>Fast (0.5s)</h3>
                <Spinner type="circular" speed={0.5} />
            </div>
        </div>
    ),
};

export const AllTypesAndSizes: Story = {
    render: () => {
        const types = ['circular', 'dots', 'bars', 'pulse', 'ripple'] as const;
        const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
                <div style={{ fontWeight: 'bold' }}>Type/Size</div>
                {sizes.map(size => (
                    <div key={size} style={{ fontWeight: 'bold', textAlign: 'center' }}>
                        {size.toUpperCase()}
                    </div>
                ))}

                {types.map(type => (
                    <React.Fragment key={type}>
                        <div style={{ fontWeight: 'bold', textAlign: 'right' }}>
                            {type}
                        </div>
                        {sizes.map(size => (
                            <div key={`${type}-${size}`} style={{ textAlign: 'center' }}>
                                <Spinner type={type} size={size} />
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        );
    },
};

export const InContext: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>페이지 로딩 (텍스트 표시)</h3>
                <div style={{
                    padding: '40px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <Spinner type="circular" size="lg" label="페이지를 불러오는 중..." showLabel={true} />
                </div>
            </div>

            <div>
                <h3>버튼 로딩 (텍스트 없음)</h3>
                <div style={{
                    padding: '20px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <Spinner type="circular" size="sm" />
                </div>
            </div>

            <div>
                <h3>컴포넌트 로딩</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <button style={{
                        padding: '8px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <Spinner type="circular" size="sm" />
                        로딩 중...
                    </button>
                </div>
            </div>

            <div>
                <h3>인라인 로딩</h3>
                <p>
                    데이터를 처리하는 중입니다 <Spinner type="dots" size="sm" />
                </p>
            </div>
        </div>
    ),
};

export const LabelExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>기본 Spinner (텍스트 없음)</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Spinner type="circular" size="md" />
                    <span>기본적으로는 텍스트가 표시되지 않습니다</span>
                </div>
            </div>

            <div>
                <h3>텍스트 표시 Spinner</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Spinner type="circular" size="md" label="데이터를 불러오는 중..." showLabel={true} />
                    <span>showLabel={true}로 설정하면 텍스트가 표시됩니다</span>
                </div>
            </div>

            <div>
                <h3>커스텀 텍스트</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Spinner type="dots" size="md" label="업로드 중..." showLabel={true} />
                    <span>label prop으로 커스텀 텍스트를 설정할 수 있습니다</span>
                </div>
            </div>

            <div>
                <h3>버튼 내부 사용 예시</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <button style={{
                        padding: '8px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: '#3b82f6',
                        color: 'white'
                    }}>
                        <Spinner type="circular" size="sm" />
                        로딩 중...
                    </button>
                    <span>버튼에서는 Spinner만 사용하고 별도로 텍스트를 추가합니다</span>
                </div>
            </div>
        </div>
    ),
};
