/**
 * Calendar 컴포넌트
 * 
 * 날짜/기간을 직관적으로 확인하고 선택할 수 있는 캘린더 UI 제공
 * 단순 날짜 선택뿐만 아니라, 이벤트/스케줄 관리까지 확장 가능한 구조
 */

import React from 'react';
import clsx from 'clsx';
import './Calendar.scss';

export type CalendarMode = 'single' | 'range' | 'multiple';
export type CalendarSize = 'sm' | 'md' | 'lg';
export type CalendarVariant = 'default' | 'outlined' | 'filled';
export type StartOfWeek = 'sunday' | 'monday';
export type EventType = 'dot' | 'badge' | 'label';

export interface CalendarEvent {
    /** 이벤트 날짜 */
    date: Date;
    /** 이벤트 라벨 */
    label?: string;
    /** 이벤트 타입 */
    type?: EventType;
    /** 이벤트 색상 */
    color?: string;
    /** 이벤트 설명 */
    description?: string;
    /** 이벤트 카테고리 */
    category?: string;
}

export interface CalendarProps {
    /** 캘린더 모드 */
    mode?: CalendarMode;
    /** 선택된 값 */
    value?: Date | Date[] | { start: Date; end: Date };
    /** 값 변경 핸들러 */
    onChange?: (value: Date | Date[] | { start: Date; end: Date } | null) => void;
    /** 최소 날짜 */
    minDate?: Date;
    /** 최대 날짜 */
    maxDate?: Date;
    /** 이벤트 목록 */
    events?: CalendarEvent[];
    /** 외부 날짜 표시 여부 */
    showOutsideDays?: boolean;
    /** 주 시작일 */
    startOfWeek?: StartOfWeek;
    /** 캘린더 크기 */
    size?: CalendarSize;
    /** 캘린더 변형 */
    variant?: CalendarVariant;
    /** 주말 하이라이트 */
    highlightWeekends?: boolean;
    /** 공휴일 하이라이트 */
    highlightHolidays?: boolean;
    /** 오늘 날짜 */
    today?: Date;
    /** 로케일 */
    locale?: string;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({
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
    className,
}) => {
    const [currentDate, setCurrentDate] = React.useState(() => {
        if (value) {
            if (mode === 'single' && value instanceof Date) {
                return new Date(value.getFullYear(), value.getMonth(), 1);
            } else if (mode === 'range' && typeof value === 'object' && 'start' in value) {
                return new Date(value.start.getFullYear(), value.start.getMonth(), 1);
            } else if (mode === 'multiple' && Array.isArray(value) && value.length > 0) {
                return new Date(value[0].getFullYear(), value[0].getMonth(), 1);
            }
        }
        return new Date(today.getFullYear(), today.getMonth(), 1);
    });

    const [hoveredDate, setHoveredDate] = React.useState<Date | null>(null);

    // 날짜 유효성 검사
    const isDateDisabled = (date: Date): boolean => {
        if (minDate && date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) {
            return true;
        }
        if (maxDate && date > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) {
            return true;
        }
        return false;
    };

    // 날짜가 오늘인지 확인
    const isToday = (date: Date): boolean => {
        return date.toDateString() === today.toDateString();
    };

    // 날짜가 선택되었는지 확인
    const isSelected = (date: Date): boolean => {
        if (!value) return false;

        if (mode === 'single' && value instanceof Date) {
            return date.toDateString() === value.toDateString();
        } else if (mode === 'range' && typeof value === 'object' && 'start' in value) {
            const start = new Date(value.start.getFullYear(), value.start.getMonth(), value.start.getDate());
            const end = new Date(value.end.getFullYear(), value.end.getMonth(), value.end.getDate());
            const current = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return current >= start && current <= end;
        } else if (mode === 'multiple' && Array.isArray(value)) {
            return value.some(selectedDate => date.toDateString() === selectedDate.toDateString());
        }

        return false;
    };

    // 날짜가 범위 선택의 시작/끝인지 확인
    const isRangeBoundary = (date: Date): { isStart: boolean; isEnd: boolean } => {
        if (mode !== 'range' || !value || typeof value !== 'object' || !('start' in value)) {
            return { isStart: false, isEnd: false };
        }

        const start = new Date(value.start.getFullYear(), value.start.getMonth(), value.start.getDate());
        const end = new Date(value.end.getFullYear(), value.end.getMonth(), value.end.getDate());
        const current = new Date(date.getFullYear(), date.getMonth(), date.getDate());

        return {
            isStart: current.toDateString() === start.toDateString(),
            isEnd: current.toDateString() === end.toDateString(),
        };
    };

    // 날짜에 이벤트가 있는지 확인
    const getDateEvents = (date: Date): CalendarEvent[] => {
        return events.filter(event => {
            const eventDate = new Date(event.date.getFullYear(), event.date.getMonth(), event.date.getDate());
            const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return eventDate.toDateString() === currentDate.toDateString();
        });
    };

    // 날짜 클릭 핸들러
    const handleDateClick = (date: Date) => {
        if (isDateDisabled(date)) return;

        if (mode === 'single') {
            onChange?.(date);
        } else if (mode === 'range') {
            if (!value || typeof value !== 'object' || !('start' in value)) {
                onChange?.({ start: date, end: date });
            } else {
                const start = value.start;
                const end = value.end;

                if (date < start) {
                    onChange?.({ start: date, end: start });
                } else if (date > end) {
                    onChange?.({ start: end, end: date });
                } else {
                    onChange?.({ start: date, end: date });
                }
            }
        } else if (mode === 'multiple') {
            const currentValue = Array.isArray(value) ? value : [];
            const dateString = date.toDateString();
            const isAlreadySelected = currentValue.some(selectedDate => selectedDate.toDateString() === dateString);

            if (isAlreadySelected) {
                const newValue = currentValue.filter(selectedDate => selectedDate.toDateString() !== dateString);
                onChange?.(newValue);
            } else {
                onChange?.([...currentValue, date]);
            }
        }
    };

    // 날짜 호버 핸들러
    const handleDateHover = (date: Date) => {
        if (mode === 'range' && value && typeof value === 'object' && 'start' in value) {
            setHoveredDate(date);
        }
    };

    // 날짜 호버 아웃 핸들러
    const handleDateHoverOut = () => {
        setHoveredDate(null);
    };

    // 이전 월로 이동
    const goToPreviousMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    };

    // 다음 월로 이동
    const goToNextMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    };

    // 오늘로 이동
    const goToToday = () => {
        setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    };

    // 현재 월의 날짜들을 생성
    const generateCalendarDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // 현재 월의 첫 번째 날
        const firstDay = new Date(year, month, 1);
        // 현재 월의 마지막 날
        const lastDay = new Date(year, month + 1, 0);

        // 첫 번째 날의 요일 (0: 일요일, 1: 월요일, ...)
        const firstDayOfWeek = firstDay.getDay();
        // 주 시작일 조정
        const startOffset = startOfWeek === 'monday' ? (firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1) : firstDayOfWeek;

        const days: Array<{ date: Date; isCurrentMonth: boolean }> = [];

        // 이전 달의 날짜들
        for (let i = startOffset - 1; i >= 0; i--) {
            const date = new Date(year, month, -i);
            days.push({ date, isCurrentMonth: false });
        }

        // 현재 달의 날짜들
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const date = new Date(year, month, i);
            days.push({ date, isCurrentMonth: true });
        }

        // 다음 달의 날짜들 (42개 칸을 채우기 위해)
        const remainingDays = 42 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            const date = new Date(year, month + 1, i);
            days.push({ date, isCurrentMonth: false });
        }

        return days;
    };

    // 요일 헤더 생성
    const generateWeekdayHeaders = () => {
        const weekdays = startOfWeek === 'monday'
            ? ['월', '화', '수', '목', '금', '토', '일']
            : ['일', '월', '화', '수', '목', '금', '토'];

        return weekdays;
    };

    // 범위 선택 시 호버 영역 계산
    const getHoverRange = (date: Date) => {
        if (mode !== 'range' || !hoveredDate || !value || typeof value !== 'object' || !('start' in value)) {
            return null;
        }

        const start = value.start;
        const hovered = hoveredDate;
        const current = date;

        if (hovered < start) {
            return current >= hovered && current <= start;
        } else {
            return current >= start && current <= hovered;
        }
    };

    const calendarDays = generateCalendarDays();
    const weekdayHeaders = generateWeekdayHeaders();

    const classes = clsx(
        'designbase-calendar',
        `designbase-calendar--size-${size}`,
        `designbase-calendar--variant-${variant}`,
        `designbase-calendar--mode-${mode}`,
        className
    );

    return (
        <div className={classes}>
            {/* 헤더 */}
            <div className="designbase-calendar__header">
                <button
                    className="designbase-calendar__nav-button"
                    onClick={goToPreviousMonth}
                    aria-label="이전 달"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="designbase-calendar__current-month">
                    {currentDate.toLocaleDateString(locale, { year: 'numeric', month: 'long' })}
                </div>

                <button
                    className="designbase-calendar__nav-button"
                    onClick={goToNextMonth}
                    aria-label="다음 달"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* 요일 헤더 */}
            <div className="designbase-calendar__weekdays">
                {weekdayHeaders.map((weekday, index) => (
                    <div
                        key={index}
                        className={clsx(
                            'designbase-calendar__weekday',
                            {
                                'designbase-calendar__weekday--weekend':
                                    (startOfWeek === 'monday' && (index === 5 || index === 6)) ||
                                    (startOfWeek === 'sunday' && (index === 0 || index === 6))
                            }
                        )}
                    >
                        {weekday}
                    </div>
                ))}
            </div>

            {/* 날짜 그리드 */}
            <div className="designbase-calendar__grid">
                {calendarDays.map(({ date, isCurrentMonth }, index) => {
                    const isDisabled = isDateDisabled(date);
                    const isTodayDate = isToday(date);
                    const isSelectedDate = isSelected(date);
                    const isHovered = hoveredDate && date.toDateString() === hoveredDate.toDateString();
                    const isInHoverRange = getHoverRange(date);
                    const dateEvents = getDateEvents(date);
                    const { isStart, isEnd } = isRangeBoundary(date);
                    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

                    return (
                        <button
                            key={index}
                            className={clsx(
                                'designbase-calendar__day',
                                {
                                    'designbase-calendar__day--outside': !isCurrentMonth,
                                    'designbase-calendar__day--disabled': isDisabled,
                                    'designbase-calendar__day--today': isTodayDate,
                                    'designbase-calendar__day--selected': isSelectedDate,
                                    'designbase-calendar__day--hovered': isHovered,
                                    'designbase-calendar__day--in-range': isInHoverRange,
                                    'designbase-calendar__day--range-start': isStart,
                                    'designbase-calendar__day--range-end': isEnd,
                                    'designbase-calendar__day--weekend': isWeekend && highlightWeekends,
                                    'designbase-calendar__day--has-events': dateEvents.length > 0,
                                }
                            )}
                            onClick={() => handleDateClick(date)}
                            onMouseEnter={() => handleDateHover(date)}
                            onMouseLeave={handleDateHoverOut}
                            disabled={isDisabled}
                            aria-label={date.toLocaleDateString(locale)}
                        >
                            <span className="designbase-calendar__day-number">
                                {date.getDate()}
                            </span>

                            {/* 이벤트 표시 */}
                            {dateEvents.length > 0 && (
                                <div className="designbase-calendar__events">
                                    {dateEvents.slice(0, 3).map((event, eventIndex) => (
                                        <div
                                            key={eventIndex}
                                            className={clsx(
                                                'designbase-calendar__event',
                                                `designbase-calendar__event--${event.type || 'dot'}`
                                            )}
                                            style={event.color ? { backgroundColor: event.color } : undefined}
                                            title={event.label || event.description}
                                        >
                                            {event.type === 'badge' && event.label && (
                                                <span className="designbase-calendar__event-label">
                                                    {event.label}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                    {dateEvents.length > 3 && (
                                        <div className="designbase-calendar__event-more">
                                            +{dateEvents.length - 3}
                                        </div>
                                    )}
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* 푸터 */}
            <div className="designbase-calendar__footer">
                <button
                    className="designbase-calendar__today-button"
                    onClick={goToToday}
                >
                    오늘
                </button>
            </div>
        </div>
    );
};

export default Calendar;
