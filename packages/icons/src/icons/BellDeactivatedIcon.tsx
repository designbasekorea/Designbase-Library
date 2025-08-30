/**
 * BellDeactivatedIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface BellDeactivatedIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const BellDeactivatedIcon: React.FC<BellDeactivatedIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M12 4.75a4.8 4.8 0 0 0-2.9.947.75.75 0 0 1-.89-1.208A6.3 6.3 0 0 1 12 3.25c2.118 0 3.784.975 4.922 2.29 1.125 1.3 1.759 2.96 1.827 4.425l.001.035v3a.75.75 0 0 1-1.5 0v-2.982c-.056-1.117-.556-2.45-1.462-3.497C14.889 5.482 13.617 4.75 12 4.75M6.774 7.222a.75.75 0 0 1 .406.98 5.6 5.6 0 0 0-.43 1.816V13c0 1.445-.466 2.453-1.06 3.25h9.887a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.53-1.28c.992-.992 1.78-1.8 1.78-3.47V9.965c.036-.76.223-1.563.544-2.337a.75.75 0 0 1 .98-.406" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M9 16.25a.75.75 0 0 1 .75.75v1a2.25 2.25 0 1 0 4.5 0v-1a.75.75 0 1 1 1.5 0v1a3.75 3.75 0 1 1-7.5 0v-1a.75.75 0 0 1 .75-.75M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m1.759 4.241 1.06-1.06 18 18-1.06 1.06z" clipRule="evenodd"/>
    </svg>
  );
};

BellDeactivatedIcon.displayName = 'BellDeactivatedIcon';
export default BellDeactivatedIcon;
