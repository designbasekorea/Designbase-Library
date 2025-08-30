/**
 * AuthenticationFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface AuthenticationFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const AuthenticationFilledIcon: React.FC<AuthenticationFilledIconProps> = ({
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
      <path fill={getColorValue()} d="m18.728 2.652-5.999-1.5a3 3 0 0 0-1.457 0l-6 1.5A2.996 2.996 0 0 0 3 5.562V15c0 .94.449 1.836 1.2 2.4l6 4.5a3 3 0 0 0 1.8.595c.635 0 1.271-.198 1.8-.596l6-4.5A3.01 3.01 0 0 0 21 15V5.562a2.996 2.996 0 0 0-2.272-2.91m-5.614 8.01.553 2.082a1 1 0 0 1-.966 1.257H11.28a1 1 0 0 1-.971-1.24l.53-2.137A2 2 0 0 1 10 9.001a2.003 2.003 0 0 1 2.447-1.952 1.99 1.99 0 0 1 1.481 1.405 2.01 2.01 0 0 1-.814 2.208"/>
    </svg>
  );
};

AuthenticationFilledIcon.displayName = 'AuthenticationFilledIcon';
export default AuthenticationFilledIcon;
