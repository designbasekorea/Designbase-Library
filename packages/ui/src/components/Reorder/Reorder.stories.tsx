import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Reorder, ReorderItem } from './Reorder';

const meta: Meta<typeof Reorder> = {
    title: 'Components/Reorder',
    component: Reorder,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'bordered', 'filled', 'minimal'],
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        orientation: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 재정렬
export const Default: Story = {
    render: () => {
        const [items, setItems] = useState<ReorderItem[]>([
            { id: '1', content: '첫 번째 아이템' },
            { id: '2', content: '두 번째 아이템' },
            { id: '3', content: '세 번째 아이템' },
            { id: '4', content: '네 번째 아이템' },
            { id: '5', content: '다섯 번째 아이템' },
        ]);

        return (
            <Reorder
                items={items}
                onReorder={setItems}
                variant="default"
                size="m"
            />
        );
    },
};



// 크기별 비교
export const AllSizes: Story = {
    render: () => {
        const [items1, setItems1] = useState<ReorderItem[]>([
            { id: '1', content: 'Small 1' },
            { id: '2', content: 'Small 2' },
            { id: '3', content: 'Small 3' },
        ]);
        const [items2, setItems2] = useState<ReorderItem[]>([
            { id: '1', content: 'Medium 1' },
            { id: '2', content: 'Medium 2' },
            { id: '3', content: 'Medium 3' },
        ]);
        const [items3, setItems3] = useState<ReorderItem[]>([
            { id: '1', content: 'Large 1' },
            { id: '2', content: 'Large 2' },
            { id: '3', content: 'Large 3' },
        ]);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Small</h3>
                    <Reorder items={items1} onReorder={setItems1} size="s" />
                </div>
                <div>
                    <h3>Medium</h3>
                    <Reorder items={items2} onReorder={setItems2} size="m" />
                </div>
                <div>
                    <h3>Large</h3>
                    <Reorder items={items3} onReorder={setItems3} size="l" />
                </div>
            </div>
        );
    },
};

// 변형별 비교
export const AllVariants: Story = {
    render: () => {
        const [items1, setItems1] = useState<ReorderItem[]>([
            { id: '1', content: 'Default 1' },
            { id: '2', content: 'Default 2' },
        ]);
        const [items2, setItems2] = useState<ReorderItem[]>([
            { id: '1', content: 'Bordered 1' },
            { id: '2', content: 'Bordered 2' },
        ]);
        const [items3, setItems3] = useState<ReorderItem[]>([
            { id: '1', content: 'Filled 1' },
            { id: '2', content: 'Filled 2' },
        ]);
        const [items4, setItems4] = useState<ReorderItem[]>([
            { id: '1', content: 'Minimal 1' },
            { id: '2', content: 'Minimal 2' },
        ]);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Default</h3>
                    <Reorder items={items1} onReorder={setItems1} variant="default" />
                </div>
                <div>
                    <h3>Bordered</h3>
                    <Reorder items={items2} onReorder={setItems2} variant="bordered" />
                </div>
                <div>
                    <h3>Filled</h3>
                    <Reorder items={items3} onReorder={setItems3} variant="filled" />
                </div>
                <div>
                    <h3>Minimal</h3>
                    <Reorder items={items4} onReorder={setItems4} variant="minimal" />
                </div>
            </div>
        );
    },
};

// 방향별 비교
export const AllOrientations: Story = {
    render: () => {
        const [items1, setItems1] = useState<ReorderItem[]>([
            { id: '1', content: '위로' },
            { id: '2', content: '아래로' },
            { id: '3', content: '드래그' },
        ]);
        const [items2, setItems2] = useState<ReorderItem[]>([
            { id: '1', content: '왼쪽' },
            { id: '2', content: '중앙' },
            { id: '3', content: '오른쪽' },
        ]);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div>
                    <h3>수직 방향 (Vertical)</h3>
                    <Reorder
                        items={items1}
                        onReorder={setItems1}
                        orientation="vertical"
                        variant="filled"
                    />
                </div>
                <div>
                    <h3>수평 방향 (Horizontal)</h3>
                    <Reorder
                        items={items2}
                        onReorder={setItems2}
                        orientation="horizontal"
                        variant="filled"
                    />
                </div>
            </div>
        );
    },
};
