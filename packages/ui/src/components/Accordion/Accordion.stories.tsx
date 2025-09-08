import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Accordion } from './Accordion';
import {
    UserIcon,
    SettingsIcon,
    HelpIcon
} from '@designbase/icons';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        style: {
            control: { type: 'select' },
            options: ['default', 'bordered', 'separated', 'contained'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        allowMultiple: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    {
        id: '1',
        title: '기본 정보',
        content: '사용자의 기본 정보를 확인하고 수정할 수 있습니다.',
        icon: UserIcon,
    },
    {
        id: '2',
        title: '설정',
        content: '계정 설정, 알림 설정, 보안 설정 등을 관리할 수 있습니다.',
        icon: SettingsIcon,
        defaultExpanded: true,
    },
    {
        id: '3',
        title: '도움말',
        content: '자주 묻는 질문과 답변, 사용 가이드, 문의 방법 등을 확인할 수 있습니다.',
        icon: HelpIcon,
    },
];

const numberedItems = [
    {
        id: '1',
        title: '첫 번째 단계',
        content: '이것은 첫 번째 단계에 대한 설명입니다.',
        itemType: 'number' as const,
    },
    {
        id: '2',
        title: '두 번째 단계',
        content: '이것은 두 번째 단계에 대한 설명입니다.',
        itemType: 'number' as const,
    },
    {
        id: '3',
        title: '세 번째 단계',
        content: '이것은 세 번째 단계에 대한 설명입니다.',
        itemType: 'number' as const,
    },
];

const questionItems = [
    {
        id: '1',
        title: '서비스 이용 방법은 어떻게 되나요?',
        content: '서비스 이용 방법에 대한 자세한 설명입니다.',
        itemType: 'question' as const,
    },
    {
        id: '2',
        title: '결제는 언제 이루어지나요?',
        content: '결제 시점과 방법에 대한 안내입니다.',
        itemType: 'question' as const,
    },
    {
        id: '3',
        title: '환불 정책은 어떻게 되나요?',
        content: '환불 정책에 대한 자세한 안내입니다.',
        itemType: 'question' as const,
    },
];

const plainItems = [
    {
        id: '1',
        title: '간단한 제목',
        content: '아무런 접두사 없이 깔끔하게 표시되는 아코디언입니다.',
        itemType: 'none' as const,
    },
    {
        id: '2',
        title: '또 다른 제목',
        content: '이것도 접두사 없이 표시됩니다.',
        itemType: 'none' as const,
    },
    {
        id: '3',
        title: '마지막 제목',
        content: '마지막 아이템입니다.',
        itemType: 'none' as const,
    },
];

const statusItems = [
    {
        id: 'success',
        title: '성공 알림',
        content: '작업이 성공적으로 완료되었습니다.',
        icon: UserIcon,
    },
    {
        id: 'warning',
        title: '경고 메시지',
        content: '주의가 필요한 상황입니다.',
        icon: SettingsIcon,
    },
    {
        id: 'error',
        title: '오류 발생',
        content: '처리 중 오류가 발생했습니다.',
        icon: HelpIcon,
    },
    {
        id: 'info',
        title: '정보',
        content: '새로운 기능이 추가되었습니다.',
        icon: UserIcon,
    },
];

export const Default: Story = {
    args: {
        items: sampleItems,
        onItemChange: fn(),
    },
    parameters: {
        docs: {
            description: {
                story: '기본 아코디언입니다. 기본값은 아이콘이나 숫자 없이 깔끔하게 표시됩니다 (defaultItemType: "none").',
            },
        },
    },
};

export const AllStyles: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Default Style</h3>
                <Accordion items={sampleItems} style="default" onItemChange={fn()} />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Bordered Style</h3>
                <Accordion items={sampleItems} style="bordered" onItemChange={fn()} />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Separated Style</h3>
                <Accordion items={sampleItems} style="separated" onItemChange={fn()} />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Contained Style</h3>
                <Accordion items={sampleItems} style="contained" onItemChange={fn()} />
            </div>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Small Size</h3>
                <Accordion items={sampleItems} size="sm" onItemChange={fn()} />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Medium Size (Default)</h3>
                <Accordion items={sampleItems} size="md" onItemChange={fn()} />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Large Size</h3>
                <Accordion items={sampleItems} size="lg" onItemChange={fn()} />
            </div>
        </div>
    ),
};

export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Icon Type</h3>
                <Accordion
                    items={sampleItems.map(item => ({ ...item, itemType: 'icon' as const }))}
                    onItemChange={fn()}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Number Type</h3>
                <Accordion items={numberedItems} onItemChange={fn()} />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Question Type</h3>
                <Accordion items={questionItems} onItemChange={fn()} />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Plain Type (None)</h3>
                <Accordion items={plainItems} onItemChange={fn()} />
            </div>
        </div>
    ),
};


















