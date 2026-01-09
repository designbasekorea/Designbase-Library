import React, { useState } from 'react';
import { Progressbar } from '@designbasekorea/ui';
import { Button } from '@designbasekorea/ui';

export default function ProgressExample() {
  const [progress, setProgress] = useState(30);

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Progressbar
        </h2>
        <Progressbar value={progress} showLabel />
        <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
          <Button variant="secondary" size="s" onClick={() => setProgress(Math.max(0, progress - 10))}>
            -10%
          </Button>
          <Button variant="secondary" size="s" onClick={() => setProgress(Math.min(100, progress + 10))}>
            +10%
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          크기 조절
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Progressbar value={50} size="s" showLabel />
          <Progressbar value={50} size="m" showLabel />
          <Progressbar value={50} size="l" showLabel />
        </div>
      </section>
    </div>
  );
}

