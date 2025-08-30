/**
 * HomeOutlineIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface HomeOutlineIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const HomeOutlineIcon: React.FC<HomeOutlineIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M11.22 2.22a.75.75 0 0 1 1.06 0l9 9a.75.75 0 1 1-1.06 1.06l-8.47-8.47-8.47 8.47a.75.75 0 0 1-1.06-1.06z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M4 19.75v-10h1.5v10c0 .13.04.18.055.195.016.015.065.055.195.055h12c.13 0 .18-.04.195-.055.015-.016.055-.065.055-.195v-10h1.5v10c0 .47-.16.92-.495 1.255s-.785.495-1.255.495h-12c-.47 0-.92-.16-1.255-.495S4 20.22 4 19.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.75 14.5c-.686 0-1.25.564-1.25 1.25v5H9v-5A2.756 2.756 0 0 1 11.75 13a2.756 2.756 0 0 1 2.75 2.75v5H13v-5c0-.686-.564-1.25-1.25-1.25" clipRule="evenodd"/>
    </svg>
  );
};

HomeOutlineIcon.displayName = 'HomeOutlineIcon';
export default HomeOutlineIcon;
