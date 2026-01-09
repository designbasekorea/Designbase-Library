import React from 'react';
import { Breadcrumbs } from '@designbasekorea/ui';
import { HomeOutlineIcon } from '@designbasekorea/icons';

export default function BreadcrumbExample() {
  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Breadcrumb</h3>
        <div className="example-list">
          <Breadcrumbs
            items={[
              { id: 'home', label: '홈', href: '#' },
              { id: 'category', label: '카테고리', href: '#' },
              { id: 'detail', label: '상세 페이지', href: '#' },
            ]}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">아이콘과 함께</h3>
        <div className="example-list">
          <Breadcrumbs
            items={[
              { id: 'home', label: '홈', href: '#', icon: <HomeOutlineIcon size={16} /> },
              { id: 'product', label: '제품', href: '#' },
              { id: 'electronics', label: '전자제품', href: '#' },
              { id: 'smartphone', label: '스마트폰', href: '#' },
            ]}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">긴 경로</h3>
        <div className="example-list">
          <Breadcrumbs
            items={[
              { id: 'home', label: '홈', href: '#' },
              { id: 'shop', label: '쇼핑', href: '#' },
              { id: 'category', label: '카테고리', href: '#' },
              { id: 'subcategory', label: '서브카테고리', href: '#' },
              { id: 'product', label: '제품명', href: '#' },
              { id: 'detail', label: '상세 페이지', href: '#' },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

