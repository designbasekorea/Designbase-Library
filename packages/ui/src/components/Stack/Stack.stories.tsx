import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
    title: 'Components/Stack',
    component: Stack,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal'],
        },
        alignment: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'stretch'],
        },
        justify: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
        },
        spacing: {
            control: { type: 'select' },
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 아이템 생성 함수
const generateStackItems = (count: number = 4) => {
    return Array.from({ length: count }, (_, i) => (
        <div
            key={i}
            style={{
                padding: '16px',
                backgroundColor: `hsl(${(i * 137.5) % 360}, 70%, 90%)`,
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                textAlign: 'center',
                minWidth: '120px',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            아이템 {i + 1}
        </div>
    ));
};

const generateDifferentSizedItems = () => [
    <div
        key="small"
        style={{
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            borderRadius: '6px',
            fontSize: '14px',
        }}
    >
        작은 아이템
    </div>,
    <div
        key="medium"
        style={{
            padding: '16px 24px',
            backgroundColor: '#10b981',
            color: 'white',
            borderRadius: '8px',
            fontSize: '16px',
        }}
    >
        중간 아이템
    </div>,
    <div
        key="large"
        style={{
            padding: '24px 32px',
            backgroundColor: '#f59e0b',
            color: 'white',
            borderRadius: '10px',
            fontSize: '18px',
        }}
    >
        큰 아이템
    </div>,
];

export const Default: Story = {
    args: {
        children: generateStackItems(4),
    },
};

export const Horizontal: Story = {
    args: {
        direction: 'horizontal',
        children: generateStackItems(4),
    },
};

export const DifferentSpacings: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>간격 없음</h3>
                <Stack spacing="none">
                    {generateStackItems(3)}
                </Stack>
            </div>
            <div>
                <h3>작은 간격</h3>
                <Stack spacing="sm">
                    {generateStackItems(3)}
                </Stack>
            </div>
            <div>
                <h3>중간 간격</h3>
                <Stack spacing="md">
                    {generateStackItems(3)}
                </Stack>
            </div>
            <div>
                <h3>큰 간격</h3>
                <Stack spacing="lg">
                    {generateStackItems(3)}
                </Stack>
            </div>
        </div>
    ),
};

export const DifferentAlignments: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>시작 정렬</h3>
                <div style={{ minHeight: '200px', border: '1px solid #e2e8f0', padding: '16px' }}>
                    <Stack alignment="start">
                        {generateDifferentSizedItems()}
                    </Stack>
                </div>
            </div>
            <div>
                <h3>중앙 정렬</h3>
                <div style={{ minHeight: '200px', border: '1px solid #e2e8f0', padding: '16px' }}>
                    <Stack alignment="center">
                        {generateDifferentSizedItems()}
                    </Stack>
                </div>
            </div>
            <div>
                <h3>끝 정렬</h3>
                <div style={{ minHeight: '200px', border: '1px solid #e2e8f0', padding: '16px' }}>
                    <Stack alignment="end">
                        {generateDifferentSizedItems()}
                    </Stack>
                </div>
            </div>
            <div>
                <h3>늘리기</h3>
                <div style={{ minHeight: '200px', border: '1px solid #e2e8f0', padding: '16px' }}>
                    <Stack alignment="stretch">
                        {generateDifferentSizedItems()}
                    </Stack>
                </div>
            </div>
        </div>
    ),
};

export const DifferentJustifications: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>시작 정렬</h3>
                <div style={{ border: '1px solid #e2e8f0', padding: '16px' }}>
                    <Stack direction="horizontal" justify="start">
                        {generateStackItems(3)}
                    </Stack>
                </div>
            </div>
            <div>
                <h3>중앙 정렬</h3>
                <div style={{ border: '1px solid #e2e8f0', padding: '16px' }}>
                    <Stack direction="horizontal" justify="center">
                        {generateStackItems(3)}
                    </Stack>
                </div>
            </div>
            <div>
                <h3>끝 정렬</h3>
                <div style={{ border: '1px solid #e2e8f0', padding: '16px' }}>
                    <Stack direction="horizontal" justify="end">
                        {generateStackItems(3)}
                    </Stack>
                </div>
            </div>
            <div>
                <h3>Space Between</h3>
                <div style={{ border: '1px solid #e2e8f0', padding: '16px' }}>
                    <Stack direction="horizontal" justify="space-between">
                        {generateStackItems(3)}
                    </Stack>
                </div>
            </div>
            <div>
                <h3>Space Around</h3>
                <div style={{ border: '1px solid #e2e8f0', padding: '16px' }}>
                    <Stack direction="horizontal" justify="space-around">
                        {generateStackItems(3)}
                    </Stack>
                </div>
            </div>
            <div>
                <h3>Space Evenly</h3>
                <div style={{ border: '1px solid #e2e8f0', padding: '16px' }}>
                    <Stack direction="horizontal" justify="space-evenly">
                        {generateStackItems(3)}
                    </Stack>
                </div>
            </div>
        </div>
    ),
};

export const WithWrap: Story = {
    args: {
        direction: 'horizontal',
        wrap: true,
        children: generateStackItems(8),
    },
};

export const FullWidth: Story = {
    args: {
        direction: 'horizontal',
        fullWidth: true,
        justify: 'space-between',
        children: generateStackItems(3),
    },
};

export const FullHeight: Story = {
    args: {
        fullHeight: true,
        justify: 'space-between',
        children: generateStackItems(3),
    },
    parameters: {
        layout: 'fullscreen',
    },
};

export const ResponsiveExample: Story = {
    args: {
        direction: 'horizontal',
        children: generateStackItems(6),
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
