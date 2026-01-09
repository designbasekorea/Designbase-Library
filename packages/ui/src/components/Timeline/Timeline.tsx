/**
 * Timeline 컴포넌트
 * 
 * 시간 순서대로 이벤트를 표시하는 컴포넌트입니다.
 * 세로/가로 방향을 지원하며 다양한 스타일을 제공합니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Timeline.scss';

export type TimelineType = 'left' | 'alternate';
export type TimelineVariant = 'default' | 'outlined' | 'filled';
export type TimelineSize = 's' | 'm' | 'l';
export type TimelineColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'default';

export interface TimelineItem {
    /** 아이템 ID */
    id: string;
    /** 아이템 제목 */
    title?: string;
    /** 아이템 설명 */
    description?: string;
    /** 아이템 타임스탬프 */
    timestamp?: string;
    /** 아이템 아이콘 (제공 시 아이콘 표시, 없으면 기본 점 표시) */
    icon?: React.ReactNode;
    /** 아이템 숫자 (제공 시 숫자 표시, icon과 함께 제공되면 icon 우선) */
    number?: number;
    /** 아이템 색상 */
    color?: TimelineColor;
    /** 아이템 상태 (completed: 완료, active: 진행중, pending: 진행예정) */
    status?: 'completed' | 'active' | 'pending';
    /** 아이템 클릭 핸들러 */
    onClick?: () => void;
    /** 아이템 비활성화 여부 */
    disabled?: boolean;
    /** 추가 메타데이터 */
    meta?: Record<string, any>;
    /** 커스텀 콘텐츠 (제공 시 title, description, timestamp 대신 사용) */
    content?: React.ReactNode;
}

export interface TimelineProps {
    /** 타임라인 아이템들 */
    items: TimelineItem[];
    /** 타임라인 타입: 'left' (왼쪽 라인) | 'alternate' (가운데 라인, 좌우 번갈아) */
    type?: TimelineType;
    /** 타임라인 변형 */
    variant?: TimelineVariant;
    /** 타임라인 크기 */
    size?: TimelineSize;
    /** 기본 색상 */
    color?: TimelineColor;
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
    /** 아이템 클릭 콜백 */
    onItemClick?: (item: TimelineItem, index: number) => void;
}

const Timeline: React.FC<TimelineProps> = ({
    items,
    type = 'alternate',
    variant = 'default',
    size = 'm',
    color = 'primary',
    clickable = false,
    fullWidth = false,
    disabled = false,
    className,
    style,
    onItemClick,
}) => {
    const handleItemClick = (item: TimelineItem, index: number) => {
        if (disabled || item.disabled || !clickable) return;

        item.onClick?.();
        onItemClick?.(item, index);
    };

    const getItemPosition = (index: number): 'left' | 'right' => {
        if (type === 'left') {
            return 'left';
        }
        // alternate 타입: 짝수는 왼쪽, 홀수는 오른쪽
        return index % 2 === 0 ? 'left' : 'right';
    };

    const classes = clsx(
        'designbase-timeline',
        `designbase-timeline--${type}`,
        `designbase-timeline--${variant}`,
        `designbase-timeline--${size}`,
        {
            'designbase-timeline--clickable': clickable,
            'designbase-timeline--full-width': fullWidth,
            'designbase-timeline--disabled': disabled,
        },
        className
    );

    return (
        <div className={classes} style={style}>
            <div className="designbase-timeline__container">
                {items.map((item, index) => {
                    const itemPosition = getItemPosition(index);
                    const isLast = index === items.length - 1;
                    const isClickable = clickable && !disabled && !item.disabled;
                    const itemColor = item.color || color;

                    const itemClasses = clsx(
                        'designbase-timeline__item',
                        `designbase-timeline__item--${itemPosition}`,
                        `designbase-timeline__item--${itemColor}`,
                        {
                            'designbase-timeline__item--clickable': isClickable,
                            'designbase-timeline__item--disabled': item.disabled,
                        }
                    );

                    const contentClasses = clsx(
                        'designbase-timeline__content',
                        `designbase-timeline__content--${itemPosition}`
                    );

                    const itemStatus = item.status || 'pending';
                    const dotClasses = clsx(
                        'designbase-timeline__dot',
                        `designbase-timeline__dot--${itemColor}`,
                        `designbase-timeline__dot--${variant}`,
                        `designbase-timeline__dot--${itemStatus}`,
                        {
                            'designbase-timeline__dot--clickable': isClickable,
                            'designbase-timeline__dot--with-icon': item.icon,
                            'designbase-timeline__dot--with-number': item.number && !item.icon,
                        }
                    );

                    return (
                        <div key={item.id} className={itemClasses}>


                            {/* 인디케이터 컨테이너 (ProgressStep처럼) */}
                            <div className="designbase-timeline__indicator-container">
                                {/* 진행중일 때 pulse 애니메이션 */}
                                {itemStatus === 'active' && !item.icon && item.number === undefined && (
                                    <div className="designbase-timeline__pulse" />
                                )}

                                {/* 타임라인 인디케이터 */}
                                <div
                                    className={dotClasses}
                                    onClick={() => handleItemClick(item, index)}
                                    tabIndex={isClickable ? 0 : -1}
                                    role={isClickable ? 'button' : undefined}
                                    aria-label={item.title ? `${item.title} 타임라인 점` : `타임라인 점 ${index + 1}`}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            handleItemClick(item, index);
                                        }
                                    }}
                                >
                                    {item.icon ? (
                                        <div className="designbase-timeline__icon">
                                            {item.icon}
                                        </div>
                                    ) : item.number !== undefined ? (
                                        <span className="designbase-timeline__number">
                                            {item.number}
                                        </span>
                                    ) : null}
                                </div>

                                {/* 타임라인 연결선 */}
                                {!isLast && (
                                    <div className="designbase-timeline__connector" />
                                )}
                            </div>

                            {/* 타임라인 콘텐츠 */}
                            <div className={contentClasses}>
                                {/* left 타입일 때 타임스탬프를 콘텐츠 위에 표시 */}
                                {item.timestamp && (
                                    <div className="designbase-timeline__timestamp">
                                        {item.timestamp}
                                    </div>
                                )}

                                <div
                                    className="designbase-timeline__content-inner"
                                    onClick={() => handleItemClick(item, index)}
                                    tabIndex={isClickable ? 0 : -1}
                                    role={isClickable ? 'button' : undefined}
                                    aria-label={item.title ? `${item.title} 타임라인 아이템` : `타임라인 아이템 ${index + 1}`}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            handleItemClick(item, index);
                                        }
                                    }}
                                >
                                    {/* 커스텀 콘텐츠가 있으면 사용, 없으면 기본 구조 사용 */}
                                    {item.content ? (
                                        item.content
                                    ) : (
                                        <>
                                            {/* 제목 */}
                                            {item.title && (
                                                <h3 className="designbase-timeline__title">
                                                    {item.title}
                                                </h3>
                                            )}

                                            {/* 설명 */}
                                            {item.description && (
                                                <p className="designbase-timeline__description">
                                                    {item.description}
                                                </p>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { Timeline };
export default Timeline;
