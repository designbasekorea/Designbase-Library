import React from 'react';
import { AdBanner } from '@designbasekorea/ui';

export default function AdBannerExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 AdBanner
        </h2>
        <AdBanner
          type="card"
          title="광고 배너"
          subtitle="특별 할인"
          ctaText="지금 확인하기"
        />
      </section>
    </div>
  );
}

