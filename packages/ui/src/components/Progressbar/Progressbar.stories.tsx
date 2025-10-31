import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { Progressbar } from './Progressbar';

const meta: Meta<typeof Progressbar> = {
    title: 'Components/Progressbar',
    component: Progressbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
            description: 'Progressbar 크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'warning', 'danger'],
            description: 'Progressbar 색상 변형',
        },
        style: {
            control: { type: 'select' },
            options: ['solid', 'striped', 'animated'],
            description: 'Progressbar 스타일',
        },
        disabled: {
            control: { type: 'boolean' },
            description: '비활성화 상태',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
    args: {
        value: 60,
        size: 'm',
        variant: 'primary',
        showLabel: true,
    },
};

// 자동 애니메이션 컴포넌트
const AutoAnimatedProgressbar: React.FC<any> = (props) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (isComplete) return; // 완료되면 더 이상 진행하지 않음

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    setIsComplete(true);
                    return 100;
                }
                return prev + Math.random() * 5 + 1; // 랜덤하게 증가
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isComplete]);

    return <Progressbar {...props} value={progress} showLabel />;
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>크기별 진행바 (자동 애니메이션)</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <AutoAnimatedProgressbar size="s" variant="primary" />
                    <AutoAnimatedProgressbar size="m" variant="primary" />
                    <AutoAnimatedProgressbar size="l" variant="primary" />
                </div>
            </div>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>색상 변형 (자동 애니메이션)</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <AutoAnimatedProgressbar variant="default" />
                    <AutoAnimatedProgressbar variant="primary" />
                    <AutoAnimatedProgressbar variant="success" />
                    <AutoAnimatedProgressbar variant="warning" />
                    <AutoAnimatedProgressbar variant="danger" />
                </div>
            </div>
        </div>
    ),
};

export const AllStyles: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>디자인 스타일 (자동 애니메이션)</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <AutoAnimatedProgressbar style="solid" variant="primary" />
                    <AutoAnimatedProgressbar style="striped" variant="primary" />
                    <AutoAnimatedProgressbar style="animated" variant="primary" />
                </div>
            </div>
        </div>
    ),
};

