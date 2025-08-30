/**
 * Tooltip 컴포넌트
 * 
 * 목적: 요소에 대한 추가 정보를 표시하는 툴팁 제공
 * 기능: 다양한 위치, 크기, 스타일, 지연 시간 설정
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import './Tooltip.scss';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
export type TooltipSize = 'sm' | 'md' | 'lg';
export type TooltipVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface TooltipProps {
    /** 툴팁 내용 */
    content: React.ReactNode;
    /** 툴팁을 표시할 요소 */
    children: React.ReactElement;
    /** 툴팁 위치 */
    position?: TooltipPosition;
    /** 툴팁 크기 */
    size?: TooltipSize;
    /** 툴팁 스타일 */
    variant?: TooltipVariant;
    /** 표시 지연 시간 (ms) */
    delay?: number;
    /** 숨김 지연 시간 (ms) */
    hideDelay?: number;
    /** 항상 표시 여부 */
    alwaysShow?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 최대 너비 */
    maxWidth?: number;
    /** 화살표 표시 여부 */
    showArrow?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = 'top',
    size = 'md',
    variant = 'default',
    delay = 200,
    hideDelay = 0,
    alwaysShow = false,
    disabled = false,
    maxWidth = 200,
    showArrow = true,
    className,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
    const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({});

    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>();

    // 툴팁 위치 계산
    const calculatePosition = useCallback(() => {
        if (!triggerRef.current || !tooltipRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
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
                top = triggerRect.top + scrollY - tooltipRect.height - 8;
                left = triggerRect.left + scrollX + (triggerRect.width / 2) - (tooltipRect.width / 2);
                arrowTop = tooltipRect.height;
                arrowLeft = tooltipRect.width / 2 - 4;
                break;
            case 'top-start':
                top = triggerRect.top + scrollY - tooltipRect.height - 8;
                left = triggerRect.left + scrollX;
                arrowTop = tooltipRect.height;
                arrowLeft = 12;
                break;
            case 'top-end':
                top = triggerRect.top + scrollY - tooltipRect.height - 8;
                left = triggerRect.right + scrollX - tooltipRect.width;
                arrowTop = tooltipRect.height;
                arrowLeft = tooltipRect.width - 12;
                break;
            case 'bottom':
                top = triggerRect.bottom + scrollY + 8;
                left = triggerRect.left + scrollX + (triggerRect.width / 2) - (tooltipRect.width / 2);
                arrowTop = -4;
                arrowLeft = tooltipRect.width / 2 - 4;
                break;
            case 'bottom-start':
                top = triggerRect.bottom + scrollY + 8;
                left = triggerRect.left + scrollX;
                arrowTop = -4;
                arrowLeft = 12;
                break;
            case 'bottom-end':
                top = triggerRect.bottom + scrollY + 8;
                left = triggerRect.right + scrollX - tooltipRect.width;
                arrowTop = -4;
                arrowLeft = tooltipRect.width - 12;
                break;
            case 'left':
                top = triggerRect.top + scrollY + (triggerRect.height / 2) - (tooltipRect.height / 2);
                left = triggerRect.left + scrollX - tooltipRect.width - 8;
                arrowTop = tooltipRect.height / 2 - 4;
                arrowLeft = tooltipRect.width;
                break;
            case 'left-start':
                top = triggerRect.top + scrollY;
                left = triggerRect.left + scrollX - tooltipRect.width - 8;
                arrowTop = 12;
                arrowLeft = tooltipRect.width;
                break;
            case 'left-end':
                top = triggerRect.bottom + scrollY - tooltipRect.height;
                left = triggerRect.left + scrollX - tooltipRect.width - 8;
                arrowTop = tooltipRect.height - 12;
                arrowLeft = tooltipRect.width;
                break;
            case 'right':
                top = triggerRect.top + scrollY + (triggerRect.height / 2) - (tooltipRect.height / 2);
                left = triggerRect.right + scrollX + 8;
                arrowTop = tooltipRect.height / 2 - 4;
                arrowLeft = -4;
                break;
            case 'right-start':
                top = triggerRect.top + scrollY;
                left = triggerRect.right + scrollX + 8;
                arrowTop = 12;
                arrowLeft = -4;
                break;
            case 'right-end':
                top = triggerRect.bottom + scrollY - tooltipRect.height;
                left = triggerRect.right + scrollX + 8;
                arrowTop = tooltipRect.height - 12;
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
        } else if (left + tooltipRect.width > viewportWidth - 8) {
            left = viewportWidth - tooltipRect.width - 8;
            if (isHorizontal) {
                arrowLeft = Math.min(arrowLeft, tooltipRect.width - 4);
            }
        }

        // 수직 경계 체크
        if (top < 8) {
            top = 8;
            if (isVertical) {
                arrowTop = Math.max(arrowTop, 4);
            }
        } else if (top + tooltipRect.height > viewportHeight - 8) {
            top = viewportHeight - tooltipRect.height - 8;
            if (isVertical) {
                arrowTop = Math.min(arrowTop, tooltipRect.height - 4);
            }
        }

        setTooltipStyle({
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

    // 툴팁 표시
    const showTooltip = useCallback(() => {
        if (disabled || alwaysShow) return;

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
            // 위치 계산을 위해 다음 프레임에서 실행
            requestAnimationFrame(() => {
                calculatePosition();
            });
        }, delay);
    }, [disabled, alwaysShow, delay, calculatePosition]);

    // 툴팁 숨김
    const hideTooltip = useCallback(() => {
        if (disabled || alwaysShow) return;

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
        }, hideDelay);
    }, [disabled, alwaysShow, hideDelay]);

    // 이벤트 핸들러 - Tooltip은 항상 hover 기반
    const handleMouseEnter = useCallback(() => {
        showTooltip();
    }, [showTooltip]);

    const handleMouseLeave = useCallback(() => {
        hideTooltip();
    }, [hideTooltip]);

    const handleFocus = useCallback(() => {
        showTooltip();
    }, [showTooltip]);

    const handleBlur = useCallback(() => {
        hideTooltip();
    }, [hideTooltip]);

    // 키보드 이벤트
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            hideTooltip();
        }
    }, [hideTooltip]);

    // 윈도우 리사이즈 및 스크롤 이벤트
    useEffect(() => {
        if (isVisible) {
            const handleResize = () => calculatePosition();
            const handleScroll = () => calculatePosition();

            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll, true);

            return () => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('scroll', handleScroll, true);
            };
        }
    }, [isVisible, calculatePosition]);

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
            setIsVisible(true);
            requestAnimationFrame(() => {
                calculatePosition();
            });
        } else if (!alwaysShow) {
            setIsVisible(false);
        }
    }, [alwaysShow, disabled, calculatePosition]);

    const classes = clsx(
        'designbase-tooltip',
        `designbase-tooltip--${size}`,
        `designbase-tooltip--${variant}`,
        `designbase-tooltip--${position}`,
        {
            'designbase-tooltip--visible': isVisible,
            'designbase-tooltip--disabled': disabled,
        },
        className
    );

    const arrowClasses = clsx(
        'designbase-tooltip__arrow',
        `designbase-tooltip__arrow--${position}`
    );

    // 자식 요소에 이벤트 핸들러 추가
    const enhancedChildren = React.cloneElement(children, {
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        onMouseDown: (e: React.MouseEvent) => {
            // 클릭으로 인한 focus 방지 (hover 전용 보장)
            e.preventDefault();
        },
        tabIndex: children.props.tabIndex ?? 0,
    });

    return (
        <>
            {enhancedChildren}
            {isVisible && (
                <div
                    ref={tooltipRef}
                    className={classes}
                    style={tooltipStyle}
                    role="tooltip"
                    aria-hidden={!isVisible}
                    {...props}
                >
                    <div className="designbase-tooltip__content">
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

Tooltip.displayName = 'Tooltip';

export default Tooltip;
