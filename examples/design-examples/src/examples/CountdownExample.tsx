import React from 'react';
import { Countdown } from '@designbasekorea/ui';

export default function CountdownExample() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7); // 7일 후

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Countdown
        </h2>
        <Countdown endDate={endDate} showLabels />
      </section>
    </div>
  );
}

