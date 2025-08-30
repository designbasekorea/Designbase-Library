/**
 * Confirm 컴포넌트
 * 
 * 목적: 사용자에게 확인을 요청하는 모달 다이얼로그 제공
 * 기능: 다양한 스타일, 아이콘, 커스텀 버튼, 키보드 단축키
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import {
    BulbIcon,
    AwardIcon,
    BellActiveIcon,
    CloudCloseIcon,
    CloseIcon
} from '@designbase/icons';
import { Button } from '../Button/Button';
import './Confirm.scss';

export type ConfirmVariant = 'info' | 'success' | 'warning' | 'danger';
export type ConfirmSize = 'sm' | 'md' | 'lg';

export interface ConfirmProps {
    /** 확인 다이얼로그 열림 상태 */
    open: boolean;
    /** 제목 */
    title?: string;
    /** 내용 */
    children: React.ReactNode;
    /** 확인 버튼 텍스트 */
    confirmText?: string;
    /** 취소 버튼 텍스트 */
    cancelText?: string;
    /** 확인 버튼 스타일 */
    confirmVariant?: 'primary' | 'success' | 'warning' | 'danger';
    /** 다이얼로그 스타일 */
    variant?: ConfirmVariant;
    /** 다이얼로그 크기 */
    size?: ConfirmSize;
    /** 아이콘 표시 여부 */
    showIcon?: boolean;
    /** 확인 버튼 비활성화 여부 */
    confirmDisabled?: boolean;
    /** 취소 버튼 비활성화 여부 */
    cancelDisabled?: boolean;
    /** 확인 핸들러 */
    onConfirm?: () => void;
    /** 취소 핸들러 */
    onCancel?: () => void;
    /** 닫기 핸들러 */
    onClose?: () => void;
    /** ESC 키로 닫기 여부 */
    closeOnEscape?: boolean;
    /** 배경 클릭으로 닫기 여부 */
    closeOnOverlayClick?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Confirm: React.FC<ConfirmProps> = ({
    open,
    title,
    children,
    confirmText = '확인',
    cancelText = '취소',
    confirmVariant = 'primary',
    variant = 'info',
    size = 'md',
    showIcon = true,
    confirmDisabled = false,
    cancelDisabled = false,
    onConfirm,
    onCancel,
    onClose,
    closeOnEscape = true,
    closeOnOverlayClick = true,
    className,
    ...props
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // ESC 키 처리
    useEffect(() => {
        if (!open || !closeOnEscape) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, closeOnEscape]);

    // 포커스 트랩
    useEffect(() => {
        if (open && modalRef.current) {
            const focusableElements = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (firstElement) {
                firstElement.focus();
            }

            const handleTabKey = (e: KeyboardEvent) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            };

            document.addEventListener('keydown', handleTabKey);
            return () => {
                document.removeEventListener('keydown', handleTabKey);
            };
        }
    }, [open]);

    // 스크롤 방지
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = '';
            };
        }
    }, [open]);

    const handleClose = () => {
        onClose?.();
    };

    const handleConfirm = () => {
        onConfirm?.();
        handleClose();
    };

    const handleCancel = () => {
        onCancel?.();
        handleClose();
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            handleClose();
        }
    };

    const getIcon = () => {
        if (!showIcon) return null;

        const iconProps = {
            size: size === 'sm' ? 20 : size === 'lg' ? 32 : 24,
        };

        switch (variant) {
            case 'info':
                return <BulbIcon {...iconProps} />;
            case 'success':
                return <AwardIcon {...iconProps} />;
            case 'warning':
                return <BellActiveIcon {...iconProps} />;
            case 'danger':
                return <CloudCloseIcon {...iconProps} />;
            default:
                return <BulbIcon {...iconProps} />;
        }
    };

    if (!open) {
        return null;
    }

    const classes = clsx(
        'designbase-confirm',
        `designbase-confirm--${size}`,
        className
    );

    const modalClasses = clsx(
        'designbase-confirm__modal',
        `designbase-confirm__modal--${variant}`,
        `designbase-confirm__modal--${size}`
    );

    return (
        <div
            className="designbase-confirm__overlay"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'confirm-title' : undefined}
            aria-describedby="confirm-content"
        >
            <div
                ref={modalRef}
                className={modalClasses}
                {...props}
            >
                <div className="designbase-confirm__header">
                    {showIcon && (
                        <div className="designbase-confirm__icon">
                            {getIcon()}
                        </div>
                    )}
                    <div className="designbase-confirm__title-area">
                        {title && (
                            <h2
                                id="confirm-title"
                                className="designbase-confirm__title"
                            >
                                {title}
                            </h2>
                        )}
                    </div>
                </div>

                <div
                    id="confirm-content"
                    className="designbase-confirm__content"
                >
                    {children}
                </div>

                <div className="designbase-confirm__footer">
                    <Button
                        variant="outlined"
                        onClick={handleCancel}
                        disabled={cancelDisabled}
                    >
                        {cancelText}
                    </Button>
                    <Button
                        variant={confirmVariant}
                        onClick={handleConfirm}
                        disabled={confirmDisabled}
                    >
                        {confirmText}
                    </Button>
                </div>
            </div>
        </div>
    );
};

Confirm.displayName = 'Confirm';

export default Confirm;
