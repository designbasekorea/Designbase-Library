import React from 'react';
import { Divider } from '@designbasekorea/ui';

export default function DividerExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Divider
        </h2>
        <div>
          <p>위쪽 컨텐츠</p>
          <Divider />
          <p>아래쪽 컨텐츠</p>
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          텍스트와 함께
        </h2>
        <Divider>또는</Divider>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          수직 Divider
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span>왼쪽</span>
          <Divider orientation="vertical" style={{ height: '20px' }} />
          <span>오른쪽</span>
        </div>
      </section>
    </div>
  );
}

