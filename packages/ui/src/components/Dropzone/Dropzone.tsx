/**
 * Dropzone 컴포넌트
 * 
 * 파일 드래그 앤 드롭을 위한 컴포넌트입니다.
 * 파일 업로드 UI를 제공합니다.
 */

import React, { useState, useRef, useCallback } from 'react';
import clsx from 'clsx';
import './Dropzone.scss';

export type DropzoneSize = 'sm' | 'md' | 'lg' | 'xl';
export type DropzoneVariant = 'default' | 'outlined' | 'filled';

export interface DropzoneProps {
    /** 드롭존 크기 */
    size?: DropzoneSize;
    /** 드롭존 스타일 변형 */
    variant?: DropzoneVariant;
    /** 드롭존 제목 */
    title?: string;
    /** 드롭존 설명 */
    description?: string;
    /** 드롭존 아이콘 */
    icon?: React.ReactNode;
    /** 허용된 파일 타입 */
    accept?: string;
    /** 최대 파일 크기 (bytes) */
    maxSize?: number;
    /** 다중 파일 선택 허용 */
    multiple?: boolean;
    /** 드래그 오버 상태 */
    isDragOver?: boolean;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 파일 선택 핸들러 */
    onFileSelect?: (files: File[]) => void;
    /** 드래그 오버 핸들러 */
    onDragOver?: (isOver: boolean) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const Dropzone: React.FC<DropzoneProps> = ({
    size = 'md',
    variant = 'default',
    title = '파일을 드래그하거나 클릭하여 업로드하세요',
    description = '지원되는 파일 형식: 모든 파일',
    icon,
    accept,
    maxSize,
    multiple = false,
    isDragOver = false,
    disabled = false,
    onFileSelect,
    onDragOver,
    className,
}) => {
    const [internalDragOver, setInternalDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const dragOver = isDragOver || internalDragOver;

    const handleFileSelect = useCallback((files: FileList | null) => {
        if (!files || files.length === 0) return;

        const fileArray = Array.from(files);

        // 파일 타입 검증
        if (accept) {
            const acceptedTypes = accept.split(',').map(type => type.trim());
            const validFiles = fileArray.filter(file => {
                return acceptedTypes.some(type => {
                    if (type.startsWith('.')) {
                        return file.name.toLowerCase().endsWith(type.toLowerCase());
                    }
                    return file.type.match(new RegExp(type.replace('*', '.*')));
                });
            });

            if (validFiles.length !== fileArray.length) {
                alert('일부 파일이 지원되지 않는 형식입니다.');
                return;
            }
        }

        // 파일 크기 검증
        if (maxSize) {
            const validFiles = fileArray.filter(file => file.size <= maxSize);
            if (validFiles.length !== fileArray.length) {
                alert('일부 파일이 최대 크기를 초과했습니다.');
                return;
            }
        }

        onFileSelect?.(fileArray);
    }, [accept, maxSize, onFileSelect]);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        if (disabled) return;

        setInternalDragOver(true);
        onDragOver?.(true);
    }, [disabled, onDragOver]);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        if (disabled) return;

        setInternalDragOver(false);
        onDragOver?.(false);
    }, [disabled, onDragOver]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        if (disabled) return;

        setInternalDragOver(false);
        onDragOver?.(false);

        const files = e.dataTransfer.files;
        handleFileSelect(files);
    }, [disabled, onDragOver, handleFileSelect]);

    const handleClick = useCallback(() => {
        if (disabled) return;
        fileInputRef.current?.click();
    }, [disabled]);

    const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileSelect(e.target.files);
        // 같은 파일을 다시 선택할 수 있도록 초기화
        e.target.value = '';
    }, [handleFileSelect]);

    const classes = clsx(
        'designbase-dropzone',
        `designbase-dropzone--size-${size}`,
        `designbase-dropzone--variant-${variant}`,
        {
            'designbase-dropzone--drag-over': dragOver,
            'designbase-dropzone--disabled': disabled,
        },
        className
    );

    const defaultIcon = (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );

    return (
        <div
            className={classes}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
        >
            <input
                ref={fileInputRef}
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={handleFileInputChange}
                style={{ display: 'none' }}
                disabled={disabled}
            />

            <div className="designbase-dropzone__content">
                <div className="designbase-dropzone__icon">
                    {icon || defaultIcon}
                </div>

                <h3 className="designbase-dropzone__title">
                    {title}
                </h3>

                <p className="designbase-dropzone__description">
                    {description}
                </p>

                {maxSize && (
                    <p className="designbase-dropzone__size-limit">
                        최대 파일 크기: {(maxSize / 1024 / 1024).toFixed(1)}MB
                    </p>
                )}
            </div>
        </div>
    );
};

export default Dropzone;
