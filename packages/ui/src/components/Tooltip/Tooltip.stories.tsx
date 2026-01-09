import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: { type: 'select' },
            options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end'],
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: '마우스 오버 시 표시되는 툴팁입니다 (클릭하지 마세요!)',
        children: <Button>마우스를 올려보세요</Button>,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Tooltip content="기본 툴팁" variant="default">
                <Button>Default</Button>
            </Tooltip>
            <Tooltip content="주요 툴팁" variant="primary">
                <Button>Primary</Button>
            </Tooltip>
            <Tooltip content="성공 툴팁" variant="success">
                <Button>Success</Button>
            </Tooltip>
            <Tooltip content="경고 툴팁" variant="warning">
                <Button>Warning</Button>
            </Tooltip>
            <Tooltip content="위험 툴팁" variant="danger">
                <Button>Danger</Button>
            </Tooltip>
            <Tooltip content="정보 툴팁" variant="info">
                <Button>Info</Button>
            </Tooltip>
        </div>
    ),
};

export const AllPositions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Tooltip content="위쪽" position="top" >
                <Button>Top</Button>
            </Tooltip>
            <Tooltip content="아래쪽" position="bottom">
                <Button>Bottom</Button>
            </Tooltip>
            <Tooltip content="왼쪽" position="left">
                <Button>Left</Button>
            </Tooltip>
            <Tooltip content="오른쪽" position="right">
                <Button>Right</Button>
            </Tooltip>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Tooltip content="작은 크기" size="s">
                <Button>Small</Button>
            </Tooltip>
            <Tooltip content="중간 크기" size="m">
                <Button>Medium</Button>
            </Tooltip>
            <Tooltip content="큰 크기" size="l">
                <Button>Large</Button>
            </Tooltip>
        </div>
    ),
};

export const HoverBehavior: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <div>
                <h3 style={{ margin: '0 0 16px 0', textAlign: 'center' }}>Tooltip 동작 방식</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Tooltip content="마우스를 올리면 나타나고, 벗어나면 사라집니다">
                        <Button>마우스 오버만</Button>
                    </Tooltip>
                    <Tooltip content="클릭할 필요 없이 마우스만 올려보세요">
                        <Button>클릭 금지</Button>
                    </Tooltip>
                    <Tooltip content="이것은 툴팁입니다 - hover 전용">
                        <Button>Hover Only</Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    ),
};
