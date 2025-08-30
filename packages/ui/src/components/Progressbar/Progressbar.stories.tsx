import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Progressbar } from './Progressbar';

const meta: Meta<typeof Progressbar> = {
    title: 'Components/Progressbar',
    component: Progressbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'warning', 'danger'],
        },
        style: {
            control: { type: 'select' },
            options: ['solid', 'striped', 'animated'],
        },
        labelPosition: {
            control: { type: 'select' },
            options: ['top', 'bottom', 'inside'],
        },
        showLabel: {
            control: { type: 'boolean' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
        size: 'md',
        variant: 'default',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>크기별 진행바</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Progressbar value={30} size="xs" showLabel />
                    <Progressbar value={45} size="sm" showLabel />
                    <Progressbar value={60} size="md" showLabel />
                    <Progressbar value={75} size="lg" showLabel />
                    <Progressbar value={90} size="xl" showLabel />
                </div>
            </div>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>스타일 variant</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Progressbar value={25} variant="default" showLabel />
                    <Progressbar value={40} variant="primary" showLabel />
                    <Progressbar value={55} variant="success" showLabel />
                    <Progressbar value={70} variant="warning" showLabel />
                    <Progressbar value={85} variant="danger" showLabel />
                </div>
            </div>
        </div>
    ),
};

export const Styles: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>디자인 스타일</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Progressbar value={40} style="solid" showLabel />
                    <Progressbar value={55} style="striped" showLabel />
                    <Progressbar value={70} style="animated" showLabel />
                </div>
            </div>
        </div>
    ),
};

export const LabelPositions: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>라벨 위치</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Progressbar
                        value={35}
                        labelPosition="top"
                        label="상단 라벨"
                        size="lg"
                    />
                    <Progressbar
                        value={50}
                        labelPosition="inside"
                        showLabel
                        size="lg"
                    />
                    <Progressbar
                        value={65}
                        labelPosition="bottom"
                        label="하단 라벨"
                        size="lg"
                    />
                </div>
            </div>
        </div>
    ),
};

export const CustomLabels: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>커스텀 라벨</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Progressbar
                        value={25}
                        label="업로드 중... 25%"
                        showLabel={false}
                    />
                    <Progressbar
                        value={50}
                        label="처리 중... 50%"
                        showLabel={false}
                    />
                    <Progressbar
                        value={75}
                        label="거의 완료... 75%"
                        showLabel={false}
                    />
                    <Progressbar
                        value={100}
                        label="완료! 100%"
                        showLabel={false}
                        variant="success"
                    />
                </div>
            </div>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>상태별 진행바</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Progressbar value={30} showLabel />
                    <Progressbar value={60} disabled showLabel />
                </div>
            </div>
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>전체 너비 진행바</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Progressbar value={40} fullWidth showLabel />
                    <Progressbar value={65} fullWidth variant="success" showLabel />
                    <Progressbar value={80} fullWidth variant="warning" showLabel />
                </div>
            </div>
        </div>
    ),
};

export const InContext: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>파일 업로드 예제</h3>
                <div style={{
                    padding: '20px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    backgroundColor: '#f9fafb'
                }}>
                    <div style={{ marginBottom: '12px' }}>
                        <strong>document.pdf</strong> 업로드 중...
                    </div>
                    <Progressbar
                        value={75}
                        variant="primary"
                        style="animated"
                        showLabel
                        size="lg"
                    />
                </div>
            </div>

            <div>
                <h3>설치 진행률 예제</h3>
                <div style={{
                    padding: '20px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    backgroundColor: '#f9fafb'
                }}>
                    <div style={{ marginBottom: '12px' }}>
                        <strong>소프트웨어 설치 중...</strong>
                    </div>
                    <Progressbar
                        value={45}
                        variant="success"
                        label="45% 완료"
                        showLabel={false}
                        size="lg"
                    />
                </div>
            </div>

            <div>
                <h3>배터리 상태 예제</h3>
                <div style={{
                    padding: '20px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    backgroundColor: '#f9fafb'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <span><strong>배터리</strong></span>
                        <span>15%</span>
                    </div>
                    <Progressbar
                        value={15}
                        variant="danger"
                        size="md"
                    />
                </div>
            </div>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [progress, setProgress] = React.useState(25);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>인터랙티브 진행바</h3>
                    <p style={{ color: '#666', marginBottom: '16px' }}>
                        진행률: {progress}%
                    </p>
                    <Progressbar
                        value={progress}
                        variant="primary"
                        showLabel
                        size="lg"
                    />
                    <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                        <button
                            onClick={() => setProgress(Math.max(0, progress - 10))}
                            style={{
                                padding: '8px 16px',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                backgroundColor: '#ffffff',
                                cursor: 'pointer'
                            }}
                        >
                            -10%
                        </button>
                        <button
                            onClick={() => setProgress(Math.min(100, progress + 10))}
                            style={{
                                padding: '8px 16px',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                backgroundColor: '#ffffff',
                                cursor: 'pointer'
                            }}
                        >
                            +10%
                        </button>
                        <button
                            onClick={() => setProgress(0)}
                            style={{
                                padding: '8px 16px',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                backgroundColor: '#ffffff',
                                cursor: 'pointer'
                            }}
                        >
                            리셋
                        </button>
                    </div>
                </div>
            </div>
        );
    },
};

export const AnimatedProgress: Story = {
    render: () => {
        const [progress, setProgress] = React.useState(0);

        React.useEffect(() => {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 100);

            return () => clearInterval(interval);
        }, []);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>자동 진행 애니메이션</h3>
                    <Progressbar
                        value={progress}
                        variant="primary"
                        style="animated"
                        showLabel
                        size="lg"
                    />
                    {progress >= 100 && (
                        <p style={{ color: '#10b981', marginTop: '8px' }}>
                            완료되었습니다! 🎉
                        </p>
                    )}
                </div>
            </div>
        );
    },
};
