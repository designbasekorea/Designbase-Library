import React, { useState, useRef, useLayoutEffect, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import { CloseIcon } from '@designbasekorea/icons';
import './Popover.scss';

export type PopoverPosition =
    | 'top' | 'bottom' | 'left' | 'right'
    | 'top-start' | 'top-end'
    | 'bottom-start' | 'bottom-end'
    | 'left-start' | 'left-end'
    | 'right-start' | 'right-end';

export type PopoverSize = 's' | 'm' | 'l';
export type PopoverVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type PopoverTrigger = 'click' | 'hover' | 'focus' | 'manual';

export interface PopoverProps {
    content: React.ReactNode;
    children: React.ReactElement;
    title?: string;
    position?: PopoverPosition;
    size?: PopoverSize;
    variant?: PopoverVariant;
    trigger?: PopoverTrigger;
    delay?: number;        // hover show delay
    hideDelay?: number;    // hover hide delay
    alwaysShow?: boolean;
    disabled?: boolean;
    maxWidth?: number;
    showArrow?: boolean;
    closeOnOutsideClick?: boolean;
    closeOnEscape?: boolean;
    open?: boolean;                        // controlled
    onOpenChange?: (open: boolean) => void;
    className?: string;
    [key: string]: any;
}

const GAP = 8; // trigger와 popover 사이 간격

export const Popover: React.FC<PopoverProps> = ({
    content,
    children,
    title,
    position = 'top',
    size = 'm',
    variant = 'default',
    trigger = 'click',
    delay = 0,           // 클릭/포커스는 즉시, 호버는 아래에서만 적용
    hideDelay = 80,
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
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? !!controlledOpen : internalOpen;

    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const [style, setStyle] = useState<React.CSSProperties>({});
    const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({});
    const [placementGroup, setPlacementGroup] = useState<'top' | 'bottom' | 'left' | 'right'>('top'); // 애니메이션 방향용
    const rafId = useRef<number | null>(null);
    const timers = useRef<{ t?: ReturnType<typeof setTimeout> }>({});

    // ----- 위치 계산 ----------------------------------------------------------
    const calculatePosition = useCallback(() => {
        if (!triggerRef.current || !popoverRef.current) return;

        const tRect = triggerRef.current.getBoundingClientRect();
        const pRect = popoverRef.current.getBoundingClientRect();

        // fixed 기준 → 스크롤값 불필요
        let top = 0, left = 0;
        let aTop = 0, aLeft = 0;

        const setGroup = (p: PopoverPosition) => {
            if (p.startsWith('top')) return 'top';
            if (p.startsWith('bottom')) return 'bottom';
            if (p.startsWith('left')) return 'left';
            return 'right';
        };

        switch (position) {
            case 'top':
                top = tRect.top - pRect.height - GAP;
                left = tRect.left + tRect.width / 2 - pRect.width / 2;
                aTop = pRect.height;
                aLeft = pRect.width / 2 - 4;
                break;
            case 'top-start':
                top = tRect.top - pRect.height - GAP;
                left = tRect.left;
                aTop = pRect.height; aLeft = 12;
                break;
            case 'top-end':
                top = tRect.top - pRect.height - GAP;
                left = tRect.right - pRect.width;
                aTop = pRect.height; aLeft = pRect.width - 12;
                break;
            case 'bottom':
                top = tRect.bottom + GAP;
                left = tRect.left + tRect.width / 2 - pRect.width / 2;
                aTop = -4; aLeft = pRect.width / 2 - 4;
                break;
            case 'bottom-start':
                top = tRect.bottom + GAP;
                left = tRect.left;
                aTop = -4; aLeft = 12;
                break;
            case 'bottom-end':
                top = tRect.bottom + GAP;
                left = tRect.right - pRect.width;
                aTop = -4; aLeft = pRect.width - 12;
                break;
            case 'left':
                top = tRect.top + tRect.height / 2 - pRect.height / 2;
                left = tRect.left - pRect.width - GAP;
                aTop = pRect.height / 2 - 4; aLeft = pRect.width;
                break;
            case 'left-start':
                top = tRect.top;
                left = tRect.left - pRect.width - GAP;
                aTop = 12; aLeft = pRect.width;
                break;
            case 'left-end':
                top = tRect.bottom - pRect.height;
                left = tRect.left - pRect.width - GAP;
                aTop = pRect.height - 12; aLeft = pRect.width;
                break;
            case 'right':
                top = tRect.top + tRect.height / 2 - pRect.height / 2;
                left = tRect.right + GAP;
                aTop = pRect.height / 2 - 4; aLeft = -4;
                break;
            case 'right-start':
                top = tRect.top;
                left = tRect.right + GAP;
                aTop = 12; aLeft = -4;
                break;
            case 'right-end':
                top = tRect.bottom - pRect.height;
                left = tRect.right + GAP;
                aTop = pRect.height - 12; aLeft = -4;
                break;
        }

        // viewport 충돌 보정(살짝 shift)
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        if (left < 8) left = 8;
        if (left + pRect.width > vw - 8) left = vw - pRect.width - 8;
        if (top < 8) top = 8;
        if (top + pRect.height > vh - 8) top = vh - pRect.height - 8;

        setStyle({
            position: 'fixed',
            top,
            left,
            maxWidth,
            zIndex: 9999,
        });

        setArrowStyle({ position: 'absolute', top: aTop, left: aLeft });
        setPlacementGroup(setGroup(position));
    }, [position, maxWidth]);

    // 첫 페인트 전에 위치를 확정 (깜빡임/점프 제거)
    useLayoutEffect(() => {
        if (isOpen) {
            calculatePosition();
        }
    }, [isOpen, calculatePosition]);

    // 스크롤/리사이즈는 rAF에 태워 스로틀
    useEffect(() => {
        if (!isOpen) return;
        const onMove = () => {
            if (rafId.current != null) cancelAnimationFrame(rafId.current);
            rafId.current = requestAnimationFrame(() => {
                calculatePosition();
                rafId.current = null;
            });
        };
        window.addEventListener('scroll', onMove, { passive: true, capture: true });
        window.addEventListener('resize', onMove, { passive: true });

        // 컨텐츠/트리거 크기 변화 추적
        const ResizeObserver = (window as any).ResizeObserver;
        const ro = ResizeObserver ? new ResizeObserver(() => onMove()) : null;
        if (ro) {
            if (triggerRef.current) ro.observe(triggerRef.current);
            if (popoverRef.current) ro.observe(popoverRef.current);
        }

        return () => {
            window.removeEventListener('scroll', onMove, true as any);
            window.removeEventListener('resize', onMove);
            if (rafId.current != null) cancelAnimationFrame(rafId.current);
            ro?.disconnect?.();
        };
    }, [isOpen, calculatePosition]);

    // open/close helpers
    const setOpen = useCallback((next: boolean) => {
        if (!isControlled) setInternalOpen(next);
        onOpenChange?.(next);
    }, [isControlled, onOpenChange]);

    const openPopover = useCallback(() => {
        if (disabled || alwaysShow) return;
        if (timers.current.t) clearTimeout(timers.current.t);
        const d = trigger === 'hover' ? Math.max(0, delay) : 0;
        timers.current.t = setTimeout(() => {
            setOpen(true);
        }, d);
    }, [trigger, delay, disabled, alwaysShow, setOpen]);

    const closePopover = useCallback(() => {
        if (disabled || alwaysShow) return;
        if (timers.current.t) clearTimeout(timers.current.t);
        const d = trigger === 'hover' ? Math.max(0, hideDelay) : 0;
        timers.current.t = setTimeout(() => {
            setOpen(false);
        }, d);
    }, [trigger, hideDelay, disabled, alwaysShow, setOpen]);

    // 트리거 이벤트
    const handleClick = useCallback((e: React.MouseEvent) => {
        if (trigger !== 'click') return;
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closePopover() : openPopover();
    }, [trigger, isOpen, openPopover, closePopover]);

    const handleMouseEnter = useCallback(() => {
        if (trigger === 'hover') openPopover();
    }, [trigger, openPopover]);

    const handleMouseLeave = useCallback(() => {
        if (trigger === 'hover') closePopover();
    }, [trigger, closePopover]);

    const handleFocus = useCallback(() => {
        if (trigger === 'focus') openPopover();
    }, [trigger, openPopover]);

    const handleBlur = useCallback(() => {
        if (trigger === 'focus') closePopover();
    }, [trigger, closePopover]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Escape' && closeOnEscape) closePopover();
    }, [closeOnEscape, closePopover]);

    const handleCloseClick = useCallback(() => {
        closePopover();
    }, [closePopover]);

    // 외부 클릭 닫기
    useEffect(() => {
        if (!isOpen || !closeOnOutsideClick) return;
        const onDown = (e: MouseEvent) => {
            if (!triggerRef.current || !popoverRef.current) return;
            const t = e.target as Node;
            if (!triggerRef.current.contains(t) && !popoverRef.current.contains(t)) {
                closePopover();
            }
        };
        document.addEventListener('mousedown', onDown);
        return () => document.removeEventListener('mousedown', onDown);
    }, [isOpen, closeOnOutsideClick, closePopover]);

    // alwaysShow 모드 동기화
    useEffect(() => {
        if (disabled) return;
        if (alwaysShow) setOpen(true);
        else if (!isControlled) setOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alwaysShow, disabled]);

    useEffect(() => () => { if (timers.current.t) clearTimeout(timers.current.t); }, []);

    const classes = clsx(
        'designbase-popover',
        `designbase-popover--${size}`,
        `designbase-popover--${variant}`,
        `designbase-popover--${position}`,
        { 'designbase-popover--visible': isOpen, 'designbase-popover--disabled': disabled },
        className
    );

    const arrowClasses = clsx('designbase-popover__arrow', `designbase-popover__arrow--${position}`);

    // 자식에 트리거 이벤트 주입
    const childProps = children.props as any;
    const enhancedChildren = React.cloneElement(children as React.ReactElement<any>, {
        ref: triggerRef,
        onClick: (e: any) => { childProps.onClick?.(e); handleClick(e); },
        onMouseEnter: (e: any) => { childProps.onMouseEnter?.(e); handleMouseEnter(); },
        onMouseLeave: (e: any) => { childProps.onMouseLeave?.(e); handleMouseLeave(); },
        onFocus: (e: any) => { childProps.onFocus?.(e); handleFocus(); },
        onBlur: (e: any) => { childProps.onBlur?.(e); handleBlur(); },
        onKeyDown: (e: any) => { childProps.onKeyDown?.(e); handleKeyDown(e); },
        tabIndex: childProps.tabIndex ?? 0,
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
                    style={style}
                    role="dialog"
                    aria-modal="false"
                    data-placement-group={placementGroup}  // 애니메이션 방향용
                    {...props}
                >
                    <div className="designbase-popover__content">
                        {(title || true) && (
                            <div className="designbase-popover__header">
                                {title && (
                                    <h3 className="designbase-popover__title">
                                        {title}
                                    </h3>
                                )}
                                <Button
                                    size="s"
                                    variant="tertiary"
                                    iconOnly={true}
                                    onPress={handleCloseClick}
                                    aria-label="팝오버 닫기"
                                    className="designbase-popover__close-button"
                                >
                                    <CloseIcon />
                                </Button>
                            </div>
                        )}
                        <div className="designbase-popover__body">
                            {content}
                        </div>
                    </div>
                    {showArrow && <div className={arrowClasses} style={arrowStyle} />}
                </div>
            )}
        </>
    );
};

Popover.displayName = 'Popover';
export default Popover;
