/**
 * FloatingActionButton 컴포넌트
 * 
 * 목적: 화면 위에 떠있는 액션 버튼으로 주요 기능에 빠른 접근 제공
 * 기능: 다양한 크기, 위치, 변형, 애니메이션 효과 지원
 * 접근성: 스크린 리더 지원, 키보드 네비게이션, 포커스 표시
 */

import React, { forwardRef, useState, useCallback } from 'react';
import clsx from 'clsx';
import './FloatingActionButton.scss';

export type FloatingActionButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type FloatingActionButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type FloatingActionButtonPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center';

export interface FloatingActionButtonProps {
    /** 버튼 크기 */
    size?: FloatingActionButtonSize;
    /** 버튼 스타일 변형 */
    variant?: FloatingActionButtonVariant;
    /** 버튼 위치 */
    position?: FloatingActionButtonPosition;
    /** 아이콘 */
    icon?: React.ReactNode;
    /** 라벨 텍스트 */
    label?: string;
    /** 확장된 FAB 여부 */
    extended?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 로딩 상태 */
    loading?: boolean;
    /** 애니메이션 효과 */
    animation?: 'scale' | 'rotate' | 'bounce' | 'pulse' | 'none';
    /** 그림자 효과 */
    elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    /** 클릭 시 호출되는 함수 */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** 마우스 진입 시 호출되는 함수 */
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** 마우스 이탈 시 호출되는 함수 */
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** 포커스 시 호출되는 함수 */
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    /** 블러 시 호출되는 함수 */
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 스타일 객체 */
    style?: React.CSSProperties;
    /** 자식 요소 */
    children?: React.ReactNode;
    /** 추가 props */
    [key: string]: any;
}

const FloatingActionButton = forwardRef<HTMLButtonElement, FloatingActionButtonProps>(
    (
        {
            size = 'md',
            variant = 'primary',
            position = 'bottom-right',
            icon,
            label,
            extended = false,
            disabled = false,
            loading = false,
            animation = 'scale',
            elevation = 'md',
            onClick,
            onMouseEnter,
            onMouseLeave,
            onFocus,
            onBlur,
            className,
            style,
            children,
            ...props
        },
        forwardedRef
    ) => {
        const [isPressed, setIsPressed] = useState(false);
        const [isHovered, setIsHovered] = useState(false);

        // 클릭 핸들러
        const handleClick = useCallback(
            (event: React.MouseEvent<HTMLButtonElement>) => {
                if (disabled || loading) return;
                setIsPressed(false);
                onClick?.(event);
            },
            [disabled, loading, onClick]
        );

        // 마우스 다운 핸들러
        const handleMouseDown = useCallback(() => {
            if (!disabled && !loading) {
                setIsPressed(true);
            }
        }, [disabled, loading]);

        // 마우스 업 핸들러
        const handleMouseUp = useCallback(() => {
            setIsPressed(false);
        }, []);

        // 마우스 진입 핸들러
        const handleMouseEnter = useCallback(
            (event: React.MouseEvent<HTMLButtonElement>) => {
                if (!disabled) {
                    setIsHovered(true);
                    onMouseEnter?.(event);
                }
            },
            [disabled, onMouseEnter]
        );

        // 마우스 이탈 핸들러
        const handleMouseLeave = useCallback(
            (event: React.MouseEvent<HTMLButtonElement>) => {
                setIsHovered(false);
                setIsPressed(false);
                onMouseLeave?.(event);
            },
            [onMouseLeave]
        );

        // 포커스 핸들러
        const handleFocus = useCallback(
            (event: React.FocusEvent<HTMLButtonElement>) => {
                if (!disabled) {
                    onFocus?.(event);
                }
            },
            [disabled, onFocus]
        );

        // 블러 핸들러
        const handleBlur = useCallback(
            (event: React.FocusEvent<HTMLButtonElement>) => {
                setIsHovered(false);
                setIsPressed(false);
                onBlur?.(event);
            },
            [onBlur]
        );

        const classes = clsx(
            'designbase-fab',
            `designbase-fab--${size}`,
            `designbase-fab--${variant}`,
            `designbase-fab--${position}`,
            `designbase-fab--${animation}`,
            `designbase-fab--elevation-${elevation}`,
            {
                'designbase-fab--extended': extended,
                'designbase-fab--disabled': disabled,
                'designbase-fab--loading': loading,
                'designbase-fab--pressed': isPressed,
                'designbase-fab--hovered': isHovered,
            },
            className
        );

        return (
            <button
                ref={forwardedRef}
                className={classes}
                style={style}
                onClick={handleClick}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled || loading}
                aria-label={label || 'Floating action button'}
                {...props}
            >
                {/* 로딩 스피너 */}
                {loading && (
                    <div className="designbase-fab__loading">
                        <div className="designbase-fab__spinner" />
                    </div>
                )}

                {/* 아이콘 */}
                {!loading && icon && (
                    <div className="designbase-fab__icon">
                        {icon}
                    </div>
                )}

                {/* 라벨 (확장된 FAB에서만 표시) */}
                {!loading && extended && label && (
                    <span className="designbase-fab__label">
                        {label}
                    </span>
                )}

                {/* 자식 요소 */}
                {!loading && children && (
                    <div className="designbase-fab__content">
                        {children}
                    </div>
                )}

                {/* 리플 효과 */}
                <div className="designbase-fab__ripple" />
            </button>
        );
    }
);

FloatingActionButton.displayName = 'FloatingActionButton';

// Named export 추가
export { FloatingActionButton };
export default FloatingActionButton;
