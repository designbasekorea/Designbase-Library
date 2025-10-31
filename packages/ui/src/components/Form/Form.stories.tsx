import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormField } from './Form';

const meta: Meta<typeof Form> = {
    title: 'Components/Form',
    component: Form,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        columns: {
            control: { type: 'select' },
            options: [1, 2],
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'bordered', 'filled'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const fields: FormField[] = [
            {
                name: 'name',
                type: 'text',
                label: '이름',
                placeholder: '이름을 입력하세요',
                required: true,
            },
            {
                name: 'email',
                type: 'email',
                label: '이메일',
                placeholder: '이메일을 입력하세요',
                required: true,
            },
            {
                name: 'message',
                type: 'textarea',
                label: '메시지',
                placeholder: '메시지를 입력하세요',
            },
        ];

        return (
            <Form
                fields={fields}
                title="기본 폼"
                description="간단한 폼 예제입니다."
                onSubmit={(values) => console.log('제출:', values)}
                showReset={true}
            />
        );
    },
};

// 모든 사이즈 (s, m, l)
export const AllSizes: Story = {
    render: () => {
        const fields: FormField[] = [
            {
                name: 'name',
                type: 'text',
                label: '이름',
                placeholder: '이름을 입력하세요',
            },
            {
                name: 'email',
                type: 'email',
                label: '이메일',
                placeholder: '이메일을 입력하세요',
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                    <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '600' }}>Small (s)</h4>
                    <Form
                        fields={fields}
                        size="s"
                        onSubmit={(values) => console.log('제출:', values)}
                    />
                </div>

                <div>
                    <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '600' }}>Medium (m) - 기본값</h4>
                    <Form
                        fields={fields}
                        size="m"
                        onSubmit={(values) => console.log('제출:', values)}
                    />
                </div>

                <div>
                    <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '600' }}>Large (l)</h4>
                    <Form
                        fields={fields}
                        size="l"
                        onSubmit={(values) => console.log('제출:', values)}
                    />
                </div>
            </div>
        );
    },
};

// 컬럼 레이아웃 (1단, 2단)
export const AllColumns: Story = {
    render: () => {
        const fields: FormField[] = [
            {
                name: 'firstName',
                type: 'text',
                label: '이름',
                placeholder: '이름을 입력하세요',
            },
            {
                name: 'lastName',
                type: 'text',
                label: '성',
                placeholder: '성을 입력하세요',
            },
            {
                name: 'email',
                type: 'email',
                label: '이메일',
                placeholder: '이메일을 입력하세요',
            },
            {
                name: 'phone',
                type: 'tel',
                label: '전화번호',
                placeholder: '전화번호를 입력하세요',
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                    <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '600' }}>1단 레이아웃 (기본)</h4>
                    <Form
                        fields={fields}
                        columns={1}
                        onSubmit={(values) => console.log('1단:', values)}
                    />
                </div>

                <div>
                    <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '600' }}>2단 레이아웃</h4>
                    <Form
                        fields={fields}
                        columns={2}
                        onSubmit={(values) => console.log('2단:', values)}
                    />
                </div>
            </div>
        );
    },
};

// 모든 Variants (default, bordered, filled)
export const AllVariants: Story = {
    render: () => {
        const fields: FormField[] = [
            {
                name: 'name',
                type: 'text',
                label: '이름',
                placeholder: '이름을 입력하세요',
            },
            {
                name: 'email',
                type: 'email',
                label: '이메일',
                placeholder: '이메일을 입력하세요',
            },
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                    <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '600' }}>Default (패딩/배경/보더 없음)</h4>
                    <div style={{ padding: '20px', backgroundColor: 'var(--db-surface-layer-1)', borderRadius: '8px' }}>
                        <Form
                            fields={fields}
                            variant="default"
                            onSubmit={(values) => console.log('기본:', values)}
                        />
                    </div>
                </div>

                <div>
                    <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '600' }}>Bordered (보더 + 배경 + 패딩 + 그림자)</h4>
                    <Form
                        fields={fields}
                        variant="bordered"
                        onSubmit={(values) => console.log('보더:', values)}
                    />
                </div>

                <div>
                    <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '600' }}>Filled (배경 + 패딩만)</h4>
                    <Form
                        fields={fields}
                        variant="filled"
                        onSubmit={(values) => console.log('채움:', values)}
                    />
                </div>
            </div>
        );
    },
};

// 다양한 필드 타입
export const FieldTypes: Story = {
    render: () => {
        const fields: FormField[] = [
            {
                name: 'text',
                type: 'text',
                label: '텍스트',
                placeholder: '텍스트를 입력하세요',
            },
            {
                name: 'email',
                type: 'email',
                label: '이메일',
                placeholder: '이메일을 입력하세요',
            },
            {
                name: 'password',
                type: 'password',
                label: '비밀번호',
                placeholder: '비밀번호를 입력하세요',
            },
            {
                name: 'number',
                type: 'number',
                label: '숫자',
                placeholder: '숫자를 입력하세요',
            },
            {
                name: 'date',
                type: 'date',
                label: '날짜 선택 (DatePicker)',
                helpText: 'DatePicker 컴포넌트를 사용합니다',
            },
            {
                name: 'color',
                type: 'color',
                label: '색상 선택 (ColorPicker)',
                helpText: 'ColorPicker 컴포넌트를 사용합니다',
            },
            {
                name: 'time',
                type: 'timepicker',
                label: '시간 선택 (TimePicker)',
                helpText: 'TimePicker 컴포넌트를 사용합니다',
            },
            {
                name: 'textarea',
                type: 'textarea',
                label: '텍스트 영역',
                placeholder: '긴 텍스트를 입력하세요',
            },
            {
                name: 'select',
                type: 'select',
                label: '선택',
                options: [
                    { label: '옵션 1', value: '1' },
                    { label: '옵션 2', value: '2' },
                    { label: '옵션 3', value: '3' },
                ],
            },
            {
                name: 'radio',
                type: 'radio',
                label: '라디오 버튼',
                radioGroup: true,
                options: [
                    { label: '라디오 1', value: 'r1' },
                    { label: '라디오 2', value: 'r2' },
                ],
            },
            {
                name: 'checkbox',
                type: 'checkbox',
                label: '체크박스',
                checkboxGroup: true,
                options: [
                    { label: '체크 1', value: 'c1' },
                    { label: '체크 2', value: 'c2' },
                ],
            },
            {
                name: 'file',
                type: 'file',
                label: '파일 업로드 (FileUploader)',
                fileUpload: {
                    accept: 'image/*',
                    multiple: true,
                    maxSize: 5 * 1024 * 1024,
                },
                helpText: 'FileUploader 컴포넌트를 사용합니다',
            },
        ];

        return (
            <Form
                fields={fields}
                variant="bordered"
                title="모든 필드 타입"
                description="ColorPicker, DatePicker, TimePicker, FileUploader를 포함한 모든 필드 타입"
                onSubmit={(values) => console.log('제출:', values)}
                showReset={true}
            />
        );
    },
};

// 2단 레이아웃 + 모든 필드 타입
export const TwoColumnsWithAllTypes: Story = {
    render: () => {
        const fields: FormField[] = [
            {
                name: 'firstName',
                type: 'text',
                label: '이름',
                placeholder: '이름',
                required: true,
            },
            {
                name: 'lastName',
                type: 'text',
                label: '성',
                placeholder: '성',
                required: true,
            },
            {
                name: 'email',
                type: 'email',
                label: '이메일',
                placeholder: '이메일',
                required: true,
            },
            {
                name: 'phone',
                type: 'tel',
                label: '전화번호',
                placeholder: '전화번호',
            },
            {
                name: 'birthDate',
                type: 'date',
                label: '생년월일',
            },
            {
                name: 'favoriteColor',
                type: 'color',
                label: '좋아하는 색상',
            },
            {
                name: 'meetingTime',
                type: 'timepicker',
                label: '희망 미팅 시간',
            },
            {
                name: 'file',
                type: 'file',
                label: '프로필 사진',
                fileUpload: {
                    accept: 'image/*',
                    multiple: false,
                    maxSize: 2 * 1024 * 1024,
                },
            },
        ];

        return (
            <Form
                fields={fields}
                columns={2}
                variant="bordered"
                title="회원가입 폼"
                description="2단 레이아웃으로 ColorPicker, DatePicker, TimePicker, FileUploader를 포함합니다"
                onSubmit={(values) => console.log('제출:', values)}
                showReset={true}
            />
        );
    },
};

