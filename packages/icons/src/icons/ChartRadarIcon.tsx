/**
 * ChartRadarIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ChartRadarIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ChartRadarIcon: React.FC<ChartRadarIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="m12 1.084 10.853 7.597-3.268 13.069H4.416L1.146 8.681zM2.853 9.32 5.586 20.25h12.828l2.733-10.931L12 2.915z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m11.99 6.11 6.338 3.977-2.094 7.376H7.76l-1.873-7.375zm.016 1.78L7.605 10.76l1.321 5.204H15.1l1.478-5.204z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m1.784 9.718.431-1.436L12 11.217l9.784-2.935.431 1.436L12 12.783z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.25 2h1.5v9.743l6.842 8.797-1.184.92-7.158-9.203z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m12.592 12.46-7 9-1.184-.92 7-9z" clipRule="evenodd"/>
    </svg>
  );
};

ChartRadarIcon.displayName = 'ChartRadarIcon';
export default ChartRadarIcon;
