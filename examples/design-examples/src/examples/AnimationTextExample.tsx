import React from 'react';
import { AnimationText } from '@designbasekorea/ui';

export default function AnimationTextExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 AnimationText
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <AnimationText type="fade">Fade 애니메이션</AnimationText>
          <AnimationText type="slide">Slide 애니메이션</AnimationText>
          <AnimationText type="bounce">Bounce 애니메이션</AnimationText>
        </div>
      </section>
    </div>
  );
}

