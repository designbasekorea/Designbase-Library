/**
 * DoughnutChartFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DoughnutChartFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DoughnutChartFilledIcon: React.FC<DoughnutChartFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M12 5.5A6.51 6.51 0 0 0 5.5 12c0 3.584 2.916 6.5 6.5 6.5a6.5 6.5 0 0 0 4.195-1.535l1.938 2.29A9.52 9.52 0 0 1 12 21.5c-5.238 0-9.5-4.262-9.5-9.5S6.762 2.5 12 2.5zm7.32.444A9.52 9.52 0 0 1 21.5 12c0 2.14-.696 4.16-2.01 5.844l-2.364-1.848A6.43 6.43 0 0 0 18.499 12c0-1.51-.53-2.98-1.49-4.143zm-5.657-3.298a9.5 9.5 0 0 1 4.452 2.083l-1.93 2.297A6.5 6.5 0 0 0 13.143 5.6z"/>
    </svg>
  );
};

DoughnutChartFilledIcon.displayName = 'DoughnutChartFilledIcon';
export default DoughnutChartFilledIcon;
