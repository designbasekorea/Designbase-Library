/**
 * Tutorial 컴포넌트
 * 
 * 목적: 첫 사용자를 위한 인터랙티브 튜토리얼
 * 기능: 특정 영역 강조, 팝오버 컨텐츠, 단계별 진행
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import clsx from 'clsx';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '@designbasekorea/icons';
import type { IconProps } from '@designbasekorea/icons';
import { Indicator } from '../Indicator/Indicator';
import { Button } from '../Button/Button';
import './Tutorial.scss';

export interface TutorialStep {
    /** 단계 ID */
    id: string;
    /** 타겟 요소 선택자 */
    target: string;
    /** 팝오버 제목 */
    title?: string;
    /** 팝오버 내용 */
    content?: string;
    /** 팝오버 위치 */
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
    /** 추가 컨텐츠 */
    children?: React.ReactNode;
}

export interface TutorialProps {
    /** 튜토리얼 단계들 */
    steps: TutorialStep[];
    /** 현재 단계 (0부터 시작) */
    currentStep?: number;
    /** 튜토리얼 활성화 상태 */
    isActive: boolean;
    /** 튜토리얼 시작 핸들러 */
    onStart?: () => void;
    /** 튜토리얼 종료 핸들러 */
    onEnd?: () => void;
    /** 단계 변경 핸들러 */
    onStepChange?: (step: number) => void;
    /** 다음 단계 핸들러 */
    onNext?: () => void;
    /** 이전 단계 핸들러 */
    onPrev?: () => void;
    /** 인디케이터 타입 */
    indicatorType?: 'dots' | 'numbers';
    /** 인디케이터 크기 */
    indicatorSize?: 's' | 'm' | 'l';
    /** 커스텀 닫기 아이콘 */
    closeIcon?: React.ComponentType<IconProps>;
    /** 커스텀 이전 아이콘 */
    prevIcon?: React.ComponentType<IconProps>;
    /** 커스텀 다음 아이콘 */
    nextIcon?: React.ComponentType<IconProps>;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Tutorial: React.FC<TutorialProps> = ({
    steps,
    currentStep = 0,
    isActive,
    onStart,
    onEnd,
    onStepChange,
    onNext,
    onPrev,
    indicatorType = 'numbers',
    indicatorSize = 'm',
    closeIcon: CloseIconComponent = CloseIcon,
    prevIcon: PrevIconComponent = ChevronLeftIcon,
    nextIcon: NextIconComponent = ChevronRightIcon,
    className,
    ...props
}) => {
    const [internalStep, setInternalStep] = useState(currentStep);
    const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
    const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
    const [popoverPlacement, setPopoverPlacement] = useState<'top' | 'bottom' | 'left' | 'right'>('bottom');

    const overlayRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const currentStepData = steps[internalStep];
    const isFirstStep = internalStep === 0;
    const isLastStep = internalStep === steps.length - 1;

    // 타겟 요소 찾기 및 위치 계산
    const updateTargetElement = useCallback(() => {
        if (!currentStepData?.target) return;

        // 이전 타겟 요소의 강조 스타일 제거
        if (targetElement) {
            targetElement.classList.remove('designbase-tutorial__target');
            targetElement.style.position = '';
            targetElement.style.zIndex = '';
        }

        const element = document.querySelector(currentStepData.target) as HTMLElement;
        if (!element) return;

        setTargetElement(element);

        // 타겟 요소에 강조 스타일 적용
        element.style.position = 'relative';
        element.style.zIndex = '1000';
        element.classList.add('designbase-tutorial__target');

        // 팝오버 위치 계산
        const rect = element.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const popoverWidth = 300;
        const popoverHeight = 200;
        const margin = 16;

        let placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
        let top = rect.bottom + margin;
        let left = rect.left + (rect.width / 2) - (popoverWidth / 2);

        // 자동 배치 로직
        if (currentStepData.placement === 'auto') {
            // 위쪽 공간 확인
            if (rect.top - popoverHeight - margin > 0) {
                placement = 'top';
                top = rect.top - popoverHeight - margin;
            }
            // 아래쪽 공간 확인
            else if (rect.bottom + popoverHeight + margin < viewportHeight) {
                placement = 'bottom';
                top = rect.bottom + margin;
            }
            // 왼쪽 공간 확인
            else if (rect.left - popoverWidth - margin > 0) {
                placement = 'left';
                top = rect.top + (rect.height / 2) - (popoverHeight / 2);
                left = rect.left - popoverWidth - margin;
            }
            // 오른쪽 공간 확인
            else if (rect.right + popoverWidth + margin < viewportWidth) {
                placement = 'right';
                top = rect.top + (rect.height / 2) - (popoverHeight / 2);
                left = rect.right + margin;
            }
        } else {
            placement = currentStepData.placement || 'bottom';

            switch (placement) {
                case 'top':
                    top = rect.top - popoverHeight - margin;
                    break;
                case 'bottom':
                    top = rect.bottom + margin;
                    break;
                case 'left':
                    top = rect.top + (rect.height / 2) - (popoverHeight / 2);
                    left = rect.left - popoverWidth - margin;
                    break;
                case 'right':
                    top = rect.top + (rect.height / 2) - (popoverHeight / 2);
                    left = rect.right + margin;
                    break;
            }
        }

        // 뷰포트 경계 확인 및 조정
        left = Math.max(margin, Math.min(left, viewportWidth - popoverWidth - margin));
        top = Math.max(margin, Math.min(top, viewportHeight - popoverHeight - margin));

        setPopoverPosition({ top, left });
        setPopoverPlacement(placement);
    }, [currentStepData]);

    // 단계 변경 시 타겟 업데이트
    useEffect(() => {
        if (isActive && currentStepData) {
            updateTargetElement();
        }
    }, [internalStep, isActive, updateTargetElement]);

    // 튜토리얼 비활성화 시 모든 강조 스타일 제거
    useEffect(() => {
        if (!isActive && targetElement) {
            targetElement.classList.remove('designbase-tutorial__target');
            targetElement.style.position = '';
            targetElement.style.zIndex = '';
            setTargetElement(null);
        }
    }, [isActive, targetElement]);

    // 윈도우 리사이즈 시 위치 재계산
    useEffect(() => {
        if (!isActive) return;

        const handleResize = () => {
            updateTargetElement();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isActive, updateTargetElement]);

    const handleNext = () => {
        if (isLastStep) {
            handleEnd();
        } else {
            // 이전 타겟 요소의 강조 스타일 제거
            if (targetElement) {
                targetElement.classList.remove('designbase-tutorial__target');
                targetElement.style.position = '';
                targetElement.style.zIndex = '';
            }

            const newStep = internalStep + 1;
            setInternalStep(newStep);
            onStepChange?.(newStep);
            onNext?.();
        }
    };

    const handlePrev = () => {
        if (!isFirstStep) {
            // 이전 타겟 요소의 강조 스타일 제거
            if (targetElement) {
                targetElement.classList.remove('designbase-tutorial__target');
                targetElement.style.position = '';
                targetElement.style.zIndex = '';
            }

            const newStep = internalStep - 1;
            setInternalStep(newStep);
            onStepChange?.(newStep);
            onPrev?.();
        }
    };

    const handleEnd = () => {
        // 타겟 요소에서 강조 스타일 제거
        if (targetElement) {
            targetElement.classList.remove('designbase-tutorial__target');
            targetElement.style.position = '';
            targetElement.style.zIndex = '';
        }

        setTargetElement(null);
        onEnd?.();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleEnd();
        } else if (e.key === 'ArrowLeft' && !isFirstStep) {
            handlePrev();
        } else if (e.key === 'ArrowRight' && !isLastStep) {
            handleNext();
        }
    };

    if (!isActive || !currentStepData) {
        return null;
    }

    const classes = clsx(
        'designbase-tutorial',
        className
    );

    return (
        <div
            className={classes}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="tutorial-title"
            aria-describedby="tutorial-content"
            {...props}
        >
            {/* 오버레이 */}
            <div
                ref={overlayRef}
                className="designbase-tutorial__overlay"
                onClick={handleEnd}
            />

            {/* 팝오버 */}
            <div
                ref={popoverRef}
                className={clsx(
                    'designbase-tutorial__popover',
                    `designbase-tutorial__popover--${popoverPlacement}`
                )}
                style={{
                    top: popoverPosition.top,
                    left: popoverPosition.left
                }}
            >
                {/* 닫기 버튼 */}
                <button
                    type="button"
                    className="designbase-tutorial__close-button"
                    onClick={handleEnd}
                    aria-label="튜토리얼 종료"
                >
                    <CloseIconComponent size={16} />
                </button>

                {/* 컨텐츠 */}
                <div className="designbase-tutorial__content">
                    {(currentStepData.title || currentStepData.content || currentStepData.children) && (
                        <div className="designbase-tutorial__text">
                            {currentStepData.title && (
                                <h3
                                    id="tutorial-title"
                                    className="designbase-tutorial__title"
                                >
                                    {currentStepData.title}
                                </h3>
                            )}

                            {currentStepData.content && (
                                <p
                                    id="tutorial-content"
                                    className="designbase-tutorial__description"
                                >
                                    {currentStepData.content}
                                </p>
                            )}

                            {currentStepData.children && (
                                <div className="designbase-tutorial__children">
                                    {currentStepData.children}
                                </div>
                            )}
                        </div>
                    )}

                    {/* 네비게이션 */}
                    <div className="designbase-tutorial__navigation">
                        {/* 이전 버튼 */}
                        {!isFirstStep && (
                            <Button
                                variant="secondary"
                                size="s"
                                startIcon={<PrevIconComponent size={16} />}
                                onPress={handlePrev}
                                aria-label="이전 단계"
                            >
                                이전
                            </Button>
                        )}

                        {/* 인디케이터 */}
                        <Indicator
                            current={internalStep}
                            total={steps.length}
                            type={indicatorType}
                            size={indicatorSize}
                        />

                        {/* 다음/완료 버튼 */}
                        <Button
                            variant="primary"
                            size="s"
                            endIcon={!isLastStep ? <NextIconComponent size={16} /> : undefined}
                            onPress={handleNext}
                            aria-label={isLastStep ? '완료' : '다음 단계'}
                        >
                            {isLastStep ? '완료' : '다음'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Tutorial.displayName = 'Tutorial';

export default Tutorial;
