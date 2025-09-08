/**
 * Calendar 컴포넌트
 * 
 * 목적: 큰 캘린더로 일정을 추가하고 관리할 수 있는 컴포넌트
 * 기능: 년/월/주 단위 뷰, 일정 추가/편집/삭제, 이벤트 관리
 * 접근성: 스크린 리더 지원, 키보드 네비게이션, 포커스 관리
 */

import React, { useState, useCallback, useMemo } from 'react';
import clsx from 'clsx';
import { SegmentControl } from '../SegmentControl/SegmentControl';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import './Calendar.scss';

export type CalendarView = 'year' | 'month' | 'week';
export type CalendarEventType = 'meeting' | 'task' | 'reminder' | 'birthday' | 'holiday' | 'custom';

export interface CalendarEvent {
    id: string;
    title: string;
    description?: string;
    date: Date;
    startTime?: string;
    endTime?: string;
    type: CalendarEventType;
    color?: string;
    isAllDay?: boolean;
    location?: string;
    attendees?: string[];
    isRecurring?: boolean;
    recurringPattern?: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export interface CalendarProps {
    /** 현재 날짜 */
    currentDate?: Date;
    /** 캘린더 뷰 */
    view?: CalendarView;
    /** 이벤트 목록 */
    events?: CalendarEvent[];
    /** 이벤트 추가 시 호출되는 함수 */
    onEventAdd?: (event: Omit<CalendarEvent, 'id'>) => void;
    /** 이벤트 수정 시 호출되는 함수 */
    onEventEdit?: (event: CalendarEvent) => void;
    /** 이벤트 삭제 시 호출되는 함수 */
    onEventDelete?: (eventId: string) => void;
    /** 날짜 클릭 시 호출되는 함수 */
    onDateClick?: (date: Date) => void;
    /** 이벤트 클릭 시 호출되는 함수 */
    onEventClick?: (event: CalendarEvent) => void;
    /** 뷰 변경 시 호출되는 함수 */
    onViewChange?: (view: CalendarView) => void;
    /** 월 변경 시 호출되는 함수 */
    onMonthChange?: (date: Date) => void;
    /** 년 변경 시 호출되는 함수 */
    onYearChange?: (date: Date) => void;
    /** 주말 표시 여부 */
    showWeekends?: boolean;
    /** 오늘 날짜 하이라이트 여부 */
    highlightToday?: boolean;
    /** 다국어 지원 */
    locale?: string;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 스타일 객체 */
    style?: React.CSSProperties;
    /** 추가 props */
    [key: string]: any;
}

const Calendar: React.FC<CalendarProps> = ({
    currentDate = new Date(),
    view = 'month',
    events = [],
    onEventAdd,
    onEventEdit,
    onEventDelete,
    onDateClick,
    onEventClick,
    onViewChange,
    onMonthChange,
    onYearChange,
    showWeekends = true,
    highlightToday = true,
    locale = 'ko-KR',
    className,
    style,
    ...props
}) => {
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [currentView, setCurrentView] = useState<CalendarView>(view);
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

    // 일정 관리 상태
    const [eventForm, setEventForm] = useState({
        title: '',
        description: '',
        startTime: '',
        endTime: '',
        type: 'meeting' as CalendarEventType,
        color: '#17a2b8',
        isAllDay: false,
        location: '',
        attendees: [] as string[],
    });
    const [isEditing, setIsEditing] = useState(false);

    // 드래그 관련 상태
    const [draggedEvent, setDraggedEvent] = useState<CalendarEvent | null>(null);
    const [dragOverDate, setDragOverDate] = useState<Date | null>(null);

    // 현재 년도와 월
    const currentYear = selectedDate.getFullYear();
    const currentMonth = selectedDate.getMonth();

    // 뷰 변경 핸들러
    const handleViewChange = useCallback((newView: CalendarView) => {
        setCurrentView(newView);
        onViewChange?.(newView);
    }, [onViewChange]);

    // 월 변경 핸들러
    const handleMonthChange = useCallback((direction: 'prev' | 'next') => {
        const newDate = new Date(selectedDate);
        if (direction === 'prev') {
            newDate.setMonth(newDate.getMonth() - 1);
        } else {
            newDate.setMonth(newDate.getMonth() + 1);
        }
        setSelectedDate(newDate);
        onMonthChange?.(newDate);
    }, [selectedDate, onMonthChange]);

    // 년도 변경 핸들러
    const handleYearChange = useCallback((direction: 'prev' | 'next') => {
        const newDate = new Date(selectedDate);
        if (direction === 'prev') {
            newDate.setFullYear(newDate.getFullYear() - 1);
        } else {
            newDate.setFullYear(newDate.getFullYear() + 1);
        }
        setSelectedDate(newDate);
        onYearChange?.(newDate);
    }, [selectedDate, onYearChange]);

    // 새 일정 추가 핸들러
    const handleAddEvent = useCallback((date: Date) => {
        console.log('일정 추가 시작:', date);
        setSelectedDate(date);
        setIsEditing(false);
        setEventForm(prev => ({
            title: '',
            description: '',
            startTime: prev.startTime || '09:00', // 이미 설정된 시간이 있으면 유지, 없으면 기본값
            endTime: prev.endTime || '10:00',     // 이미 설정된 시간이 있으면 유지, 없으면 기본값
            type: 'meeting',
            color: '#17a2b8',
            isAllDay: false,
            location: '',
            attendees: [],
        }));
        setShowEventModal(true);
    }, []);

    // 날짜 클릭 핸들러
    const handleDateClick = useCallback((date: Date) => {
        setSelectedDate(date);
        onDateClick?.(date);
        handleAddEvent(date);
    }, [onDateClick, handleAddEvent]);

    // 이벤트 클릭 핸들러
    const handleEventClick = useCallback((event: CalendarEvent) => {
        setSelectedEvent(event);
        onEventClick?.(event);
        // 편집 모드로 설정
        setIsEditing(true);
        setEventForm({
            title: event.title,
            description: event.description || '',
            startTime: event.startTime || '',
            endTime: event.endTime || '',
            type: event.type,
            color: event.color || '#17a2b8',
            isAllDay: event.isAllDay || false,
            location: event.location || '',
            attendees: event.attendees || [],
        });
        setShowEventModal(true);
    }, [onEventClick]);

    // 일정 저장 핸들러
    const handleSaveEvent = useCallback(() => {
        if (!eventForm.title.trim()) {
            alert('제목을 입력해주세요.');
            return;
        }

        console.log('일정 저장 시도:', {
            eventForm,
            selectedDate: selectedDate.toISOString(),
            selectedDateObj: selectedDate,
            isEditing,
            selectedEvent
        });

        const newEvent: Omit<CalendarEvent, 'id'> = {
            title: eventForm.title,
            description: eventForm.description,
            date: selectedDate,
            startTime: eventForm.startTime,
            endTime: eventForm.endTime,
            type: eventForm.type,
            color: eventForm.color,
            isAllDay: eventForm.isAllDay,
            location: eventForm.location,
            attendees: eventForm.attendees,
        };

        console.log('생성된 이벤트:', newEvent);

        if (isEditing && selectedEvent) {
            console.log('이벤트 수정 호출:', {
                ...selectedEvent,
                ...newEvent,
            });
            onEventEdit?.({
                ...selectedEvent,
                ...newEvent,
            });
        } else {
            console.log('이벤트 추가 호출:', newEvent);
            onEventAdd?.(newEvent);
        }

        setShowEventModal(false);
        setSelectedEvent(null);
        setIsEditing(false);
    }, [eventForm, selectedDate, isEditing, selectedEvent, onEventAdd, onEventEdit]);

    // 일정 삭제 핸들러
    const handleDeleteEvent = useCallback(() => {
        if (selectedEvent) {
            if (confirm('정말로 이 일정을 삭제하시겠습니까?')) {
                onEventDelete?.(selectedEvent.id);
                setShowEventModal(false);
                setSelectedEvent(null);
                setIsEditing(false);
            }
        }
    }, [selectedEvent, onEventDelete]);

    // 모달 닫기 핸들러
    const handleCloseModal = useCallback(() => {
        setShowEventModal(false);
        setSelectedEvent(null);
        setIsEditing(false);
        setEventForm({
            title: '',
            description: '',
            startTime: '',
            endTime: '',
            type: 'meeting',
            color: '#17a2b8',
            isAllDay: false,
            location: '',
            attendees: [],
        });
    }, []);

    // 드래그 시작 핸들러
    const handleDragStart = useCallback((event: CalendarEvent, e: React.DragEvent) => {
        console.log('드래그 시작:', event.title);
        setDraggedEvent(event);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', event.id);
        e.dataTransfer.setData('application/json', JSON.stringify(event));

        // 드래그 이미지 설정 (선택사항)
        const dragImage = e.currentTarget.cloneNode(true) as HTMLElement;
        dragImage.style.opacity = '0.5';
        e.dataTransfer.setDragImage(dragImage, 0, 0);
    }, []);

    // 드래그 오버 핸들러
    const handleDragOver = useCallback((date: Date, e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';
        setDragOverDate(date);
    }, []);

    // 드래그 리브 핸들러
    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        // 드래그가 실제로 떠났는지 확인
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setDragOverDate(null);
        }
    }, []);

    // 드롭 핸들러
    const handleDrop = useCallback((date: Date, e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('드롭:', date, draggedEvent);

        if (draggedEvent) {
            const updatedEvent: CalendarEvent = {
                ...draggedEvent,
                date: date,
            };
            onEventEdit?.(updatedEvent);
            setDraggedEvent(null);
            setDragOverDate(null);
        }
    }, [draggedEvent, onEventEdit]);

    // 날짜 비교 헬퍼 함수
    const isSameDate = useCallback((date1: Date, date2: Date) => {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    }, []);

    // 드래그 엔드 핸들러
    const handleDragEnd = useCallback((e: React.DragEvent) => {
        console.log('드래그 종료');
        setDraggedEvent(null);
        setDragOverDate(null);
    }, []);

    // 월 뷰 렌더링
    const renderMonthView = useMemo(() => {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        const days = [];
        const today = new Date();

        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);

            const isCurrentMonth = date.getMonth() === currentMonth;
            const isToday = date.toDateString() === today.toDateString();
            const isSelected = date.toDateString() === selectedDate.toDateString();

            // 해당 날짜의 이벤트들
            const dayEvents = events.filter(event => {
                const eventDate = new Date(event.date);
                return isSameDate(eventDate, date);
            });

            days.push(
                <div
                    key={i}
                    className={clsx(
                        'designbase-calendar__day',
                        {
                            'designbase-calendar__day--current-month': isCurrentMonth,
                            'designbase-calendar__day--today': isToday && highlightToday,
                            'designbase-calendar__day--selected': isSelected,
                            'designbase-calendar__day--weekend': !showWeekends && (date.getDay() === 0 || date.getDay() === 6),
                        }
                    )}
                    onClick={() => handleDateClick(date)}
                >
                    <span className="designbase-calendar__day-number">
                        {date.getDate()}
                    </span>
                    {dayEvents.length > 0 && (
                        <div className="designbase-calendar__day-events">
                            {dayEvents.slice(0, 2).map((event) => (
                                <div
                                    key={event.id}
                                    className={clsx(
                                        'designbase-calendar__event-bar',
                                        `designbase-calendar__event-bar--${event.type}`,
                                        {
                                            'designbase-calendar__event-bar--dragging': draggedEvent?.id === event.id,
                                        }
                                    )}
                                    style={{
                                        backgroundColor: event.color,
                                        opacity: draggedEvent?.id === event.id ? 0.5 : 1
                                    }}
                                    draggable
                                    onDragStart={(e) => handleDragStart(event, e)}
                                    onDragEnd={handleDragEnd}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEventClick(event);
                                    }}
                                    title={event.title}
                                >
                                    <span className="designbase-calendar__event-title">
                                        {event.title}
                                    </span>
                                </div>
                            ))}
                            {dayEvents.length > 2 && (
                                <div className="designbase-calendar__more-events">
                                    <span>+{dayEvents.length - 2} more</span>
                                </div>
                            )}
                        </div>
                    )}
                    <div
                        className={clsx('designbase-calendar__drop-zone', {
                            'designbase-calendar__drop-zone--active': dragOverDate && isSameDate(dragOverDate, date)
                        })}
                        onDragOver={(e) => handleDragOver(date, e)}
                        onDragLeave={(e) => handleDragLeave(e)}
                        onDrop={(e) => handleDrop(date, e)}
                    />
                </div>
            );
        }

        return days;
    }, [currentYear, currentMonth, events, selectedDate, highlightToday, showWeekends, handleDateClick, handleEventClick, isSameDate]);

    // 주 뷰 데이터 계산
    const weekViewData = useMemo(() => {
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());

        const timeSlots = [];
        // 시간 슬롯 생성 (6:00 ~ 22:00)
        for (let hour = 6; hour <= 22; hour++) {
            timeSlots.push(
                <div key={hour} className="designbase-calendar__time-slot">
                    <span className="designbase-calendar__time-label">
                        {hour.toString().padStart(2, '0')}:00
                    </span>
                </div>
            );
        }

        // 요일 헤더
        const weekDays = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);

            const isToday = date.toDateString() === today.toDateString();

            weekDays.push(
                <div
                    key={i}
                    className={clsx(
                        'designbase-calendar__week-day-header',
                        {
                            'designbase-calendar__week-day-header--today': isToday,
                        }
                    )}
                >
                    <span className="designbase-calendar__week-day-name">
                        {date.toLocaleDateString(locale, { weekday: 'short' })}
                    </span>
                    <span className="designbase-calendar__week-day-number">
                        {date.getDate()}
                    </span>
                </div>
            );
        }

        return { weekDays, timeSlots, startOfWeek };
    }, [locale, events, isSameDate]);

    // 년 뷰 렌더링
    const renderYearView = useMemo(() => {
        const months = [];

        for (let month = 0; month < 12; month++) {
            const monthDate = new Date(currentYear, month, 1);
            const monthEvents = events.filter(event =>
                event.date.getFullYear() === currentYear &&
                event.date.getMonth() === month
            );

            months.push(
                <div
                    key={month}
                    className="designbase-calendar__year-month"
                    onClick={() => {
                        setSelectedDate(monthDate);
                        setCurrentView('month');
                    }}
                >
                    <h3 className="designbase-calendar__year-month-title">
                        {monthDate.toLocaleDateString(locale, { month: 'long' })}
                    </h3>
                    <div className="designbase-calendar__year-month-events">
                        {monthEvents.slice(0, 5).map(event => (
                            <div
                                key={event.id}
                                className={clsx(
                                    'designbase-calendar__year-event',
                                    `designbase-calendar__year-event--${event.type}`
                                )}
                                style={{ backgroundColor: event.color }}
                                title={event.title}
                            />
                        ))}
                        {monthEvents.length > 5 && (
                            <span className="designbase-calendar__year-more-events">
                                +{monthEvents.length - 5} more
                            </span>
                        )}
                    </div>
                </div>
            );
        }

        return months;
    }, [currentYear, events, locale]);

    const classes = clsx('designbase-calendar', className);

    return (
        <div className={classes} style={style} {...props}>
            {/* 헤더 */}
            <div className="designbase-calendar__header">
                <div className="designbase-calendar__navigation">
                    <button
                        className="designbase-calendar__nav-button"
                        onClick={() => {
                            if (currentView === 'year') {
                                handleYearChange('prev');
                            } else {
                                handleMonthChange('prev');
                            }
                        }}
                        aria-label="이전"
                    >
                        ←
                    </button>

                    <h2 className="designbase-calendar__title">
                        {currentView === 'year' && currentYear}
                        {currentView === 'month' && `${currentYear}년 ${currentMonth + 1}월`}
                        {currentView === 'week' && '이번 주'}
                    </h2>

                    <button
                        className="designbase-calendar__nav-button"
                        onClick={() => {
                            if (currentView === 'year') {
                                handleYearChange('next');
                            } else {
                                handleMonthChange('next');
                            }
                        }}
                        aria-label="다음"
                    >
                        →
                    </button>
                </div>

                {/* 뷰 선택 */}
                <SegmentControl
                    options={[
                        { value: 'year', label: '년' },
                        { value: 'month', label: '월' },
                        { value: 'week', label: '주' },
                    ]}
                    value={currentView}
                    onChange={(value) => handleViewChange(value as CalendarView)}
                    size="sm"
                />
            </div>

            {/* 캘린더 본문 */}
            <div className="designbase-calendar__body">
                {currentView === 'year' && (
                    <div className="designbase-calendar__year-view">
                        {renderYearView}
                    </div>
                )}

                {currentView === 'month' && (
                    <div className="designbase-calendar__month-view">
                        {/* 요일 헤더 */}
                        <div className="designbase-calendar__weekdays">
                            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                                <div key={day} className="designbase-calendar__weekday">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* 날짜 그리드 */}
                        <div className="designbase-calendar__days">
                            {renderMonthView}
                        </div>
                    </div>
                )}

                {currentView === 'week' && (
                    <div className="designbase-calendar__week-view">
                        {/* 요일 헤더 */}
                        <div className="designbase-calendar__week-header">
                            <div className="designbase-calendar__time-column-header" />
                            {weekViewData.weekDays}
                        </div>

                        {/* 시간 그리드 */}
                        <div className="designbase-calendar__week-grid">
                            <div className="designbase-calendar__time-column">
                                {weekViewData.timeSlots}
                            </div>
                            <div className="designbase-calendar__week-columns">
                                {Array.from({ length: 7 }, (_, i) => {
                                    const date = new Date(weekViewData.startOfWeek);
                                    date.setDate(weekViewData.startOfWeek.getDate() + i);

                                    return (
                                        <div key={i} className="designbase-calendar__week-column">
                                            {weekViewData.timeSlots.map((_, index: number) => {
                                                const hour = index + 6;
                                                const cellDate = new Date(date);
                                                cellDate.setHours(hour, 0, 0, 0);

                                                // 해당 시간대의 일정들 찾기
                                                const hourEvents = events.filter(event => {
                                                    const eventDate = new Date(event.date);
                                                    if (!isSameDate(eventDate, date)) return false;

                                                    if (event.isAllDay) return true;

                                                    if (!event.startTime || !event.endTime) return false;

                                                    const eventStartHour = parseInt(event.startTime.split(':')[0]);
                                                    const eventStartMinute = parseInt(event.startTime.split(':')[1] || '0');
                                                    const eventEndHour = parseInt(event.endTime.split(':')[0]);
                                                    const eventEndMinute = parseInt(event.endTime.split(':')[1] || '0');

                                                    const eventStartTime = eventStartHour * 60 + eventStartMinute;
                                                    const eventEndTime = eventEndHour * 60 + eventEndMinute;
                                                    const cellStartTime = hour * 60;
                                                    const cellEndTime = (hour + 1) * 60;

                                                    // 일정이 이 시간대와 겹치는지 확인
                                                    return eventStartTime < cellEndTime && eventEndTime > cellStartTime;
                                                });

                                                return (
                                                    <div
                                                        key={index}
                                                        className="designbase-calendar__week-cell"
                                                        onClick={() => {
                                                            setSelectedDate(cellDate);
                                                            // 주 뷰에서 시간 셀 클릭 시 해당 시간을 시작 시간으로 설정
                                                            const startTime = `${hour.toString().padStart(2, '0')}:00`;
                                                            const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`;

                                                            setEventForm(prev => ({
                                                                ...prev,
                                                                startTime,
                                                                endTime,
                                                                isAllDay: false
                                                            }));
                                                            handleAddEvent(cellDate);
                                                        }}
                                                        title={`${date.toLocaleDateString()} ${hour.toString().padStart(2, '0')}:00`}
                                                    >
                                                        {hourEvents.map((event, eventIndex) => {
                                                            // 일정의 정확한 위치와 높이 계산
                                                            const eventStartHour = parseInt(event.startTime?.split(':')[0] || '0');
                                                            const eventStartMinute = parseInt(event.startTime?.split(':')[1] || '0');
                                                            const eventEndHour = parseInt(event.endTime?.split(':')[0] || '0');
                                                            const eventEndMinute = parseInt(event.endTime?.split(':')[1] || '0');

                                                            const eventStartTime = eventStartHour * 60 + eventStartMinute;
                                                            const eventEndTime = eventEndHour * 60 + eventEndMinute;
                                                            const cellStartTime = hour * 60;

                                                            // 일정이 이 셀에서 시작하는 경우의 위치 계산
                                                            const topOffset = eventStartTime >= cellStartTime ?
                                                                ((eventStartTime - cellStartTime) / 60) * 60 : 0;

                                                            // 일정의 높이 계산 (최소 18px, 최대 60px)
                                                            const duration = eventEndTime - Math.max(eventStartTime, cellStartTime);
                                                            const height = Math.min(Math.max((duration / 60) * 60, 18), 60);

                                                            return (
                                                                <div
                                                                    key={event.id}
                                                                    className={clsx(
                                                                        'designbase-calendar__week-event',
                                                                        `designbase-calendar__week-event--${event.type}`
                                                                    )}
                                                                    style={{
                                                                        backgroundColor: event.color,
                                                                        top: `${topOffset}px`,
                                                                        height: `${height}px`,
                                                                        fontSize: '10px',
                                                                        padding: '2px 4px',
                                                                        borderRadius: '2px',
                                                                        color: 'white',
                                                                        overflow: 'hidden',
                                                                        whiteSpace: 'nowrap',
                                                                        textOverflow: 'ellipsis',
                                                                        cursor: 'pointer',
                                                                        position: 'absolute',
                                                                        left: '2px',
                                                                        right: '2px',
                                                                        zIndex: 2
                                                                    }}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleEventClick(event);
                                                                    }}
                                                                    title={event.title}
                                                                >
                                                                    {event.title}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* 일정 관리 모달 */}
            <Modal
                isOpen={showEventModal}
                onClose={handleCloseModal}
                title={isEditing ? '일정 편집' : '새 일정 추가'}
                size="lg"
            >
                <ModalBody>
                    <div className="designbase-calendar__event-form">
                        <div className="designbase-calendar__form-row">
                            <label>제목 *</label>
                            <Input
                                value={eventForm.title}
                                onChange={(value: string) => setEventForm(prev => ({ ...prev, title: value }))}
                                placeholder="일정 제목을 입력하세요"
                            />
                        </div>

                        <div className="designbase-calendar__form-row">
                            <label>설명</label>
                            <Input
                                value={eventForm.description}
                                onChange={(value: string) => setEventForm(prev => ({ ...prev, description: value }))}
                                placeholder="일정 설명을 입력하세요"
                            />
                        </div>

                        <div className="designbase-calendar__form-row">
                            <label>날짜</label>
                            <Input
                                type="date"
                                value={selectedDate.toISOString().split('T')[0]}
                                onChange={(value: string) => {
                                    const newDate = new Date(value);
                                    setSelectedDate(newDate);
                                }}
                            />
                        </div>

                        <div className="designbase-calendar__form-row">
                            <label>일정 타입</label>
                            <Select
                                value={eventForm.type}
                                onChange={(value: string | string[]) => {
                                    const selectedValue = Array.isArray(value) ? value[0] : value;
                                    setEventForm(prev => ({ ...prev, type: selectedValue as CalendarEventType }));
                                }}
                                options={[
                                    { value: 'meeting', label: '회의' },
                                    { value: 'task', label: '업무' },
                                    { value: 'reminder', label: '알림' },
                                    { value: 'birthday', label: '생일' },
                                    { value: 'holiday', label: '휴일' },
                                    { value: 'custom', label: '기타' },
                                ]}
                            />
                        </div>

                        <div className="designbase-calendar__form-row">
                            <label>색상</label>
                            <div className="designbase-calendar__color-picker">
                                {['#17a2b8', '#28a745', '#ffc107', '#dc3545', '#6c757d', '#6f42c1'].map(color => (
                                    <button
                                        key={color}
                                        className={clsx('designbase-calendar__color-option', {
                                            'designbase-calendar__color-option--selected': eventForm.color === color
                                        })}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setEventForm(prev => ({ ...prev, color }))}
                                        type="button"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="designbase-calendar__form-row">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={eventForm.isAllDay}
                                    onChange={(e) => setEventForm(prev => ({ ...prev, isAllDay: e.target.checked }))}
                                />
                                하루 종일
                            </label>
                        </div>

                        {!eventForm.isAllDay && (
                            <div className="designbase-calendar__form-row designbase-calendar__time-row">
                                <div>
                                    <label>시작 시간</label>
                                    <Input
                                        type="time"
                                        value={eventForm.startTime}
                                        onChange={(value: string) => setEventForm(prev => ({ ...prev, startTime: value }))}
                                    />
                                </div>
                                <div>
                                    <label>종료 시간</label>
                                    <Input
                                        type="time"
                                        value={eventForm.endTime}
                                        onChange={(value: string) => setEventForm(prev => ({ ...prev, endTime: value }))}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="designbase-calendar__form-row">
                            <label>장소</label>
                            <Input
                                value={eventForm.location}
                                onChange={(value: string) => setEventForm(prev => ({ ...prev, location: value }))}
                                placeholder="장소를 입력하세요"
                            />
                        </div>

                        <div className="designbase-calendar__form-row">
                            <label>참석자</label>
                            <Input
                                value={eventForm.attendees.join(', ')}
                                onChange={(value: string) => setEventForm(prev => ({
                                    ...prev,
                                    attendees: value.split(',').map((s: string) => s.trim()).filter((s: string) => s)
                                }))}
                                placeholder="참석자들을 쉼표로 구분하여 입력하세요"
                            />
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <div className="designbase-calendar__modal-actions">
                        {isEditing && (
                            <Button
                                variant="danger"
                                onClick={handleDeleteEvent}
                            >
                                삭제
                            </Button>
                        )}
                        <div className="designbase-calendar__modal-buttons">
                            <Button
                                variant="secondary"
                                onClick={handleCloseModal}
                            >
                                취소
                            </Button>
                            <Button
                                variant="primary"
                                onClick={handleSaveEvent}
                            >
                                {isEditing ? '수정' : '추가'}
                            </Button>
                        </div>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    );
};

// Named export 추가
export { Calendar };
export default Calendar;
