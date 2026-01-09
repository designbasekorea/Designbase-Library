import React from 'react';
import { Card, Table, Avatar, Badge } from '@designbasekorea/ui';
import { ClockIcon } from '@designbasekorea/icons';
import './RecentActivity.scss';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      user: { name: '김철수', avatar: null },
      action: '새 프로젝트 생성',
      project: '웹사이트 리뉴얼',
      time: '2분 전',
      status: 'success',
    },
    {
      id: 2,
      user: { name: '이영희', avatar: null },
      action: '파일 업로드',
      project: '디자인 시스템',
      time: '15분 전',
      status: 'info',
    },
    {
      id: 3,
      user: { name: '박민수', avatar: null },
      action: '설정 변경',
      project: '앱 프로토타입',
      time: '1시간 전',
      status: 'warning',
    },
    {
      id: 4,
      user: { name: '정수진', avatar: null },
      action: '프로젝트 완료',
      project: '모바일 앱',
      time: '3시간 전',
      status: 'success',
    },
    {
      id: 5,
      user: { name: '최동현', avatar: null },
      action: '댓글 작성',
      project: '브랜딩 가이드',
      time: '5시간 전',
      status: 'info',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'green';
      case 'warning':
        return 'orange';
      case 'info':
        return 'blue';
      default:
        return 'gray';
    }
  };

  return (
    <Card className="recent-activity">
      <div className="recent-activity-header">
        <div className="recent-activity-title">
          <ClockIcon />
          <h3>최근 활동</h3>
        </div>
        <button className="view-all-btn">전체 보기</button>
      </div>

      <div className="recent-activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <Avatar size="small" name={activity.user.name} />
            <div className="activity-content">
              <div className="activity-main">
                <span className="activity-user">{activity.user.name}</span>
                <span className="activity-action">{activity.action}</span>
                <span className="activity-project">{activity.project}</span>
              </div>
              <div className="activity-meta">
                <span className="activity-time">{activity.time}</span>
                <Badge
                  variant="subtle"
                  color={getStatusColor(activity.status)}
                  size="small"
                >
                  {activity.status}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;

