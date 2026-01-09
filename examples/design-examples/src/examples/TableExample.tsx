import React, { useState } from 'react';
import { Table } from '@designbasekorea/ui';

export default function TableExample() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const data = [
    { id: 1, name: '홍길동', email: 'hong@example.com', role: '관리자', status: '활성', department: '개발팀' },
    { id: 2, name: '김철수', email: 'kim@example.com', role: '사용자', status: '활성', department: '디자인팀' },
    { id: 3, name: '이영희', email: 'lee@example.com', role: '사용자', status: '비활성', department: '마케팅팀' },
    { id: 4, name: '박민수', email: 'park@example.com', role: '관리자', status: '활성', department: '개발팀' },
    { id: 5, name: '최지영', email: 'choi@example.com', role: '사용자', status: '활성', department: '디자인팀' },
  ];

  const columns = [
    { key: 'name', header: '이름', sortable: true, width: '150px' },
    { key: 'email', header: '이메일', sortable: true, width: '200px' },
    { key: 'role', header: '역할', sortable: true, width: '120px' },
    { key: 'status', header: '상태', sortable: true, width: '100px' },
    { key: 'department', header: '부서', sortable: true, width: '150px' },
  ];

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Table
        </h2>
        <Table
          data={data}
          columns={columns}
          rowKey="id"
        />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          헤더가 있는 Table
        </h2>
        <Table
          data={data}
          columns={columns}
          rowKey="id"
          title="사용자 관리"
          showCountBadge
        />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          정렬 가능한 Table
        </h2>
        <Table
          data={data}
          columns={columns}
          rowKey="id"
          sortable
        />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          페이지네이션이 있는 Table
        </h2>
        <Table
          data={data}
          columns={columns}
          rowKey="id"
          pagination
          page={page}
          pageSize={pageSize}
          totalItems={data.length}
          onPageChange={setPage}
          onPageSizeChange={(size) => { setPage(1); setPageSize(size); }}
          pageSizeOptions={[5, 10, 20]}
        />
      </section>
    </div>
  );
}

