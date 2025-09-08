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

// 모든 변형(variants)을 보여주는 스토리
export const AllVariants: Story = {
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

// 모든 크기를 보여주는 스토리
export const AllSizes: Story = {
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

// 모든 타입을 보여주는 스토리
export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>이미지 Avatar</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar src="https://via.placeholder.com/40" alt="User Avatar" />
                    <Avatar src="https://via.placeholder.com/40" alt="User with Status" status="online" />
                    <Avatar src="https://via.placeholder.com/40" alt="User with Status" status="away" />
                </div>
            </div>

            <div>
                <h3>이니셜 Avatar</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar initials="김철수" />
                    <Avatar initials="이영희" variant="primary" />
                    <Avatar initials="박민수" variant="success" />
                </div>
            </div>

            <div>
                <h3>아이콘 Avatar</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar icon={<UserIcon />} />
                    <Avatar icon={<SettingsIcon />} variant="warning" />
                    <Avatar icon={<BellIcon />} variant="info" />
                </div>
            </div>

            <div>
                <h3>상태 표시 Avatar</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar src="https://via.placeholder.com/40" alt="Online User" status="online" />
                    <Avatar src="https://via.placeholder.com/40" alt="Offline User" status="offline" />
                    <Avatar src="https://via.placeholder.com/40" alt="Away User" status="away" />
                    <Avatar src="https://via.placeholder.com/40" alt="Busy User" status="busy" />
                </div>
            </div>

            <div>
                <h3>로딩 상태 Avatar</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar loading={true} />
                    <Avatar loading={true} size="lg" />
                </div>
            </div>

            <div>
                <h3>클릭 가능한 Avatar</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar
                        initials="CK"
                        onClick={() => alert('Avatar clicked!')}
                        className="designbase-avatar--clickable"
                    />
                    <Avatar
                        icon={<SettingsIcon />}
                        onClick={() => alert('Settings clicked!')}
                        className="designbase-avatar--clickable"
                    />
                </div>
            </div>
        </div>
    ),
};

// Avatar Group을 보여주는 스토리
export const AvatarGroup: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Small Group</h3>
                <div className="designbase-avatar-group designbase-avatar-group--sm">
                    <div className="designbase-avatar-group__item">
                        <Avatar size="sm" initials="김" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="sm" initials="이" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="sm" initials="박" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="sm" initials="최" />
                    </div>
                </div>
            </div>

            <div>
                <h3>Medium Group</h3>
                <div className="designbase-avatar-group designbase-avatar-group--md">
                    <div className="designbase-avatar-group__item">
                        <Avatar size="md" initials="김철수" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="md" initials="이영희" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="md" initials="박민수" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="md" initials="최지영" />
                    </div>
                </div>
            </div>

            <div>
                <h3>Large Group</h3>
                <div className="designbase-avatar-group designbase-avatar-group--lg">
                    <div className="designbase-avatar-group__item">
                        <Avatar size="lg" initials="김철수" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="lg" initials="이영희" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="lg" initials="박민수" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="lg" initials="최지영" />
                    </div>
                </div>
            </div>

            <div>
                <h3>복합 Group (다양한 타입)</h3>
                <div className="designbase-avatar-group designbase-avatar-group--md">
                    <div className="designbase-avatar-group__item">
                        <Avatar size="md" src="https://via.placeholder.com/40" alt="User 1" status="online" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="md" initials="김철수" variant="primary" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="md" icon={<UserIcon />} variant="success" />
                    </div>
                    <div className="designbase-avatar-group__item">
                        <Avatar size="md" initials="이영희" variant="warning" />
                    </div>
                </div>
            </div>
        </div>
    ),
};
