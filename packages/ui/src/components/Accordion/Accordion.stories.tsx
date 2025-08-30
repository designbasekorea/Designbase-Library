import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Accordion } from './Accordion';
import {
    BulbIcon,
    AwardIcon,
    BellActiveIcon,
    CloudCloseIcon,
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
        content: '사용자의 기본 정보를 확인하고 수정할 수 있습니다. 이름, 이메일, 전화번호 등의 정보가 포함됩니다.',
        icon: UserIcon,
    },
    {
        id: '2',
        title: '설정',
        content: '계정 설정, 알림 설정, 보안 설정 등을 관리할 수 있습니다. 다양한 옵션을 통해 개인화된 경험을 제공합니다.',
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
        content: '이것은 첫 번째 단계에 대한 설명입니다. 순서대로 진행하시면 됩니다.',
        itemType: 'number' as const,
    },
    {
        id: '2',
        title: '두 번째 단계',
        content: '이것은 두 번째 단계에 대한 설명입니다. 첫 번째 단계를 완료한 후 진행하세요.',
        itemType: 'number' as const,
    },
    {
        id: '3',
        title: '세 번째 단계',
        content: '이것은 세 번째 단계에 대한 설명입니다. 마지막 단계입니다.',
        itemType: 'number' as const,
    },
];

const questionItems = [
    {
        id: '1',
        title: '서비스 이용 방법은 어떻게 되나요?',
        content: '서비스 이용 방법에 대한 자세한 설명입니다. 단계별로 안내해드립니다.',
        itemType: 'question' as const,
    },
    {
        id: '2',
        title: '결제는 언제 이루어지나요?',
        content: '결제 시점과 방법에 대한 안내입니다. 매월 1일에 자동으로 결제됩니다.',
        itemType: 'question' as const,
    },
    {
        id: '3',
        title: '환불 정책은 어떻게 되나요?',
        content: '환불 정책에 대한 자세한 안내입니다. 30일 이내에 환불이 가능합니다.',
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
        content: '이것도 접두사 없이 표시됩니다. 깔끔한 디자인을 원할 때 사용하세요.',
        itemType: 'none' as const,
    },
    {
        id: '3',
        title: '마지막 제목',
        content: '마지막 아이템입니다. 접두사 없이 깔끔하게 표시됩니다.',
        itemType: 'none' as const,
    },
];

const statusItems = [
    {
        id: 'success',
        title: '성공 알림',
        content: '작업이 성공적으로 완료되었습니다. 모든 데이터가 정상적으로 저장되었습니다.',
        icon: AwardIcon,
    },
    {
        id: 'warning',
        title: '경고 메시지',
        content: '주의가 필요한 상황입니다. 설정을 확인하고 필요한 조치를 취해주세요.',
        icon: BellActiveIcon,
    },
    {
        id: 'error',
        title: '오류 발생',
        content: '처리 중 오류가 발생했습니다. 다시 시도하거나 관리자에게 문의해주세요.',
        icon: CloudCloseIcon,
    },
    {
        id: 'info',
        title: '정보',
        content: '새로운 기능이 추가되었습니다. 업데이트 내용을 확인해보세요.',
        icon: BulbIcon,
    },
];

export const Default: Story = {
    args: {
        items: sampleItems,
        onItemChange: fn(),
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

export const MultipleExpansion: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Single Expansion (Default)</h3>
                <Accordion items={sampleItems} allowMultiple={false} onItemChange={fn()} />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Multiple Expansion</h3>
                <Accordion
                    items={sampleItems}
                    allowMultiple={true}
                    defaultExpandedItems={['2']}
                    onItemChange={fn()}
                />
            </div>
        </div>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <div style={{ maxWidth: '600px' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>아이콘이 있는 아코디언</h3>
            <Accordion items={statusItems} onItemChange={fn()} />
        </div>
    ),
};

export const DisabledItems: Story = {
    render: () => (
        <div style={{ maxWidth: '600px' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>비활성화된 아이템</h3>
            <Accordion
                items={[
                    ...sampleItems,
                    {
                        id: '4',
                        title: '비활성화된 섹션',
                        content: '이 섹션은 현재 사용할 수 없습니다.',
                        icon: CloudCloseIcon,
                        disabled: true,
                    }
                ]}
                onItemChange={fn()}
            />
        </div>
    ),
};

export const NumberedItems: Story = {
    render: () => (
        <div style={{ maxWidth: '600px' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>숫자 타입 아코디언</h3>
            <Accordion items={numberedItems} onItemChange={fn()} />
        </div>
    ),
};

export const QuestionItems: Story = {
    render: () => (
        <div style={{ maxWidth: '600px' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>질문 타입 아코디언</h3>
            <Accordion items={questionItems} onItemChange={fn()} />
        </div>
    ),
};

export const PlainItems: Story = {
    render: () => (
        <div style={{ maxWidth: '600px' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>접두사 없는 아코디언</h3>
            <Accordion items={plainItems} onItemChange={fn()} />
        </div>
    ),
};

export const MixedItemTypes: Story = {
    render: () => (
        <div style={{ maxWidth: '600px' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>혼합 타입 아코디언</h3>
            <Accordion
                items={[
                    {
                        id: '1',
                        title: '아이콘이 있는 항목',
                        content: '이 항목은 아이콘과 함께 표시됩니다.',
                        icon: UserIcon,
                        itemType: 'icon',
                    },
                    {
                        id: '2',
                        title: '숫자가 있는 항목',
                        content: '이 항목은 숫자와 함께 표시됩니다.',
                        itemType: 'number',
                    },
                    {
                        id: '3',
                        title: '질문 형태의 항목',
                        content: '이 항목은 Q.와 함께 표시됩니다.',
                        itemType: 'question',
                    },
                    {
                        id: '4',
                        title: '깔끔한 항목',
                        content: '이 항목은 아무런 접두사 없이 표시됩니다.',
                        itemType: 'none',
                    },
                ]}
                onItemChange={fn()}
            />
        </div>
    ),
};

export const ComplexContent: Story = {
    render: () => (
        <div style={{ maxWidth: '600px' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>복잡한 콘텐츠</h3>
            <Accordion
                items={[
                    {
                        id: 'complex',
                        title: '복잡한 콘텐츠 예제',
                        content: (
                            <div>
                                <p style={{ margin: '0 0 16px 0' }}>
                                    이 아코디언은 복잡한 HTML 콘텐츠를 포함합니다.
                                </p>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '16px',
                                    marginBottom: '16px'
                                }}>
                                    <div style={{
                                        padding: '12px',
                                        backgroundColor: '#f3f4f6',
                                        borderRadius: '6px',
                                        textAlign: 'center'
                                    }}>
                                        <strong>항목 1</strong>
                                        <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>설명 텍스트</p>
                                    </div>
                                    <div style={{
                                        padding: '12px',
                                        backgroundColor: '#f3f4f6',
                                        borderRadius: '6px',
                                        textAlign: 'center'
                                    }}>
                                        <strong>항목 2</strong>
                                        <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>설명 텍스트</p>
                                    </div>
                                </div>
                                <div style={{
                                    padding: '12px',
                                    backgroundColor: '#eff6ff',
                                    border: '1px solid #3b82f6',
                                    borderRadius: '6px',
                                    fontSize: '14px'
                                }}>
                                    <strong>참고:</strong> 이 섹션은 다양한 HTML 요소를 포함할 수 있습니다.
                                </div>
                            </div>
                        ),
                        icon: BulbIcon,
                    }
                ]}
                onItemChange={fn()}
            />
        </div>
    ),
};
