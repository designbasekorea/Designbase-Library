/**
 * ToastContainer 컴포넌트
 * 
 * 목적: 여러 토스트를 관리하고 위치별로 그룹화하는 컨테이너
 * 기능: 토스트 추가/제거, 위치별 관리, 최대 개수 제한
 */

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import { Toast, ToastProps, ToastStatus } from './Toast';
import './ToastContainer.scss';

export interface ToastItem extends Omit<ToastProps, 'onClose'> {
    id: string;
    createdAt: number;
}

export interface ToastContainerProps {
    /** 토스트 위치 */
    position?: 'top-right' | 'top-center' | 'bottom-center' | 'bottom-right';
    /** 최대 토스트 개수 */
    maxToasts?: number;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 토스트 목록 */
    toasts?: ToastItem[];
    /** 토스트 제거 핸들러 */
    onRemoveToast?: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
    position = 'top-right',
    maxToasts = 5,
    className,
    toasts: externalToasts,
    onRemoveToast,
}) => {
    const [internalToasts, setInternalToasts] = useState<ToastItem[]>([]);

    // 외부에서 toasts를 제공하면 그것을 사용, 아니면 내부 상태 사용
    const toasts = externalToasts || internalToasts;
    const removeToast = onRemoveToast || useCallback((id: string) => {
        setInternalToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    const addToast = useCallback((toast: Omit<ToastItem, 'id' | 'createdAt'>) => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newToast: ToastItem = {
            ...toast,
            id,
            createdAt: Date.now(),
        };

        setInternalToasts(prev => {
            const updated = [newToast, ...prev];
            return updated.slice(0, maxToasts);
        });
    }, [maxToasts]);

    const classes = clsx(
        'designbase-toast-container',
        `designbase-toast-container--${position}`,
        className
    );

    return (
        <div className={classes}>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    {...toast}
                    onClose={removeToast}
                />
            ))}
        </div>
    );
};

ToastContainer.displayName = 'ToastContainer';

// 토스트 컨텍스트 및 훅
import { createContext, useContext } from 'react';

interface ToastContextType {
    addToast: (toast: Omit<ToastItem, 'id' | 'createdAt'>) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    const addToast = useCallback((toast: Omit<ToastItem, 'id' | 'createdAt'>) => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newToast: ToastItem = {
            ...toast,
            id,
            createdAt: Date.now(),
        };

        setToasts(prev => {
            const updated = [newToast, ...prev];
            return updated.slice(0, 5); // 최대 5개
        });
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer toasts={toasts} onRemoveToast={removeToast} />
        </ToastContext.Provider>
    );
};

export default ToastContainer;
