/**
 * BulbIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface BulbIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const BulbIcon: React.FC<BulbIconProps> = ({
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
      <path fill={getColorValue()} d="M15.5 17.5H8v-.75s-.02-1.79-1.06-3.21l-.29-.39C5.88 12.12 5 10.95 5 8.93 5 5.11 8.03 2 11.75 2s6.75 3.11 6.75 6.93c0 2-.87 3.17-1.65 4.2l-.29.39c-1.05 1.45-1.06 3.21-1.06 3.23zM9.44 16h4.62c.11-.81.42-2.16 1.29-3.36l.31-.41c.69-.93 1.35-1.8 1.35-3.31 0-2.99-2.36-5.43-5.25-5.43S6.5 5.93 6.5 8.93c0 1.52.66 2.4 1.35 3.32l.31.41c.86 1.19 1.17 2.53 1.28 3.34M15.75 20h-8v1.5h8z"/>
    </svg>
  );
};

BulbIcon.displayName = 'BulbIcon';
export default BulbIcon;
