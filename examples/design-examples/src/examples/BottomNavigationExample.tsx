import React, { useState } from 'react';
import { BottomNavigation } from '@designbasekorea/ui';
import { HomeOutlineIcon, UserIcon, SettingsIcon, SearchIcon, HeartIcon } from '@designbasekorea/icons';

export default function BottomNavigationExample() {
  const [activeId, setActiveId] = useState('home');
  const [activeId2, setActiveId2] = useState('home');

  const basicItems = [
    {
      id: 'home',
      icon: HomeOutlineIcon,
      label: '홈',
      onClick: () => setActiveId('home'),
    },
    {
      id: 'profile',
      icon: UserIcon,
      label: '프로필',
      onClick: () => setActiveId('profile'),
    },
    {
      id: 'settings',
      icon: SettingsIcon,
      label: '설정',
      onClick: () => setActiveId('settings'),
    },
  ];

  const extendedItems = [
    {
      id: 'home',
      icon: HomeOutlineIcon,
      label: '홈',
      onClick: () => setActiveId2('home'),
    },
    {
      id: 'search',
      icon: SearchIcon,
      label: '검색',
      onClick: () => setActiveId2('search'),
    },
    {
      id: 'favorite',
      icon: HeartIcon,
      label: '찜',
      onClick: () => setActiveId2('favorite'),
    },
    {
      id: 'profile',
      icon: UserIcon,
      label: '프로필',
      onClick: () => setActiveId2('profile'),
    },
    {
      id: 'settings',
      icon: SettingsIcon,
      label: '설정',
      onClick: () => setActiveId2('settings'),
    },
  ];

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 BottomNavigation</h3>
        <div className="example-list">
          <div style={{ 
            position: 'relative', 
            height: '200px', 
            border: '1px dashed var(--db-border-base)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}>
            <BottomNavigation items={basicItems} activeItemId={activeId} fixed={false} />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">확장된 BottomNavigation</h3>
        <div className="example-list">
          <div style={{ 
            position: 'relative', 
            height: '200px', 
            border: '1px dashed var(--db-border-base)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}>
            <BottomNavigation items={extendedItems} activeItemId={activeId2} fixed={false} />
          </div>
        </div>
      </section>
    </div>
  );
}

