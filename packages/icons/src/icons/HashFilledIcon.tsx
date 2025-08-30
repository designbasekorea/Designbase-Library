/**
 * HashFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface HashFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const HashFilledIcon: React.FC<HashFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M19 14h-3.47l1-4H19a1 1 0 1 0 0-2h-1.97l.939-3.757a.999.999 0 1 0-1.94-.485l-1.061 4.243h-3.94l.94-3.757a1 1 0 1 0-1.941-.485L8.966 8.002H4.997a1 1 0 0 0 0 2h3.469l-1 4H4.997a1 1 0 1 0 0 2h1.969l-.939 3.758a1 1 0 1 0 1.941.484l1.061-4.242h3.938l-.94 3.758a1 1 0 1 0 1.94.484l1.062-4.242h3.97a1 1 0 1 0 0-2zM9.53 14l1-4h3.939l-1 4z"/>
    </svg>
  );
};

HashFilledIcon.displayName = 'HashFilledIcon';
export default HashFilledIcon;
