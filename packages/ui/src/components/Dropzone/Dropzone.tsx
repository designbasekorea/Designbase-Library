/**
 * Dropzone 컴포넌트
 * 
 * 파일 드래그 앤 드롭을 위한 컴포넌트입니다.
 * 파일 업로드 UI를 제공합니다.
 */

import React, { useState, useRef, useCallback } from 'react';
import clsx from 'clsx';
import { DownloadIcon } from '@designbasekorea/icons';
import './Dropzone.scss';

// 타입 정의
export type DropzoneSize = 's' | 'm' | 'l';
export type DropzoneVariant = 'default' | 'outlined' | 'filled';

export interface DropzoneProps {
    /** 드롭존 크기 */
    size?: DropzoneSize;
    /** 드롭존 스타일 변형 */
    variant?: DropzoneVariant;
    /** 아이콘 표시 여부 */
    showIcon?: boolean;
    /** 커스텀 아이콘 */
    icon?: React.ReactNode;
    /** 그래픽 이미지 URL */
    image?: string;
    /** 메인 텍스트 */
    title?: string;
    /** 서브 텍스트 */
    description?: string;
    /** 버튼 텍스트 */
    buttonText?: string;
    /** 버튼 표시 여부 */
    showButton?: boolean;
    /** 허용할 파일 타입 */
    accept?: string;
    /** 최대 파일 크기 (bytes) */
    maxSize?: number;
    /** 다중 파일 선택 허용 */
    multiple?: boolean;
    /** 드래그 오버 상태 */
    isDragOver?: boolean;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 읽기 전용 상태 */
    readonly?: boolean;
    /** 파일 선택 핸들러 */
    onFileSelect?: (files: File[]) => void;
    /** 드래그 오버 핸들러 */
    onDragOver?: (event: React.DragEvent) => void;
    /** 드래그 리브 핸들러 */
    onDragLeave?: (event: React.DragEvent) => void;
    /** 드롭 핸들러 */
    onDrop?: (event: React.DragEvent) => void;
    /** 클릭 핸들러 */
    onClick?: (event: React.MouseEvent) => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 자식 요소 */
    children?: React.ReactNode;
}

const Dropzone: React.FC<DropzoneProps> = ({
    size = 'm',
    variant = 'default',
    showIcon = true,
    icon,
    image,
    title = '파일을 드래그하여 업로드하거나 클릭하여 선택하세요',
    description,
    buttonText = '파일 선택',
    showButton = false,
    accept,
    maxSize,
    multiple = false,
    isDragOver: controlledIsDragOver,
    disabled = false,
    readonly = false,
    onFileSelect,
    onDragOver,
    onDragLeave,
    onDrop,
    onClick,
    className,
    children,
}) => {
    const [internalIsDragOver, setInternalIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // 드래그 오버 상태 관리
    const isDragOver = controlledIsDragOver !== undefined ? controlledIsDragOver : internalIsDragOver;

    // 파일 유효성 검사
    const validateFile = useCallback((file: File): boolean => {
        // 파일 타입 검사
        if (accept) {
            const acceptedTypes = accept.split(',').map(type => type.trim());
            const fileType = file.type;
            const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;

            const isValidType = acceptedTypes.some(type => {
                if (type.startsWith('.')) {
                    return fileExtension === type.toLowerCase();
                }
                return fileType === type || fileType.startsWith(type.replace('*', ''));
            });

            if (!isValidType) return false;
        }

        // 파일 크기 검사
        if (maxSize && file.size > maxSize) return false;

        return true;
    }, [accept, maxSize]);

    // 파일 선택 처리
    const handleFileSelect = useCallback((files: FileList | null) => {
        if (!files || files.length === 0) return;

        const fileArray = Array.from(files);
        const validFiles = fileArray.filter(validateFile);

        if (validFiles.length > 0) {
            onFileSelect?.(validFiles);
        }
    }, [validateFile, onFileSelect]);

    // 드래그 오버 핸들러
    const handleDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (disabled || readonly) return;

        setInternalIsDragOver(true);
        onDragOver?.(event);
    }, [disabled, readonly, onDragOver]);

    // 드래그 리브 핸들러
    const handleDragLeave = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (disabled || readonly) return;

        setInternalIsDragOver(false);
        onDragLeave?.(event);
    }, [disabled, readonly, onDragLeave]);

    // 드롭 핸들러
    const handleDrop = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (disabled || readonly) return;

        setInternalIsDragOver(false);
        const files = event.dataTransfer.files;
        handleFileSelect(files);
        onDrop?.(event);
    }, [disabled, readonly, handleFileSelect, onDrop]);

    // 클릭 핸들러
    const handleClick = useCallback((event: React.MouseEvent) => {
        if (disabled || readonly) return;

        fileInputRef.current?.click();
        onClick?.(event);
    }, [disabled, readonly, onClick]);

    // 파일 입력 변경 핸들러
    const handleFileInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        handleFileSelect(files);

        // 입력값 초기화 (같은 파일 재선택 가능하도록)
        event.target.value = '';
    }, [handleFileSelect]);

    // 기본 아이콘
    const defaultIcon = <DownloadIcon size={48} />;

    // 서브 텍스트 생성
    const getDescription = useCallback((): string => {
        if (description) return description;

        if (accept) {
            const types = accept.split(',').map(type => {
                const trimmed = type.trim();
                if (trimmed.startsWith('.')) {
                    return trimmed.toUpperCase();
                }
                if (trimmed.includes('*')) {
                    return trimmed.replace('*', '').toUpperCase();
                }
                return trimmed;
            });

            let desc = types.join(', ');
            if (maxSize) {
                const k = 1024;
                const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                const i = Math.floor(Math.log(maxSize) / Math.log(k));
                const sizeText = parseFloat((maxSize / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
                desc += ` (최대 ${sizeText})`;
            }
            return desc;
        }

        return '모든 파일 형식 지원';
    }, [description, accept, maxSize]);

    return (
        <div
            className={clsx(
                'designbase-dropzone',
                `designbase-dropzone--size-${size}`,
                `designbase-dropzone--variant-${variant}`,
                {
                    'designbase-dropzone--drag-over': isDragOver,
                    'designbase-dropzone--disabled': disabled,
                    'designbase-dropzone--readonly': readonly,
                },
                className
            )}
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
                disabled={disabled || readonly}
                style={{ display: 'none' }}
            />

            {children || (
                <div className="designbase-dropzone__content">
                    {/* 그래픽 이미지 또는 아이콘 */}
                    {image ? (
                        <div className="designbase-dropzone__image">
                            <img src={image} alt="Upload illustration" />
                        </div>
                    ) : showIcon && (
                        <div className="designbase-dropzone__icon">
                            {icon || defaultIcon}
                        </div>
                    )}

                    {/* 메인 텍스트 */}
                    {title && (
                        <div className="designbase-dropzone__title">
                            {title}
                        </div>
                    )}

                    {/* 서브 텍스트 */}
                    {getDescription() && (
                        <div className="designbase-dropzone__description">
                            {getDescription()}
                        </div>
                    )}

                    {/* 버튼 */}
                    {showButton && (
                        <button
                            className="designbase-dropzone__button"
                            type="button"
                            disabled={disabled || readonly}
                        >
                            {buttonText}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dropzone;
