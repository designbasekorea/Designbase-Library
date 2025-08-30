import type { Meta, StoryObj } from '@storybook/react';
import { Gradient } from './Gradient';

const meta: Meta<typeof Gradient> = {
    title: 'Components/Gradient',
    component: Gradient,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: { type: 'select' },
            options: ['to-right', 'to-left', 'to-bottom', 'to-top', 'to-bottom-right', 'to-bottom-left', 'to-top-right', 'to-top-left', 'radial'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'animated', 'mesh'],
        },
        animationDuration: {
            control: { type: 'number', min: 1, max: 10, step: 0.5 },
        },
        animationDelay: {
            control: { type: 'number', min: 0, max: 5, step: 0.1 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 색상 조합들
const sunsetColors = [
    { color: '#ff6b6b' },
    { color: '#feca57' },
    { color: '#ff9ff3' },
    { color: '#54a0ff' },
];

const oceanColors = [
    { color: '#667eea' },
    { color: '#764ba2' },
];

const forestColors = [
    { color: '#11998e' },
    { color: '#38ef7d' },
];

const auroraColors = [
    { color: '#a8edea' },
    { color: '#fed6e3' },
];

const cosmicColors = [
    { color: '#ff6b6b' },
    { color: '#4ecdc4' },
    { color: '#45b7d1' },
    { color: '#96ceb4' },
    { color: '#feca57' },
    { color: '#ff9ff3' },
];

const neonColors = [
    { color: '#ff006e' },
    { color: '#8338ec' },
    { color: '#3a86ff' },
];

const pastelColors = [
    { color: '#ffd1dc' },
    { color: '#e0f7fa' },
    { color: '#f3e5f5' },
    { color: '#fff3e0' },
];

export const Default: Story = {
    args: {
        colors: sunsetColors,
        direction: 'to-right',
        size: 'md',
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>작은 크기</h3>
                <Gradient colors={sunsetColors} size="sm" />
            </div>

            <div>
                <h3>중간 크기</h3>
                <Gradient colors={sunsetColors} size="md" />
            </div>

            <div>
                <h3>큰 크기</h3>
                <Gradient colors={sunsetColors} size="lg" />
            </div>

            <div>
                <h3>매우 큰 크기</h3>
                <Gradient colors={sunsetColors} size="xl" />
            </div>
        </div>
    ),
};

export const DifferentDirections: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
                <h3>오른쪽으로</h3>
                <Gradient colors={oceanColors} direction="to-right" />
            </div>

            <div>
                <h3>아래로</h3>
                <Gradient colors={oceanColors} direction="to-bottom" />
            </div>

            <div>
                <h3>대각선</h3>
                <Gradient colors={oceanColors} direction="to-bottom-right" />
            </div>

            <div>
                <h3>원형</h3>
                <Gradient colors={oceanColors} direction="radial" />
            </div>
        </div>
    ),
};

export const ColorCombinations: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
                <h3>일몰</h3>
                <Gradient colors={sunsetColors} />
            </div>

            <div>
                <h3>바다</h3>
                <Gradient colors={oceanColors} />
            </div>

            <div>
                <h3>숲</h3>
                <Gradient colors={forestColors} />
            </div>

            <div>
                <h3>오로라</h3>
                <Gradient colors={auroraColors} />
            </div>

            <div>
                <h3>우주</h3>
                <Gradient colors={cosmicColors} />
            </div>

            <div>
                <h3>네온</h3>
                <Gradient colors={neonColors} />
            </div>

            <div>
                <h3>파스텔</h3>
                <Gradient colors={pastelColors} />
            </div>
        </div>
    ),
};

export const Animated: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
                <h3>애니메이션 일몰</h3>
                <Gradient colors={sunsetColors} variant="animated" />
            </div>

            <div>
                <h3>애니메이션 우주</h3>
                <Gradient colors={cosmicColors} variant="animated" />
            </div>

            <div>
                <h3>애니메이션 네온</h3>
                <Gradient colors={neonColors} variant="animated" />
            </div>
        </div>
    ),
};

export const Mesh: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
                <h3>메시 일몰</h3>
                <Gradient colors={sunsetColors} variant="mesh" />
            </div>

            <div>
                <h3>메시 우주</h3>
                <Gradient colors={cosmicColors} variant="mesh" />
            </div>

            <div>
                <h3>메시 네온</h3>
                <Gradient colors={neonColors} variant="mesh" />
            </div>
        </div>
    ),
};

export const WithCustomPositions: Story = {
    args: {
        colors: [
            { color: '#ff6b6b', position: 0 },
            { color: '#feca57', position: 30 },
            { color: '#ff9ff3', position: 70 },
            { color: '#54a0ff', position: 100 },
        ],
        direction: 'to-right',
    },
};

export const FullWidth: Story = {
    args: {
        colors: sunsetColors,
        fullWidth: true,
        size: 'lg',
    },
};

export const WithContent: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <Gradient colors={sunsetColors} size="lg">
                <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                    <h2 style={{ margin: '0 0 10px 0' }}>일몰 그라데이션</h2>
                    <p style={{ margin: 0, opacity: 0.9 }}>아름다운 일몰 색상</p>
                </div>
            </Gradient>

            <Gradient colors={oceanColors} size="lg">
                <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                    <h2 style={{ margin: '0 0 10px 0' }}>바다 그라데이션</h2>
                    <p style={{ margin: 0, opacity: 0.9 }}>깊은 바다 색상</p>
                </div>
            </Gradient>

            <Gradient colors={forestColors} size="lg">
                <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                    <h2 style={{ margin: '0 0 10px 0' }}>숲 그라데이션</h2>
                    <p style={{ margin: 0, opacity: 0.9 }}>자연스러운 녹색</p>
                </div>
            </Gradient>
        </div>
    ),
};

export const CustomAnimationSpeed: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
                <h3>빠른 애니메이션 (2초)</h3>
                <Gradient colors={cosmicColors} variant="animated" animationDuration={2} />
            </div>

            <div>
                <h3>보통 애니메이션 (3초)</h3>
                <Gradient colors={cosmicColors} variant="animated" animationDuration={3} />
            </div>

            <div>
                <h3>느린 애니메이션 (6초)</h3>
                <Gradient colors={cosmicColors} variant="animated" animationDuration={6} />
            </div>
        </div>
    ),
};

export const ResponsiveExample: Story = {
    args: {
        colors: sunsetColors,
        size: 'lg',
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
