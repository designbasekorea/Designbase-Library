import React from 'react';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import './TitleDescription.scss';

export interface TitleDescriptionProps {
    /** 아이콘 이미지 소스 */
    iconSrc?: string;
    /** 아이콘 alt 텍스트 */
    iconAlt?: string;
    /** 제목 - 문자열 또는 { key, values } */
    title: I18nText;
    /** 설명 - 문자열 또는 { key, values } */
    description: I18nText;
    /** 버튼 요소 */
    button?: React.ReactNode;
    /** 기능 목록 - 문자열 또는 { key, values } 배열 */
    features?: I18nText[];
    /** 추가 CSS 클래스 */
    className?: string;
    /** 소비자가 주입할 번역함수 (선택) */
    t?: TFunctionLite;
}

export const TitleDescription: React.FC<TitleDescriptionProps> = ({
    iconSrc,
    iconAlt = 'Icon',
    title,
    description,
    button,
    features,
    className,
    t
}) => {
    const classes = [
        'designbase-figma-title-description',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const displayTitle = resolveText(t, title);
    const displayDescription = resolveText(t, description);

    return (
        <div className={classes}>
            {iconSrc && (
                <img
                    className="designbase-figma-title-description__icon"
                    src={iconSrc}
                    alt={iconAlt}
                />
            )}
            <h5 className="designbase-figma-title-description__title">{displayTitle}</h5>
            <p className="designbase-figma-title-description__description">{displayDescription}</p>
            {button && <div className="designbase-figma-title-description__button">{button}</div>}
            {features && features.length > 0 && (
                <ul className="designbase-figma-title-description__features">
                    {features.map((feature, index) => {
                        const displayFeature = resolveText(t, feature);
                        return (
                            <li key={index} className="designbase-figma-title-description__feature-item">
                                <span className="designbase-figma-title-description__check-icon">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="12" cy="12" r="11" fill="currentColor" />
                                        <path
                                            d="M8 12L11 15L16 9"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="designbase-figma-title-description__feature-text">
                                    {displayFeature}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

TitleDescription.displayName = 'TitleDescription';

export default TitleDescription;

