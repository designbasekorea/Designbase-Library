import React, { useState } from 'react';
import { Lightbox, Button } from '@designbasekorea/ui';
import sample1 from '../image/sample-1.jpg';
import sample2 from '../image/sample-2.jpg';

export default function LightboxExample() {
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    {
      id: '1',
      src: sample1,
      alt: '이미지 1',
      title: '이미지 1',
    },
    {
      id: '2',
      src: sample2,
      alt: '이미지 2',
      title: '이미지 2',
    },
  ];

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Lightbox
        </h2>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Lightbox 열기
        </Button>
        <Lightbox
          images={images}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          currentIndex={0}
        />
      </section>
    </div>
  );
}

