import React from 'react';
import { Section } from '@designbasekorea/ui';

export default function SectionExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Section
        </h2>
        <Section title="섹션 제목" description="섹션 설명입니다.">
          <p>섹션 내용입니다.</p>
        </Section>
      </section>
    </div>
  );
}

