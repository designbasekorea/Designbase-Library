import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SegmentControl, type SegmentOption } from './SegmentControl';

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
            options: ['sm', 'md', 'lg'],
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

const viewOptions: SegmentOption[] = [
    { value: 'list', label: '목록' },
    { value: 'grid', label: '그리드' },
    { value: 'table', label: '테이블' },
];

const filterOptions: SegmentOption[] = [
    { value: 'all', label: '전체' },
    { value: 'active', label: '활성' },
    { value: 'inactive', label: '비활성' },
    { value: 'archived', label: '보관' },
];

const statusOptions: SegmentOption[] = [
    { value: 'draft', label: '초안' },
    { value: 'published', label: '발행' },
    { value: 'scheduled', label: '예약' },
];

export const Default: Story = {
    args: {
        options: sampleOptions,
    },
};

export const WithDefaultValue: Story = {
    args: {
        options: sampleOptions,
        defaultValue: 'option2',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Small</h3>
                <SegmentControl options={sampleOptions} size="sm" />
            </div>
            <div>
                <h3>Medium</h3>
                <SegmentControl options={sampleOptions} size="md" />
            </div>
            <div>
                <h3>Large</h3>
                <SegmentControl options={sampleOptions} size="lg" />
            </div>
        </div>
    ),
};

export const ViewOptions: Story = {
    render: () => {
        const [view, setView] = useState('list');

        return (
            <div>
                <h3>뷰 옵션</h3>
                <SegmentControl
                    options={viewOptions}
                    value={view}
                    onChange={setView}
                />
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>선택된 뷰: <strong>{view}</strong></p>
                </div>
            </div>
        );
    },
};

export const FilterOptions: Story = {
    render: () => {
        const [filter, setFilter] = useState('all');

        return (
            <div>
                <h3>필터 옵션</h3>
                <SegmentControl
                    options={filterOptions}
                    value={filter}
                    onChange={setFilter}
                />
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>선택된 필터: <strong>{filter}</strong></p>
                </div>
            </div>
        );
    },
};

export const StatusOptions: Story = {
    render: () => {
        const [status, setStatus] = useState('draft');

        return (
            <div>
                <h3>상태 옵션</h3>
                <SegmentControl
                    options={statusOptions}
                    value={status}
                    onChange={setStatus}
                />
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>선택된 상태: <strong>{status}</strong></p>
                </div>
            </div>
        );
    },
};

export const FullWidth: Story = {
    args: {
        options: sampleOptions,
        fullWidth: true,
    },
};

export const Disabled: Story = {
    args: {
        options: sampleOptions,
        disabled: true,
    },
};

export const WithDisabledOptions: Story = {
    render: () => {
        const optionsWithDisabled: SegmentOption[] = [
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2', disabled: true },
            { value: 'option3', label: '옵션 3' },
        ];

        const [value, setValue] = useState('option1');

        return (
            <div>
                <h3>비활성화된 옵션이 있는 세그먼트 컨트롤</h3>
                <SegmentControl
                    options={optionsWithDisabled}
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

export const Controlled: Story = {
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
                    <button
                        onClick={() => setValue('option2')}
                        style={{ marginRight: '8px', padding: '8px 16px', borderRadius: '4px', border: '1px solid #d1d5db' }}
                    >
                        옵션 2로 설정
                    </button>
                    <button
                        onClick={() => setValue('option3')}
                        style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #d1d5db' }}
                    >
                        옵션 3으로 설정
                    </button>
                </div>
            </div>
        );
    },
};

export const MultipleExamples: Story = {
    render: () => {
        const [view, setView] = useState('list');
        const [filter, setFilter] = useState('all');
        const [status, setStatus] = useState('draft');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                    <h3>뷰 선택</h3>
                    <SegmentControl
                        options={viewOptions}
                        value={view}
                        onChange={setView}
                    />
                </div>

                <div>
                    <h3>필터 선택</h3>
                    <SegmentControl
                        options={filterOptions}
                        value={filter}
                        onChange={setFilter}
                    />
                </div>

                <div>
                    <h3>상태 선택</h3>
                    <SegmentControl
                        options={statusOptions}
                        value={status}
                        onChange={setStatus}
                    />
                </div>

                <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>선택된 값들:</p>
                    <ul>
                        <li>뷰: <strong>{view}</strong></li>
                        <li>필터: <strong>{filter}</strong></li>
                        <li>상태: <strong>{status}</strong></li>
                    </ul>
                </div>
            </div>
        );
    },
};

export const Interactive: Story = {
    render: () => {
        const [selectedValue, setSelectedValue] = useState('option1');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>기본 세그먼트 컨트롤</h3>
                    <SegmentControl
                        options={sampleOptions}
                        value={selectedValue}
                        onChange={setSelectedValue}
                    />
                </div>

                <div>
                    <h3>전체 너비 세그먼트 컨트롤</h3>
                    <SegmentControl
                        options={filterOptions}
                        value={selectedValue}
                        onChange={setSelectedValue}
                        fullWidth
                    />
                </div>

                <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <p>현재 선택된 값: <strong>{selectedValue}</strong></p>
                </div>
            </div>
        );
    },
};
