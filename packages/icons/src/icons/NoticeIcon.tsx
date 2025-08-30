/**
 * NoticeIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface NoticeIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const NoticeIcon: React.FC<NoticeIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M5 14h5.5v5.75c0 .47-.16.92-.495 1.255s-.785.495-1.255.495h-2c-.47 0-.92-.16-1.255-.495S5 20.22 5 19.75zm1.5 1.5v4.25c0 .13.04.18.055.195.016.015.065.055.195.055h2c.13 0 .18-.04.195-.055.015-.016.055-.065.055-.195V15.5z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M18.126 2.101a.75.75 0 0 1 .374.649v16a.75.75 0 0 1-1.122.651L10.55 15.5H2.75a.75.75 0 0 1-.75-.75v-8A.75.75 0 0 1 2.75 6h7.8l6.828-3.901a.75.75 0 0 1 .748.002M17 4.042l-5.878 3.36a.75.75 0 0 1-.372.098H3.5V14h7.25a.75.75 0 0 1 .372.099L17 17.458z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M20 10.75c0-1.286-.964-2.25-2.25-2.25V7c2.114 0 3.75 1.636 3.75 3.75s-1.636 3.75-3.75 3.75V13c1.286 0 2.25-.964 2.25-2.25" clipRule="evenodd"/>
    </svg>
  );
};

NoticeIcon.displayName = 'NoticeIcon';
export default NoticeIcon;
