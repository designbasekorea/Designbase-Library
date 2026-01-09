import React from 'react';
import { Badge } from '@designbasekorea/ui';

export default function BadgeExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Badge (Text 스타일)
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge style="text">기본</Badge>
          <Badge variant="primary" style="text">Primary</Badge>
          <Badge variant="success" style="text">Success</Badge>
          <Badge variant="warning" style="text">Warning</Badge>
          <Badge variant="danger" style="text">Danger</Badge>
          <Badge variant="info" style="text">Info</Badge>
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          숫자만 표시 (Number 스타일)
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge variant="primary" style="number" count={5} />
          <Badge variant="success" style="number" count={12} />
          <Badge variant="warning" style="number" count={99} />
          <Badge variant="danger" style="number" count={150} maxCount={99} />
          <Badge variant="info" style="number" count={3} />
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          Dot 스타일
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge variant="primary" style="dot" />
          <Badge variant="success" style="dot" />
          <Badge variant="warning" style="dot" />
          <Badge variant="danger" style="dot" />
          <Badge variant="info" style="dot" />
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          Outlined 스타일
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge variant="primary" style="outlined">Primary</Badge>
          <Badge variant="success" style="outlined">Success</Badge>
          <Badge variant="warning" style="outlined">Warning</Badge>
          <Badge variant="danger" style="outlined">Danger</Badge>
          <Badge variant="info" style="outlined">Info</Badge>
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          크기 조절
        </h2>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge size="s" style="text">Small</Badge>
          <Badge size="m" style="text">Medium</Badge>
          <Badge size="l" style="text">Large</Badge>
          <Badge size="s" style="number" count={5} />
          <Badge size="m" style="number" count={12} />
          <Badge size="l" style="number" count={99} />
        </div>
      </section>
    </div>
  );
}

