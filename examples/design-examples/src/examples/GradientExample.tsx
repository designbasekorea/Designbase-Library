import React from 'react';
import { Gradient } from '@designbasekorea/ui';

export default function GradientExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Gradient
        </h2>
        <Gradient
          colors={[
            { color: '#3b82f6', position: 0 },
            { color: '#8b5cf6', position: 100 },
          ]}
          direction="to-right"
          style={{ height: '200px', borderRadius: '8px' }}
        />
      </section>
    </div>
  );
}

