import React from 'react';
import { Button } from '@designbasekorea/ui';
import { PlusIcon, DownloadIcon } from '@designbasekorea/icons';
import './DashboardHeader.scss';

const DashboardHeader: React.FC = () => {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header-content">
        <div>
          <h1 className="dashboard-title">대시보드</h1>
          <p className="dashboard-subtitle">
            프로젝트 현황과 주요 지표를 한눈에 확인하세요
          </p>
        </div>
        <div className="dashboard-header-actions">
          <Button variant="outline" size="medium">
            <DownloadIcon />
            내보내기
          </Button>
          <Button variant="primary" size="medium">
            <PlusIcon />
            새 프로젝트
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

