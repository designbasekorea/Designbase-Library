import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from './Toast';
import { Button } from '../Button/Button';
import { CircleCheckFilledIcon, WarningIcon, InfoIcon, CloseIcon } from '@designbase/icons';

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
            options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
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
                    icon: CloseIcon,
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
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <Button onPress={() => addToast('success')}>성공 토스트</Button>
                    <Button onPress={() => addToast('error')}>오류 토스트</Button>
                    <Button onPress={() => addToast('warning')}>경고 토스트</Button>
                    <Button onPress={() => addToast('info')}>정보 토스트</Button>
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

export const WithCustomDuration: Story = {
    render: () => {
        const [toasts, setToasts] = useState<string[]>([]);

        const addToast = (duration: number) => {
            const id = `toast-${Date.now()}`;
            setToasts(prev => [...prev, id]);
        };

        const removeToast = (id: string) => {
            setToasts(prev => prev.filter(toastId => toastId !== id));
        };

        return (
            <>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <Button onPress={() => addToast(2000)}>2초 후 닫힘</Button>
                    <Button onPress={() => addToast(5000)}>5초 후 닫힘</Button>
                    <Button onPress={() => addToast(0)}>자동 닫힘 없음</Button>
                </div>

                {toasts.map((id, index) => {
                    const durations = [2000, 5000, 0];
                    const duration = durations[index % durations.length];

                    return (
                        <Toast
                            key={id}
                            id={id}
                            title={`${duration === 0 ? '자동 닫힘 없음' : `${duration / 1000}초 후 닫힘`}`}
                            description="프로그레스바를 확인해보세요."
                            duration={duration}
                            onClose={removeToast}
                        />
                    );
                })}
            </>
        );
    },
};

export const WithoutCloseButton: Story = {
    render: () => {
        const [isVisible, setIsVisible] = useState(false);

        return (
            <>
                <Button onPress={() => setIsVisible(true)}>닫기 버튼 없는 토스트</Button>
                {isVisible && (
                    <Toast
                        id="no-close-toast"
                        title="닫기 버튼 없음"
                        description="이 토스트는 자동으로만 닫힙니다."
                        showCloseButton={false}
                        duration={5000}
                        onClose={() => setIsVisible(false)}
                    />
                )}
            </>
        );
    },
};

export const WithCustomIcon: Story = {
    render: () => {
        const [isVisible, setIsVisible] = useState(false);

        return (
            <>
                <Button onPress={() => setIsVisible(true)}>커스텀 아이콘 토스트</Button>
                {isVisible && (
                    <Toast
                        id="custom-icon-toast"
                        title="커스텀 아이콘"
                        description="사용자 정의 아이콘을 사용한 토스트입니다."
                        icon={CircleCheckFilledIcon}
                        onClose={() => setIsVisible(false)}
                    />
                )}
            </>
        );
    },
};

export const MultipleToasts: Story = {
    render: () => {
        const [toasts, setToasts] = useState<string[]>([]);

        const addToast = () => {
            const id = `toast-${Date.now()}`;
            setToasts(prev => [...prev, id]);
        };

        const removeToast = (id: string) => {
            setToasts(prev => prev.filter(toastId => toastId !== id));
        };

        const clearAll = () => {
            setToasts([]);
        };

        return (
            <>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <Button onPress={addToast}>토스트 추가</Button>
                    <Button variant="secondary" onPress={clearAll}>모두 지우기</Button>
                </div>

                {toasts.map((id, index) => (
                    <Toast
                        key={id}
                        id={id}
                        title={`토스트 ${index + 1}`}
                        description={`이것은 ${index + 1}번째 토스트입니다.`}
                        duration={3000}
                        onClose={removeToast}
                    />
                ))}
            </>
        );
    },
};

export const ToastWithHook: Story = {
    render: () => {
        const [toasts, setToasts] = useState<string[]>([]);

        const showToast = (status: 'success' | 'error' | 'warning' | 'info') => {
            const id = `toast-${Date.now()}`;
            setToasts(prev => [...prev, id]);
        };

        const removeToast = (id: string) => {
            setToasts(prev => prev.filter(toastId => toastId !== id));
        };

        return (
            <>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button onPress={() => showToast('success')}>성공</Button>
                    <Button onPress={() => showToast('error')}>오류</Button>
                    <Button onPress={() => showToast('warning')}>경고</Button>
                    <Button onPress={() => showToast('info')}>정보</Button>
                </div>

                {toasts.map((id) => (
                    <Toast
                        key={id}
                        id={id}
                        status={id.includes('success') ? 'success' : id.includes('error') ? 'error' : id.includes('warning') ? 'warning' : 'info'}
                        title={id.includes('success') ? '성공!' : id.includes('error') ? '오류!' : id.includes('warning') ? '경고!' : '정보'}
                        description={id.includes('success') ? '작업이 완료되었습니다.' : id.includes('error') ? '문제가 발생했습니다.' : id.includes('warning') ? '주의가 필요합니다.' : '참고할 내용입니다.'}
                        duration={3000}
                        onClose={removeToast}
                    />
                ))}
            </>
        );
    },
};

export const Positions: Story = {
    render: () => {
        const [position, setPosition] = useState<'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'>('top-right');
        const [toasts, setToasts] = useState<string[]>([]);

        const positions = [
            { value: 'top-left', label: 'Top Left' },
            { value: 'top-center', label: 'Top Center' },
            { value: 'top-right', label: 'Top Right' },
            { value: 'bottom-left', label: 'Bottom Left' },
            { value: 'bottom-center', label: 'Bottom Center' },
            { value: 'bottom-right', label: 'Bottom Right' },
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
                    <div style={{ display: 'flex', gap: '8px' }}>
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
                        title={`${position} 위치`}
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
