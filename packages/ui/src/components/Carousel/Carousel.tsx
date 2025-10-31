import React, { useState, useRef, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    PlayIcon,
    PauseIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ExpandIcon,
    ShrinkIcon,
    RefreshIcon,
    DownloadIcon,
    ShareAltIcon,
    HeartIcon,
    BookmarkIcon,
} from '@designbasekorea/icons';
import { Indicator } from '../Indicator/Indicator';
import './Carousel.scss';

// 타입 정의
export type CarouselSize = 's' | 'm' | 'l' | 'xl';
export type CarouselVariant = 'default' | 'cards' | 'gallery' | 'hero' | 'testimonial';
export type CarouselTheme = 'light' | 'dark';
export type CarouselTransition = 'slide' | 'fade' | 'zoom' | 'flip' | 'cube';
export type CarouselIndicatorStyle = 'dots' | 'lines' | 'numbers' | 'thumbnails';

export interface CarouselItem {
    /** 아이템 ID */
    id: string;
    /** 아이템 제목 */
    title?: string;
    /** 아이템 설명 */
    description?: string;
    /** 이미지 URL */
    image?: string;
    /** 이미지 대체 텍스트 */
    alt?: string;
    /** 링크 URL */
    link?: string;
    /** 커스텀 콘텐츠 */
    content?: React.ReactNode;
    /** 배경 색상 */
    backgroundColor?: string;
    /** 텍스트 색상 */
    textColor?: string;
    /** 썸네일 이미지 */
    thumbnail?: string;
    /** 메타데이터 */
    meta?: {
        author?: string;
        date?: string;
        category?: string;
        tags?: string[];
        rating?: number;
        views?: number;
        likes?: number;
    };
}

export interface CarouselProps {
    /** 아이템 목록 */
    items: CarouselItem[];
    /** Carousel 크기 */
    size?: CarouselSize;
    /** Carousel 스타일 변형 */
    variant?: CarouselVariant;
    /** 테마 */
    theme?: CarouselTheme;
    /** 전환 효과 */
    transition?: CarouselTransition;
    /** 자동 재생 */
    autoPlay?: boolean;
    /** 자동 재생 간격 (ms) */
    autoPlayInterval?: number;
    /** 무한 루프 */
    infinite?: boolean;
    /** 한 번에 보여줄 아이템 수 */
    itemsPerView?: number;
    /** 간격 */
    gap?: number;
    /** 네비게이션 버튼 표시 */
    showNavigation?: boolean;
    /** 인디케이터 표시 */
    showIndicators?: boolean;
    /** 인디케이터 스타일 */
    indicatorStyle?: CarouselIndicatorStyle;
    /** 자동 재생 컨트롤 표시 */
    showAutoPlayControl?: boolean;
    /** 제목 표시 */
    showTitle?: boolean;
    /** 설명 표시 */
    showDescription?: boolean;
    /** 터치/스와이프 활성화 */
    enableTouch?: boolean;
    /** 키보드 네비게이션 활성화 */
    enableKeyboard?: boolean;
    /** 마우스 휠 활성화 */
    enableWheel?: boolean;
    /** 전체화면 모드 */
    enableFullscreen?: boolean;
    /** 다운로드 기능 */
    enableDownload?: boolean;
    /** 공유 기능 */
    enableShare?: boolean;
    /** 좋아요 기능 */
    enableLike?: boolean;
    /** 북마크 기능 */
    enableBookmark?: boolean;
    /** 읽기 전용 */
    readonly?: boolean;
    /** 비활성화 */
    disabled?: boolean;
    /** 페이징 활성화 */
    enablePaging?: boolean;
    /** 스와이프 감도 */
    swipeSensitivity?: number;
    /** 전환 지속 시간 */
    transitionDuration?: number;
    /** 아이템 클릭 핸들러 */
    onItemClick?: (item: CarouselItem, index: number) => void;
    /** 슬라이드 변경 핸들러 */
    onSlideChange?: (index: number) => void;
    /** 좋아요 핸들러 */
    onLike?: (item: CarouselItem, index: number, liked: boolean) => void;
    /** 북마크 핸들러 */
    onBookmark?: (item: CarouselItem, index: number, bookmarked: boolean) => void;
    /** 공유 핸들러 */
    onShare?: (item: CarouselItem, index: number) => void;
    /** 다운로드 핸들러 */
    onDownload?: (item: CarouselItem, index: number) => void;
    /** 전체화면 핸들러 */
    onFullscreenChange?: (isFullscreen: boolean) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
    items,
    size = 'm',
    variant = 'default',
    theme = 'light',
    transition = 'slide',
    autoPlay = false,
    autoPlayInterval = 5000,
    infinite = true,
    itemsPerView = 1,
    gap = 16,
    showNavigation = true,
    showIndicators = true,
    indicatorStyle = 'dots',
    showAutoPlayControl = true,
    showTitle = true,
    showDescription = true,
    enableTouch = true,
    enableKeyboard = true,
    enableWheel = false,
    enableFullscreen = false,
    enableDownload = false,
    enableShare = false,
    enableLike = false,
    enableBookmark = false,
    readonly = false,
    disabled = false,
    enablePaging = false,
    swipeSensitivity = 50,
    transitionDuration = 300,
    onItemClick,
    onSlideChange,
    onLike,
    onBookmark,
    onShare,
    onDownload,
    onFullscreenChange,
    className,
}) => {
    // 아이콘 크기 계산 (m이 기본값)
    const iconSize = size === 's' ? 16 : size === 'l' ? 24 : size === 'xl' ? 28 : 20;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [dragOffset, setDragOffset] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
    const [bookmarkedItems, setBookmarkedItems] = useState<Set<string>>(new Set());
    const [isTransitioning, setIsTransitioning] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
    const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

    // 자동 재생 설정
    useEffect(() => {
        setIsAutoPlaying(autoPlay);
    }, [autoPlay]);

    // 자동 재생 로직
    useEffect(() => {
        if (isAutoPlaying && !disabled && !readonly && items.length > 1) {
            autoPlayRef.current = setInterval(() => {
                goToNext();
            }, autoPlayInterval);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying, disabled, readonly, items.length, autoPlayInterval]);

    // 자동 재생 정지/재개
    const handleAutoPlayToggle = useCallback(() => {
        if (disabled || readonly) return;
        setIsAutoPlaying(prev => !prev);
    }, [disabled, readonly]);

    // 이전 슬라이드로 이동
    const goToPrevious = useCallback(() => {
        if (disabled || readonly || isTransitioning) return;

        setIsTransitioning(true);
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            if (infinite) {
                newIndex = items.length - 1;
            } else {
                newIndex = 0;
            }
        }

        setCurrentIndex(newIndex);
        onSlideChange?.(newIndex);

        setTimeout(() => setIsTransitioning(false), transitionDuration);
    }, [currentIndex, items.length, infinite, disabled, readonly, isTransitioning, transitionDuration, onSlideChange]);

    // 다음 슬라이드로 이동
    const goToNext = useCallback(() => {
        if (disabled || readonly || isTransitioning) return;

        setIsTransitioning(true);
        let newIndex = currentIndex + 1;
        if (newIndex >= items.length) {
            if (infinite) {
                newIndex = 0;
            } else {
                newIndex = items.length - 1;
            }
        }

        setCurrentIndex(newIndex);
        onSlideChange?.(newIndex);

        setTimeout(() => setIsTransitioning(false), transitionDuration);
    }, [currentIndex, items.length, infinite, disabled, readonly, isTransitioning, transitionDuration, onSlideChange]);

    // 특정 슬라이드로 이동
    const goToSlide = useCallback((index: number) => {
        if (disabled || readonly || index < 0 || index >= items.length || isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex(index);
        onSlideChange?.(index);

        setTimeout(() => setIsTransitioning(false), transitionDuration);
    }, [disabled, readonly, items.length, isTransitioning, transitionDuration, onSlideChange]);

    // 첫 번째/마지막 슬라이드로 이동
    const goToFirst = useCallback(() => goToSlide(0), [goToSlide]);
    const goToLast = useCallback(() => goToSlide(items.length - 1), [goToSlide, items.length]);

    // 아이템 클릭 핸들러
    const handleItemClick = useCallback((item: CarouselItem, index: number) => {
        if (disabled || readonly) return;
        onItemClick?.(item, index);
    }, [disabled, readonly, onItemClick]);

    // 좋아요 핸들러
    const handleLike = useCallback((item: CarouselItem, index: number) => {
        if (disabled || readonly) return;
        const isLiked = likedItems.has(item.id);
        const newLikedItems = new Set(likedItems);

        if (isLiked) {
            newLikedItems.delete(item.id);
        } else {
            newLikedItems.add(item.id);
        }

        setLikedItems(newLikedItems);
        onLike?.(item, index, !isLiked);
    }, [disabled, readonly, likedItems, onLike]);

    // 북마크 핸들러
    const handleBookmark = useCallback((item: CarouselItem, index: number) => {
        if (disabled || readonly) return;
        const isBookmarked = bookmarkedItems.has(item.id);
        const newBookmarkedItems = new Set(bookmarkedItems);

        if (isBookmarked) {
            newBookmarkedItems.delete(item.id);
        } else {
            newBookmarkedItems.add(item.id);
        }

        setBookmarkedItems(newBookmarkedItems);
        onBookmark?.(item, index, !isBookmarked);
    }, [disabled, readonly, bookmarkedItems, onBookmark]);

    // 공유 핸들러
    const handleShare = useCallback((item: CarouselItem, index: number) => {
        if (disabled || readonly) return;
        onShare?.(item, index);
    }, [disabled, readonly, onShare]);

    // 다운로드 핸들러
    const handleDownload = useCallback((item: CarouselItem, index: number) => {
        if (disabled || readonly || !item.image) return;
        onDownload?.(item, index);
    }, [disabled, readonly, onDownload]);

    // 전체화면 토글
    const handleFullscreenToggle = useCallback(() => {
        if (disabled || readonly) return;
        const newFullscreen = !isFullscreen;
        setIsFullscreen(newFullscreen);
        onFullscreenChange?.(newFullscreen);
    }, [disabled, readonly, isFullscreen, onFullscreenChange]);

    // 터치/드래그 시작
    const handleTouchStart = useCallback((event: React.TouchEvent | React.MouseEvent) => {
        if (!enableTouch || disabled || readonly) return;

        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
        const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

        touchStartRef.current = { x: clientX, y: clientY, time: Date.now() };
        setIsDragging(true);
        setDragStart({ x: clientX, y: clientY });
        setDragOffset(0);
    }, [enableTouch, disabled, readonly]);

    // 터치/드래그 중
    const handleTouchMove = useCallback((event: React.TouchEvent | React.MouseEvent) => {
        if (!isDragging || !enableTouch || disabled || readonly || !touchStartRef.current) return;

        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
        const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

        const deltaX = clientX - touchStartRef.current.x;
        const deltaY = clientY - touchStartRef.current.y;

        // 수평 스와이프만 처리 (수직 스크롤 방지)
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            event.preventDefault();
            setDragOffset(deltaX);
        }
    }, [isDragging, enableTouch, disabled, readonly]);

    // 터치/드래그 종료
    const handleTouchEnd = useCallback(() => {
        if (!enableTouch || disabled || readonly || !touchStartRef.current) return;

        const endTime = Date.now();
        const duration = endTime - touchStartRef.current.time;
        const velocity = Math.abs(dragOffset) / Math.max(duration, 1);

        const threshold = swipeSensitivity;
        const velocityThreshold = 0.5;

        // 속도나 거리에 따라 슬라이드 변경
        if (Math.abs(dragOffset) > threshold || velocity > velocityThreshold) {
            if (dragOffset > 0) {
                goToPrevious();
            } else {
                goToNext();
            }
        }

        // 상태 초기화
        setIsDragging(false);
        setDragOffset(0);
        touchStartRef.current = null;
    }, [enableTouch, disabled, readonly, dragOffset, swipeSensitivity, goToPrevious, goToNext]);

    // 마우스 휠 핸들러
    const handleWheel = useCallback((event: React.WheelEvent) => {
        if (!enableWheel || disabled || readonly) return;
        event.preventDefault();

        if (event.deltaY > 0) {
            goToNext();
        } else {
            goToPrevious();
        }
    }, [enableWheel, disabled, readonly, goToNext, goToPrevious]);

    // 키보드 이벤트 핸들러
    useEffect(() => {
        if (!enableKeyboard || disabled || readonly) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                    goToPrevious();
                    break;
                case 'ArrowRight':
                    goToNext();
                    break;
                case 'Home':
                    goToFirst();
                    break;
                case 'End':
                    goToLast();
                    break;
                case ' ':
                    event.preventDefault();
                    handleAutoPlayToggle();
                    break;
                case 'f':
                    if (enableFullscreen) {
                        handleFullscreenToggle();
                    }
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [enableKeyboard, disabled, readonly, goToPrevious, goToNext, goToFirst, goToLast, handleAutoPlayToggle, enableFullscreen, handleFullscreenToggle]);

    // 마우스 이벤트 핸들러
    const handleMouseDown = useCallback((event: React.MouseEvent) => {
        handleTouchStart(event);
    }, [handleTouchStart]);

    const handleMouseMove = useCallback((event: React.MouseEvent) => {
        handleTouchMove(event);
    }, [handleTouchMove]);

    const handleMouseUp = useCallback(() => {
        handleTouchEnd();
    }, [handleTouchEnd]);

    // 터치 이벤트 핸들러
    const handleTouchStartEvent = useCallback((event: React.TouchEvent) => {
        handleTouchStart(event);
    }, [handleTouchStart]);

    const handleTouchMoveEvent = useCallback((event: React.TouchEvent) => {
        handleTouchMove(event);
    }, [handleTouchMove]);

    const handleTouchEndEvent = useCallback(() => {
        handleTouchEnd();
    }, [handleTouchEnd]);

    // 현재 아이템
    const currentItem = items[currentIndex];

    // 슬라이드 스타일 계산
    const getSlideStyle = () => {
        const containerWidth = containerRef.current?.offsetWidth || 1;
        const translateX = -(currentIndex * (100 / itemsPerView)) + (dragOffset / containerWidth) * (100 / itemsPerView);

        return {
            transform: `translateX(${translateX}%)`,
            gap: `${gap}px`,
            transition: isDragging ? 'none' : `transform ${transitionDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
            willChange: isDragging ? 'transform' : 'auto',
        };
    };

    // 인디케이터 활성 상태 확인
    const isIndicatorActive = (index: number) => {
        return index === currentIndex;
    };

    // 네비게이션 버튼 비활성화 상태
    const isPrevDisabled = !infinite && currentIndex === 0;
    const isNextDisabled = !infinite && currentIndex === items.length - 1;

    // 좋아요/북마크 상태
    const isLiked = currentItem ? likedItems.has(currentItem.id) : false;
    const isBookmarked = currentItem ? bookmarkedItems.has(currentItem.id) : false;

    if (items.length === 0) return null;

    return (
        <div
            className={clsx(
                'designbase-carousel',
                `designbase-carousel--size-${size}`,
                `designbase-carousel--variant-${variant}`,
                `designbase-carousel--theme-${theme}`,
                `designbase-carousel--transition-${transition}`,
                `designbase-carousel--indicator-${indicatorStyle}`,
                {
                    'designbase-carousel--disabled': disabled,
                    'designbase-carousel--readonly': readonly,
                    'designbase-carousel--dragging': isDragging,
                    'designbase-carousel--fullscreen': isFullscreen,
                    'designbase-carousel--transitioning': isTransitioning,
                },
                className
            )}
        >
            {/* 메인 컨테이너 */}
            <div
                ref={containerRef}
                className="designbase-carousel__container"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStartEvent}
                onTouchMove={handleTouchMoveEvent}
                onTouchEnd={handleTouchEndEvent}
                onTouchCancel={handleTouchEndEvent}
            >
                {/* 슬라이드 트랙 */}
                <div
                    ref={trackRef}
                    className="designbase-carousel__track"
                    style={getSlideStyle()}
                >
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className={clsx(
                                'designbase-carousel__slide',
                                {
                                    'designbase-carousel__slide--active': index === currentIndex,
                                }
                            )}
                            style={{
                                width: `${100 / itemsPerView}%`,
                                backgroundColor: item.backgroundColor,
                                color: item.textColor || (item.image ? '#ffffff' : undefined),
                            }}
                            onClick={() => handleItemClick(item, index)}
                        >
                            {item.content ? (
                                <div className="designbase-carousel__slide-content">
                                    {item.content}
                                </div>
                            ) : (
                                <>
                                    {item.image && (
                                        <div className="designbase-carousel__slide-image">
                                            <img
                                                src={item.image}
                                                alt={item.alt || item.title || `슬라이드 ${index + 1}`}
                                                className="designbase-carousel__slide-img"
                                            />
                                        </div>
                                    )}
                                    {(showTitle && item.title) || (showDescription && item.description) ? (
                                        <div
                                            className="designbase-carousel__slide-info"
                                            style={{
                                                color: item.textColor || (item.image ? '#ffffff' : undefined),
                                            }}
                                        >
                                            {showTitle && item.title && (
                                                <h3
                                                    className="designbase-carousel__slide-title"
                                                    style={{
                                                        color: item.textColor || (item.image ? '#ffffff' : undefined),
                                                    }}
                                                >
                                                    {item.title}
                                                </h3>
                                            )}
                                            {showDescription && item.description && (
                                                <p
                                                    className="designbase-carousel__slide-description"
                                                    style={{
                                                        color: item.textColor || (item.image ? '#ffffff' : undefined),
                                                    }}
                                                >
                                                    {item.description}
                                                </p>
                                            )}
                                            {item.meta && (
                                                <div className="designbase-carousel__slide-meta">
                                                    {item.meta.author && (
                                                        <span className="designbase-carousel__slide-author">
                                                            {item.meta.author}
                                                        </span>
                                                    )}
                                                    {item.meta.date && (
                                                        <span className="designbase-carousel__slide-date">
                                                            {item.meta.date}
                                                        </span>
                                                    )}
                                                    {item.meta.rating && (
                                                        <span className="designbase-carousel__slide-rating">
                                                            ⭐ {item.meta.rating}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ) : null}
                                </>
                            )}

                            {/* 액션 버튼들 */}
                            <div className="designbase-carousel__slide-actions">
                                {enableLike && (
                                    <button
                                        className={clsx(
                                            'designbase-carousel__action-button',
                                            'designbase-carousel__action-button--like',
                                            { 'designbase-carousel__action-button--active': isLiked }
                                        )}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleLike(item, index);
                                        }}
                                        title={isLiked ? "좋아요 취소" : "좋아요"}
                                    >
                                        <HeartIcon size={iconSize} color="currentColor" />
                                    </button>
                                )}
                                {enableBookmark && (
                                    <button
                                        className={clsx(
                                            'designbase-carousel__action-button',
                                            'designbase-carousel__action-button--bookmark',
                                            { 'designbase-carousel__action-button--active': isBookmarked }
                                        )}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleBookmark(item, index);
                                        }}
                                        title={isBookmarked ? "북마크 해제" : "북마크"}
                                    >
                                        <BookmarkIcon size={iconSize} color="currentColor" />
                                    </button>
                                )}
                                {enableShare && (
                                    <button
                                        className="designbase-carousel__action-button designbase-carousel__action-button--share"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleShare(item, index);
                                        }}
                                        title="공유"
                                    >
                                        <ShareAltIcon size={iconSize} color="currentColor" />
                                    </button>
                                )}
                                {enableDownload && item.image && (
                                    <button
                                        className="designbase-carousel__action-button designbase-carousel__action-button--download"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDownload(item, index);
                                        }}
                                        title="다운로드"
                                    >
                                        <DownloadIcon size={iconSize} color="currentColor" />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 네비게이션 버튼들 */}
                {showNavigation && items.length > 1 && (
                    <>
                        <button
                            className={clsx(
                                'designbase-carousel__nav-button',
                                'designbase-carousel__nav-button--prev'
                            )}
                            onClick={goToPrevious}
                            disabled={disabled || readonly || isPrevDisabled}
                            title="이전 슬라이드"
                            type="button"
                        >
                            <ChevronLeftIcon size={iconSize} color="currentColor" />
                        </button>
                        <button
                            className={clsx(
                                'designbase-carousel__nav-button',
                                'designbase-carousel__nav-button--next'
                            )}
                            onClick={goToNext}
                            disabled={disabled || readonly || isNextDisabled}
                            title="다음 슬라이드"
                            type="button"
                        >
                            <ChevronRightIcon size={iconSize} color="currentColor" />
                        </button>
                    </>
                )}

                {/* 빠른 네비게이션 버튼들 */}
                {enablePaging && items.length > 1 && (
                    <>
                        <button
                            className="designbase-carousel__quick-nav-button designbase-carousel__quick-nav-button--first"
                            onClick={goToFirst}
                            disabled={disabled || readonly || currentIndex === 0}
                            title="첫 번째 슬라이드"
                            type="button"
                        >
                            <ArrowLeftIcon size={iconSize} color="currentColor" />
                        </button>
                        <button
                            className="designbase-carousel__quick-nav-button designbase-carousel__quick-nav-button--last"
                            onClick={goToLast}
                            disabled={disabled || readonly || currentIndex === items.length - 1}
                            title="마지막 슬라이드"
                            type="button"
                        >
                            <ArrowRightIcon size={iconSize} color="currentColor" />
                        </button>
                    </>
                )}

                {/* 전체화면 버튼 */}
                {enableFullscreen && (
                    <button
                        className="designbase-carousel__fullscreen-button"
                        onClick={handleFullscreenToggle}
                        disabled={disabled || readonly}
                        title={isFullscreen ? "전체화면 해제" : "전체화면"}
                        type="button"
                    >
                        {isFullscreen ? <ShrinkIcon size={iconSize} color="currentColor" /> : <ExpandIcon size={iconSize} color="currentColor" />}
                    </button>
                )}
            </div>

            {/* 하단 컨트롤 영역 */}
            <div className="designbase-carousel__controls">
                {/* 인디케이터 */}
                {showIndicators && items.length > 1 && (
                    <div className="designbase-carousel__indicators">
                        <Indicator
                            current={currentIndex}
                            total={items.length}
                            type={indicatorStyle === 'lines' ? 'line' : indicatorStyle === 'numbers' ? 'numbers' : 'dots'}
                            size="s"
                            clickable={true}
                            onStepClick={goToSlide}
                        />
                    </div>
                )}

                {/* 자동 재생 컨트롤 */}
                {showAutoPlayControl && items.length > 1 && (
                    <button
                        className="designbase-carousel__autoplay-button"
                        onClick={handleAutoPlayToggle}
                        disabled={disabled || readonly}
                        title={isAutoPlaying ? "자동 재생 정지" : "자동 재생 시작"}
                        type="button"
                    >
                        {isAutoPlaying ? <PauseIcon size={iconSize} color="currentColor" /> : <PlayIcon size={iconSize} color="currentColor" />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Carousel;
