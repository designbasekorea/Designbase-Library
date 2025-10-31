/**
 * Countdown 컴포넌트 스토리
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Countdown } from './Countdown';

const meta: Meta<typeof Countdown> = {
    title: 'Components/Countdown',
    component: Countdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        endDate: {
            control: 'date',
            description: '종료 날짜',
        },
        duration: {
            control: 'number',
            description: '남은 시간 (초 단위)',
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
            description: '크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'compact', 'minimal'],
            description: '변형',
        },
        showDays: {
            control: 'boolean',
            description: '일 표시 여부',
        },
        showHours: {
            control: 'boolean',
            description: '시간 표시 여부',
        },
        showMinutes: {
            control: 'boolean',
            description: '분 표시 여부',
        },
        showSeconds: {
            control: 'boolean',
            description: '초 표시 여부',
        },
        showLabels: {
            control: 'boolean',
            description: '라벨 표시 여부',
        },
        onComplete: {
            action: 'completed',
            description: '종료 시 콜백',
        },
        onTick: {
            action: 'ticked',
            description: '시간 업데이트 콜백',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 24시간 후 종료
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// 3일 후 종료
const threeDaysLater = new Date();
threeDaysLater.setDate(threeDaysLater.getDate() + 3);

export const Default: Story = {
    args: {
        endDate: tomorrow,
        size: 'm',
        variant: 'default',
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
            <div>
                <h3>Small</h3>
                <Countdown endDate={tomorrow} size="s" />
            </div>
            <div>
                <h3>Medium</h3>
                <Countdown endDate={tomorrow} size="m" />
            </div>
            <div>
                <h3>Large</h3>
                <Countdown endDate={tomorrow} size="l" />
            </div>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
            <div>
                <h3>Default</h3>
                <Countdown endDate={threeDaysLater} variant="default" />
            </div>
            <div>
                <h3>Compact</h3>
                <Countdown endDate={threeDaysLater} variant="compact" />
            </div>
            <div>
                <h3>Minimal</h3>
                <Countdown endDate={threeDaysLater} variant="minimal" />
            </div>
        </div>
    ),
};

export const WithDuration: Story = {
    args: {
        duration: 3600, // 1시간
        size: 'm',
        variant: 'default',
    },
};

export const OnlyHoursMinutes: Story = {
    args: {
        duration: 7200, // 2시간
        showDays: false,
        showSeconds: false,
        size: 'm',
        variant: 'default',
    },
};

export const OnlyMinutesSeconds: Story = {
    args: {
        duration: 600, // 10분
        showDays: false,
        showHours: false,
        size: 'm',
        variant: 'default',
    },
};

export const WithoutLabels: Story = {
    args: {
        endDate: threeDaysLater,
        showLabels: false,
        size: 'm',
        variant: 'default',
    },
};

export const CustomLabels: Story = {
    args: {
        endDate: threeDaysLater,
        labels: {
            days: 'D',
            hours: 'H',
            minutes: 'M',
            seconds: 'S',
        },
        size: 'm',
        variant: 'default',
    },
};

export const TimeSale: Story = {
    render: () => {
        const saleEndDate = new Date();
        saleEndDate.setHours(saleEndDate.getHours() + 5);
        saleEndDate.setMinutes(saleEndDate.getMinutes() + 30);

        return (
            <div style={{
                padding: '24px',
                backgroundColor: 'var(--db-feedback-error-fg)',
                borderRadius: 'var(--db-radius-l)',
                color: 'white',
                textAlign: 'center'
            }}>
                <h2 style={{ margin: '0 0 16px 0', fontSize: '24px' }}>🔥 특별 타임세일</h2>
                <p style={{ margin: '0 0 24px 0', fontSize: '16px', opacity: 0.9 }}>
                    지금 바로 구매하고 50% 할인 받으세요!
                </p>
                <Countdown
                    endDate={saleEndDate}
                    size="l"
                    variant="compact"
                    showDays={false}
                />
            </div>
        );
    },
};

export const FlashSale: Story = {
    render: () => {
        const flashEndDate = new Date();
        flashEndDate.setMinutes(flashEndDate.getMinutes() + 15);

        return (
            <div style={{
                padding: '20px',
                backgroundColor: 'var(--db-surface-layer-1)',
                borderRadius: 'var(--db-radius-m)',
                border: '2px solid var(--db-brand-primary)',
                textAlign: 'center'
            }}>
                <h3 style={{ margin: '0 0 12px 0', color: 'var(--db-brand-primary)' }}>⚡ 플래시 세일</h3>
                <Countdown
                    endDate={flashEndDate}
                    size="m"
                    variant="default"
                    showDays={false}
                    showHours={false}
                />
            </div>
        );
    },
};

export const MinimalStyle: Story = {
    render: () => {
        const endDate = new Date();
        endDate.setHours(endDate.getHours() + 2);
        endDate.setMinutes(endDate.getMinutes() + 30);

        return (
            <div style={{
                padding: '16px',
                backgroundColor: 'var(--db-surface-base)',
                borderRadius: 'var(--db-radius-m)',
                border: '1px solid var(--db-border-base)',
            }}>
                <p style={{ margin: '0 0 8px 0', color: 'var(--db-text-secondary)', fontSize: '14px' }}>
                    남은 시간:
                </p>
                <Countdown
                    endDate={endDate}
                    size="m"
                    variant="minimal"
                    showDays={false}
                />
            </div>
        );
    },
};

export const Interactive: Story = {
    render: () => {
        const [isExpired, setIsExpired] = React.useState(false);
        const endDate = new Date();
        endDate.setSeconds(endDate.getSeconds() + 10); // 10초 후 종료

        return (
            <div style={{
                padding: '24px',
                backgroundColor: 'var(--db-surface-base)',
                borderRadius: 'var(--db-radius-l)',
                border: '1px solid var(--db-border-base)',
                textAlign: 'center'
            }}>
                <h3 style={{ margin: '0 0 16px 0' }}>10초 카운트다운 테스트</h3>
                <Countdown
                    endDate={endDate}
                    size="l"
                    variant="default"
                    showDays={false}
                    showHours={false}
                    onComplete={() => setIsExpired(true)}
                />
                {isExpired && (
                    <p style={{
                        marginTop: '16px',
                        color: 'var(--db-feedback-error-fg)',
                        fontWeight: 'var(--db-weight-semibold)'
                    }}>
                        ⏰ 시간 종료!
                    </p>
                )}
            </div>
        );
    },
};
