/**
 * PlayCircleIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface PlayCircleIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const PlayCircleIcon: React.FC<PlayCircleIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M9.39 7.235a.75.75 0 0 1 .766.027l6 3.857a.75.75 0 0 1 0 1.262l-6 3.857A.75.75 0 0 1 9 15.607V7.893a.75.75 0 0 1 .39-.658m1.11 2.032v4.966l3.863-2.483z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M1 11.75C1 5.836 5.836 1 11.75 1S22.5 5.836 22.5 11.75 17.664 22.5 11.75 22.5 1 17.664 1 11.75M11.75 2.5c-5.086 0-9.25 4.164-9.25 9.25S6.664 21 11.75 21 21 16.836 21 11.75 16.836 2.5 11.75 2.5" clipRule="evenodd"/>
    </svg>
  );
};

PlayCircleIcon.displayName = 'PlayCircleIcon';
export default PlayCircleIcon;
