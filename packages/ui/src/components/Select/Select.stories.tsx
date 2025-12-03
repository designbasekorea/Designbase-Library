import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select, type SelectOption } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        multiple: {
            control: { type: 'boolean' },
        },
        searchable: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        error: {
            control: { type: 'boolean' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions: SelectOption[] = [
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2' },
    { value: 'option3', label: '옵션 3' },
    { value: 'option4', label: '옵션 4' },
    { value: 'option5', label: '옵션 5' },
    { value: 'option6', label: '옵션 6 (비활성화)', disabled: true },
];

// 기본 셀렉트
export const Default: Story = {
    render: () => {
        const [value, setValue] = useState<string>('');

        return (
            <Select
                label="옵션 선택"
                options={sampleOptions}
                value={value}
                onChange={(val) => setValue(val as string)}
                placeholder="옵션을 선택하세요"
            />
        );
    },
};

// 크기별 비교
export const AllSizes: Story = {
    render: () => {
        const [value1, setValue1] = useState<string>('');
        const [value2, setValue2] = useState<string>('');
        const [value3, setValue3] = useState<string>('');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Small</h3>
                    <Select
                        size="s"
                        options={sampleOptions}
                        value={value1}
                        onChange={(val) => setValue1(val as string)}
                        placeholder="Small select"
                    />
                </div>
                <div>
                    <h3>Medium</h3>
                    <Select
                        size="m"
                        options={sampleOptions}
                        value={value2}
                        onChange={(val) => setValue2(val as string)}
                        placeholder="Medium select"
                    />
                </div>
                <div>
                    <h3>Large</h3>
                    <Select
                        size="l"
                        options={sampleOptions}
                        value={value3}
                        onChange={(val) => setValue3(val as string)}
                        placeholder="Large select"
                    />
                </div>
            </div>
        );
    },
};

// 타입별 비교
export const AllTypes: Story = {
    render: () => {
        const [singleValue, setSingleValue] = useState<string>('');
        const [multipleValue, setMultipleValue] = useState<string[]>([]);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>단일 선택</h3>
                    <Select
                        label="단일 선택"
                        options={sampleOptions}
                        value={singleValue}
                        onChange={(val) => setSingleValue(val as string)}
                        placeholder="하나만 선택하세요"
                    />
                </div>
                <div>
                    <h3>다중 선택</h3>
                    <Select
                        label="다중 선택"
                        options={sampleOptions}
                        value={multipleValue}
                        onChange={(val) => setMultipleValue(val as string[])}
                        multiple
                        placeholder="여러 개 선택하세요"
                    />
                </div>
            </div>
        );
    },
};

export const Searchable: Story = {
    render: () => {
        const [value, setValue] = useState<string>('');

        return (
            <Select
                label="검색 가능한 셀렉트"
                options={sampleOptions}
                value={value}
                onChange={(val) => setValue(val as string)}
                searchable
                placeholder="옵션을 검색해보세요"
                helperText="위 검색창을 사용해 옵션을 필터링할 수 있습니다"
            />
        );
    },
};

// 상태별 비교
export const AllStates: Story = {
    render: () => {
        const [value1, setValue1] = useState<string>('');
        const [value2, setValue2] = useState<string>('');
        const [value3, setValue3] = useState<string>('');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>기본 상태</h3>
                    <Select
                        options={sampleOptions}
                        value={value1}
                        onChange={(val) => setValue1(val as string)}
                        placeholder="기본 셀렉트"
                    />
                </div>
                <div>
                    <h3>에러 상태</h3>
                    <Select
                        options={sampleOptions}
                        value={value2}
                        onChange={(val) => setValue2(val as string)}
                        error
                        errorMessage="올바른 옵션을 선택해주세요"
                        placeholder="에러가 있는 셀렉트"
                    />
                </div>
                <div>
                    <h3>비활성화</h3>
                    <Select
                        options={sampleOptions}
                        value={value3}
                        onChange={(val) => setValue3(val as string)}
                        disabled
                        placeholder="비활성화된 셀렉트"
                    />
                </div>
            </div>
        );
    },
};
