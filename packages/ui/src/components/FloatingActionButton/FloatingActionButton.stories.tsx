/**
 * FloatingActionButton 컴포넌트 스토리
 * 
 * 목적: FloatingActionButton 컴포넌트의 다양한 크기와 색상 변형을 보여줌
 */

import type { Meta, StoryObj } from '@storybook/react';
import { PlusIcon, SettingsIcon, SearchIcon } from '@designbasekorea/icons';
import { FloatingActionButton } from './FloatingActionButton';

const meta: Meta<typeof FloatingActionButton> = {
    title: 'Components/FloatingActionButton',
    component: FloatingActionButton,
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
            options: ['primary', 'secondary', 'tertiary'],
        },
        loading: {
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
        icon: <PlusIcon size={24} />,
        onClick: () => console.log('FAB clicked!'),
    },
};

// 모든 사이즈 (s, m, l)
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    size="s"
                    icon={<PlusIcon size={16} />}
                    onClick={() => console.log('Small FAB')}
                />
                <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>Small (s)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    size="m"
                    icon={<PlusIcon size={24} />}
                    onClick={() => console.log('Medium FAB')}
                />
                <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>Medium (m)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    size="l"
                    icon={<PlusIcon size={32} />}
                    onClick={() => console.log('Large FAB')}
                />
                <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>Large (l)</span>
            </div>
        </div>
    ),
};

// 모든 Variants (primary, secondary, tertiary)
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    variant="primary"
                    icon={<PlusIcon size={24} />}
                    onClick={() => console.log('Primary FAB')}
                />
                <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>Primary</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    variant="secondary"
                    icon={<SettingsIcon size={24} />}
                    onClick={() => console.log('Secondary FAB')}
                />
                <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>Secondary</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    variant="tertiary"
                    icon={<SearchIcon size={24} />}
                    onClick={() => console.log('Tertiary FAB')}
                />
                <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>Tertiary</span>
            </div>
        </div>
    ),
};

// 모든 상태 (기본, hover, disabled, loading)
export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    icon={<PlusIcon size={24} />}
                    onClick={() => console.log('Normal FAB')}
                />
                <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>기본 (Hover 가능)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    disabled={true}
                    icon={<PlusIcon size={24} />}
                    onClick={() => console.log('Disabled FAB')}
                />
                <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>Disabled</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    loading={true}
                    icon={<PlusIcon size={24} />}
                    onClick={() => console.log('Loading FAB')}
                />
                <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>Loading</span>
            </div>
        </div>
    ),
};