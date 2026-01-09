import React from 'react';
import { Card, Button } from '@designbasekorea/ui';

export default function CardExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Card
        </h2>
        <Card
          title="카드 제목"
        >
          <p>카드 본문 내용입니다. 여기에 다양한 컨텐츠를 넣을 수 있습니다.</p>
        </Card>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          Footer가 있는 Card
        </h2>
        <Card
          title="제품 정보"
          description="이 제품에 대한 설명이 여기에 표시됩니다."
          actions={[
            { label: '취소', variant: 'ghost', onClick: () => console.log('취소') },
            { label: '구매하기', variant: 'primary', onClick: () => console.log('구매') },
          ]}
        />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          그리드 레이아웃
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          <Card title="카드 1">
            <p style={{ margin: 0, color: 'var(--db-text-secondary)' }}>
              첫 번째 카드입니다.
            </p>
          </Card>
          <Card title="카드 2">
            <p style={{ margin: 0, color: 'var(--db-text-secondary)' }}>
              두 번째 카드입니다.
            </p>
          </Card>
          <Card title="카드 3">
            <p style={{ margin: 0, color: 'var(--db-text-secondary)' }}>
              세 번째 카드입니다.
            </p>
          </Card>
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          Hoverable Card
        </h2>
        <Card
          title="호버 가능한 카드"
          description="마우스를 올리면 효과가 나타납니다."
          hoverable
          clickable
          onClick={() => console.log('카드 클릭')}
        >
          <p>이 카드는 호버와 클릭이 가능합니다.</p>
        </Card>
      </section>
    </div>
  );
}

