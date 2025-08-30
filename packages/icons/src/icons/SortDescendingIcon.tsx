/**
 * SortDescendingIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface SortDescendingIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const SortDescendingIcon: React.FC<SortDescendingIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M5.2 4.75a.45.45 0 0 0-.45.45v3.6c0 .249.201.45.45.45h3.6a.45.45 0 0 0 .45-.45V5.2a.45.45 0 0 0-.45-.45zm-1.95.45A1.95 1.95 0 0 1 5.2 3.25h3.6a1.95 1.95 0 0 1 1.95 1.95v3.6a1.95 1.95 0 0 1-1.95 1.95H5.2A1.95 1.95 0 0 1 3.25 8.8zM5.2 14.75a.45.45 0 0 0-.45.45v3.6c0 .249.201.45.45.45h3.6a.45.45 0 0 0 .45-.45v-3.6a.45.45 0 0 0-.45-.45zm-1.95.45a1.95 1.95 0 0 1 1.95-1.95h3.6a1.95 1.95 0 0 1 1.95 1.95v3.6a1.95 1.95 0 0 1-1.95 1.95H5.2a1.95 1.95 0 0 1-1.95-1.95zM12.47 15.53l1.06-1.06L17 17.94l3.47-3.47 1.06 1.06L17 20.06z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M17.75 3v16h-1.5V3z" clipRule="evenodd"/>
    </svg>
  );
};

SortDescendingIcon.displayName = 'SortDescendingIcon';
export default SortDescendingIcon;
