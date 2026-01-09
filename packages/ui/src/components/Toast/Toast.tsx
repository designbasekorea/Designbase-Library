/**
 * Toast 컴포넌트
 * 
 * 목적: 사용자에게 알림 메시지를 표시하는 토스트 컴포넌트
 * 기능: 다양한 상태, 자동 닫힘, 프로그레스바, 아이콘, 위치 조절
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션
 */

import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { CloseIcon, CircleCheckFilledIcon, WarningIcon, InfoIcon, DeleteIcon } from '@designbasekorea/icons';
import type { IconProps } from '@designbasekorea/icons';
import './Toast.scss';

export type ToastStatus = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
    /** 토스트 ID (고유 식별자) */
    id: string;
    /** 토스트 상태 */
    status?: ToastStatus;
    /** 토스트 제목 */
    title: string;
    /** 토스트 설명 (서브 텍스트) */
    description?: string;
    /** 왼쪽 아이콘 */
    icon?: React.ComponentType<IconProps>;
    /** 자동 닫힘 시간 (ms, 0이면 자동 닫힘 비활성화) */
    duration?: number;
    /** 프로그레스바 표시 여부 */
    showProgress?: boolean;
    /** 닫기 버튼 표시 여부 */
    showCloseButton?: boolean;
    /** 닫기 핸들러 */
    onClose: (id: string) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const Toast: React.FC<ToastProps> = ({
    id,
    status = 'info',
    title,
    description,
    icon: Icon,
    duration = 5000,
    showProgress = false,
    showCloseButton = true,
    onClose,
    className,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(100);
    const progressRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const progressIntervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

    // 토스트 표시 애니메이션
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    // 자동 닫힘 및 프로그레스바
    useEffect(() => {
        if (duration <= 0) return;

        const startTime = Date.now();
        const endTime = startTime + duration;

        // 프로그레스바 업데이트
        progressIntervalRef.current = setInterval(() => {
            const now = Date.now();
            const remaining = Math.max(0, endTime - now);
            const newProgress = (remaining / duration) * 100;
            setProgress(newProgress);

            if (remaining <= 0) {
                handleClose();
            }
        }, 10);

        // 자동 닫힘 타이머
        timeoutRef.current = setTimeout(() => {
            handleClose();
        }, duration);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, [duration]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose(id);
        }, 300); // 애니메이션 완료 후 제거 (0.3s transition과 동일)
    };

    const handleCloseClick = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        handleClose();
    };

    const classes = clsx(
        'designbase-toast',
        `designbase-toast--${status}`,
        {
            'designbase-toast--visible': isVisible,
            'designbase-toast--with-icon': Icon,
            'designbase-toast--with-description': description,
        },
        className
    );

    const getStatusIcon = () => {
        if (Icon) return <Icon size={20} />;

        // 기본 상태 아이콘 (아이콘 패키지에서 가져온 아이콘 사용)
        const iconMap = {
            success: CircleCheckFilledIcon,
            error: DeleteIcon,
            warning: WarningIcon,
            info: InfoIcon,
        };

        const StatusIcon = iconMap[status];
        return <StatusIcon size={20} />;
    };

    const getIconColor = () => {
        const colorMap = {
            success: 'success',
            error: 'error',
            warning: 'warning',
            info: 'info',
        };
        return colorMap[status];
    };

    return (
        <div
            className={classes}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            {/* 프로그레스바 */}
            {duration > 0 && showProgress && (
                <div className="designbase-toast__progress">
                    <div
                        ref={progressRef}
                        className="designbase-toast__progress-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}

            {/* 아이콘 */}
            <div className={`designbase-toast__icon designbase-toast__icon--${getIconColor()}`}>
                {getStatusIcon()}
            </div>

            {/* 내용 */}
            <div className="designbase-toast__content">
                <div className="designbase-toast__title">{title}</div>
                {description && (
                    <div className="designbase-toast__description">{description}</div>
                )}
            </div>

            {/* 닫기 버튼 */}
            {showCloseButton && (
                <button
                    type="button"
                    onClick={handleCloseClick}
                    className="designbase-toast__close-button"
                    aria-label="토스트 닫기"
                >
                    <CloseIcon size={16} />
                </button>
            )}
        </div>
    );
};

Toast.displayName = 'Toast';

export default Toast;
