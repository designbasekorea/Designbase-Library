import React from 'react';
import { Avatar } from '@designbasekorea/ui';
import sample1 from '../image/sample-1.jpg';
import sample2 from '../image/sample-2.jpg';

export default function AvatarExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Avatar
        </h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Avatar size="s">A</Avatar>
          <Avatar size="m">B</Avatar>
          <Avatar size="l">C</Avatar>
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          이미지 Avatar
        </h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Avatar
            size="m"
            src={sample1}
            alt="John"
          />
          <Avatar
            size="m"
            src={sample2}
            alt="Jane"
          />
        </div>
      </section>
    </div>
  );
}

