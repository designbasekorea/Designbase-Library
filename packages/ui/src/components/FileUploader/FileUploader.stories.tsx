import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import FileUploader from './FileUploader';

const meta: Meta<typeof FileUploader> = {
    title: 'Components/FileUploader',
    component: FileUploader,
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
        accept: {
            control: { type: 'text' },
        },
        maxSize: {
            control: { type: 'number' },
        },
        multiple: {
            control: { type: 'boolean' },
        },
        showFileList: {
            control: { type: 'boolean' },
        },
        showProgress: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        readonly: {
            control: { type: 'boolean' },
        },
        onUpload: { action: 'upload' },
        onRemove: { action: 'remove' },
        onRetry: { action: 'retry' },
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

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>작은 크기</h3>
                <FileUploader size="sm" />
            </div>
            <div>
                <h3>중간 크기</h3>
                <FileUploader size="md" />
            </div>
            <div>
                <h3>큰 크기</h3>
                <FileUploader size="lg" />
            </div>
        </div>
    ),
};

export const DifferentVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>기본 스타일</h3>
                <FileUploader variant="default" />
            </div>
            <div>
                <h3>아웃라인 스타일</h3>
                <FileUploader variant="outlined" />
            </div>
            <div>
                <h3>채워진 스타일</h3>
                <FileUploader variant="filled" />
            </div>
        </div>
    ),
};

export const WithFileTypeRestrictions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>이미지 파일만</h3>
                <FileUploader accept="image/*" />
            </div>
            <div>
                <h3>PDF 파일만</h3>
                <FileUploader accept=".pdf" />
            </div>
            <div>
                <h3>여러 파일 타입</h3>
                <FileUploader accept=".jpg,.png,.pdf,.doc,.docx" />
            </div>
        </div>
    ),
};

export const WithSizeLimits: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div>
                <h3>1MB 제한</h3>
                <FileUploader maxSize={1024 * 1024} />
            </div>
            <div>
                <h3>5MB 제한</h3>
                <FileUploader maxSize={5 * 1024 * 1024} />
            </div>
            <div>
                <h3>10MB 제한</h3>
                <FileUploader maxSize={10 * 1024 * 1024} />
            </div>
        </div>
    ),
};

export const MultipleFileSelection: Story = {
    args: {
        multiple: true,
        accept: "image/*",
        maxSize: 5 * 1024 * 1024,
    },
};

export const WithoutFileList: Story = {
    args: {
        showFileList: false,
    },
};

export const WithoutProgress: Story = {
    args: {
        showProgress: false,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Readonly: Story = {
    args: {
        readonly: true,
    },
};

export const ImageUploader: Story = {
    args: {
        accept: "image/*",
        maxSize: 5 * 1024 * 1024,
        multiple: true,
    },
};

export const DocumentUploader: Story = {
    args: {
        accept: ".pdf,.doc,.docx,.txt",
        maxSize: 10 * 1024 * 1024,
        multiple: true,
    },
};

export const VideoUploader: Story = {
    args: {
        accept: "video/*",
        maxSize: 100 * 1024 * 1024, // 100MB
        multiple: false,
    },
};

export const ResponsiveExample: Story = {
    render: () => (
        <div style={{ width: '100%', maxWidth: '800px' }}>
            <h3>반응형 FileUploader</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
                화면 크기에 따라 자동으로 크기가 조정됩니다.
            </p>
            <FileUploader 
                size="lg" 
                accept="image/*,.pdf,.doc,.docx" 
                maxSize={10 * 1024 * 1024}
                multiple={true}
            />
        </div>
    ),
};
