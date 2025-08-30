/**
 * CustomerSupportFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CustomerSupportFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CustomerSupportFilledIcon: React.FC<CustomerSupportFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M13.207 13.891c-.005.006-.49.609-1.207.609-.704 0-1.185-.582-1.207-.608A1 1 0 0 0 9.199 15.1c.107.144 1.099 1.4 2.8 1.4s2.692-1.257 2.8-1.4a.995.995 0 0 0-.193-1.387 1.007 1.007 0 0 0-1.399.178M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill={getColorValue()} d="M21 10.191V10c0-4.962-4.037-9-9-9s-9 4.038-9 9v.184A3 3 0 0 0 1 13v4c0 1.654 1.346 3 3 3s3-1.346 3-3v-4a3 3 0 0 0-2-2.816V10c0-3.794 3.206-7 7-7s7 3.206 7 7v.191c-1.174.435-2 1.604-2 3.031v3.557c0 .537.128 1.031.335 1.472L15.586 20h-.864c-.347-.595-.985-1-1.722-1h-2c-1.103 0-2 .897-2 2s.897 2 2 2h2c.737 0 1.375-.405 1.722-1H16c.266 0 .52-.105.707-.293l2.014-2.014c.387.192.817.307 1.279.307 1.683 0 3-1.415 3-3.222v-3.557c0-1.426-.826-2.596-2-3.031z"/>
    </svg>
  );
};

CustomerSupportFilledIcon.displayName = 'CustomerSupportFilledIcon';
export default CustomerSupportFilledIcon;
