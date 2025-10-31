import React, { useState, useCallback, createContext, useContext } from 'react';
import { Toast, ToastContainer, ToastItem } from '@designbasekorea/ui';
import './FigmaToast.scss';

// Toast Context
interface ToastContextType {
    addToast: (toast: Omit<ToastItem, 'id' | 'createdAt'>) => void;
    removeToast: (id: string) => void;
    showToast: (message: string, options?: Partial<Omit<ToastItem, 'id' | 'createdAt' | 'title'>>) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

// useToast Hook
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a FigmaToastProvider');
    }
    return context;
};

// FigmaToast Provider
export interface FigmaToastProviderProps {
    children: React.ReactNode;
    position?: 'top-right' | 'top-center' | 'bottom-center' | 'bottom-right';
    maxToasts?: number;
}

export const FigmaToastProvider: React.FC<FigmaToastProviderProps> = ({
    children,
    position = 'top-right',
    maxToasts = 5,
}) => {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    const addToast = useCallback((toast: Omit<ToastItem, 'id' | 'createdAt'>) => {
        const id = `figma-toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newToast: ToastItem = {
            ...toast,
            id,
            createdAt: Date.now(),
        };

        setToasts(prev => {
            const updated = [newToast, ...prev];
            return updated.slice(0, maxToasts);
        });
    }, [maxToasts]);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    const showToast = useCallback((message: string, options: Partial<Omit<ToastItem, 'id' | 'createdAt' | 'title'>> = {}) => {
        addToast({
            title: message,
            status: 'info',
            duration: 3000,
            showProgress: false,
            showCloseButton: true,
            ...options,
        });
    }, [addToast]);

    const contextValue: ToastContextType = {
        addToast,
        removeToast,
        showToast,
    };

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <ToastContainer
                toasts={toasts}
                onRemoveToast={removeToast}
                position={position}
                maxToasts={maxToasts}
            />
        </ToastContext.Provider>
    );
};

// 간단한 Toast 컴포넌트 (기존 useToast와 호환)
export interface FigmaToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
    type?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    className?: string;
}

export const FigmaToast: React.FC<FigmaToastProps> = ({
    message,
    isVisible,
    onClose,
    type = 'info',
    duration = 3000,
    className,
}) => {
    if (!isVisible) return null;

    return (
        <div className={`figma-toast-fixed-wrap ${className || ''}`}>
            <Toast
                id="figma-toast-simple"
                title={message}
                status={type}
                duration={duration}
                showProgress={false}
                showCloseButton={true}
                onClose={onClose}
                position="top-right"
            />
        </div>
    );
};

// 기존 useToast와 호환되는 훅
export const useFigmaToast = () => {
    const [toast, setToast] = useState({ message: '', isVisible: false });

    const showToast = useCallback((message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') => {
        setToast({ message, isVisible: true });
        setTimeout(() => setToast({ message: '', isVisible: false }), 5000);
    }, []);

    const toastComponent = toast.isVisible ? (
        <FigmaToast
            message={toast.message}
            isVisible={toast.isVisible}
            onClose={() => setToast({ message: '', isVisible: false })}
            type="info"
            duration={5000}
        />
    ) : null;

    return { showToast, toastComponent };
};

FigmaToastProvider.displayName = 'FigmaToastProvider';
FigmaToast.displayName = 'FigmaToast';
