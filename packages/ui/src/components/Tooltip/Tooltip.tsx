import React, { useState, useRef, useLayoutEffect, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import './Tooltip.scss';

export type TooltipPosition =
    | 'top' | 'bottom' | 'left' | 'right'
    | 'top-start' | 'top-end'
    | 'bottom-start' | 'bottom-end'
    | 'left-start' | 'left-end'
    | 'right-start' | 'right-end';

export type TooltipSize = 's' | 'm' | 'l';
export type TooltipVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactElement;
    position?: TooltipPosition;
    size?: TooltipSize;
    variant?: TooltipVariant;
    delay?: number;
    hideDelay?: number;
    alwaysShow?: boolean;
    disabled?: boolean;
    maxWidth?: number;
    showArrow?: boolean;
    className?: string;
    [key: string]: any;
}

const GAP = 8;      // 트리거와의 간격(박스)
const ARW = 6;      // border 삼각형 사이즈(너 SCSS에서 6px)
const PAD = 8;      // start/end 여백

// ✅ 네가 말한 “-10이 되어야 제대로”를 상수로 고정
const OUT = -10;    // bottom일 때 top, right일 때 left

// ✅ top/left는 대칭적으로 “박스에 살짝 겹치게” 만들어 seam 제거
const INSET = 2;    // (pRect.height - 2), (pRect.width - 2)

export const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = 'top',
    size = 'm',
    variant = 'default',
    delay = 200,
    hideDelay = 80,
    alwaysShow = false,
    disabled = false,
    maxWidth = 240,
    showArrow = true,
    className,
    ...props
}) => {
    const [visible, setVisible] = useState(false);
    const [style, setStyle] = useState<React.CSSProperties>({});
    const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({});
    const [placementGroup, setPlacementGroup] = useState<'top' | 'bottom' | 'left' | 'right'>('top');

    const triggerRef = useRef<HTMLSpanElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const timers = useRef<{ t?: ReturnType<typeof setTimeout> }>({});
    const rafId = useRef<number | null>(null);

    const clearTimer = () => {
        if (timers.current.t) {
            clearTimeout(timers.current.t);
            timers.current.t = undefined;
        }
    };

    const groupOf = (p: TooltipPosition) =>
        p.startsWith('top') ? 'top' :
            p.startsWith('bottom') ? 'bottom' :
                p.startsWith('left') ? 'left' : 'right';

    const calculatePosition = useCallback(() => {
        if (!triggerRef.current || !tooltipRef.current) return;

        const tRect = triggerRef.current.getBoundingClientRect();
        const pRect = tooltipRef.current.getBoundingClientRect();

        let top = 0, left = 0;
        let aTop = 0, aLeft = 0;

        switch (position) {
            case 'top':
                top = tRect.top - pRect.height - GAP;
                left = tRect.left + tRect.width / 2 - pRect.width / 2;
                aTop = pRect.height - INSET;                 // ✅ top은 박스 아래쪽에 살짝 겹침
                aLeft = pRect.width / 2 - ARW;
                break;

            case 'top-start':
                top = tRect.top - pRect.height - GAP;
                left = tRect.left;
                aTop = pRect.height - INSET;
                aLeft = PAD;
                break;

            case 'top-end':
                top = tRect.top - pRect.height - GAP;
                left = tRect.right - pRect.width;
                aTop = pRect.height - INSET;
                aLeft = pRect.width - PAD - ARW;
                break;

            case 'bottom':
                top = tRect.bottom + GAP;
                left = tRect.left + tRect.width / 2 - pRect.width / 2;
                aTop = OUT;                                  // ✅ 네 요구: -10
                aLeft = pRect.width / 2 - ARW;
                break;

            case 'bottom-start':
                top = tRect.bottom + GAP;
                left = tRect.left;
                aTop = OUT;                                  // ✅ -10
                aLeft = PAD;
                break;

            case 'bottom-end':
                top = tRect.bottom + GAP;
                left = tRect.right - pRect.width;
                aTop = OUT;                                  // ✅ -10
                aLeft = pRect.width - PAD - ARW;
                break;

            case 'left':
                top = tRect.top + tRect.height / 2 - pRect.height / 2;
                left = tRect.left - pRect.width - GAP;
                aTop = pRect.height / 2 - ARW;
                aLeft = pRect.width - INSET;                 // ✅ left는 박스 오른쪽에 살짝 겹침
                break;

            case 'left-start':
                top = tRect.top;
                left = tRect.left - pRect.width - GAP;
                aTop = PAD;
                aLeft = pRect.width - INSET;
                break;

            case 'left-end':
                top = tRect.bottom - pRect.height;
                left = tRect.left - pRect.width - GAP;
                aTop = pRect.height - PAD - ARW;
                aLeft = pRect.width - INSET;
                break;

            case 'right':
                top = tRect.top + tRect.height / 2 - pRect.height / 2;
                left = tRect.right + GAP;
                aTop = pRect.height / 2 - ARW;
                aLeft = OUT;                                 // ✅ 네 요구: left:-10
                break;

            case 'right-start':
                top = tRect.top;
                left = tRect.right + GAP;
                aTop = PAD;
                aLeft = OUT;                                 // ✅ -10
                break;

            case 'right-end':
                top = tRect.bottom - pRect.height;
                left = tRect.right + GAP;
                aTop = pRect.height - PAD - ARW;
                aLeft = OUT;                                 // ✅ -10
                break;
        }

        // 뷰포트 클램핑(툴팁 박스)
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const EDGE = 8;
        if (left < EDGE) left = EDGE;
        if (left + pRect.width > vw - EDGE) left = vw - pRect.width - EDGE;
        if (top < EDGE) top = EDGE;
        if (top + pRect.height > vh - EDGE) top = vh - pRect.height - EDGE;

        // 클램핑으로 박스가 이동했을 때, 화살표가 트리거를 향하도록 보정
        const g = groupOf(position);
        if (g === 'top' || g === 'bottom') {
            const triggerCenterX = tRect.left + tRect.width / 2;
            const localX = triggerCenterX - left - ARW;
            aLeft = Math.min(pRect.width - PAD - ARW, Math.max(PAD, localX));
        } else {
            const triggerCenterY = tRect.top + tRect.height / 2;
            const localY = triggerCenterY - top - ARW;
            aTop = Math.min(pRect.height - PAD - ARW, Math.max(PAD, localY));
        }

        setStyle({
            position: 'fixed',
            top,
            left,
            maxWidth,
            zIndex: 9999,
            pointerEvents: 'none',
        });

        setArrowStyle({ position: 'absolute', top: aTop, left: aLeft });
        setPlacementGroup(g);
    }, [position, maxWidth]);

    useLayoutEffect(() => {
        if (visible || alwaysShow) calculatePosition();
    }, [visible, alwaysShow, calculatePosition]);

    useEffect(() => {
        if (!(visible || alwaysShow)) return;

        const onMove = () => {
            if (rafId.current != null) cancelAnimationFrame(rafId.current);
            rafId.current = requestAnimationFrame(() => {
                calculatePosition();
                rafId.current = null;
            });
        };

        window.addEventListener('scroll', onMove, { capture: true, passive: true });
        window.addEventListener('resize', onMove, { passive: true });

        let ro: ResizeObserver | null = null;
        const ResizeObs = (window as any).ResizeObserver as typeof ResizeObserver | undefined;
        if (ResizeObs) {
            ro = new ResizeObs(() => onMove());
            if (tooltipRef.current) ro.observe(tooltipRef.current);
            if (triggerRef.current) ro.observe(triggerRef.current);
        }

        return () => {
            window.removeEventListener('scroll', onMove, { capture: true } as any);
            window.removeEventListener('resize', onMove);
            ro?.disconnect?.();
            if (rafId.current != null) cancelAnimationFrame(rafId.current);
        };
    }, [visible, alwaysShow, calculatePosition]);

    const show = useCallback(() => {
        if (disabled) return;
        clearTimer();
        timers.current.t = setTimeout(() => setVisible(true), Math.max(0, delay));
    }, [disabled, delay]);

    const hide = useCallback(() => {
        if (disabled) return;
        clearTimer();
        timers.current.t = setTimeout(() => setVisible(false), Math.max(0, hideDelay));
    }, [disabled, hideDelay]);

    useEffect(() => () => clearTimer(), []);
    useEffect(() => {
        if (!disabled && alwaysShow) setVisible(true);
        else if (!alwaysShow) setVisible(false);
    }, [alwaysShow, disabled]);

    const onKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            clearTimer();
            setVisible(false);
        }
    }, []);

    const classes = clsx(
        'designbase-tooltip',
        `designbase-tooltip--${size}`,
        `designbase-tooltip--${variant}`,
        `designbase-tooltip--${position}`,
        { 'designbase-tooltip--visible': visible || alwaysShow, 'designbase-tooltip--disabled': disabled },
        className
    );

    const arrowClasses = clsx('designbase-tooltip__arrow', `designbase-tooltip__arrow--${position}`);

    return (
        <>
            <span
                ref={triggerRef}
                className="designbase-tooltip__trigger"
                onMouseEnter={show}
                onMouseLeave={hide}
                onFocus={show}
                onBlur={hide}
                onKeyDown={onKeyDown}
                tabIndex={0}
                aria-describedby={visible || alwaysShow ? 'db-tooltip' : undefined}
            >
                {children}
            </span>

            {(visible || alwaysShow) && (
                <div
                    ref={tooltipRef}
                    className={classes}
                    style={style}
                    role="tooltip"
                    id="db-tooltip"
                    aria-hidden={!(visible || alwaysShow)}
                    data-placement-group={placementGroup}
                    {...props}
                >
                    <div className="designbase-tooltip__content">
                        {content}
                    </div>
                    {showArrow && <div className={arrowClasses} style={arrowStyle} />}
                </div>
            )}
        </>
    );
};

Tooltip.displayName = 'Tooltip';
export default Tooltip;
