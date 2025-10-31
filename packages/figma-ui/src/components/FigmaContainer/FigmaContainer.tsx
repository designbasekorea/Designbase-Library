/**
 * FigmaContainer 컴포넌트
 * 
 * Figma 플러그인을 위한 기본 레이아웃 컨테이너
 * 상단 주요 기능 영역과 하단 푸터 영역으로 구성됩니다.
 */

import React from 'react';
import clsx from 'clsx';
import './FigmaContainer.scss';

export type FigmaContainerSize = 's' | 'm' | 'l';
export type FigmaContainerBannerPosition = 'top' | 'bottom';

export interface FigmaContainerProps {
    /** 헤더 영역 */
    header?: React.ReactNode;
    /** 배너 영역 */
    banner?: React.ReactNode;
    /** 배너 위치 (헤더 아래 또는 푸터 위) */
    bannerPosition?: FigmaContainerBannerPosition;
    /** 사이드바 영역 */
    sidebar?: React.ReactNode;
    /** 메인 컨텐츠 영역 */
    children: React.ReactNode;
    /** 인터랙션 피드백 영역 (푸터 위) */
    interactionFeedback?: React.ReactNode;
    /** 액션 버튼 영역 (푸터 바로 위) */
    actionButton?: React.ReactNode;
    /** 푸터 영역 */
    footer?: React.ReactNode;
    /** 사이드바 고정 폭 (px, 기본값 없음 - 자동 계산) */
    sidebarWidth?: number;
    /** 컨테이너 크기 */
    size?: FigmaContainerSize;
    /** 전체 높이 사용 */
    fullHeight?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const FigmaContainer: React.FC<FigmaContainerProps> = ({
    header,
    banner,
    bannerPosition = 'top',
    sidebar,
    children,
    interactionFeedback,
    actionButton,
    footer,
    sidebarWidth,
    size = 'm',
    fullHeight = true,
    className,
}) => {
    const classes = clsx(
        'designbase-figma-container',
        `designbase-figma-container--${size}`,
        {
            'designbase-figma-container--full-height': fullHeight,
            'designbase-figma-container--with-header': !!header,
            'designbase-figma-container--with-banner': !!banner,
            'designbase-figma-container--banner-top': !!banner && bannerPosition === 'top',
            'designbase-figma-container--banner-bottom': !!banner && bannerPosition === 'bottom',
            'designbase-figma-container--with-sidebar': !!sidebar,
            'designbase-figma-container--with-interaction': !!interactionFeedback,
            'designbase-figma-container--with-action': !!actionButton,
            'designbase-figma-container--with-footer': !!footer,
        },
        className
    );

    return (
        <div className={classes}>
            {/* 헤더 영역 */}
            {header && (
                <div className="designbase-figma-container__header">
                    {header}
                </div>
            )}

            {/* 배너 영역 (top 위치) */}
            {banner && bannerPosition === 'top' && (
                <div className="designbase-figma-container__banner">
                    {banner}
                </div>
            )}

            {/* 메인 콘텐츠 영역 */}
            <div className={clsx(
                'designbase-figma-container__main',
                {
                    'designbase-figma-container__main--with-sidebar': !!sidebar
                }
            )}>
                {sidebar ? (
                    <div className="designbase-figma-container__main-content">
                        <div
                            className="designbase-figma-container__sidebar"
                            style={sidebarWidth !== undefined ? { width: `${sidebarWidth}px` } : undefined}
                        >
                            {sidebar}
                        </div>
                        <div className="designbase-figma-container__content">
                            {children}
                        </div>
                    </div>
                ) : (
                    children
                )}
            </div>

            {/* 인터랙션 피드백 영역 */}
            {interactionFeedback && (
                <div className="designbase-figma-container__interaction">
                    {interactionFeedback}
                </div>
            )}

            {/* 액션 버튼 영역 */}
            {actionButton && (
                <div className="designbase-figma-container__action">
                    {actionButton}
                </div>
            )}

            {/* 배너 영역 (bottom 위치) */}
            {banner && bannerPosition === 'bottom' && (
                <div className="designbase-figma-container__banner">
                    {banner}
                </div>
            )}

            {/* 푸터 영역 */}
            {footer && (
                <div className="designbase-figma-container__footer">
                    {footer}
                </div>
            )}
        </div>
    );
};

FigmaContainer.displayName = 'FigmaContainer';

export default FigmaContainer;

