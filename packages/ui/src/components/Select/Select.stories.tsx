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
            options: ['sm', 'md', 'lg'],
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
        readOnly: {
            control: { type: 'boolean' },
        },
        required: {
            control: { type: 'boolean' },
        },
        error: {
            control: { type: 'boolean' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
        dropdownWidth: {
            control: { type: 'select' },
            options: ['auto', 'full'],
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

const longOptions: SelectOption[] = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'nuxt', label: 'Nuxt.js' },
    { value: 'gatsby', label: 'Gatsby' },
    { value: 'remix', label: 'Remix' },
    { value: 'solid', label: 'Solid.js' },
    { value: 'qwik', label: 'Qwik' },
];

export const Default: Story = {
    args: {
        options: sampleOptions,
        placeholder: '옵션을 선택하세요',
    },
};

export const WithLabel: Story = {
    args: {
        label: '프레임워크 선택',
        options: longOptions,
        placeholder: '프레임워크를 선택하세요',
        helperText: '사용하고 싶은 프레임워크를 선택해주세요.',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Select
                size="sm"
                label="Small"
                options={sampleOptions}
                placeholder="Small select"
            />
            <Select
                size="md"
                label="Medium"
                options={sampleOptions}
                placeholder="Medium select"
            />
            <Select
                size="lg"
                label="Large"
                options={sampleOptions}
                placeholder="Large select"
            />
        </div>
    ),
};

export const SingleSelect: Story = {
    render: () => {
        const [value, setValue] = useState<string>('');

        return (
            <Select
                label="단일 선택"
                options={longOptions}
                value={value}
                onChange={(val) => setValue(val as string)}
                placeholder="프레임워크를 선택하세요"
                helperText="하나의 프레임워크만 선택할 수 있습니다."
            />
        );
    },
};

export const MultipleSelect: Story = {
    render: () => {
        const [value, setValue] = useState<string[]>([]);

        return (
            <Select
                label="다중 선택"
                options={longOptions}
                value={value}
                onChange={(val) => setValue(val as string[])}
                multiple
                placeholder="프레임워크를 선택하세요"
                helperText="여러 프레임워크를 선택할 수 있습니다."
            />
        );
    },
};

export const Searchable: Story = {
    render: () => {
        const [value, setValue] = useState<string>('');

        return (
            <Select
                label="검색 가능한 셀렉트"
                options={longOptions}
                value={value}
                onChange={(val) => setValue(val as string)}
                searchable
                placeholder="프레임워크를 검색하거나 선택하세요"
                helperText="옵션을 검색할 수 있습니다."
            />
        );
    },
};

export const SearchableMultiple: Story = {
    render: () => {
        const [value, setValue] = useState<string[]>([]);

        return (
            <Select
                label="검색 가능한 다중 선택"
                options={longOptions}
                value={value}
                onChange={setValue}
                multiple
                searchable
                placeholder="프레임워크를 검색하거나 선택하세요"
                helperText="여러 프레임워크를 검색하고 선택할 수 있습니다."
            />
        );
    },
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Select
                label="기본 상태"
                options={sampleOptions}
                placeholder="기본 셀렉트"
            />
            <Select
                label="필수 필드"
                options={sampleOptions}
                placeholder="필수 셀렉트"
                required
            />
            <Select
                label="에러 상태"
                options={sampleOptions}
                placeholder="에러가 있는 셀렉트"
                error
                errorMessage="올바른 옵션을 선택해주세요."
            />
            <Select
                label="비활성화"
                options={sampleOptions}
                placeholder="비활성화된 셀렉트"
                disabled
            />
            <Select
                label="읽기 전용"
                options={sampleOptions}
                placeholder="읽기 전용 셀렉트"
                readOnly
                value="option1"
            />
        </div>
    ),
};

export const WithDisabledOptions: Story = {
    args: {
        label: '비활성화된 옵션이 있는 셀렉트',
        options: [
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2' },
            { value: 'option3', label: '옵션 3 (비활성화)', disabled: true },
            { value: 'option4', label: '옵션 4' },
            { value: 'option5', label: '옵션 5 (비활성화)', disabled: true },
        ],
        placeholder: '옵션을 선택하세요',
        helperText: '일부 옵션은 비활성화되어 있습니다.',
    },
};

export const FullWidth: Story = {
    args: {
        label: '전체 너비 셀렉트',
        options: longOptions,
        placeholder: '전체 너비 셀렉트',
        fullWidth: true,
        helperText: '전체 너비를 사용하는 셀렉트입니다.',
    },
};

export const WithDefaultValue: Story = {
    render: () => {
        const [value, setValue] = useState<string>('react');

        return (
            <Select
                label="기본값이 있는 셀렉트"
                options={longOptions}
                value={value}
                onChange={setValue}
                placeholder="프레임워크를 선택하세요"
                helperText="React가 기본값으로 선택되어 있습니다."
            />
        );
    },
};

export const WithDefaultValueMultiple: Story = {
    render: () => {
        const [value, setValue] = useState<string[]>(['react', 'vue']);

        return (
            <Select
                label="기본값이 있는 다중 선택"
                options={longOptions}
                value={value}
                onChange={setValue}
                multiple
                placeholder="프레임워크를 선택하세요"
                helperText="React와 Vue가 기본값으로 선택되어 있습니다."
            />
        );
    },
};

export const CustomMaxHeight: Story = {
    args: {
        label: '커스텀 최대 높이',
        options: longOptions,
        placeholder: '프레임워크를 선택하세요',
        maxHeight: 150,
        helperText: '드롭다운의 최대 높이가 150px로 제한됩니다.',
    },
};

export const DropdownWidthFull: Story = {
    args: {
        label: '전체 너비 드롭다운',
        options: longOptions,
        placeholder: '프레임워크를 선택하세요',
        dropdownWidth: 'full',
        helperText: '드롭다운이 셀렉트 박스의 전체 너비를 사용합니다.',
    },
};

export const Interactive: Story = {
    render: () => {
        const [singleValue, setSingleValue] = useState<string>('');
        const [multipleValue, setMultipleValue] = useState<string[]>([]);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>단일 선택</h3>
                    <Select
                        label="프레임워크 선택"
                        options={longOptions}
                        value={singleValue}
                        onChange={setSingleValue}
                        placeholder="프레임워크를 선택하세요"
                    />
                    <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
                        선택된 값: {singleValue || '없음'}
                    </p>
                </div>

                <div>
                    <h3>다중 선택</h3>
                    <Select
                        label="프레임워크 다중 선택"
                        options={longOptions}
                        value={multipleValue}
                        onChange={setMultipleValue}
                        multiple
                        searchable
                        placeholder="프레임워크를 선택하세요"
                    />
                    <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
                        선택된 값: {multipleValue.length > 0 ? multipleValue.join(', ') : '없음'}
                    </p>
                </div>
            </div>
        );
    },
};
