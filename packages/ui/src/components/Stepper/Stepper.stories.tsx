import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
    title: 'Components/Stepper',
    component: Stepper,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'filled'],
        },
        min: {
            control: { type: 'number' },
        },
        max: {
            control: { type: 'number' },
        },
        step: {
            control: { type: 'number' },
        },
        value: {
            control: { type: 'number' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 1,
        min: 0,
        max: 10,
        step: 1,
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>작은 크기</h3>
                <Stepper size="s" value={1} />
            </div>

            <div>
                <h3>중간 크기</h3>
                <Stepper size="m" value={1} />
            </div>

            <div>
                <h3>큰 크기</h3>
                <Stepper size="l" value={1} />
            </div>
        </div>
    ),
};

// 변형 비교 스토리 제거 (간소화)

export const WithLimits: Story = {
    args: {
        value: 5,
        min: 0,
        max: 10,
        step: 1,
    },
};

export const WithCustomStep: Story = {
    args: {
        value: 10,
        min: 0,
        max: 100,
        step: 5,
    },
};

export const NegativeValues: Story = {
    args: {
        value: 0,
        min: -10,
        max: 10,
        step: 1,
    },
};

export const DecimalStep: Story = {
    args: {
        value: 1.5,
        min: 0,
        max: 5,
        step: 0.5,
    },
};

export const Disabled: Story = {
    args: {
        value: 1,
        disabled: true,
    },
};

export const Readonly: Story = {
    args: {
        value: 1,
        readonly: true,
    },
};

export const WithCallbacks: Story = {
    args: {
        value: 5,
        min: 0,
        max: 10,
        step: 1,
        onChange: fn(),
        onMinReached: fn(),
        onMaxReached: fn(),
    },
};

export const Interactive: Story = {
    render: () => {
        const [value, setValue] = React.useState(1);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                    <h3>현재 값: {value}</h3>
                    <Stepper
                        value={value}
                        onChange={setValue}
                        min={0}
                        max={10}
                        step={1}
                    />
                </div>

                <div>
                    <button onClick={() => setValue(0)}>0으로 리셋</button>
                    <button onClick={() => setValue(5)}>5로 설정</button>
                    <button onClick={() => setValue(10)}>10으로 설정</button>
                </div>
            </div>
        );
    },
};

// 다중 예제 제거 (간소화)

// 반응형 예제 제거 (간소화)
