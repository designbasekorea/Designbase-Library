import React from 'react';
import { SegmentControl, SegmentOption } from '@designbasekorea/ui';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import './LanguageSelector.scss';

// react-i18next를 선택적으로 import
let useTranslation: any = null;
try {
    const reactI18next = require('react-i18next');
    useTranslation = reactI18next.useTranslation;
} catch (e) {
    // react-i18next가 없으면 무시
}

export interface Language {
    code: string;
    label: I18nText;
}

export interface LanguageSelectorProps {
    /** 현재 선택된 언어 코드 */
    currentLanguage?: string;
    /** 지원하는 언어 목록 */
    languages?: Language[];
    /** 언어 변경 핸들러 */
    onLanguageChange?: (languageCode: string) => void;
    /** 크기 */
    size?: 's' | 'm' | 'l';
    /** 추가 CSS 클래스 */
    className?: string;
    /** 소비자가 주입할 번역함수 (선택) */
    t?: TFunctionLite;
}

const DEFAULT_LANGUAGES: Language[] = [
    { code: 'ko', label: 'KO' },
    { code: 'en', label: 'EN' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    currentLanguage,
    languages = DEFAULT_LANGUAGES,
    onLanguageChange,
    size = 's',
    className,
    t
}) => {
    // react-i18next가 있으면 사용, 없으면 null
    const i18n = useTranslation ? useTranslation().i18n : null;

    // react-i18next의 현재 언어를 사용하거나 props로 받은 언어 사용
    const activeLanguage = currentLanguage || (i18n?.language) || 'ko';

    const handleLanguageChange = (languageCode: string) => {
        // react-i18next가 있으면 언어 변경
        if (i18n) {
            i18n.changeLanguage(languageCode);
        }

        // 추가 콜백 호출
        if (onLanguageChange) {
            onLanguageChange(languageCode);
        }
    };

    // SegmentControl용 옵션 변환
    const segmentOptions: SegmentOption[] = languages.map((language) => ({
        value: language.code,
        label: resolveText(t, language.label),
        disabled: false
    }));

    return (
        <div className={`designbase-figma-language-selector ${className || ''}`}>
            <SegmentControl
                options={segmentOptions}
                value={activeLanguage}
                onChange={handleLanguageChange}
                size={size}
                className="designbase-figma-language-selector__segment"
            />
        </div>
    );
};

LanguageSelector.displayName = 'LanguageSelector';

export default LanguageSelector;

