import React from 'react';
import { AudioPlayer } from '@designbasekorea/ui';

export default function AudioPlayerExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 AudioPlayer
        </h2>
        <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          title="샘플 오디오"
        />
      </section>
    </div>
  );
}

