/**
 * WalletIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface WalletIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const WalletIcon: React.FC<WalletIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75.75c0 .765.54 1.25 1.05 1.25H18A2.756 2.756 0 0 1 20.75 10v2a.75.75 0 0 1-1.5 0v-2c0-.686-.564-1.25-1.25-1.25H4.8a2.4 2.4 0 0 1-1.05-.239V18c0 .765.54 1.25 1.05 1.25h13.4c.51 0 1.05-.485 1.05-1.25v-2a.75.75 0 0 1 1.5 0v2c0 1.435-1.06 2.75-2.55 2.75H4.8c-1.49 0-2.55-1.315-2.55-2.75V6A.75.75 0 0 1 3 5.25" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M5 4.75c-.686 0-1.25.564-1.25 1.25S4.314 7.25 5 7.25h12.25V6c0-.686-.564-1.25-1.25-1.25zM2.25 6A2.756 2.756 0 0 1 5 3.25h11A2.756 2.756 0 0 1 18.75 6v2a.75.75 0 0 1-.75.75H5A2.756 2.756 0 0 1 2.25 6M17 12.75c-.686 0-1.25.564-1.25 1.25s.564 1.25 1.25 1.25h4.25v-2.5zM14.25 14A2.756 2.756 0 0 1 17 11.25h5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-5A2.756 2.756 0 0 1 14.25 14" clipRule="evenodd"/>
    </svg>
  );
};

WalletIcon.displayName = 'WalletIcon';
export default WalletIcon;
