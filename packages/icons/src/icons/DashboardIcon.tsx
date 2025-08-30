/**
 * DashboardIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DashboardIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DashboardIcon: React.FC<DashboardIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M6 4.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25zM3.25 6A2.75 2.75 0 0 1 6 3.25h12A2.75 2.75 0 0 1 20.75 6v2A2.75 2.75 0 0 1 18 10.75H6A2.75 2.75 0 0 1 3.25 8zM6 14.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25zM3.25 16A2.75 2.75 0 0 1 6 13.25h3A2.75 2.75 0 0 1 11.75 16v2A2.75 2.75 0 0 1 9 20.75H6A2.75 2.75 0 0 1 3.25 18zM17 14.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25zM14.25 16A2.75 2.75 0 0 1 17 13.25h1A2.75 2.75 0 0 1 20.75 16v2A2.75 2.75 0 0 1 18 20.75h-1A2.75 2.75 0 0 1 14.25 18z" clipRule="evenodd"/>
    </svg>
  );
};

DashboardIcon.displayName = 'DashboardIcon';
export default DashboardIcon;
