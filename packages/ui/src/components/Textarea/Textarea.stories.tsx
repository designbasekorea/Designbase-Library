import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        characterCountPosition: {
            control: { type: 'select' },
            options: ['top', 'bottom'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: '설명',
        placeholder: '내용을 입력하세요...',
        rows: 4,
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Small</h3>
                <Textarea
                    size="s"
                    label="작은 크기"
                    placeholder="작은 텍스트 영역입니다..."
                    rows={3}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Medium (기본)</h3>
                <Textarea
                    size="m"
                    label="중간 크기"
                    placeholder="중간 크기의 텍스트 영역입니다..."
                    rows={4}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Large</h3>
                <Textarea
                    size="l"
                    label="큰 크기"
                    placeholder="큰 텍스트 영역입니다..."
                    rows={5}
                />
            </div>
        </div>
    ),
};

export const WithCharacterCount: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>하단 글자 수 표시</h3>
                <Textarea
                    label="자기소개"
                    placeholder="자기소개를 작성해주세요..."
                    maxLength={200}
                    showCharacterCount={true}
                    characterCountPosition="bottom"
                    helperText="200자 이내로 작성해주세요."
                    rows={4}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>상단 글자 수 표시</h3>
                <Textarea
                    label="메모"
                    placeholder="메모를 작성해주세요..."
                    maxLength={100}
                    showCharacterCount={true}
                    characterCountPosition="top"
                    rows={3}
                />
            </div>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>에러 상태</h3>
                <Textarea
                    label="에러가 있는 텍스트 영역"
                    placeholder="에러 상태입니다..."
                    error={true}
                    errorMessage="필수 입력 항목입니다."
                    rows={3}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>비활성화</h3>
                <Textarea
                    label="비활성화된 텍스트 영역"
                    placeholder="비활성화 상태입니다..."
                    disabled={true}
                    defaultValue="이 텍스트는 수정할 수 없습니다."
                    rows={3}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>읽기 전용</h3>
                <Textarea
                    label="읽기 전용 텍스트 영역"
                    placeholder="읽기 전용 상태입니다..."
                    readOnly={true}
                    defaultValue="이 텍스트는 읽기 전용입니다."
                    rows={3}
                />
            </div>
        </div>
    ),
};

export const WithHelperText: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <Textarea
                label="피드백"
                placeholder="서비스에 대한 피드백을 작성해주세요..."
                helperText="건설적인 의견을 부탁드립니다."
                rows={4}
            />

            <Textarea
                label="요청사항"
                placeholder="요청사항을 작성해주세요..."
                helperText="구체적으로 작성해주시면 더 정확한 답변을 드릴 수 있습니다."
                required={true}
                rows={4}
            />
        </div>
    ),
};

export const ResizableOptions: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>리사이즈 가능 (기본)</h3>
                <Textarea
                    label="리사이즈 가능한 텍스트 영역"
                    placeholder="크기를 조절할 수 있습니다..."
                    resizable={true}
                    rows={4}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>리사이즈 불가능</h3>
                <Textarea
                    label="고정 크기 텍스트 영역"
                    placeholder="크기를 조절할 수 없습니다..."
                    resizable={false}
                    rows={4}
                />
            </div>
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div style={{ width: '100%', maxWidth: '800px' }}>
            <Textarea
                label="전체 너비 텍스트 영역"
                placeholder="전체 너비를 사용하는 텍스트 영역입니다..."
                fullWidth={true}
                rows={4}
            />
        </div>
    ),
};

export const ControlledComponent: Story = {
    render: () => {
        const [value, setValue] = React.useState('');
        const [error, setError] = React.useState(false);

        const handleChange = (newValue: string) => {
            setValue(newValue);
            setError(newValue.length > 100);
        };

        return (
            <div style={{ maxWidth: '600px' }}>
                <Textarea
                    label="제어된 컴포넌트"
                    placeholder="100자를 초과하면 에러가 발생합니다..."
                    value={value}
                    onChange={handleChange}
                    error={error}
                    errorMessage={error ? "100자를 초과했습니다." : ""}
                    showCharacterCount={true}
                    maxLength={100}
                    rows={4}
                />
            </div>
        );
    },
};
