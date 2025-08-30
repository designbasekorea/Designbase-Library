/**
 * BellIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface BellIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const BellIcon: React.FC<BellIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M6.5 10.768v2.982c0 1.445-.466 2.453-1.06 3.25h12.62c-.594-.797-1.06-1.805-1.06-3.25v-2.982c-.057-1.117-.556-2.45-1.462-3.497C14.639 6.232 13.366 5.5 11.75 5.5s-2.889.732-3.788 1.771c-.906 1.048-1.405 2.38-1.462 3.497m.328-4.478C7.966 4.975 9.632 4 11.75 4s3.784.975 4.922 2.29c1.125 1.3 1.759 2.96 1.827 4.425l.001.035v3c0 1.67.788 2.477 1.78 3.47a.75.75 0 0 1-.53 1.28h-16a.75.75 0 0 1-.53-1.28c.992-.992 1.78-1.8 1.78-3.47v-3.035c.07-1.466.703-3.125 1.828-4.425" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M8.75 17a.75.75 0 0 1 .75.75v1a2.25 2.25 0 1 0 4.5 0v-1a.75.75 0 0 1 1.5 0v1a3.75 3.75 0 1 1-7.5 0v-1a.75.75 0 0 1 .75-.75M11.75 2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clipRule="evenodd"/>
    </svg>
  );
};

BellIcon.displayName = 'BellIcon';
export default BellIcon;
