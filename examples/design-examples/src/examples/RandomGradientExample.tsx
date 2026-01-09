import React from 'react';
import { RandomGradient } from '@designbasekorea/ui';

export default function RandomGradientExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 RandomGradient
        </h2>
        <RandomGradient
          scheme="primary"
          tone="vivid"
          style={{ height: '200px', borderRadius: '8px' }}
        >
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h3 style={{ color: 'white' }}>랜덤 그라데이션</h3>
          </div>
        </RandomGradient>
      </section>
    </div>
  );
}

