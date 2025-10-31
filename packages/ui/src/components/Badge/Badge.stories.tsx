import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
        },
        style: {
            control: { type: 'select' },
            options: ['dot', 'number', 'text', 'outlined'],
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

// 타입 (dot, number, text, outlined)
export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Dot</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="dot" variant="primary" />
                    <Badge style="dot" variant="secondary" />
                    <Badge style="dot" variant="info" />
                    <Badge style="dot" variant="success" />
                    <Badge style="dot" variant="warning" />
                    <Badge style="dot" variant="danger" />
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Number</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="number" count={5} variant="primary" />
                    <Badge style="number" count={10} variant="secondary" />
                    <Badge style="number" count={99} variant="info" />
                    <Badge style="number" count={100} variant="success" />
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Text</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="text" variant="primary">New</Badge>
                    <Badge style="text" variant="success">Active</Badge>
                    <Badge style="text" variant="warning">Pending</Badge>
                    <Badge style="text" variant="danger">Error</Badge>
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Outlined</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="outlined" variant="primary">New</Badge>
                    <Badge style="outlined" variant="success">Active</Badge>
                    <Badge style="outlined" variant="warning">Pending</Badge>
                    <Badge style="outlined" variant="danger">Error</Badge>
                </div>
            </div>
        </div>
    ),
};

// 사이즈 (s, m, l)
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Small</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="dot" size="s" variant="primary" />
                    <Badge style="number" count={10} size="s" variant="primary" />
                    <Badge style="text" size="s" variant="primary">Small</Badge>
                    <Badge style="outlined" size="s" variant="primary">Small</Badge>
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Medium</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="dot" size="m" variant="primary" />
                    <Badge style="number" count={10} size="m" variant="primary" />
                    <Badge style="text" size="m" variant="primary">Medium</Badge>
                    <Badge style="outlined" size="m" variant="primary">Medium</Badge>
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Large</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="dot" size="l" variant="primary" />
                    <Badge style="number" count={10} size="l" variant="primary" />
                    <Badge style="text" size="l" variant="primary">Large</Badge>
                    <Badge style="outlined" size="l" variant="primary">Large</Badge>
                </div>
            </div>
        </div>
    ),
};

// 상태 (variants)
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Primary</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="dot" variant="primary" />
                    <Badge style="number" count={10} variant="primary" />
                    <Badge style="text" variant="primary">Primary</Badge>
                    <Badge style="outlined" variant="primary">Primary</Badge>
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Secondary</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="dot" variant="secondary" />
                    <Badge style="number" count={10} variant="secondary" />
                    <Badge style="text" variant="secondary">Secondary</Badge>
                    <Badge style="outlined" variant="secondary">Secondary</Badge>
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Info</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="dot" variant="info" />
                    <Badge style="number" count={10} variant="info" />
                    <Badge style="text" variant="info">Info</Badge>
                    <Badge style="outlined" variant="info">Info</Badge>
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Success</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="dot" variant="success" />
                    <Badge style="number" count={10} variant="success" />
                    <Badge style="text" variant="success">Success</Badge>
                    <Badge style="outlined" variant="success">Success</Badge>
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Warning</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="dot" variant="warning" />
                    <Badge style="number" count={10} variant="warning" />
                    <Badge style="text" variant="warning">Warning</Badge>
                    <Badge style="outlined" variant="warning">Warning</Badge>
                </div>
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Danger</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Badge style="dot" variant="danger" />
                    <Badge style="number" count={10} variant="danger" />
                    <Badge style="text" variant="danger">Danger</Badge>
                    <Badge style="outlined" variant="danger">Danger</Badge>
                </div>
            </div>
        </div>
    ),
};
