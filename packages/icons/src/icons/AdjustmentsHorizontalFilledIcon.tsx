/**
 * AdjustmentsHorizontalFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface AdjustmentsHorizontalFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const AdjustmentsHorizontalFilledIcon: React.FC<AdjustmentsHorizontalFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M14 9c1.654 0 3-1.346 3-3s-1.346-3-3-3a3 3 0 0 0-2.816 2H3v2h8.184A3 3 0 0 0 14 9M21 5h-3v2h3zM8 15c1.654 0 3-1.346 3-3S9.654 9 8 9a3 3 0 0 0-2.816 2H3v2h2.184A3 3 0 0 0 8 15M21 11h-9v2h9zM17 15c-1.654 0-3 1.346-3 3s1.346 3 3 3a3 3 0 0 0 2.816-2H21v-2h-1.184A3 3 0 0 0 17 15M13 17H3v2h10z"/>
    </svg>
  );
};

AdjustmentsHorizontalFilledIcon.displayName = 'AdjustmentsHorizontalFilledIcon';
export default AdjustmentsHorizontalFilledIcon;
