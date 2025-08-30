/**
 * FileUploader 컴포넌트
 * 
 * Dropzone을 활용한 파일 업로드 컴포넌트입니다.
 * 파일 목록, 진행률, 상태 등을 표시합니다.
 */

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import { Dropzone } from '../Dropzone/Dropzone';
import { Button } from '../Button/Button';
import { Progress } from '../Progress/Progress';
import './FileUploader.scss';

export type FileUploaderSize = 'sm' | 'md' | 'lg' | 'xl';
export type FileUploaderVariant = 'default' | 'outlined' | 'filled';
export type FileStatus = 'pending' | 'uploading' | 'completed' | 'error';

export interface UploadFile {
    /** 파일 ID */
    id: string;
    /** 파일 객체 */
    file: File;
    /** 파일 상태 */
    status: FileStatus;
    /** 업로드 진행률 (0-100) */
    progress?: number;
    /** 에러 메시지 */
    error?: string;
    /** 업로드된 URL */
    url?: string;
}

export interface FileUploaderProps {
    /** 파일 업로더 크기 */
    size?: FileUploaderSize;
    /** 파일 업로더 스타일 변형 */
    variant?: FileUploaderVariant;
    /** 드롭존 제목 */
    title?: string;
    /** 드롭존 설명 */
    description?: string;
    /** 허용된 파일 타입 */
    accept?: string;
    /** 최대 파일 크기 (bytes) */
    maxSize?: number;
    /** 다중 파일 선택 허용 */
    multiple?: boolean;
    /** 최대 파일 개수 */
    maxFiles?: number;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 파일 목록 표시 */
    showFileList?: boolean;
    /** 진행률 표시 */
    showProgress?: boolean;
    /** 파일 업로드 핸들러 */
    onUpload?: (files: UploadFile[]) => Promise<void>;
    /** 파일 제거 핸들러 */
    onRemove?: (fileId: string) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
    size = 'md',
    variant = 'default',
    title = '파일을 드래그하거나 클릭하여 업로드하세요',
    description = '지원되는 파일 형식: 모든 파일',
    accept,
    maxSize,
    multiple = false,
    maxFiles,
    disabled = false,
    showFileList = true,
    showProgress = true,
    onUpload,
    onRemove,
    className,
}) => {
    const [files, setFiles] = useState<UploadFile[]>([]);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileSelect = useCallback((selectedFiles: File[]) => {
        if (disabled || isUploading) return;

        const newFiles: UploadFile[] = selectedFiles.map(file => ({
            id: `${Date.now()}-${Math.random()}`,
            file,
            status: 'pending' as FileStatus,
        }));

        if (maxFiles && files.length + newFiles.length > maxFiles) {
            alert(`최대 ${maxFiles}개의 파일만 업로드할 수 있습니다.`);
            return;
        }

        const updatedFiles = multiple ? [...files, ...newFiles] : newFiles;
        setFiles(updatedFiles);

        // 자동 업로드
        if (onUpload) {
            handleUpload(updatedFiles);
        }
    }, [disabled, isUploading, files, multiple, maxFiles, onUpload]);

    const handleUpload = useCallback(async (uploadFiles: UploadFile[]) => {
        if (!onUpload) return;

        setIsUploading(true);

        try {
            // 업로드 중 상태로 변경
            const uploadingFiles = uploadFiles.map(file => ({
                ...file,
                status: 'uploading' as FileStatus,
                progress: 0,
            }));
            setFiles(uploadingFiles);

            // 시뮬레이션된 진행률 업데이트
            const progressInterval = setInterval(() => {
                setFiles(prev => prev.map(file => {
                    if (file.status === 'uploading' && file.progress !== undefined && file.progress < 90) {
                        return {
                            ...file,
                            progress: file.progress + Math.random() * 10,
                        };
                    }
                    return file;
                }));
            }, 200);

            // 실제 업로드 실행
            await onUpload(uploadingFiles);

            clearInterval(progressInterval);

            // 완료 상태로 변경
            setFiles(prev => prev.map(file => ({
                ...file,
                status: 'completed' as FileStatus,
                progress: 100,
            })));

        } catch (error) {
            // 에러 상태로 변경
            setFiles(prev => prev.map(file => ({
                ...file,
                status: 'error' as FileStatus,
                error: error instanceof Error ? error.message : '업로드 실패',
            })));
        } finally {
            setIsUploading(false);
        }
    }, [onUpload]);

    const handleRemove = useCallback((fileId: string) => {
        setFiles(prev => prev.filter(file => file.id !== fileId));
        onRemove?.(fileId);
    }, [onRemove]);

    const handleRetry = useCallback((fileId: string) => {
        const fileToRetry = files.find(file => file.id === fileId);
        if (fileToRetry) {
            handleUpload([fileToRetry]);
        }
    }, [files, handleUpload]);

    const classes = clsx(
        'designbase-file-uploader',
        `designbase-file-uploader--size-${size}`,
        `designbase-file-uploader--variant-${variant}`,
        {
            'designbase-file-uploader--disabled': disabled,
        },
        className
    );

    const getStatusIcon = (status: FileStatus) => {
        switch (status) {
            case 'completed':
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                );
            case 'error':
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                );
            case 'uploading':
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 11-6.219-8.56" />
                    </svg>
                );
            default:
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                );
        }
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className={classes}>
            <Dropzone
                size={size}
                variant={variant}
                title={title}
                description={description}
                accept={accept}
                maxSize={maxSize}
                multiple={multiple}
                disabled={disabled || isUploading}
                onFileSelect={handleFileSelect}
            />

            {showFileList && files.length > 0 && (
                <div className="designbase-file-uploader__file-list">
                    <h4 className="designbase-file-uploader__file-list-title">
                        업로드된 파일 ({files.length})
                    </h4>

                    {files.map(file => (
                        <div key={file.id} className="designbase-file-uploader__file-item">
                            <div className="designbase-file-uploader__file-info">
                                <div className="designbase-file-uploader__file-icon">
                                    {getStatusIcon(file.status)}
                                </div>

                                <div className="designbase-file-uploader__file-details">
                                    <span className="designbase-file-uploader__file-name">
                                        {file.file.name}
                                    </span>
                                    <span className="designbase-file-uploader__file-size">
                                        {formatFileSize(file.file.size)}
                                    </span>
                                    {file.error && (
                                        <span className="designbase-file-uploader__file-error">
                                            {file.error}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="designbase-file-uploader__file-actions">
                                {showProgress && file.status === 'uploading' && file.progress !== undefined && (
                                    <Progress value={file.progress} size="sm" />
                                )}

                                {file.status === 'error' && (
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        onClick={() => handleRetry(file.id)}
                                    >
                                        재시도
                                    </Button>
                                )}

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleRemove(file.id)}
                                >
                                    삭제
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FileUploader;
