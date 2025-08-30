/**
 * Timeline 컴포넌트
 * 
 * 시간 순서대로 이벤트를 표시하는 컴포넌트입니다.
 * 세로/가로 방향을 지원하며 다양한 스타일을 제공합니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Timeline.scss';

export type TimelineDirection = 'vertical' | 'horizontal';
export type TimelineSize = 'sm' | 'md' | 'lg';
export type TimelineVariant = 'default' | 'outlined' | 'filled';
export type TimelineItemType = 'icon' | 'number' | 'minimal';

export interface TimelineItem {
    /** 아이템 ID */
    id: string;
    /** 아이템 제목 */
    title: string;
    /** 아이템 설명 */
    description?: string;
    /** 날짜/시간 */
    date?: string;
    /** 커스텀 아이콘 */
    icon?: React.ReactNode;
    /** 아이템 상태 */
    status?: 'pending' | 'active' | 'completed' | 'error';
    /** 추가 콘텐츠 */
    content?: React.ReactNode;
    /** 클릭 핸들러 */
    onClick?: () => void;
}

export interface TimelineProps {
    /** 타임라인 아이템들 */
    items: TimelineItem[];
    /** 타임라인 방향 */
    direction?: TimelineDirection;
    /** 타임라인 크기 */
    size?: TimelineSize;
    /** 타임라인 스타일 변형 */
    variant?: TimelineVariant;
    /** 아이템 간격 */
    spacing?: 'sm' | 'md' | 'lg';
    /** 전체 너비 사용 */
    fullWidth?: boolean;
    /** 연결선 색상 */
    lineColor?: string;
    /** 아이템 타입 */
    itemType?: TimelineItemType;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
    items,
    direction = 'vertical',
    size = 'md',
    variant = 'default',
    spacing = 'md',
    fullWidth = false,
    lineColor,
    itemType = 'icon',
    className,
}) => {
    const classes = clsx(
        'designbase-timeline',
        `designbase-timeline--direction-${direction}`,
        `designbase-timeline--size-${size}`,
        `designbase-timeline--variant-${variant}`,
        `designbase-timeline--spacing-${spacing}`,
        `designbase-timeline--item-type-${itemType}`,
        {
            'designbase-timeline--full-width': fullWidth,
        },
        className
    );

    const getDefaultIcon = (status: TimelineItem['status']) => {
        switch (status) {
            case 'completed':
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                );
            case 'active':
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                );
            case 'error':
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                );
            default:
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                );
        }
    };

    const renderItemPrefix = (item: TimelineItem, index: number) => {
        switch (itemType) {
            case 'number':
                return (
                    <div className="designbase-timeline__number">
                        {index + 1}
                    </div>
                );
            case 'minimal':
                return (
                    <div className="designbase-timeline__minimal-dot" />
                );
            case 'icon':
            default:
                return (
                    <div className="designbase-timeline__icon">
                        {item.icon || getDefaultIcon(item.status)}
                    </div>
                );
        }
    };

    const TimelineItemComponent: React.FC<{ item: TimelineItem; index: number; isLast: boolean }> = ({
        item,
        index,
        isLast
    }) => {
        const itemClasses = clsx(
            'designbase-timeline__item',
            `designbase-timeline__item--status-${item.status || 'pending'}`,
            {
                'designbase-timeline__item--clickable': !!item.onClick,
            }
        );

        return (
            <div className={itemClasses} onClick={item.onClick}>
                <div className="designbase-timeline__marker">
                    {renderItemPrefix(item, index)}
                </div>

                {!isLast && (
                    <div
                        className="designbase-timeline__line"
                        style={lineColor ? { backgroundColor: lineColor } : undefined}
                    />
                )}

                <div className="designbase-timeline__content">
                    <div className="designbase-timeline__header">
                        <h4 className="designbase-timeline__title">{item.title}</h4>
                        {item.date && (
                            <span className="designbase-timeline__date">{item.date}</span>
                        )}
                    </div>

                    {item.description && (
                        <p className="designbase-timeline__description">{item.description}</p>
                    )}

                    {item.content && (
                        <div className="designbase-timeline__extra-content">
                            {item.content}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className={classes}>
            {items.map((item, index) => (
                <TimelineItemComponent
                    key={item.id}
                    item={item}
                    index={index}
                    isLast={index === items.length - 1}
                />
            ))}
        </div>
    );
};

export default Timeline;
