/**
 * EmptyState 컴포넌트
 * 
 * 목적: 데이터가 없거나 조건에 맞는 결과가 없을 때 사용자에게 상황을 설명하고 다음 행동을 유도
 * 기능: 다양한 유형, 아이콘, CTA 버튼, 접근성 지원
 */

import React from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import {
    SearchIcon,
    BookmarkIcon,
    UserIcon,
    CloudCloseIcon,
    BulbIcon,
    PlusIcon,
    RefreshIcon,
    SettingsIcon,
    HeartIcon,
    StarIcon,
    FolderIcon,
    MessageIcon,
    CalendarIcon,
    CameraIcon,
    BookIcon,
    GalleryIcon,
    VideoIcon,
    MusicIcon,
    DownloadIcon,
    UploadIcon
} from '@designbasekorea/icons';
import './EmptyState.scss';

export type EmptyStateVariant = 'no-data' | 'no-results' | 'no-access' | 'error' | 'onboarding';
export type EmptyStateSize = 's' | 'm' | 'l';

export interface EmptyStateProps {
    /** 빈 상태 유형 */
    variant?: EmptyStateVariant;
    /** 빈 상태 크기 */
    size?: EmptyStateSize;
    /** 제목 */
    title: string;
    /** 설명 */
    description?: string | React.ReactNode;
    /** 커스텀 아이콘 */
    icon?: React.ComponentType<any>;
    /** 아이콘 크기 */
    iconSize?: number;
    /** 액션 버튼 텍스트 */
    actionText?: string;
    /** 액션 버튼 클릭 핸들러 */
    onAction?: () => void;
    /** 보조 액션 버튼 텍스트 */
    secondaryActionText?: string;
    /** 보조 액션 버튼 클릭 핸들러 */
    onSecondaryAction?: () => void;
    /** 커스텀 액션 컴포넌트 */
    action?: React.ReactNode;
    /** 이미지 URL */
    image?: string;
    /** 이미지 대체 텍스트 */
    imageAlt?: string;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    variant = 'no-data',
    size = 'm',
    title,
    description,
    icon: CustomIcon,
    iconSize,
    actionText,
    onAction,
    secondaryActionText,
    onSecondaryAction,
    action,
    image,
    imageAlt,
    className,
}) => {
    const getDefaultIcon = () => {
        const defaultIconSize = iconSize || (() => {
            switch (size) {
                case 's': return 24;
                case 'm': return 32;
                case 'l': return 48;
                default: return 32;
            }
        })();

        if (CustomIcon) {
            return <CustomIcon size={defaultIconSize} />;
        }

        switch (variant) {
            case 'no-data':
                return <PlusIcon size={defaultIconSize} />;
            case 'no-results':
                return <SearchIcon size={defaultIconSize} />;
            case 'no-access':
                return <UserIcon size={defaultIconSize} />;
            case 'error':
                return <CloudCloseIcon size={defaultIconSize} />;
            case 'onboarding':
                return <BulbIcon size={defaultIconSize} />;
            default:
                return <PlusIcon size={defaultIconSize} />;
        }
    };

    const getDefaultActionText = () => {
        if (actionText) return actionText;

        switch (variant) {
            case 'no-data':
                return '첫 번째 항목 추가하기';
            case 'no-results':
                return '검색 조건 변경하기';
            case 'no-access':
                return '로그인하기';
            case 'error':
                return '다시 시도하기';
            case 'onboarding':
                return '시작하기';
            default:
                return '액션하기';
        }
    };

    const classes = clsx(
        'designbase-empty-state',
        `designbase-empty-state--${variant}`,
        `designbase-empty-state--${size}`,
        className
    );

    return (
        <div className={classes} role="status" aria-live="polite">
            <div className="designbase-empty-state__content">
                {/* 이미지 또는 아이콘 */}
                {image ? (
                    <div className="designbase-empty-state__image">
                        <img
                            src={image}
                            alt={imageAlt || title}
                            className="designbase-empty-state__image-element"
                        />
                    </div>
                ) : (
                    <div className="designbase-empty-state__icon">
                        {getDefaultIcon()}
                    </div>
                )}

                {/* 제목 */}
                <h3 className="designbase-empty-state__title">
                    {title}
                </h3>

                {/* 설명 */}
                {description && (
                    <div className="designbase-empty-state__description">
                        {description}
                    </div>
                )}

                {/* 액션 버튼들 */}
                {(action || actionText || secondaryActionText) && (
                    <div className="designbase-empty-state__actions">
                        {action ? (
                            action
                        ) : (
                            <>
                                {actionText && onAction && (
                                    <Button
                                        variant={variant === 'onboarding' ? 'primary' : 'secondary'}
                                        size={size}
                                        onPress={onAction}
                                    >
                                        {actionText}
                                    </Button>
                                )}
                                {secondaryActionText && onSecondaryAction && (
                                    <Button
                                        variant="tertiary"
                                        size={size}
                                        onPress={onSecondaryAction}
                                    >
                                        {secondaryActionText}
                                    </Button>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

EmptyState.displayName = 'EmptyState';

export default EmptyState;
