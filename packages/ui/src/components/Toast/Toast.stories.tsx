import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from './Toast';
import { ToastContainer, ToastProvider, useToast } from './ToastContainer';
import { Button } from '../Button/Button';
import { CircleCheckFilledIcon, WarningIcon, InfoIcon, ErrorIcon } from '@designbasekorea/icons';

const meta: Meta<typeof Toast> = {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: { type: 'select' },
            options: ['success', 'error', 'warning', 'info'],
        },
        duration: {
            control: { type: 'number' },
        },
        showCloseButton: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [isVisible, setIsVisible] = useState(false);

        return (
            <>
                <Button onPress={() => setIsVisible(true)}>토스트 표시</Button>
                {isVisible && (
                    <Toast
                        id="default-toast"
                        title="기본 토스트"
                        description="이것은 기본 토스트 메시지입니다."
                        onClose={() => setIsVisible(false)}
                    />
                )}
            </>
        );
    },
};

export const Statuses: Story = {
    render: () => {
        return (
            <ToastProvider position="top-right">
                <StatusesExample />
            </ToastProvider>
        );
    },
};

const StatusesExample = () => {
    const toast = useToast();

    const addToast = (status: 'success' | 'error' | 'warning' | 'info') => {
        const config = {
            success: {
                title: '성공!',
                description: '작업이 성공적으로 완료되었습니다.',
                icon: CircleCheckFilledIcon,
            },
            error: {
                title: '오류 발생',
                description: '작업 중 오류가 발생했습니다.',
                icon: ErrorIcon,
            },
            warning: {
                title: '경고',
                description: '주의가 필요한 상황입니다.',
                icon: WarningIcon,
            },
            info: {
                title: '정보',
                description: '참고할 정보입니다.',
                icon: InfoIcon,
            },
        };
        const props = config[status];
        toast.addToast({
            status,
            title: props.title,
            description: props.description,
            icon: props.icon,
        });
    };

    return (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Button onPress={() => addToast('success')}>성공</Button>
            <Button onPress={() => addToast('error')}>오류</Button>
            <Button onPress={() => addToast('warning')}>경고</Button>
            <Button onPress={() => addToast('info')}>정보</Button>
        </div>
    );
};

export const Interactive: Story = {
    render: () => {
        return (
            <ToastProvider position="top-right">
                <InteractiveExample />
            </ToastProvider>
        );
    },
};

const InteractiveExample = () => {
    const toast = useToast();

    const addToast = (status: 'success' | 'error' | 'warning' | 'info') => {
        const config = {
            success: {
                title: '성공!',
                description: '작업이 성공적으로 완료되었습니다.',
                icon: CircleCheckFilledIcon,
            },
            error: {
                title: '오류 발생',
                description: '작업 중 오류가 발생했습니다.',
                icon: ErrorIcon,
            },
            warning: {
                title: '경고',
                description: '주의가 필요한 상황입니다.',
                icon: WarningIcon,
            },
            info: {
                title: '정보',
                description: '참고할 정보입니다.',
                icon: InfoIcon,
            },
        };
        const props = config[status];
        toast.addToast({
            status,
            title: props.title,
            description: props.description,
            icon: props.icon,
            duration: 3000,
        });
    };

    return (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Button onPress={() => addToast('success')}>성공</Button>
            <Button onPress={() => addToast('error')}>오류</Button>
            <Button onPress={() => addToast('warning')}>경고</Button>
            <Button onPress={() => addToast('info')}>정보</Button>
        </div>
    );
};

export const Positions: Story = {
    render: () => {
        return (
            <PositionsExample />
        );
    },
};

const PositionsExample = () => {
    const [position, setPosition] = useState<'top-right' | 'top-center' | 'bottom-center' | 'bottom-right'>('bottom-right');
    const [toasts, setToasts] = useState<Array<{ id: string; position: typeof position }>>([]);

    const positions = [
        { value: 'top-right', label: '우측 상단' },
        { value: 'top-center', label: '상단 중앙' },
        { value: 'bottom-center', label: '하단 중앙' },
        { value: 'bottom-right', label: '우측 하단' },
    ] as const;

    const addToast = () => {
        const id = `toast-${Date.now()}`;
        setToasts(prev => [...prev, { id, position }]);
    };

    const removeToast = (id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {positions.map((pos) => (
                        <Button
                            key={pos.value}
                            variant={position === pos.value ? 'primary' : 'secondary'}
                            onPress={() => setPosition(pos.value)}
                        >
                            {pos.label}
                        </Button>
                    ))}
                </div>
                <Button onPress={addToast}>토스트 추가</Button>
            </div>

            {positions.map((pos) => {
                const positionToasts = toasts.filter(t => t.position === pos.value);
                if (positionToasts.length === 0) return null;

                return (
                    <ToastContainer
                        key={pos.value}
                        position={pos.value}
                        toasts={positionToasts.map(t => ({
                            id: t.id,
                            title: `${pos.label} 위치`,
                            description: '토스트가 선택한 위치에 표시됩니다.',
                            duration: 3000,
                            createdAt: Date.now(),
                        }))}
                        onRemoveToast={removeToast}
                    />
                );
            })}
        </>
    );
};
