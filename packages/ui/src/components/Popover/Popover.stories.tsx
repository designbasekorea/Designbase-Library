import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Popover } from './Popover';
import { Button } from '../Button/Button';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
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
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
        },
        trigger: {
            control: { type: 'select' },
            options: ['click', 'hover', 'focus', 'manual'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: (
            <div>
                <h3 style={{ margin: '0 0 8px 0' }}>팝오버 제목</h3>
                <p style={{ margin: 0 }}>클릭 시 표시되는 팝오버입니다 (클릭해야 나타남)</p>
            </div>
        ),
        children: <Button>클릭하세요</Button>,
        onOpenChange: fn(),
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Popover content="기본 팝오버" variant="default" onOpenChange={fn()}>
                <Button>Default</Button>
            </Popover>
            <Popover content="주요 팝오버" variant="primary" onOpenChange={fn()}>
                <Button>Primary</Button>
            </Popover>
            <Popover content="성공 팝오버" variant="success" onOpenChange={fn()}>
                <Button>Success</Button>
            </Popover>
            <Popover content="경고 팝오버" variant="warning" onOpenChange={fn()}>
                <Button>Warning</Button>
            </Popover>
            <Popover content="위험 팝오버" variant="danger" onOpenChange={fn()}>
                <Button>Danger</Button>
            </Popover>
            <Popover content="정보 팝오버" variant="info" onOpenChange={fn()}>
                <Button>Info</Button>
            </Popover>
        </div>
    ),
};

export const AllPositions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Popover content="위쪽" position="top" onOpenChange={fn()}>
                <Button>Top</Button>
            </Popover>
            <Popover content="아래쪽" position="bottom" onOpenChange={fn()}>
                <Button>Bottom</Button>
            </Popover>
            <Popover content="왼쪽" position="left" onOpenChange={fn()}>
                <Button>Left</Button>
            </Popover>
            <Popover content="오른쪽" position="right" onOpenChange={fn()}>
                <Button>Right</Button>
            </Popover>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Popover content="작은 크기" size="sm" onOpenChange={fn()}>
                <Button>Small</Button>
            </Popover>
            <Popover content="중간 크기" size="md" onOpenChange={fn()}>
                <Button>Medium</Button>
            </Popover>
            <Popover content="큰 크기" size="lg" onOpenChange={fn()}>
                <Button>Large</Button>
            </Popover>
        </div>
    ),
};

export const ComplexContent: Story = {
    render: () => (
        <Popover
            content={
                <div style={{ padding: '16px' }}>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>복잡한 콘텐츠</h3>
                    <p style={{ margin: '0 0 12px 0', fontSize: '14px' }}>
                        이 팝오버는 복잡한 HTML 콘텐츠를 포함합니다.
                    </p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Button size="sm" variant="primary">확인</Button>
                        <Button size="sm" variant="secondary">취소</Button>
                    </div>
                </div>
            }
            onOpenChange={fn()}
        >
            <Button>복잡한 콘텐츠</Button>
        </Popover>
    ),
};
