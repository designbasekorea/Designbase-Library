import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    component: Radio,
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
        children: '라디오 버튼 라벨',
    },
};

export const WithAndWithoutLabel: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Radio hasLabel={true}>레이블이 있는 라디오</Radio>
            <Radio hasLabel={false} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Radio hasLabel={false} />
                <span>레이블이 없는 라디오 (텍스트는 별도)</span>
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Radio size="xs">Extra Small 라디오</Radio>
            <Radio size="sm">Small 라디오</Radio>
            <Radio size="md">Medium 라디오</Radio>
            <Radio size="lg">Large 라디오</Radio>
            <Radio size="xl">Extra Large 라디오</Radio>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Radio>기본 상태</Radio>
            <Radio isSelected>선택된 상태</Radio>
            <Radio isDisabled>비활성화 상태</Radio>
            <Radio isSelected isDisabled>선택된 비활성화 상태</Radio>
            <Radio isReadOnly>읽기 전용 상태</Radio>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [selected, setSelected] = useState('');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Radio 
                    isSelected={selected === 'option1'} 
                    onChange={() => setSelected('option1')}
                    value="option1"
                >
                    옵션 1
                </Radio>
                <Radio 
                    isSelected={selected === 'option2'} 
                    onChange={() => setSelected('option2')}
                    value="option2"
                >
                    옵션 2
                </Radio>
                <Radio 
                    isSelected={selected === 'option3'} 
                    onChange={() => setSelected('option3')}
                    value="option3"
                >
                    옵션 3
                </Radio>
                <div style={{ marginTop: '16px' }}>
                    <p>선택된 옵션: {selected || '없음'}</p>
                </div>
            </div>
        );
    },
};

export const RadioGroup: Story = {
    render: () => {
        const [selected, setSelected] = useState('');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Radio 
                    isSelected={selected === 'option1'} 
                    onChange={() => setSelected('option1')}
                    value="option1"
                >
                    옵션 1
                </Radio>
                <Radio 
                    isSelected={selected === 'option2'} 
                    onChange={() => setSelected('option2')}
                    value="option2"
                >
                    옵션 2
                </Radio>
                <Radio 
                    isSelected={selected === 'option3'} 
                    onChange={() => setSelected('option3')}
                    value="option3"
                >
                    옵션 3
                </Radio>
                <div style={{ marginTop: '16px' }}>
                    <p>선택된 옵션: {selected || '없음'}</p>
                </div>
            </div>
        );
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Radio size="xs">Extra Small 라디오</Radio>
            <Radio size="sm">Small 라디오</Radio>
            <Radio size="md">Medium 라디오</Radio>
            <Radio size="lg">Large 라디오</Radio>
            <Radio size="xl">Extra Large 라디오</Radio>
        </div>
    ),
};
