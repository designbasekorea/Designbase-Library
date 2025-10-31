/**
 * Alert 컴포넌트
 * 
 * 목적: 사용자에게 중요한 정보나 경고를 표시하는 알림 컴포넌트 제공
 * 기능: 다양한 스타일, 아이콘, 닫기 버튼, 액션 버튼
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState } from 'react';
import clsx from 'clsx';
import {
    InfoFilledIcon,
    CircleCheckFilledIcon,
    WarningFilledIcon,
    ErrorFilledIcon,
    CloseIcon
} from '@designbasekorea/icons';
import { Button } from '../Button/Button';
import './Alert.scss';

export type AlertVariant = 'default' | 'info' | 'success' | 'warning' | 'danger';
export type AlertSize = 's' | 'm' | 'l';

export interface AlertAction {
    /** 액션 라벨 */
    label: string;
    /** 액션 타입 */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';
    /** 액션 크기 */
    size?: 's' | 'm' | 'l';
    /** 액션 핸들러 */
    onClick: () => void;
    /** 액션 비활성화 여부 */
    disabled?: boolean;
}

export interface AlertProps {
    /** 알림 제목 */
    title?: string;
    /** 알림 내용 */
    children: React.ReactNode;
    /** 알림 스타일 */
    variant?: AlertVariant;
    /** 알림 크기 */
    size?: AlertSize;
    /** 아이콘 표시 여부 */
    showIcon?: boolean;
    /** 닫기 버튼 표시 여부 */
    closable?: boolean;
    /** 액션 버튼들 (기존 방식) */
    actions?: React.ReactNode;
    /** 액션 버튼들 (새로운 방식) */
    actionButtons?: AlertAction[];
    /** 닫기 핸들러 */
    onClose?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Alert: React.FC<AlertProps> = ({
    title,
    children,
    variant = 'info',
    size = 'm',
    showIcon = true,
    closable = true,
    actions,
    actionButtons,
    onClose,
    className,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose?.();
    };

    if (!isVisible) {
        return null;
    }

    // 아이콘 크기 계산 (m이 기본값)
    const iconSize = size === 's' ? 16 : size === 'l' ? 24 : 20;

    const getIcon = () => {
        if (!showIcon) return null;

        const iconProps = {
            size: iconSize,
            color: 'currentColor',
        };

        switch (variant) {
            case 'info':
                return <InfoFilledIcon {...iconProps} />;
            case 'success':
                return <CircleCheckFilledIcon {...iconProps} />;
            case 'warning':
                return <WarningFilledIcon {...iconProps} />;
            case 'danger':
                return <ErrorFilledIcon {...iconProps} />;
            default:
                return <InfoFilledIcon {...iconProps} />;
        }
    };

    const classes = clsx(
        'designbase-alert',
        `designbase-alert--${variant}`,
        `designbase-alert--${size}`,
        {
            'designbase-alert--with-icon': showIcon,
            'designbase-alert--closable': closable,
        },
        className
    );

    return (
        <div
            className={classes}
            role="alert"
            aria-live="polite"
            {...props}
        >
            <div className="designbase-alert__content">
                {showIcon && (
                    <div className="designbase-alert__icon">
                        {getIcon()}
                    </div>
                )}
                <div className="designbase-alert__body">
                    {title && (
                        <div className="designbase-alert__title">
                            {title}
                        </div>
                    )}
                    <div className="designbase-alert__message">
                        {children}
                    </div>
                </div>
                {closable && (
                    <button
                        type="button"
                        className="designbase-alert__close"
                        onClick={handleClose}
                        aria-label="알림 닫기"
                    >
                        <CloseIcon size={iconSize} />
                    </button>
                )}
            </div>
            {(actions || actionButtons) && (
                <div className="designbase-alert__actions">
                    {actionButtons ? (
                        <div className="designbase-alert__action-buttons">
                            {actionButtons.map((action, index) => (
                                <Button
                                    key={index}
                                    size={action.size || size}
                                    variant={action.variant || 'tertiary'}
                                    onClick={action.onClick}
                                    disabled={action.disabled}
                                >
                                    {action.label}
                                </Button>
                            ))}
                        </div>
                    ) : (
                        actions
                    )}
                </div>
            )}
        </div>
    );
};

Alert.displayName = 'Alert';

export default Alert;
