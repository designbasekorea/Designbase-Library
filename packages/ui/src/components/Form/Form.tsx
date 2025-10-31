import React, { useState, useCallback, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Radio } from '../Radio/Radio';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import Textarea from '../Textarea/Textarea';
import ColorPicker from '../ColorPicker/ColorPicker';
import DatePicker from '../DatePicker/DatePicker';
import TimePicker from '../TimePicker/TimePicker';
import FileUploader from '../FileUploader/FileUploader';
import './Form.scss';

export type FormColumns = 1 | 2;
export type FormSize = 's' | 'm' | 'l';
export type FormVariant = 'default' | 'bordered' | 'filled';

export interface FormField {
    /** 필드 이름 */
    name: string;
    /** 필드 타입 */
    type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'file' | 'color' | 'timepicker';
    /** 필드 라벨 */
    label?: string;
    /** 필드 값 */
    value?: any;
    /** 기본값 */
    defaultValue?: any;
    /** 플레이스홀더 */
    placeholder?: string;
    /** 필수 여부 */
    required?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 읽기 전용 여부 */
    readOnly?: boolean;
    /** 최소값 (number 타입) */
    min?: number;
    /** 최대값 (number 타입) */
    max?: number;
    /** 최소 길이 */
    minLength?: number;
    /** 최대 길이 */
    maxLength?: number;
    /** 패턴 (정규식) */
    pattern?: string;
    /** 자동완성 */
    autoComplete?: string;
    /** 자동 포커스 */
    autoFocus?: boolean;
    /** 검증 규칙 */
    validation?: {
        required?: boolean;
        min?: number;
        max?: number;
        minLength?: number;
        maxLength?: number;
        pattern?: RegExp;
        custom?: (value: any) => string | undefined;
    };
    /** 에러 메시지 */
    errorMessage?: string;
    /** 도움말 텍스트 */
    helpText?: string;
    /** 옵션들 (select, radio, checkbox용) */
    options?: Array<{
        label: string;
        value: any;
        disabled?: boolean;
    }>;
    /** 다중 선택 여부 (select용) */
    multiple?: boolean;
    /** 체크박스 그룹 여부 */
    checkboxGroup?: boolean;
    /** 라디오 그룹 여부 */
    radioGroup?: boolean;
    /** 파일 업로드 설정 */
    fileUpload?: {
        accept?: string;
        multiple?: boolean;
        maxSize?: number; // bytes
    };
    /** 커스텀 렌더러 */
    render?: (props: any) => React.ReactNode;
}

export interface FormProps {
    /** 폼 필드들 */
    fields: FormField[];
    /** 폼 컬럼 수 (1단 또는 2단) */
    columns?: FormColumns;
    /** 폼 크기 */
    size?: FormSize;
    /** 폼 스타일 변형 */
    variant?: FormVariant;
    /** 폼 제출 핸들러 */
    onSubmit?: (values: Record<string, any>) => void;
    /** 폼 변경 핸들러 */
    onChange?: (values: Record<string, any>) => void;
    /** 폼 초기값 */
    initialValues?: Record<string, any>;
    /** 제출 버튼 텍스트 */
    submitText?: string;
    /** 제출 버튼 로딩 상태 */
    submitLoading?: boolean;
    /** 제출 버튼 비활성화 */
    submitDisabled?: boolean;
    /** 리셋 버튼 표시 여부 */
    showReset?: boolean;
    /** 리셋 버튼 텍스트 */
    resetText?: string;
    /** 폼 제목 */
    title?: string;
    /** 폼 설명 */
    description?: string;
    /** 커스텀 CSS 클래스 */
    className?: string;
    /** 커스텀 스타일 */
    style?: React.CSSProperties;
}

const Form: React.FC<FormProps> = ({
    fields,
    columns = 1,
    size = 'm',
    variant = 'default',
    onSubmit,
    onChange,
    initialValues = {},
    submitText = '제출',
    submitLoading = false,
    submitDisabled = false,
    showReset = false,
    resetText = '리셋',
    title,
    description,
    className,
    style,
}) => {
    const [values, setValues] = useState<Record<string, any>>(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const formRef = useRef<HTMLFormElement>(null);

    // 필드 값 업데이트
    const updateFieldValue = useCallback((name: string, value: any) => {
        const newValues = { ...values, [name]: value };
        setValues(newValues);
        onChange?.(newValues);
    }, [values, onChange]);

    // 필드 터치 상태 업데이트
    const updateFieldTouched = useCallback((name: string, isTouched: boolean) => {
        setTouched(prev => ({ ...prev, [name]: isTouched }));
    }, []);

    // 필드 검증
    const validateField = useCallback((field: FormField, value: any): string | undefined => {
        const { validation } = field;
        if (!validation) return undefined;

        // 필수 검증
        if (validation.required && (!value || (Array.isArray(value) && value.length === 0))) {
            return field.errorMessage || `${field.label || field.name}은(는) 필수입니다.`;
        }

        // 최소값 검증
        if (validation.min !== undefined && value < validation.min) {
            return field.errorMessage || `최소값은 ${validation.min}입니다.`;
        }

        // 최대값 검증
        if (validation.max !== undefined && value > validation.max) {
            return field.errorMessage || `최대값은 ${validation.max}입니다.`;
        }

        // 최소 길이 검증
        if (validation.minLength !== undefined && String(value).length < validation.minLength) {
            return field.errorMessage || `최소 ${validation.minLength}자 이상 입력해주세요.`;
        }

        // 최대 길이 검증
        if (validation.maxLength !== undefined && String(value).length > validation.maxLength) {
            return field.errorMessage || `최대 ${validation.maxLength}자까지 입력 가능합니다.`;
        }

        // 패턴 검증
        if (validation.pattern && !validation.pattern.test(String(value))) {
            return field.errorMessage || `올바른 형식으로 입력해주세요.`;
        }

        // 커스텀 검증
        if (validation.custom) {
            return validation.custom(value);
        }

        return undefined;
    }, []);

    // 전체 폼 검증
    const validateForm = useCallback((): boolean => {
        const newErrors: Record<string, string> = {};
        let isValid = true;

        fields.forEach(field => {
            const error = validateField(field, values[field.name]);
            if (error) {
                newErrors[field.name] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    }, [fields, values, validateField]);

    // 폼 제출 핸들러
    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        // 모든 필드를 터치된 상태로 설정
        const allTouched = fields.reduce((acc, field) => {
            acc[field.name] = true;
            return acc;
        }, {} as Record<string, boolean>);
        setTouched(allTouched);

        if (validateForm()) {
            onSubmit?.(values);
        }
    }, [fields, values, validateForm, onSubmit]);

    // 폼 리셋 핸들러
    const handleReset = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    }, [initialValues]);

    // 필드 변경 핸들러
    const handleFieldChange = useCallback((name: string, value: any) => {
        updateFieldValue(name, value);
        updateFieldTouched(name, true);

        // 실시간 검증
        const field = fields.find(f => f.name === name);
        if (field) {
            const error = validateField(field, value);
            setErrors(prev => ({
                ...prev,
                [name]: error || ''
            }));
        }
    }, [fields, updateFieldValue, updateFieldTouched, validateField]);

    // 필드 블러 핸들러
    const handleFieldBlur = useCallback((name: string) => {
        updateFieldTouched(name, true);

        const field = fields.find(f => f.name === name);
        if (field) {
            const error = validateField(field, values[name]);
            setErrors(prev => ({
                ...prev,
                [name]: error || ''
            }));
        }
    }, [fields, values, updateFieldTouched, validateField]);

    // 필드 렌더링
    const renderField = useCallback((field: FormField) => {
        const fieldValue = values[field.name];
        const fieldError = errors[field.name];
        const fieldTouched = touched[field.name];
        const showError = fieldTouched && fieldError;

        const commonProps = {
            key: field.name,
            value: fieldValue,
            onChange: (value: any) => handleFieldChange(field.name, value),
            onBlur: () => handleFieldBlur(field.name),
            placeholder: field.placeholder,
            disabled: field.disabled,
            readOnly: field.readOnly,
            required: field.required,
            autoFocus: field.autoFocus,
            autoComplete: field.autoComplete,
            size,
            className: clsx(
                'designbase-form__field',
                {
                    'designbase-form__field--error': showError,
                }
            ),
        };

        // 커스텀 렌더러가 있는 경우
        if (field.render) {
            return field.render(commonProps);
        }

        // 필드 타입별 렌더링
        switch (field.type) {
            case 'textarea':
                return (
                    <Textarea
                        {...commonProps}
                        rows={4}
                        maxLength={field.maxLength}
                        minLength={field.minLength}
                    />
                );

            case 'select':
                return (
                    <Select
                        {...commonProps}
                        options={field.options || []}
                        multiple={field.multiple}
                    />
                );

            case 'radio':
                if (field.radioGroup) {
                    return (
                        <div className="designbase-form__radio-group">
                            {field.options?.map((option, index) => (
                                <Radio
                                    key={`${field.name}-${option.value}`}
                                    name={field.name}
                                    value={option.value}
                                    isSelected={fieldValue === option.value}
                                    isDisabled={option.disabled || field.disabled}
                                    onChange={() => handleFieldChange(field.name, option.value)}
                                >
                                    {option.label}
                                </Radio>
                            ))}
                        </div>
                    );
                }
                return null;

            case 'checkbox':
                if (field.checkboxGroup) {
                    return (
                        <div className="designbase-form__checkbox-group">
                            {field.options?.map((option, index) => (
                                <Checkbox
                                    key={`${field.name}-${option.value}`}
                                    name={field.name}
                                    value={option.value}
                                    isSelected={Array.isArray(fieldValue) ? fieldValue.includes(option.value) : false}
                                    isDisabled={option.disabled || field.disabled}
                                    onChange={(isSelected: boolean) => {
                                        const currentValues = Array.isArray(fieldValue) ? fieldValue : [];
                                        if (isSelected) {
                                            handleFieldChange(field.name, [...currentValues, option.value]);
                                        } else {
                                            handleFieldChange(field.name, currentValues.filter(v => v !== option.value));
                                        }
                                    }}
                                >
                                    {option.label}
                                </Checkbox>
                            ))}
                        </div>
                    );
                }
                return (
                    <Checkbox
                        {...commonProps}
                        isSelected={fieldValue || false}
                        isDisabled={field.disabled}
                    >
                        {field.label}
                    </Checkbox>
                );

            case 'file':
                return (
                    <FileUploader
                        size={size}
                        accept={field.fileUpload?.accept}
                        maxSize={field.fileUpload?.maxSize}
                        multiple={field.fileUpload?.multiple}
                        disabled={field.disabled}
                        readonly={field.readOnly}
                        onUpload={(files) => {
                            handleFieldChange(field.name, files);
                        }}
                    />
                );

            case 'date':
                return (
                    <DatePicker
                        size={size}
                        value={fieldValue}
                        disabled={field.disabled}
                        readonly={field.readOnly}
                        mode="single"
                        type="dropdown"
                        onChange={(date) => handleFieldChange(field.name, date)}
                    />
                );

            case 'color':
                return (
                    <ColorPicker
                        size={size}
                        value={fieldValue}
                        disabled={field.disabled}
                        readonly={field.readOnly}
                        showAlpha={true}
                        showFormatSelector={true}
                        showCopyButton={true}
                        onChange={(color) => handleFieldChange(field.name, color)}
                    />
                );

            case 'timepicker':
                return (
                    <TimePicker
                        size={size}
                        value={fieldValue}
                        disabled={field.disabled}
                        readonly={field.readOnly}
                        format="24h"
                        type="dropdown"
                        minuteStep={1}
                        onChange={(time) => handleFieldChange(field.name, time)}
                    />
                );

            default:
                return (
                    <Input
                        {...commonProps}
                        type={field.type}
                        min={field.min}
                        max={field.max}
                        minLength={field.minLength}
                        maxLength={field.maxLength}
                        pattern={field.pattern}
                    />
                );
        }
    }, [values, errors, touched, handleFieldChange, handleFieldBlur, size]);

    const classes = clsx(
        'designbase-form',
        `designbase-form--columns-${columns}`,
        `designbase-form--${size}`,
        `designbase-form--${variant}`,
        className
    );

    return (
        <form ref={formRef} className={classes} style={style} onSubmit={handleSubmit}>
            {/* 폼 헤더 */}
            {(title || description) && (
                <div className="designbase-form__header">
                    {title && <h3 className="designbase-form__title">{title}</h3>}
                    {description && <p className="designbase-form__description">{description}</p>}
                </div>
            )}

            {/* 폼 필드들 */}
            <div className="designbase-form__fields">
                {fields.map(field => (
                    <div
                        key={field.name}
                        className={clsx(
                            'designbase-form__field-wrapper',
                            `designbase-form__field-wrapper--${field.type}`
                        )}
                    >
                        {/* 필드 라벨 */}
                        {field.label && (
                            <label className="designbase-form__label" htmlFor={field.name}>
                                {field.label}
                                {field.required && <span className="designbase-form__required">*</span>}
                            </label>
                        )}

                        {/* 필드 렌더링 */}
                        {renderField(field)}

                        {/* 에러 메시지 */}
                        {touched[field.name] && errors[field.name] && (
                            <div className="designbase-form__error">
                                {errors[field.name]}
                            </div>
                        )}

                        {/* 도움말 텍스트 */}
                        {field.helpText && !errors[field.name] && (
                            <div className="designbase-form__help">
                                {field.helpText}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* 폼 액션 */}
            <div className="designbase-form__actions">
                <Button
                    type="submit"
                    variant="primary"
                    size={size}
                    loading={submitLoading}
                    disabled={submitDisabled}
                >
                    {submitText}
                </Button>

                {showReset && (
                    <Button
                        type="button"
                        variant="secondary"
                        size={size}
                        onClick={handleReset}
                    >
                        {resetText}
                    </Button>
                )}
            </div>
        </form>
    );
};

export { Form };
export default Form;
