import React from 'react';
import { EmptyState, Button } from '@designbasekorea/ui';
import { SearchIcon } from '@designbasekorea/icons';

export default function EmptyStateExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 EmptyState
        </h2>
        <EmptyState
          variant="no-data"
          title="데이터가 없습니다"
          description="표시할 데이터가 없습니다."
          icon={SearchIcon}
        />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          CTA 버튼과 함께
        </h2>
        <EmptyState
          variant="no-results"
          title="검색 결과가 없습니다"
          description="다른 검색어로 시도해보세요."
          action={<Button variant="primary">새로 검색</Button>}
        />
      </section>
    </div>
  );
}

