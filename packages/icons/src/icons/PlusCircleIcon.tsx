/**
 * PlusCircleIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface PlusCircleIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const PlusCircleIcon: React.FC<PlusCircleIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M1 11.75C1 5.836 5.836 1 11.75 1S22.5 5.836 22.5 11.75 17.664 22.5 11.75 22.5 1 17.664 1 11.75M11.75 2.5c-5.086 0-9.25 4.164-9.25 9.25S6.664 21 11.75 21 21 16.836 21 11.75 16.836 2.5 11.75 2.5" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11 15.75v-8h1.5v8z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M7.75 11h8v1.5h-8z" clipRule="evenodd"/>
    </svg>
  );
};

PlusCircleIcon.displayName = 'PlusCircleIcon';
export default PlusCircleIcon;
