import React, { useState } from 'react';
import { Backdrop, Button } from '@designbasekorea/ui';

export default function BackdropExample() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Backdrop
        </h2>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Backdrop 열기
        </Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <div
            style={{
              padding: '40px',
              backgroundColor: 'var(--db-surface-elevated)',
              borderRadius: '8px',
              maxWidth: '400px',
            }}
          >
            <p>Backdrop 내용입니다.</p>
            <Button variant="primary" onClick={() => setOpen(false)}>
              닫기
            </Button>
          </div>
        </Backdrop>
      </section>
    </div>
  );
}

