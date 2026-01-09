import React, { useState } from 'react';
import { Pagination } from '@designbasekorea/ui';

export default function PaginationExample() {
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(5);

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Pagination</h3>
        <div className="example-list">
          <Pagination
            currentPage={page}
            totalPages={10}
            onPageChange={setPage}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Small
            </label>
            <Pagination
              currentPage={1}
              totalPages={10}
              size="s"
              onPageChange={(p) => console.log('Page:', p)}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Medium
            </label>
            <Pagination
              currentPage={1}
              totalPages={10}
              size="m"
              onPageChange={(p) => console.log('Page:', p)}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Large
            </label>
            <Pagination
              currentPage={1}
              totalPages={10}
              size="l"
              onPageChange={(p) => console.log('Page:', p)}
            />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">옵션</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              첫/마지막 페이지 버튼 표시
            </label>
            <Pagination
              currentPage={page2}
              totalPages={20}
              showFirstLast
              onPageChange={setPage2}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              전체 아이템 수 표시
            </label>
            <Pagination
              currentPage={1}
              totalPages={10}
              totalItems={100}
              showTotal
              onPageChange={(p) => console.log('Page:', p)}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

