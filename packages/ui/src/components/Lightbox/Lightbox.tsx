import React, { useState, useRef, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import {
    CloseIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    PlusIcon,
    MinusIcon,
    RefreshIcon,
    DownloadIcon,
    ExpandIcon,
    ShrinkIcon,
} from '@designbasekorea/icons';
import './Lightbox.scss';

// 타입 정의
export type LightboxSize = 's' | 'm' | 'l' | 'xl';

export interface LightboxImage {
    /** 이미지 ID */
    id: string;
    /** 이미지 URL */
    src: string;
    /** 이미지 대체 텍스트 */
    alt?: string;
    /** 이미지 제목 */
    title?: string;
    /** 이미지 설명 */
    description?: string;
    /** 썸네일 URL */
    thumbnail?: string;
    /** 이미지 너비 */
    width?: number;
    /** 이미지 높이 */
    height?: number;
}

export interface LightboxProps {
    /** 이미지 목록 */
    images: LightboxImage[];
    /** 현재 활성 이미지 인덱스 */
    currentIndex?: number;
    /** Lightbox 크기 */
    size?: LightboxSize;
    /** 열림 상태 */
    isOpen: boolean;
    /** 열림 상태 변경 핸들러 */
    onOpenChange: (isOpen: boolean) => void;
    /** 이미지 변경 핸들러 */
    onImageChange?: (index: number) => void;
    /** 줌 기능 활성화 */
    enableZoom?: boolean;
    /** 회전 기능 활성화 */
    enableRotate?: boolean;
    /** 다운로드 기능 활성화 */
    enableDownload?: boolean;
    /** 전체화면 기능 활성화 */
    enableFullscreen?: boolean;
    /** 키보드 네비게이션 활성화 */
    enableKeyboard?: boolean;
    /** 마우스 휠 줌 활성화 */
    enableWheelZoom?: boolean;
    /** 썸네일 표시 */
    showThumbnails?: boolean;
    /** 카운터 표시 */
    showCounter?: boolean;
    /** 닫기 버튼 표시 */
    showCloseButton?: boolean;
    /** 네비게이션 버튼 표시 */
    showNavigationButtons?: boolean;
    /** 툴바 표시 */
    showToolbar?: boolean;
    /** 배경 클릭 시 닫기 */
    closeOnBackdropClick?: boolean;
    /** ESC 키로 닫기 */
    closeOnEscape?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
}

const Lightbox: React.FC<LightboxProps> = ({
    images,
    currentIndex = 0,
    size = 'l',
    isOpen,
    onOpenChange,
    onImageChange,
    enableZoom = true,
    enableRotate = true,
    enableDownload = true,
    enableFullscreen = true,
    enableKeyboard = true,
    enableWheelZoom = true,
    showThumbnails = true,
    showCounter = true,
    showCloseButton = true,
    showNavigationButtons = true,
    showToolbar = true,
    closeOnBackdropClick = true,
    closeOnEscape = true,
    className,
}) => {
    const [internalCurrentIndex, setInternalCurrentIndex] = useState(currentIndex);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isImageError, setIsImageError] = useState(false);
    const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
    const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });

    const modalRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // 현재 이미지 동기화
    useEffect(() => {
        setInternalCurrentIndex(currentIndex);
    }, [currentIndex]);

    // 열림 상태 변경 시 리셋
    useEffect(() => {
        if (isOpen) {
            setZoomLevel(1);
            setRotation(0);
            setImagePosition({ x: 0, y: 0 });
            // 이미지 로딩 상태는 이미지 변경 시에만 초기화
        }
    }, [isOpen]);

    // 이미지 변경 핸들러
    const handleImageChange = useCallback((newIndex: number) => {
        if (newIndex >= 0 && newIndex < images.length) {
            setInternalCurrentIndex(newIndex);
            setZoomLevel(1);
            setRotation(0);
            setImagePosition({ x: 0, y: 0 });

            // 새 이미지가 현재 이미지와 다른 경우에만 로딩 상태 초기화
            const newImage = images[newIndex];
            const currentImage = images[internalCurrentIndex];
            if (newImage && currentImage && newImage.src !== currentImage.src) {
                setIsImageLoaded(false);
                setIsImageError(false);
            }

            onImageChange?.(newIndex);
        }
    }, [images, internalCurrentIndex, onImageChange]);

    // 이전 이미지로 이동
    const goToPrevious = useCallback(() => {
        const newIndex = internalCurrentIndex > 0 ? internalCurrentIndex - 1 : images.length - 1;
        handleImageChange(newIndex);
    }, [internalCurrentIndex, images.length, handleImageChange]);

    // 다음 이미지로 이동
    const goToNext = useCallback(() => {
        const newIndex = internalCurrentIndex < images.length - 1 ? internalCurrentIndex + 1 : 0;
        handleImageChange(newIndex);
    }, [internalCurrentIndex, images.length, handleImageChange]);

    // 닫기 핸들러
    const handleClose = useCallback(() => {
        onOpenChange(false);
    }, [onOpenChange]);

    // 줌 인
    const handleZoomIn = useCallback(() => {
        if (!enableZoom) return;
        setZoomLevel(prev => Math.min(prev * 1.5, 5));
    }, [enableZoom]);

    // 줌 아웃
    const handleZoomOut = useCallback(() => {
        if (!enableZoom) return;
        setZoomLevel(prev => Math.max(prev / 1.5, 0.1));
    }, [enableZoom]);

    // 줌 리셋
    const handleZoomReset = useCallback(() => {
        if (!enableZoom) return;
        setZoomLevel(1);
        setImagePosition({ x: 0, y: 0 });
    }, [enableZoom]);

    // 회전
    const handleRotate = useCallback(() => {
        if (!enableRotate) return;
        setRotation(prev => (prev + 90) % 360);
    }, [enableRotate]);

    // 다운로드
    const handleDownload = useCallback(() => {
        if (!enableDownload) return;
        const currentImage = images[internalCurrentIndex];
        if (currentImage) {
            // 이미지 URL에서 파일 확장자 추출
            const url = new URL(currentImage.src);
            const pathname = url.pathname;
            const extension = pathname.split('.').pop() || 'jpg';

            // 파일명 생성 (제목이 있으면 사용, 없으면 기본명)
            const fileName = currentImage.title
                ? `${currentImage.title}.${extension}`
                : `image-${internalCurrentIndex + 1}.${extension}`;

            // fetch를 사용하여 이미지를 blob으로 다운로드
            fetch(currentImage.src)
                .then(response => response.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                })
                .catch(error => {
                    console.error('이미지 다운로드 실패:', error);
                    // fallback: 직접 링크 방식
                    const link = document.createElement('a');
                    link.href = currentImage.src;
                    link.download = fileName;
                    link.target = '_blank';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
        }
    }, [enableDownload, images, internalCurrentIndex]);

    // 전체화면 토글
    const handleFullscreenToggle = useCallback(() => {
        if (!enableFullscreen) return;
        setIsFullscreen(prev => !prev);
    }, [enableFullscreen]);

    // 이미지 로드 핸들러
    const handleImageLoad = useCallback(() => {
        setIsImageLoaded(true);
        setIsImageError(false);
    }, []);

    // 이미지 에러 핸들러
    const handleImageError = useCallback(() => {
        setIsImageLoaded(false);
        setIsImageError(true);
    }, []);

    // 이미지 사전 로딩 (다음 이미지 미리 로드)
    useEffect(() => {
        if (isOpen && images.length > 1) {
            const nextIndex = (internalCurrentIndex + 1) % images.length;
            const nextImage = images[nextIndex];
            if (nextImage) {
                const img = new Image();
                img.src = nextImage.src;
            }
        }
    }, [isOpen, internalCurrentIndex, images]);

    // 마우스 휠 줌 핸들러
    const handleWheel = useCallback((event: React.WheelEvent) => {
        if (!enableWheelZoom) return;
        event.preventDefault();

        if (event.deltaY < 0) {
            handleZoomIn();
        } else {
            handleZoomOut();
        }
    }, [enableWheelZoom, handleZoomIn, handleZoomOut]);

    // 드래그 시작 핸들러
    const handleMouseDown = useCallback((event: React.MouseEvent) => {
        if (zoomLevel <= 1) return;
        event.preventDefault();
        setIsDragging(true);
        setDragStart({ x: event.clientX - imagePosition.x, y: event.clientY - imagePosition.y });
    }, [zoomLevel, imagePosition]);

    // 드래그 중 핸들러
    const handleMouseMove = useCallback((event: React.MouseEvent) => {
        if (!isDragging || zoomLevel <= 1) return;
        event.preventDefault();
        setImagePosition({
            x: event.clientX - dragStart.x,
            y: event.clientY - dragStart.y,
        });
    }, [isDragging, zoomLevel, dragStart]);

    // 드래그 종료 핸들러
    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    // 터치 시작 핸들러
    const handleTouchStart = useCallback((event: React.TouchEvent) => {
        const touch = event.touches[0];
        setTouchStart({ x: touch.clientX, y: touch.clientY });
    }, []);

    // 터치 종료 핸들러
    const handleTouchEnd = useCallback((event: React.TouchEvent) => {
        const touch = event.changedTouches[0];
        setTouchEnd({ x: touch.clientX, y: touch.clientY });
        handleSwipe();
    }, []);

    // 스와이프 처리
    const handleSwipe = useCallback(() => {
        const deltaX = touchStart.x - touchEnd.x;
        const deltaY = touchStart.y - touchEnd.y;
        const minSwipeDistance = 50;

        // 수평 스와이프가 수직 스와이프보다 크고, 최소 거리 이상일 때
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
                // 왼쪽으로 스와이프 - 다음 이미지
                goToNext();
            } else {
                // 오른쪽으로 스와이프 - 이전 이미지
                goToPrevious();
            }
        }
    }, [touchStart, touchEnd, goToNext, goToPrevious]);

    // 키보드 이벤트 핸들러
    useEffect(() => {
        if (!enableKeyboard || !isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'Escape':
                    if (closeOnEscape) {
                        handleClose();
                    }
                    break;
                case 'ArrowLeft':
                    goToPrevious();
                    break;
                case 'ArrowRight':
                    goToNext();
                    break;
                case '+':
                case '=':
                    handleZoomIn();
                    break;
                case '-':
                    handleZoomOut();
                    break;
                case '0':
                    handleZoomReset();
                    break;
                case 'r':
                    handleRotate();
                    break;
                case 'f':
                    handleFullscreenToggle();
                    break;
                case 'd':
                    handleDownload();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [
        enableKeyboard,
        isOpen,
        closeOnEscape,
        handleClose,
        goToPrevious,
        goToNext,
        handleZoomIn,
        handleZoomOut,
        handleZoomReset,
        handleRotate,
        handleFullscreenToggle,
        handleDownload,
    ]);

    // 외부 클릭 감지
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // 오버레이 자체를 클릭했을 때만 닫기 (모달 내부 클릭은 제외)
            const target = event.target as HTMLElement;
            if (target && target.classList.contains('designbase-lightbox__overlay')) {
                if (closeOnBackdropClick) {
                    handleClose();
                }
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, closeOnBackdropClick, handleClose]);

    // 현재 이미지
    const currentImage = images[internalCurrentIndex];

    if (!isOpen || !currentImage) return null;

    return (
        <div
            className={clsx(
                'designbase-lightbox',
                `designbase-lightbox--size-${size}`,
                {
                    'designbase-lightbox--fullscreen': isFullscreen,
                },
                className
            )}
        >
            {/* 오버레이 */}
            <div className="designbase-lightbox__overlay">
                {/* 모달 컨테이너 */}
                <div ref={modalRef} className="designbase-lightbox__modal">
                    {/* 헤더 */}
                    <div className="designbase-lightbox__header">
                        {/* 제목 */}
                        <div className="designbase-lightbox__title">
                            {currentImage.title && (
                                <h3 className="designbase-lightbox__title-text">
                                    {currentImage.title}
                                </h3>
                            )}
                            {showCounter && (
                                <span className="designbase-lightbox__counter">
                                    {internalCurrentIndex + 1} / {images.length}
                                </span>
                            )}
                        </div>

                        {/* 헤더 액션 버튼들 */}
                        <div className="designbase-lightbox__header-actions">
                            {showToolbar && (
                                <>
                                    {enableZoom && (
                                        <>
                                            <button
                                                className="designbase-lightbox__toolbar-button"
                                                onClick={handleZoomOut}
                                                title="줌 아웃"
                                                type="button"
                                            >
                                                <MinusIcon size={16} />
                                            </button>
                                            <button
                                                className="designbase-lightbox__toolbar-button"
                                                onClick={handleZoomReset}
                                                title="줌 리셋"
                                                type="button"
                                            >
                                                {Math.round(zoomLevel * 100)}%
                                            </button>
                                            <button
                                                className="designbase-lightbox__toolbar-button"
                                                onClick={handleZoomIn}
                                                title="줌 인"
                                                type="button"
                                            >
                                                <PlusIcon size={16} />
                                            </button>
                                        </>
                                    )}
                                    {enableRotate && (
                                        <button
                                            className="designbase-lightbox__toolbar-button"
                                            onClick={handleRotate}
                                            title="회전"
                                            type="button"
                                        >
                                            <RefreshIcon size={16} />
                                        </button>
                                    )}
                                    {enableDownload && (
                                        <button
                                            className="designbase-lightbox__toolbar-button"
                                            onClick={handleDownload}
                                            title="다운로드"
                                            type="button"
                                        >
                                            <DownloadIcon size={16} />
                                        </button>
                                    )}
                                    {enableFullscreen && (
                                        <button
                                            className="designbase-lightbox__toolbar-button"
                                            onClick={handleFullscreenToggle}
                                            title={isFullscreen ? "전체화면 해제" : "전체화면"}
                                            type="button"
                                        >
                                            {isFullscreen ? <ShrinkIcon size={16} /> : <ExpandIcon size={16} />}
                                        </button>
                                    )}
                                </>
                            )}
                            {showCloseButton && (
                                <button
                                    className="designbase-lightbox__close-button"
                                    onClick={handleClose}
                                    title="닫기"
                                    type="button"
                                >
                                    <CloseIcon size={20} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* 메인 콘텐츠 */}
                    <div className="designbase-lightbox__content">
                        {/* 네비게이션 버튼들 */}
                        {showNavigationButtons && images.length > 1 && (
                            <>
                                <button
                                    className="designbase-lightbox__nav-button designbase-lightbox__nav-button--prev"
                                    onClick={goToPrevious}
                                    title="이전 이미지"
                                    type="button"
                                >
                                    <ChevronLeftIcon size={24} />
                                </button>
                                <button
                                    className="designbase-lightbox__nav-button designbase-lightbox__nav-button--next"
                                    onClick={goToNext}
                                    title="다음 이미지"
                                    type="button"
                                >
                                    <ChevronRightIcon size={24} />
                                </button>
                            </>
                        )}

                        {/* 이미지 컨테이너 */}
                        <div
                            ref={containerRef}
                            className="designbase-lightbox__image-container"
                            onWheel={handleWheel}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            {isImageError ? (
                                <div className="designbase-lightbox__error">
                                    <div className="designbase-lightbox__error-icon">⚠️</div>
                                    <p className="designbase-lightbox__error-text">
                                        이미지를 불러올 수 없습니다.
                                    </p>
                                </div>
                            ) : (
                                <img
                                    ref={imageRef}
                                    src={currentImage.src}
                                    alt={currentImage.alt || currentImage.title || `이미지 ${internalCurrentIndex + 1}`}
                                    className={clsx(
                                        'designbase-lightbox__image',
                                        {
                                            'designbase-lightbox__image--loaded': isImageLoaded,
                                            'designbase-lightbox__image--dragging': isDragging,
                                        }
                                    )}
                                    style={{
                                        transform: `scale(${zoomLevel}) rotate(${rotation}deg) translate(${imagePosition.x / zoomLevel}px, ${imagePosition.y / zoomLevel}px)`,
                                        cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                                    }}
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                />
                            )}

                            {/* 로딩 스피너 */}
                            {!isImageLoaded && !isImageError && (
                                <div className="designbase-lightbox__loading">
                                    <div className="designbase-lightbox__spinner"></div>
                                    <p className="designbase-lightbox__loading-text">이미지 로딩 중...</p>
                                </div>
                            )}
                        </div>

                        {/* 설명 */}
                        {currentImage.description && (
                            <div className="designbase-lightbox__description">
                                <p className="designbase-lightbox__description-text">
                                    {currentImage.description}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* 썸네일 */}
                    {showThumbnails && images.length > 1 && (
                        <div className="designbase-lightbox__thumbnails">
                            <div className="designbase-lightbox__thumbnails-container">
                                {images.map((image, index) => (
                                    <button
                                        key={image.id}
                                        className={clsx(
                                            'designbase-lightbox__thumbnail',
                                            {
                                                'designbase-lightbox__thumbnail--active': index === internalCurrentIndex,
                                            }
                                        )}
                                        onClick={() => handleImageChange(index)}
                                        title={image.title || `이미지 ${index + 1}`}
                                        type="button"
                                    >
                                        <img
                                            src={image.thumbnail || image.src}
                                            alt={image.alt || image.title || `썸네일 ${index + 1}`}
                                            className="designbase-lightbox__thumbnail-image"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
