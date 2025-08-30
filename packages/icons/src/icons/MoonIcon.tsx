/**
 * MoonIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MoonIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MoonIcon: React.FC<MoonIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M11.67 2.763a.75.75 0 0 1-.11.835c-.191.216-.414.406-.59.555l-.126.108a2.6 2.6 0 0 0-.512.568C10.043 5.28 9.75 6.113 9.75 8A6.207 6.207 0 0 0 16 14.25c1.706 0 3.214-.624 4.37-1.78a.75.75 0 0 1 1.277.596c-.433 4.878-4.25 8.684-9.647 8.684-5.435 0-9.75-4.757-9.75-9.75 0-4.976 3.784-9.211 8.684-9.647a.75.75 0 0 1 .736.41m-2.8 1.61C5.872 5.57 3.75 8.568 3.75 12c0 4.208 3.685 8.25 8.25 8.25 3.885 0 6.76-2.276 7.782-5.466-1.128.634-2.412.966-3.782.966A7.707 7.707 0 0 1 8.25 8c0-1.736.228-2.843.62-3.627" clipRule="evenodd"/>
    </svg>
  );
};

MoonIcon.displayName = 'MoonIcon';
export default MoonIcon;
