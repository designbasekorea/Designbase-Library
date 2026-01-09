import React from 'react';
import { Logo } from '@designbasekorea/ui';

export default function LogoExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Logo
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Logo type="designbase" size="m" />
          <Logo type="designbase-mark" size="m" />
          <Logo type="custom" text="커스텀 로고" size="m" />
        </div>
      </section>
    </div>
  );
}

