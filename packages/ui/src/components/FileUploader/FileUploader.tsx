/**
 * FileUploader 컴포넌트 (완성본)
 */
import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import { ClockIcon, DoneIcon, ErrorIcon, FileBlankIcon } from '@designbasekorea/icons';
import Dropzone from '../Dropzone/Dropzone';
import Spinner from '../Spinner/Spinner';
import Progressbar from '../Progressbar/Progressbar';
import './FileUploader.scss';

export type FileUploaderSize = 's' | 'm' | 'l';
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
    size?: FileUploaderSize;
    variant?: FileUploaderVariant;
    accept?: string;
    maxSize?: number;
    multiple?: boolean;
    showFileList?: boolean;
    showProgress?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onUpload?: (files: UploadFile[]) => void;
    onRemove?: (fileId: string) => void;
    onRetry?: (fileId: string) => void;
    className?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
    size = 'm',
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

    // ────────────────────────────────────────────────
    // 업로드 시뮬레이션 (먼저 정의해야 함!)
    // ────────────────────────────────────────────────
    const simulateUpload = useCallback((files: UploadFile[]) => {
        setIsUploading(true);

        files.forEach((uploadFile, index) => {
            // 업로드 시작
            setUploadedFiles(prev =>
                prev.map(f =>
                    f.id === uploadFile.id ? { ...f, status: 'uploading' } : f
                )
            );

            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 20;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);

                    // 완료 처리
                    setTimeout(() => {
                        setUploadedFiles(prev =>
                            prev.map(f =>
                                f.id === uploadFile.id
                                    ? {
                                        ...f,
                                        status: 'success',
                                        progress: 100,
                                        uploadedAt: new Date(),
                                    }
                                    : f
                            )
                        );

                        // 모든 업로드 완료 확인
                        setTimeout(() => {
                            setUploadedFiles(prev => {
                                const allDone = prev.every(f => f.status === 'success');
                                if (allDone) setIsUploading(false);
                                return prev;
                            });
                        }, 300);
                    }, 200);
                } else {
                    setUploadedFiles(prev =>
                        prev.map(f =>
                            f.id === uploadFile.id ? { ...f, progress } : f
                        )
                    );
                }
            }, 100 + index * 50);
        });
    }, []);

    // ────────────────────────────────────────────────
    // 파일 선택 시 처리
    // ────────────────────────────────────────────────
    const handleFileSelect = useCallback(
        (files: File[]) => {
            if (disabled || readonly) return;

            const newUploadFiles: UploadFile[] = files.map(file => ({
                file,
                id: `${Date.now()}-${Math.random()}`,
                status: 'pending',
                progress: 0,
            }));

            if (multiple) {
                setUploadedFiles(prev => [...prev, ...newUploadFiles]);
            } else {
                setUploadedFiles(newUploadFiles);
            }

            // ✅ 부모 콜백 즉시 실행 (파일 업로드 감지용)
            onUpload?.(newUploadFiles);

            // 진행률 애니메이션
            simulateUpload(newUploadFiles);
        },
        [disabled, readonly, multiple, onUpload, simulateUpload]
    );

    // 파일 제거
    const handleRemove = useCallback(
        (fileId: string) => {
            if (disabled || readonly) return;
            setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
            onRemove?.(fileId);
        },
        [disabled, readonly, onRemove]
    );

    // 재시도
    const handleRetry = useCallback(
        (fileId: string) => {
            if (disabled || readonly) return;
            const file = uploadedFiles.find(f => f.id === fileId);
            if (file) simulateUpload([file]);
            onRetry?.(fileId);
        },
        [disabled, readonly, uploadedFiles, simulateUpload, onRetry]
    );

    // 파일 크기 표시
    const formatFileSize = useCallback((bytes: number) => {
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
                return <FileBlankIcon size={20} />;
            case 'uploading':
                return <Spinner type="circular" size="s" />;
            case 'success':
                return <DoneIcon size={20} />;
            case 'error':
                return <ErrorIcon size={20} />;
            default:
                return null;
        }
    }, []);

    // ────────────────────────────────────────────────
    // 렌더링
    // ────────────────────────────────────────────────
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

            {showFileList && uploadedFiles.length > 0 && (
                <div className="designbase-file-uploader__file-list">
                    <div className="designbase-file-uploader__file-list-title">
                        업로드된 파일들 ({uploadedFiles.length}개)
                    </div>

                    <div className="designbase-file-uploader__file-items">
                        {uploadedFiles.map(uploadFile => (
                            <div
                                key={uploadFile.id}
                                className={clsx(
                                    'designbase-file-uploader__file-item',
                                    `designbase-file-uploader__file-item--${uploadFile.status}`
                                )}
                            >
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

                                {showProgress && uploadFile.status === 'uploading' && (
                                    <div className="designbase-file-uploader__progress">
                                        <Progressbar
                                            value={uploadFile.progress || 0}
                                            size="s"
                                            variant="primary"
                                            style="solid"
                                            showLabel={true}
                                            labelPosition="inside"
                                            fullWidth={true}
                                        />
                                    </div>
                                )}

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
