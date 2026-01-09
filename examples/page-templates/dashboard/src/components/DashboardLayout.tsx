import React from 'react';
import { Navbar, Sidebar } from '@designbasekorea/ui';
import {
  HomeOutlineIcon,
  BarChartIcon,
  UsersIcon,
  SettingsIcon,
  FileBlankIcon,
  BellIcon,
} from '@designbasekorea/icons';
import './DashboardLayout.scss';

interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  sidebarOpen,
  onSidebarToggle,
}) => {
  const menuItems = [
    { id: 'home', label: '홈', icon: HomeOutlineIcon, active: true },
    { id: 'analytics', label: '분석', icon: BarChartIcon },
    { id: 'users', label: '사용자', icon: UsersIcon },
    { id: 'files', label: '파일', icon: FileBlankIcon },
    { id: 'settings', label: '설정', icon: SettingsIcon },
  ];

  return (
    <div className="dashboard-layout">
      <Navbar
        logo={<div className="navbar-logo">Designbase</div>}
        userProfile={{
          name: '사용자',
          avatar: undefined,
        }}
        userMenuItems={[
          { id: 'notifications', label: '알림', icon: BellIcon },
          { id: 'settings', label: '설정', icon: SettingsIcon },
        ]}
      />
      
      <div className="dashboard-layout-body">
        <Sidebar
          collapsed={!sidebarOpen}
          onToggle={(collapsed) => onSidebarToggle()}
          items={menuItems}
          onItemClick={(item) => console.log('Menu clicked:', item.id)}
          fixed
          fullHeight
        />
        
        <main className="dashboard-layout-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

