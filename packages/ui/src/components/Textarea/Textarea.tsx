/**
 * Textarea 컴포넌트
 * 
 * 목적: 일관된 스타일과 접근성을 가진 텍스트 영역 컴포넌트 제공
 * 기능: 다양한 size, state 지원, 라벨, 헬퍼 텍스트, 에러 메시지, 글자 수 카운터
 * 접근성: WAI-ARIA 가이드라인 준수, 라벨과 입력 필드 연결
 */

import React, { forwardRef, useId, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Label } from '../Label/Label';
import './Textarea.scss';

export interface TextareaProps {
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
    /** 행 수 */
    rows?: number;
    /** 최대 글자 수 */
    maxLength?: number;
    /** 글자 수 표시 여부 */
    showCharacterCount?: boolean;
    /** 글자 수 표시 위치 */
    characterCountPosition?: 'top' | 'bottom';
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
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 리사이즈 가능 여부 */
    resizable?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 텍스트 영역 클래스 */
    textareaClassName?: string;
    /** 값 변경 핸들러 */
    onChange?: (value: string) => void;
    /** 포커스 핸들러 */
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /** 블러 핸들러 */
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /** 추가 props */
    [key: string]: any;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            label,
            placeholder,
            defaultValue,
            value,
            size = 'm',
            rows = 4,
            maxLength,
            showCharacterCount = false,
            characterCountPosition = 'bottom',
            disabled = false,
            readOnly = false,
            required = false,
            error = false,
            errorMessage,
            helperText,
            fullWidth = false,
            resizable = true,
            className,
            textareaClassName,
            onChange,
            onFocus,
            onBlur,
            ...props
        },
        forwardedRef
    ) => {
        const textareaId = useId();
        const helperTextId = useId();
        const errorMessageId = useId();
        const [currentLength, setCurrentLength] = useState(0);

        // 현재 글자 수 계산
        useEffect(() => {
            const length = value?.length || defaultValue?.length || 0;
            setCurrentLength(length);
        }, [value, defaultValue]);

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const newValue = e.target.value;
            setCurrentLength(newValue.length);
            onChange?.(newValue);
        };

        const classes = clsx(
            'designbase-textarea',
            `designbase-textarea--${size}`,
            {
                'designbase-textarea--error': error,
                'designbase-textarea--disabled': disabled,
                'designbase-textarea--readonly': readOnly,
                'designbase-textarea--full-width': fullWidth,
                'designbase-textarea--not-resizable': !resizable,
            },
            className
        );

        const textareaClasses = clsx(
            'designbase-textarea__field',
            textareaClassName
        );

        const isOverLimit = maxLength && currentLength > maxLength;
        const remainingChars = maxLength ? maxLength - currentLength : 0;

        return (
            <div className={classes}>
                {/* 라벨 */}
                {label && (
                    <Label
                        htmlFor={textareaId}
                        required={required}
                        error={error}
                        disabled={disabled}
                        size={size === 's' ? 's' : size === 'm' ? 'm' : 'l'}
                    >
                        {label}
                    </Label>
                )}

                {/* 글자 수 표시 (상단) */}
                {showCharacterCount && characterCountPosition === 'top' && (
                    <div className="designbase-textarea__character-count designbase-textarea__character-count--top">
                        <span className={clsx('designbase-textarea__character-count-text', {
                            'designbase-textarea__character-count-text--error': isOverLimit
                        })}>
                            {currentLength}
                            {maxLength && ` / ${maxLength}`}
                        </span>
                    </div>
                )}

                {/* 텍스트 영역 */}
                <div className="designbase-textarea__wrapper">
                    <textarea
                        ref={forwardedRef}
                        id={textareaId}
                        className={textareaClasses}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        value={value}
                        rows={rows}
                        maxLength={maxLength}
                        disabled={disabled}
                        readOnly={readOnly}
                        required={required}
                        aria-describedby={clsx({
                            [helperTextId]: helperText,
                            [errorMessageId]: errorMessage,
                        })}
                        aria-invalid={error}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        {...props}
                    />
                </div>

                {/* 하단 정보 영역 */}
                <div className="designbase-textarea__footer">
                    {/* 에러 메시지 */}
                    {error && errorMessage && (
                        <div
                            id={errorMessageId}
                            className="designbase-textarea__error-message"
                            role="alert"
                        >
                            {errorMessage}
                        </div>
                    )}

                    {/* 헬퍼 텍스트 */}
                    {!error && helperText && (
                        <div
                            id={helperTextId}
                            className="designbase-textarea__helper-text"
                        >
                            {helperText}
                        </div>
                    )}

                    {/* 글자 수 표시 (하단) */}
                    {showCharacterCount && characterCountPosition === 'bottom' && (
                        <div className="designbase-textarea__character-count designbase-textarea__character-count--bottom">
                            <span className={clsx('designbase-textarea__character-count-text', {
                                'designbase-textarea__character-count-text--error': isOverLimit
                            })}>
                                {currentLength}
                                {maxLength && ` / ${maxLength}`}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export { Textarea };
export default Textarea;
