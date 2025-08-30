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
            options: ['sm', 'md', 'lg'],
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
    args: {
        value: 50,
        min: 0,
        max: 100,
        step: 10,
        showValue: true,
        showMarks: true,
        marks: [0, 25, 50, 75, 100],
        markLabels: {
            0: '최소',
            25: '낮음',
            50: '보통',
            75: '높음',
            100: '최대',
        },
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Small</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    size="sm"
                    showValue={true}
                />
            </div>
            <div>
                <h3>Medium (Default)</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    size="md"
                    showValue={true}
                />
            </div>
            <div>
                <h3>Large</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    size="lg"
                    showValue={true}
                />
            </div>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Default</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    variant="default"
                    showValue={true}
                />
            </div>
            <div>
                <h3>Primary</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    variant="primary"
                    showValue={true}
                />
            </div>
            <div>
                <h3>Success</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    variant="success"
                    showValue={true}
                />
            </div>
            <div>
                <h3>Warning</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    variant="warning"
                    showValue={true}
                />
            </div>
            <div>
                <h3>Danger</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    variant="danger"
                    showValue={true}
                />
            </div>
        </div>
    ),
};

export const RangeVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Default Range</h3>
                <RangeSlider
                    range={[25, 75]}
                    min={0}
                    max={100}
                    variant="default"
                    showValue={true}
                />
            </div>
            <div>
                <h3>Primary Range</h3>
                <RangeSlider
                    range={[25, 75]}
                    min={0}
                    max={100}
                    variant="primary"
                    showValue={true}
                />
            </div>
            <div>
                <h3>Success Range</h3>
                <RangeSlider
                    range={[25, 75]}
                    min={0}
                    max={100}
                    variant="success"
                    showValue={true}
                />
            </div>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '48px' }}>
            <div>
                <h3>Vertical Single</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    vertical={true}
                    showValue={true}
                />
            </div>
            <div>
                <h3>Vertical Range</h3>
                <RangeSlider
                    range={[25, 75]}
                    min={0}
                    max={100}
                    vertical={true}
                    showValue={true}
                />
            </div>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [value, setValue] = useState(50);
        const [range, setRange] = useState<[number, number]>([25, 75]);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                    <h3>단일 값 슬라이더</h3>
                    <RangeSlider
                        value={value}
                        min={0}
                        max={100}
                        showValue={true}
                        onChange={setValue}
                    />
                    <p>현재 값: {value}</p>
                </div>
                <div>
                    <h3>범위 슬라이더</h3>
                    <RangeSlider
                        range={range}
                        min={0}
                        max={100}
                        showValue={true}
                        onRangeChange={setRange}
                    />
                    <p>범위: {range[0]} - {range[1]}</p>
                </div>
            </div>
        );
    },
};

export const WithCustomRange: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>가격 범위 (0 - 1000)</h3>
                <RangeSlider
                    range={[200, 800]}
                    min={0}
                    max={1000}
                    step={50}
                    showValue={true}
                    showMarks={true}
                    marks={[0, 250, 500, 750, 1000]}
                    markLabels={{
                        0: '₩0',
                        250: '₩250K',
                        500: '₩500K',
                        750: '₩750K',
                        1000: '₩1M',
                    }}
                />
            </div>
            <div>
                <h3>연령 범위 (0 - 100)</h3>
                <RangeSlider
                    range={[18, 65]}
                    min={0}
                    max={100}
                    step={1}
                    showValue={true}
                    showMarks={true}
                    marks={[0, 18, 30, 50, 65, 100]}
                    markLabels={{
                        0: '0세',
                        18: '성인',
                        30: '30대',
                        50: '50대',
                        65: '은퇴',
                        100: '100세',
                    }}
                />
            </div>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Normal</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    showValue={true}
                />
            </div>
            <div>
                <h3>Disabled</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    disabled={true}
                    showValue={true}
                />
            </div>
            <div>
                <h3>Read Only</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    readOnly={true}
                    showValue={true}
                />
            </div>
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div style={{ width: '100%', maxWidth: '600px' }}>
            <h3>전체 너비 슬라이더</h3>
            <RangeSlider
                value={50}
                min={0}
                max={100}
                fullWidth={true}
                showValue={true}
            />
        </div>
    ),
};

export const StepExample: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Step 1 (기본)</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    step={1}
                    showValue={true}
                />
            </div>
            <div>
                <h3>Step 5</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    step={5}
                    showValue={true}
                />
            </div>
            <div>
                <h3>Step 10</h3>
                <RangeSlider
                    value={50}
                    min={0}
                    max={100}
                    step={10}
                    showValue={true}
                />
            </div>
        </div>
    ),
};
