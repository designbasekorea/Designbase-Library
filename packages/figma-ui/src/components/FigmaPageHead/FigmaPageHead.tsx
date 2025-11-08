import React from 'react';
import clsx from 'clsx';
import { Button, Dropdown } from '@designbasekorea/ui';
import { ChevronLeftIcon, MoreHorizontalIcon } from '@designbasekorea/icons';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import './FigmaPageHead.scss';

export interface FigmaPageHeadAction {
    id: string;
    label: I18nText;
    onClick: () => void;
    icon?: React.ReactNode;
}

export interface FigmaPageHeadProps {
    /** 뒤로가기 핸들러 */
    onBack: () => void;
    /** 페이지 제목 - 문자열 또는 { key, values } */
    title: I18nText;
    /** 페이지 설명 - 문자열 또는 { key, values } (선택사항) */
    description?: I18nText;
    /** 좌측 액션 버튼들 (드롭다운 이전에 표시) */
    actions?: React.ReactNode[];
    /** 더보기 메뉴 아이템들 (드롭다운으로 표시) */
    moreActions?: FigmaPageHeadAction[];
    /** 추가 CSS 클래스 */
    className?: string;
    /** 소비자가 주입할 번역함수 (선택) */
    t?: TFunctionLite;
}

export const FigmaPageHead: React.FC<FigmaPageHeadProps> = ({
    onBack,
    title,
    description,
    actions = [],
    moreActions = [],
    className,
    t
}) => {
    const classes = clsx(
        'designbase-figma-page-head',
        className
    );

    const displayTitle = resolveText(t, title);
    const displayDescription = description ? resolveText(t, description) : undefined;

    const dropdownItems = moreActions.map(action => ({
        id: action.id,
        label: resolveText(t, action.label),
        onClick: action.onClick
    }));


    return (
        <div className={classes}>
            <div className="designbase-figma-page-head__left">
                <Button
                    variant="tertiary"
                    size="s"
                    iconOnly
                    onPress={onBack}
                    aria-label="뒤로가기"
                >
                    <ChevronLeftIcon size={14} />
                </Button>
                <div className="designbase-figma-page-head__titles">
                    <h2>{displayTitle}</h2>
                    {displayDescription && <p>{displayDescription}</p>}
                </div>
            </div>
            <div className="designbase-figma-page-head__actions">
                {actions.map((action, index) => (
                    <React.Fragment key={index}>
                        {action}
                    </React.Fragment>
                ))}
                {moreActions.length > 0 && (
                    <Dropdown
                        trigger={
                            <button
                                type="button"
                                className="designbase-figma-page-head__more-button"
                                aria-label="더보기"
                            >
                                <MoreHorizontalIcon size={16} />
                            </button>
                        }
                        items={dropdownItems}
                        placement="bottom-right"
                        size="s"
                    />
                )}
            </div>
        </div>
    );
};

FigmaPageHead.displayName = 'FigmaPageHead';

export default FigmaPageHead;

