import React, { useState } from 'react';
import { BottomSheet, Button } from '@designbasekorea/ui';

export default function BottomSheetExample() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 BottomSheet
        </h2>
        <Button variant="primary" onClick={() => setOpen(true)}>
          BottomSheet 열기
        </Button>
        <BottomSheet open={open} onClose={() => setOpen(false)} title="BottomSheet 제목">
          <div style={{ padding: '20px' }}>
            <p>BottomSheet 내용입니다.</p>
          </div>
        </BottomSheet>
      </section>
    </div>
  );
}

