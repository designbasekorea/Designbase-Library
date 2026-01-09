import React from 'react';
import { Banner, Button } from '@designbasekorea/ui';

export default function BannerExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Banner
        </h2>
        <Banner
          title="배너 제목"
          description="배너 설명입니다."
          actions={[
            { text: '액션 1', variant: 'primary' },
            { text: '액션 2', variant: 'secondary' },
          ]}
        />
      </section>
    </div>
  );
}

