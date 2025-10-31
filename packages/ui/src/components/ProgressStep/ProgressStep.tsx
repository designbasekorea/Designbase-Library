import React from 'react';
import clsx from 'clsx';
import './ProgressStep.scss';

export type ProgressStepSize = 's' | 'm' | 'l';
export type ProgressStepLayout = 'vertical' | 'horizontal';

export interface ProgressStepItem {
    /** 단계 ID */
    id: string;
    /** 단계 제목 */
    title: string;
    /** 단계 설명 */
    description?: string;
    /** 단계 상태 */
    status: 'pending' | 'active' | 'completed' | 'error';
    /** 단계 아이콘 */
    icon?: React.ReactNode;
    /** 단계 타임스탬프 */
    timestamp?: string;
    /** 단계 메타데이터 */
    meta?: Record<string, any>;
    /** 단계 클릭 핸들러 */
    onClick?: () => void;
    /** 단계 비활성화 여부 */
    disabled?: boolean;
}

export interface ProgressStepProps {
    /** 진행 단계 아이템들 */
    items: ProgressStepItem[];
    /** 진행 단계 크기 */
    size?: ProgressStepSize;
    /** 진행 단계 레이아웃 */
    layout?: ProgressStepLayout;
    /** 현재 활성 단계 */
    currentStep?: number;
    /** 클릭 가능 여부 */
    clickable?: boolean;
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React.CSSProperties;
    /** 단계 클릭 콜백 */
    onStepClick?: (item: ProgressStepItem, index: number) => void;
}

const ProgressStep: React.FC<ProgressStepProps> = ({
    items,
    size = 'm',
    layout = 'vertical',
    currentStep = 0,
    clickable = false,
    fullWidth = false,
    disabled = false,
    className,
    style,
    onStepClick,
}) => {
    const handleStepClick = (item: ProgressStepItem, index: number) => {
        if (disabled || item.disabled || !clickable) return;

        item.onClick?.();
        onStepClick?.(item, index);
    };

    const getStepStatus = (index: number, itemStatus: ProgressStepItem['status']) => {
        if (itemStatus !== 'pending') return itemStatus;

        if (index < currentStep) return 'completed';
        if (index === currentStep) return 'active';
        return 'pending';
    };

    const classes = clsx(
        'designbase-progress-step',
        `designbase-progress-step--${size}`,
        `designbase-progress-step--${layout}`,
        {
            'designbase-progress-step--clickable': clickable,
            'designbase-progress-step--full-width': fullWidth,
            'designbase-progress-step--disabled': disabled,
        },
        className
    );

    return (
        <div className={classes} style={style}>
            {items.map((item, index) => {
                const status = getStepStatus(index, item.status);
                const isLast = index === items.length - 1;
                const isClickable = clickable && !disabled && !item.disabled;

                const stepClasses = clsx(
                    'designbase-progress-step__item',
                    `designbase-progress-step__item--${status}`,
                    {
                        'designbase-progress-step__item--clickable': isClickable,
                        'designbase-progress-step__item--disabled': item.disabled,
                    }
                );

                return (
                    <div key={item.id} className={stepClasses}>
                        {/* 원과 선을 포함하는 컨테이너 */}
                        <div className="designbase-progress-step__indicator-container">
                            {/* 원형 인디케이터 */}
                            <div
                                className="designbase-progress-step__indicator"
                                onClick={() => handleStepClick(item, index)}
                                tabIndex={isClickable ? 0 : -1}
                                role={isClickable ? 'button' : undefined}
                                aria-label={`${item.title} 단계로 이동`}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleStepClick(item, index);
                                    }
                                }}
                            >
                                {item.icon ? (
                                    <div className="designbase-progress-step__icon">
                                        {item.icon}
                                    </div>
                                ) : (
                                    <span className="designbase-progress-step__number">
                                        {index + 1}
                                    </span>
                                )}
                            </div>

                            {/* 연결선 - 마지막 아이템이 아닐 때만 표시 */}
                            {!isLast && (
                                <div className="designbase-progress-step__connector" />
                            )}
                        </div>

                        {/* 콘텐츠 영역 */}
                        <div className="designbase-progress-step__content">
                            <div className="designbase-progress-step__header">
                                <h3 className="designbase-progress-step__title">
                                    {item.title}
                                </h3>
                                {item.timestamp && (
                                    <span className="designbase-progress-step__timestamp">
                                        {item.timestamp}
                                    </span>
                                )}
                            </div>

                            {item.description && (
                                <p className="designbase-progress-step__description">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export { ProgressStep };
export default ProgressStep;
