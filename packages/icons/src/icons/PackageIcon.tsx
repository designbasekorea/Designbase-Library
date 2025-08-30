/**
 * PackageIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface PackageIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const PackageIcon: React.FC<PackageIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="m12 1.14 9.65 5.421v9.778l-9.646 5.42-9.654-5.316V6.561zM3.85 7.439v8.118l8.146 4.485 8.154-4.581V7.439L12 2.86z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m21.267 7.754-8.9 5-.734-1.308 8.9-5z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.25 21v-8.9h1.5V21z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m3.473 6.35 8.9 5.1-.746 1.3-8.9-5.1z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m7.233 8.846 8.9-5 .734 1.308-8.9 5z" clipRule="evenodd"/>
    </svg>
  );
};

PackageIcon.displayName = 'PackageIcon';
export default PackageIcon;
