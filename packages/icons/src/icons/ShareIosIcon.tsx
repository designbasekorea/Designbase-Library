/**
 * ShareIosIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ShareIosIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ShareIosIcon: React.FC<ShareIosIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M4.495 10.495C4.829 10.16 5.28 10 5.75 10h2v1.5h-2c-.13 0-.18.04-.195.055-.015.016-.055.065-.055.195v8c0 .13.04.18.055.195.016.015.065.055.195.055h12c.13 0 .18-.04.195-.055.015-.016.055-.065.055-.195v-8c0-.13-.04-.18-.055-.195-.016-.015-.065-.055-.195-.055h-2V10h2c.47 0 .92.16 1.255.495s.495.785.495 1.255v8c0 .47-.16.92-.495 1.255s-.785.495-1.255.495h-12c-.47 0-.92-.16-1.255-.495S4 20.22 4 19.75v-8c0-.47.16-.92.495-1.255" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M12.5 2.75v12H11v-12z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.22 2.22a.75.75 0 0 1 1.06 0l4 4-1.06 1.06-3.47-3.47-3.47 3.47-1.06-1.06z" clipRule="evenodd"/>
    </svg>
  );
};

ShareIosIcon.displayName = 'ShareIosIcon';
export default ShareIosIcon;
