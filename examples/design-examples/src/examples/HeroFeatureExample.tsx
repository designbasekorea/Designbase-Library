import React from 'react';
import { HeroFeature, Button } from '@designbasekorea/ui';

export default function HeroFeatureExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 HeroFeature
        </h2>
        <HeroFeature
          title="히어로 섹션"
          subtitle="부제목"
          description="설명입니다."
          buttons={[
            { text: '시작하기', variant: 'primary' },
            { text: '더 알아보기', variant: 'secondary' },
          ]}
        />
      </section>
    </div>
  );
}

