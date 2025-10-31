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
    delay?: number;      // hover show delay
    hideDelay?: number;  // hover hide delay
    alwaysShow?: boolean;
    disabled?: boolean;
    maxWidth?: number;
    showArrow?: boolean;
    className?: string;
    [key: string]: any;
}

const GAP = 8;      // 트리거와의 간격
const ARW = 6;      // 화살표 반쪽 길이(삼각형 변 길이)
const PAD = 8;      // 화살표가 박스 안에서 안전하게 보일 최소 여백

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

    // 위치 계산 (⚠️ 뷰포트 클램핑 후 화살표도 보정)
    const calculatePosition = useCallback(() => {
        if (!triggerRef.current || !tooltipRef.current) return;

        const tRect = triggerRef.current.getBoundingClientRect();
        const pRect = tooltipRef.current.getBoundingClientRect();

        let top = 0, left = 0;
        // 1차: 이상적(미보정) 화살표 좌표
        let aTop = 0, aLeft = 0;

        switch (position) {
            case 'top':
                top = tRect.top - pRect.height - GAP;
                left = tRect.left + tRect.width / 2 - pRect.width / 2;
                aTop = pRect.height;
                aLeft = pRect.width / 2 - ARW;
                break;
            case 'top-start':
                top = tRect.top - pRect.height - GAP;
                left = tRect.left;
                aTop = pRect.height;
                aLeft = PAD;
                break;
            case 'top-end':
                top = tRect.top - pRect.height - GAP;
                left = tRect.right - pRect.width;
                aTop = pRect.height;
                aLeft = pRect.width - PAD;
                break;

            case 'bottom':
                top = tRect.bottom + GAP;
                left = tRect.left + tRect.width / 2 - pRect.width / 2;
                aTop = -ARW;
                aLeft = pRect.width / 2 - ARW;
                break;
            case 'bottom-start':
                top = tRect.bottom + GAP;
                left = tRect.left;
                aTop = -ARW;
                aLeft = PAD;
                break;
            case 'bottom-end':
                top = tRect.bottom + GAP;
                left = tRect.right - pRect.width;
                aTop = -ARW;
                aLeft = pRect.width - PAD;
                break;

            case 'left':
                top = tRect.top + tRect.height / 2 - pRect.height / 2;
                left = tRect.left - pRect.width - GAP;
                aTop = pRect.height / 2 - ARW;
                aLeft = pRect.width;
                break;
            case 'left-start':
                top = tRect.top;
                left = tRect.left - pRect.width - GAP;
                aTop = PAD;
                aLeft = pRect.width;
                break;
            case 'left-end':
                top = tRect.bottom - pRect.height;
                left = tRect.left - pRect.width - GAP;
                aTop = pRect.height - PAD;
                aLeft = pRect.width;
                break;

            case 'right':
                top = tRect.top + tRect.height / 2 - pRect.height / 2;
                left = tRect.right + GAP;
                aTop = pRect.height / 2 - ARW;
                aLeft = -ARW;
                break;
            case 'right-start':
                top = tRect.top;
                left = tRect.right + GAP;
                aTop = PAD;
                aLeft = -ARW;
                break;
            case 'right-end':
                top = tRect.bottom - pRect.height;
                left = tRect.right + GAP;
                aTop = pRect.height - PAD;
                aLeft = -ARW;
                break;
        }

        // 뷰포트 클램핑
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        if (left < 8) left = 8;
        if (left + pRect.width > vw - 8) left = vw - pRect.width - 8;
        if (top < 8) top = 8;
        if (top + pRect.height > vh - 8) top = vh - pRect.height - 8;

        // 🔁 클램핑으로 박스 위치가 바뀌었을 수 있으니, 화살표를 박스 내부에서 다시 보정
        const g = groupOf(position);
        if (g === 'top' || g === 'bottom') {
            // 트리거 중앙 X 를 툴팁 좌표계로 변환
            const triggerCenterX = tRect.left + tRect.width / 2;
            const localX = triggerCenterX - left - ARW; // 화살표 기준점을 고려
            // 8px ~ (width-8px) 범위로 제한
            aLeft = Math.min(pRect.width - PAD, Math.max(PAD, localX));
            // aTop은 이미 위/아래에 고정(-ARW 또는 높이)
        } else {
            const triggerCenterY = tRect.top + tRect.height / 2;
            const localY = triggerCenterY - top - ARW;
            aTop = Math.min(pRect.height - PAD, Math.max(PAD, localY));
            // aLeft는 이미 좌/우에 고정(-ARW 또는 너비)
        }

        setStyle({
            position: 'fixed',
            top,
            left,
            maxWidth,
            zIndex: 9999,
            pointerEvents: 'none', // hover 유지
        });
        setArrowStyle({ position: 'absolute', top: aTop, left: aLeft });
        setPlacementGroup(g);
    }, [position, maxWidth]);

    // 초기 페인트 전에 위치 확정
    useLayoutEffect(() => {
        if (visible || alwaysShow) calculatePosition();
    }, [visible, alwaysShow, calculatePosition]);

    // 스크롤/리사이즈/크기변화 추적 (rAF 스로틀)
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

    // show/hide
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
    useEffect(() => { if (!disabled && alwaysShow) setVisible(true); else if (!alwaysShow) setVisible(false); }, [alwaysShow, disabled]);

    const onKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Escape') { clearTimer(); setVisible(false); }
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
