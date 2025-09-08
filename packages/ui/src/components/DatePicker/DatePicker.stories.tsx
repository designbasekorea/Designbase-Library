import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DatePicker from './DatePicker';
import type { DatePickerEvent } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
    title: 'Components/DatePicker',
    component: DatePicker,
    parameters: {
        layout: 'centered',
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
        showOutsideDays: {
            control: { type: 'boolean' },
        },
        highlightWeekends: {
            control: { type: 'boolean' },
        },
        highlightHolidays: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        readonly: {
            control: { type: 'boolean' },
        },
        inline: {
            control: { type: 'boolean' },
        },
        placement: {
            control: { type: 'select' },
            options: ['top', 'bottom', 'left', 'right'],
        },
        onChange: { action: 'changed' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 이벤트 데이터
const sampleEvents: DatePickerEvent[] = [
    {
        date: new Date(2024, 11, 15),
        label: '회의',
        type: 'dot',
        color: '#3b82f6',
    },
    {
        date: new Date(2024, 11, 20),
        label: '생일',
        type: 'badge',
        color: '#ef4444',
    },
    {
        date: new Date(2024, 11, 25),
        label: '휴가',
        type: 'dot',
        color: '#10b981',
    },
];

const multipleEvents: DatePickerEvent[] = [
    {
        date: new Date(2024, 11, 10),
        label: '미팅',
        type: 'dot',
        color: '#3b82f6',
    },
    {
        date: new Date(2024, 11, 10),
        label: '점심약속',
        type: 'dot',
        color: '#f59e0b',
    },
    {
        date: new Date(2024, 11, 15),
        label: '프로젝트 마감',
        type: 'badge',
        color: '#ef4444',
    },
    {
        date: new Date(2024, 11, 15),
        label: '코드 리뷰',
        type: 'dot',
        color: '#8b5cf6',
    },
    {
        date: new Date(2024, 11, 20),
        label: '팀 빌딩',
        type: 'badge',
        color: '#10b981',
    },
];

export const Default: Story = {
    args: {
        mode: 'single',
        size: 'md',
        variant: 'default',
        showOutsideDays: true,
        highlightWeekends: true,
        highlightHolidays: false,
        startOfWeek: 'sunday',
        locale: 'ko-KR',
        inline: true,
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>작은 크기</h3>
                <DatePicker size="sm" inline />
            </div>
            <div>
                <h3>중간 크기</h3>
                <DatePicker size="md" inline />
            </div>
            <div>
                <h3>큰 크기</h3>
                <DatePicker size="lg" inline />
            </div>
        </div>
    ),
};

export const DifferentVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>기본 스타일</h3>
                <DatePicker variant="default" inline />
            </div>
            <div>
                <h3>아웃라인 스타일</h3>
                <DatePicker variant="outlined" inline />
            </div>
            <div>
                <h3>채워진 스타일</h3>
                <DatePicker variant="filled" inline />
            </div>
        </div>
    ),
};

export const SingleSelection: Story = {
    render: () => {
        const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

        return (
            <div>
                <DatePicker
                    mode="single"
                    value={selectedDate}
                    onChange={(value) => setSelectedDate(value as Date)}
                    inline
                />
                <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
                    선택된 날짜: {selectedDate ? selectedDate.toLocaleDateString('ko-KR') : '선택 안됨'}
                </div>
            </div>
        );
    },
};

export const RangeSelection: Story = {
    render: () => {
        const [selectedRange, setSelectedRange] = useState<{ start: Date; end: Date } | undefined>(undefined);

        return (
            <div>
                <DatePicker
                    mode="range"
                    value={selectedRange}
                    onChange={(value) => setSelectedRange(value as { start: Date; end: Date })}
                    inline
                />
                <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
                    선택된 범위: {selectedRange
                        ? `${selectedRange.start.toLocaleDateString('ko-KR')} ~ ${selectedRange.end.toLocaleDateString('ko-KR')}`
                        : '선택 안됨'
                    }
                </div>
            </div>
        );
    },
};

export const MultipleSelection: Story = {
    render: () => {
        const [selectedDates, setSelectedDates] = useState<Date[]>([]);

        return (
            <div>
                <DatePicker
                    mode="multiple"
                    value={selectedDates}
                    onChange={(value) => setSelectedDates(value as Date[])}
                    inline
                />
                <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
                    선택된 날짜들: {selectedDates.length > 0
                        ? selectedDates.map(date => date.toLocaleDateString('ko-KR')).join(', ')
                        : '선택 안됨'
                    }
                </div>
            </div>
        );
    },
};

export const WithEvents: Story = {
    args: {
        events: sampleEvents,
        inline: true,
    },
};

export const WithMultipleEvents: Story = {
    args: {
        events: multipleEvents,
        inline: true,
    },
};

export const WithDateLimits: Story = {
    args: {
        minDate: new Date(2024, 11, 10),
        maxDate: new Date(2024, 11, 31),
        inline: true,
    },
};

export const MondayStart: Story = {
    args: {
        startOfWeek: 'monday',
        inline: true,
    },
};

export const WithoutOutsideDays: Story = {
    args: {
        showOutsideDays: false,
        inline: true,
    },
};

export const WithoutWeekendHighlight: Story = {
    args: {
        highlightWeekends: false,
        inline: true,
    },
};

// 드롭다운 형태 예시들
export const DropdownSingleSelection: Story = {
    render: () => {
        const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

        return (
            <div>
                <DatePicker
                    mode="single"
                    value={selectedDate}
                    onChange={(value) => setSelectedDate(value as Date)}
                    trigger={
                        <button style={{
                            padding: '8px 16px',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            background: '#fff',
                            cursor: 'pointer',
                            minWidth: '200px',
                            textAlign: 'left'
                        }}>
                            {selectedDate ? selectedDate.toLocaleDateString('ko-KR') : '날짜를 선택하세요'}
                        </button>
                    }
                />
                <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
                    선택된 날짜: {selectedDate ? selectedDate.toLocaleDateString('ko-KR') : '선택 안됨'}
                </div>
            </div>
        );
    },
};

export const DropdownRangeSelection: Story = {
    render: () => {
        const [selectedRange, setSelectedRange] = useState<{ start: Date; end: Date } | undefined>(undefined);

        return (
            <div>
                <DatePicker
                    mode="range"
                    value={selectedRange}
                    onChange={(value) => setSelectedRange(value as { start: Date; end: Date })}
                    trigger={
                        <button style={{
                            padding: '8px 16px',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            background: '#fff',
                            cursor: 'pointer',
                            minWidth: '200px',
                            textAlign: 'left'
                        }}>
                            {selectedRange
                                ? `${selectedRange.start.toLocaleDateString('ko-KR')} ~ ${selectedRange.end.toLocaleDateString('ko-KR')}`
                                : '날짜 범위를 선택하세요'
                            }
                        </button>
                    }
                />
                <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
                    선택된 범위: {selectedRange
                        ? `${selectedRange.start.toLocaleDateString('ko-KR')} ~ ${selectedRange.end.toLocaleDateString('ko-KR')}`
                        : '선택 안됨'
                    }
                </div>
            </div>
        );
    },
};

export const DropdownWithCustomTrigger: Story = {
    render: () => {
        const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

        return (
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                    <h3>버튼 트리거</h3>
                    <DatePicker
                        mode="single"
                        value={selectedDate || undefined}
                        onChange={(value) => setSelectedDate(value as Date)}
                        trigger={
                            <button style={{
                                padding: '12px 24px',
                                border: 'none',
                                borderRadius: '8px',
                                background: '#3b82f6',
                                color: '#fff',
                                cursor: 'pointer',
                                fontWeight: '500'
                            }}>
                                📅 날짜 선택
                            </button>
                        }
                    />
                </div>

                <div>
                    <h3>아이콘 트리거</h3>
                    <DatePicker
                        mode="single"
                        value={selectedDate}
                        onChange={(value) => setSelectedDate(value as Date)}
                        trigger={
                            <div style={{
                                width: '40px',
                                height: '40px',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                background: '#fff'
                            }}>
                                📅
                            </div>
                        }
                    />
                </div>
            </div>
        );
    },
};

export const DropdownPlacements: Story = {
    render: () => {
        const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', alignItems: 'center' }}>
                <div>
                    <h3>Top Placement</h3>
                    <DatePicker
                        mode="single"
                        value={selectedDate}
                        onChange={(value) => setSelectedDate(value as Date)}
                        placement="top"
                        trigger={
                            <button style={{
                                padding: '8px 16px',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                background: '#fff',
                                cursor: 'pointer'
                            }}>
                                위쪽으로 표시
                            </button>
                        }
                    />
                </div>

                <div>
                    <h3>Bottom Placement</h3>
                    <DatePicker
                        mode="single"
                        value={selectedDate}
                        onChange={(value) => setSelectedDate(value as Date)}
                        placement="bottom"
                        trigger={
                            <button style={{
                                padding: '8px 16px',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                background: '#fff',
                                cursor: 'pointer'
                            }}>
                                아래쪽으로 표시
                            </button>
                        }
                    />
                </div>

                <div>
                    <h3>Left Placement</h3>
                    <DatePicker
                        mode="single"
                        value={selectedDate}
                        onChange={(value) => setSelectedDate(value as Date)}
                        placement="left"
                        trigger={
                            <button style={{
                                padding: '8px 16px',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                background: '#fff',
                                cursor: 'pointer'
                            }}>
                                왼쪽으로 표시
                            </button>
                        }
                    />
                </div>

                <div>
                    <h3>Right Placement</h3>
                    <DatePicker
                        mode="single"
                        value={selectedDate}
                        onChange={(value) => setSelectedDate(value as Date)}
                        placement="right"
                        trigger={
                            <button style={{
                                padding: '8px 16px',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                background: '#fff',
                                cursor: 'pointer'
                            }}>
                                오른쪽으로 표시
                            </button>
                        }
                    />
                </div>
            </div>
        );
    },
};

export const Interactive: Story = {
    render: () => {
        const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
        const [selectedRange, setSelectedRange] = useState<{ start: Date; end: Date } | undefined>(undefined);
        const [selectedDates, setSelectedDates] = useState<Date[]>([]);

        return (
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div>
                    <h3>단일 선택</h3>
                    <DatePicker
                        mode="single"
                        value={selectedDate}
                        onChange={(value) => setSelectedDate(value as Date)}
                        inline
                    />
                    <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
                        {selectedDate ? selectedDate.toLocaleDateString('ko-KR') : '선택 안됨'}
                    </div>
                </div>

                <div>
                    <h3>범위 선택</h3>
                    <DatePicker
                        mode="range"
                        value={selectedRange}
                        onChange={(value) => setSelectedRange(value as { start: Date; end: Date })}
                        inline
                    />
                    <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
                        {selectedRange
                            ? `${selectedRange.start.toLocaleDateString('ko-KR')} ~ ${selectedRange.end.toLocaleDateString('ko-KR')}`
                            : '선택 안됨'
                        }
                    </div>
                </div>

                <div>
                    <h3>다중 선택</h3>
                    <DatePicker
                        mode="multiple"
                        value={selectedDates}
                        onChange={(value) => setSelectedDates(value as Date[])}
                        inline
                    />
                    <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
                        {selectedDates.length > 0
                            ? `${selectedDates.length}개 선택`
                            : '선택 안됨'
                        }
                    </div>
                </div>
            </div>
        );
    },
};

export const DifferentEventTypes: Story = {
    render: () => {
        const events: DatePickerEvent[] = [
            {
                date: new Date(2024, 11, 10),
                label: '점',
                type: 'dot',
                color: '#3b82f6',
            },
            {
                date: new Date(2024, 11, 15),
                label: '배지',
                type: 'badge',
                color: '#ef4444',
            },
            {
                date: new Date(2024, 11, 20),
                label: '다른 색상',
                type: 'dot',
                color: '#10b981',
            },
        ];

        return (
            <div>
                <DatePicker events={events} inline />
                <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
                    <p>• 파란 점: 일반 이벤트</p>
                    <p>• 빨간 배지: 중요 이벤트</p>
                    <p>• 초록 점: 다른 색상 이벤트</p>
                </div>
            </div>
        );
    },
};

export const ResponsiveExample: Story = {
    render: () => (
        <div style={{ width: '100%', maxWidth: '800px' }}>
            <h3>반응형 DatePicker</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
                화면 크기에 따라 자동으로 크기가 조정됩니다.
            </p>
            <DatePicker size="lg" inline />
        </div>
    ),
};
