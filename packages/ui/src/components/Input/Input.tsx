/**
 * Input 컴포넌트
 * 
 * 목적: 일관된 스타일과 접근성을 가진 입력 필드 컴포넌트 제공
 * 기능: 다양한 type, size, state 지원, 라벨, 헬퍼 텍스트, 에러 메시지
 * 접근성: WAI-ARIA 가이드라인 준수, 라벨과 입력 필드 연결
 */

import React, { forwardRef, useId, useState } from 'react';
import clsx from 'clsx';
import type { IconProps } from '@designbasekorea/icons';
import { ShowIcon, HideIcon, SearchIcon } from '@designbasekorea/icons';
import { Label } from '../Label/Label';
import './Input.scss';

export interface InputProps {
    /** 입력 필드 타입 */
    type?: 'text' | 'email' | 'password' | 'url' | 'search' | 'tel' | 'number';
    /** 라벨 */
    label?: string;
    /** 플레이스홀더 */
    placeholder?: string;
    /** 기본값 */
    defaultValue?: string;
    /** 제어 값 */
    value?: string;
    /** 크기 */
    size?: 's' | 'm' | 'l';
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 읽기 전용 여부 */
    readOnly?: boolean;
    /** 필수 여부 */
    required?: boolean;
    /** 에러 상태 */
    error?: boolean;
    /** 에러 메시지 */
    errorMessage?: string;
    /** 헬퍼 텍스트 */
    helperText?: string;
    /** 시작 아이콘 */
    startIcon?: React.ComponentType<IconProps>;
    /** 끝 아이콘 */
    endIcon?: React.ComponentType<IconProps>;
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 입력 필드 클래스 */
    inputClassName?: string;
    /** 값 변경 핸들러 */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** 포커스 핸들러 */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /** 블러 핸들러 */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /** 추가 props */
    [key: string]: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            type = 'text',
            label,
            placeholder,
            defaultValue,
            value,
            size = 'm',
            disabled = false,
            readOnly = false,
            required = false,
            error = false,
            errorMessage,
            helperText,
            startIcon: StartIcon,
            endIcon: EndIcon,
            fullWidth = false,
            className,
            inputClassName,
            onChange,
            onFocus,
            onBlur,
            ...props
        },
        forwardedRef
    ) => {
        const inputId = useId();
        const helperTextId = useId();
        const errorMessageId = useId();
        const [showPassword, setShowPassword] = useState(false);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
        };

        const handlePasswordToggle = () => {
            setShowPassword(!showPassword);
        };

        // 비밀번호 타입인 경우 토글 아이콘 사용
        const isPassword = type === 'password';
        const actualType = isPassword ? (showPassword ? 'text' : 'password') : type;
        const PasswordIcon = showPassword ? HideIcon : ShowIcon;

        // 검색 타입인 경우 자동으로 검색 아이콘 사용
        const isSearch = type === 'search';
        const actualStartIcon = isSearch ? SearchIcon : StartIcon;

        const classes = clsx(
            'designbase-input',
            `designbase-input--${size}`,
            {
                'designbase-input--error': error,
                'designbase-input--disabled': disabled,
                'designbase-input--readonly': readOnly,
                'designbase-input--full-width': fullWidth,
                'designbase-input--with-start-icon': actualStartIcon,
                'designbase-input--with-end-icon': EndIcon || isPassword,
            },
            className
        );

        const inputClasses = clsx(
            'designbase-input__field',
            inputClassName
        );

        const iconSizeMap = {
            sm: 14,
            md: 16,
            lg: 18,
        } as const;

        const iconSize = iconSizeMap[size as keyof typeof iconSizeMap];

        return (
            <div className={classes}>
                {label && (
                    <Label
                        htmlFor={inputId}
                        required={required}
                        error={error}
                        disabled={disabled}
                        size={size === 's' ? 's' : size === 'm' ? 'm' : 'l'}
                    >
                        {label}
                    </Label>
                )}

                <div className="designbase-input__wrapper">
                    {actualStartIcon && (
                        <div className="designbase-input__start-icon">
                            {React.createElement(actualStartIcon, { size: iconSize })}
                        </div>
                    )}

                    <input
                        {...props}
                        ref={forwardedRef}
                        id={inputId}
                        type={actualType}
                        value={value}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        disabled={disabled}
                        readOnly={readOnly}
                        required={required}
                        className={inputClasses}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        aria-describedby={clsx(
                            helperText && helperTextId,
                            error && errorMessage && errorMessageId
                        )}
                        aria-invalid={error}
                    />

                    {isPassword && (
                        <button
                            type="button"
                            className="designbase-input__password-toggle"
                            onClick={handlePasswordToggle}
                            disabled={disabled}
                            aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
                        >
                            {React.createElement(PasswordIcon, { size: iconSize })}
                        </button>
                    )}

                    {EndIcon && !isPassword && (
                        <div className="designbase-input__end-icon">
                            {React.createElement(EndIcon, { size: iconSize })}
                        </div>
                    )}
                </div>

                {helperText && !error && (
                    <p
                        id={helperTextId}
                        className="designbase-input__helper-text"
                    >
                        {helperText}
                    </p>
                )}

                {error && errorMessage && (
                    <p
                        id={errorMessageId}
                        className="designbase-input__error-message"
                    >
                        {errorMessage}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

// Named export 추가
export { Input };
export default Input;
