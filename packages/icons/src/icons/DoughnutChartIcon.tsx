/**
 * DoughnutChartIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DoughnutChartIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DoughnutChartIcon: React.FC<DoughnutChartIconProps> = ({
  size = 16,
  className,
  color,
  style,
  variant = 'primary',
  ...props
}) => {
  const styleSafe = (style && typeof style === 'object') ? style : undefined;
  const sizeValue = typeof size === 'number' ? `${size}px` : size;

  // 디자인 토큰 기반 색상 결정
  const getColorValue = () => {
    if (color) return color;
    
    const colorMap = {
      primary: 'var(--color-semantic-component-icon-primary)',
      secondary: 'var(--color-semantic-component-icon-secondary)',
      success: 'var(--color-semantic-component-icon-success)',
      warning: 'var(--color-semantic-component-icon-warning)',
      danger: 'var(--color-semantic-component-icon-danger)',
      info: 'var(--color-semantic-component-icon-info)',
      muted: 'var(--color-semantic-component-icon-muted)',
      inverse: 'var(--color-semantic-component-icon-inverse)'
    };
    
    return colorMap[variant] || colorMap.primary;
  };

  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      className={className}
      style={styleSafe}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill={getColorValue()} d="M12 4.75a7.25 7.25 0 1 0 4.68 12.787l.484.573.484.573A8.75 8.75 0 1 1 12 3.25zm6.743 1.673A8.72 8.72 0 0 1 20.75 12a8.72 8.72 0 0 1-1.85 5.382l-.592-.462-.591-.461A7.22 7.22 0 0 0 19.25 12a7.22 7.22 0 0 0-1.663-4.62zm-5.21-3.04a8.7 8.7 0 0 1 4.1 1.92l-.483.574-.483.574a7.2 7.2 0 0 0-3.395-1.59z"/>
    </svg>
  );
};

DoughnutChartIcon.displayName = 'DoughnutChartIcon';
export default DoughnutChartIcon;
