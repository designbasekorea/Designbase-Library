import React from 'react';
import { Stat } from '@designbasekorea/ui';
import { UserIcon } from '@designbasekorea/icons';

export default function StatExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Stat
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <Stat
            value="1,234"
            label="총 사용자"
            icon={<UserIcon size={24} />}
          />
          <Stat
            value="567"
            label="활성 사용자"
            icon={<UserIcon size={24} />}
            change={{ value: 12, type: 'increase' }}
          />
          <Stat
            value="89"
            label="신규 사용자"
            icon={<UserIcon size={24} />}
            change={{ value: 5, type: 'decrease' }}
          />
        </div>
      </section>
    </div>
  );
}

