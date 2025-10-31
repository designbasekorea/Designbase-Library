/**
 * Modal 컴포넌트
 * 
 * 목적: 피그마 플러그인 환경에 최적화된 모달/다이얼로그 컴포넌트 제공
 * 기능: 오버레이, 포커스 관리, ESC 키 닫기, 애니메이션
 * 접근성: ARIA 가이드라인 준수, 포커스 트랩, 키보드 네비게이션
 */

import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { CloseIcon } from '@designbasekorea/icons';
import Button from '../Button/Button';
import './Modal.scss';

export interface ModalProps {
    /** 모달 열림 상태 */
    isOpen: boolean;
    /** 모달 닫기 핸들러 */
    onClose: () => void;
    /** 모달 제목 */
    title?: string;
    /** 모달 크기 */
    size?: 's' | 'm' | 'l' | 'xl' | 'full';
    /** 바깥쪽 클릭으로 닫기 여부 */
    closeOnOutsideClick?: boolean;
    /** ESC 키로 닫기 여부 */
    closeOnEscape?: boolean;
    /** 모달 내용 */
    children: React.ReactNode;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 오버레이 클래스 */
    overlayClassName?: string;
}

export interface ModalHeaderProps {
    /** 제목 */
    title?: string;
    /** 닫기 버튼 표시 여부 */
    showCloseButton?: boolean;
    /** 닫기 핸들러 */
    onClose?: () => void;
    /** 아이콘 크기 */
    iconSize?: number;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 헤더 내용 */
    children?: React.ReactNode;
}

export interface ModalBodyProps {
    /** 추가 CSS 클래스 */
    className?: string;
    /** 바디 내용 */
    children?: React.ReactNode;
}

export interface ModalFooterProps {
    /** 추가 CSS 클래스 */
    className?: string;
    /** 푸터 내용 */
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    size = 'm',
    closeOnOutsideClick = true,
    closeOnEscape = true,
    children,
    className,
    overlayClassName,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // 아이콘 크기 계산 (m이 기본값)
    const iconSize = size === 's' ? 16 : size === 'l' ? 20 : size === 'xl' ? 24 : 18;

    // Prevent scrolling while modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle ESC key
    useEffect(() => {
        if (!closeOnEscape || !isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [closeOnEscape, isOpen, onClose]);

    if (!isOpen) return null;

    const modalClasses = clsx(
        'designbase-modal',
        `designbase-modal--${size}`,
        className
    );

    const overlayClasses = clsx(
        'designbase-modal__overlay',
        overlayClassName
    );

    return (
        <div
            className={overlayClasses}
            onClick={closeOnOutsideClick ? onClose : undefined}
        >
            <div
                ref={modalRef}
                className={modalClasses}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
            >
                {title && (
                    <ModalHeader title={title} showCloseButton onClose={onClose} iconSize={iconSize} />
                )}
                <div className="designbase-modal__content">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ModalHeader: React.FC<ModalHeaderProps> = ({
    title,
    showCloseButton = true,
    onClose,
    iconSize = 20,
    className,
    children,
}) => {
    const classes = clsx(
        'designbase-modal__header',
        className
    );

    return (
        <div className={classes}>
            <div className="designbase-modal__header-content">
                {title && (
                    <h2 id="modal-title" className="designbase-modal__title">{title}</h2>
                )}
                {children}
            </div>
            {showCloseButton && onClose && (
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="모달 닫기"
                    className="designbase-modal__close-button"
                >
                    <CloseIcon size={iconSize} color="currentColor" />
                </button>
            )}
        </div>
    );
};

const ModalBody: React.FC<ModalBodyProps> = ({
    className,
    children,
}) => {
    const classes = clsx(
        'designbase-modal__body',
        className
    );

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

const ModalFooter: React.FC<ModalFooterProps> = ({
    className,
    children,
}) => {
    const classes = clsx(
        'designbase-modal__footer',
        className
    );

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

Modal.displayName = 'Modal';
ModalHeader.displayName = 'ModalHeader';
ModalBody.displayName = 'ModalBody';
ModalFooter.displayName = 'ModalFooter';

export { Modal, ModalHeader, ModalBody, ModalFooter };
export default Modal;
