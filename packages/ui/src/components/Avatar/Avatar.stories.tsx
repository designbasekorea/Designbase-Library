import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { UserIcon, SettingsIcon, BellIcon } from '@designbase/icons';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
        },
        status: {
            control: { type: 'select' },
            options: ['online', 'offline', 'away', 'busy'],
        },
        loading: {
            control: { type: 'boolean' },
        },
        onClick: {
            action: 'clicked',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: 'https://via.placeholder.com/40',
        alt: 'User Avatar',
    },
};

export const WithInitials: Story = {
    args: {
        initials: '김철수',
    },
};

export const WithIcon: Story = {
    args: {
        icon: <UserIcon />,
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Avatar size="xs" initials="XS" />
            <Avatar size="sm" initials="SM" />
            <Avatar size="md" initials="MD" />
            <Avatar size="lg" initials="LG" />
            <Avatar size="xl" initials="XL" />
            <Avatar size="2xl" initials="2XL" />
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Avatar variant="default" initials="DF" />
            <Avatar variant="primary" initials="PR" />
            <Avatar variant="success" initials="SC" />
            <Avatar variant="warning" initials="WG" />
            <Avatar variant="danger" initials="DG" />
            <Avatar variant="info" initials="IF" />
        </div>
    ),
};

export const StatusIndicators: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Avatar src="https://via.placeholder.com/40" alt="Online User" status="online" />
            <Avatar src="https://via.placeholder.com/40" alt="Offline User" status="offline" />
            <Avatar src="https://via.placeholder.com/40" alt="Away User" status="away" />
            <Avatar src="https://via.placeholder.com/40" alt="Busy User" status="busy" />
        </div>
    ),
};

export const Loading: Story = {
    args: {
        loading: true,
    },
};

export const WithBadge: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Avatar src="https://via.placeholder.com/40" badge={3} badgeVariant="danger" />
            <Avatar src="https://via.placeholder.com/40" badge={99} badgeVariant="primary" />
            <Avatar src="https://via.placeholder.com/40" badge={1} badgeStyle="dot" badgeVariant="success" />
            <Avatar src="https://via.placeholder.com/40" badgeText="New" badgeStyle="text" badgeVariant="warning" />
            <Avatar src="https://via.placeholder.com/40" badgeText="VIP" badgeStyle="outlined" badgeVariant="info" />
        </div>
    ),
};

export const Clickable: Story = {
    args: {
        src: 'https://via.placeholder.com/40',
        alt: 'Clickable Avatar',
        onClick: () => alert('Avatar clicked!'),
    },
};

export const ImageError: Story = {
    args: {
        src: 'https://invalid-url.com/avatar.jpg',
        alt: 'User with Image Error',
        initials: '김철수',
    },
};

export const WithLongName: Story = {
    args: {
        initials: '김철수이영희박민수',
    },
};

export const CustomStyles: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Avatar
                initials="CS"
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white'
                }}
            />
            <Avatar
                initials="YG"
                style={{
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white'
                }}
            />
            <Avatar
                initials="MS"
                style={{
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: 'white'
                }}
            />
        </div>
    ),
};
