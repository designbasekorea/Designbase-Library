import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';

const meta = {
    title: 'Components/Label',
    component: Label,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Label 컴포넌트는 폼 요소에 연결되는 라벨입니다. Input, Textarea 등과 함께 사용할 수 있습니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: '라벨 텍스트',
        },
        htmlFor: {
            control: 'text',
            description: 'input/textarea와 연결할 ID',
        },
        required: {
            control: 'boolean',
            description: '필수 필드 표시',
        },
        size: {
            control: 'select',
            options: ['s', 'm', 'l'],
            description: '라벨 크기',
        },
        disabled: {
            control: 'boolean',
            description: '비활성화 상태',
        },
        error: {
            control: 'boolean',
            description: '에러 상태',
        },
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '이름',
        size: 'm',
    },
};

export const AllSizes: Story = {
    args: { children: '' },
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Label size="s">S 크기 라벨</Label>
            <Label size="m">M 크기 라벨 (기본)</Label>
            <Label size="l">L 크기 라벨</Label>
        </div>
    ),
};

export const AllStates: Story = {
    args: { children: '' },
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Label>기본 라벨</Label>
            <Label required>필수 라벨</Label>
            <Label error>에러 라벨</Label>
            <Label disabled>비활성화 라벨</Label>
            <Label error required>에러 + 필수</Label>
        </div>
    ),
};

export const WithInput: Story = {
    args: { children: '' },
    render: () => (
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <Label htmlFor="username" required>
                    사용자 이름
                </Label>
                <Input
                    id="username"
                    placeholder="이름을 입력하세요"
                    size="m"
                />
            </div>
            <div>
                <Label htmlFor="email" error required>
                    이메일
                </Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    error
                    size="m"
                />
            </div>
            <div>
                <Label htmlFor="password" required>
                    비밀번호
                </Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    size="m"
                />
            </div>
        </div>
    ),
};

export const FormExample: Story = {
    args: { children: '' },
    render: () => (
        <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <Label htmlFor="name" required size="m">
                    이름
                </Label>
                <Input
                    id="name"
                    placeholder="홍길동"
                    size="m"
                />
            </div>

            <div>
                <Label htmlFor="email" required size="m">
                    이메일
                </Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    size="m"
                />
            </div>

            <div>
                <Label htmlFor="phone" size="m">
                    전화번호 (선택)
                </Label>
                <Input
                    id="phone"
                    type="tel"
                    placeholder="010-1234-5678"
                    size="m"
                />
            </div>

            <div>
                <Label htmlFor="bio" size="m">
                    자기소개
                </Label>
                <Textarea
                    id="bio"
                    placeholder="자기소개를 입력하세요"
                    rows={4}
                />
            </div>
        </div>
    ),
};

