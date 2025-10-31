import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { ProgressModal } from './ProgressModal';
import { Button } from '@designbasekorea/ui';

const meta: Meta<typeof ProgressModal> = {
    title: 'Figma UI/ProgressModal',
    component: ProgressModal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [progress, setProgress] = useState({ processedNodes: 0, totalNodes: 100 });

        useEffect(() => {
            if (isOpen && progress.processedNodes < progress.totalNodes) {
                const interval = setInterval(() => {
                    setProgress(prev => ({
                        ...prev,
                        processedNodes: Math.min(prev.processedNodes + 1, prev.totalNodes),
                    }));
                }, 100);

                return () => clearInterval(interval);
            }
        }, [isOpen, progress.processedNodes, progress.totalNodes]);

        const handleOpen = () => {
            setProgress({ processedNodes: 0, totalNodes: 100 });
            setIsOpen(true);
        };

        return (
            <>
                <Button onPress={handleOpen}>작업 시작</Button>
                <ProgressModal
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                        setProgress({ processedNodes: 0, totalNodes: 100 });
                    }}
                    progress={progress}
                    title="처리 중"
                    processingMessage="파일을 처리하고 있습니다..."
                    completedMessage="완료!"
                    helpText="처리 중입니다. 잠시만 기다려주세요."
                />
            </>
        );
    },
};

export const FastProgress: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [progress, setProgress] = useState({ processedNodes: 0, totalNodes: 50 });

        useEffect(() => {
            if (isOpen && progress.processedNodes < progress.totalNodes) {
                const interval = setInterval(() => {
                    setProgress(prev => ({
                        ...prev,
                        processedNodes: Math.min(prev.processedNodes + 5, prev.totalNodes),
                    }));
                }, 200);

                return () => clearInterval(interval);
            }
        }, [isOpen, progress.processedNodes, progress.totalNodes]);

        const handleOpen = () => {
            setProgress({ processedNodes: 0, totalNodes: 50 });
            setIsOpen(true);
        };

        return (
            <>
                <Button onPress={handleOpen}>빠른 작업</Button>
                <ProgressModal
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                        setProgress({ processedNodes: 0, totalNodes: 50 });
                    }}
                    progress={progress}
                    title="이미지 처리 중"
                    processingMessage="이미지를 최적화하고 있습니다..."
                    completedMessage="최적화 완료!"
                    stopButtonText="취소"
                    confirmButtonText="닫기"
                />
            </>
        );
    },
};

export const FontChange: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [progress, setProgress] = useState({ processedNodes: 0, totalNodes: 200 });

        useEffect(() => {
            if (isOpen && progress.processedNodes < progress.totalNodes) {
                const interval = setInterval(() => {
                    setProgress(prev => ({
                        ...prev,
                        processedNodes: Math.min(prev.processedNodes + 2, prev.totalNodes),
                    }));
                }, 50);

                return () => clearInterval(interval);
            }
        }, [isOpen, progress.processedNodes, progress.totalNodes]);

        const handleOpen = () => {
            setProgress({ processedNodes: 0, totalNodes: 200 });
            setIsOpen(true);
        };

        return (
            <>
                <Button onPress={handleOpen}>폰트 변경 시작</Button>
                <ProgressModal
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                        setProgress({ processedNodes: 0, totalNodes: 200 });
                    }}
                    progress={progress}
                    title="폰트 변경 중"
                    processingMessage="텍스트 레이어의 폰트를 변경하고 있습니다..."
                    completedMessage="폰트 변경 완료!"
                    stopButtonText="중지"
                    confirmButtonText="확인"
                    helpText="작업을 중지하면 현재까지의 변경사항만 적용됩니다."
                    onStop={() => {
                        console.log('작업 중지됨');
                    }}
                    onComplete={() => {
                        console.log('작업 완료됨');
                    }}
                />
            </>
        );
    },
};

export const LayerExport: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [progress, setProgress] = useState({ processedNodes: 0, totalNodes: 75 });

        useEffect(() => {
            if (isOpen && progress.processedNodes < progress.totalNodes) {
                const interval = setInterval(() => {
                    setProgress(prev => ({
                        ...prev,
                        processedNodes: Math.min(prev.processedNodes + 1, prev.totalNodes),
                    }));
                }, 80);

                return () => clearInterval(interval);
            }
        }, [isOpen, progress.processedNodes, progress.totalNodes]);

        const handleOpen = () => {
            setProgress({ processedNodes: 0, totalNodes: 75 });
            setIsOpen(true);
        };

        return (
            <>
                <Button onPress={handleOpen}>레이어 내보내기</Button>
                <ProgressModal
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                        setProgress({ processedNodes: 0, totalNodes: 75 });
                    }}
                    progress={progress}
                    title="내보내기 중"
                    processingMessage="레이어를 내보내고 있습니다..."
                    completedMessage="내보내기 완료!"
                    stopButtonText="취소"
                    confirmButtonText="완료"
                    helpText="파일이 큰 경우 시간이 걸릴 수 있습니다."
                />
            </>
        );
    },
};

export const SlowProgress: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [progress, setProgress] = useState({ processedNodes: 0, totalNodes: 20 });

        useEffect(() => {
            if (isOpen && progress.processedNodes < progress.totalNodes) {
                const interval = setInterval(() => {
                    setProgress(prev => ({
                        ...prev,
                        processedNodes: Math.min(prev.processedNodes + 1, prev.totalNodes),
                    }));
                }, 500);

                return () => clearInterval(interval);
            }
        }, [isOpen, progress.processedNodes, progress.totalNodes]);

        const handleOpen = () => {
            setProgress({ processedNodes: 0, totalNodes: 20 });
            setIsOpen(true);
        };

        return (
            <>
                <Button onPress={handleOpen}>느린 작업</Button>
                <ProgressModal
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                        setProgress({ processedNodes: 0, totalNodes: 20 });
                    }}
                    progress={progress}
                    title="대용량 파일 처리 중"
                    processingMessage="대용량 파일을 처리하고 있습니다..."
                    completedMessage="처리 완료!"
                    helpText="대용량 파일은 처리 시간이 오래 걸릴 수 있습니다."
                />
            </>
        );
    },
};

export const WithStopCallback: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [progress, setProgress] = useState({ processedNodes: 0, totalNodes: 100 });
        const [isStopped, setIsStopped] = useState(false);

        useEffect(() => {
            if (isOpen && !isStopped && progress.processedNodes < progress.totalNodes) {
                const interval = setInterval(() => {
                    setProgress(prev => ({
                        ...prev,
                        processedNodes: Math.min(prev.processedNodes + 1, prev.totalNodes),
                    }));
                }, 100);

                return () => clearInterval(interval);
            }
        }, [isOpen, isStopped, progress.processedNodes, progress.totalNodes]);

        const handleOpen = () => {
            setProgress({ processedNodes: 0, totalNodes: 100 });
            setIsStopped(false);
            setIsOpen(true);
        };

        const handleStop = () => {
            setIsStopped(true);
            console.log('작업이 중지되었습니다. 현재 진행률:', progress.processedNodes);
        };

        return (
            <>
                <Button onPress={handleOpen}>중지 가능한 작업</Button>
                <ProgressModal
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                        setProgress({ processedNodes: 0, totalNodes: 100 });
                        setIsStopped(false);
                    }}
                    progress={progress}
                    title="작업 진행 중"
                    processingMessage="작업을 처리하고 있습니다..."
                    completedMessage="작업 완료!"
                    stopButtonText="작업 중지"
                    confirmButtonText="확인"
                    helpText="언제든지 작업을 중지할 수 있습니다."
                    onStop={handleStop}
                    onComplete={() => {
                        console.log('작업이 완료되었습니다!');
                    }}
                />
            </>
        );
    },
};

export const WithI18nKeys: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [progress, setProgress] = useState({ processedNodes: 0, totalNodes: 50 });

        useEffect(() => {
            if (isOpen && progress.processedNodes < progress.totalNodes) {
                const interval = setInterval(() => {
                    setProgress(prev => ({
                        ...prev,
                        processedNodes: Math.min(prev.processedNodes + 1, prev.totalNodes),
                    }));
                }, 200);

                return () => clearInterval(interval);
            }
        }, [isOpen, progress.processedNodes, progress.totalNodes]);

        const handleOpen = () => {
            setProgress({ processedNodes: 0, totalNodes: 50 });
            setIsOpen(true);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
                <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 없음)</h3>
                    <Button onPress={handleOpen}>작업 시작</Button>
                    <ProgressModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        progress={progress}
                        title={{ key: 'progress.working' }}
                        completedMessage={{ key: 'progress.completed' }}
                        processingMessage={{ key: 'progress.processing' }}
                        stopButtonText={{ key: 'progress.stop' }}
                        confirmButtonText={{ key: 'progress.confirm' }}
                        helpText={{ key: 'progress.help_text' }}
                    />
                </div>

                <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 있음)</h3>
                    <Button onPress={handleOpen}>작업 시작</Button>
                    <ProgressModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        progress={progress}
                        title={{ key: 'progress.working' }}
                        completedMessage={{ key: 'progress.completed' }}
                        processingMessage={{ key: 'progress.processing' }}
                        stopButtonText={{ key: 'progress.stop' }}
                        confirmButtonText={{ key: 'progress.confirm' }}
                        helpText={{ key: 'progress.help_text' }}
                        t={(key) => {
                            const translations: Record<string, string> = {
                                'progress.working': '작업 중',
                                'progress.completed': '완료되었습니다',
                                'progress.processing': '처리 중...',
                                'progress.stop': '중지',
                                'progress.confirm': '확인',
                                'progress.help_text': '이 작업은 시간이 걸릴 수 있습니다.'
                            };
                            return translations[key] || key;
                        }}
                    />
                </div>
            </div>
        );
    },
};

