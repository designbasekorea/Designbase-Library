import React, { useState } from 'react';
import { DatePicker } from '@designbasekorea/ui';

export default function DatePickerExample() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 DatePicker
        </h2>
        <DatePicker
          value={date}
          onChange={(value) => setDate(value as Date)}
          placeholder="날짜를 선택하세요"
        />
      </section>
    </div>
  );
}

