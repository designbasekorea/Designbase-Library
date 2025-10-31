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
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        isSelected: {
            control: { type: 'boolean' },
        },
        isDisabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '토글',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
            <Toggle size="s">S 토글</Toggle>
            <Toggle size="m">M 토글</Toggle>
            <Toggle size="l">L 토글</Toggle>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
            <Toggle>기본</Toggle>
            <Toggle isSelected>선택됨</Toggle>
            <Toggle isDisabled>비활성화</Toggle>
            <Toggle isSelected isDisabled>선택된 비활성화</Toggle>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [selected, setSelected] = useState(false);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                <Toggle
                    isSelected={selected}
                    onChange={setSelected}
                >
                    클릭해보세요
                </Toggle>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                    상태: {selected ? '켜짐' : '꺼짐'}
                </p>
            </div>
        );
    },
};
