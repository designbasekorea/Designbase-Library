import React, { useState, useEffect } from 'react';
import { Button, Input } from '@designbasekorea/ui';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import './FormWithSubmit.scss';

export interface FormWithSubmitProps {
    /** 라이선스 제출 핸들러 */
    onLicenseSubmit: (licenseKey: string) => Promise<void> | void;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 제출 중 여부 */
    isSubmitting?: boolean;
    /** 라이선스 키 값 */
    value?: string;
    /** 값 변경 핸들러 */
    onValueChange?: (value: string) => void;
    /** 라벨 텍스트 - 문자열 또는 { key, values } */
    label?: I18nText;
    /** 플레이스홀더 텍스트 - 문자열 또는 { key, values } */
    placeholder?: I18nText;
    /** 제출 버튼 텍스트 - 문자열 또는 { key, values } */
    submitText?: I18nText;
    /** 제출 중 버튼 텍스트 - 문자열 또는 { key, values } */
    submittingText?: I18nText;
    /** 도움말 텍스트 - 문자열 또는 { key, values } */
    helperText?: I18nText;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 소비자가 주입할 번역함수 (선택) */
    t?: TFunctionLite;
}

export const FormWithSubmit: React.FC<FormWithSubmitProps> = ({
    onLicenseSubmit,
    disabled = false,
    isSubmitting = false,
    value = '',
    onValueChange,
    label = { key: 'form.license_key' },
    placeholder = { key: 'form.license_placeholder' },
    submitText = { key: 'form.submit' },
    submittingText = { key: 'form.verifying' },
    helperText,
    className,
    t
}) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onLicenseSubmit(inputValue);
    };

    const handleChange = (value: string) => {
        setInputValue(value);
        onValueChange?.(value);
    };

    const displayLabel = resolveText(t, label, 'License Key');
    const displayPlaceholder = resolveText(t, placeholder, 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    const displaySubmitText = resolveText(t, submitText, 'Submit');
    const displaySubmittingText = resolveText(t, submittingText, 'Verifying...');
    const displayHelperText = helperText ? resolveText(t, helperText, '') : undefined;

    return (
        <form
            className={`designbase-figma-form-with-submit ${className || ''}`}
            onSubmit={handleSubmit}
        >
            <div className="designbase-figma-form-with-submit__field">
                <label className="designbase-figma-form-with-submit__label">
                    {displayLabel}
                </label>
                <Input
                    value={inputValue}
                    onChange={handleChange}
                    placeholder={displayPlaceholder}
                    helperText={displayHelperText}
                    disabled={disabled || isSubmitting}
                    size="m"
                />
            </div>

            <Button
                type="submit"
                variant="primary"
                size="m"
                loading={isSubmitting}
                disabled={!inputValue.trim() || isSubmitting || disabled}
                fullWidth
            >
                {isSubmitting ? displaySubmittingText : displaySubmitText}
            </Button>
        </form>
    );
};

FormWithSubmit.displayName = 'FormWithSubmit';

export default FormWithSubmit;

