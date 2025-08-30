/**
 * WonIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface WonIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const WonIcon: React.FC<WonIconProps> = ({
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
      <path fill={getColorValue()} d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75A9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12 9.75 9.75 0 0 1 12 2.25m0 1.5A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25a8.25 8.25 0 0 0 0-16.5m-.042 4.5a.75.75 0 0 1 .705.482l1.581 4.147.425-1.134q.009-.027.02-.053l1.109-2.956a.75.75 0 0 1 1.404.528l-.745 1.986h.915a.75.75 0 0 1 0 1.5h-1.477l-.943 2.514a.75.75 0 0 1-1.403.004l-1.575-4.131-1.52 4.123a.75.75 0 0 1-1.357.108l-.05-.104-.942-2.514H6.611a.75.75 0 0 1 0-1.5h.932l-.745-1.986-.024-.074a.75.75 0 0 1 1.398-.524l.03.07 1.541 4.11 1.515-4.106.049-.104a.75.75 0 0 1 .651-.386"/>
    </svg>
  );
};

WonIcon.displayName = 'WonIcon';
export default WonIcon;
