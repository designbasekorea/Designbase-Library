import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import { CloseIcon } from '@designbase/icons';
import './Drawer.scss';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface DrawerProps {
    /** Drawer가 열려있는지 여부 */
    isOpen: boolean;
    /** Drawer를 닫을 때 호출되는 콜백 */
    onClose: () => void;
    /** Drawer의 제목 */
    title?: string;
    /** Drawer의 내용 */
    children: React.ReactNode;
    /** Drawer의 위치 (기본값: 'right') */
    position?: DrawerPosition;
    /** Drawer의 크기 (기본값: 'md') */
    size?: DrawerSize;
    /** 닫기 버튼을 표시할지 여부 (기본값: true) */
    showCloseButton?: boolean;
    /** 배경 클릭 시 닫기 허용 여부 (기본값: true) */
    closeOnBackdropClick?: boolean;
    /** ESC 키로 닫기 허용 여부 (기본값: true) */
    closeOnEscape?: boolean;
    /** 애니메이션 지속 시간 (ms, 기본값: 300) */
    animationDuration?: number;
    /** 배경 오버레이 표시 여부 (기본값: true) */
    showOverlay?: boolean;
    /** 배경 오버레이 클릭 시 닫기 여부 (기본값: true) */
    overlayClosable?: boolean;
    /** 커스텀 CSS 클래스 */
    className?: string;
    /** 커스텀 스타일 */
    style?: React.CSSProperties;
    /** Drawer의 z-index (기본값: 1000) */
    zIndex?: number;
    /** Drawer가 열릴 때 포커스를 트랩할지 여부 (기본값: true) */
    trapFocus?: boolean;
    /** Drawer의 ID (접근성용) */
    id?: string;
}

const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    title,
    children,
    position = 'right',
    size = 'md',
    showCloseButton = true,
    closeOnBackdropClick = true,
    closeOnEscape = true,
    animationDuration = 300,
    showOverlay = true,
    overlayClosable = true,
    className,
    style,
    zIndex = 1000,
    trapFocus = true,
    id,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const drawerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    // Drawer 열기/닫기 애니메이션 처리
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsAnimating(true);
            
            // 포커스 트랩 설정
            if (trapFocus) {
                previousActiveElement.current = document.activeElement as HTMLElement;
                setTimeout(() => {
                    drawerRef.current?.focus();
                }, 50);
            }

            // ESC 키 이벤트 리스너
            if (closeOnEscape) {
                const handleEscape = (e: KeyboardEvent) => {
                    if (e.key === 'Escape') {
                        onClose();
                    }
                };
                document.addEventListener('keydown', handleEscape);
                return () => document.removeEventListener('keydown', handleEscape);
            }
        } else {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                setIsAnimating(false);
                
                // 포커스 복원
                if (trapFocus && previousActiveElement.current) {
                    previousActiveElement.current.focus();
                }
            }, animationDuration);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose, closeOnEscape, trapFocus, animationDuration]);

    // 배경 클릭 핸들러
    const handleBackdropClick = useCallback((e: React.MouseEvent) => {
        if (overlayClosable && e.target === overlayRef.current) {
            onClose();
        }
    }, [overlayClosable, onClose]);

    // Drawer 클릭 핸들러 (이벤트 전파 방지)
    const handleDrawerClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);

    // 닫기 버튼 핸들러
    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    // Drawer가 보이지 않으면 렌더링하지 않음
    if (!isVisible) {
        return null;
    }

    // 포털을 사용하여 DOM 최상위에 렌더링
    return createPortal(
        <div
            className={clsx(
                'designbase-drawer',
                `designbase-drawer--${position}`,
                `designbase-drawer--${size}`,
                {
                    'designbase-drawer--open': isOpen,
                    'designbase-drawer--animating': isAnimating,
                },
                className
            )}
            style={{
                '--drawer-animation-duration': `${animationDuration}ms`,
                '--drawer-z-index': zIndex,
                ...style,
            } as React.CSSProperties}
            {...props}
        >
            {/* 배경 오버레이 */}
            {showOverlay && (
                <div
                    ref={overlayRef}
                    className={clsx(
                        'designbase-drawer__overlay',
                        {
                            'designbase-drawer__overlay--open': isOpen,
                        }
                    )}
                    onClick={handleBackdropClick}
                    aria-hidden="true"
                />
            )}

            {/* Drawer 컨테이너 */}
            <div
                ref={drawerRef}
                className={clsx(
                    'designbase-drawer__container',
                    `designbase-drawer__container--${position}`,
                    {
                        'designbase-drawer__container--open': isOpen,
                    }
                )}
                onClick={handleDrawerClick}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? `${id || 'drawer'}-title` : undefined}
                aria-describedby={id ? `${id}-content` : undefined}
                tabIndex={-1}
                id={id}
            >
                {/* Drawer 헤더 */}
                {(title || showCloseButton) && (
                    <div className="designbase-drawer__header">
                        {title && (
                            <h2 
                                className="designbase-drawer__title"
                                id={id ? `${id}-title` : undefined}
                            >
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleClose}
                                className="designbase-drawer__close-button"
                                aria-label="닫기"
                            >
                                <CloseIcon />
                            </Button>
                        )}
                    </div>
                )}

                {/* Drawer 내용 */}
                <div 
                    className="designbase-drawer__content"
                    id={id ? `${id}-content` : undefined}
                >
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export { Drawer };
export default Drawer;
