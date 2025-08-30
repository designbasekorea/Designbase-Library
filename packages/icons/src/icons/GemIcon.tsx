/**
 * GemIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface GemIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const GemIcon: React.FC<GemIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M5.414 3.531A.75.75 0 0 1 6 3.25h12a.75.75 0 0 1 .586.281l4 5a.75.75 0 0 1-.01.95l-10 12a.75.75 0 0 1-1.152 0l-10-12a.75.75 0 0 1-.01-.95zM6.36 4.75 2.968 8.99 12 19.828 21.032 8.99 17.64 4.75z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m6.357 8.614 3-5 1.286.772L7.838 9.06 12 19.05l4.162-9.989-2.805-4.675 1.286-.772 3 5a.75.75 0 0 1 .05.674l-5 12a.75.75 0 0 1-1.385 0l-5-12a.75.75 0 0 1 .049-.674" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M22 9.75H2v-1.5h20z" clipRule="evenodd"/>
    </svg>
  );
};

GemIcon.displayName = 'GemIcon';
export default GemIcon;
