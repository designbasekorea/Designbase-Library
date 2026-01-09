import React from 'react';
import { Popover, Button } from '@designbasekorea/ui';

export default function PopoverExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Popover
        </h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Popover
            content={<div style={{ padding: '12px' }}>Popover 내용입니다.</div>}
            title="Popover 제목"
          >
            <Button>위쪽 Popover</Button>
          </Popover>
          <Popover
            content={<div style={{ padding: '12px' }}>Popover 내용입니다.</div>}
            placement="bottom"
          >
            <Button>아래쪽 Popover</Button>
          </Popover>
        </div>
      </section>
    </div>
  );
}

