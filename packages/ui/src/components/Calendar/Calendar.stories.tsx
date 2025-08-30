import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
    title: 'Components/Calendar',
    component: Calendar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        mode: {
            control: { type: 'select' },
            options: ['single', 'range', 'multiple'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'filled'],
        },
        startOfWeek: {
            control: { type: 'select' },
            options: ['sunday', 'monday'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 이벤트 데이터
const sampleEvents = [
    {
        date: new Date(2024, 11, 15),
        label: '회의',
        type: 'dot' as const,
        color: '#3b82f6',
        description: '팀 미팅',
    },
    {
        date: new Date(2024, 11, 20),
        label: '생일',
        type: 'badge' as const,
        color: '#ef4444',
        description: '친구 생일',
    },
    {
        date: new Date(2024, 11, 25),
        label: '휴가',
        type: 'label' as const,
        color: '#10b981',
        description: '연말 휴가',
    },
    {
        date: new Date(2024, 11, 10),
        label: '데드라인',
        type: 'dot' as const,
        color: '#f59e0b',
        description: '프로젝트 마감',
    },
    {
        date: new Date(2024, 11, 5),
        label: '점심약속',
        type: 'badge' as const,
        color: '#8b5cf6',
        description: '고객과 점심',
    },
];

// 여러 이벤트가 있는 날짜
const multipleEvents = [
    {
        date: new Date(2024, 11, 15),
        label: '회의',
        type: 'dot' as const,
        color: '#3b82f6',
    },
    {
        date: new Date(2024, 11, 15),
        label: '점심',
        type: 'dot' as const,
        color: '#10b981',
    },
    {
        date: new Date(2024, 11, 15),
        label: '운동',
        type: 'dot' as const,
        color: '#f59e0b',
    },
    {
        date: new Date(2024, 11, 15),
        label: '쇼핑',
        type: 'dot' as const,
        color: '#ef4444',
    },
];

export const Default: Story = {
    args: {
        mode: 'single',
        size: 'md',
        variant: 'default',
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
            <div>
                <h3>작은 크기</h3>
                <Calendar size="sm" />
            </div>

            <div>
                <h3>중간 크기</h3>
                <Calendar size="md" />
            </div>

            <div>
                <h3>큰 크기</h3>
                <Calendar size="lg" />
            </div>
        </div>
    ),
};

export const DifferentVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
            <div>
                <h3>기본 스타일</h3>
                <Calendar variant="default" />
            </div>

            <div>
                <h3>아웃라인 스타일</h3>
                <Calendar variant="outlined" />
            </div>

            <div>
                <h3>채워진 스타일</h3>
                <Calendar variant="filled" />
            </div>
        </div>
    ),
};

export const SingleSelection: Story = {
    render: () => {
        const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                    <h3>선택된 날짜: {selectedDate ? selectedDate.toLocaleDateString('ko-KR') : '없음'}</h3>
                    <Calendar
                        mode="single"
                        value={selectedDate}
                        onChange={setSelectedDate}
                        events={sampleEvents}
                    />
                </div>
            </div>
        );
    },
};

export const RangeSelection: Story = {
    render: () => {
        const [selectedRange, setSelectedRange] = React.useState<{ start: Date; end: Date } | null>(null);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                    <h3>
                        선택된 범위: {
                            selectedRange
                                ? `${selectedRange.start.toLocaleDateString('ko-KR')} ~ ${selectedRange.end.toLocaleDateString('ko-KR')}`
                                : '없음'
                        }
                    </h3>
                    <Calendar
                        mode="range"
                        value={selectedRange}
                        onChange={setSelectedRange}
                        events={sampleEvents}
                    />
                </div>
            </div>
        );
    },
};

export const MultipleSelection: Story = {
    render: () => {
        const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                    <h3>
                        선택된 날짜들: {selectedDates.length > 0
                            ? selectedDates.map(date => date.toLocaleDateString('ko-KR')).join(', ')
                            : '없음'
                        }
                    </h3>
                    <Calendar
                        mode="multiple"
                        value={selectedDates}
                        onChange={setSelectedDates}
                        events={sampleEvents}
                    />
                </div>
            </div>
        );
    },
};

export const WithEvents: Story = {
    args: {
        mode: 'single',
        events: sampleEvents,
    },
};

export const WithMultipleEvents: Story = {
    args: {
        mode: 'single',
        events: multipleEvents,
    },
};

export const WithDateLimits: Story = {
    args: {
        mode: 'single',
        minDate: new Date(2024, 11, 1),
        maxDate: new Date(2024, 11, 31),
        events: sampleEvents,
    },
};

export const MondayStart: Story = {
    args: {
        mode: 'single',
        startOfWeek: 'monday',
        events: sampleEvents,
    },
};

export const WithoutOutsideDays: Story = {
    args: {
        mode: 'single',
        showOutsideDays: false,
        events: sampleEvents,
    },
};

export const WithoutWeekendHighlight: Story = {
    args: {
        mode: 'single',
        highlightWeekends: false,
        events: sampleEvents,
    },
};

export const Interactive: Story = {
    render: () => {
        const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
        const [currentMonth, setCurrentMonth] = React.useState(new Date());

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                    <h3>선택된 날짜: {selectedDate ? selectedDate.toLocaleDateString('ko-KR') : '없음'}</h3>
                    <Calendar
                        mode="single"
                        value={selectedDate}
                        onChange={setSelectedDate}
                        events={sampleEvents}
                        today={currentMonth}
                    />
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => setCurrentMonth(new Date())}>
                        오늘로 이동
                    </button>
                    <button onClick={() => setSelectedDate(null)}>
                        선택 해제
                    </button>
                </div>
            </div>
        );
    },
};

export const DifferentEventTypes: Story = {
    render: () => {
        const eventTypes = [
            {
                date: new Date(2024, 11, 5),
                label: '점',
                type: 'dot' as const,
                color: '#3b82f6',
            },
            {
                date: new Date(2024, 11, 10),
                label: '배지',
                type: 'badge' as const,
                color: '#ef4444',
            },
            {
                date: new Date(2024, 11, 15),
                label: '라벨',
                type: 'label' as const,
                color: '#10b981',
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
                <div>
                    <h3>이벤트 타입 예시</h3>
                    <Calendar
                        mode="single"
                        events={eventTypes}
                    />
                </div>

                <div style={{ fontSize: '14px', color: '#666' }}>
                    <p>• 점 (dot): 작은 원형 표시</p>
                    <p>• 배지 (badge): 색상 배경의 작은 라벨</p>
                    <p>• 라벨 (label): 회색 배경의 텍스트 라벨</p>
                </div>
            </div>
        );
    },
};

export const ResponsiveExample: Story = {
    args: {
        mode: 'single',
        size: 'lg',
        events: sampleEvents,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
