/**
 * Calendar 컴포넌트 스토리
 * 
 * 목적: Calendar 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: 년/월/주 뷰, 이벤트 관리, 다양한 설정 예제
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar, type CalendarEvent } from './Calendar';

const meta: Meta<typeof Calendar> = {
    title: 'Components/Calendar',
    component: Calendar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        view: {
            control: { type: 'select' },
            options: ['year', 'month', 'week'],
        },
        showWeekends: {
            control: { type: 'boolean' },
        },
        highlightToday: {
            control: { type: 'boolean' },
        },
        locale: {
            control: { type: 'text' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 이벤트 데이터
const sampleEvents: CalendarEvent[] = [
    {
        id: '1',
        title: '팀 미팅',
        description: '주간 팀 미팅',
        date: new Date(2024, 11, 15),
        startTime: '10:00',
        endTime: '11:00',
        type: 'meeting',
        color: '#17a2b8',
        location: '회의실 A',
        attendees: ['김철수', '이영희', '박민수'],
    },
    {
        id: '2',
        title: '프로젝트 마감',
        description: 'Q4 프로젝트 마감일',
        date: new Date(2024, 11, 20),
        type: 'task',
        color: '#ffc107',
        isAllDay: true,
    },
    {
        id: '3',
        title: '생일 파티',
        description: '친구 생일 파티',
        date: new Date(2024, 11, 25),
        startTime: '19:00',
        endTime: '22:00',
        type: 'birthday',
        color: '#dc3545',
        location: '레스토랑',
    },
    {
        id: '4',
        title: '의료진료',
        description: '정기 건강검진',
        date: new Date(2024, 11, 28),
        startTime: '14:00',
        endTime: '15:00',
        type: 'reminder',
        color: '#28a745',
        location: '병원',
    },
    {
        id: '5',
        title: '크리스마스',
        description: '크리스마스 휴가',
        date: new Date(2024, 11, 25),
        type: 'holiday',
        color: '#17a2b8',
        isAllDay: true,
    },
    {
        id: '6',
        title: '새해',
        description: '새해 복 많이 받으세요!',
        date: new Date(2025, 0, 1),
        type: 'holiday',
        color: '#dc3545',
        isAllDay: true,
    },
];

// 기본 Calendar
export const Default: Story = {
    args: {
        currentDate: new Date(2024, 11, 15),
        events: sampleEvents,
        onEventAdd: (event: Omit<CalendarEvent, 'id'>) => console.log('이벤트 추가:', event),
        onEventEdit: (event: CalendarEvent) => console.log('이벤트 수정:', event),
        onEventDelete: (eventId: string) => console.log('이벤트 삭제:', eventId),
        onDateClick: (date: Date) => console.log('날짜 클릭:', date),
        onEventClick: (event: CalendarEvent) => console.log('이벤트 클릭:', event),
    },
};

// 월 뷰
export const MonthView: Story = {
    args: {
        view: 'month',
        currentDate: new Date(2024, 11, 15),
        events: sampleEvents,
        onEventAdd: (event: Omit<CalendarEvent, 'id'>) => console.log('이벤트 추가:', event),
        onEventEdit: (event: CalendarEvent) => console.log('이벤트 수정:', event),
        onEventDelete: (eventId: string) => console.log('이벤트 삭제:', eventId),
        onDateClick: (date: Date) => console.log('날짜 클릭:', date),
        onEventClick: (event: CalendarEvent) => console.log('이벤트 클릭:', event),
    },
};

// 주 뷰
export const WeekView: Story = {
    args: {
        view: 'week',
        currentDate: new Date(2024, 11, 15),
        events: sampleEvents,
        onEventAdd: (event: Omit<CalendarEvent, 'id'>) => console.log('이벤트 추가:', event),
        onEventEdit: (event: CalendarEvent) => console.log('이벤트 수정:', event),
        onEventDelete: (eventId: string) => console.log('이벤트 삭제:', eventId),
        onDateClick: (date: Date) => console.log('날짜 클릭:', date),
        onEventClick: (event: CalendarEvent) => console.log('이벤트 클릭:', event),
    },
};

// 년 뷰
export const YearView: Story = {
    args: {
        view: 'year',
        currentDate: new Date(2024, 11, 15),
        events: sampleEvents,
        onEventAdd: (event: Omit<CalendarEvent, 'id'>) => console.log('이벤트 추가:', event),
        onEventEdit: (event: CalendarEvent) => console.log('이벤트 수정:', event),
        onEventDelete: (eventId: string) => console.log('이벤트 삭제:', eventId),
        onDateClick: (date: Date) => console.log('날짜 클릭:', date),
        onEventClick: (event: CalendarEvent) => console.log('이벤트 클릭:', event),
    },
};

// 주말 숨김
export const HideWeekends: Story = {
    args: {
        view: 'month',
        currentDate: new Date(2024, 11, 15),
        events: sampleEvents,
        showWeekends: false,
        onEventAdd: (event: Omit<CalendarEvent, 'id'>) => console.log('이벤트 추가:', event),
        onEventEdit: (event: CalendarEvent) => console.log('이벤트 수정:', event),
        onEventDelete: (eventId: string) => console.log('이벤트 삭제:', eventId),
        onDateClick: (date: Date) => console.log('날짜 클릭:', date),
        onEventClick: (event: CalendarEvent) => console.log('이벤트 클릭:', event),
    },
};

// 오늘 하이라이트 없음
export const NoTodayHighlight: Story = {
    args: {
        view: 'month',
        currentDate: new Date(2024, 11, 15),
        events: sampleEvents,
        highlightToday: false,
        onEventAdd: (event: Omit<CalendarEvent, 'id'>) => console.log('이벤트 추가:', event),
        onEventEdit: (event: CalendarEvent) => console.log('이벤트 수정:', event),
        onEventDelete: (eventId: string) => console.log('이벤트 삭제:', eventId),
        onDateClick: (date: Date) => console.log('날짜 클릭:', date),
        onEventClick: (event: CalendarEvent) => console.log('이벤트 클릭:', event),
    },
};

// 빈 캘린더
export const EmptyCalendar: Story = {
    args: {
        view: 'month',
        currentDate: new Date(2024, 11, 15),
        events: [],
        onEventAdd: (event: Omit<CalendarEvent, 'id'>) => console.log('이벤트 추가:', event),
        onEventEdit: (event: CalendarEvent) => console.log('이벤트 수정:', event),
        onEventDelete: (eventId: string) => console.log('이벤트 삭제:', eventId),
        onDateClick: (date: Date) => console.log('날짜 클릭:', date),
        onEventClick: (event: CalendarEvent) => console.log('이벤트 클릭:', event),
    },
};

// 많은 이벤트가 있는 캘린더
export const ManyEvents: Story = {
    args: {
        view: 'month',
        currentDate: new Date(2024, 11, 15),
        events: [
            ...sampleEvents,
            {
                id: '7',
                title: '아침 운동',
                date: new Date(2024, 11, 16),
                startTime: '07:00',
                endTime: '08:00',
                type: 'reminder',
                color: '#28a745',
            },
            {
                id: '8',
                title: '점심 약속',
                date: new Date(2024, 11, 16),
                startTime: '12:00',
                endTime: '13:00',
                type: 'meeting',
                color: '#17a2b8',
            },
            {
                id: '9',
                title: '저녁 회식',
                date: new Date(2024, 11, 16),
                startTime: '18:00',
                endTime: '20:00',
                type: 'meeting',
                color: '#17a2b8',
            },
            {
                id: '10',
                title: '영화 보기',
                date: new Date(2024, 11, 17),
                startTime: '20:00',
                endTime: '22:00',
                type: 'custom',
                color: '#6c757d',
            },
            {
                id: '11',
                title: '쇼핑',
                date: new Date(2024, 11, 18),
                startTime: '14:00',
                endTime: '16:00',
                type: 'task',
                color: '#ffc107',
            },
            {
                id: '12',
                title: '독서',
                date: new Date(2024, 11, 19),
                startTime: '21:00',
                endTime: '22:00',
                type: 'reminder',
                color: '#28a745',
            },
        ],
        onEventAdd: (event: Omit<CalendarEvent, 'id'>) => console.log('이벤트 추가:', event),
        onEventEdit: (event: CalendarEvent) => console.log('이벤트 수정:', event),
        onEventDelete: (eventId: string) => console.log('이벤트 삭제:', eventId),
        onDateClick: (date: Date) => console.log('날짜 클릭:', date),
        onEventClick: (event: CalendarEvent) => console.log('이벤트 클릭:', event),
    },
};

// 인터랙티브 예제
export const Interactive: Story = {
    render: () => {
        const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents);
        const [currentView, setCurrentView] = useState<'year' | 'month' | 'week'>('month');

        const handleEventAdd = (event: Omit<CalendarEvent, 'id'>) => {
            const newEvent: CalendarEvent = {
                ...event,
                id: Date.now().toString(),
            };
            setEvents([...events, newEvent]);
            console.log('이벤트 추가됨:', newEvent);
        };

        const handleEventEdit = (event: CalendarEvent) => {
            setEvents(events.map(e => e.id === event.id ? event : e));
            console.log('이벤트 수정됨:', event);
        };

        const handleEventDelete = (eventId: string) => {
            setEvents(events.filter(e => e.id !== eventId));
            console.log('이벤트 삭제됨:', eventId);
        };

        const handleDateClick = (date: Date) => {
            console.log('날짜 클릭됨:', date);
        };

        const handleEventClick = (event: CalendarEvent) => {
            console.log('이벤트 클릭됨:', event);
        };

        const handleViewChange = (view: 'year' | 'month' | 'week') => {
            setCurrentView(view);
            console.log('뷰 변경됨:', view);
        };

        return (
            <div>
                <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                    <h3>인터랙티브 캘린더</h3>
                    <p>• 날짜를 클릭하면 새 일정을 추가할 수 있습니다</p>
                    <p>• 기존 일정을 클릭하면 편집/삭제할 수 있습니다</p>
                    <p>• 일정을 드래그해서 다른 날짜로 이동할 수 있습니다</p>
                    <p>• 년/월/주 뷰를 자유롭게 전환할 수 있습니다</p>
                    <p>• 현재 일정 수: {events.length}개</p>
                </div>
                <div style={{ height: '600px' }}>
                    <Calendar
                        view={currentView}
                        currentDate={new Date(2024, 11, 15)}
                        events={events}
                        onEventAdd={handleEventAdd}
                        onEventEdit={handleEventEdit}
                        onEventDelete={handleEventDelete}
                        onDateClick={handleDateClick}
                        onEventClick={handleEventClick}
                        onViewChange={handleViewChange}
                    />
                </div>
            </div>
        );
    },
};

// 다국어 지원 예제
export const Internationalization: Story = {
    render: () => {
        const [locale, setLocale] = useState('ko-KR');

        return (
            <div>
                <div style={{ marginBottom: '16px' }}>
                    <label>
                        언어 선택:
                        <select
                            value={locale}
                            onChange={(e) => setLocale(e.target.value)}
                            style={{ marginLeft: '8px' }}
                        >
                            <option value="ko-KR">한국어</option>
                            <option value="en-US">English</option>
                            <option value="ja-JP">日本語</option>
                            <option value="zh-CN">中文</option>
                        </select>
                    </label>
                </div>
                <div style={{ height: '500px' }}>
                    <Calendar
                        view="month"
                        currentDate={new Date(2024, 11, 15)}
                        events={sampleEvents}
                        locale={locale}
                        onEventAdd={(event) => console.log('이벤트 추가:', event)}
                        onEventEdit={(event) => console.log('이벤트 수정:', event)}
                        onEventDelete={(eventId) => console.log('이벤트 삭제:', eventId)}
                        onDateClick={(date) => console.log('날짜 클릭:', date)}
                        onEventClick={(event) => console.log('이벤트 클릭:', event)}
                    />
                </div>
            </div>
        );
    },
};

// 드래그 기능 예제
export const DragAndDrop: Story = {
    render: () => {
        const [events, setEvents] = useState<CalendarEvent[]>([
            {
                id: '1',
                title: '팀 미팅',
                date: new Date(2024, 11, 15),
                type: 'meeting',
                color: '#17a2b8',
            },
            {
                id: '2',
                title: '프로젝트 마감',
                date: new Date(2024, 11, 20),
                type: 'task',
                color: '#ffc107',
            },
            {
                id: '3',
                title: '생일 파티',
                date: new Date(2024, 11, 25),
                type: 'birthday',
                color: '#dc3545',
            },
        ]);

        const handleEventEdit = (event: CalendarEvent) => {
            setEvents(events.map(e => e.id === event.id ? event : e));
            console.log('이벤트 이동됨:', event);
        };

        return (
            <div>
                <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#e3f2fd', borderRadius: '8px', border: '1px solid #2196f3' }}>
                    <h3>드래그 앤 드롭 기능</h3>
                    <p>• 일정 바를 드래그해서 다른 날짜로 이동할 수 있습니다</p>
                    <p>• 드래그 중인 일정은 반투명하게 표시됩니다</p>
                    <p>• 드롭 가능한 날짜는 파란색 점선으로 표시됩니다</p>
                    <p>• 일정을 클릭하면 편집/삭제할 수 있습니다</p>
                </div>
                <div style={{ height: '600px' }}>
                    <Calendar
                        view="month"
                        currentDate={new Date(2024, 11, 15)}
                        events={events}
                        onEventEdit={handleEventEdit}
                        onEventAdd={(event) => {
                            const newEvent = { ...event, id: Date.now().toString() };
                            setEvents([...events, newEvent]);
                        }}
                        onEventDelete={(eventId) => {
                            setEvents(events.filter(e => e.id !== eventId));
                        }}
                    />
                </div>
            </div>
        );
    },
};

// 접근성 예제
export const Accessibility: Story = {
    args: {
        view: 'month',
        currentDate: new Date(2024, 11, 15),
        events: sampleEvents,
        onEventAdd: (event: Omit<CalendarEvent, 'id'>) => console.log('이벤트 추가:', event),
        onEventEdit: (event: CalendarEvent) => console.log('이벤트 수정:', event),
        onEventDelete: (eventId: string) => console.log('이벤트 삭제:', eventId),
        onDateClick: (date: Date) => console.log('날짜 클릭:', date),
        onEventClick: (event: CalendarEvent) => console.log('이벤트 클릭:', event),
    },
    parameters: {
        docs: {
            description: {
                story: '이 캘린더는 키보드 네비게이션과 스크린 리더를 지원합니다. Tab 키로 날짜 간 이동이 가능하고, Enter 키로 날짜를 선택할 수 있습니다.',
            },
        },
    },
};
