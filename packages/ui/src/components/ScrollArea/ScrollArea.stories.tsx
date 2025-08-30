import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
    title: 'Components/ScrollArea',
    component: ScrollArea,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal', 'both'],
        },
        scrollbarStyle: {
            control: { type: 'select' },
            options: ['auto', 'thin', 'none'],
        },
        maxHeight: {
            control: { type: 'text' },
        },
        maxWidth: {
            control: { type: 'text' },
        },
        alwaysShowScrollbar: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 컨텐츠 생성 함수
const generateLongContent = (count: number = 50) => {
    return Array.from({ length: count }, (_, i) => (
        <div
            key={i}
            style={{
                padding: '12px',
                margin: '4px 0',
                backgroundColor: `hsl(${(i * 137.5) % 360}, 70%, 90%)`,
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
            }}
        >
            항목 {i + 1} - 이것은 스크롤 테스트를 위한 긴 컨텐츠입니다.
        </div>
    ));
};

const generateWideContent = (count: number = 20) => {
    return Array.from({ length: count }, (_, i) => (
        <div
            key={i}
            style={{
                display: 'inline-block',
                padding: '12px',
                margin: '4px',
                backgroundColor: `hsl(${(i * 137.5) % 360}, 70%, 90%)`,
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                minWidth: '200px',
                textAlign: 'center',
            }}
        >
            항목 {i + 1}
        </div>
    ));
};

export const Default: Story = {
    args: {
        maxHeight: 300,
        children: generateLongContent(20),
    },
};

export const VerticalScroll: Story = {
    args: {
        direction: 'vertical',
        maxHeight: 300,
        children: generateLongContent(30),
    },
};

export const HorizontalScroll: Story = {
    args: {
        direction: 'horizontal',
        maxWidth: 400,
        children: (
            <div style={{ display: 'flex', minWidth: '800px' }}>
                {generateWideContent(15)}
            </div>
        ),
    },
};

export const BothDirections: Story = {
    args: {
        direction: 'both',
        maxHeight: 300,
        maxWidth: 400,
        children: (
            <div style={{ minWidth: '600px', minHeight: '500px' }}>
                {generateLongContent(25).map((item, index) => (
                    <div key={index} style={{ display: 'inline-block', margin: '4px' }}>
                        {item}
                    </div>
                ))}
            </div>
        ),
    },
};

export const ThinScrollbar: Story = {
    args: {
        scrollbarStyle: 'thin',
        maxHeight: 300,
        children: generateLongContent(25),
    },
};

export const HiddenScrollbar: Story = {
    args: {
        scrollbarStyle: 'none',
        maxHeight: 300,
        children: generateLongContent(25),
    },
};

export const AlwaysShowScrollbar: Story = {
    args: {
        alwaysShowScrollbar: true,
        maxHeight: 300,
        children: generateLongContent(20),
    },
};

export const CustomColors: Story = {
    args: {
        scrollbarStyle: 'thin',
        scrollbarColor: '#3b82f6',
        scrollbarTrackColor: '#dbeafe',
        maxHeight: 300,
        children: generateLongContent(25),
    },
};

export const FullHeight: Story = {
    args: {
        fullHeight: true,
        children: generateLongContent(50),
    },
    parameters: {
        layout: 'fullscreen',
    },
};

export const ResponsiveExample: Story = {
    args: {
        maxHeight: 300,
        children: generateLongContent(30),
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
