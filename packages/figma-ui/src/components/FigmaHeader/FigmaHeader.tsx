import React from 'react';
import clsx from 'clsx';
import { Button } from '@designbasekorea/ui';
import './FigmaHeader.scss';

export interface FigmaHeaderProps {
    /** 중앙 영역 (탭, 세그먼트 컨트롤 등) */
    children?: React.ReactNode;
    /** 우측 액션 버튼들 (아이콘만 전달) */
    actions?: React.ReactNode[];
    /** 검색바 (헤더 아래에 표시) */
    searchBar?: React.ReactNode;
    /** 고정 여부 */
    sticky?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const FigmaHeader: React.FC<FigmaHeaderProps> = ({
    children,
    actions = [],
    searchBar,
    sticky = true,
    className,
}) => {
    const classes = clsx(
        'designbase-figma-header',
        {
            'designbase-figma-header--sticky': sticky,
            'designbase-figma-header--with-children': !!children,
            'designbase-figma-header--with-search': !!searchBar,
            'designbase-figma-header--with-actions': actions.length > 0,
        },
        className
    );

    return (
        <header className={classes}>
            <div className="designbase-figma-header__container">
                {/* 중앙 영역 - 탭, 세그먼트 컨트롤 등 */}
                {children && (
                    <div className="designbase-figma-header__center">
                        {children}
                    </div>
                )}

                {/* 우측 영역 - 액션 버튼들 */}
                {actions.length > 0 && (
                    <div className="designbase-figma-header__right">
                        {actions.map((action, index) => (
                            <Button
                                key={index}
                                variant="tertiary"
                                size="s"
                                iconOnly
                                aria-label={`액션 ${index + 1}`}
                            >
                                {action}
                            </Button>
                        ))}
                    </div>
                )}
            </div>

            {/* 검색바 (헤더 아래에 표시) */}
            {searchBar && (
                <div className="designbase-figma-header__search-container">
                    {searchBar}
                </div>
            )}
        </header>
    );
};

FigmaHeader.displayName = 'FigmaHeader';

export default FigmaHeader;
