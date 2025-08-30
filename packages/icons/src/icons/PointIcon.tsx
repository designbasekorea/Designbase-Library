/**
 * PointIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface PointIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const PointIcon: React.FC<PointIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12a.75.75 0 0 1 1.5 0A9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12 9.75 9.75 0 0 1 12 2.25a.75.75 0 0 1 0 1.5" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25a8.25 8.25 0 0 0 0-16.5M2.25 12A9.75 9.75 0 0 1 12 2.25c5.385 0 9.75 4.365 9.75 9.75A9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M9.5 12.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M8.75 8a.75.75 0 0 1 .75-.75H13a3.25 3.25 0 0 1 0 6.5H9.5a.75.75 0 0 1-.75-.75zm1.5.75v3.5H13a1.75 1.75 0 0 0 0-3.5z" clipRule="evenodd"/>
    </svg>
  );
};

PointIcon.displayName = 'PointIcon';
export default PointIcon;
