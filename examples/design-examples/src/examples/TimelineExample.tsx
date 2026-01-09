import React from 'react';
import { Timeline } from '@designbasekorea/ui';
import { CircleCheckFilledIcon } from '@designbasekorea/icons';

export default function TimelineExample() {
  const items = [
    {
      id: '1',
      title: '첫 번째 단계',
      description: '첫 번째 단계의 설명입니다.',
      status: 'completed',
      icon: <CircleCheckFilledIcon size={16} />,
    },
    {
      id: '2',
      title: '두 번째 단계',
      description: '두 번째 단계의 설명입니다.',
      status: 'active',
    },
    {
      id: '3',
      title: '세 번째 단계',
      description: '세 번째 단계의 설명입니다.',
      status: 'pending',
    },
  ];

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Timeline
        </h2>
        <Timeline items={items} />
      </section>
    </div>
  );
}

