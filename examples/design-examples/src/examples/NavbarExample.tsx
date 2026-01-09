import React from 'react';
import { Navbar } from '@designbasekorea/ui';

export default function NavbarExample() {
  const mainItems = [
    { id: 'home', label: '홈', href: '#' },
    { id: 'products', label: '제품', href: '#' },
    { id: 'about', label: '회사소개', href: '#' },
    { id: 'contact', label: '문의하기', href: '#' },
  ];

  const simpleItems = [
    { id: 'home', label: '홈', href: '#' },
    { id: 'profile', label: '프로필', href: '#' },
    { id: 'settings', label: '설정', href: '#' },
  ];

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Navbar</h3>
        <div className="example-list">
          <Navbar items={mainItems} />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">간단한 Navbar</h3>
        <div className="example-list">
          <Navbar items={simpleItems} />
        </div>
      </section>
    </div>
  );
}

