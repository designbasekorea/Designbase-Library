import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, Progressbar, Spinner } from '@designbasekorea/ui';
import { CircleCheckFilledIcon } from '@designbasekorea/icons';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import clsx from 'clsx';
import './ProgressModal.scss';

export interface ProgressModalProgress {
    processedNodes: number;
    totalNodes: number;
}

export interface ProgressModalProps {
    isOpen: boolean;
    onClose: () => void;
    progress: ProgressModalProgress;
    title?: I18nText;
    completedMessage?: I18nText;
    processingMessage?: I18nText;
    stopButtonText?: I18nText;
    confirmButtonText?: I18nText;
    helpText?: I18nText;
    onStop?: () => void;
    onComplete?: () => void; // 완료 시 콜백
    loadingIcon?: React.ReactNode;
    completeIcon?: React.ReactNode;
    className?: string;
    t?: TFunctionLite;

    /** ✅ 프로그레스가 100%가 되면 자동으로 완료 상태로 전환하고 onComplete를 1회 호출 */
    autoComplete?: boolean;
    /** 자동 완료 시 모달을 바로 닫을지 여부 (기본 false: 확인 버튼 보여줌) */
    autoCloseOnComplete?: boolean;
}

export const ProgressModal: React.FC<ProgressModalProps> = ({
    isOpen,
    onClose,
    progress,
    title = { key: 'progress.working' },
    completedMessage = { key: 'progress.completed' },
    processingMessage = { key: 'progress.processing' },
    stopButtonText = { key: 'progress.stop' },
    confirmButtonText = { key: 'progress.confirm' },
    helpText,
    onStop,
    onComplete,
    loadingIcon,
    completeIcon,
    className,
    t,
    autoComplete = true,
    autoCloseOnComplete = false
}) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const completeFiredRef = useRef(false);

    const { processedNodes, totalNodes } = progress;
    const progressPercentage = totalNodes > 0 ? Math.min(100, (processedNodes / totalNodes) * 100) : 0;

    // 완료 상태 추적
    useEffect(() => {
        const done = totalNodes > 0 && processedNodes >= totalNodes;
        setIsCompleted(done);

        if (done && autoComplete && !completeFiredRef.current) {
            completeFiredRef.current = true;
            onComplete?.();
            if (autoCloseOnComplete) {
                onClose();
            }
        }
    }, [processedNodes, totalNodes, autoComplete, autoCloseOnComplete, onComplete, onClose]);

    // 모달 열릴 때마다 상태 초기화
    useEffect(() => {
        if (isOpen) {
            setIsCompleted(false);
            completeFiredRef.current = false;
        }
    }, [isOpen]);

    const handleStop = () => {
        onStop?.();
        onClose();
    };

    const handleConfirm = () => {
        // 수동 확인(자동완료를 쓰더라도 닫기 버튼은 필요)
        onClose();
    };

    const modalClasses = clsx('designbase-figma-progress-modal', className);

    const displayTitle = resolveText(t, isCompleted ? completedMessage : title, isCompleted ? '완료되었습니다' : '작업 중');
    const displayMessage = resolveText(t, isCompleted ? completedMessage : processingMessage, isCompleted ? '완료되었습니다' : '처리 중...');
    const displayStopText = resolveText(t, stopButtonText, '중지');
    const displayConfirmText = resolveText(t, confirmButtonText, '확인');
    const displayHelpText = resolveText(t, helpText);

    return (
        <Modal
            isOpen={isOpen}
            onClose={isCompleted ? onClose : undefined}
            title={displayTitle}
            size="s"
            className={modalClasses}
            showCloseButton={false}
        >
            <div className="designbase-figma-progress-modal__content">
                <div className="designbase-figma-progress-modal__icon" aria-hidden="true">
                    {isCompleted ? (
                        completeIcon || (
                            <div className="designbase-figma-progress-modal__icon-success">
                                <CircleCheckFilledIcon />
                            </div>
                        )
                    ) : (
                        loadingIcon || (
                            <div className="designbase-figma-progress-modal__icon-loading">
                                <Spinner size="m" />
                            </div>
                        )
                    )}
                </div>

                <p className="designbase-figma-progress-modal__message">{displayMessage}</p>

                <div className="designbase-figma-progress-modal__status">
                    {`${processedNodes} / ${totalNodes} (${progressPercentage.toFixed(1)}%)`}
                </div>

                <Progressbar
                    value={progressPercentage}
                    size="m"
                    variant={isCompleted ? 'success' : 'primary'}
                    style="animated"
                    fullWidth
                />

                {displayHelpText && !isCompleted && (
                    <p className="designbase-figma-progress-modal__help-text">{displayHelpText}</p>
                )}

                <div className="designbase-figma-progress-modal__actions">
                    {isCompleted ? (
                        <Button onPress={handleConfirm} variant="primary" size="m" fullWidth>
                            {displayConfirmText}
                        </Button>
                    ) : (
                        <Button onPress={handleStop} variant="secondary" size="m" fullWidth>
                            {displayStopText}
                        </Button>
                    )}
                </div>
            </div>
        </Modal>
    );
};

ProgressModal.displayName = 'ProgressModal';

export default ProgressModal;
