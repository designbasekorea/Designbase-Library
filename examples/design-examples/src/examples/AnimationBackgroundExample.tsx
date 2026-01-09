import React from 'react';
import { AnimationBackground } from '@designbasekorea/ui';

export default function AnimationBackgroundExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 AnimationBackground
        </h2>
        <AnimationBackground
          type="gradient"
          style={{ height: '200px', borderRadius: '8px' }}
        >
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h3 style={{ color: 'white' }}>애니메이션 배경</h3>
          </div>
        </AnimationBackground>
      </section>
    </div>
  );
}

