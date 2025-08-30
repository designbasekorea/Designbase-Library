/**
 * MoneyFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MoneyFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MoneyFilledIcon: React.FC<MoneyFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M20 5H4C2.346 5 1 6.346 1 8v8c0 1.654 1.346 3 3 3h16c1.654 0 3-1.346 3-3V8c0-1.654-1.346-3-3-3M7 13H5v-2h2zm5 3c-2.243 0-4-1.757-4-4s1.757-4 4-4 4 1.757 4 4-1.757 4-4 4m7-3h-2v-2h2z"/><path fill={getColorValue()} d="M12 10c-1.14 0-2 .86-2 2s.86 2 2 2 2-.859 2-2-.859-2-2-2"/>
    </svg>
  );
};

MoneyFilledIcon.displayName = 'MoneyFilledIcon';
export default MoneyFilledIcon;
