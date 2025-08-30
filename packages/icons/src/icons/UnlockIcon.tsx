/**
 * UnlockIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface UnlockIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const UnlockIcon: React.FC<UnlockIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M5 11.75a.25.25 0 0 0-.25.25v8c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-8a.25.25 0 0 0-.25-.25zM3.25 12c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v8A1.75 1.75 0 0 1 19 21.75H5A1.75 1.75 0 0 1 3.25 20z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M12 3.75A3.26 3.26 0 0 0 8.75 7v4h-1.5V7A4.76 4.76 0 0 1 12 2.25 4.76 4.76 0 0 1 16.75 7v1h-1.5V7A3.26 3.26 0 0 0 12 3.75" clipRule="evenodd"/>
    </svg>
  );
};

UnlockIcon.displayName = 'UnlockIcon';
export default UnlockIcon;
