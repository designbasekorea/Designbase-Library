/**
 * OnboardingModal 컴포넌트
 * 
 * 목적: 온보딩/튜토리얼을 위한 모달 컴포넌트
 * 기능: 이미지, 텍스트, 네비게이션, 인디케이터 지원
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '@designbasekorea/icons';
import type { IconProps } from '@designbasekorea/icons';
import { Indicator } from '../Indicator/Indicator';
import { Button } from '../Button/Button';
import './OnboardingModal.scss';

export interface OnboardingStep {
    /** 단계 ID */
    id: string;
    /** 이미지 URL 또는 React 컴포넌트 */
    image?: string | React.ReactNode;
    /** 제목 */
    title?: string;
    /** 설명 텍스트 */
    description?: string;
    /** 추가 컨텐츠 */
    content?: React.ReactNode;
}

export interface OnboardingModalProps {
    /** 온보딩 단계들 */
    steps: OnboardingStep[];
    /** 현재 단계 (0부터 시작) */
    currentStep?: number;
    /** 모달 열림 상태 */
    isOpen: boolean;
    /** 모달 닫기 핸들러 */
    onClose: () => void;
    /** 단계 변경 핸들러 */
    onStepChange?: (step: number) => void;
    /** 완료 핸들러 */
    onComplete?: () => void;
    /** 닫기 버튼 표시 여부 */
    showCloseButton?: boolean;
    /** 인디케이터 표시 여부 */
    showIndicator?: boolean;
    /** 커스텀 닫기 아이콘 */
    closeIcon?: React.ComponentType<IconProps>;
    /** 커스텀 이전 아이콘 */
    prevIcon?: React.ComponentType<IconProps>;
    /** 커스텀 다음 아이콘 */
    nextIcon?: React.ComponentType<IconProps>;
    /** 인디케이터 타입 */
    indicatorType?: 'dots' | 'numbers';
    /** 인디케이터 크기 */
    indicatorSize?: 's' | 'm' | 'l';
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
    steps,
    currentStep = 0,
    isOpen,
    onClose,
    onStepChange,
    onComplete,
    showCloseButton = true,
    showIndicator = true,
    closeIcon: CloseIconComponent = CloseIcon,
    prevIcon: PrevIconComponent = ChevronLeftIcon,
    nextIcon: NextIconComponent = ChevronRightIcon,
    indicatorType = 'dots',
    indicatorSize = 'm',
    className,
    ...props
}) => {
    const [internalStep, setInternalStep] = useState(currentStep);

    useEffect(() => {
        setInternalStep(currentStep);
    }, [currentStep]);

    const currentStepData = steps[internalStep];
    const isFirstStep = internalStep === 0;
    const isLastStep = internalStep === steps.length - 1;

    const handlePrev = () => {
        if (!isFirstStep) {
            const newStep = internalStep - 1;
            setInternalStep(newStep);
            onStepChange?.(newStep);
        }
    };

    const handleNext = () => {
        if (isLastStep) {
            onComplete?.();
        } else {
            const newStep = internalStep + 1;
            setInternalStep(newStep);
            onStepChange?.(newStep);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        } else if (e.key === 'ArrowLeft' && !isFirstStep) {
            handlePrev();
        } else if (e.key === 'ArrowRight' && !isLastStep) {
            handleNext();
        }
    };

    if (!isOpen || !currentStepData) {
        return null;
    }

    const classes = clsx(
        'designbase-onboarding-modal',
        className
    );

    return (
        <div
            className={classes}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="onboarding-title"
            aria-describedby="onboarding-description"
            {...props}
        >
            {/* 배경 오버레이 */}
            <div
                className="designbase-onboarding-modal__overlay"
                onClick={onClose}
            />

            {/* 모달 컨텐츠 */}
            <div className="designbase-onboarding-modal__content">
                {/* 닫기 버튼 */}
                {showCloseButton && (
                    <button
                        type="button"
                        className="designbase-onboarding-modal__close-button"
                        onClick={onClose}
                        aria-label="닫기"
                    >
                        <CloseIconComponent size={20} />
                    </button>
                )}

                {/* 메인 컨텐츠 */}
                <div className="designbase-onboarding-modal__main">
                    {/* 이미지 영역 */}
                    {currentStepData.image && (
                        <div className="designbase-onboarding-modal__image">
                            {typeof currentStepData.image === 'string' ? (
                                <img
                                    src={currentStepData.image}
                                    alt={currentStepData.title || '온보딩 이미지'}
                                />
                            ) : (
                                currentStepData.image
                            )}
                        </div>
                    )}

                    {/* 텍스트 영역 */}
                    <div className="designbase-onboarding-modal__text">
                        {currentStepData.title && (
                            <h2
                                id="onboarding-title"
                                className="designbase-onboarding-modal__title"
                            >
                                {currentStepData.title}
                            </h2>
                        )}

                        {currentStepData.description && (
                            <p
                                id="onboarding-description"
                                className="designbase-onboarding-modal__description"
                            >
                                {currentStepData.description}
                            </p>
                        )}

                        {currentStepData.content && (
                            <div className="designbase-onboarding-modal__content-area">
                                {currentStepData.content}
                            </div>
                        )}
                    </div>
                </div>

                {/* 하단 네비게이션 */}
                <div className="designbase-onboarding-modal__navigation">
                    {/* 이전 버튼 */}
                    <Button
                        variant="secondary"
                        size="m"
                        startIcon={PrevIconComponent}
                        onClick={handlePrev}
                        disabled={isFirstStep}
                        aria-label="이전"
                    >
                        이전
                    </Button>

                    {/* 인디케이터 */}
                    {showIndicator && (
                        <Indicator
                            current={internalStep}
                            total={steps.length}
                            type={indicatorType}
                            size={indicatorSize}
                            clickable={true}
                            onStepClick={(step) => {
                                setInternalStep(step);
                                onStepChange?.(step);
                            }}
                        />
                    )}

                    {/* 다음/완료 버튼 */}
                    <Button
                        variant="primary"
                        size="m"
                        endIcon={!isLastStep ? NextIconComponent : undefined}
                        onClick={handleNext}
                        aria-label={isLastStep ? '완료' : '다음'}
                    >
                        {isLastStep ? '완료' : '다음'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

OnboardingModal.displayName = 'OnboardingModal';

export default OnboardingModal;
