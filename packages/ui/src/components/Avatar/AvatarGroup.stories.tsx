import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from './Avatar';
import { UserIcon, SettingsIcon, BellIcon } from '@designbase/icons';

const meta: Meta<typeof AvatarGroup> = {
    title: 'Components/Avatar/AvatarGroup',
    component: AvatarGroup,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        max: {
            control: { type: 'number', min: 1, max: 10 },
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleAvatars = [
    { src: 'https://via.placeholder.com/40', alt: 'User 1', initials: '김철수' },
    { src: 'https://via.placeholder.com/40', alt: 'User 2', initials: '이영희' },
    { src: 'https://via.placeholder.com/40', alt: 'User 3', initials: '박민수' },
    { src: 'https://via.placeholder.com/40', alt: 'User 4', initials: '정수진' },
    { src: 'https://via.placeholder.com/40', alt: 'User 5', initials: '최동현' },
    { src: 'https://via.placeholder.com/40', alt: 'User 6', initials: '한지민' },
    { src: 'https://via.placeholder.com/40', alt: 'User 7', initials: '송혜교' },
];

export const Default: Story = {
    args: {
        children: sampleAvatars.map((avatar, index) => (
            <Avatar key={index} {...avatar} />
        )),
    },
};

export const WithMax: Story = {
    args: {
        max: 3,
        children: sampleAvatars.map((avatar, index) => (
            <Avatar key={index} {...avatar} />
        )),
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h4>Small</h4>
                <AvatarGroup size="sm" max={4}>
                    {sampleAvatars.map((avatar, index) => (
                        <Avatar key={index} {...avatar} size="sm" />
                    ))}
                </AvatarGroup>
            </div>
            <div>
                <h4>Medium</h4>
                <AvatarGroup size="md" max={4}>
                    {sampleAvatars.map((avatar, index) => (
                        <Avatar key={index} {...avatar} size="md" />
                    ))}
                </AvatarGroup>
            </div>
            <div>
                <h4>Large</h4>
                <AvatarGroup size="lg" max={4}>
                    {sampleAvatars.map((avatar, index) => (
                        <Avatar key={index} {...avatar} size="lg" />
                    ))}
                </AvatarGroup>
            </div>
        </div>
    ),
};

export const WithStatus: Story = {
    render: () => (
        <AvatarGroup max={4}>
            <Avatar src="https://via.placeholder.com/40" alt="Online User" status="online" />
            <Avatar src="https://via.placeholder.com/40" alt="Away User" status="away" />
            <Avatar src="https://via.placeholder.com/40" alt="Busy User" status="busy" />
            <Avatar src="https://via.placeholder.com/40" alt="Offline User" status="offline" />
            <Avatar src="https://via.placeholder.com/40" alt="Another User" />
        </AvatarGroup>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <AvatarGroup max={5}>
            <Avatar icon={<UserIcon />} />
            <Avatar icon={<SettingsIcon />} />
            <Avatar icon={<BellIcon />} />
            <Avatar initials="김철수" />
            <Avatar initials="이영희" />
            <Avatar initials="박민수" />
        </AvatarGroup>
    ),
};

export const TeamExample: Story = {
    render: () => (
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '16px' }}>프로젝트 팀</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>팀원:</span>
                <AvatarGroup max={4}>
                    <Avatar src="https://via.placeholder.com/40" alt="김철수" status="online" />
                    <Avatar src="https://via.placeholder.com/40" alt="이영희" status="away" />
                    <Avatar src="https://via.placeholder.com/40" alt="박민수" status="busy" />
                    <Avatar src="https://via.placeholder.com/40" alt="정수진" />
                    <Avatar src="https://via.placeholder.com/40" alt="최동현" />
                    <Avatar src="https://via.placeholder.com/40" alt="한지민" />
                </AvatarGroup>
                <span style={{ fontSize: '14px', color: '#666' }}>+2명 더</span>
            </div>
        </div>
    ),
};

export const ChatRoomExample: Story = {
    render: () => (
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '16px' }}>채팅방 참여자</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span>일반 채팅:</span>
                    <AvatarGroup max={3}>
                        {sampleAvatars.slice(0, 5).map((avatar, index) => (
                            <Avatar key={index} {...avatar} />
                        ))}
                    </AvatarGroup>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span>프로젝트 팀:</span>
                    <AvatarGroup max={4}>
                        {sampleAvatars.map((avatar, index) => (
                            <Avatar key={index} {...avatar} status={index % 4 === 0 ? 'online' : index % 4 === 1 ? 'away' : index % 4 === 2 ? 'busy' : 'offline'} />
                        ))}
                    </AvatarGroup>
                </div>
            </div>
        </div>
    ),
};

export const ResponsiveExample: Story = {
    args: {
        max: 3,
        children: sampleAvatars.map((avatar, index) => (
            <Avatar key={index} {...avatar} />
        )),
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};

export const LargeGroup: Story = {
    render: () => {
        const largeAvatarList = Array.from({ length: 20 }, (_, index) => ({
            src: `https://via.placeholder.com/40?text=${index + 1}`,
            alt: `User ${index + 1}`,
            initials: `사용자${index + 1}`,
        }));

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                    <h4>최대 5개 표시</h4>
                    <AvatarGroup max={5}>
                        {largeAvatarList.map((avatar, index) => (
                            <Avatar key={index} {...avatar} />
                        ))}
                    </AvatarGroup>
                </div>
                <div>
                    <h4>최대 10개 표시</h4>
                    <AvatarGroup max={10}>
                        {largeAvatarList.map((avatar, index) => (
                            <Avatar key={index} {...avatar} />
                        ))}
                    </AvatarGroup>
                </div>
            </div>
        );
    },
};
