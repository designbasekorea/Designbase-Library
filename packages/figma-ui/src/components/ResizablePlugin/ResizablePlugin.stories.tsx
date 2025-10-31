import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ResizablePlugin } from './ResizablePlugin';
import { ExpandIcon } from '@designbasekorea/icons';

const meta: Meta<typeof ResizablePlugin> = {
    title: 'Figma UI/ResizablePlugin',
    component: ResizablePlugin,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        minWidth: {
            control: { type: 'number' },
        },
        maxWidth: {
            control: { type: 'number' },
        },
        minHeight: {
            control: { type: 'number' },
        },
        maxHeight: {
            control: { type: 'number' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        minWidth: 360,
        maxWidth: 460,
        minHeight: 440,
        maxHeight: 700,
        children: (
            <div style={{
                width: '100%',
                height: '400px',
                backgroundColor: 'var(--db-surface-base)',
                border: '1px solid var(--db-border-base)',
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--db-text-primary)',
                fontSize: '16px',
            }}>
                플러그인 콘텐츠
                <br />
                우측 하단 핸들을 드래그하여 크기 조절
            </div>
        ),
    },
};

export const WithCustomIcon: Story = {
    args: {
        minWidth: 300,
        maxWidth: 500,
        minHeight: 300,
        maxHeight: 600,
        icon: <ExpandIcon size={16} />,
        children: (
            <div style={{
                width: '100%',
                height: '300px',
                backgroundColor: 'var(--db-surface-layer-1)',
                border: '1px solid var(--db-border-base)',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--db-text-primary)',
                gap: '16px',
            }}>
                <h3 style={{ margin: 0, fontSize: '18px' }}>커스텀 아이콘</h3>
                <p style={{ margin: 0, textAlign: 'center', color: 'var(--db-text-secondary)' }}>
                    커스텀 아이콘과 함께 사용되는 리사이즈 가능한 플러그인입니다.
                </p>
            </div>
        ),
    },
};

export const SmallSize: Story = {
    args: {
        minWidth: 200,
        maxWidth: 300,
        minHeight: 200,
        maxHeight: 300,
        children: (
            <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: 'var(--db-surface-base)',
                border: '1px solid var(--db-border-base)',
                borderRadius: '6px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--db-text-primary)',
                fontSize: '14px',
            }}>
                작은 크기 플러그인
            </div>
        ),
    },
};

export const LargeSize: Story = {
    args: {
        minWidth: 500,
        maxWidth: 800,
        minHeight: 500,
        maxHeight: 800,
        children: (
            <div style={{
                width: '100%',
                height: '500px',
                backgroundColor: 'var(--db-surface-base)',
                border: '1px solid var(--db-border-base)',
                borderRadius: '12px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--db-text-primary)',
                gap: '20px',
            }}>
                <h2 style={{ margin: 0, fontSize: '24px' }}>큰 크기 플러그인</h2>
                <p style={{ margin: 0, textAlign: 'center', color: 'var(--db-text-secondary)', maxWidth: '400px' }}>
                    더 큰 크기로 설정된 플러그인입니다. 최대 800x800까지 확장할 수 있습니다.
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',
                    width: '100%',
                    maxWidth: '400px',
                }}>
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} style={{
                            height: '60px',
                            backgroundColor: 'var(--db-surface-layer-1)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--db-text-secondary)',
                            fontSize: '12px',
                        }}>
                            Item {i}
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
};
