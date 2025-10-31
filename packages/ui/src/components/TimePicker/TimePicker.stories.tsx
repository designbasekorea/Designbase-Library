import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TimePicker from './TimePicker';

const meta: Meta<typeof TimePicker> = {
    title: 'Components/TimePicker',
    component: TimePicker,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['s', 'm', 'l'] },
        type: { control: 'select', options: ['dropdown', 'modal'] },
        format: { control: 'select', options: ['12h', '24h', '12h-with-seconds', '24h-with-seconds'] },
        minuteStep: { control: 'number' },
        disabled: { control: 'boolean' },
        readonly: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        size: 'm',
        type: 'dropdown',
        format: '24h',
        defaultValue: '12:00',
        minuteStep: 1,
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: 24 }}>
            <TimePicker size="s" defaultValue="09:30" />
            <TimePicker size="m" defaultValue="12:00" />
            <TimePicker size="l" defaultValue="18:45" />
        </div>
    ),
};

export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: 24 }}>
            <TimePicker type="dropdown" defaultValue="12:00" />
            <TimePicker type="modal" defaultValue="15:30" />
        </div>
    ),
};

export const TimeFormats: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: 24 }}>
            <TimePicker format="24h" defaultValue="14:30" />
            <TimePicker format="24h-with-seconds" defaultValue="14:30:45" />
            <TimePicker format="12h" defaultValue="02:30 PM" />
            <TimePicker format="12h-with-seconds" defaultValue="02:30:45 PM" />
        </div>
    ),
};

export const Controlled: Story = {
    render: () => {
        const [time, setTime] = useState('12:00');
        return (
            <div style={{ display: 'grid', gap: 12 }}>
                <TimePicker value={time} format="24h" onChange={setTime} />
                <div>현재 값(24h): {time}</div>
            </div>
        );
    },
};

export const ModalWithActions: Story = {
    render: () => {
        const [time, setTime] = useState('14:30');
        return (
            <div style={{ display: 'grid', gap: 12 }}>
                <TimePicker
                    type="modal"
                    value={time}
                    format="24h"
                    onChange={setTime}
                    size="l"
                />
                <div>현재 값(24h): {time}</div>
                <p style={{ fontSize: '14px', color: '#666' }}>
                    모달 타입에서는 시간을 선택한 후 "적용" 버튼을 눌러야 변경사항이 반영됩니다.
                </p>
            </div>
        );
    },
};

export const Modal12Hour: Story = {
    render: () => {
        const [time, setTime] = useState('02:30 PM');
        return (
            <div style={{ display: 'grid', gap: 12 }}>
                <TimePicker
                    type="modal"
                    value={time}
                    format="12h"
                    onChange={setTime}
                    size="l"
                />
                <div>현재 값(24h): {time}</div>
            </div>
        );
    },
};
