/**
 * TimePicker 컴포넌트
 * 
 * 시간을 선택할 수 있는 직관적이고 사용하기 쉬운 컴포넌트입니다.
 * 12시간/24시간 형식, 시간/분 선택, 드롭다운 형태를 지원합니다.
 */

import React from 'react';
import clsx from 'clsx';
import './TimePicker.scss';

export type TimePickerSize = 'sm' | 'md' | 'lg';
export type TimePickerVariant = 'default' | 'outlined' | 'filled';
export type TimeFormat = '12h' | '24h';
export type TimePickerMode = 'dropdown' | 'inline';

export interface TimePickerProps {
    /** 선택된 시간 */
    value?: Date;
    /** 시간 변경 핸들러 */
    onChange?: (time: Date) => void;
    /** 시간 형식 */
    format?: TimeFormat;
    /** 피커 모드 */
    mode?: TimePickerMode;
    /** 시간 단위 */
    hourStep?: number;
    /** 분 단위 */
    minuteStep?: number;
    /** 최소 시간 */
    minTime?: Date;
    /** 최대 시간 */
    maxTime?: Date;
    /** 피커 크기 */
    size?: TimePickerSize;
    /** 피커 변형 */
    variant?: TimePickerVariant;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 읽기 전용 */
    readonly?: boolean;
    /** 플레이스홀더 */
    placeholder?: string;
    /** 시간 표시 형식 */
    displayFormat?: string;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const TimePicker: React.FC<TimePickerProps> = ({
    value,
    onChange,
    format = '24h',
    mode = 'dropdown',
    hourStep = 1,
    minuteStep = 15,
    minTime,
    maxTime,
    size = 'md',
    variant = 'default',
    disabled = false,
    readonly = false,
    placeholder = '시간을 선택하세요',
    displayFormat,
    className,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedHour, setSelectedHour] = React.useState(() => {
        if (value) {
            return value.getHours();
        }
        return 0;
    });
    const [selectedMinute, setSelectedMinute] = React.useState(() => {
        if (value) {
            return value.getMinutes();
        }
        return 0;
    });
    const [selectedPeriod, setSelectedPeriod] = React.useState<'AM' | 'PM'>(() => {
        if (value && format === '12h') {
            return value.getHours() >= 12 ? 'PM' : 'AM';
        }
        return 'AM';
    });

    const containerRef = React.useRef<HTMLDivElement>(null);

    // 시간 유효성 검사
    const isTimeDisabled = (hour: number, minute: number): boolean => {
        if (minTime) {
            const minHour = minTime.getHours();
            const minMinute = minTime.getMinutes();
            if (hour < minHour || (hour === minHour && minute < minMinute)) {
                return true;
            }
        }
        if (maxTime) {
            const maxHour = maxTime.getHours();
            const maxMinute = maxTime.getMinutes();
            if (hour > maxHour || (hour === maxHour && minute > maxMinute)) {
                return true;
            }
        }
        return false;
    };

    // 24시간을 12시간으로 변환
    const to12Hour = (hour: number): number => {
        if (hour === 0) return 12;
        if (hour > 12) return hour - 12;
        return hour;
    };

    // 12시간을 24시간으로 변환
    const to24Hour = (hour: number, period: 'AM' | 'PM'): number => {
        if (period === 'AM') {
            return hour === 12 ? 0 : hour;
        } else {
            return hour === 12 ? 12 : hour + 12;
        }
    };

    // 시간 변경 핸들러
    const handleTimeChange = (hour: number, minute: number, period?: 'AM' | 'PM') => {
        if (isTimeDisabled(hour, minute)) return;

        let finalHour = hour;
        if (format === '12h' && period) {
            finalHour = to24Hour(hour, period);
        }

        const newTime = new Date();
        newTime.setHours(finalHour, minute, 0, 0);

        setSelectedHour(hour);
        setSelectedMinute(minute);
        if (period) {
            setSelectedPeriod(period);
        }

        onChange?.(newTime);
        if (mode === 'dropdown') {
            setIsOpen(false);
        }
    };

    // 시간 표시 형식
    const formatDisplayTime = (): string => {
        if (!value) return '';

        if (displayFormat) {
            return value.toLocaleTimeString('ko-KR', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: format === '12h',
            });
        }

        const hour = format === '12h' ? to12Hour(value.getHours()) : value.getHours();
        const minute = value.getMinutes();
        const period = format === '12h' ? (value.getHours() >= 12 ? 'PM' : 'AM') : '';

        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}${period ? ` ${period}` : ''}`;
    };

    // 시간 옵션 생성
    const generateHourOptions = () => {
        const maxHour = format === '12h' ? 12 : 24;
        const hours = [];

        for (let i = 0; i < maxHour; i += hourStep) {
            if (format === '12h' && i === 0) continue; // 12시간 형식에서는 0시 제외
            hours.push(i);
        }

        return hours;
    };

    // 분 옵션 생성
    const generateMinuteOptions = () => {
        const minutes = [];

        for (let i = 0; i < 60; i += minuteStep) {
            minutes.push(i);
        }

        return minutes;
    };

    // 외부 클릭 감지
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // 키보드 네비게이션
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (disabled || readonly) return;

        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                setIsOpen(!isOpen);
                break;
            case 'Escape':
                setIsOpen(false);
                break;
        }
    };

    const hourOptions = generateHourOptions();
    const minuteOptions = generateMinuteOptions();

    const classes = clsx(
        'designbase-time-picker',
        `designbase-time-picker--size-${size}`,
        `designbase-time-picker--variant-${variant}`,
        `designbase-time-picker--mode-${mode}`,
        {
            'designbase-time-picker--disabled': disabled,
            'designbase-time-picker--readonly': readonly,
            'designbase-time-picker--open': isOpen,
        },
        className
    );

    if (mode === 'inline') {
        return (
            <div className={classes}>
                <div className="designbase-time-picker__inline">
                    {/* 시간 선택 */}
                    <div className="designbase-time-picker__column">
                        <div className="designbase-time-picker__column-header">시간</div>
                        <div className="designbase-time-picker__options">
                            {hourOptions.map((hour) => {
                                const displayHour = format === '12h' ? to12Hour(hour) : hour;
                                const isDisabled = isTimeDisabled(hour, selectedMinute);
                                const isSelected = selectedHour === displayHour;

                                return (
                                    <button
                                        key={hour}
                                        className={clsx(
                                            'designbase-time-picker__option',
                                            {
                                                'designbase-time-picker__option--selected': isSelected,
                                                'designbase-time-picker__option--disabled': isDisabled,
                                            }
                                        )}
                                        onClick={() => handleTimeChange(hour, selectedMinute, selectedPeriod)}
                                        disabled={isDisabled}
                                    >
                                        {displayHour.toString().padStart(2, '0')}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* 분 선택 */}
                    <div className="designbase-time-picker__column">
                        <div className="designbase-time-picker__column-header">분</div>
                        <div className="designbase-time-picker__options">
                            {minuteOptions.map((minute) => {
                                const isDisabled = isTimeDisabled(selectedHour, minute);
                                const isSelected = selectedMinute === minute;

                                return (
                                    <button
                                        key={minute}
                                        className={clsx(
                                            'designbase-time-picker__option',
                                            {
                                                'designbase-time-picker__option--selected': isSelected,
                                                'designbase-time-picker__option--disabled': isDisabled,
                                            }
                                        )}
                                        onClick={() => handleTimeChange(selectedHour, minute, selectedPeriod)}
                                        disabled={isDisabled}
                                    >
                                        {minute.toString().padStart(2, '0')}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* AM/PM 선택 (12시간 형식일 때만) */}
                    {format === '12h' && (
                        <div className="designbase-time-picker__column">
                            <div className="designbase-time-picker__column-header">구분</div>
                            <div className="designbase-time-picker__options">
                                {(['AM', 'PM'] as const).map((period) => {
                                    const isSelected = selectedPeriod === period;

                                    return (
                                        <button
                                            key={period}
                                            className={clsx(
                                                'designbase-time-picker__option',
                                                {
                                                    'designbase-time-picker__option--selected': isSelected,
                                                }
                                            )}
                                            onClick={() => handleTimeChange(selectedHour, selectedMinute, period)}
                                        >
                                            {period}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className={classes} ref={containerRef}>
            {/* 트리거 버튼 */}
            <button
                className="designbase-time-picker__trigger"
                onClick={() => !disabled && !readonly && setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className="designbase-time-picker__display">
                    {value ? formatDisplayTime() : placeholder}
                </span>
                <span className="designbase-time-picker__arrow">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>

            {/* 드롭다운 메뉴 */}
            {isOpen && (
                <div className="designbase-time-picker__dropdown">
                    <div className="designbase-time-picker__dropdown-content">
                        {/* 시간 선택 */}
                        <div className="designbase-time-picker__column">
                            <div className="designbase-time-picker__column-header">시간</div>
                            <div className="designbase-time-picker__options">
                                {hourOptions.map((hour) => {
                                    const displayHour = format === '12h' ? to12Hour(hour) : hour;
                                    const isDisabled = isTimeDisabled(hour, selectedMinute);
                                    const isSelected = selectedHour === displayHour;

                                    return (
                                        <button
                                            key={hour}
                                            className={clsx(
                                                'designbase-time-picker__option',
                                                {
                                                    'designbase-time-picker__option--selected': isSelected,
                                                    'designbase-time-picker__option--disabled': isDisabled,
                                                }
                                            )}
                                            onClick={() => handleTimeChange(hour, selectedMinute, selectedPeriod)}
                                            disabled={isDisabled}
                                        >
                                            {displayHour.toString().padStart(2, '0')}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 분 선택 */}
                        <div className="designbase-time-picker__column">
                            <div className="designbase-time-picker__column-header">분</div>
                            <div className="designbase-time-picker__options">
                                {minuteOptions.map((minute) => {
                                    const isDisabled = isTimeDisabled(selectedHour, minute);
                                    const isSelected = selectedMinute === minute;

                                    return (
                                        <button
                                            key={minute}
                                            className={clsx(
                                                'designbase-time-picker__option',
                                                {
                                                    'designbase-time-picker__option--selected': isSelected,
                                                    'designbase-time-picker__option--disabled': isDisabled,
                                                }
                                            )}
                                            onClick={() => handleTimeChange(selectedHour, minute, selectedPeriod)}
                                            disabled={isDisabled}
                                        >
                                            {minute.toString().padStart(2, '0')}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* AM/PM 선택 (12시간 형식일 때만) */}
                        {format === '12h' && (
                            <div className="designbase-time-picker__column">
                                <div className="designbase-time-picker__column-header">구분</div>
                                <div className="designbase-time-picker__options">
                                    {(['AM', 'PM'] as const).map((period) => {
                                        const isSelected = selectedPeriod === period;

                                        return (
                                            <button
                                                key={period}
                                                className={clsx(
                                                    'designbase-time-picker__option',
                                                    {
                                                        'designbase-time-picker__option--selected': isSelected,
                                                    }
                                                )}
                                                onClick={() => handleTimeChange(selectedHour, selectedMinute, period)}
                                            >
                                                {period}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TimePicker;
