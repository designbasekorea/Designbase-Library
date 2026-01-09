import React from 'react';
import { List } from '@designbasekorea/ui';

export default function ListExample() {
  const items = [
    {
      id: '1',
      title: '첫 번째 항목',
      description: '첫 번째 항목의 설명입니다.',
    },
    {
      id: '2',
      title: '두 번째 항목',
      description: '두 번째 항목의 설명입니다.',
    },
    {
      id: '3',
      title: '세 번째 항목',
      description: '세 번째 항목의 설명입니다.',
    },
  ];

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 List
        </h2>
        <List items={items} />
      </section>
    </div>
  );
}

