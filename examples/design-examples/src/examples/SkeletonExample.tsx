import React from 'react';
import { Skeleton } from '@designbasekorea/ui';

export default function SkeletonExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Skeleton
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="80%" height={20} />
          <Skeleton variant="text" width="60%" height={20} />
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          다양한 Variant
        </h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Skeleton variant="circular" width={60} height={60} />
          <Skeleton variant="rectangular" width={200} height={100} />
          <Skeleton variant="rounded" width={200} height={100} />
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          텍스트 라인
        </h2>
        <Skeleton variant="text" lines={3} />
      </section>
    </div>
  );
}

