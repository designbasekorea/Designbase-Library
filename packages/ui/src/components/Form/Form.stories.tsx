/**
 * Form 컴포넌트 스토리
 * 
 * 목적: Form 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: 다양한 필드 타입, 레이아웃, 검증, 실시간 피드백
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Form, FormField } from './Form';

const meta: Meta<typeof Form> = {
    title: 'Components/Form',
    component: Form,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        layout: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal', 'inline'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'bordered', 'filled'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 폼
export const Default: Story = {
    render: () => {
        const [loading, setLoading] = useState(false);

        const fields: FormField[] = [
            {
                name: 'name',
                type: 'text',
                label: '이름',
                placeholder: '이름을 입력하세요',
                required: true,
                validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                },
                helpText: '2-20자 사이로 입력해주세요',
            },
            {
                name: 'email',
                type: 'email',
                label: '이메일',
                placeholder: '이메일을 입력하세요',
                required: true,
                validation: {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
                errorMessage: '올바른 이메일 형식으로 입력해주세요',
            },
            {
                name: 'age',
                type: 'number',
                label: '나이',
                placeholder: '나이를 입력하세요',
                validation: {
                    min: 1,
                    max: 120,
                },
                helpText: '1-120 사이의 숫자를 입력해주세요',
            },
        ];

        const handleSubmit = (values: Record<string, any>) => {
            setLoading(true);
            console.log('폼 제출:', values);

            // 시뮬레이션된 API 호출
            setTimeout(() => {
                setLoading(false);
                alert('폼이 성공적으로 제출되었습니다!');
            }, 2000);
        };

        return (
            <Form
                fields={fields}
                title="기본 폼"
                description="기본적인 폼 예제입니다. 다양한 검증 규칙을 포함합니다."
                onSubmit={handleSubmit}
                submitLoading={loading}
                showReset={true}
            />
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
                name: 'tel',
                type: 'tel',
                label: '전화번호',
                placeholder: '전화번호를 입력하세요',
            },
            {
                name: 'url',
                type: 'url',
                label: 'URL',
                placeholder: 'URL을 입력하세요',
            },
            {
                name: 'search',
                type: 'search',
                label: '검색',
                placeholder: '검색어를 입력하세요',
            },
            {
                name: 'date',
                type: 'date',
                label: '날짜',
            },
            {
                name: 'time',
                type: 'time',
                label: '시간',
            },
            {
                name: 'datetime',
                type: 'datetime-local',
                label: '날짜 및 시간',
            },
            {
                name: 'textarea',
                type: 'textarea',
                label: '텍스트 영역',
                placeholder: '긴 텍스트를 입력하세요',
                maxLength: 500,
                helpText: '최대 500자까지 입력 가능합니다',
            },
            {
                name: 'select',
                type: 'select',
                label: '선택',
                options: [
                    { label: '옵션 1', value: 'option1' },
                    { label: '옵션 2', value: 'option2' },
                    { label: '옵션 3', value: 'option3' },
                ],
            },
            {
                name: 'multiselect',
                type: 'select',
                label: '다중 선택',
                multiple: true,
                options: [
                    { label: '옵션 A', value: 'a' },
                    { label: '옵션 B', value: 'b' },
                    { label: '옵션 C', value: 'c' },
                    { label: '옵션 D', value: 'd' },
                ],
            },
            {
                name: 'radio',
                type: 'radio',
                label: '라디오 버튼',
                radioGroup: true,
                options: [
                    { label: '라디오 1', value: 'radio1' },
                    { label: '라디오 2', value: 'radio2' },
                    { label: '라디오 3', value: 'radio3' },
                ],
            },
            {
                name: 'checkbox',
                type: 'checkbox',
                label: '체크박스',
                checkboxGroup: true,
                options: [
                    { label: '체크박스 1', value: 'check1' },
                    { label: '체크박스 2', value: 'check2' },
                    { label: '체크박스 3', value: 'check3' },
                ],
            },
            {
                name: 'singleCheckbox',
                type: 'checkbox',
                label: '단일 체크박스',
            },
            {
                name: 'file',
                type: 'file',
                label: '파일 업로드',
                fileUpload: {
                    accept: '.jpg,.jpeg,.png,.pdf',
                    multiple: true,
                    maxSize: 5 * 1024 * 1024, // 5MB
                },
                helpText: 'JPG, PNG, PDF 파일만 업로드 가능 (최대 5MB)',
            },
        ];

        return (
            <Form
                fields={fields}
                title="다양한 필드 타입"
                description="모든 필드 타입을 보여주는 예제입니다."
                onSubmit={(values) => console.log('폼 제출:', values)}
                showReset={true}
            />
        );
    },
};

// 레이아웃별 폼
export const Layouts: Story = {
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                    <h3>수직 레이아웃 (기본)</h3>
                    <Form
                        fields={fields}
                        layout="vertical"
                        onSubmit={(values) => console.log('수직 폼:', values)}
                        showReset={true}
                    />
                </div>

                <div>
                    <h3>수평 레이아웃</h3>
                    <Form
                        fields={fields}
                        layout="horizontal"
                        onSubmit={(values) => console.log('수평 폼:', values)}
                        showReset={true}
                    />
                </div>

                <div>
                    <h3>인라인 레이아웃</h3>
                    <Form
                        fields={fields}
                        layout="inline"
                        onSubmit={(values) => console.log('인라인 폼:', values)}
                        showReset={true}
                    />
                </div>
            </div>
        );
    },
};

// 크기별 폼
export const Sizes: Story = {
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                    <h3>Small 크기</h3>
                    <Form
                        fields={fields}
                        size="sm"
                        onSubmit={(values) => console.log('Small 폼:', values)}
                        showReset={true}
                    />
                </div>

                <div>
                    <h3>Medium 크기 (기본)</h3>
                    <Form
                        fields={fields}
                        size="md"
                        onSubmit={(values) => console.log('Medium 폼:', values)}
                        showReset={true}
                    />
                </div>

                <div>
                    <h3>Large 크기</h3>
                    <Form
                        fields={fields}
                        size="lg"
                        onSubmit={(values) => console.log('Large 폼:', values)}
                        showReset={true}
                    />
                </div>
            </div>
        );
    },
};

// 변형별 폼
export const Variants: Story = {
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                    <h3>기본 변형 (Default)</h3>
                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <Form
                            fields={fields}
                            variant="default"
                            onSubmit={(values) => console.log('기본 폼:', values)}
                            showReset={true}
                        />
                    </div>
                </div>

                <div>
                    <h3>테두리 변형 (Bordered)</h3>
                    <Form
                        fields={fields}
                        variant="bordered"
                        onSubmit={(values) => console.log('테두리 폼:', values)}
                        showReset={true}
                    />
                </div>

                <div>
                    <h3>채워진 변형 (Filled)</h3>
                    <Form
                        fields={fields}
                        variant="filled"
                        onSubmit={(values) => console.log('채워진 폼:', values)}
                        showReset={true}
                    />
                </div>
            </div>
        );
    },
};

// 검증 예제
export const Validation: Story = {
    render: () => {
        const fields: FormField[] = [
            {
                name: 'username',
                type: 'text',
                label: '사용자명',
                placeholder: '사용자명을 입력하세요',
                required: true,
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                    pattern: /^[a-zA-Z0-9_]+$/,
                },
                errorMessage: '사용자명은 3-20자의 영문, 숫자, 언더스코어만 사용 가능합니다',
                helpText: '3-20자의 영문, 숫자, 언더스코어(_)만 사용 가능합니다',
            },
            {
                name: 'password',
                type: 'password',
                label: '비밀번호',
                placeholder: '비밀번호를 입력하세요',
                required: true,
                validation: {
                    required: true,
                    minLength: 8,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                },
                errorMessage: '비밀번호는 8자 이상이며, 소문자, 대문자, 숫자, 특수문자를 포함해야 합니다',
                helpText: '8자 이상, 소문자, 대문자, 숫자, 특수문자 포함',
            },
            {
                name: 'confirmPassword',
                type: 'password',
                label: '비밀번호 확인',
                placeholder: '비밀번호를 다시 입력하세요',
                required: true,
                validation: {
                    required: true,
                    custom: (value) => {
                        const password = document.querySelector('input[name="password"]') as HTMLInputElement;
                        if (password && value !== password.value) {
                            return '비밀번호가 일치하지 않습니다';
                        }
                        return undefined;
                    },
                },
            },
            {
                name: 'age',
                type: 'number',
                label: '나이',
                placeholder: '나이를 입력하세요',
                validation: {
                    min: 13,
                    max: 100,
                },
                errorMessage: '나이는 13-100세 사이여야 합니다',
                helpText: '13-100세 사이의 숫자를 입력해주세요',
            },
            {
                name: 'website',
                type: 'url',
                label: '웹사이트',
                placeholder: 'https://example.com',
                validation: {
                    pattern: /^https?:\/\/.+/,
                },
                errorMessage: '올바른 URL 형식으로 입력해주세요 (http:// 또는 https:// 포함)',
                helpText: 'http:// 또는 https://로 시작하는 URL을 입력해주세요',
            },
        ];

        return (
            <Form
                fields={fields}
                title="검증 예제"
                description="다양한 검증 규칙을 포함한 폼 예제입니다. 실시간으로 검증이 이루어집니다."
                onSubmit={(values) => {
                    console.log('검증된 폼 제출:', values);
                    alert('모든 검증을 통과했습니다!');
                }}
                showReset={true}
            />
        );
    },
};

// 커스텀 렌더러
export const CustomRenderer: Story = {
    render: () => {
        const fields: FormField[] = [
            {
                name: 'name',
                type: 'text',
                label: '이름',
                placeholder: '이름을 입력하세요',
            },
            {
                name: 'color',
                type: 'text',
                label: '색상 선택',
                render: (props) => (
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <input
                            type="color"
                            value={props.value || '#000000'}
                            onChange={(e) => props.onChange(e.target.value)}
                            style={{ width: '50px', height: '40px', border: 'none', borderRadius: '4px' }}
                        />
                        <input
                            type="text"
                            value={props.value || '#000000'}
                            onChange={(e) => props.onChange(e.target.value)}
                            placeholder="#000000"
                            style={{
                                flex: 1,
                                padding: '8px 12px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                            }}
                        />
                    </div>
                ),
            },
            {
                name: 'rating',
                type: 'number',
                label: '평점',
                render: (props) => (
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => props.onChange(star)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    color: star <= (props.value || 0) ? '#ffc107' : '#ccc',
                                }}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                ),
            },
        ];

        return (
            <Form
                fields={fields}
                title="커스텀 렌더러"
                description="커스텀 렌더러를 사용한 폼 예제입니다."
                onSubmit={(values) => console.log('커스텀 폼:', values)}
                showReset={true}
            />
        );
    },
};

// 복합 예제
export const ComplexExample: Story = {
    render: () => {
        const [loading, setLoading] = useState(false);

        const fields: FormField[] = [
            {
                name: 'firstName',
                type: 'text',
                label: '이름',
                placeholder: '이름을 입력하세요',
                required: true,
                validation: { required: true, minLength: 2 },
            },
            {
                name: 'lastName',
                type: 'text',
                label: '성',
                placeholder: '성을 입력하세요',
                required: true,
                validation: { required: true, minLength: 2 },
            },
            {
                name: 'email',
                type: 'email',
                label: '이메일',
                placeholder: '이메일을 입력하세요',
                required: true,
                validation: {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
            },
            {
                name: 'phone',
                type: 'tel',
                label: '전화번호',
                placeholder: '전화번호를 입력하세요',
                validation: {
                    pattern: /^[0-9-+\s()]+$/,
                },
                helpText: '숫자, 하이픈(-), 공백, 괄호만 입력 가능합니다',
            },
            {
                name: 'birthDate',
                type: 'date',
                label: '생년월일',
                required: true,
                validation: {
                    required: true,
                    custom: (value) => {
                        if (value) {
                            const age = new Date().getFullYear() - new Date(value).getFullYear();
                            if (age < 13) {
                                return '13세 이상만 가입 가능합니다';
                            }
                        }
                        return undefined;
                    },
                },
            },
            {
                name: 'gender',
                type: 'radio',
                label: '성별',
                radioGroup: true,
                options: [
                    { label: '남성', value: 'male' },
                    { label: '여성', value: 'female' },
                    { label: '기타', value: 'other' },
                ],
            },
            {
                name: 'interests',
                type: 'checkbox',
                label: '관심사',
                checkboxGroup: true,
                options: [
                    { label: '기술', value: 'tech' },
                    { label: '예술', value: 'art' },
                    { label: '스포츠', value: 'sports' },
                    { label: '음악', value: 'music' },
                    { label: '여행', value: 'travel' },
                ],
            },
            {
                name: 'country',
                type: 'select',
                label: '국가',
                options: [
                    { label: '대한민국', value: 'kr' },
                    { label: '미국', value: 'us' },
                    { label: '일본', value: 'jp' },
                    { label: '중국', value: 'cn' },
                    { label: '영국', value: 'uk' },
                ],
            },
            {
                name: 'bio',
                type: 'textarea',
                label: '자기소개',
                placeholder: '자기소개를 입력하세요',
                maxLength: 500,
                helpText: '최대 500자까지 입력 가능합니다',
            },
            {
                name: 'avatar',
                type: 'file',
                label: '프로필 사진',
                fileUpload: {
                    accept: '.jpg,.jpeg,.png',
                    multiple: false,
                    maxSize: 2 * 1024 * 1024, // 2MB
                },
                helpText: 'JPG, PNG 파일만 업로드 가능 (최대 2MB)',
            },
            {
                name: 'terms',
                type: 'checkbox',
                label: '이용약관에 동의합니다',
                required: true,
                validation: {
                    required: true,
                    custom: (value) => {
                        if (!value) {
                            return '이용약관에 동의해야 합니다';
                        }
                        return undefined;
                    },
                },
            },
        ];

        const handleSubmit = (values: Record<string, any>) => {
            setLoading(true);
            console.log('복합 폼 제출:', values);

            // 시뮬레이션된 API 호출
            setTimeout(() => {
                setLoading(false);
                alert('회원가입이 완료되었습니다!');
            }, 3000);
        };

        return (
            <Form
                fields={fields}
                title="회원가입"
                description="실제 회원가입 폼과 유사한 복합 예제입니다."
                layout="vertical"
                variant="bordered"
                size="md"
                onSubmit={handleSubmit}
                submitText="회원가입"
                submitLoading={loading}
                showReset={true}
                resetText="초기화"
            />
        );
    },
};
