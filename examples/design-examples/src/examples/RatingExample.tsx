import React, { useState } from 'react';
import { Rating } from '@designbasekorea/ui';

export default function RatingExample() {
  const [productRating, setProductRating] = useState(4);
  const [reviewRating, setReviewRating] = useState(0);

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Rating</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              제품 평점: {productRating}/5
            </label>
            <Rating value={productRating} onChange={setProductRating} clickable />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Small
            </label>
            <Rating value={4} size="s" readonly />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Medium
            </label>
            <Rating value={4} size="m" readonly />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Large
            </label>
            <Rating value={4} size="l" readonly />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">반올림 허용</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              4.5점 (반올림)
            </label>
            <Rating value={4.5} readonly allowHalf />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default (Clickable)</div>
            <div className="example-state-item__content">
              <Rating value={reviewRating} onChange={setReviewRating} clickable />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Readonly</div>
            <div className="example-state-item__content">
              <Rating value={4} readonly />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <Rating value={3} disabled />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Half Rating</div>
            <div className="example-state-item__content">
              <Rating value={4.5} readonly allowHalf />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

