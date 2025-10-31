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
        color: '#3b82f6',
    },
    {
        id: '2',
        title: '프로젝트 마감',
        description: 'Q4 프로젝트 마감일',
        date: new Date(2024, 11, 20),
        type: 'task',
        color: '#f59e0b',
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
        color: '#ef4444',
    },
];

export const Default: Story = {
    args: {
        currentDate: new Date(2024, 11, 15),
        events: sampleEvents,
        view: 'month',
    },
};

// 뷰 타입 (year, month, week)
export const AllViews: Story = {
    render: () => {
        const [currentView, setCurrentView] = useState<'year' | 'month' | 'week'>('month');

        return (
            <div>
                <div style={{ marginBottom: '16px', display: 'flex', gap: '12px' }}>
                    <button onClick={() => setCurrentView('year')}>년 뷰</button>
                    <button onClick={() => setCurrentView('month')}>월 뷰</button>
                    <button onClick={() => setCurrentView('week')}>주 뷰</button>
                    <span style={{ marginLeft: '12px' }}>현재: {currentView}</span>
                </div>
                <Calendar
                    view={currentView}
                    currentDate={new Date(2024, 11, 15)}
                    events={sampleEvents}
                    onViewChange={setCurrentView}
                />
            </div>
        );
    },
};

// 인터랙티브 예제 (일정 추가/수정/삭제)
export const Interactive: Story = {
    render: () => {
        const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents);

        return (
            <div>
                <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <h3 style={{ margin: '0 0 8px 0' }}>인터랙티브 캘린더</h3>
                    <p style={{ margin: '4px 0' }}>• 날짜를 클릭하면 새 일정을 추가할 수 있습니다</p>
                    <p style={{ margin: '4px 0' }}>• 기존 일정을 클릭하면 편집/삭제할 수 있습니다</p>
                    <p style={{ margin: '4px 0' }}>• 일정을 드래그해서 다른 날짜로 이동할 수 있습니다</p>
                    <p style={{ margin: '4px 0' }}>현재 일정 수: {events.length}개</p>
                </div>
                <Calendar
                    view="month"
                    currentDate={new Date(2024, 11, 15)}
                    events={events}
                    onEventAdd={(event) => {
                        const newEvent = { ...event, id: Date.now().toString() };
                        setEvents([...events, newEvent]);
                        console.log('이벤트 추가:', newEvent);
                    }}
                    onEventEdit={(event) => {
                        setEvents(events.map(e => e.id === event.id ? event : e));
                        console.log('이벤트 수정:', event);
                    }}
                    onEventDelete={(eventId) => {
                        setEvents(events.filter(e => e.id !== eventId));
                        console.log('이벤트 삭제:', eventId);
                    }}
                />
            </div>
        );
    },
};
