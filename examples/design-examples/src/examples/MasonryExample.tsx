import React from 'react';
import { Masonry } from '@designbasekorea/ui';
import sample1 from '../image/sample-1.jpg';
import sample2 from '../image/sample-2.jpg';
import sample3 from '../image/sample-3.jpg';
import sample4 from '../image/sample-4.jpg';
import sample5 from '../image/sample-5.jpg';
import sample6 from '../image/sample-6.jpg';

export default function MasonryExample() {
  // Vite에서 이미지를 import하면 URL 문자열이 반환됩니다
  const getImageUrl = (img: any): string => {
    if (typeof img === 'string') return img;
    if (img?.default) return img.default;
    return String(img);
  };

  const images = [
    {
      id: '1',
      src: getImageUrl(sample1),
      alt: '이미지 1',
    },
    {
      id: '2',
      src: getImageUrl(sample2),
      alt: '이미지 2',
    },
    {
      id: '3',
      src: getImageUrl(sample3),
      alt: '이미지 3',
    },
    {
      id: '4',
      src: getImageUrl(sample4),
      alt: '이미지 4',
    },
    {
      id: '5',
      src: getImageUrl(sample5),
      alt: '이미지 5',
    },
    {
      id: '6',
      src: getImageUrl(sample6),
      alt: '이미지 6',
    },
  ];

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Masonry
        </h2>
        <Masonry images={images} columns={3} />
      </section>
    </div>
  );
}

