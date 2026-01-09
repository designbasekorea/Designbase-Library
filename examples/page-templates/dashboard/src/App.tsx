import React, { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import DashboardHeader from './components/DashboardHeader';
import StatCards from './components/StatCards';
import RecentActivity from './components/RecentActivity';
import ChartSection from './components/ChartSection';
import QuickActions from './components/QuickActions';
import './App.scss';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <DashboardLayout
      sidebarOpen={sidebarOpen}
      onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
    >
      <div className="dashboard-page">
        <DashboardHeader />
        
        <div className="dashboard-content">
          <StatCards />
          
          <div className="dashboard-grid">
            <div className="dashboard-grid-main">
              <ChartSection />
              <RecentActivity />
            </div>
            <div className="dashboard-grid-sidebar">
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;

