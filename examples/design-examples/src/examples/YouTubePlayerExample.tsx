import React from 'react';
import { YouTubePlayer } from '@designbasekorea/ui';

export default function YouTubePlayerExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 YouTubePlayer
        </h2>
        <YouTubePlayer videoId="dQw4w9WgXcQ" title="샘플 비디오" />
      </section>
    </div>
  );
}

