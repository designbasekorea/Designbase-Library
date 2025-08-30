/**
 * LockIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface LockIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const LockIcon: React.FC<LockIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M4.75 11.5a.25.25 0 0 0-.25.25v8c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-8a.25.25 0 0 0-.25-.25zM3 11.75c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-14A1.75 1.75 0 0 1 3 19.75z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.75 3.5A3.26 3.26 0 0 0 8.5 6.75v4H7v-4A4.76 4.76 0 0 1 11.75 2a4.76 4.76 0 0 1 4.75 4.75v4H15v-4a3.26 3.26 0 0 0-3.25-3.25" clipRule="evenodd"/>
    </svg>
  );
};

LockIcon.displayName = 'LockIcon';
export default LockIcon;
