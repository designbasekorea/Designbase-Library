/**
 * Countdown 컴포넌트
 * 
 * 타임세일 등에 사용되는 카운트다운 타이머 컴포넌트
 * 남은 기간 또는 종료 날짜를 입력하면 자동으로 카운트다운
 */

import React, { useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import './Countdown.scss';

export type CountdownSize = 's' | 'm' | 'l';
export type CountdownVariant = 'default' | 'compact' | 'minimal';

export interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    total: number; // 총 남은 시간 (밀리초)
}

export interface CountdownProps {
    /** 종료 날짜 (Date 객체 또는 ISO 문자열) */
    endDate?: Date | string;
    /** 남은 시간 (초 단위) */
    duration?: number;
    /** 카운트다운 크기 */
    size?: CountdownSize;
    /** 카운트다운 변형 */
    variant?: CountdownVariant;
    /** 일 표시 여부 */
    showDays?: boolean;
    /** 시간 표시 여부 */
    showHours?: boolean;
    /** 분 표시 여부 */
    showMinutes?: boolean;
    /** 초 표시 여부 */
    showSeconds?: boolean;
    /** 라벨 표시 여부 */
    showLabels?: boolean;
    /** 커스텀 라벨 */
    labels?: {
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    };
    /** 종료 시 콜백 */
    onComplete?: () => void;
    /** 시간 업데이트 콜백 */
    onTick?: (timeRemaining: TimeRemaining) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const Countdown: React.FC<CountdownProps> = ({
    endDate,
    duration,
    size = 'm',
    variant = 'default',
    showDays = true,
    showHours = true,
    showMinutes = true,
    showSeconds = true,
    showLabels = true,
    labels = {
        days: '일',
        hours: '시간',
        minutes: '분',
        seconds: '초',
    },
    onComplete,
    onTick,
    className,
}) => {
    // 종료 시간 계산
    const targetTime = useMemo(() => {
        if (endDate) {
            return typeof endDate === 'string' ? new Date(endDate).getTime() : endDate.getTime();
        }
        if (duration) {
            return Date.now() + duration * 1000;
        }
        return Date.now();
    }, [endDate, duration]);

    // 남은 시간 계산 함수
    const calculateTimeRemaining = (): TimeRemaining => {
        const now = Date.now();
        const total = targetTime - now;

        if (total <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
        }

        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return { days, hours, minutes, seconds, total };
    };

    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeRemaining = calculateTimeRemaining();
            setTimeRemaining(newTimeRemaining);

            onTick?.(newTimeRemaining);

            if (newTimeRemaining.total <= 0) {
                clearInterval(timer);
                onComplete?.();
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetTime, onComplete, onTick]);

    const classes = clsx(
        'designbase-countdown',
        `designbase-countdown--${size}`,
        `designbase-countdown--${variant}`,
        {
            'designbase-countdown--with-labels': showLabels,
            'designbase-countdown--expired': timeRemaining.total <= 0,
        },
        className
    );

    // 숫자를 두 자리로 포맷
    const formatNumber = (num: number): string => {
        return num.toString().padStart(2, '0');
    };

    const renderTimeUnit = (value: number, label: string, show: boolean) => {
        if (!show) return null;

        return (
            <div className="designbase-countdown__unit">
                <div className="designbase-countdown__value">
                    {formatNumber(value)}
                </div>
                {showLabels && (
                    <div className="designbase-countdown__label">
                        {label}
                    </div>
                )}
            </div>
        );
    };

    const renderSeparator = () => {
        if (variant === 'minimal') return null;
        return <div className="designbase-countdown__separator">:</div>;
    };

    const units = [
        { value: timeRemaining.days, label: labels.days || '일', show: showDays },
        { value: timeRemaining.hours, label: labels.hours || '시간', show: showHours },
        { value: timeRemaining.minutes, label: labels.minutes || '분', show: showMinutes },
        { value: timeRemaining.seconds, label: labels.seconds || '초', show: showSeconds },
    ].filter(unit => unit.show);

    return (
        <div className={classes}>
            {units.map((unit, index) => (
                <React.Fragment key={unit.label}>
                    {renderTimeUnit(unit.value, unit.label, unit.show)}
                    {index < units.length - 1 && renderSeparator()}
                </React.Fragment>
            ))}
        </div>
    );
};

Countdown.displayName = 'Countdown';

export default Countdown;
