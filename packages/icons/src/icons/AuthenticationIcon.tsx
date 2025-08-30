/**
 * AuthenticationIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface AuthenticationIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const AuthenticationIcon: React.FC<AuthenticationIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="m12.668 1.395 5.999 1.5a2.75 2.75 0 0 1 2.083 2.667V15c0 .866-.407 1.68-1.1 2.2l-6 4.5a2.75 2.75 0 0 1-3.3 0l-6-4.5a2.75 2.75 0 0 1-1.1-2.2V5.562c0-1.262.86-2.361 2.083-2.668l5.999-1.5c.438-.11.898-.11 1.336 0m-.366 1.454a1.24 1.24 0 0 0-.604 0l-6 1.5c-.558.14-.948.64-.948 1.213V15c0 .394.185.764.5 1l6 4.5a1.25 1.25 0 0 0 1.5 0l6-4.5c.315-.236.5-.606.5-1V5.562a1.25 1.25 0 0 0-.947-1.212z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M12.605 6.316A2.753 2.753 0 0 0 9.25 9Zm-.317 1.466A1.253 1.253 0 0 0 10.75 9c0 .414.205.783.526 1.013l.413.297-.652 2.63a.25.25 0 0 0 .243.31h1.421a.25.25 0 0 0 .241-.314l-.69-2.6.444-.298c.42-.282.662-.809.507-1.393m-.598-2.33c.976.21 1.79.972 2.048 1.945a2.76 2.76 0 0 1-.692 2.668l.43 1.622a1.75 1.75 0 0 1-1.69 2.2H11.28a1.75 1.75 0 0 1-1.699-2.172l.42-1.695A2.73 2.73 0 0 1 9.25 9m3.038-1.22c.434.094.803.445.915.865Z" clipRule="evenodd"/>
    </svg>
  );
};

AuthenticationIcon.displayName = 'AuthenticationIcon';
export default AuthenticationIcon;
