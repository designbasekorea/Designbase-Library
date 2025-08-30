/**
 * Badge 컴포넌트 스토리
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '작은 텍스트를 감싸는 다양한 스타일의 배지 컴포넌트입니다. 점, 숫자, 텍스트 라벨, 아웃라인 스타일을 지원합니다.',
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: '배지의 크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
            description: '배지의 색상',
        },
        style: {
            control: { type: 'select' },
            options: ['dot', 'number', 'text', 'outlined'],
            description: '배지의 스타일',
        },
        count: {
            control: { type: 'number' },
            description: '숫자 값 (style이 number일 때 사용)',
        },
        maxCount: {
            control: { type: 'number' },
            description: '최대 표시 숫자',
        },
        disabled: {
            control: { type: 'boolean' },
            description: '비활성화 상태',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: 'Badge',
        variant: 'primary',
        style: 'text',
    },
};

export const Dot: Story = {
    args: {
        style: 'dot',
        variant: 'primary',
    },
};

export const Number: Story = {
    args: {
        style: 'number',
        count: 10,
        variant: 'primary',
    },
};

export const Text: Story = {
    args: {
        children: 'Badge',
        style: 'text',
        variant: 'primary',
    },
};

export const Outlined: Story = {
    args: {
        children: 'Outlined',
        style: 'outlined',
        variant: 'primary',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Badge style="dot" variant="primary" />
                <Badge style="dot" variant="secondary" />
                <Badge style="dot" variant="info" />
                <Badge style="dot" variant="success" />
                <Badge style="dot" variant="warning" />
                <Badge style="dot" variant="danger" />
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Badge style="number" count={10} variant="primary" />
                <Badge style="number" count={10} variant="secondary" />
                <Badge style="number" count={10} variant="info" />
                <Badge style="number" count={10} variant="success" />
                <Badge style="number" count={10} variant="warning" />
                <Badge style="number" count={10} variant="danger" />
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Badge style="number" count={99} variant="primary" />
                <Badge style="number" count={99} variant="secondary" />
                <Badge style="number" count={99} variant="info" />
                <Badge style="number" count={99} variant="success" />
                <Badge style="number" count={99} variant="warning" />
                <Badge style="number" count={99} variant="danger" />
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Badge style="text" variant="primary">Badge</Badge>
                <Badge style="text" variant="secondary">Badge</Badge>
                <Badge style="text" variant="info">Badge</Badge>
                <Badge style="text" variant="success">Badge</Badge>
                <Badge style="text" variant="warning">Badge</Badge>
                <Badge style="text" variant="danger">Badge</Badge>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Badge style="outlined" variant="primary">Outlined</Badge>
                <Badge style="outlined" variant="secondary">Outlined</Badge>
                <Badge style="outlined" variant="info">Outlined</Badge>
                <Badge style="outlined" variant="success">Outlined</Badge>
                <Badge style="outlined" variant="warning">Outlined</Badge>
                <Badge style="outlined" variant="danger">Outlined</Badge>
            </div>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Badge style="dot" size="sm" variant="primary" />
                <Badge style="dot" size="md" variant="primary" />
                <Badge style="dot" size="lg" variant="primary" />
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Badge style="number" count={10} size="sm" variant="primary" />
                <Badge style="number" count={10} size="md" variant="primary" />
                <Badge style="number" count={10} size="lg" variant="primary" />
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Badge style="text" size="sm" variant="primary">Badge</Badge>
                <Badge style="text" size="md" variant="primary">Badge</Badge>
                <Badge style="text" size="lg" variant="primary">Badge</Badge>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Badge style="outlined" size="sm" variant="primary">Outlined</Badge>
                <Badge style="outlined" size="md" variant="primary">Outlined</Badge>
                <Badge style="outlined" size="lg" variant="primary">Outlined</Badge>
            </div>
        </div>
    ),
};

export const NumberExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Badge style="number" count={1} variant="primary" />
            <Badge style="number" count={10} variant="primary" />
            <Badge style="number" count={99} variant="primary" />
            <Badge style="number" count={100} variant="primary" />
            <Badge style="number" count={999} variant="primary" />
        </div>
    ),
};

export const TextExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge style="text" variant="primary">New</Badge>
            <Badge style="text" variant="success">Active</Badge>
            <Badge style="text" variant="warning">Pending</Badge>
            <Badge style="text" variant="danger">Error</Badge>
            <Badge style="text" variant="info">Info</Badge>
            <Badge style="text" variant="secondary">Draft</Badge>
        </div>
    ),
};

export const OutlinedExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge style="outlined" variant="primary">New</Badge>
            <Badge style="outlined" variant="success">Active</Badge>
            <Badge style="outlined" variant="warning">Pending</Badge>
            <Badge style="outlined" variant="danger">Error</Badge>
            <Badge style="outlined" variant="info">Info</Badge>
            <Badge style="outlined" variant="secondary">Draft</Badge>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Badge style="text" variant="primary" disabled>Disabled</Badge>
            <Badge style="number" count={10} variant="primary" disabled />
            <Badge style="outlined" variant="primary" disabled>Disabled</Badge>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Badge
                style="text"
                variant="primary"
                onClick={() => alert('Badge clicked!')}
                className="cursor-pointer"
            >
                Clickable
            </Badge>
            <Badge
                style="number"
                count={5}
                variant="danger"
                onClick={() => alert('Number badge clicked!')}
                className="cursor-pointer"
            />
        </div>
    ),
};
