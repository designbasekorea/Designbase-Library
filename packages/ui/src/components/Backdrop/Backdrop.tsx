/**
 * Backdrop 컴포넌트
 * 
 * 목적: 모달, 다이얼로그, 오버레이의 배경으로 사용되는 반투명 오버레이
 * 기능: 클릭 이벤트 처리, 애니메이션 효과, 접근성 지원
 * 접근성: 스크린 리더 지원, 키보드 네비게이션
 */

import React, { forwardRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import './Backdrop.scss';

export interface BackdropProps {
    /** 표시 여부 */
    open?: boolean;
    /** 배경 클릭 시 호출되는 함수 */
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** 배경 클릭 시 닫기 방지 */
    disableBackdropClick?: boolean;
    /** 배경 클릭 시 닫기 방지 */
    disableEscapeKeyDown?: boolean;
    /** 배경 색상 */
    backgroundColor?: string;
    /** 투명도 */
    opacity?: number;
    /** 블러 효과 */
    blur?: boolean;
    /** 블러 강도 */
    blurAmount?: number;
    /** 애니메이션 효과 */
    animation?: 'fade' | 'slide' | 'zoom' | 'none';
    /** 애니메이션 지속 시간 (ms) */
    animationDuration?: number;
    /** z-index */
    zIndex?: number;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 스타일 객체 */
    style?: React.CSSProperties;
    /** 자식 요소 */
    children?: React.ReactNode;
    /** 추가 props */
    [key: string]: any;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
    (
        {
            open = false,
            onClick,
            disableBackdropClick = false,
            disableEscapeKeyDown = false,
            backgroundColor,
            opacity = 0.5,
            blur = false,
            blurAmount = 4,
            animation = 'fade',
            animationDuration = 300,
            zIndex = 1000,
            className,
            style,
            children,
            ...props
        },
        forwardedRef
    ) => {
        // ESC 키 처리
        const handleKeyDown = useCallback(
            (event: KeyboardEvent) => {
                if (event.key === 'Escape' && !disableEscapeKeyDown && onClick) {
                    onClick(event as any);
                }
            },
            [onClick, disableEscapeKeyDown]
        );

        // ESC 키 이벤트 리스너 등록/해제
        useEffect(() => {
            if (open) {
                document.addEventListener('keydown', handleKeyDown);
                // body 스크롤 방지
                document.body.style.overflow = 'hidden';
            }

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                // body 스크롤 복원
                document.body.style.overflow = '';
            };
        }, [open, handleKeyDown]);

        // 배경 클릭 처리
        const handleBackdropClick = useCallback(
            (event: React.MouseEvent<HTMLDivElement>) => {
                if (event.target === event.currentTarget && !disableBackdropClick) {
                    onClick?.(event);
                }
            },
            [onClick, disableBackdropClick]
        );

        // 커스텀 스타일 계산
        const backdropStyle: React.CSSProperties = {
            ...style,
            zIndex,
            '--backdrop-opacity': opacity,
            '--backdrop-blur-amount': `${blurAmount}px`,
            '--backdrop-animation-duration': `${animationDuration}ms`,
        } as React.CSSProperties;

        if (backgroundColor) {
            backdropStyle.backgroundColor = backgroundColor;
        }

        const classes = clsx(
            'designbase-backdrop',
            `designbase-backdrop--${animation}`,
            {
                'designbase-backdrop--open': open,
                'designbase-backdrop--blur': blur,
            },
            className
        );

        // Portal을 사용하여 body에 렌더링
        return createPortal(
            <div
                ref={forwardedRef}
                className={classes}
                style={backdropStyle}
                onClick={handleBackdropClick}
                role="presentation"
                aria-hidden={!open}
                {...props}
            >
                {children}
            </div>,
            document.body
        );
    }
);

Backdrop.displayName = 'Backdrop';

// Named export 추가
export { Backdrop };
export default Backdrop;
