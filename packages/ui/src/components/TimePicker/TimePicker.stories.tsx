import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
    title: 'Components/TimePicker',
    component: TimePicker,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        format: {
            control: { type: 'select' },
            options: ['12h', '24h'],
        },
        mode: {
            control: { type: 'select' },
            options: ['dropdown', 'inline'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'filled'],
        },
        hourStep: {
            control: { type: 'number', min: 1, max: 12, step: 1 },
        },
        minuteStep: {
            control: { type: 'number', min: 1, max: 60, step: 1 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        format: '24h',
        mode: 'dropdown',
        size: 'md',
        variant: 'default',
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>작은 크기</h3>
                <TimePicker size="sm" />
            </div>

            <div>
                <h3>중간 크기</h3>
                <TimePicker size="md" />
            </div>

            <div>
                <h3>큰 크기</h3>
                <TimePicker size="lg" />
            </div>
        </div>
    ),
};

export const DifferentVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>기본 스타일</h3>
                <TimePicker variant="default" />
            </div>

            <div>
                <h3>아웃라인 스타일</h3>
                <TimePicker variant="outlined" />
            </div>

            <div>
                <h3>채워진 스타일</h3>
                <TimePicker variant="filled" />
            </div>
        </div>
    ),
};

export const TwentyFourHourFormat: Story = {
    args: {
        format: '24h',
        mode: 'dropdown',
    },
};

export const TwelveHourFormat: Story = {
    args: {
        format: '12h',
        mode: 'dropdown',
    },
};

export const InlineMode: Story = {
    args: {
        format: '24h',
        mode: 'inline',
    },
};

export const InlineMode12Hour: Story = {
    args: {
        format: '12h',
        mode: 'inline',
    },
};

export const WithCustomSteps: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>30분 단위</h3>
                <TimePicker minuteStep={30} />
            </div>

            <div>
                <h3>2시간 단위</h3>
                <TimePicker hourStep={2} />
            </div>

            <div>
                <h3>5분 단위</h3>
                <TimePicker minuteStep={5} />
            </div>
        </div>
    ),
};

export const WithTimeLimits: Story = {
    args: {
        format: '24h',
        minTime: new Date(2024, 0, 1, 9, 0, 0), // 09:00
        maxTime: new Date(2024, 0, 1, 18, 0, 0), // 18:00
    },
};

export const Interactive: Story = {
    render: () => {
        const [selectedTime, setSelectedTime] = React.useState<Date | undefined>(undefined);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                    <h3>선택된 시간: {selectedTime ? selectedTime.toLocaleTimeString('ko-KR') : '없음'}</h3>
                    <TimePicker
                        value={selectedTime}
                        onChange={setSelectedTime}
                        format="24h"
                    />
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => setSelectedTime(undefined)}>
                        선택 해제
                    </button>
                    <button onClick={() => setSelectedTime(new Date(2024, 0, 1, 14, 30, 0))}>
                        14:30으로 설정
                    </button>
                </div>
            </div>
        );
    },
};

export const Interactive12Hour: Story = {
    render: () => {
        const [selectedTime, setSelectedTime] = React.useState<Date | undefined>(undefined);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                    <h3>선택된 시간: {selectedTime ? selectedTime.toLocaleTimeString('ko-KR', { hour12: true }) : '없음'}</h3>
                    <TimePicker
                        value={selectedTime}
                        onChange={setSelectedTime}
                        format="12h"
                    />
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => setSelectedTime(undefined)}>
                        선택 해제
                    </button>
                    <button onClick={() => setSelectedTime(new Date(2024, 0, 1, 14, 30, 0))}>
                        2:30 PM으로 설정
                    </button>
                </div>
            </div>
        );
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        value: new Date(2024, 0, 1, 14, 30, 0),
    },
};

export const Readonly: Story = {
    args: {
        readonly: true,
        value: new Date(2024, 0, 1, 14, 30, 0),
    },
};

export const WithCustomPlaceholder: Story = {
    args: {
        placeholder: '회의 시간을 선택하세요',
    },
};

export const WithDisplayFormat: Story = {
    args: {
        value: new Date(2024, 0, 1, 14, 30, 0),
        displayFormat: 'HH:mm',
    },
};

export const BusinessHours: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>업무 시간 (09:00 - 18:00)</h3>
                <TimePicker
                    minTime={new Date(2024, 0, 1, 9, 0, 0)}
                    maxTime={new Date(2024, 0, 1, 18, 0, 0)}
                    minuteStep={30}
                />
            </div>

            <div>
                <h3>점심 시간 (12:00 - 13:00)</h3>
                <TimePicker
                    minTime={new Date(2024, 0, 1, 12, 0, 0)}
                    maxTime={new Date(2024, 0, 1, 13, 0, 0)}
                    minuteStep={15}
                />
            </div>
        </div>
    ),
};

export const MultipleTimePickers: Story = {
    render: () => {
        const [startTime, setStartTime] = React.useState<Date | undefined>(undefined);
        const [endTime, setEndTime] = React.useState<Date | undefined>(undefined);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                    <h3>시작 시간</h3>
                    <TimePicker
                        value={startTime}
                        onChange={setStartTime}
                        format="24h"
                        placeholder="시작 시간"
                    />
                </div>

                <div>
                    <h3>종료 시간</h3>
                    <TimePicker
                        value={endTime}
                        onChange={setEndTime}
                        format="24h"
                        placeholder="종료 시간"
                        minTime={startTime}
                    />
                </div>

                <div style={{ fontSize: '14px', color: '#666' }}>
                    <p>시작 시간: {startTime ? startTime.toLocaleTimeString('ko-KR') : '선택 안됨'}</p>
                    <p>종료 시간: {endTime ? endTime.toLocaleTimeString('ko-KR') : '선택 안됨'}</p>
                </div>
            </div>
        );
    },
};

export const ResponsiveExample: Story = {
    args: {
        format: '24h',
        size: 'lg',
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
