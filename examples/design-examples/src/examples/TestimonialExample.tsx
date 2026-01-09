import React from 'react';
import { Testimonial } from '@designbasekorea/ui';

export default function TestimonialExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Testimonial
        </h2>
        <Testimonial
          quote="훌륭한 제품입니다!"
          author="홍길동"
          role="CEO"
          company="회사명"
          rating={5}
        />
      </section>
    </div>
  );
}

