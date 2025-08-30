import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        hasLabel: {
            control: { type: 'boolean' },
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        isSelected: {
            control: { type: 'boolean' },
        },
        isIndeterminate: {
            control: { type: 'boolean' },
        },
        isDisabled: {
            control: { type: 'boolean' },
        },
        isReadOnly: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '체크박스 라벨',
    },
};

export const WithAndWithoutLabel: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox hasLabel={true}>레이블이 있는 체크박스</Checkbox>
            <Checkbox hasLabel={false} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Checkbox hasLabel={false} />
                <span>레이블이 없는 체크박스 (텍스트는 별도)</span>
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox size="xs">Extra Small 체크박스</Checkbox>
            <Checkbox size="sm">Small 체크박스</Checkbox>
            <Checkbox size="md">Medium 체크박스</Checkbox>
            <Checkbox size="lg">Large 체크박스</Checkbox>
            <Checkbox size="xl">Extra Large 체크박스</Checkbox>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox>기본 상태</Checkbox>
            <Checkbox isSelected>선택된 상태</Checkbox>
            <Checkbox isIndeterminate>중간 상태</Checkbox>
            <Checkbox isDisabled>비활성화 상태</Checkbox>
            <Checkbox isSelected isDisabled>선택된 비활성화 상태</Checkbox>
            <Checkbox isReadOnly>읽기 전용 상태</Checkbox>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [selected, setSelected] = useState(false);
        const [indeterminate, setIndeterminate] = useState(false);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Checkbox 
                    isSelected={selected} 
                    onChange={setSelected}
                >
                    상호작용 가능한 체크박스
                </Checkbox>
                <Checkbox 
                    isIndeterminate={indeterminate}
                    onChange={setIndeterminate}
                >
                    중간 상태 체크박스
                </Checkbox>
                <div style={{ marginTop: '16px' }}>
                    <p>선택됨: {selected ? '예' : '아니오'}</p>
                    <p>중간 상태: {indeterminate ? '예' : '아니오'}</p>
                </div>
            </div>
        );
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Checkbox size="xs">Extra Small 체크박스</Checkbox>
            <Checkbox size="sm">Small 체크박스</Checkbox>
            <Checkbox size="md">Medium 체크박스</Checkbox>
            <Checkbox size="lg">Large 체크박스</Checkbox>
            <Checkbox size="xl">Extra Large 체크박스</Checkbox>
        </div>
    ),
};
