import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem } from './Grid';

const meta: Meta<typeof Grid> = {
    title: 'Components/Grid',
    component: Grid,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        columns: {
            control: { type: 'select' },
            options: [1, 2, 3, 4, 5, 6, 12],
        },
        gap: {
            control: { type: 'select' },
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
        },
        alignment: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'stretch'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 아이템 생성 함수
const generateGridItems = (count: number = 6) => {
    return Array.from({ length: count }, (_, i) => (
        <GridItem key={i}>
            <div
                style={{
                    padding: '20px',
                    backgroundColor: `hsl(${(i * 137.5) % 360}, 70%, 90%)`,
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    textAlign: 'center',
                    minHeight: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                아이템 {i + 1}
            </div>
        </GridItem>
    ));
};

export const Default: Story = {
    args: {
        columns: 3,
        gap: 'md',
        children: generateGridItems(6),
    },
};

export const TwoColumns: Story = {
    args: {
        columns: 2,
        gap: 'lg',
        children: generateGridItems(4),
    },
};

export const FourColumns: Story = {
    args: {
        columns: 4,
        gap: 'md',
        children: generateGridItems(8),
    },
};

export const SixColumns: Story = {
    args: {
        columns: 6,
        gap: 'sm',
        children: generateGridItems(12),
    },
};

export const TwelveColumns: Story = {
    args: {
        columns: 12,
        gap: 'xs',
        children: generateGridItems(12),
    },
};

export const DifferentSpacings: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>간격 없음</h3>
                <Grid columns={3} gap="none">
                    {generateGridItems(3)}
                </Grid>
            </div>
            <div>
                <h3>작은 간격</h3>
                <Grid columns={3} gap="sm">
                    {generateGridItems(3)}
                </Grid>
            </div>
            <div>
                <h3>중간 간격</h3>
                <Grid columns={3} gap="md">
                    {generateGridItems(3)}
                </Grid>
            </div>
            <div>
                <h3>큰 간격</h3>
                <Grid columns={3} gap="lg">
                    {generateGridItems(3)}
                </Grid>
            </div>
        </div>
    ),
};

export const DifferentAlignments: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>시작 정렬</h3>
                <Grid columns={3} gap="md" alignment="start" style={{ minHeight: '200px' }}>
                    {generateGridItems(3)}
                </Grid>
            </div>
            <div>
                <h3>중앙 정렬</h3>
                <Grid columns={3} gap="md" alignment="center" style={{ minHeight: '200px' }}>
                    {generateGridItems(3)}
                </Grid>
            </div>
            <div>
                <h3>끝 정렬</h3>
                <Grid columns={3} gap="md" alignment="end" style={{ minHeight: '200px' }}>
                    {generateGridItems(3)}
                </Grid>
            </div>
            <div>
                <h3>늘리기</h3>
                <Grid columns={3} gap="md" alignment="stretch" style={{ minHeight: '200px' }}>
                    {generateGridItems(3)}
                </Grid>
            </div>
        </div>
    ),
};

export const GridItemSpans: Story = {
    render: () => (
        <Grid columns={12} gap="md">
            <GridItem span={6}>
                <div
                    style={{
                        padding: '20px',
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        borderRadius: '8px',
                        textAlign: 'center',
                        minHeight: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    span=6 (절반)
                </div>
            </GridItem>
            <GridItem span={3}>
                <div
                    style={{
                        padding: '20px',
                        backgroundColor: '#10b981',
                        color: 'white',
                        borderRadius: '8px',
                        textAlign: 'center',
                        minHeight: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    span=3 (1/4)
                </div>
            </GridItem>
            <GridItem span={3}>
                <div
                    style={{
                        padding: '20px',
                        backgroundColor: '#f59e0b',
                        color: 'white',
                        borderRadius: '8px',
                        textAlign: 'center',
                        minHeight: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    span=3 (1/4)
                </div>
            </GridItem>
            <GridItem start={1} end={4}>
                <div
                    style={{
                        padding: '20px',
                        backgroundColor: '#ef4444',
                        color: 'white',
                        borderRadius: '8px',
                        textAlign: 'center',
                        minHeight: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    start=1, end=4
                </div>
            </GridItem>
            <GridItem start={4} end={13}>
                <div
                    style={{
                        padding: '20px',
                        backgroundColor: '#8b5cf6',
                        color: 'white',
                        borderRadius: '8px',
                        textAlign: 'center',
                        minHeight: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    start=4, end=13
                </div>
            </GridItem>
        </Grid>
    ),
};

export const ResponsiveGrid: Story = {
    args: {
        columns: 6,
        gap: 'md',
        children: generateGridItems(12),
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
