/**
 * Section 컴포넌트
 * 
 * 콘텐츠를 구역별로 나누는 레이아웃 컴포넌트입니다.
 * 헤더, 콘텐츠, 푸터 영역을 포함할 수 있습니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Section.scss';

export type SectionSize = 's' | 'm' | 'l' | 'xl';
export type SectionVariant = 'default' | 'elevated' | 'outlined' | 'filled';

export interface SectionProps {
    /** 섹션 제목 */
    title?: React.ReactNode;
    /** 섹션 부제목 */
    subtitle?: React.ReactNode;
    /** 섹션 설명 */
    description?: React.ReactNode;
    /** 섹션 크기 */
    size?: SectionSize;
    /** 섹션 스타일 변형 */
    variant?: SectionVariant;
    /** 헤더 영역 */
    header?: React.ReactNode;
    /** 푸터 영역 */
    footer?: React.ReactNode;
    /** 헤더 액션 버튼들 */
    actions?: React.ReactNode;
    /** 패딩 제거 */
    noPadding?: boolean;
    /** 전체 너비 사용 */
    fullWidth?: boolean;
    /** 전체 높이 사용 */
    fullHeight?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 자식 요소 */
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
    title,
    subtitle,
    description,
    size = 'm',
    variant = 'default',
    header,
    footer,
    actions,
    noPadding = false,
    fullWidth = false,
    fullHeight = false,
    className,
    children,
}) => {
    const classes = clsx(
        'designbase-section',
        `designbase-section--size-${size}`,
        `designbase-section--variant-${variant}`,
        {
            'designbase-section--no-padding': noPadding,
            'designbase-section--full-width': fullWidth,
            'designbase-section--full-height': fullHeight,
        },
        className
    );

    const hasHeader = title || subtitle || description || header || actions;

    return (
        <section className={classes}>
            {hasHeader && (
                <div className="designbase-section__header">
                    {header || (
                        <>
                            {(title || subtitle) && (
                                <div className="designbase-section__title-area">
                                    {title && (
                                        <h2 className="designbase-section__title">
                                            {title}
                                        </h2>
                                    )}
                                    {subtitle && (
                                        <h3 className="designbase-section__subtitle">
                                            {subtitle}
                                        </h3>
                                    )}
                                    {description && (
                                        <p className="designbase-section__description">
                                            {description}
                                        </p>
                                    )}
                                </div>
                            )}
                            {actions && (
                                <div className="designbase-section__actions">
                                    {actions}
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}

            <div className="designbase-section__content">
                {children}
            </div>

            {footer && (
                <div className="designbase-section__footer">
                    {footer}
                </div>
            )}
        </section>
    );
};

export default Section;
