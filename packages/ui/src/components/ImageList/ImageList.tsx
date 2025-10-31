import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import { Image, ImageProps } from '../Image/Image';
import Lightbox from '../Lightbox/Lightbox';
import './ImageList.scss';

export type ImageListLayout = 'grid' | 'list' | 'gallery' | 'carousel';
export type ImageListColumns = 1 | 2 | 3 | 4 | 5 | 6;
export type ImageListSpacing = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface ImageItem {
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
    /** 이미지 메타데이터 */
    metadata?: {
        width?: number;
        height?: number;
        size?: string;
        date?: string;
        tags?: string[];
    };
}

export interface ImageListProps {
    /** 이미지 목록 */
    images: ImageItem[];
    /** 레이아웃 타입 */
    layout?: ImageListLayout;
    /** 그리드 컬럼 수 (grid 레이아웃에서만 사용) */
    columns?: ImageListColumns;
    /** 간격 크기 */
    spacing?: ImageListSpacing;
    /** 이미지 종횡비 */
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
    /** 이미지 클릭 핸들러 */
    onImageClick?: (image: ImageItem, index: number) => void;
    /** 이미지 로드 완료 핸들러 */
    onImageLoad?: (image: ImageItem, index: number) => void;
    /** 이미지 에러 핸들러 */
    onImageError?: (image: ImageItem, index: number) => void;
    /** 로딩 상태 */
    loading?: 'lazy' | 'eager';
    /** 반응형 여부 */
    responsive?: boolean;
    /** 커스텀 CSS 클래스 */
    className?: string;
    /** 컨테이너 스타일 */
    style?: React.CSSProperties;
}

const ImageList: React.FC<ImageListProps> = ({
    images,
    layout = 'grid',
    columns = 3,
    spacing = 'm',
    ratio = '16:9',
    fit = 'cover',
    rounded = false,
    shadow = false,
    hover = true,
    clickable = true,
    lightbox = true,
    onImageClick,
    onImageLoad,
    onImageError,
    loading = 'lazy',
    responsive = true,
    className,
    style,
}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // 이미지 클릭 핸들러
    const handleImageClick = useCallback((image: ImageItem, index: number) => {
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
    const handleImageLoad = useCallback((image: ImageItem, index: number) => {
        onImageLoad?.(image, index);
    }, [onImageLoad]);

    // 이미지 에러 핸들러
    const handleImageError = useCallback((image: ImageItem, index: number) => {
        onImageError?.(image, index);
    }, [onImageError]);

    const classes = clsx(
        'designbase-image-list',
        `designbase-image-list--${layout}`,
        `designbase-image-list--columns-${columns}`,
        `designbase-image-list--spacing-${spacing}`,
        {
            'designbase-image-list--responsive': responsive,
            'designbase-image-list--clickable': clickable,
            'designbase-image-list--hover': hover,
        },
        className
    );

    const renderImage = (image: ImageItem, index: number) => (
        <div
            key={`${image.src}-${index}`}
            className="designbase-image-list__item"
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
                className="designbase-image-list__image"
                onLoad={() => handleImageLoad(image, index)}
                onError={() => handleImageError(image, index)}
            />

            {/* 이미지 정보 오버레이 */}
            {(image.title || image.description) && (
                <div className="designbase-image-list__overlay">
                    {image.title && (
                        <h3 className="designbase-image-list__title">
                            {image.title}
                        </h3>
                    )}
                    {image.description && (
                        <p className="designbase-image-list__description">
                            {image.description}
                        </p>
                    )}
                </div>
            )}

            {/* 메타데이터 */}
            {image.metadata && (
                <div className="designbase-image-list__metadata">
                    {image.metadata.date && (
                        <span className="designbase-image-list__date">
                            {image.metadata.date}
                        </span>
                    )}
                    {image.metadata.size && (
                        <span className="designbase-image-list__size">
                            {image.metadata.size}
                        </span>
                    )}
                </div>
            )}
        </div>
    );

    return (
        <>
            <div className={classes} style={style}>
                {layout === 'carousel' ? (
                    <div className="designbase-image-list__carousel">
                        {images.map((image, index) => (
                            <div key={index} className="designbase-image-list__carousel-item">
                                {renderImage(image, index)}
                            </div>
                        ))}
                    </div>
                ) : (
                    images.map((image, index) => renderImage(image, index))
                )}
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

export { ImageList };
export default ImageList;
