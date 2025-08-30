/**
 * DiscountIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DiscountIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DiscountIcon: React.FC<DiscountIconProps> = ({
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
      <path fill={getColorValue()} d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill={getColorValue()} fillRule="evenodd" d="M1.25 12C1.25 6.086 6.086 1.25 12 1.25S22.75 6.086 22.75 12 17.914 22.75 12 22.75 1.25 17.914 1.25 12M12 2.75c-5.086 0-9.25 4.164-9.25 9.25s4.164 9.25 9.25 9.25 9.25-4.164 9.25-9.25S17.086 2.75 12 2.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m16.53 8.53-8 8-1.06-1.06 8-8z" clipRule="evenodd"/>
    </svg>
  );
};

DiscountIcon.displayName = 'DiscountIcon';
export default DiscountIcon;
