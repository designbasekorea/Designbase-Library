import React from 'react';
import clsx from 'clsx';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import './InteractionFeedback.scss';
import { Spinner } from '@designbasekorea/ui';

export type FeedbackStatus = 'default' | 'warning' | 'error' | 'success' | 'info' | 'loading';

export interface InteractionFeedbackProps {
    /** 피드백 상태 */
    status?: FeedbackStatus;
    /** 메인 메시지 - 문자열 또는 { key, values } */
    message?: I18nText;
    /** 경고/에러 메시지 - 문자열 또는 { key, values } */
    statusMessage?: I18nText;
    /** 왼쪽 영역에 표시할 커스텀 컨텐츠 */
    leftContent?: React.ReactNode;
    /** 오른쪽 영역에 표시할 액션 (예: 정렬 옵션, 버튼 등) */
    rightAction?: React.ReactNode;
    /** 컨텐츠 표시 여부 */
    visible?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 소비자가 주입할 번역함수 (선택) */
    t?: TFunctionLite;
}

export const InteractionFeedback: React.FC<InteractionFeedbackProps> = ({
    status = 'default',
    message,
    statusMessage,
    leftContent,
    rightAction,
    visible = true,
    className,
    t
}) => {
    const feedbackClasses = clsx(
        'designbase-figma-interaction',
        `designbase-figma-interaction--${status}`,
        {
            'designbase-figma-interaction--visible': visible,
        },
        className
    );

    if (!visible) return null;

    return (
        <div className={feedbackClasses}>
            <div className="designbase-figma-interaction__content">
                {/* 왼쪽 영역: 메시지 또는 커스텀 컨텐츠 */}
                <div className="designbase-figma-interaction__left">
                    {leftContent || (
                        <div className="designbase-figma-interaction__message">
                            {status === 'loading' && (
                                <Spinner size="s" type="circular" label="불러오는 중입니다..." showLabel={false} />
                            )}
                            {(message || status === 'loading') && (
                                <span className="designbase-figma-interaction__text">
                                    {resolveText(t, message || '불러오는 중입니다...')}
                                </span>
                            )}
                            {statusMessage && (
                                <span className="designbase-figma-interaction__status-text">
                                    {resolveText(t, statusMessage)}
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* 오른쪽 영역: 액션 (정렬 옵션, 버튼 등) */}
                {rightAction && (
                    <div className="designbase-figma-interaction__right">
                        {rightAction}
                    </div>
                )}
            </div>
        </div>
    );
};

InteractionFeedback.displayName = 'InteractionFeedback';

export default InteractionFeedback;

