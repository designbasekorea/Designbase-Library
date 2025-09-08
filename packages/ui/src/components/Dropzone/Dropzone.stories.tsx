import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Dropzone from './Dropzone';

const meta: Meta<typeof Dropzone> = {
    title: 'Components/Dropzone',
    component: Dropzone,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'filled'],
        },
        showIcon: {
            control: { type: 'boolean' },
        },
        showButton: {
            control: { type: 'boolean' },
        },
        title: {
            control: { type: 'text' },
        },
        description: {
            control: { type: 'text' },
        },
        buttonText: {
            control: { type: 'text' },
        },
        accept: {
            control: { type: 'text' },
        },
        maxSize: {
            control: { type: 'number' },
        },
        multiple: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        readonly: {
            control: { type: 'boolean' },
        },
        onFileSelect: { action: 'file selected' },
        onDragOver: { action: 'drag over' },
        onDragLeave: { action: 'drag leave' },
        onDrop: { action: 'dropped' },
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'md',
        variant: 'default',
    },
};

export const Simple: Story = {
    args: {
        title: '파일을 여기에 드래그하세요',
        description: '또는 클릭하여 파일을 선택하세요',
        showIcon: false,
        showButton: true,
        buttonText: '파일 선택',
    },
};

export const WithCustomIcon: Story = {
    args: {
        title: '이미지를 업로드하세요',
        description: 'JPG, PNG, GIF 파일을 지원합니다',
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="16" cy="16" r="3" fill="currentColor" />
                <path d="M8 32L16 24L24 32L32 24L40 32V40H8V32Z" fill="currentColor" />
            </svg>
        ),
        accept: 'image/*',
    },
};

export const WithButton: Story = {
    args: {
        title: '문서를 업로드하세요',
        description: 'PDF, DOC, DOCX 파일을 지원합니다',
        showButton: true,
        buttonText: '문서 선택',
        accept: '.pdf,.doc,.docx',
    },
};

export const NoIcon: Story = {
    args: {
        title: '파일을 드래그하여 업로드하세요',
        description: '모든 파일 형식을 지원합니다',
        showIcon: false,
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>작은 크기</h3>
                <Dropzone size="sm" title="작은 드롭존" />
            </div>
            <div>
                <h3>중간 크기</h3>
                <Dropzone size="md" title="중간 드롭존" />
            </div>
            <div>
                <h3>큰 크기</h3>
                <Dropzone size="lg" title="큰 드롭존" />
            </div>
        </div>
    ),
};

export const DifferentVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>기본 스타일</h3>
                <Dropzone variant="default" title="기본 스타일" />
            </div>
            <div>
                <h3>아웃라인 스타일</h3>
                <Dropzone variant="outlined" title="아웃라인 스타일" />
            </div>
            <div>
                <h3>채워진 스타일</h3>
                <Dropzone variant="filled" title="채워진 스타일" />
            </div>
        </div>
    ),
};

export const FileTypeExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>이미지 업로드</h3>
                <Dropzone
                    title="이미지를 업로드하세요"
                    description="JPG, PNG, GIF 파일"
                    accept="image/*"
                    showButton={true}
                    buttonText="이미지 선택"
                />
            </div>
            <div>
                <h3>문서 업로드</h3>
                <Dropzone
                    title="문서를 업로드하세요"
                    description="PDF, DOC, DOCX 파일"
                    accept=".pdf,.doc,.docx"
                    showButton={true}
                    buttonText="문서 선택"
                />
            </div>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
        title: '비활성화된 드롭존',
        description: '현재 사용할 수 없습니다',
    },
};

export const Readonly: Story = {
    args: {
        readonly: true,
        title: '읽기 전용 드롭존',
        description: '현재 편집할 수 없습니다',
    },
};

export const CustomContent: Story = {
    render: () => (
        <Dropzone>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>📁</div>
                <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>
                    커스텀 콘텐츠
                </div>
                <div style={{ fontSize: '14px', color: '#6b7280' }}>
                    완전히 커스터마이징된 드롭존
                </div>
            </div>
        </Dropzone>
    ),
};

export const ResponsiveExample: Story = {
    render: () => (
        <div style={{ width: '100%', maxWidth: '600px' }}>
            <h3>반응형 Dropzone</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
                화면 크기에 따라 자동으로 크기가 조정됩니다.
            </p>
            <Dropzone
                size="lg"
                title="반응형 드롭존"
                description="모든 화면 크기에서 최적화된 경험"
                showButton={true}
                buttonText="파일 선택"
            />
        </div>
    ),
};
