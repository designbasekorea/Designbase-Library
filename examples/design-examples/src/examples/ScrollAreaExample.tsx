import React from 'react';
import { ScrollArea } from '@designbasekorea/ui';

export default function ScrollAreaExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 ScrollArea
        </h2>
        <ScrollArea maxHeight="200px">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} style={{ padding: '12px', borderBottom: '1px solid var(--db-border-base)' }}>
              항목 {i + 1}
            </div>
          ))}
        </ScrollArea>
      </section>
    </div>
  );
}

