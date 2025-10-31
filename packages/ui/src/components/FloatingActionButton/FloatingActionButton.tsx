/**
 * FloatingActionButton 컴포넌트
 * 
 * 목적: 화면 우측 하단에 고정된 떠있는 액션 버튼
 * 기능: 다양한 크기와 색상 변형 지원
 * 접근성: 스크린 리더 지원, 키보드 네비게이션, 포커스 표시
 */

import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Spinner from '../Spinner/Spinner';
import './FloatingActionButton.scss';

export type FloatingActionButtonSize = 's' | 'm' | 'l';
export type FloatingActionButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface FloatingActionButtonProps {
    /** 버튼 크기 */
    size?: FloatingActionButtonSize;
    /** 버튼 스타일 변형 */
    variant?: FloatingActionButtonVariant;
    /** 아이콘 */
    icon?: React.ReactNode;
    /** 로딩 상태 */
    loading?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 클릭 시 호출되는 함수 */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 스타일 객체 */
    style?: React.CSSProperties;
    /** 추가 props */
    [key: string]: any;
}

const FloatingActionButton = forwardRef<HTMLButtonElement, FloatingActionButtonProps>(
    (
        {
            size = 'm',
            variant = 'primary',
            icon,
            loading = false,
            disabled = false,
            onClick,
            className,
            style,
            ...props
        },
        forwardedRef
    ) => {
        const classes = clsx(
            'designbase-fab',
            `designbase-fab--${size}`,
            `designbase-fab--${variant}`,
            {
                'designbase-fab--disabled': disabled,
                'designbase-fab--loading': loading,
            },
            className
        );

        return (
            <button
                ref={forwardedRef}
                className={classes}
                style={style}
                onClick={onClick}
                disabled={disabled || loading}
                aria-label="Floating action button"
                aria-busy={loading}
                {...props}
            >
                {loading ? (
                    <div className="designbase-fab__icon">
                        <Spinner type="circular" size="s" />
                    </div>
                ) : icon && (
                    <div className="designbase-fab__icon">
                        {icon}
                    </div>
                )}
            </button>
        );
    }
);

FloatingActionButton.displayName = 'FloatingActionButton';

// Named export 추가
export { FloatingActionButton };
export default FloatingActionButton;
