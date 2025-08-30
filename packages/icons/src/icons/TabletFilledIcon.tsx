/**
 * TabletFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface TabletFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const TabletFilledIcon: React.FC<TabletFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M18 1H6C4.346 1 3 2.346 3 4v16c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3m1 19a1 1 0 0 1-1 1H6c-.551 0-1-.448-1-1V4c0-.551.449-1 1-1h12c.552 0 1 .449 1 1z"/><path fill={getColorValue()} d="M12 17c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1"/>
    </svg>
  );
};

TabletFilledIcon.displayName = 'TabletFilledIcon';
export default TabletFilledIcon;
