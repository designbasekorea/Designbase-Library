import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
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
        children: '토글 라벨',
    },
};

export const WithAndWithoutLabel: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Toggle hasLabel={true}>레이블이 있는 토글</Toggle>
            <Toggle hasLabel={false} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Toggle hasLabel={false} />
                <span>레이블이 없는 토글 (텍스트는 별도)</span>
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Toggle size="xs">Extra Small 토글</Toggle>
            <Toggle size="sm">Small 토글</Toggle>
            <Toggle size="md">Medium 토글</Toggle>
            <Toggle size="lg">Large 토글</Toggle>
            <Toggle size="xl">Extra Large 토글</Toggle>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Toggle>기본 상태</Toggle>
            <Toggle isSelected>선택된 상태</Toggle>
            <Toggle isDisabled>비활성화 상태</Toggle>
            <Toggle isSelected isDisabled>선택된 비활성화 상태</Toggle>
            <Toggle isReadOnly>읽기 전용 상태</Toggle>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [selected, setSelected] = useState(false);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Toggle 
                    isSelected={selected} 
                    onChange={setSelected}
                >
                    상호작용 가능한 토글
                </Toggle>
                <div style={{ marginTop: '16px' }}>
                    <p>선택됨: {selected ? '예' : '아니오'}</p>
                </div>
            </div>
        );
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Toggle size="xs">Extra Small 토글</Toggle>
            <Toggle size="sm">Small 토글</Toggle>
            <Toggle size="md">Medium 토글</Toggle>
            <Toggle size="lg">Large 토글</Toggle>
            <Toggle size="xl">Extra Large 토글</Toggle>
        </div>
    ),
};
