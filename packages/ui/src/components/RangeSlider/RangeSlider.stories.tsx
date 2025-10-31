import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RangeSlider } from './RangeSlider';

const meta: Meta<typeof RangeSlider> = {
    title: 'Components/RangeSlider',
    component: RangeSlider,
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
            options: ['default', 'primary', 'success', 'warning', 'danger'],
        },
        showValue: {
            control: { type: 'boolean' },
        },
        showMarks: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        readOnly: {
            control: { type: 'boolean' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
        vertical: {
            control: { type: 'boolean' },
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
        onChange: {
            action: 'value changed',
        },
        onRangeChange: {
            action: 'range changed',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
        min: 0,
        max: 100,
        step: 1,
    },
};

export const WithValue: Story = {
    args: {
        value: 75,
        min: 0,
        max: 100,
        step: 1,
        showValue: true,
    },
};

export const Range: Story = {
    args: {
        range: [25, 75],
        min: 0,
        max: 100,
        step: 1,
        showValue: true,
    },
};

export const WithMarks: Story = {
    render: () => {
        const [value, setValue] = useState(50);

        return (
            <div style={{ width: '400px' }}>
                <RangeSlider
                    value={value}
                    min={0}
                    max={100}
                    step={10}
                    showValue={true}
                    showMarks={true}
                    marks={[0, 25, 50, 75, 100]}
                    markLabels={{
                        0: '최소',
                        25: '낮음',
                        50: '보통',
                        75: '높음',
                        100: '최대',
                    }}
                    onChange={setValue}
                />
            </div>
        );
    },
};

export const AllSizes: Story = {
    render: () => {
        const [value1, setValue1] = useState(50);
        const [value2, setValue2] = useState(50);
        const [value3, setValue3] = useState(50);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>Small</h3>
                    <RangeSlider
                        value={value1}
                        min={0}
                        max={100}
                        size="s"
                        showValue={true}
                        onChange={setValue1}
                    />
                </div>
                <div>
                    <h3>Medium (Default)</h3>
                    <RangeSlider
                        value={value2}
                        min={0}
                        max={100}
                        size="m"
                        showValue={true}
                        onChange={setValue2}
                    />
                </div>
                <div>
                    <h3>Large</h3>
                    <RangeSlider
                        value={value3}
                        min={0}
                        max={100}
                        size="l"
                        showValue={true}
                        onChange={setValue3}
                    />
                </div>
            </div>
        );
    },
};

export const ValuePositions: Story = {
    render: () => {
        const [value1, setValue1] = useState(50);
        const [value2, setValue2] = useState(50);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>Single - Left</h3>
                    <RangeSlider
                        value={value1}
                        min={0}
                        max={100}
                        showValue={true}
                        valuePosition="left"
                        onChange={setValue1}
                    />
                </div>
                <div>
                    <h3>Single - Right (기본)</h3>
                    <RangeSlider
                        value={value2}
                        min={0}
                        max={100}
                        showValue={true}
                        valuePosition="right"
                        onChange={setValue2}
                    />
                </div>
            </div>
        );
    },
};

export const RangeWithValuePositions: Story = {
    render: () => {
        const [range1, setRange1] = useState<[number, number]>([25, 75]);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>Range - 기본 (양끝에 값 표시)</h3>
                    <RangeSlider
                        range={range1}
                        min={0}
                        max={100}
                        showValue={true}
                        onRangeChange={setRange1}
                    />
                </div>
            </div>
        );
    },
};


