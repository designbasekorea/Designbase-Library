import React, { useState } from 'react';
import { MenuItem } from '@designbasekorea/ui';
import { HomeOutlineIcon, UserIcon, SettingsIcon, SearchIcon, HeartIcon } from '@designbasekorea/icons';

export default function MenuItemExample() {
  const [activeId, setActiveId] = useState('home');

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 MenuItem</h3>
        <div className="example-list">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
            <MenuItem 
              id="home" 
              label="홈" 
              icon={HomeOutlineIcon}
              active={activeId === 'home'}
              onClick={() => setActiveId('home')}
            />
            <MenuItem 
              id="search" 
              label="검색" 
              icon={SearchIcon}
              active={activeId === 'search'}
              onClick={() => setActiveId('search')}
            />
            <MenuItem 
              id="favorite" 
              label="찜" 
              icon={HeartIcon}
              active={activeId === 'favorite'}
              onClick={() => setActiveId('favorite')}
            />
            <MenuItem 
              id="profile" 
              label="프로필" 
              icon={UserIcon}
              active={activeId === 'profile'}
              onClick={() => setActiveId('profile')}
            />
            <MenuItem 
              id="settings" 
              label="설정" 
              icon={SettingsIcon}
              active={activeId === 'settings'}
              onClick={() => setActiveId('settings')}
            />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
            <MenuItem id="home-s" label="Small" icon={HomeOutlineIcon} size="s" />
            <MenuItem id="home-m" label="Medium" icon={HomeOutlineIcon} size="m" />
            <MenuItem id="home-l" label="Large" icon={HomeOutlineIcon} size="l" />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <MenuItem id="default" label="기본 메뉴" icon={HomeOutlineIcon} />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Active</div>
            <div className="example-state-item__content">
              <MenuItem id="active" label="활성 메뉴" icon={HomeOutlineIcon} active />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <MenuItem id="disabled" label="비활성 메뉴" icon={HomeOutlineIcon} disabled />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">With Badge</div>
            <div className="example-state-item__content">
              <MenuItem id="badge" label="알림" icon={SettingsIcon} badge={5} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

