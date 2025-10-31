import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import './Indicator.scss';

export interface IndicatorProps {
    current: number;
    total: number;
    type?: 'dots' | 'numbers' | 'line';
    direction?: 'horizontal' | 'vertical';
    size?: 's' | 'm' | 'l';
    clickable?: boolean;
    onStepClick?: (step: number) => void;
    timer?: boolean;
    timerDuration?: number;
    onTimerComplete?: () => void;
    className?: string;
    [key: string]: any;
}

export const Indicator: React.FC<IndicatorProps> = ({
    current,
    total,
    type = 'dots',
    direction = 'horizontal',
    size = 'm',
    clickable = false,
    onStepClick,
    timer = false,
    timerDuration = 3000,
    onTimerComplete,
    className,
    ...props
}) => {
    const [progress, setProgress] = useState(0);
    const timerRef = useRef<number | null>(null);
    const startRef = useRef<number>(0);

    useEffect(() => {
        if (!timer) return;
        setProgress(0);
        startRef.current = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startRef.current;
            const ratio = Math.min(elapsed / timerDuration, 1);
            setProgress(ratio);
            if (ratio < 1) {
                timerRef.current = requestAnimationFrame(animate);
            } else {
                onTimerComplete?.();
            }
        };

        timerRef.current = requestAnimationFrame(animate);
        return () => {
            if (timerRef.current) cancelAnimationFrame(timerRef.current);
        };
    }, [current, timer, timerDuration, onTimerComplete]);

    const handleStepClick = (i: number) => {
        if (clickable && onStepClick) onStepClick(i);
    };

    const classes = clsx(
        'designbase-indicator',
        `designbase-indicator--${type}`,
        `designbase-indicator--${direction}`,
        `designbase-indicator--${size}`,
        { 'designbase-indicator--clickable': clickable },
        className
    );

    // 숫자 타입
    if (type === 'numbers') {
        return (
            <div className={classes} role="progressbar" aria-valuenow={current + 1} aria-valuemin={1} aria-valuemax={total}>
                <span className="designbase-indicator__current">{current + 1}</span>
                <span className="designbase-indicator__separator">/</span>
                <span className="designbase-indicator__total">{total}</span>
            </div>
        );
    }

    // 라인 타입 (가로 progress bar)
    if (type === 'line') {
        return (
            <div className={classes} role="progressbar" aria-valuenow={current + 1} aria-valuemin={1} aria-valuemax={total}>
                {Array.from({ length: total }, (_, i) => (
                    <div
                        key={i}
                        className={clsx('designbase-indicator__line-segment', {
                            'designbase-indicator__line-segment--active': i < current,
                            'designbase-indicator__line-segment--current': i === current
                        })}
                    >
                        {timer && i === current && (
                            <div
                                className="designbase-indicator__line-fill"
                                style={{ transform: `scaleX(${progress})` }}
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    }

    // 점(dot) 타입 + 원형 애니메이션
    return (
        <div className={classes} role="progressbar" aria-valuenow={current + 1} aria-valuemin={1} aria-valuemax={total}>
            {Array.from({ length: total }, (_, i) => {
                const active = i === current;
                const circumference = 2 * Math.PI * 15.9155;
                const offset = circumference * (1 - progress);

                return (
                    <button
                        key={i}
                        className={clsx('designbase-indicator__dot', { 'designbase-indicator__dot--active': active })}
                        onClick={() => handleStepClick(i)}
                        disabled={!clickable}
                    >
                        {timer && active && (
                            <svg className="designbase-indicator__circle" viewBox="0 0 36 36">
                                <circle
                                    className="designbase-indicator__circle-bg"
                                    cx="18" cy="18" r="15.9155"
                                    fill="none"
                                    stroke="var(--db-border-base)"
                                    strokeWidth="2"
                                />
                                <circle
                                    className="designbase-indicator__circle-progress"
                                    cx="18" cy="18" r="15.9155"
                                    fill="none"
                                    stroke="var(--db-brand-primary)"
                                    strokeWidth="2"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={offset}
                                    strokeLinecap="round"
                                />
                            </svg>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

Indicator.displayName = 'Indicator';
export default Indicator;
