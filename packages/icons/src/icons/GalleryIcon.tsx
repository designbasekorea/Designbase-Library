/**
 * GalleryIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface GalleryIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const GalleryIcon: React.FC<GalleryIconProps> = ({
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
      <path fill={getColorValue()} d="M7.25 10.75c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5"/><path fill={getColorValue()} fillRule="evenodd" d="m16.448 8.765 5.787 4.913-.97 1.144-4.813-4.087L5.237 20.32l-.974-1.14z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M3.75 4.5c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25v-12c0-.69-.56-1.25-1.25-1.25zM1 5.75A2.75 2.75 0 0 1 3.75 3h16a2.75 2.75 0 0 1 2.75 2.75v12a2.75 2.75 0 0 1-2.75 2.75h-16A2.75 2.75 0 0 1 1 17.75z" clipRule="evenodd"/>
    </svg>
  );
};

GalleryIcon.displayName = 'GalleryIcon';
export default GalleryIcon;
