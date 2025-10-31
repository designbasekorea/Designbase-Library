/**
 * BottomSheet 컴포넌트
 * 
 * 목적: 하단에서 슬라이드 업되는 모달 형태의 컴포넌트
 * 기능: 드래그 제스처, 스냅 포인트, 애니메이션 효과, 접근성 지원
 * 접근성: 스크린 리더 지원, 키보드 네비게이션, 포커스 트랩
 */

import React, { forwardRef, useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import './BottomSheet.scss';

export type BottomSheetSize = 's' | 'm' | 'l' | 'xl' | 'full';
export type BottomSheetVariant = 'default' | 'persistent' | 'temporary' | 'fullscreen';

export interface BottomSheetProps {
    /** 표시 여부 */
    open?: boolean;
    /** 닫기 함수 */
    onClose?: () => void;
    /** 제목 */
    title?: string;
    /** 부제목 */
    subtitle?: string;
    /** 하단 시트 크기 */
    size?: BottomSheetSize;
    /** 하단 시트 스타일 변형 */
    variant?: BottomSheetVariant;
    /** 배경 클릭 시 닫기 방지 */
    disableBackdropClick?: boolean;
    /** ESC 키 닫기 방지 */
    disableEscapeKeyDown?: boolean;
    /** 드래그 제스처 비활성화 */
    disableDrag?: boolean;
    /** 최대 높이 (0-100, 퍼센트) */
    maxHeight?: number;
    /** 애니메이션 효과 */
    animation?: 'slide' | 'fade' | 'scale' | 'none';
    /** 애니메이션 지속 시간 (ms) */
    animationDuration?: number;
    /** z-index */
    zIndex?: number;
    /** 배경 딤 레이어 표시 여부 */
    showBackdrop?: boolean;
    /** 배경 블러 효과 */
    backdropBlur?: boolean;
    /** 배경 투명도 */
    backdropOpacity?: number;
    /** 헤더 고정 */
    stickyHeader?: boolean;
    /** 푸터 고정 */
    stickyFooter?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 스타일 객체 */
    style?: React.CSSProperties;
    /** 헤더 내용 */
    header?: React.ReactNode;
    /** 푸터 내용 */
    footer?: React.ReactNode;
    /** 자식 요소 */
    children?: React.ReactNode;
    /** 추가 props */
    [key: string]: any;
}

const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
    (
        {
            open = false,
            onClose,
            title,
            subtitle,
            size = 'm',
            variant = 'default',
            disableBackdropClick = false,
            disableEscapeKeyDown = false,
            disableDrag = false,
            maxHeight = 80,
            animation = 'slide',
            animationDuration = 300,
            zIndex = 1000,
            showBackdrop = true,
            backdropBlur = false,
            backdropOpacity = 0.5,
            stickyHeader = false,
            stickyFooter = false,
            className,
            style,
            header,
            footer,
            children,
            ...props
        },
        forwardedRef
    ) => {
        const [sheetHeight, setSheetHeight] = useState(maxHeight);
        const [isDragging, setIsDragging] = useState(false);
        const [dragStartY, setDragStartY] = useState(0);
        const [dragCurrentY, setDragCurrentY] = useState(0);
        const [isVisible, setIsVisible] = useState(false);

        const sheetRef = useRef<HTMLDivElement>(null);
        const backdropRef = useRef<HTMLDivElement>(null);
        const headerRef = useRef<HTMLDivElement>(null);

        // ESC 키 처리
        const handleKeyDown = useCallback(
            (event: KeyboardEvent) => {
                if (event.key === 'Escape' && !disableEscapeKeyDown && onClose) {
                    onClose();
                }
            },
            [onClose, disableEscapeKeyDown]
        );

        // ESC 키 이벤트 리스너 등록/해제
        useEffect(() => {
            if (open) {
                document.addEventListener('keydown', handleKeyDown);
                // body 스크롤 방지
                document.body.style.overflow = 'hidden';
                // 애니메이션을 위한 지연
                setTimeout(() => setIsVisible(true), 10);
            } else {
                setIsVisible(false);
                document.removeEventListener('keydown', handleKeyDown);
                // body 스크롤 복원
                document.body.style.overflow = '';
            }

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = '';
            };
        }, [open, handleKeyDown]);

        // 드래그 시작
        const handleDragStart = useCallback(
            (event: React.MouseEvent | React.TouchEvent) => {
                if (disableDrag) return;

                setIsDragging(true);
                const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
                setDragStartY(clientY);
                setDragCurrentY(clientY);
            },
            [disableDrag]
        );

        // 드래그 중
        const handleDragMove = useCallback(
            (event: MouseEvent | TouchEvent) => {
                if (!isDragging || disableDrag) return;

                const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
                setDragCurrentY(clientY);
            },
            [isDragging, disableDrag]
        );

        // 드래그 종료
        const handleDragEnd = useCallback(() => {
            if (!isDragging || disableDrag) return;

            setIsDragging(false);
            const dragDistance = dragStartY - dragCurrentY;
            const dragVelocity = Math.abs(dragDistance) / 100; // 드래그 속도 계산
            const threshold = 30; // 드래그 임계값

            // 빠른 제스처 처리 (모바일 스타일)
            if (dragVelocity > 1.5) { // 빠른 제스처
                if (dragDistance < -threshold) {
                    // 빠르게 아래로 드래그 - 바로 닫기
                    if (onClose) {
                        onClose();
                    }
                    return;
                } else if (dragDistance > threshold) {
                    // 빠르게 위로 드래그 - 최대 높이로
                    setSheetHeight(maxHeight);
                    return;
                }
            }

            // 일반적인 드래그 처리 - 드래그한 만큼만 이동
            const newHeight = sheetHeight + (dragDistance / 10); // 드래그 거리에 비례해서 높이 조절
            const clampedHeight = Math.max(20, Math.min(maxHeight, newHeight));
            setSheetHeight(clampedHeight);
        }, [isDragging, disableDrag, dragStartY, dragCurrentY, sheetHeight, maxHeight, onClose]);

        // 마우스/터치 이벤트 리스너 등록/해제
        useEffect(() => {
            if (open && !disableDrag) {
                document.addEventListener('mousemove', handleDragMove);
                document.addEventListener('mouseup', handleDragEnd);
                document.addEventListener('touchmove', handleDragMove);
                document.addEventListener('touchend', handleDragEnd);
            }

            return () => {
                document.removeEventListener('mousemove', handleDragMove);
                document.removeEventListener('mouseup', handleDragEnd);
                document.removeEventListener('touchmove', handleDragMove);
                document.removeEventListener('touchend', handleDragEnd);
            };
        }, [open, disableDrag, handleDragMove, handleDragEnd]);

        // 배경 클릭 처리
        const handleBackdropClick = useCallback(
            (event: React.MouseEvent<HTMLDivElement>) => {
                if (event.target === event.currentTarget && !disableBackdropClick && onClose) {
                    onClose();
                }
            },
            [onClose, disableBackdropClick]
        );

        // 현재 높이 계산 (드래그 중일 때 실시간 반응)
        const dragOffset = isDragging ? (dragStartY - dragCurrentY) / 8 : 0; // 드래그 반응 민감도 (더 부드럽게)
        const finalHeight = Math.max(20, Math.min(maxHeight, sheetHeight + dragOffset));

        const sheetStyle: React.CSSProperties = {
            ...style,
            zIndex: zIndex + 1,
            height: `${finalHeight}%`,
            '--bottom-sheet-animation-duration': `${animationDuration}ms`,
        } as React.CSSProperties;

        const backdropStyle: React.CSSProperties = {
            zIndex,
            '--backdrop-opacity': backdropOpacity,
        } as React.CSSProperties;

        const classes = clsx(
            'designbase-bottom-sheet',
            `designbase-bottom-sheet--${size}`,
            `designbase-bottom-sheet--${variant}`,
            `designbase-bottom-sheet--${animation}`,
            {
                'designbase-bottom-sheet--open': open && isVisible,
                'designbase-bottom-sheet--dragging': isDragging,
                'designbase-bottom-sheet--sticky-header': stickyHeader,
                'designbase-bottom-sheet--sticky-footer': stickyFooter,
            },
            className
        );

        const backdropClasses = clsx(
            'designbase-backdrop',
            'designbase-backdrop--bottom-sheet',
            {
                'designbase-backdrop--open': open && isVisible,
                'designbase-backdrop--blur': backdropBlur,
            }
        );

        // Portal을 사용하여 body에 렌더링
        return createPortal(
            <>
                {/* Backdrop - showBackdrop이 true일 때만 표시 */}
                {showBackdrop && (
                    <div
                        ref={backdropRef}
                        className={backdropClasses}
                        style={backdropStyle}
                        onClick={handleBackdropClick}
                        role="presentation"
                        aria-hidden={!open}
                    />
                )}

                {/* Bottom Sheet */}
                <div
                    ref={forwardedRef}
                    className={classes}
                    style={sheetStyle}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={title ? 'bottom-sheet-title' : undefined}
                    aria-describedby={subtitle ? 'bottom-sheet-subtitle' : undefined}
                    {...props}
                >
                    {/* Handle */}
                    {!disableDrag && (
                        <div
                            className="designbase-bottom-sheet__handle"
                            onMouseDown={handleDragStart}
                            onTouchStart={handleDragStart}
                        />
                    )}

                    {/* Header */}
                    {(title || header) && (
                        <div
                            ref={headerRef}
                            className="designbase-bottom-sheet__header"
                        >
                            {header || (
                                <>
                                    {title && (
                                        <h2
                                            id="bottom-sheet-title"
                                            className="designbase-bottom-sheet__title"
                                        >
                                            {title}
                                        </h2>
                                    )}
                                    {subtitle && (
                                        <p
                                            id="bottom-sheet-subtitle"
                                            className="designbase-bottom-sheet__subtitle"
                                        >
                                            {subtitle}
                                        </p>
                                    )}
                                </>
                            )}
                        </div>
                    )}

                    {/* Content */}
                    <div className="designbase-bottom-sheet__content">
                        {children}
                    </div>

                    {/* Footer */}
                    {footer && (
                        <div className="designbase-bottom-sheet__footer">
                            {footer}
                        </div>
                    )}

                    {/* Snap Points Indicator 제거됨 - 드래그로 직접 조절 */}
                </div>
            </>,
            document.body
        );
    }
);

BottomSheet.displayName = 'BottomSheet';

// Named export 추가
export { BottomSheet };
export default BottomSheet;
