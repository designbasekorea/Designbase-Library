import React from 'react';
import { VideoPlayer } from '@designbasekorea/ui';

export default function VideoPlayerExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 VideoPlayer
        </h2>
        <VideoPlayer
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          title="샘플 비디오"
        />
      </section>
    </div>
  );
}

