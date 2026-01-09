import React, { useState } from 'react';
import { SegmentControl } from '@designbasekorea/ui';

export default function SegmentControlExample() {
  const [viewMode, setViewMode] = useState('list');
  const [sortBy, setSortBy] = useState('recent');

  const viewOptions = [
    { value: 'list', label: '목록' },
    { value: 'grid', label: '그리드' },
    { value: 'card', label: '카드' },
  ];

  const sortOptions = [
    { value: 'recent', label: '최신순' },
    { value: 'popular', label: '인기순' },
    { value: 'name', label: '이름순' },
  ];

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 SegmentControl</h3>
        <div className="example-list">
          <SegmentControl options={viewOptions} value={viewMode} onChange={setViewMode} />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Small
            </label>
            <SegmentControl options={viewOptions} value={viewMode} onChange={setViewMode} size="s" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Medium
            </label>
            <SegmentControl options={viewOptions} value={viewMode} onChange={setViewMode} size="m" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Large
            </label>
            <SegmentControl options={viewOptions} value={viewMode} onChange={setViewMode} size="l" />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">전체 너비</h3>
        <div className="example-list">
          <SegmentControl options={sortOptions} value={sortBy} onChange={setSortBy} fullWidth />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <SegmentControl options={viewOptions} value={viewMode} onChange={setViewMode} />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <SegmentControl options={viewOptions} value="list" disabled />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

