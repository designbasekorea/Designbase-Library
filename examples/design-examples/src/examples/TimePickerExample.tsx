import React, { useState } from 'react';
import { TimePicker } from '@designbasekorea/ui';

export default function TimePickerExample() {
  const [time, setTime] = useState('12:00');

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 TimePicker
        </h2>
        <TimePicker value={time} onChange={setTime} />
      </section>
    </div>
  );
}

