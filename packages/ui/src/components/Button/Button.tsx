/**
 * Button 컴포넌트
 * 
 * 목적: 일관된 스타일과 접근성을 가진 버튼 컴포넌트 제공
 * 기능: 다양한 variant, size, state 지원, 아이콘 버튼, 로딩 상태
 * 접근성: WAI-ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { forwardRef } from 'react';
import { useButton } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';
import clsx from 'clsx';
import type { BaseIconProps } from '@designbase/icons';
import { Spinner } from '../Spinner/Spinner';
import './Button.scss';

export interface ButtonProps {
    /** 버튼 variant */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
    /** 버튼 크기 */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** 둥글기 variant */
    radius?: 'sm' | 'md' | 'lg' | 'pill';
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 로딩 상태 */
    loading?: boolean;
    /** 아이콘 전용 버튼 여부 */
    iconOnly?: boolean;
    /** 시작 아이콘 */
    startIcon?: React.ComponentType<BaseIconProps>;
    /** 끝 아이콘 */
    endIcon?: React.ComponentType<BaseIconProps>;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 버튼 내용 */
    children?: React.ReactNode;
    /** 클릭 핸들러 */
    onPress?: () => void;
    /** HTML button type */
    type?: 'button' | 'submit' | 'reset';
    /** 추가 props */
    [key: string]: any;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            radius,
            fullWidth = false,
            disabled = false,
            loading = false,
            iconOnly = false,
            startIcon: StartIcon,
            endIcon: EndIcon,
            className,
            children,
            onPress,
            type = 'button',
            ...props
        },
        forwardedRef
    ) => {
        const ref = useObjectRef(forwardedRef);

        const { buttonProps } = useButton(
            {
                ...props,
                onPress,
                isDisabled: disabled || loading,
                type,
            },
            ref
        );

        // 둥글기 결정 로직
        const getRadiusClass = () => {
            if (radius) {
                return `designbase-button--radius-${radius}`;
            }
            if (iconOnly) {
                return 'designbase-button--radius-pill';
            }
            return `designbase-button--radius-${size === 'xs' || size === 'sm' ? 'sm' : size === 'lg' || size === 'xl' ? 'lg' : 'md'}`;
        };

        const classes = clsx(
            'designbase-button',
            `designbase-button--${variant}`,
            `designbase-button--${size}`,
            getRadiusClass(),
            {
                'designbase-button--full-width': fullWidth,
                'designbase-button--loading': loading,
                'designbase-button--icon-only': iconOnly,
            },
            className
        );

        const iconSize = (() => {
            switch (size) {
                case 'xs': return 12;
                case 'sm': return 14;
                case 'md': return 16;
                case 'lg': return 18;
                case 'xl': return 20;
                default: return 16;
            }
        })();

        // 아이콘 색상 결정
        const getIconColor = () => {
            switch (variant) {
                case 'primary':
                    return 'var(--db-btn-primary-text)';
                case 'secondary':
                    return 'var(--db-btn-secondary-text)';
                case 'tertiary':
                    return 'var(--db-text-primary)';
                case 'danger':
                    return 'var(--db-white)';
                case 'ghost':
                    return 'var(--db-text-primary)';
                default:
                    return 'currentColor';
            }
        };

        const renderContent = () => {
            if (loading) {
                return (
                    <>
                        <Spinner
                            type="circular"
                            size={size === 'xs' ? 'xs' : size === 'sm' ? 'sm' : 'md'}
                            color={getIconColor()}
                            speed={1}
                            showLabel={false}
                        />
                        {!iconOnly && <span>로딩 중...</span>}
                    </>
                );
            }

            return (
                <>
                    {StartIcon && (
                        <StartIcon
                            size={iconSize}
                            className="designbase-button__start-icon"
                            color={getIconColor()}
                        />
                    )}
                    {!iconOnly && children}
                    {iconOnly && React.cloneElement(children as React.ReactElement, {
                        size: iconSize,
                        color: getIconColor(),
                        style: {
                            ...(children as React.ReactElement).props?.style
                        }
                    })}
                    {EndIcon && (
                        <EndIcon
                            size={iconSize}
                            className="designbase-button__end-icon"
                            color={getIconColor()}
                        />
                    )}
                </>
            );
        };

        return (
            <button
                {...buttonProps}
                ref={ref}
                className={classes}
                aria-label={iconOnly ? props['aria-label'] || children : undefined}
            >
                {renderContent()}
            </button>
        );
    }
);

Button.displayName = 'Button';

// Named export 추가
export { Button };
export default Button;
