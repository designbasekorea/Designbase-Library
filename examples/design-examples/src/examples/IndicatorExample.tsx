import React from 'react';
import { Indicator } from '@designbasekorea/ui';

export default function IndicatorExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Indicator
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Indicator current={2} total={5} type="dots" />
          <Indicator current={2} total={5} type="numbers" />
          <Indicator current={2} total={5} type="line" />
        </div>
      </section>
    </div>
  );
}

