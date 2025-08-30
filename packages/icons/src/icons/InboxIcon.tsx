/**
 * InboxIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface InboxIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const InboxIcon: React.FC<InboxIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M1.25 13a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .53.22l2.78 2.78h5.38l2.78-2.78a.75.75 0 0 1 .53-.22h4a.75.75 0 0 1 0 1.5h-3.69l-2.78 2.78a.75.75 0 0 1-.53.22H9a.75.75 0 0 1-.53-.22l-2.78-2.78H2a.75.75 0 0 1-.75-.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M3.268 3.837A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .732.587l2 9a.8.8 0 0 1 .018.163v7a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-7a.8.8 0 0 1 .018-.163zm1.334.913L2.75 13.082v6.168h18.5v-6.168L19.398 4.75z" clipRule="evenodd"/>
    </svg>
  );
};

InboxIcon.displayName = 'InboxIcon';
export default InboxIcon;
