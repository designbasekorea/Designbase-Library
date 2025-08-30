/**
 * Input 컴포넌트
 * 
 * 목적: 일관된 스타일과 접근성을 가진 입력 필드 컴포넌트 제공
 * 기능: 다양한 type, size, state 지원, 라벨, 헬퍼 텍스트, 에러 메시지
 * 접근성: WAI-ARIA 가이드라인 준수, 라벨과 입력 필드 연결
 */

import React, { forwardRef, useId } from 'react';
import clsx from 'clsx';
import type { BaseIconProps } from '@designbase/icons';
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
    size?: 'sm' | 'md' | 'lg';
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
    startIcon?: React.ComponentType<BaseIconProps>;
    /** 끝 아이콘 */
    endIcon?: React.ComponentType<BaseIconProps>;
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 입력 필드 클래스 */
    inputClassName?: string;
    /** 값 변경 핸들러 */
    onChange?: (value: string) => void;
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
            size = 'md',
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

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };

        const classes = clsx(
            'designbase-input',
            `designbase-input--${size}`,
            {
                'designbase-input--error': error,
                'designbase-input--disabled': disabled,
                'designbase-input--readonly': readOnly,
                'designbase-input--full-width': fullWidth,
                'designbase-input--with-start-icon': StartIcon,
                'designbase-input--with-end-icon': EndIcon,
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
                    <label
                        htmlFor={inputId}
                        className="designbase-input__label"
                    >
                        {label}
                        {required && <span className="designbase-input__required">*</span>}
                    </label>
                )}

                <div className="designbase-input__wrapper">
                    {StartIcon && (
                        <div className="designbase-input__start-icon">
                            <StartIcon size={iconSize} />
                        </div>
                    )}

                    <input
                        {...props}
                        ref={forwardedRef}
                        id={inputId}
                        type={type}
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

                    {EndIcon && (
                        <div className="designbase-input__end-icon">
                            <EndIcon size={iconSize} />
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
