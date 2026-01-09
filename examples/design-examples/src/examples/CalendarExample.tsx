import React, { useState } from 'react';
import { Calendar } from '@designbasekorea/ui';

export default function CalendarExample() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'year' | 'month' | 'week'>('month');

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Calendar
        </h2>
        <Calendar
          currentDate={currentDate}
          view={view}
          onDateChange={setCurrentDate}
          onViewChange={setView}
        />
      </section>
    </div>
  );
}

