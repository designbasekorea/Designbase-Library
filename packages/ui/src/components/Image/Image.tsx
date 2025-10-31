/**
 * Image 컴포넌트
 * 
 * 이미지 표시를 위한 고급 컴포넌트로, aspect ratio, object fit, lazy loading,
 * fallback 처리, placeholder 등의 기능을 제공합니다.
 */

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { GalleryIcon } from '@designbasekorea/icons';
import './Image.scss';

export type ImageRatio = '1:1' | '16:9' | '4:3' | '3:2' | '3:4' | '2:1' | 'auto';
export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
export type ImageLoading = 'lazy' | 'eager';
export type ImagePlaceholder = 'skeleton' | 'blur' | 'none';
export type ImageRounded = boolean | 's' | 'm' | 'l' | 'full';

export interface ImageProps {
    /** 이미지 소스 URL */
    src: string;
    /** 대체 텍스트 */
    alt?: string;
    /** 종횡비 */
    ratio?: ImageRatio;
    /** 이미지 맞춤 방식 */
    fit?: ImageFit;
    /** 로딩 방식 */
    loading?: ImageLoading;
    /** 대체 이미지 URL */
    fallbackSrc?: string;
    /** 플레이스홀더 타입 */
    placeholder?: ImagePlaceholder;
    /** 둥근 모서리 */
    rounded?: ImageRounded;
    /** 너비 */
    width?: number | string;
    /** 높이 */
    height?: number | string;
    /** 최대 너비 */
    maxWidth?: number | string;
    /** 최대 높이 */
    maxHeight?: number | string;
    /** 전체 너비 사용 */
    fullWidth?: boolean;
    /** 전체 높이 사용 */
    fullHeight?: boolean;
    /** 그림자 효과 */
    shadow?: boolean | 's' | 'm' | 'l';
    /** 호버 효과 */
    hover?: boolean;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 로드 완료 핸들러 */
    onLoad?: () => void;
    /** 에러 핸들러 */
    onError?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 이미지 요소 CSS 클래스 */
    imageClassName?: string;
}

export const Image: React.FC<ImageProps> = ({
    src,
    alt = '',
    ratio = 'auto',
    fit = 'cover',
    loading = 'lazy',
    fallbackSrc,
    placeholder = 'none',
    rounded = false,
    width,
    height,
    maxWidth,
    maxHeight,
    fullWidth = false,
    fullHeight = false,
    shadow = false,
    hover = false,
    onClick,
    onLoad,
    onError,
    className,
    imageClassName,
}) => {
    const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');
    const [currentSrc, setCurrentSrc] = useState(src);
    const [showPlaceholder, setShowPlaceholder] = useState(placeholder !== 'none');
    const imageRef = useRef<HTMLImageElement>(null);

    // 에러 아이콘 크기 (기본값 m)
    const errorIconSize = 20;

    // src가 변경되면 상태 초기화
    useEffect(() => {
        setCurrentSrc(src);
        setImageState('loading');
        setShowPlaceholder(placeholder !== 'none');
    }, [src, placeholder]);

    // 이미지 로드 핸들러
    const handleLoad = () => {
        setImageState('loaded');
        setShowPlaceholder(false);
        onLoad?.();
    };

    // 이미지 에러 핸들러
    const handleError = () => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
            setImageState('loading');
        } else {
            setImageState('error');
            setShowPlaceholder(false);
            onError?.();
        }
    };

    // aspect ratio 계산
    const getAspectRatioStyle = () => {
        if (ratio === 'auto') return {};

        const ratios: Record<ImageRatio, string> = {
            '1:1': '100%',
            '16:9': '56.25%',
            '4:3': '75%',
            '3:2': '66.67%',
            '3:4': '133.33%',
            '2:1': '50%',
            'auto': 'auto',
        };

        return {
            paddingBottom: ratios[ratio],
        };
    };

    // 둥근 모서리 클래스 계산
    const getRoundedClass = () => {
        if (rounded === true) return 'designbase-image--rounded';
        if (typeof rounded === 'string') return `designbase-image--rounded-${rounded}`;
        return '';
    };

    // 그림자 클래스 계산
    const getShadowClass = () => {
        if (shadow === true) return 'designbase-image--shadow';
        if (typeof shadow === 'string') return `designbase-image--shadow-${shadow}`;
        return '';
    };

    // 호버 클래스 계산
    const getHoverClass = () => {
        return hover ? 'designbase-image--hover' : '';
    };

    // 컨테이너 스타일 계산
    const containerStyle: React.CSSProperties = {
        width: fullWidth ? '100%' : width,
        height: fullHeight ? '100%' : height,
        maxWidth,
        maxHeight,
        ...getAspectRatioStyle(),
    };

    const getRatioClass = () => {
        if (ratio === 'auto') return '';
        return `designbase-image--ratio-${ratio.replace(':', '-')}`;
    };

    const classes = clsx(
        'designbase-image',
        getRatioClass(),
        `designbase-image--fit-${fit}`,
        getRoundedClass(),
        getShadowClass(),
        getHoverClass(),
        {
            'designbase-image--full-width': fullWidth,
            'designbase-image--full-height': fullHeight,
            'designbase-image--clickable': onClick,
            'designbase-image--loading': imageState === 'loading',
            'designbase-image--error': imageState === 'error',
        },
        className
    );

    const imageClasses = clsx(
        'designbase-image__img',
        {
            'designbase-image__img--loaded': imageState === 'loaded',
            'designbase-image__img--error': imageState === 'error',
        },
        imageClassName
    );

    const placeholderClasses = clsx(
        'designbase-image__placeholder',
        `designbase-image__placeholder--${placeholder}`,
        {
            'designbase-image__placeholder--visible': showPlaceholder,
        }
    );

    return (
        <div
            className={classes}
            style={containerStyle}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
        >
            {/* 플레이스홀더 */}
            {showPlaceholder && (
                <div className={placeholderClasses}>
                    {placeholder === 'skeleton' && (
                        <div className="designbase-image__skeleton" />
                    )}
                    {placeholder === 'blur' && (
                        <div className="designbase-image__blur" />
                    )}
                </div>
            )}

            {/* 에러 상태 */}
            {imageState === 'error' && (
                <div className="designbase-image__error">
                    <GalleryIcon size={errorIconSize} color="currentColor" />
                    <span className="designbase-image__error-text">
                        {alt || '이미지를 불러올 수 없습니다'}
                    </span>
                </div>
            )}

            {/* 실제 이미지 */}
            <img
                ref={imageRef}
                src={currentSrc}
                alt={alt}
                loading={loading}
                className={imageClasses}
                onLoad={handleLoad}
                onError={handleError}
                draggable={false}
            />
        </div>
    );
};

export default Image;
