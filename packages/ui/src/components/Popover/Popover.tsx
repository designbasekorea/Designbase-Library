/**
 * Popover 컴포넌트
 * 
 * 목적: 요소에 대한 추가 콘텐츠를 표시하는 팝오버 제공
 * 기능: 다양한 위치, 크기, 스타일, 클릭/호버 트리거
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import './Popover.scss';

export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
export type PopoverSize = 'sm' | 'md' | 'lg';
export type PopoverVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type PopoverTrigger = 'click' | 'hover' | 'focus' | 'manual';

export interface PopoverProps {
    /** 팝오버 내용 */
    content: React.ReactNode;
    /** 팝오버를 표시할 요소 */
    children: React.ReactElement;
    /** 팝오버 위치 */
    position?: PopoverPosition;
    /** 팝오버 크기 */
    size?: PopoverSize;
    /** 팝오버 스타일 */
    variant?: PopoverVariant;
    /** 트리거 방식 */
    trigger?: PopoverTrigger;
    /** 표시 지연 시간 (ms) - hover 트리거용 */
    delay?: number;
    /** 숨김 지연 시간 (ms) - hover 트리거용 */
    hideDelay?: number;
    /** 항상 표시 여부 */
    alwaysShow?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 최대 너비 */
    maxWidth?: number;
    /** 화살표 표시 여부 */
    showArrow?: boolean;
    /** 배경 클릭 시 닫기 여부 */
    closeOnOutsideClick?: boolean;
    /** ESC 키로 닫기 여부 */
    closeOnEscape?: boolean;
    /** 팝오버 열림 상태 */
    open?: boolean;
    /** 팝오버 열림/닫힘 핸들러 */
    onOpenChange?: (open: boolean) => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Popover: React.FC<PopoverProps> = ({
    content,
    children,
    position = 'top',
    size = 'md',
    variant = 'default',
    trigger = 'click',
    delay = 200,
    hideDelay = 0,
    alwaysShow = false,
    disabled = false,
    maxWidth = 300,
    showArrow = true,
    closeOnOutsideClick = true,
    closeOnEscape = true,
    open: controlledOpen,
    onOpenChange,
    className,
    ...props
}) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({});
    const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({});

    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>();

    // 제어/비제어 컴포넌트 처리
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : internalOpen;

    // 팝오버 위치 계산
    const calculatePosition = useCallback(() => {
        if (!triggerRef.current || !popoverRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const popoverRect = popoverRef.current.getBoundingClientRect();
        const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        let top = 0;
        let left = 0;
        let arrowTop = 0;
        let arrowLeft = 0;

        const isVertical = position.startsWith('top') || position.startsWith('bottom');
        const isHorizontal = position.startsWith('left') || position.startsWith('right');

        switch (position) {
            case 'top':
                top = triggerRect.top + scrollY - popoverRect.height - 8;
                left = triggerRect.left + scrollX + (triggerRect.width / 2) - (popoverRect.width / 2);
                arrowTop = popoverRect.height;
                arrowLeft = popoverRect.width / 2 - 4;
                break;
            case 'top-start':
                top = triggerRect.top + scrollY - popoverRect.height - 8;
                left = triggerRect.left + scrollX;
                arrowTop = popoverRect.height;
                arrowLeft = 12;
                break;
            case 'top-end':
                top = triggerRect.top + scrollY - popoverRect.height - 8;
                left = triggerRect.right + scrollX - popoverRect.width;
                arrowTop = popoverRect.height;
                arrowLeft = popoverRect.width - 12;
                break;
            case 'bottom':
                top = triggerRect.bottom + scrollY + 8;
                left = triggerRect.left + scrollX + (triggerRect.width / 2) - (popoverRect.width / 2);
                arrowTop = -4;
                arrowLeft = popoverRect.width / 2 - 4;
                break;
            case 'bottom-start':
                top = triggerRect.bottom + scrollY + 8;
                left = triggerRect.left + scrollX;
                arrowTop = -4;
                arrowLeft = 12;
                break;
            case 'bottom-end':
                top = triggerRect.bottom + scrollY + 8;
                left = triggerRect.right + scrollX - popoverRect.width;
                arrowTop = -4;
                arrowLeft = popoverRect.width - 12;
                break;
            case 'left':
                top = triggerRect.top + scrollY + (triggerRect.height / 2) - (popoverRect.height / 2);
                left = triggerRect.left + scrollX - popoverRect.width - 8;
                arrowTop = popoverRect.height / 2 - 4;
                arrowLeft = popoverRect.width;
                break;
            case 'left-start':
                top = triggerRect.top + scrollY;
                left = triggerRect.left + scrollX - popoverRect.width - 8;
                arrowTop = 12;
                arrowLeft = popoverRect.width;
                break;
            case 'left-end':
                top = triggerRect.bottom + scrollY - popoverRect.height;
                left = triggerRect.left + scrollX - popoverRect.width - 8;
                arrowTop = popoverRect.height - 12;
                arrowLeft = popoverRect.width;
                break;
            case 'right':
                top = triggerRect.top + scrollY + (triggerRect.height / 2) - (popoverRect.height / 2);
                left = triggerRect.right + scrollX + 8;
                arrowTop = popoverRect.height / 2 - 4;
                arrowLeft = -4;
                break;
            case 'right-start':
                top = triggerRect.top + scrollY;
                left = triggerRect.right + scrollX + 8;
                arrowTop = 12;
                arrowLeft = -4;
                break;
            case 'right-end':
                top = triggerRect.bottom + scrollY - popoverRect.height;
                left = triggerRect.right + scrollX + 8;
                arrowTop = popoverRect.height - 12;
                arrowLeft = -4;
                break;
        }

        // 화면 경계 체크 및 조정
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // 수평 경계 체크
        if (left < 8) {
            left = 8;
            if (isHorizontal) {
                arrowLeft = Math.max(arrowLeft, 4);
            }
        } else if (left + popoverRect.width > viewportWidth - 8) {
            left = viewportWidth - popoverRect.width - 8;
            if (isHorizontal) {
                arrowLeft = Math.min(arrowLeft, popoverRect.width - 4);
            }
        }

        // 수직 경계 체크
        if (top < 8) {
            top = 8;
            if (isVertical) {
                arrowTop = Math.max(arrowTop, 4);
            }
        } else if (top + popoverRect.height > viewportHeight - 8) {
            top = viewportHeight - popoverRect.height - 8;
            if (isVertical) {
                arrowTop = Math.min(arrowTop, popoverRect.height - 4);
            }
        }

        setPopoverStyle({
            position: 'fixed',
            top: `${top}px`,
            left: `${left}px`,
            maxWidth: `${maxWidth}px`,
            zIndex: 9999,
        });

        setArrowStyle({
            position: 'absolute',
            top: `${arrowTop}px`,
            left: `${arrowLeft}px`,
        });
    }, [position, maxWidth]);

    // 팝오버 열기
    const openPopover = useCallback(() => {
        if (disabled || alwaysShow) return;

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            const newOpen = true;
            if (!isControlled) {
                setInternalOpen(newOpen);
            }
            onOpenChange?.(newOpen);

            // 위치 계산을 위해 다음 프레임에서 실행
            requestAnimationFrame(() => {
                calculatePosition();
            });
        }, trigger === 'hover' ? delay : 0);
    }, [disabled, alwaysShow, isControlled, onOpenChange, calculatePosition, trigger, delay]);

    // 팝오버 닫기
    const closePopover = useCallback(() => {
        if (disabled || alwaysShow) return;

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            const newOpen = false;
            if (!isControlled) {
                setInternalOpen(newOpen);
            }
            onOpenChange?.(newOpen);
        }, trigger === 'hover' ? hideDelay : 0);
    }, [disabled, alwaysShow, isControlled, onOpenChange, trigger, hideDelay]);

    // 이벤트 핸들러
    const handleClick = useCallback((e: React.MouseEvent) => {
        if (trigger === 'click') {
            e.preventDefault();
            e.stopPropagation();
            if (isOpen) {
                closePopover();
            } else {
                openPopover();
            }
        }
    }, [trigger, isOpen, openPopover, closePopover]);

    const handleMouseEnter = useCallback(() => {
        if (trigger === 'hover') {
            openPopover();
        }
    }, [trigger, openPopover]);

    const handleMouseLeave = useCallback(() => {
        if (trigger === 'hover') {
            closePopover();
        }
    }, [trigger, closePopover]);

    const handleFocus = useCallback(() => {
        if (trigger === 'focus') {
            openPopover();
        }
    }, [trigger, openPopover]);

    const handleBlur = useCallback(() => {
        if (trigger === 'focus') {
            closePopover();
        }
    }, [trigger, closePopover]);

    // 키보드 이벤트
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Escape' && closeOnEscape) {
            closePopover();
        }
    }, [closeOnEscape, closePopover]);

    // 외부 클릭 처리
    useEffect(() => {
        if (isOpen && closeOnOutsideClick) {
            const handleOutsideClick = (e: MouseEvent) => {
                if (
                    triggerRef.current &&
                    popoverRef.current &&
                    !triggerRef.current.contains(e.target as Node) &&
                    !popoverRef.current.contains(e.target as Node)
                ) {
                    closePopover();
                }
            };

            document.addEventListener('mousedown', handleOutsideClick);
            return () => {
                document.removeEventListener('mousedown', handleOutsideClick);
            };
        }
    }, [isOpen, closeOnOutsideClick, closePopover]);

    // 윈도우 리사이즈 및 스크롤 이벤트
    useEffect(() => {
        if (isOpen) {
            const handleResize = () => calculatePosition();
            const handleScroll = () => calculatePosition();

            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll, true);

            return () => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('scroll', handleScroll, true);
            };
        }
    }, [isOpen, calculatePosition]);

    // 컴포넌트 언마운트 시 타이머 정리
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // 항상 표시 모드
    useEffect(() => {
        if (alwaysShow && !disabled) {
            const newOpen = true;
            if (!isControlled) {
                setInternalOpen(newOpen);
            }
            onOpenChange?.(newOpen);
            requestAnimationFrame(() => {
                calculatePosition();
            });
        } else if (!alwaysShow) {
            const newOpen = false;
            if (!isControlled) {
                setInternalOpen(newOpen);
            }
            onOpenChange?.(newOpen);
        }
    }, [alwaysShow, disabled, isControlled, onOpenChange, calculatePosition]);

    const classes = clsx(
        'designbase-popover',
        `designbase-popover--${size}`,
        `designbase-popover--${variant}`,
        `designbase-popover--${position}`,
        {
            'designbase-popover--visible': isOpen,
            'designbase-popover--disabled': disabled,
        },
        className
    );

    const arrowClasses = clsx(
        'designbase-popover__arrow',
        `designbase-popover__arrow--${position}`
    );

    // 자식 요소에 이벤트 핸들러 추가
    const enhancedChildren = React.cloneElement(children, {
        ref: triggerRef,
        onClick: handleClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        tabIndex: children.props.tabIndex ?? 0,
        'aria-expanded': isOpen,
        'aria-haspopup': 'dialog',
    });

    return (
        <>
            {enhancedChildren}
            {isOpen && (
                <div
                    ref={popoverRef}
                    className={classes}
                    style={popoverStyle}
                    role="dialog"
                    aria-modal="false"
                    {...props}
                >
                    <div className="designbase-popover__content">
                        {content}
                    </div>
                    {showArrow && (
                        <div
                            className={arrowClasses}
                            style={arrowStyle}
                        />
                    )}
                </div>
            )}
        </>
    );
};

Popover.displayName = 'Popover';

export default Popover;
