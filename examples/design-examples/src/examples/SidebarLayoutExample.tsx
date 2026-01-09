import React from 'react';
import { Sidebar } from '@designbasekorea/ui';
import { HomeOutlineIcon, UserIcon, SettingsIcon } from '@designbasekorea/icons';

export default function SidebarLayoutExample() {
  const items = [
    { id: 'home', label: '홈', icon: HomeOutlineIcon },
    { id: 'profile', label: '프로필', icon: UserIcon },
    { id: 'settings', label: '설정', icon: SettingsIcon },
  ];

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Sidebar (Layout)
        </h2>
        <div style={{ display: 'flex', height: '400px', border: '1px solid var(--db-border-base)' }}>
          <Sidebar items={items} />
          <div style={{ flex: 1, padding: '20px' }}>메인 컨텐츠</div>
        </div>
      </section>
    </div>
  );
}

