import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SegmentControl, type SegmentOption } from './SegmentControl';
import { BarChartIcon, LineChartUpIcon, PieChartIcon, DoughnutChartIcon, ChartRadarIcon } from '@designbasekorea/icons';

const meta: Meta<typeof SegmentControl> = {
    title: 'Components/SegmentControl',
    component: SegmentControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions: SegmentOption[] = [
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2' },
    { value: 'option3', label: '옵션 3' },
];

const chartOptions: SegmentOption[] = [
    { value: 'bar', label: 'Bar', icon: BarChartIcon },
    { value: 'line', label: 'Line', icon: LineChartUpIcon },
    { value: 'pie', label: 'Pie', icon: PieChartIcon },
    { value: 'donut', label: 'Donut', icon: DoughnutChartIcon },
    { value: 'radar', label: 'Radar', icon: ChartRadarIcon },
];

export const Default: Story = {
    args: {
        options: sampleOptions,
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Small</h3>
                <SegmentControl options={sampleOptions} size="s" />
            </div>
            <div>
                <h3>Medium</h3>
                <SegmentControl options={sampleOptions} size="m" />
            </div>
            <div>
                <h3>Large</h3>
                <SegmentControl options={sampleOptions} size="l" />
            </div>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [value, setValue] = useState('option1');

        return (
            <div>
                <SegmentControl
                    options={sampleOptions}
                    value={value}
                    onChange={setValue}
                />
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>선택된 값: <strong>{value}</strong></p>
                </div>
            </div>
        );
    },
};

export const WithIcons: Story = {
    render: () => {
        const [value, setValue] = useState('bar');

        return (
            <div>
                <SegmentControl
                    options={chartOptions}
                    value={value}
                    onChange={setValue}
                />
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>선택된 차트 타입: <strong>{value}</strong></p>
                    <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
                        아이콘은 마우스 오버나 선택 시에만 표시됩니다.
                    </p>
                </div>
            </div>
        );
    },
};

export const WithIconsAllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Small with Icons</h3>
                <SegmentControl options={chartOptions} size="s" />
            </div>
            <div>
                <h3>Medium with Icons</h3>
                <SegmentControl options={chartOptions} size="m" />
            </div>
            <div>
                <h3>Large with Icons</h3>
                <SegmentControl options={chartOptions} size="l" />
            </div>
        </div>
    ),
};

export const MixedContent: Story = {
    render: () => {
        const mixedOptions: SegmentOption[] = [
            { value: 'text-only', label: '텍스트만' },
            { value: 'with-icon', label: '아이콘 포함', icon: BarChartIcon },
            { value: 'another-text', label: '또 다른 텍스트' },
        ];

        return (
            <div>
                <SegmentControl options={mixedOptions} />
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>일부 옵션만 아이콘이 있는 경우도 지원합니다.</p>
                </div>
            </div>
        );
    },
};

export const IconOnly: Story = {
    render: () => {
        const [value, setValue] = useState('bar');

        const iconOnlyOptions: SegmentOption[] = [
            { value: 'bar', label: 'Bar Chart', icon: BarChartIcon },
            { value: 'line', label: 'Line Chart', icon: LineChartUpIcon },
            { value: 'pie', label: 'Pie Chart', icon: PieChartIcon },
            { value: 'donut', label: 'Donut Chart', icon: DoughnutChartIcon },
            { value: 'radar', label: 'Radar Chart', icon: ChartRadarIcon },
        ];

        return (
            <div>
                <SegmentControl
                    options={iconOnlyOptions}
                    variant="icon-only"
                    value={value}
                    onChange={setValue}
                />
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>선택된 차트 타입: <strong>{value}</strong></p>
                    <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
                        아이콘만 표시되는 타입입니다. label은 접근성을 위해 aria-label로 제공됩니다.
                    </p>
                </div>
            </div>
        );
    },
};

export const IconOnlyAllSizes: Story = {
    render: () => {
        const iconOnlyOptions: SegmentOption[] = [
            { value: 'bar', label: 'Bar Chart', icon: BarChartIcon },
            { value: 'line', label: 'Line Chart', icon: LineChartUpIcon },
            { value: 'pie', label: 'Pie Chart', icon: PieChartIcon },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>Small (Icon Only)</h3>
                    <SegmentControl options={iconOnlyOptions} variant="icon-only" size="s" />
                </div>
                <div>
                    <h3>Medium (Icon Only)</h3>
                    <SegmentControl options={iconOnlyOptions} variant="icon-only" size="m" />
                </div>
                <div>
                    <h3>Large (Icon Only)</h3>
                    <SegmentControl options={iconOnlyOptions} variant="icon-only" size="l" />
                </div>
            </div>
        );
    },
};
