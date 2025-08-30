/**
 * TabletIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface TabletIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const TabletIcon: React.FC<TabletIconProps> = ({
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
      <path fill={getColorValue()} d="M12 19c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1"/><path fill={getColorValue()} fillRule="evenodd" d="M6 2.75c-.69 0-1.25.56-1.25 1.25v16c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V4c0-.69-.56-1.25-1.25-1.25zM3.25 4A2.75 2.75 0 0 1 6 1.25h12A2.75 2.75 0 0 1 20.75 4v16A2.75 2.75 0 0 1 18 22.75H6A2.75 2.75 0 0 1 3.25 20z" clipRule="evenodd"/>
    </svg>
  );
};

TabletIcon.displayName = 'TabletIcon';
export default TabletIcon;
