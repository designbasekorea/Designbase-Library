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
        title: {
            control: { type: 'text' },
        },
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
        title: '팝오버 제목',
        content: (
            <div>
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
            <Popover title="기본 팝오버" content="기본 스타일의 팝오버입니다" variant="default" onOpenChange={fn()}>
                <Button>Default</Button>
            </Popover>
            <Popover title="주요 팝오버" content="주요 스타일의 팝오버입니다" variant="primary" onOpenChange={fn()}>
                <Button>Primary</Button>
            </Popover>
            <Popover title="성공 팝오버" content="성공 스타일의 팝오버입니다" variant="success" onOpenChange={fn()}>
                <Button>Success</Button>
            </Popover>
            <Popover title="경고 팝오버" content="경고 스타일의 팝오버입니다" variant="warning" onOpenChange={fn()}>
                <Button>Warning</Button>
            </Popover>
            <Popover title="위험 팝오버" content="위험 스타일의 팝오버입니다" variant="danger" onOpenChange={fn()}>
                <Button>Danger</Button>
            </Popover>
            <Popover title="정보 팝오버" content="정보 스타일의 팝오버입니다" variant="info" onOpenChange={fn()}>
                <Button>Info</Button>
            </Popover>
        </div>
    ),
};

export const AllPositions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', padding: '160px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Popover title="위쪽 팝오버" content="위쪽에 표시되는 팝오버입니다" position="top" onOpenChange={fn()}>
                <Button>Top</Button>
            </Popover>
            <Popover title="아래쪽 팝오버" content="아래쪽에 표시되는 팝오버입니다" position="bottom" onOpenChange={fn()}>
                <Button>Bottom</Button>
            </Popover>
            <Popover title="왼쪽 팝오버" content="왼쪽에 표시되는 팝오버입니다" position="left" onOpenChange={fn()}>
                <Button>Left</Button>
            </Popover>
            <Popover title="오른쪽 팝오버" content="오른쪽에 표시되는 팝오버입니다" position="right" onOpenChange={fn()}>
                <Button>Right</Button>
            </Popover>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Popover title="작은 크기" content="작은 크기의 팝오버입니다" size="s" onOpenChange={fn()}>
                <Button>Small</Button>
            </Popover>
            <Popover title="중간 크기" content="중간 크기의 팝오버입니다" size="m" onOpenChange={fn()}>
                <Button>Medium</Button>
            </Popover>
            <Popover title="큰 크기" content="큰 크기의 팝오버입니다" size="l" onOpenChange={fn()}>
                <Button>Large</Button>
            </Popover>
        </div>
    ),
};

export const ComplexContent: Story = {
    render: () => (
        <Popover
            title="복잡한 콘텐츠"
            content={
                <div>
                    <p style={{ margin: '0 0 12px 0' }}>
                        이 팝오버는 복잡한 HTML 콘텐츠를 포함합니다.
                    </p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Button size="s" variant="primary">확인</Button>
                        <Button size="s" variant="secondary">취소</Button>
                    </div>
                </div>
            }
            onOpenChange={fn()}
        >
            <Button>복잡한 콘텐츠</Button>
        </Popover>
    ),
};

export const WithoutTitle: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Popover
                content="제목이 없는 팝오버입니다. 닫기 버튼은 여전히 표시됩니다."
                variant="default"
                onOpenChange={fn()}
            >
                <Button>Default</Button>
            </Popover>
            <Popover
                content="주요 팝오버입니다"
                variant="primary"
                onOpenChange={fn()}
            >
                <Button>Primary</Button>
            </Popover>
            <Popover
                content="성공 팝오버입니다"
                variant="success"
                onOpenChange={fn()}
            >
                <Button>Success</Button>
            </Popover>
        </div>
    ),
};
