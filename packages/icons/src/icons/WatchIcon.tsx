/**
 * WatchIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface WatchIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const WatchIcon: React.FC<WatchIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M8.25 2.25h7.5v4.5h-7.5zm1.5 1.5v1.5h4.5v-1.5zM8.25 17.25h7.5v4.5h-7.5zm1.5 1.5v1.5h4.5v-1.5z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M9 6.75A2.25 2.25 0 0 0 6.75 9v6A2.25 2.25 0 0 0 9 17.25h6A2.25 2.25 0 0 0 17.25 15V9A2.25 2.25 0 0 0 15 6.75zM5.25 9A3.75 3.75 0 0 1 9 5.25h6A3.75 3.75 0 0 1 18.75 9v6A3.75 3.75 0 0 1 15 18.75H9A3.75 3.75 0 0 1 5.25 15z" clipRule="evenodd"/>
    </svg>
  );
};

WatchIcon.displayName = 'WatchIcon';
export default WatchIcon;
