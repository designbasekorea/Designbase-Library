/**
 * DevicesIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DevicesIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DevicesIcon: React.FC<DevicesIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M6.75 4.5a.25.25 0 0 0-.25.25v3H5v-3C5 3.784 5.784 3 6.75 3h13c.966 0 1.75.784 1.75 1.75v11a1.75 1.75 0 0 1-1.75 1.75h-9V16h9a.25.25 0 0 0 .25-.25v-11a.25.25 0 0 0-.25-.25z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M3.75 8.5a.25.25 0 0 0-.25.25v10c0 .138.112.25.25.25h6a.25.25 0 0 0 .25-.25v-10a.25.25 0 0 0-.25-.25zM2 8.75C2 7.784 2.784 7 3.75 7h6c.966 0 1.75.784 1.75 1.75v10a1.75 1.75 0 0 1-1.75 1.75h-6A1.75 1.75 0 0 1 2 18.75z" clipRule="evenodd"/>
    </svg>
  );
};

DevicesIcon.displayName = 'DevicesIcon';
export default DevicesIcon;
