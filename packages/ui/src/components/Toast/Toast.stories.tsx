import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from './Toast';
import { Button } from '../Button/Button';
import { CircleCheckFilledIcon, WarningIcon, InfoIcon, CloseIcon, XIcon } from '@designbasekorea/icons';

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
        position: {
            control: { type: 'select' },
            options: ['top-right', 'top-center', 'bottom-center', 'bottom-right'],
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
        const [toasts, setToasts] = useState<string[]>([]);

        const addToast = (status: 'success' | 'error' | 'warning' | 'info') => {
            const id = `toast-${Date.now()}`;
            setToasts(prev => [...prev, id]);
        };

        const removeToast = (id: string) => {
            setToasts(prev => prev.filter(toastId => toastId !== id));
        };

        const getToastProps = (status: 'success' | 'error' | 'warning' | 'info') => {
            const config = {
                success: {
                    title: '성공!',
                    description: '작업이 성공적으로 완료되었습니다.',
                    icon: CircleCheckFilledIcon,
                },
                error: {
                    title: '오류 발생',
                    description: '작업 중 오류가 발생했습니다.',
                    icon: XIcon,
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
            return config[status];
        };

        return (
            <>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <Button onPress={() => addToast('success')}>성공</Button>
                    <Button onPress={() => addToast('error')}>오류</Button>
                    <Button onPress={() => addToast('warning')}>경고</Button>
                    <Button onPress={() => addToast('info')}>정보</Button>
                </div>

                {toasts.map((id, index) => {
                    const status = ['success', 'error', 'warning', 'info'][index % 4] as 'success' | 'error' | 'warning' | 'info';
                    const props = getToastProps(status);

                    return (
                        <Toast
                            key={id}
                            id={id}
                            status={status}
                            title={props.title}
                            description={props.description}
                            icon={props.icon}
                            onClose={removeToast}
                        />
                    );
                })}
            </>
        );
    },
};

export const Interactive: Story = {
    render: () => {
        const [toasts, setToasts] = useState<string[]>([]);

        const addToast = (status: 'success' | 'error' | 'warning' | 'info') => {
            const id = `toast-${Date.now()}`;
            setToasts(prev => [...prev, id]);
        };

        const removeToast = (id: string) => {
            setToasts(prev => prev.filter(toastId => toastId !== id));
        };

        const getToastProps = (status: 'success' | 'error' | 'warning' | 'info') => {
            const config = {
                success: {
                    title: '성공!',
                    description: '작업이 성공적으로 완료되었습니다.',
                    icon: CircleCheckFilledIcon,
                },
                error: {
                    title: '오류 발생',
                    description: '작업 중 오류가 발생했습니다.',
                    icon: XIcon,
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
            return config[status];
        };

        return (
            <>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <Button onPress={() => addToast('success')}>성공</Button>
                    <Button onPress={() => addToast('error')}>오류</Button>
                    <Button onPress={() => addToast('warning')}>경고</Button>
                    <Button onPress={() => addToast('info')}>정보</Button>
                </div>

                {toasts.map((id, index) => {
                    const status = ['success', 'error', 'warning', 'info'][index % 4] as 'success' | 'error' | 'warning' | 'info';
                    const props = getToastProps(status);

                    return (
                        <Toast
                            key={id}
                            id={id}
                            status={status}
                            title={props.title}
                            description={props.description}
                            icon={props.icon}
                            duration={3000}
                            onClose={removeToast}
                        />
                    );
                })}
            </>
        );
    },
};

export const Positions: Story = {
    render: () => {
        const [position, setPosition] = useState<'top-right' | 'top-center' | 'bottom-center' | 'bottom-right'>('top-right');
        const [toasts, setToasts] = useState<string[]>([]);

        const positions = [
            { value: 'top-right', label: '우측 상단' },
            { value: 'top-center', label: '상단 중앙' },
            { value: 'bottom-center', label: '하단 중앙' },
            { value: 'bottom-right', label: '우측 하단' },
        ] as const;

        const addToast = () => {
            const id = `toast-${Date.now()}`;
            setToasts(prev => [...prev, id]);
        };

        const removeToast = (id: string) => {
            setToasts(prev => prev.filter(toastId => toastId !== id));
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

                {toasts.map((id) => (
                    <Toast
                        key={id}
                        id={id}
                        title={`${positions.find(p => p.value === position)?.label} 위치`}
                        description="토스트가 선택한 위치에 표시됩니다."
                        position={position}
                        duration={3000}
                        onClose={removeToast}
                    />
                ))}
            </>
        );
    },
};
