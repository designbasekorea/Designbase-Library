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
            options: ['s', 'm', 'l'],
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
        size: 'm',
        variant: 'default',
        multiple: true,
    },
};

// 모든 사이즈 (s, m, l)
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Small (s)</h4>
                <FileUploader size="s" multiple={true} />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Medium (m) - 기본값</h4>
                <FileUploader size="m" multiple={true} />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Large (l)</h4>
                <FileUploader size="l" multiple={true} />
            </div>
        </div>
    ),
};

// 모든 Variants (default, outlined, filled)
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Default</h4>
                <FileUploader variant="default" multiple={true} />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Outlined</h4>
                <FileUploader variant="outlined" multiple={true} />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Filled</h4>
                <FileUploader variant="filled" multiple={true} />
            </div>
        </div>
    ),
};

// 모든 상태 (기본, 비활성화, 읽기전용)
export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>기본 상태</h4>
                <FileUploader multiple={true} />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>비활성화</h4>
                <FileUploader disabled={true} multiple={true} />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>읽기 전용</h4>
                <FileUploader readonly={true} multiple={true} />
            </div>
        </div>
    ),
};

// 사용 예시 - 파일 타입별
export const UsageExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>이미지 업로더</h4>
                <FileUploader
                    accept="image/*"
                    maxSize={5 * 1024 * 1024}
                    multiple={true}
                />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>문서 업로더</h4>
                <FileUploader
                    accept=".pdf,.doc,.docx,.txt"
                    maxSize={10 * 1024 * 1024}
                    multiple={true}
                />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>비디오 업로더 (단일)</h4>
                <FileUploader
                    accept="video/*"
                    maxSize={100 * 1024 * 1024}
                    multiple={false}
                />
            </div>
        </div>
    ),
};
