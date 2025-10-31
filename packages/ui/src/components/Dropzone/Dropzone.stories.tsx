import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DownloadIcon, GalleryIcon, FileBlankIcon } from '@designbasekorea/icons';
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
            options: ['s', 'm', 'l'],
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
        size: 'm',
        variant: 'default',
        title: '파일을 여기에 드래그하세요',
        description: '또는 클릭하여 파일을 선택하세요',
    },
};

// 모든 사이즈 (s, m, l)
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Small (s)</h4>
                <Dropzone
                    size="s"
                    title="작은 드롭존"
                    description="파일을 드래그하세요"
                    icon={<DownloadIcon size={32} />}
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Medium (m) - 기본값</h4>
                <Dropzone
                    size="m"
                    title="중간 드롭존"
                    description="파일을 드래그하거나 클릭하세요"
                    icon={<DownloadIcon size={48} />}
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Large (l)</h4>
                <Dropzone
                    size="l"
                    title="큰 드롭존"
                    description="파일을 드래그하거나 클릭하여 업로드하세요"
                    icon={<DownloadIcon size={64} />}
                />
            </div>
        </div>
    ),
};

// 모든 상태 (기본, 비활성화, 읽기전용)
export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>기본 상태</h4>
                <Dropzone
                    title="파일을 드래그하세요"
                    description="클릭하여 파일 선택"
                    icon={<DownloadIcon size={48} />}
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>비활성화 상태</h4>
                <Dropzone
                    disabled
                    title="비활성화된 드롭존"
                    description="현재 사용할 수 없습니다"
                    icon={<DownloadIcon size={48} />}
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>읽기 전용 상태</h4>
                <Dropzone
                    readonly
                    title="읽기 전용 드롭존"
                    description="현재 편집할 수 없습니다"
                    icon={<DownloadIcon size={48} />}
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>버튼 포함</h4>
                <Dropzone
                    title="파일 업로드"
                    description="드래그 또는 버튼 클릭"
                    showButton
                    buttonText="파일 선택"
                    icon={<DownloadIcon size={48} />}
                />
            </div>
        </div>
    ),
};

// 모든 Variants (default, outlined, filled)
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Default</h4>
                <Dropzone
                    variant="default"
                    title="기본 스타일"
                    description="기본 배경색"
                    icon={<DownloadIcon size={48} />}
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Outlined</h4>
                <Dropzone
                    variant="outlined"
                    title="아웃라인 스타일"
                    description="투명 배경"
                    icon={<DownloadIcon size={48} />}
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Filled</h4>
                <Dropzone
                    variant="filled"
                    title="채워진 스타일"
                    description="연한 배경색"
                    icon={<DownloadIcon size={48} />}
                />
            </div>
        </div>
    ),
};

// 파일 타입별 예시
export const FileTypeExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>이미지 업로드</h4>
                <Dropzone
                    title="이미지를 업로드하세요"
                    description="JPG, PNG, GIF 파일 지원"
                    accept="image/*"
                    showButton
                    buttonText="이미지 선택"
                    icon={<GalleryIcon size={48} />}
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>문서 업로드</h4>
                <Dropzone
                    title="문서를 업로드하세요"
                    description="PDF, DOC, DOCX 파일 지원"
                    accept=".pdf,.doc,.docx"
                    showButton
                    buttonText="문서 선택"
                    icon={<FileBlankIcon size={48} />}
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>모든 파일</h4>
                <Dropzone
                    title="파일 업로드"
                    description="모든 파일 형식 지원"
                    showButton
                    buttonText="파일 선택"
                    icon={<DownloadIcon size={48} />}
                />
            </div>
        </div>
    ),
};
