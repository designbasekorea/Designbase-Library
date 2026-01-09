import React from 'react';
import { Share, Button } from '@designbasekorea/ui';

export default function ShareExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Share
        </h2>
        <Share
          url="https://example.com"
          title="공유할 제목"
          variant="button"
        >
          <Button variant="primary">공유하기</Button>
        </Share>
      </section>
    </div>
  );
}

