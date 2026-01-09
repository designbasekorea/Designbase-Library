import React from 'react';
import { Card } from '@designbasekorea/ui';
import { BarChartIcon } from '@designbasekorea/icons';
import './ChartSection.scss';

const ChartSection: React.FC = () => {
  // 실제 차트 라이브러리를 사용할 수 있지만, 여기서는 예시로 간단한 플레이스홀더
  const chartData = [
    { month: '1월', value: 65 },
    { month: '2월', value: 78 },
    { month: '3월', value: 90 },
    { month: '4월', value: 85 },
    { month: '5월', value: 95 },
    { month: '6월', value: 100 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <Card className="chart-section">
      <div className="chart-section-header">
        <div className="chart-section-title">
          <BarChartIcon />
          <h3>월별 성장 추이</h3>
        </div>
        <div className="chart-section-actions">
          <button className="chart-action-btn">전체</button>
          <button className="chart-action-btn">6개월</button>
          <button className="chart-action-btn active">3개월</button>
        </div>
      </div>
      
      <div className="chart-section-content">
        <div className="chart-bars">
          {chartData.map((item, index) => (
            <div key={index} className="chart-bar-item">
              <div className="chart-bar-wrapper">
                <div
                  className="chart-bar"
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                />
              </div>
              <div className="chart-bar-label">{item.month}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ChartSection;

