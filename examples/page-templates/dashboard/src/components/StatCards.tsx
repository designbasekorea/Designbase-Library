import React from 'react';
import { Card, Stat } from '@designbasekorea/ui';
import {
  UsersIcon,
  TrendingUpIcon,
  MoneyIcon,
  ActivityIcon,
} from '@designbasekorea/icons';
import './StatCards.scss';

const StatCards: React.FC = () => {
  const stats = [
    {
      label: '총 사용자',
      value: '12,345',
      change: { value: 12.5, type: 'increase' as const },
      icon: <UsersIcon />,
      color: 'blue',
    },
    {
      label: '매출',
      value: '₩1,234,567',
      change: { value: 8.2, type: 'increase' as const },
      icon: <MoneyIcon />,
      color: 'green',
    },
    {
      label: '성장률',
      value: '23.4%',
      change: { value: 2.1, type: 'increase' as const },
      icon: <TrendingUpIcon />,
      color: 'purple',
    },
    {
      label: '활성 사용자',
      value: '8,901',
      change: { value: 1.2, type: 'decrease' as const },
      icon: <ActivityIcon />,
      color: 'orange',
    },
  ];

  return (
    <div className="stat-cards">
      {stats.map((stat, index) => (
        <Card key={index} className="stat-card">
          <div className="stat-card-content">
            <div className="stat-card-icon" data-color={stat.color}>
              {stat.icon}
            </div>
            <div className="stat-card-info">
              <Stat
                label={stat.label}
                value={stat.value}
                change={stat.change}
                showChange={true}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatCards;

