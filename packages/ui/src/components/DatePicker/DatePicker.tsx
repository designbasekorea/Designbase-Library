/**
 * Calendar 컴포넌트
 * 
 * 날짜/기간을 직관적으로 확인하고 선택할 수 있는 캘린더 UI 제공
 * 단순 날짜 선택뿐만 아니라, 이벤트/스케줄 관리까지 확장 가능한 구조
 */

import React, { useState, useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import './DatePicker.scss';

// 타입 정의
export type DatePickerMode = 'single' | 'range' | 'multiple';
export type DatePickerSize = 'sm' | 'md' | 'lg';
export type DatePickerVariant = 'default' | 'outlined' | 'filled';
export type StartOfWeek = 'sunday' | 'monday';

export interface DatePickerEvent {
    date: Date;
    label?: string;
    type?: 'dot' | 'badge';
    color?: string;
}

export interface DatePickerProps {
    mode?: DatePickerMode;
    value?: Date | Date[] | { start: Date; end: Date };
    onChange?: (value: Date | Date[] | { start: Date; end: Date }) => void;
    minDate?: Date;
    maxDate?: Date;
    events?: DatePickerEvent[];
    showOutsideDays?: boolean;
    startOfWeek?: StartOfWeek;
    size?: DatePickerSize;
    variant?: DatePickerVariant;
    highlightWeekends?: boolean;
    highlightHolidays?: boolean;
    today?: Date;
    locale?: string;
    format?: string;
    className?: string;
    disabled?: boolean;
    readonly?: boolean;
    // 드롭다운 관련 props
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    trigger?: React.ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    // 인라인 모드 (드롭다운이 아닌 직접 표시)
    inline?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
    mode = 'single',
    value,
    onChange,
    minDate,
    maxDate,
    events = [],
    showOutsideDays = true,
    startOfWeek = 'sunday',
    size = 'md',
    variant = 'default',
    highlightWeekends = true,
    highlightHolidays = false,
    today = new Date(),
    locale = 'ko-KR',
    format = 'yyyy-MM-dd',
    className,
    disabled = false,
    readonly = false,
    // 드롭다운 관련 props
    isOpen: controlledIsOpen,
    onOpenChange,
    trigger,
    placement = 'bottom',
    // 인라인 모드
    inline = false,
}) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const [rangeStart, setRangeStart] = useState<Date | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // 드롭다운 상태 관리
    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
    const setIsOpen = (open: boolean) => {
        if (controlledIsOpen === undefined) {
            setInternalIsOpen(open);
        }
        onOpenChange?.(open);
    };

    // 외부 클릭 감지
    useEffect(() => {
        if (!isOpen || inline) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, inline]);

    // ESC 키 감지
    useEffect(() => {
        if (!isOpen || inline) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, inline]);

    // 날짜 유효성 검사
    const isDateValid = useCallback((date: Date) => {
        if (minDate && date < minDate) return false;
        if (maxDate && date > maxDate) return false;
        return true;
    }, [minDate, maxDate]);

    // 날짜 선택 처리
    const handleDateClick = useCallback((date: Date) => {
        if (disabled || readonly || !isDateValid(date)) return;

        switch (mode) {
            case 'single':
                onChange?.(date);
                if (!inline) setIsOpen(false);
                break;
            case 'range':
                // 기존 범위가 있고, 새로운 날짜를 클릭한 경우
                if (value && 'start' in value && !rangeStart) {
                    // 기존 범위를 해제하고 새로운 범위 시작
                    onChange?.(undefined as any);
                    setRangeStart(date);
                    return;
                }

                if (!rangeStart) {
                    // 첫 번째 클릭: 시작일 설정
                    setRangeStart(date);
                } else {
                    // 두 번째 클릭: 끝일 설정
                    const start = rangeStart;
                    const end = date;

                    if (start > end) {
                        // 시작일이 끝일보다 늦으면 순서 바꿈
                        onChange?.({ start: end, end: start });
                    } else {
                        onChange?.({ start, end });
                    }

                    setRangeStart(null);
                    if (!inline) setIsOpen(false);
                }
                break;
            case 'multiple':
                const currentDates = Array.isArray(value) ? value : [];
                const dateStr = date.toISOString().split('T')[0];
                const isSelected = currentDates.some(d => d.toISOString().split('T')[0] === dateStr);

                if (isSelected) {
                    onChange?.(currentDates.filter(d => d.toISOString().split('T')[0] !== dateStr));
                } else {
                    onChange?.([...currentDates, date]);
                }
                break;
        }
    }, [mode, value, onChange, disabled, readonly, isDateValid, rangeStart, inline]);

    // 날짜 호버 처리
    const handleDateHover = useCallback((date: Date | null) => {
        if (mode === 'range') {
            setHoveredDate(date);
        }
    }, [mode]);

    // 이벤트 가져오기
    const getEventsForDate = useCallback((date: Date) => {
        return events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === date.toDateString();
        });
    }, [events]);

    // 범위 내 날짜인지 확인
    const isInRange = useCallback((date: Date) => {
        if (mode !== 'range') return false;

        // 현재 선택된 범위 확인
        let start: Date | null = null;
        let end: Date | null = null;

        if (rangeStart) {
            // 첫 번째 날짜만 선택된 상태
            start = rangeStart;
            end = hoveredDate;
        } else if (value && 'start' in value) {
            // 완성된 범위
            start = (value as { start: Date; end: Date }).start;
            end = (value as { start: Date; end: Date }).end;
        }

        if (!start) return false;

        const dateStr = date.toISOString().split('T')[0];
        const startStr = start.toISOString().split('T')[0];
        const endStr = end ? end.toISOString().split('T')[0] : startStr;

        return dateStr >= startStr && dateStr <= endStr;
    }, [mode, value, rangeStart, hoveredDate]);

    // 날짜가 선택되었는지 확인
    const isDateSelected = useCallback((date: Date) => {
        const dateStr = date.toISOString().split('T')[0];

        switch (mode) {
            case 'single':
                return value && value instanceof Date && value.toISOString().split('T')[0] === dateStr;
            case 'range':
                if (rangeStart && rangeStart.toISOString().split('T')[0] === dateStr) {
                    return true;
                }
                if (!value || !('start' in value)) return false;
                const range = value as { start: Date; end: Date };
                return range.start.toISOString().split('T')[0] === dateStr ||
                    range.end.toISOString().split('T')[0] === dateStr;
            case 'multiple':
                return Array.isArray(value) && value.some(d => d.toISOString().split('T')[0] === dateStr);
            default:
                return false;
        }
    }, [mode, value, rangeStart]);

    // 월 이동
    const goToPreviousMonth = useCallback(() => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() - 1);
            return newDate;
        });
    }, []);

    const goToNextMonth = useCallback(() => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() + 1);
            return newDate;
        });
    }, []);

    // 오늘로 이동
    const goToToday = useCallback(() => {
        setCurrentDate(new Date());
    }, []);

    // 달력 그리드 생성
    const generateCalendarGrid = useCallback(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const startDate = new Date(firstDay);
        const startDayOfWeek = startOfWeek === 'monday'
            ? (firstDay.getDay() + 6) % 7
            : firstDay.getDay();

        startDate.setDate(startDate.getDate() - startDayOfWeek);

        const grid = [];
        const totalDays = 42; // 6주 x 7일

        for (let i = 0; i < totalDays; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            grid.push(date);
        }

        return grid;
    }, [currentDate, startOfWeek]);

    // 요일 헤더 생성
    const generateWeekdays = useCallback(() => {
        const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
        if (startOfWeek === 'monday') {
            weekdays.push(weekdays.shift()!);
        }
        return weekdays;
    }, [startOfWeek]);

    // 날짜 셀 렌더링
    const renderDateCell = useCallback((date: Date) => {
        const isCurrentMonth = date.getMonth() === currentDate.getMonth();
        const isToday = date.toDateString() === today.toDateString();
        const isSelected = isDateSelected(date);
        const isInRangeDate = isInRange(date);
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const dateEvents = getEventsForDate(date);

        const cellClass = clsx(
            'designbase-date-picker__date',
            {
                'designbase-date-picker__date--outside': !isCurrentMonth && !showOutsideDays,
                'designbase-date-picker__date--today': isToday,
                'designbase-date-picker__date--selected': isSelected,
                'designbase-date-picker__date--in-range': isInRangeDate && !isSelected,
                'designbase-date-picker__date--range-start': mode === 'range' && (
                    (rangeStart && rangeStart.toDateString() === date.toDateString()) ||
                    (value && 'start' in value && (value as { start: Date }).start.toDateString() === date.toDateString())
                ),
                'designbase-date-picker__date--range-end': mode === 'range' && value && 'end' in value &&
                    (value as { end: Date }).end.toDateString() === date.toDateString(),
                'designbase-date-picker__date--weekend': isWeekend && highlightWeekends,
                'designbase-date-picker__date--disabled': !isDateValid(date),
                'designbase-date-picker__date--has-events': dateEvents.length > 0,
            }
        );

        return (
            <button
                key={date.toISOString()}
                className={cellClass}
                onClick={() => handleDateClick(date)}
                onMouseEnter={() => handleDateHover(date)}
                onMouseLeave={() => handleDateHover(null)}
                disabled={!isDateValid(date) || disabled || readonly}
                type="button"
            >
                <span className="designbase-date-picker__date-number">
                    {date.getDate()}
                </span>
                {dateEvents.length > 0 && (
                    <div className="designbase-date-picker__events">
                        {dateEvents.slice(0, 3).map((event, index) => (
                            <div
                                key={index}
                                className={clsx(
                                    'designbase-date-picker__event',
                                    `designbase-date-picker__event--${event.type || 'dot'}`
                                )}
                                style={event.color ? { backgroundColor: event.color } : undefined}
                                title={event.label}
                            />
                        ))}
                        {dateEvents.length > 3 && (
                            <span className="designbase-date-picker__event-count">
                                +{dateEvents.length - 3}
                            </span>
                        )}
                    </div>
                )}
            </button>
        );
    }, [
        currentDate,
        today,
        isDateSelected,
        isInRange,
        mode,
        value,
        rangeStart,
        highlightWeekends,
        getEventsForDate,
        showOutsideDays,
        isDateValid,
        disabled,
        readonly,
        handleDateClick,
        handleDateHover,
    ]);

    const calendarGrid = generateCalendarGrid();
    const weekdays = generateWeekdays();

    // 드롭다운 형태일 때
    if (!inline && trigger) {
        return (
            <div ref={containerRef} className="designbase-date-picker-container">
                <div onClick={() => !disabled && !readonly && setIsOpen(!isOpen)}>
                    {trigger}
                </div>
                {isOpen && (
                    <div className={clsx(
                        'designbase-date-picker-dropdown',
                        `designbase-date-picker-dropdown--placement-${placement}`
                    )}>
                        <div
                            className={clsx(
                                'designbase-date-picker',
                                `designbase-date-picker--size-${size}`,
                                `designbase-date-picker--variant-${variant}`,
                                {
                                    'designbase-date-picker--disabled': disabled,
                                    'designbase-date-picker--readonly': readonly,
                                },
                                className
                            )}
                        >
                            {/* 헤더 */}
                            <div className="designbase-date-picker__header">
                                <button
                                    className="designbase-date-picker__nav-button"
                                    onClick={goToPreviousMonth}
                                    disabled={disabled || readonly}
                                    type="button"
                                    aria-label="이전 달"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                <div className="designbase-date-picker__current-month">
                                    {currentDate.toLocaleDateString(locale, { year: 'numeric', month: 'long' })}
                                </div>

                                <button
                                    className="designbase-date-picker__nav-button"
                                    onClick={goToNextMonth}
                                    disabled={disabled || readonly}
                                    type="button"
                                    aria-label="다음 달"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            {/* 요일 헤더 */}
                            <div className="designbase-date-picker__weekdays">
                                {weekdays.map(day => (
                                    <div key={day} className="designbase-date-picker__weekday">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* 날짜 그리드 */}
                            <div className="designbase-date-picker__grid">
                                {calendarGrid.map(date => renderDateCell(date))}
                            </div>

                            {/* 푸터 */}
                            <div className="designbase-date-picker__footer">
                                <button
                                    className="designbase-date-picker__today-button"
                                    onClick={goToToday}
                                    disabled={disabled || readonly}
                                    type="button"
                                >
                                    오늘
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // 인라인 형태 (기존 방식)
    return (
        <div
            className={clsx(
                'designbase-date-picker',
                `designbase-date-picker--size-${size}`,
                `designbase-date-picker--variant-${variant}`,
                {
                    'designbase-date-picker--disabled': disabled,
                    'designbase-date-picker--readonly': readonly,
                },
                className
            )}
        >
            {/* 헤더 */}
            <div className="designbase-date-picker__header">
                <button
                    className="designbase-date-picker__nav-button"
                    onClick={goToPreviousMonth}
                    disabled={disabled || readonly}
                    type="button"
                    aria-label="이전 달"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="designbase-date-picker__current-month">
                    {currentDate.toLocaleDateString(locale, { year: 'numeric', month: 'long' })}
                </div>

                <button
                    className="designbase-date-picker__nav-button"
                    onClick={goToNextMonth}
                    disabled={disabled || readonly}
                    type="button"
                    aria-label="다음 달"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* 요일 헤더 */}
            <div className="designbase-date-picker__weekdays">
                {weekdays.map(day => (
                    <div key={day} className="designbase-date-picker__weekday">
                        {day}
                    </div>
                ))}
            </div>

            {/* 날짜 그리드 */}
            <div className="designbase-date-picker__grid">
                {calendarGrid.map(date => renderDateCell(date))}
            </div>

            {/* 푸터 */}
            <div className="designbase-date-picker__footer">
                <button
                    className="designbase-date-picker__today-button"
                    onClick={goToToday}
                    disabled={disabled || readonly}
                    type="button"
                >
                    오늘
                </button>
            </div>
        </div>
    );
};

export default DatePicker;
