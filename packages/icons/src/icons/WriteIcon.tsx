/**
 * WriteIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface WriteIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const WriteIcon: React.FC<WriteIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M2.806 5.806A2.75 2.75 0 0 1 4.75 5h3v1.5h-3A1.25 1.25 0 0 0 3.5 7.75v11A1.25 1.25 0 0 0 4.75 20h11A1.25 1.25 0 0 0 17 18.75v-3h1.5v3a2.75 2.75 0 0 1-2.75 2.75h-11A2.75 2.75 0 0 1 2 18.75v-11c0-.73.29-1.429.806-1.944" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M16.635 2.834a2.85 2.85 0 0 1 4.03 4.03L11.062 16.5H7v-4.061zm2.015.666a1.35 1.35 0 0 0-.955.395L8.5 13.061V15h1.939l9.166-9.195A1.35 1.35 0 0 0 18.65 3.5" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m18.22 8.28-3-3 1.06-1.06 3 3z" clipRule="evenodd"/>
    </svg>
  );
};

WriteIcon.displayName = 'WriteIcon';
export default WriteIcon;
