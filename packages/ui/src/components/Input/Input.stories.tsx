import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';
import { SearchIcon } from '@designbasekorea/icons';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['text', 'email', 'password', 'url', 'search', 'tel', 'number'],
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        disabled: {
            control: { type: 'boolean' },
        },
        readOnly: {
            control: { type: 'boolean' },
        },
        required: {
            control: { type: 'boolean' },
        },
        error: {
            control: { type: 'boolean' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: '이메일',
        placeholder: '이메일을 입력하세요',
        type: 'email',
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input size="s" label="Small" placeholder="Small input" />
            <Input size="m" label="Medium" placeholder="Medium input" />
            <Input size="l" label="Large" placeholder="Large input" />
        </div>
    ),
};

export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input type="text" label="텍스트" placeholder="텍스트를 입력하세요" />
            <Input type="email" label="이메일" placeholder="이메일을 입력하세요" />
            <Input type="password" label="비밀번호" placeholder="비밀번호를 입력하세요" />
            <Input type="search" label="검색" placeholder="검색어를 입력하세요" />
        </div>
    ),
};

export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input label="기본 상태" placeholder="기본 입력 필드" />
            <Input label="필수 필드" placeholder="필수 입력 필드" required />
            <Input label="에러 상태" placeholder="에러가 있는 입력 필드" error errorMessage="이 필드는 필수입니다" />
            <Input label="비활성화" placeholder="비활성화된 입력 필드" disabled />
            <Input label="읽기 전용" placeholder="읽기 전용 입력 필드" readOnly value="읽기 전용 값" />
        </div>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input
                label="검색 (자동 아이콘)"
                placeholder="검색어를 입력하세요"
                type="search"
            />
            <Input
                label="비밀번호 (토글 기능)"
                placeholder="비밀번호를 입력하세요"
                type="password"
            />
        </div>
    ),
};

export const WithHelperText: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input
                label="사용자명"
                placeholder="사용자명을 입력하세요"
                helperText="영문, 숫자, 언더스코어만 사용 가능합니다"
            />
            <Input
                label="비밀번호"
                placeholder="비밀번호를 입력하세요"
                type="password"
                helperText="8자 이상, 영문, 숫자, 특수문자를 포함해야 합니다"
            />
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [value, setValue] = useState('');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Input
                    label="상호작용 가능한 입력"
                    placeholder="값을 입력해보세요"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Input
                    label="비밀번호 토글 테스트"
                    placeholder="비밀번호를 입력하세요"
                    type="password"
                />
                <div style={{ marginTop: '16px' }}>
                    <p>입력된 값: {value || '없음'}</p>
                </div>
            </div>
        );
    },
};
