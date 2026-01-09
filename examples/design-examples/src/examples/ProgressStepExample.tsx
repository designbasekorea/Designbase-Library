import React from 'react';
import { ProgressStep } from '@designbasekorea/ui';

export default function ProgressStepExample() {
  const items = [
    {
      id: '1',
      title: '단계 1',
      description: '첫 번째 단계',
      status: 'completed',
    },
    {
      id: '2',
      title: '단계 2',
      description: '두 번째 단계',
      status: 'active',
    },
    {
      id: '3',
      title: '단계 3',
      description: '세 번째 단계',
      status: 'pending',
    },
  ];

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 ProgressStep
        </h2>
        <ProgressStep items={items} currentStep={1} />
      </section>
    </div>
  );
}

