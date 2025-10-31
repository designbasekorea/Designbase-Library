/**
 * Calendar 컴포넌트
 * 
 * 날짜/기간을 직관적으로 확인하고 선택할 수 있는 캘린더 UI 제공
 * 단순 날짜 선택뿐만 아니라, 이벤트/스케줄 관리까지 확장 가능한 구조
 */

import React, { useState, useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, CalendarIcon } from '@designbasekorea/icons';
import Modal, { ModalFooter } from '../Modal/Modal';
import Button from '../Button/Button';
import './DatePicker.scss';

// 타입 정의
export type DatePickerMode = 'single' | 'range' | 'multiple';
export type DatePickerSize = 's' | 'm' | 'l';
export type DatePickerType = 'dropdown' | 'modal';
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
    type?: DatePickerType;
    value?: Date | Date[] | { start: Date; end: Date };
    defaultValue?: Date | Date[] | { start: Date; end: Date };
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
    // 인라인 모드 (드롭다운이 아닌 직접 표시)
    inline?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
    mode = 'single',
    type = 'dropdown',
    value,
    defaultValue,
    onChange,
    minDate,
    maxDate,
    events = [],
    showOutsideDays = true,
    startOfWeek = 'sunday',
    size = 'm',
    variant = 'default',
    highlightWeekends = true,
    highlightHolidays = false,
    today = new Date(),
    locale = 'ko-KR',
    format = 'yyyy-MM-dd',
    className,
    disabled = false,
    readonly = false,
    // 인라인 모드
    inline = false,
}) => {
    // 아이콘 크기 계산 (m이 기본값)
    const iconSize = size === 's' ? 14 : size === 'l' ? 18 : 16;
    const [currentDate, setCurrentDate] = useState(new Date());
    const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [rangeStart, setRangeStart] = useState<Date | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState<Date | Date[] | { start: Date; end: Date } | undefined>(value || defaultValue);
    const pickerRef = useRef<HTMLDivElement>(null);

    // 모달용 임시 상태 (적용 전까지는 변경되지 않음)
    const [tempValue, setTempValue] = useState<Date | Date[] | { start: Date; end: Date } | undefined>(value || defaultValue);

    // value prop이 변경되면 업데이트
    useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value);
            // formatDateValue 함수가 정의되기 전이므로 직접 포맷팅
            if (value instanceof Date) {
                setInputValue(value.toLocaleDateString(locale));
            } else if (Array.isArray(value)) {
                setInputValue(value.map(date => date.toLocaleDateString(locale)).join(', '));
            } else if (value && 'start' in value && 'end' in value) {
                setInputValue(`${value.start.toLocaleDateString(locale)} ~ ${value.end.toLocaleDateString(locale)}`);
            } else {
                setInputValue('');
            }
        }
    }, [value, locale]);

    // 모달이 열릴 때 현재 값을 임시 상태로 복사
    useEffect(() => {
        if (isOpen && type === 'modal') {
            setTempValue(selectedValue);
        }
    }, [isOpen, type, selectedValue]);

    // 외부 클릭 감지 (드롭다운만)
    useEffect(() => {
        if (!isOpen || inline || type !== 'dropdown') return;

        const handleClickOutside = (event: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, inline, type]);

    // 날짜 포맷팅 함수
    const formatDateValue = useCallback((dateValue: Date | Date[] | { start: Date; end: Date } | undefined) => {
        if (!dateValue) return '';

        if (dateValue instanceof Date) {
            return dateValue.toLocaleDateString(locale);
        }

        if (Array.isArray(dateValue)) {
            return dateValue.map(date => date.toLocaleDateString(locale)).join(', ');
        }

        if ('start' in dateValue && 'end' in dateValue) {
            return `${dateValue.start.toLocaleDateString(locale)} ~ ${dateValue.end.toLocaleDateString(locale)}`;
        }

        return '';
    }, [locale]);

    // 날짜 유효성 검사
    const isDateValid = useCallback((date: Date) => {
        if (minDate && date < minDate) return false;
        if (maxDate && date > maxDate) return false;
        return true;
    }, [minDate, maxDate]);

    // 토글 핸들러
    const togglePicker = () => {
        if (disabled || readonly) return;
        setIsOpen((o) => !o);
    };

    // 모달용 핸들러들
    const handleModalDateChange = (newValue: Date | Date[] | { start: Date; end: Date }) => {
        setTempValue(newValue);
    };

    const handleModalApply = () => {
        // 임시 값을 실제 값으로 적용
        setSelectedValue(tempValue);
        setInputValue(formatDateValue(tempValue));
        onChange?.(tempValue as any);

        // 모달 닫기
        setIsOpen(false);
    };

    const handleModalCancel = () => {
        // 임시 값을 원래 값으로 복원
        setTempValue(selectedValue);

        // 모달 닫기
        setIsOpen(false);
    };

    // 입력 필드 변경
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    // 입력 필드 블러 시 검증
    const handleInputBlur = () => {
        // 간단한 날짜 파싱 (YYYY-MM-DD 형식)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (dateRegex.test(inputValue)) {
            const parsedDate = new Date(inputValue);
            if (!isNaN(parsedDate.getTime()) && isDateValid(parsedDate)) {
                setSelectedValue(parsedDate);
                onChange?.(parsedDate);
                return;
            }
        }

        // 유효하지 않으면 이전 값으로 복원
        setInputValue(formatDateValue(selectedValue));
    };

    // 날짜 선택 처리
    const handleDateClick = useCallback((date: Date) => {
        if (disabled || readonly || !isDateValid(date)) return;

        const currentValue = type === 'modal' ? tempValue : selectedValue;
        const handleChange = type === 'modal' ? handleModalDateChange : (newValue: any) => {
            setSelectedValue(newValue);
            setInputValue(formatDateValue(newValue));
            onChange?.(newValue);
        };

        switch (mode) {
            case 'single':
                handleChange(date);
                if (!inline && type === 'dropdown') setIsOpen(false);
                break;
            case 'range':
                // 기존 범위가 있고, 새로운 날짜를 클릭한 경우
                if (currentValue && 'start' in currentValue && !rangeStart) {
                    // 기존 범위를 해제하고 새로운 범위 시작
                    handleChange(undefined as any);
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
                        handleChange({ start: end, end: start });
                    } else {
                        handleChange({ start, end });
                    }

                    setRangeStart(null);
                    if (!inline && type === 'dropdown') setIsOpen(false);
                }
                break;
            case 'multiple':
                const currentDates = Array.isArray(currentValue) ? currentValue : [];
                const dateStr = date.toISOString().split('T')[0];
                const isSelected = currentDates.some(d => d.toISOString().split('T')[0] === dateStr);

                if (isSelected) {
                    handleChange(currentDates.filter(d => d.toISOString().split('T')[0] !== dateStr));
                } else {
                    handleChange([...currentDates, date]);
                }
                break;
        }
    }, [mode, onChange, disabled, readonly, isDateValid, rangeStart, inline, type, tempValue, selectedValue, formatDateValue, handleModalDateChange]);

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

        const currentValue = type === 'modal' ? tempValue : selectedValue;

        // 현재 선택된 범위 확인
        let start: Date | null = null;
        let end: Date | null = null;

        if (rangeStart) {
            // 첫 번째 날짜만 선택된 상태
            start = rangeStart;
            end = hoveredDate;
        } else if (currentValue && 'start' in currentValue) {
            // 완성된 범위
            start = (currentValue as { start: Date; end: Date }).start;
            end = (currentValue as { start: Date; end: Date }).end;
        }

        if (!start) return false;

        const dateStr = date.toISOString().split('T')[0];
        const startStr = start.toISOString().split('T')[0];
        const endStr = end ? end.toISOString().split('T')[0] : startStr;

        return dateStr >= startStr && dateStr <= endStr;
    }, [mode, rangeStart, hoveredDate, type, tempValue, selectedValue]);

    // 날짜가 선택되었는지 확인
    const isDateSelected = useCallback((date: Date) => {
        const dateStr = date.toISOString().split('T')[0];
        const currentValue = type === 'modal' ? tempValue : selectedValue;

        switch (mode) {
            case 'single':
                return currentValue && currentValue instanceof Date && currentValue.toISOString().split('T')[0] === dateStr;
            case 'range':
                if (rangeStart && rangeStart.toISOString().split('T')[0] === dateStr) {
                    return true;
                }
                if (!currentValue || !('start' in currentValue)) return false;
                const range = currentValue as { start: Date; end: Date };
                return range.start.toISOString().split('T')[0] === dateStr ||
                    range.end.toISOString().split('T')[0] === dateStr;
            case 'multiple':
                return Array.isArray(currentValue) && currentValue.some(d => d.toISOString().split('T')[0] === dateStr);
            default:
                return false;
        }
    }, [mode, rangeStart, type, tempValue, selectedValue]);

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
    const renderDateCell = useCallback((date: Date, isModal = false) => {
        const isCurrentMonth = date.getMonth() === currentDate.getMonth();
        const isToday = date.toDateString() === today.toDateString();
        const isSelected = isDateSelected(date);
        const isInRangeDate = isInRange(date);
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const dateEvents = getEventsForDate(date);
        const currentValue = isModal ? tempValue : selectedValue;

        const cellClass = clsx(
            'designbase-date-picker__date',
            {
                'designbase-date-picker__date--outside': !isCurrentMonth && !showOutsideDays,
                'designbase-date-picker__date--today': isToday,
                'designbase-date-picker__date--selected': isSelected,
                'designbase-date-picker__date--in-range': isInRangeDate && !isSelected,
                'designbase-date-picker__date--range-start': mode === 'range' && (
                    (rangeStart && rangeStart.toDateString() === date.toDateString()) ||
                    (currentValue && 'start' in currentValue && (currentValue as { start: Date }).start.toDateString() === date.toDateString())
                ),
                'designbase-date-picker__date--range-end': mode === 'range' && currentValue && 'end' in currentValue &&
                    (currentValue as { end: Date }).end.toDateString() === date.toDateString(),
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
        rangeStart,
        highlightWeekends,
        getEventsForDate,
        showOutsideDays,
        isDateValid,
        disabled,
        readonly,
        handleDateClick,
        handleDateHover,
        tempValue,
        selectedValue,
    ]);

    const calendarGrid = generateCalendarGrid();
    const weekdays = generateWeekdays();

    // 캘린더 렌더링 함수
    const renderCalendar = (isModal = false) => {
        const currentValue = isModal ? tempValue : selectedValue;

        return (
            <div className="designbase-date-picker__selector">
                {/* 헤더 */}
                <div className="designbase-date-picker__header">
                    <button
                        className="designbase-date-picker__nav-button"
                        onClick={goToPreviousMonth}
                        disabled={disabled || readonly}
                        type="button"
                        aria-label="이전 달"
                    >
                        <ChevronLeftIcon size={iconSize} color="currentColor" />
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
                        <ChevronRightIcon size={iconSize} color="currentColor" />
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
                    {calendarGrid.map(date => renderDateCell(date, isModal))}
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

                {/* 모달인 경우에만 버튼들 표시 */}
                {isModal && (
                    <ModalFooter>
                        <div className="designbase-date-picker__modal-footer">
                            <Button
                                variant="secondary"
                                size="m"
                                onPress={handleModalCancel}
                            >
                                취소
                            </Button>
                            <Button
                                variant="primary"
                                size="m"
                                onPress={handleModalApply}
                            >
                                적용
                            </Button>
                        </div>
                    </ModalFooter>
                )}
            </div>
        );
    };

    // 인라인 모드일 때
    if (inline) {
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
                {renderCalendar(false)}
            </div>
        );
    }

    // 드롭다운/모달 모드일 때
    const classes = clsx(
        'designbase-date-picker',
        `designbase-date-picker--${size}`,
        {
            'designbase-date-picker--disabled': disabled,
            'designbase-date-picker--readonly': readonly,
            'designbase-date-picker--open': isOpen,
        },
        className
    );

    return (
        <div ref={pickerRef} className={classes}>
            <div className="designbase-date-picker__trigger">
                <button
                    type="button"
                    className="designbase-date-picker__icon-display"
                    onClick={togglePicker}
                    disabled={disabled}
                    aria-label="날짜 선택 열기"
                >
                    <CalendarIcon size={16} />
                </button>

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onClick={(e) => e.stopPropagation()}
                    disabled={disabled}
                    readOnly={readonly}
                    className="designbase-date-picker__input"
                    placeholder="날짜를 선택하세요"
                    aria-label="날짜 입력"
                />

                <button
                    type="button"
                    className="designbase-date-picker__toggle"
                    onClick={togglePicker}
                    disabled={disabled}
                    aria-label="날짜 선택 열기"
                >
                    <ChevronDownIcon size={16} />
                </button>
            </div>

            {type === 'dropdown' && isOpen && (
                <div className="designbase-date-picker__dropdown" role="dialog" aria-modal="false">
                    {renderCalendar(false)}
                </div>
            )}

            {type === 'modal' && (
                <Modal
                    isOpen={isOpen}
                    onClose={handleModalCancel}
                    title="날짜 선택"
                    size="s"
                >
                    {renderCalendar(true)}
                </Modal>
            )}
        </div>
    );
};

export default DatePicker;
