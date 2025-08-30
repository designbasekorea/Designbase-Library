/**
 * WalletFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface WalletFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const WalletFilledIcon: React.FC<WalletFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M21.5 11h-1v-1a3 3 0 0 0-2-2.816V6c0-1.654-1.346-3-3-3h-11c-1.654 0-3 1.346-3 3v12c0 1.654 1.256 3 2.8 3h13.4c1.544 0 2.8-1.346 2.8-3v-1h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-17-6h11c.552 0 1 .449 1 1v1h-12c-.551 0-1-.449-1-1s.449-1 1-1m16 10h-4a1 1 0 0 1 0-2h4z"/>
    </svg>
  );
};

WalletFilledIcon.displayName = 'WalletFilledIcon';
export default WalletFilledIcon;
