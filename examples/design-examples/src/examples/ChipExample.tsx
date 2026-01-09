import React, { useState } from 'react';
import { Chip } from '@designbasekorea/ui';
import { UserIcon, CircleCheckFilledIcon } from '@designbasekorea/icons';

export default function ChipExample() {
  const [chips, setChips] = useState(['삭제 가능한 칩 1', '삭제 가능한 칩 2']);

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Chip
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Chip label="기본" />
          <Chip label="Primary" variant="primary" />
          <Chip label="Success" variant="success" />
          <Chip label="Warning" variant="warning" />
          <Chip label="Danger" variant="danger" />
          <Chip label="Info" variant="info" />
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          삭제 가능한 Chip
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {chips.map((chip, index) => (
            <Chip
              key={index}
              label={chip}
              deletable
              onDelete={() => {
                setChips(chips.filter((_, i) => i !== index));
              }}
            />
          ))}
          <Chip
            label="Primary 삭제 가능"
            variant="primary"
            deletable
            onDelete={() => console.log('삭제됨')}
          />
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          아이콘이 있는 Chip
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Chip label="사용자" startIcon={<UserIcon size={16} />} />
          <Chip label="완료" variant="success" startIcon={<CircleCheckFilledIcon size={16} />} />
          <Chip
            label="삭제 가능한 아이콘"
            variant="primary"
            startIcon={<UserIcon size={16} />}
            deletable
            onDelete={() => console.log('삭제됨')}
          />
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          크기 조절
        </h2>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Chip label="Small" size="s" />
          <Chip label="Medium" size="m" />
          <Chip label="Large" size="l" />
        </div>
      </section>
    </div>
  );
}

