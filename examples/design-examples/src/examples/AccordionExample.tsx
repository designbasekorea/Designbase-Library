import React from 'react';
import { Accordion } from '@designbasekorea/ui';

export default function AccordionExample() {
  const items = [
    {
      id: 'item1',
      title: '섹션 1',
      content: <p>첫 번째 섹션의 내용입니다.</p>,
    },
    {
      id: 'item2',
      title: '섹션 2',
      content: <p>두 번째 섹션의 내용입니다.</p>,
    },
    {
      id: 'item3',
      title: '섹션 3',
      content: <p>세 번째 섹션의 내용입니다.</p>,
    },
  ];

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Accordion
        </h2>
        <Accordion items={items} />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          다중 확장 가능 Accordion
        </h2>
        <Accordion 
          items={items} 
          allowMultiple 
          defaultExpandedItems={['item1']}
        />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          Bordered 스타일
        </h2>
        <Accordion items={items} style="bordered" />
      </section>
    </div>
  );
}

