import React from 'react';
import { Carousel } from '@designbasekorea/ui';
import sample1 from '../image/sample-1.jpg';
import sample2 from '../image/sample-2.jpg';
import sample3 from '../image/sample-3.jpg';

export default function CarouselExample() {
  const items = [
    {
      id: '1',
      title: '슬라이드 1',
      description: '첫 번째 슬라이드입니다.',
      image: sample1,
    },
    {
      id: '2',
      title: '슬라이드 2',
      description: '두 번째 슬라이드입니다.',
      image: sample2,
    },
    {
      id: '3',
      title: '슬라이드 3',
      description: '세 번째 슬라이드입니다.',
      image: sample3,
    },
  ];

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Carousel
        </h2>
        <Carousel items={items} />
      </section>
    </div>
  );
}

