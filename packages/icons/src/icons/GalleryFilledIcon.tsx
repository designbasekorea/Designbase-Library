/**
 * GalleryFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface GalleryFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const GalleryFilledIcon: React.FC<GalleryFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M7.5 8C6.7 8 6 8.7 6 9.5S6.7 11 7.5 11 9 10.3 9 9.5 8.3 8 7.5 8"/><path fill={getColorValue()} d="M20 3H4C2.346 3 1 4.346 1 6v12c0 1.654 1.346 3 3 3h16c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3m1 9.339-4.302-3.652L4.631 19H4c-.551 0-1-.448-1-1V6c0-.551.449-1 1-1h16c.552 0 1 .449 1 1z"/>
    </svg>
  );
};

GalleryFilledIcon.displayName = 'GalleryFilledIcon';
export default GalleryFilledIcon;
