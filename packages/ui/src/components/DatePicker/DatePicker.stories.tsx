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
        type: {
            control: { type: 'select' },
            options: ['dropdown', 'modal'],
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
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
        disabled: {
            control: { type: 'boolean' },
        },
        readonly: {
            control: { type: 'boolean' },
        },
        inline: {
            control: { type: 'boolean' },
        },
        onChange: { action: 'changed' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        mode: 'single',
        type: 'dropdown',
        size: 'm',
        variant: 'default',
        showOutsideDays: true,
        highlightWeekends: true,
        startOfWeek: 'sunday',
        locale: 'ko-KR',
        inline: false,
    },
};

export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: 24 }}>
            <DatePicker type="dropdown" defaultValue={new Date()} />
            <DatePicker type="modal" defaultValue={new Date()} />
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: 24 }}>
            <DatePicker size="s" defaultValue={new Date()} />
            <DatePicker size="m" defaultValue={new Date()} />
            <DatePicker size="l" defaultValue={new Date()} />
        </div>
    ),
};

export const ModalWithActions: Story = {
    render: () => {
        const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

        return (
            <div style={{ display: 'grid', gap: 12 }}>
                <DatePicker
                    type="modal"
                    value={selectedDate}
                    onChange={(value) => setSelectedDate(value as Date)}
                    size="l"
                />
                <div>현재 값: {selectedDate ? selectedDate.toLocaleDateString('ko-KR') : '선택 안됨'}</div>
                <p style={{ fontSize: '14px', color: '#666' }}>
                    모달 타입에서는 날짜를 선택한 후 "적용" 버튼을 눌러야 변경사항이 반영됩니다.
                </p>
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

export const Inline: Story = {
    args: {
        inline: true,
    },
};
