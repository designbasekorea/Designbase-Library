import React, { useState, useEffect, useRef, useCallback } from 'react';
import clsx from 'clsx';
import { Image, ImageProps } from '../Image/Image';
import Lightbox from '../Lightbox/Lightbox';
import './Masonry.scss';

export type MasonryColumns = 1 | 2 | 3 | 4 | 5 | 6;
export type MasonrySpacing = 'xs' | 's' | 'm' | 'l' | 'xl';
export type MasonryAnimation = 'fade' | 'slide' | 'zoom' | 'none';

export interface MasonryItem {
    /** 이미지 ID */
    id?: string;
    /** 이미지 소스 URL */
    src: string;
    /** 대체 텍스트 */
    alt?: string;
    /** 이미지 제목 */
    title?: string;
    /** 이미지 설명 */
    description?: string;
    /** 썸네일 URL (선택사항) */
    thumbnail?: string;
    /** 이미지 높이 (px, 선택사항) */
    height?: number;
    /** 이미지 너비 (px, 선택사항) */
    width?: number;
    /** 이미지 메타데이터 */
    metadata?: {
        width?: number;
        height?: number;
        size?: string;
        date?: string;
        tags?: string[];
    };
}

export interface MasonryProps {
    /** 이미지 목록 */
    images: MasonryItem[];
    /** 컬럼 수 */
    columns?: MasonryColumns;
    /** 간격 크기 */
    spacing?: MasonrySpacing;
    /** 이미지 종횡비 (auto 권장) */
    ratio?: ImageProps['ratio'];
    /** 이미지 맞춤 방식 */
    fit?: ImageProps['fit'];
    /** 둥근 모서리 */
    rounded?: ImageProps['rounded'];
    /** 그림자 효과 */
    shadow?: ImageProps['shadow'];
    /** 호버 효과 */
    hover?: boolean;
    /** 클릭 가능 여부 */
    clickable?: boolean;
    /** 라이트박스 사용 여부 */
    lightbox?: boolean;
    /** 애니메이션 타입 */
    animation?: MasonryAnimation;
    /** 애니메이션 지연 시간 (ms) */
    animationDelay?: number;
    /** 이미지 클릭 핸들러 */
    onImageClick?: (image: MasonryItem, index: number) => void;
    /** 이미지 로드 완료 핸들러 */
    onImageLoad?: (image: MasonryItem, index: number) => void;
    /** 이미지 에러 핸들러 */
    onImageError?: (image: MasonryItem, index: number) => void;
    /** 로딩 상태 */
    loading?: 'lazy' | 'eager';
    /** 반응형 여부 */
    responsive?: boolean;
    /** 무한 스크롤 여부 */
    infiniteScroll?: boolean;
    /** 무한 스크롤 임계값 */
    infiniteScrollThreshold?: number;
    /** 추가 이미지 로드 핸들러 */
    onLoadMore?: () => void;
    /** 커스텀 CSS 클래스 */
    className?: string;
    /** 컨테이너 스타일 */
    style?: React.CSSProperties;
}

const Masonry: React.FC<MasonryProps> = ({
    images,
    columns = 3,
    spacing = 'm',
    ratio = 'auto',
    fit = 'cover',
    rounded = false,
    shadow = false,
    hover = true,
    clickable = true,
    lightbox = true,
    animation = 'fade',
    animationDelay = 100,
    onImageClick,
    onImageLoad,
    onImageError,
    loading = 'lazy',
    responsive = true,
    infiniteScroll = false,
    infiniteScrollThreshold = 100,
    onLoadMore,
    className,
    style,
}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [columnHeights, setColumnHeights] = useState<number[]>([]);
    const [visibleImages, setVisibleImages] = useState<number[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    // 컬럼 높이 계산
    const calculateColumnHeights = useCallback(() => {
        const heights = new Array(columns).fill(0);
        const columnWidth = containerRef.current ? containerRef.current.offsetWidth / columns : 0;

        imageRefs.current.forEach((ref, index) => {
            if (ref) {
                const image = images[index];
                const aspectRatio = image.height && image.width ? image.height / image.width : 1;
                const imageHeight = columnWidth * aspectRatio;

                // 가장 짧은 컬럼에 이미지 추가
                const shortestColumn = heights.indexOf(Math.min(...heights));
                heights[shortestColumn] += imageHeight + (spacing === 'xs' ? 4 : spacing === 's' ? 8 : spacing === 'm' ? 16 : spacing === 'l' ? 24 : 32);
            }
        });

        setColumnHeights(heights);
    }, [images, columns, spacing]);

    // 이미지 가시성 감지
    const checkImageVisibility = useCallback(() => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const visible: number[] = [];

        imageRefs.current.forEach((ref, index) => {
            if (ref) {
                const rect = ref.getBoundingClientRect();
                if (rect.top < containerRect.bottom + infiniteScrollThreshold) {
                    visible.push(index);
                }
            }
        });

        setVisibleImages(visible);
    }, [infiniteScrollThreshold]);

    // 무한 스크롤 처리
    const handleScroll = useCallback(() => {
        if (!infiniteScroll || !onLoadMore) return;

        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            if (scrollTop + clientHeight >= scrollHeight - infiniteScrollThreshold) {
                onLoadMore();
            }
        }
    }, [infiniteScroll, onLoadMore, infiniteScrollThreshold]);

    // 이미지 클릭 핸들러
    const handleImageClick = useCallback((image: MasonryItem, index: number) => {
        if (lightbox) {
            setSelectedImageIndex(index);
        }
        onImageClick?.(image, index);
    }, [lightbox, onImageClick]);

    // 라이트박스 닫기 핸들러
    const handleLightboxClose = useCallback(() => {
        setSelectedImageIndex(null);
    }, []);

    // 라이트박스 이미지 변경 핸들러
    const handleLightboxNavigate = useCallback((index: number) => {
        setSelectedImageIndex(index);
    }, []);

    // 이미지 로드 핸들러
    const handleImageLoad = useCallback((image: MasonryItem, index: number) => {
        onImageLoad?.(image, index);
        // 이미지 로드 후 레이아웃 재계산
        setTimeout(calculateColumnHeights, 100);
    }, [onImageLoad, calculateColumnHeights]);

    // 이미지 에러 핸들러
    const handleImageError = useCallback((image: MasonryItem, index: number) => {
        onImageError?.(image, index);
    }, [onImageError]);

    // 컬럼별 이미지 분배
    const distributeImages = useCallback(() => {
        const columnArrays: MasonryItem[][] = Array.from({ length: columns }, () => []);
        const heights = new Array(columns).fill(0);

        images.forEach((image) => {
            const shortestColumn = heights.indexOf(Math.min(...heights));
            columnArrays[shortestColumn].push(image);

            // 높이 업데이트 (대략적인 계산)
            const aspectRatio = image.height && image.width ? image.height / image.width : 1;
            const columnWidth = 100 / columns; // 퍼센트 기준
            heights[shortestColumn] += columnWidth * aspectRatio;
        });

        return columnArrays;
    }, [images, columns]);

    // 이벤트 리스너 설정
    useEffect(() => {
        calculateColumnHeights();
        checkImageVisibility();

        if (infiniteScroll) {
            const container = containerRef.current;
            if (container) {
                container.addEventListener('scroll', handleScroll);
                return () => container.removeEventListener('scroll', handleScroll);
            }
        }
    }, [calculateColumnHeights, checkImageVisibility, infiniteScroll, handleScroll]);

    // ResizeObserver 설정
    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            calculateColumnHeights();
        });

        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    }, [calculateColumnHeights]);

    const classes = clsx(
        'designbase-masonry',
        `designbase-masonry--columns-${columns}`,
        `designbase-masonry--spacing-${spacing}`,
        `designbase-masonry--animation-${animation}`,
        {
            'designbase-masonry--responsive': responsive,
            'designbase-masonry--clickable': clickable,
            'designbase-masonry--hover': hover,
            'designbase-masonry--infinite-scroll': infiniteScroll,
        },
        className
    );

    const distributedImages = distributeImages();

    const renderImage = (image: MasonryItem, index: number, columnIndex: number) => (
        <div
            key={`${image.src}-${index}`}
            ref={(el) => (imageRefs.current[index] = el)}
            className={clsx(
                'designbase-masonry__item',
                {
                    'designbase-masonry__item--visible': visibleImages.includes(index),
                }
            )}
            style={{
                animationDelay: `${index * animationDelay}ms`,
            }}
            onClick={() => clickable && handleImageClick(image, index)}
        >
            <Image
                src={image.thumbnail || image.src}
                alt={image.alt || image.title || `이미지 ${index + 1}`}
                ratio={ratio}
                fit={fit}
                rounded={rounded}
                shadow={shadow}
                hover={hover}
                loading={loading}
                fallbackSrc={image.src}
                className="designbase-masonry__image"
                onLoad={() => handleImageLoad(image, index)}
                onError={() => handleImageError(image, index)}
            />

            {/* 이미지 정보 오버레이 */}
            {(image.title || image.description) && (
                <div className="designbase-masonry__overlay">
                    {image.title && (
                        <h3 className="designbase-masonry__title">
                            {image.title}
                        </h3>
                    )}
                    {image.description && (
                        <p className="designbase-masonry__description">
                            {image.description}
                        </p>
                    )}
                </div>
            )}

            {/* 메타데이터 */}
            {image.metadata && (
                <div className="designbase-masonry__metadata">
                    {image.metadata.date && (
                        <span className="designbase-masonry__date">
                            {image.metadata.date}
                        </span>
                    )}
                    {image.metadata.size && (
                        <span className="designbase-masonry__size">
                            {image.metadata.size}
                        </span>
                    )}
                </div>
            )}
        </div>
    );

    return (
        <>
            <div
                ref={containerRef}
                className={classes}
                style={style}
            >
                {distributedImages.map((column, columnIndex) => (
                    <div
                        key={columnIndex}
                        className="designbase-masonry__column"
                    >
                        {column.map((image, imageIndex) => {
                            const globalIndex = images.indexOf(image);
                            return renderImage(image, globalIndex, columnIndex);
                        })}
                    </div>
                ))}
            </div>

            {/* 라이트박스 */}
            {lightbox && selectedImageIndex !== null && (
                <Lightbox
                    images={images.map((img, index) => ({
                        id: img.id || `image-${index}`,
                        src: img.src,
                        alt: img.alt || img.title || '',
                        title: img.title,
                        description: img.description,
                    }))}
                    currentIndex={selectedImageIndex}
                    isOpen={true}
                    onOpenChange={handleLightboxClose}
                    onImageChange={handleLightboxNavigate}
                />
            )}
        </>
    );
};

export { Masonry };
export default Masonry;
