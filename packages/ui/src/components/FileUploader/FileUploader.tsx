/**
 * FileUploader 컴포넌트
 * 
 * Dropzone을 활용한 파일 업로드 컴포넌트입니다.
 * 파일 목록, 진행률, 상태 등을 표시합니다.
 */

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import Dropzone from '../Dropzone/Dropzone';
import Spinner from '../Spinner/Spinner';
import Progressbar from '../Progressbar/Progressbar';
import './FileUploader.scss';

// 타입 정의
export type FileUploaderSize = 'sm' | 'md' | 'lg';
export type FileUploaderVariant = 'default' | 'outlined' | 'filled';
export type FileStatus = 'pending' | 'uploading' | 'success' | 'error';

export interface UploadFile {
    file: File;
    id: string;
    status: FileStatus;
    progress?: number;
    error?: string;
    uploadedAt?: Date;
}

export interface FileUploaderProps {
    /** 파일 업로더 크기 */
    size?: FileUploaderSize;
    /** 파일 업로더 스타일 변형 */
    variant?: FileUploaderVariant;
    /** 허용할 파일 타입 */
    accept?: string;
    /** 최대 파일 크기 (bytes) */
    maxSize?: number;
    /** 다중 파일 선택 허용 */
    multiple?: boolean;
    /** 파일 목록 표시 여부 */
    showFileList?: boolean;
    /** 진행률 표시 여부 */
    showProgress?: boolean;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 읽기 전용 상태 */
    readonly?: boolean;
    /** 파일 업로드 핸들러 */
    onUpload?: (files: UploadFile[]) => void;
    /** 파일 제거 핸들러 */
    onRemove?: (fileId: string) => void;
    /** 파일 재시도 핸들러 */
    onRetry?: (fileId: string) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
    size = 'md',
    variant = 'default',
    accept,
    maxSize,
    multiple = false,
    showFileList = true,
    showProgress = true,
    disabled = false,
    readonly = false,
    onUpload,
    onRemove,
    onRetry,
    className,
}) => {
    const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);
    const [isUploading, setIsUploading] = useState(false);

    // 파일 선택 처리
    const handleFileSelect = useCallback((files: File[]) => {
        if (disabled || readonly) return;

        const newUploadFiles: UploadFile[] = files.map(file => ({
            file,
            id: `${Date.now()}-${Math.random()}`,
            status: 'pending' as FileStatus,
            progress: 0,
        }));

        if (multiple) {
            setUploadedFiles(prev => [...prev, ...newUploadFiles]);
        } else {
            setUploadedFiles(newUploadFiles);
        }

        // 시뮬레이션된 업로드 진행
        simulateUpload(newUploadFiles);
    }, [disabled, readonly, multiple]);

    // 업로드 시뮬레이션
    const simulateUpload = useCallback((files: UploadFile[]) => {
        setIsUploading(true);

        files.forEach((uploadFile, index) => {
            // 업로드 시작
            setUploadedFiles(prev =>
                prev.map(f =>
                    f.id === uploadFile.id
                        ? { ...f, status: 'uploading' as FileStatus }
                        : f
                )
            );

            // 진행률 시뮬레이션
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 20;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);

                    // 업로드 완료
                    setTimeout(() => {
                        setUploadedFiles(prev =>
                            prev.map(f =>
                                f.id === uploadFile.id
                                    ? {
                                        ...f,
                                        status: 'success' as FileStatus,
                                        progress: 100,
                                        uploadedAt: new Date()
                                    }
                                    : f
                            )
                        );

                        // 모든 파일 업로드 완료 확인
                        setTimeout(() => {
                            const allCompleted = uploadedFiles.every(f => f.status === 'success');
                            if (allCompleted) {
                                setIsUploading(false);
                            }
                        }, 500);
                    }, 200);
                } else {
                    setUploadedFiles(prev =>
                        prev.map(f =>
                            f.id === uploadFile.id
                                ? { ...f, progress }
                                : f
                        )
                    );
                }
            }, 100 + index * 50); // 각 파일마다 약간의 지연
        });
    }, [uploadedFiles]);

    // 파일 제거
    const handleRemove = useCallback((fileId: string) => {
        if (disabled || readonly) return;

        setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
        onRemove?.(fileId);
    }, [disabled, readonly, onRemove]);

    // 파일 재시도
    const handleRetry = useCallback((fileId: string) => {
        if (disabled || readonly) return;

        const file = uploadedFiles.find(f => f.id === fileId);
        if (file) {
            simulateUpload([file]);
        }
        onRetry?.(fileId);
    }, [disabled, readonly, uploadedFiles, simulateUpload, onRetry]);

    // 파일 크기 포맷팅
    const formatFileSize = useCallback((bytes: number): string => {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }, []);

    // 상태별 아이콘
    const getStatusIcon = useCallback((status: FileStatus) => {
        switch (status) {
            case 'pending':
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                );
            case 'uploading':
                return <Spinner type="circular" size="sm" />;
            case 'success':
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13 5L6 12L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                );
            case 'error':
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1L15 8L8 15L1 8L8 1Z" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 5V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="8" cy="12" r="1" fill="currentColor" />
                    </svg>
                );
            default:
                return null;
        }
    }, []);

    return (
        <div
            className={clsx(
                'designbase-file-uploader',
                `designbase-file-uploader--size-${size}`,
                `designbase-file-uploader--variant-${variant}`,
                {
                    'designbase-file-uploader--disabled': disabled,
                    'designbase-file-uploader--readonly': readonly,
                },
                className
            )}
        >
            {/* Dropzone */}
            <Dropzone
                size={size}
                variant={variant}
                accept={accept}
                maxSize={maxSize}
                multiple={multiple}
                disabled={disabled}
                readonly={readonly}
                onFileSelect={handleFileSelect}
            />

            {/* 파일 목록 */}
            {showFileList && uploadedFiles.length > 0 && (
                <div className="designbase-file-uploader__file-list">
                    <div className="designbase-file-uploader__file-list-title">
                        업로드된 파일들 ({uploadedFiles.length}개)
                    </div>

                    <div className="designbase-file-uploader__file-items">
                        {uploadedFiles.map((uploadFile) => (
                            <div
                                key={uploadFile.id}
                                className={clsx(
                                    'designbase-file-uploader__file-item',
                                    `designbase-file-uploader__file-item--${uploadFile.status}`
                                )}
                            >
                                {/* 파일 정보 */}
                                <div className="designbase-file-uploader__file-info">
                                    <div className="designbase-file-uploader__file-icon">
                                        {getStatusIcon(uploadFile.status)}
                                    </div>

                                    <div className="designbase-file-uploader__file-details">
                                        <div className="designbase-file-uploader__file-name">
                                            {uploadFile.file.name}
                                        </div>
                                        <div className="designbase-file-uploader__file-size">
                                            {formatFileSize(uploadFile.file.size)}
                                        </div>
                                        {uploadFile.error && (
                                            <div className="designbase-file-uploader__file-error">
                                                {uploadFile.error}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* 진행률 */}
                                {showProgress && uploadFile.status === 'uploading' && (
                                    <div className="designbase-file-uploader__progress">
                                        <Progressbar
                                            value={uploadFile.progress || 0}
                                            size="sm"
                                            variant="primary"
                                            style="solid"
                                            showLabel={true}
                                            labelPosition="inside"
                                            fullWidth={true}
                                        />
                                    </div>
                                )}

                                {/* 액션 버튼 */}
                                <div className="designbase-file-uploader__file-actions">
                                    {uploadFile.status === 'error' && (
                                        <button
                                            className="designbase-file-uploader__retry-button"
                                            onClick={() => handleRetry(uploadFile.id)}
                                            disabled={disabled || readonly}
                                            type="button"
                                        >
                                            재시도
                                        </button>
                                    )}

                                    <button
                                        className="designbase-file-uploader__remove-button"
                                        onClick={() => handleRemove(uploadFile.id)}
                                        disabled={disabled || readonly}
                                        type="button"
                                    >
                                        삭제
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUploader;
