import React, { useState } from 'react';
import { Confirm, Button } from '@designbasekorea/ui';

export default function ConfirmExample() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Confirm
        </h2>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Confirm 열기
        </Button>
        <Confirm
          open={open}
          onClose={() => setOpen(false)}
          title="확인"
          onConfirm={() => {
            console.log('확인됨');
            setOpen(false);
          }}
        >
          정말로 진행하시겠습니까?
        </Confirm>
      </section>
    </div>
  );
}

