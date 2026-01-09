import React from 'react';
import { Spinner } from '@designbasekorea/ui';

export default function SpinnerExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Spinner
        </h2>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Spinner type="circular" size="s" />
          <Spinner type="circular" size="m" />
          <Spinner type="circular" size="l" />
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          다양한 타입
        </h2>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Spinner type="circular" size="m" />
          <Spinner type="dots" size="m" />
          <Spinner type="pulse" size="m" />
        </div>
      </section>
    </div>
  );
}

